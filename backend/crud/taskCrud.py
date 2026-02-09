from sqlalchemy.orm import Session
import models, schemas

def get_tasks_by_user(db:Session, user_id: int):
  return db.query(models.Tasks).filter(models.Tasks.user_id == user_id).all()

def get_task_by_id(db: Session, user_id: int, task_id: int):
  return db.query(models.Tasks).filter(models.Tasks.user_id == user_id, models.Tasks.id == task_id).first()

def create_task(db: Session, task: schemas.TaskCreate, user_id: int):
  db_task = models.Tasks(**task.model_dump(), user_id=user_id)
  db.add(db_task)
  db.commit()
  db.refresh(db_task)
  return db_task

def update_task(db: Session, user_id: int, task_id: int, task_update: schemas.TaskUpdate):
  task = get_task_by_id(db, user_id, task_id)
  if not task:
    return None
  
  data = task_update.model_dump(exclude_unset=True)

  for field, value in data.items():
    setattr(task, field, value)
  
  db.commit()
  db.refresh(task)
  return task


def delete_task(db: Session, user_id: int, task_id: int):
    task = get_task_by_id(db, user_id, task_id)
    if not task:
        return None
    db.delete(task)
    db.commit()
    return task




