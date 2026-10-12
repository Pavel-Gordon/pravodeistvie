export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export type SendChannel = 'formspree' | 'telegram' | 'none';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

/** Какой канал доставки заявок настроен. */
export function getSendChannel(): SendChannel {
  if (FORMSPREE_ENDPOINT) return 'formspree';
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) return 'telegram';
  return 'none';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Отправляет заявку в настроенный канал.
 * Бросает ошибку, если отправка не удалась или канал не сконфигурирован.
 */
export async function sendLead(payload: LeadPayload): Promise<void> {
  const channel = getSendChannel();

  if (channel === 'formspree') {
    const response = await fetch(FORMSPREE_ENDPOINT as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Formspree вернул статус ${response.status}`);
    }
    return;
  }

  if (channel === 'telegram') {
    const text = [
      '<b>Новая заявка с сайта</b>',
      `<b>Имя:</b> ${escapeHtml(payload.name)}`,
      `<b>Телефон:</b> ${escapeHtml(payload.phone)}`,
      payload.email ? `<b>Email:</b> ${escapeHtml(payload.email)}` : null,
      `<b>Вопрос:</b> ${escapeHtml(payload.message)}`,
    ]
      .filter(Boolean)
      .join('\n');

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      },
    );
    if (!response.ok) {
      throw new Error(`Telegram вернул статус ${response.status}`);
    }
    return;
  }

  throw new Error('not-configured');
}
