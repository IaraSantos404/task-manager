# Task Manager

Visão geral do repositório "Task Manager" — aplicação com backend em Python e frontend em TypeScript/Vite.

## Estrutura
- `backend/` — API em Python (FastAPI/Flask-style). Contém lógica do servidor, modelos e rotas.
- `frontend/` — aplicação web (Vite + React/TS). Contém UI, rotas e assets.

## Pré-requisitos
- Python 3.10+ (para o backend)
- Node.js 16+ / npm ou pnpm (para o frontend)

## Quickstart
1. Backend

```powershell
cd backend
# criar e ativar venv
python -m venv .venv
.\.venv\Scripts\Activate.ps1
# instalar dependências (se houver requirements.txt)
pip install -r requirements.txt
# rodar a API (ex.: uvicorn)
uvicorn main:app --reload --port 8000
```

2. Frontend

```bash
cd frontend
npm install
npm run dev
```

## Leia também
- Documentação específica do backend: [backend/README.md](backend/README.md)
- Documentação específica do frontend: [frontend/README.md](frontend/README.md)

## Contribuição
Abra issues e pull requests seguindo as guidelines do projeto.
