/// <reference types="vite/client" />

declare module 'react-dom/client' {
  export * from 'react-dom/client';
}

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_FORMSPREE_CONTACT_KEY: string;
  readonly VITE_FORMSPREE_APPLY_KEY: string;
  readonly VITE_FORMSPREE_NEWSLETTER_KEY: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}