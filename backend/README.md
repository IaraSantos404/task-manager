# Backend — Task Manager (API)

Breve descrição: backend responsável por autenticação, persistência e endpoints de tarefas.

## Pré-requisitos
- Python 3.10+
- Virtualenv ou venv
- Banco de dados (ex.: PostgreSQL, SQLite). Defina `DATABASE_URL` conforme necessário.

## Instalação
```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Execução (desenvolvimento)
```powershell
cd backend
.\.venv\Scripts\Activate.ps1
uvicorn main:app --reload --port 8000
```

## Variáveis de ambiente sugeridas
- `DATABASE_URL` — string de conexão com o banco
- `SECRET_KEY` — chave para geração de tokens
- `ACCESS_TOKEN_EXPIRE_MINUTES` — tempo de expiração do token

## Estrutura relevante
- `main.py` — ponto de entrada da aplicação
- `database.py` — configuração de conexão com DB
- `models.py` / `schemas.py` — modelos e esquemas
- `crud/` — operações de banco (ex.: `taskCrud.py`, `userCrud.py`)
- `routes/` — rotas/blueprints (ex.: `authRoute.py`, `tasksRoute.py`)
- `auth/` — dependências e segurança (ex.: `security.py`)

## Endpoints importantes (exemplos)
- POST `/auth/login` — autenticação
- POST `/auth/register` — registrar usuário
- GET `/tasks` — listar tarefas
- POST `/tasks` — criar tarefa

## Testes e lint
- Adicione/execute testes conforme necessário (Pytest)

## Notas
Adapte instruções de instalação caso use Poetry, Pipenv ou contêiner.
