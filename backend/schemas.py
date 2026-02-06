from pydantic import BaseModel, EmailStr, Field
from datetime import date, datetime
# from typing import Optional
from enum import Enum

#separar em pastas diferentes depois, por enquanto tá tudo aqui pra facilitar o desenvolvimento
#Enums
class taskStatusEnum(str, Enum):
  pending = "pendente"
  in_progress = "em progresso"
  completed = "concluida"

class taskCategoryEnum(str, Enum):
  study = "estudos"
  work = "trabalho"
  personal = "pessoal"

class taskPriorityEnum(str, Enum):
  low = "baixa"
  medium = "media"
  high = "alta"

#usuários
#infors base que o usuario sempre vai ter independente do contexto
class UserBase(BaseModel):
  username: str
  email: EmailStr

#é oq é enviado no cadastro, ele herda as infos base e adiciona a senha
class UserCreate(UserBase):
  password: str = Field(min_length=4, max_length=72)

class UserUpdate(BaseModel):
  username: str | None = None
  email: EmailStr | None = None
  password: str | None = None

#é oq vai ser retornado nas resposta, ou seja é oq a API devolve para o front 9n pode retorna password por segurança)
class UserResponse(UserBase):
  id: int
  is_active: bool

  #o sqlalchemy retorna os dados como objetos e o pydantic espera dicionarios
  # isso aqui é para o pydantic entender oq tá sendo mandado pelo sqlalchemy
  class Config:
    from_attributes = True

#tasks
class TaskBase(BaseModel):
  title: str
  description: str | None = None
  status: taskStatusEnum = taskStatusEnum.pending
  category: taskCategoryEnum = taskCategoryEnum.personal
  priority: taskPriorityEnum = taskPriorityEnum.medium
  due_date: date | None = None


class TaskCreate(TaskBase):
  pass

class TaskUpdate(BaseModel):
  title: str | None = None
  description: str | None = None
  status: taskStatusEnum | None = None
  category: taskCategoryEnum | None = None
  priority: taskPriorityEnum | None = None
  due_date: date | None = None

class TaskResponse(TaskBase):
  id: int
  created_at: datetime

  class Config:
    from_attributes = True


### autenticação
class LoginData(BaseModel):
  email: EmailStr
  password: str

class Token(BaseModel):
  access_token: str
  token_type: str