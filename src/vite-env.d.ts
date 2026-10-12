/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree endpoint, напр. https://formspree.io/f/xxxxxxxx */
  readonly VITE_FORMSPREE_ENDPOINT?: string;
  /** Токен Telegram-бота (только если используется вариант с Telegram) */
  readonly VITE_TELEGRAM_BOT_TOKEN?: string;
  /** ID чата, куда присылать заявки */
  readonly VITE_TELEGRAM_CHAT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
