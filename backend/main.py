from fastapi import FastAPI
from routes import authRoute as auth
from routes import tasksRoute as tasks
from database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)
app.include_router(tasks.router)
