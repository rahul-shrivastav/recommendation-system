# Recommendation  System  Webapp

![Python](https://img.shields.io/badge/Python-3.9-blue?style=flat&logo=python) 
![Flask](https://img.shields.io/badge/Flask-2.0.1-black?style=flat&logo=flask) 
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.2.0-38B2AC?style=flat&logo=tailwindcss) 
![scikit-learn](https://img.shields.io/badge/scikit--learn-0.24.2-orange?style=flat&logo=scikitlearn)
![pandas](https://img.shields.io/badge/pandas-1.3.3-blue?style=flat&logo=pandas)
![NumPy](https://img.shields.io/badge/NumPy-1.21.2-013243?style=flat&logo=numpy)
![KNN](https://img.shields.io/badge/KNN-Algorithm-green?style=flat&logo=scikitlearn)




A recommendation model trained on Amazon's product dataset integrated in a simple web application.

[![VISIT](https://img.shields.io/badge/-VISIT-blue?style=for-the-badge)](https://recommendation-system-steel.vercel.app/)

## Tech Stack
- ` Python ` : versatile, high-level, interpreted, easy-to-learn programming language.
- ` Scikit-Learn `: A powerful Python library for machine learning.
- ` React.js ` : A JavaScript library for building dynamic user interfaces with reusable components.
- ` Flask `: A lightweight Python web framework to build APIs.
- `Tailwind-CSS` : A utility-first CSS framework for building custom, responsive designs quickly by composing classes directly in HTML.

## Getting Started

### 1. Clone the Repository
First, clone the repository to your local machine:


```bash
git clone https://github.com/rahul-shrivastav/recommendation-system.git
```
### 2. Install Dependencies
Change the directory and Install the required dependencies by running:

```bash
cd recommendation-system/backend
pip install -r requirements.txt
cd ../frontend
npm install
```

### 3. Setup Environment Variables in Frontend folder

To run this project, you will need to add the following environment variables to your .env file in frontend
```bash
VITE_API
```
A sample .evn file is also provided in the repository.


### 4. Run the application locally

Navigate to `/backend` and run the development backend server :

```bash
python app.py
```
Now navigate to `/frontend` and run the development frontend server :
```bash
npm run dev
```
Open port `5173` on `localhost` with your browser to see the result. 

## Dataset Used

```bash
https://www.kaggle.com/datasets/asaniczka/amazon-products-dataset-2023-1-4m-products?select=amazon_products.cs
```

## Sample Screenshots
![Screenshot 2025-02-21 233446](https://github.com/user-attachments/assets/6ab58561-f8e1-430c-8be4-1eaa2fe00f3e)

![Screenshot 2025-02-21 233417](https://github.com/user-attachments/assets/8c48987f-efb5-4015-86f8-cf7e25e81057)

