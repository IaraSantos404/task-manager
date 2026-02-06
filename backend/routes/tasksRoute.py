from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database import get_db
import schemas
from crud.taskCrud import get_tasks_by_user, create_task, delete_task, update_task
from auth.dependencies import get_current_user
from models import Users

router = APIRouter(prefix="/tasks", tags=["Tasks"])

@router.get("/", response_model=list[schemas.TaskResponse])
def list_tasks(db: Session = Depends(get_db), current_user: Users = Depends(get_current_user)):
    return get_tasks_by_user(db, current_user.id)

@router.post("/", response_model=schemas.TaskResponse)
def create_new_task(task: schemas.TaskCreate, db: Session = Depends(get_db), current_user: Users = Depends(get_current_user)):
    return create_task(db, task, current_user.id)

@router.delete("/{task_id}", response_model=schemas.TaskResponse)
def delete_existing_task(task_id: int,db: Session = Depends(get_db),current_user: Users = Depends(get_current_user)):
    task = delete_task(db, current_user.id, task_id)

    if not task:
        raise HTTPException(status_code=404, detail="Task não encontrada")

    return task


@router.put("/{task_id}", response_model=schemas.TaskResponse)
def update_existing_task(task_id: int, task: schemas.TaskUpdate, db: Session = Depends(get_db), current_user: Users = Depends(get_current_user)):
    task = update_task(db, current_user.id, task_id, task)
    if not task:
        raise HTTPException(status_code=404, detail="Task não encontrada")
    
    return task

