/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly TENDERDUTY_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}