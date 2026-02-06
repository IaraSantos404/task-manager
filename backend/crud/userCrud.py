from sqlalchemy.orm import Session
import models, schemas
from auth.security import password_hash

def get_user_by_email(db: Session, email: str):
  return db.query(models.Users).filter(models.Users.email == email).first()

def get_user_by_id(db: Session, user_id: int):
  return db.query(models.Users).filter(models.Users.id == user_id).first()

def create_user(db: Session, user: schemas.UserCreate):
  hashed_password = password_hash(user.password)

  db_user = models.Users(
    username=user.username,
    email=user.email,
    password=hashed_password
  )

  db.add(db_user)
  db.commit()
  db.refresh(db_user)

  return db_user

def delete_user(db: Session, user_id: int):
    user = get_user_by_id(db, user_id)
    if user:
        db.delete(user)
        db.commit()
    return user

def update_user(db: Session, user_id: int, user_update: schemas.UserUpdate):
    user = get_user_by_id(db, user_id)
    if not user:
        return None

    data = user_update.model_dump(exclude_unset=True)

    for field, value in data.items():
        setattr(user, field, value)

    db.commit()
    db.refresh(user)
    return user