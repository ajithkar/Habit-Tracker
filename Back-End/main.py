from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import CLIENT_URL
from app.core.database import init_indexes
from app.routes import auth_routes, habit_routes, log_routes

app = FastAPI(title="Habit Tracker API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[CLIENT_URL] if CLIENT_URL != "*" else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_routes.router)
app.include_router(habit_routes.router)
app.include_router(log_routes.router)


@app.on_event("startup")
async def on_startup():
    await init_indexes()


@app.get("/")
async def root():
    return {"message": "Habit Tracker API is running"}
