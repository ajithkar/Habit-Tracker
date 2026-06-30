from typing import Optional
from pydantic import BaseModel, Field


# -------------------------
# Habit Models
# -------------------------

class HabitBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=500)
    color: str = "#10B981"


class HabitCreate(HabitBase):
    pass


class HabitUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=500)
    color: Optional[str] = None
    archived_at: Optional[str] = None


class Habit(HabitBase):
    id: Optional[str] = None
    created_at: str
    archived_at: Optional[str] = None

    class Config:
        from_attributes = True


# -------------------------
# Completion Models
# -------------------------

class CompletionBase(BaseModel):
    habit_id: str
    completed_date: str  # YYYY-MM-DD
    status: str = "completed"
    notes: Optional[str] = Field(None, max_length=500)


class CompletionCreate(CompletionBase):
    pass


class CompletionUpdate(BaseModel):
    status: Optional[str] = None
    notes: Optional[str] = Field(None, max_length=500)


class Completion(CompletionBase):
    id: Optional[str] = None
    created_at: str

    class Config:
        from_attributes = True