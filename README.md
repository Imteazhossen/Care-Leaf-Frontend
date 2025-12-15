# CareLeaf – Smart Gourd Leaf Disease Detector

CareLeaf is an AI-powered web application that detects **bottle gourd leaf diseases**, estimates **disease severity**, and provides **visual explanations using GradCAM**.  
The system helps farmers, researchers, and students identify plant diseases early and take preventive action.

Live Website: https://careleaf.netlify.app/

---

## Project Overview

Plant diseases significantly reduce agricultural productivity. Manual disease detection is time-consuming, error-prone, and requires expert knowledge.  
CareLeaf addresses this problem by combining **deep learning**, **computer vision**, and a **modern web interface** to provide fast, accurate, and explainable disease detection.

The application allows users to upload a bottle gourd leaf image and instantly receive:
- Detected disease type
- Confidence score
- Severity level
- Infected area percentage
- GradCAM-based visual explanation of affected regions

---

## Key Features

- AI-based bottle gourd leaf disease detection
- Severity estimation (Mild, Moderate, Severe)
- GradCAM visualization for model interpretability
- Clean and responsive user interface
- Real-time inference using HuggingFace deployment
- Professional frontend built with React and Tailwind CSS

---

## Diseases Supported

- Anthracnose  
- Downy Mildew  
- Healthy (Fresh Leaf)

---

## Technology Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- React Markdown

### Backend / AI
- Python
- TensorFlow / Keras
- Deep Learning CNN Model
- GradCAM for explainability
- HuggingFace Spaces (Model Deployment)
- Gradio API

---

## System Architecture

1. User uploads a leaf image from the web interface
2. Image is sent to the HuggingFace-hosted AI model
3. The model performs:
   - Disease classification
   - Severity estimation
   - GradCAM heatmap generation
4. The response is returned to the frontend
5. Results and visualizations are displayed in a structured format

---

## How to Use

1. Visit the live website  
   https://careleaf.netlify.app/

2. Click on **Start Analysis**

3. Upload a clear image of a bottle gourd leaf

4. Click **Analyze Image**

5. View:
   - Disease detection results
   - Severity assessment
   - GradCAM disease visualization

---

## Installation (Local Setup)

```bash
git clone https://github.com/your-username/careleaf.git
cd careleaf
npm install
npm run dev
