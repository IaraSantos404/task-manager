from fastapi import FastAPI
from routes import authRoute as auth
from routes import tasksRoute as tasks
from database import Base, engine
import models

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)
app.include_router(tasks.router)



#Tasks Endpoints
#get all tasks with optional filters
# @app.get("/tasks")
# async def get_tasks(
#   category: CategoryEnum | None = None,
#   status: StatusEnum | None = None,
#   priority: PriorityEnum | None = None):


#   filtered_tasks = tasks

#   if category:
#     #para cada tarefa q existe em filtered_tasks, se a categoria dela for igual a category.value, mantem ela no dicionario
#     filtered_tasks = {
#       k: v for k, v in filtered_tasks.items() if v["category"] == category.value
#     }
  
#   if status:
#     filtered_tasks = {
#       k: v for k, v in filtered_tasks.items() if v["status"] == status.value
#     }
  
#   if priority:
#     filtered_tasks = {
#       k: v for k,v in filtered_tasks.items() if v["priority"] == priority.value
#     }


#   return filtered_tasks

# @app.post("/tasks")
# async def create_task(task: models.Task):
#   return {"message": "Task created successfully", "task": task}

# @app.put("/tasks/{task_id}")
# async def update_task(task_id: int, task: models.Task):
#   return {"message": "Task updated successfully", "task_id": task_id, "task": task}

# @app.delete("/tasks/{task_id}")
# async def delete_task(task_id: int):
#   return {"message": "Task deleted successfully", "task_id": task_id}