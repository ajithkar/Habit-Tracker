from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from app.database import engine
from app import models
from app.routers import auth, streaks, schema, reservations, users

load_dotenv()

# Create all database tables on startup
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title       = "Habit Tracker System — API",
    description = "Panic coders | Hackathon Full-Stack Project",
    version     = "1.0.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins     = ["http://localhost:3000", "http://localhost:5173", "*"],
    allow_credentials = True,
    allow_methods     = ["*"],
    allow_headers     = ["*"],
)


app.include_router(auth.router)
app.include_router(menu.router)
app.include_router(tables.router)
app.include_router(reservations.router)
app.include_router(admin.router)


@app.get("/", tags=["Health"])
def root():
    return {
        "status"  : "ok",
        "message" : "Habit Tracker API is running",
        "docs"    : "/docs",
    }


@app.get("/health", tags=["Health"])
def health():
    return {"status": "healthy"}
