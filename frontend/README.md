# Frontend — Task Manager (Vite + React + TypeScript)

Breve descrição: interface web para visualização e gerenciamento de tarefas.

## Pré-requisitos
- Node.js 16+ (recomendado 18+)
- npm ou pnpm

## Instalação
```bash
cd frontend
npm install
# ou: pnpm install
```

## Execução (desenvolvimento)
```bash
cd frontend
npm run dev
```

## Build para produção
```bash
npm run build
# e servir o diretório `dist/` com um servidor estático
```

## Variáveis / Configurações
- Ver `vite.config.ts` e `src/` para pontos de configuração (API base URL, chaves públicas, etc.).

## Estrutura relevante
- `src/` — código fonte (components, pages, layouts)
- `public/` — assets públicos
- `package.json` — scripts e dependências

## Rotas e páginas principais
- `/auth/login` — login
- `/auth/register` — cadastro
- `/log/dashboard` — painel principal
- `/log/tasks` — lista/gerenciamento de tarefas

