# main.py
# FastAPI equivalent of the original Express server

import os
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# -------------------------------
#  Environment & Database Setup
# -------------------------------
load_dotenv()  # Loads .env file variables
port = int(os.getenv("PORT", 5000))

# Simulate the original configureDB() function.
# In a real project this would connect to your database.
def configure_db():
    # Placeholder: e.g., connect to MongoDB, PostgreSQL, etc.
    print("Database configured (placeholder)")

# Call configure_db early (as in the original code)
configure_db()

# -------------------------------
#  FastAPI Application
# -------------------------------
app = FastAPI()

# CORS middleware – equivalent to app.use(cors())
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],            # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
#  Include Routers (API endpoints)
# -------------------------------
# Assume each route file exports an APIRouter named "router"
from app.auth_routes import router as auth_router
from app.habit_routes import router as habit_router
from app.log_routes import router as log_router
from app.dashboard_routes import router as dashboard_router

app.include_router(auth_router, prefix="/api/auth")
app.include_router(habit_router, prefix="/api/habits")
app.include_router(log_router, prefix="/api/logs")
app.include_router(dashboard_router, prefix="/api/dashboard")

# -------------------------------
#  Main entry point
# -------------------------------
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
