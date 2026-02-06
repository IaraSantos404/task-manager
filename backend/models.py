from sqlalchemy import Integer, String, Text, Boolean, Date,DateTime, Column, ForeignKey, func
from sqlalchemy.orm import relationship
from database import Base

class Users(Base):
  __tablename__ = "users"

  id =Column(Integer, primary_key = True)
  username = Column(String(50), index=True, nullable=False)
  email = Column(String(255), index=True, nullable=False, unique=True)
  password = Column(String(255), nullable=False)
  is_active = Column(Boolean, default=True)

  tasks = relationship(
    "Tasks",
    back_populates="user",
    cascade="all, delete-orphan"
  )


class Tasks(Base):
  __tablename__ = "tasks"

  id = Column(Integer, primary_key=True)
  title = Column(String(100), index=True, nullable=False)
  description = Column(Text)
  priority = Column(String(50), index=True)
  status = Column(String(50), index=True, nullable=False)
  category = Column(String(50), index=True)
  due_date = Column(Date)

  created_at = Column(DateTime, server_default=func.now())

  user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)

  user = relationship(
    "Users",
    back_populates="tasks"
  )


