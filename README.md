# SCHMITT Landing Page

Landing page institucional em React + Vite, pronta para deploy na Vercel.

## Requisitos

- Node.js 20+
- npm 10+

## Configuração local

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Crie o arquivo de ambiente:
   ```bash
   cp .env.example .env.local
   ```
3. Ajuste `VITE_SITE_URL` em `.env.local` com a URL pública final.

## Executar localmente

```bash
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy na Vercel (Dashboard)

1. Envie este projeto para um repositório Git (GitHub/GitLab/Bitbucket).
2. Na Vercel, clique em **Add New Project** e importe o repositório.
3. Confirme os parâmetros:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Em **Environment Variables**, adicione:
   - `VITE_SITE_URL` = URL final do site (ex.: `https://seu-dominio.com.br`)
5. Clique em **Deploy**.

## Deploy na Vercel (CLI)

```bash
npm i -g vercel
vercel
vercel --prod
```

## Observações

- A configuração de deploy está em `vercel.json`.
- O canonical e o `url` do JSON-LD usam `VITE_SITE_URL` com fallback automático para o domínio atual.
