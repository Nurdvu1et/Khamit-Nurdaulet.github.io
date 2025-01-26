from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class BMIRequest(BaseModel):
    height: float  # Height in meters
    weight: float  # Weight in kilograms

@app.post("/calculate_bmi")
async def calculate_bmi(data: BMIRequest):
    height = data.height
    weight = data.weight

    # Error handling for invalid input
    if height <= 0 or weight <= 0:
        raise HTTPException(status_code=400, detail="Height and weight must be positive numbers.")

    # Calculate BMI
    bmi = weight / (height ** 2)

    # Classify BMI
    if bmi < 18.5:
        classification = "Underweight"
    elif 18.5 <= bmi <= 24.9:
        classification = "Normal weight"
    elif 25 <= bmi <= 29.9:
        classification = "Overweight"
    else:
        classification = "Obesity"

    return {
        "bmi": round(bmi, 2),
        "classification": classification
    }
