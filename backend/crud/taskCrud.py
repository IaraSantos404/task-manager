from sqlalchemy.orm import Session
import models, schemas

#retorna todas as tasks de um usuario
def get_tasks_by_user(db:Session, user_id: int):
  return db.query(models.Tasks).filter(models.Tasks.user_id == user_id).all()

def get_task_by_id(db: Session, user_id: int, task_id: int):
  return db.query(models.Tasks).filter(models.Tasks.user_id == user_id, models.Tasks.id == task_id).first()

#como para criar a task precisa validar os dados, usamos o schema TaskCreate
def create_task(db: Session, task: schemas.TaskCreate, user_id: int):
  #model_dump() converte o pydantic model em dicionario para poder ser usado pelo sqlalchemy
  #e o ** desempacota o dicionario para passar os valores como argumentos nomeados para o schema
  #resumindo, coloca tudo que tá em task e passa de argumento 
  db_task = models.Tasks(**task.model_dump(), user_id=user_id)
  db.add(db_task)
  db.commit()
  db.refresh(db_task)
  return db_task

def update_task(db: Session, user_id: int, task_id: int, task_update: schemas.TaskUpdate):
  #exclude_unset=True faz com que apenas os campos que foram enviados na requisição sejam atualizados
  task = get_task_by_id(db, user_id, task_id)
  if not task:
    return None
  
  data = task_update.model_dump(exclude_unset=True)

  for field, value in data.items():
    setattr(task, field, value)
  
  db.commit()
  db.refresh(task)
  return task



# def delete_task(db: Session, task: models.Tasks):
#   db.delete(task)
#   db.commit()

def delete_task(db: Session, user_id: int, task_id: int):
    task = get_task_by_id(db, user_id, task_id)
    if not task:
        return None
    db.delete(task)
    db.commit()
    return task




