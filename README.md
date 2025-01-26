# Khamit-Nurdaulet.github.io
BMI Calculator Routing

Overview

This project implements a simple BMI (Body Mass Index) Calculator as a RESTful API using FastAPI. The API accepts user inputs (height and weight), calculates the BMI, and returns the result along with its classification.

Requirements

Python 3.8+

Virtual environment tools (optional but recommended)

Dependencies:

fastapi

uvicorn

Setup Instructions

Clone the Repository:

git clone <repository-url>
cd <repository-directory>

Set Up Virtual Environment (Optional):

python -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate    # For Windows

Install Dependencies:

pip install fastapi uvicorn

Run the Application:

uvicorn main:app --reload

Replace main with the filename if the script is not named main.py.

Access the API Documentation:
Open your browser and navigate to http://127.0.0.1:8000/docs for the Swagger UI.

API Endpoint Details

1. Calculate BMI

Endpoint: /calculate_bmi

Method: POST

Request Body:

{
  "height": 1.75,
  "weight": 70
}

Response:

{
  "bmi": 22.86,
  "classification": "Normal weight"
}

Error Response:

{
  "error": "Height and weight must be positive numbers."
}

Testing Instructions

Use the Swagger UI (/docs) to test the API.

Alternatively, use tools like curl or Postman:

curl -X POST "http://127.0.0.1:8000/calculate_bmi" \
-H "Content-Type: application/json" \
-d '{"height": 1.75, "weight": 70}'

Example Classifications

Underweight: BMI < 18.5

Normal weight: BMI 18.5 - 24.9

Overweight: BMI 25 - 29.9

Obesity: BMI ≥ 30

Notes

Ensure all input values are positive. The API handles error responses for invalid or missing data gracefully.

