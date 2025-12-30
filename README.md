# 🌿 CareLeaf – Smart Gourd Leaf Disease Detector

**CareLeaf** is an AI-powered web application that detects **bottle gourd leaf diseases**, estimates **disease severity**, and provides **visual explanations using GradCAM**.  
It helps farmers, researchers, and students identify plant diseases early and take preventive measures.  

🌐 **Live Website:** [https://careleaf.netlify.app/](https://careleaf.netlify.app/)

---

## 🌱 Project Overview

Plant diseases can drastically reduce agricultural productivity. Manual detection is:  
❌ Time-consuming  
❌ Error-prone  
❌ Requires expert knowledge  

**CareLeaf** solves this by combining **deep learning**, **computer vision**, and a **modern web interface** to provide **fast, accurate, and explainable disease detection**.

💡 **Users can upload a bottle gourd leaf image to instantly get:**
- 🦠 Detected disease type  
- 📊 Confidence score  
- ⚠️ Severity level (Mild / Moderate / Severe)  
- 📈 Infected area percentage  
- 🔥 GradCAM visual explanation of affected regions  

---

## ✨ Key Features

- 🤖 AI-based bottle gourd leaf disease detection using **BottleGourdNet** (custom CNN model)  
- ⚖️ Severity estimation (Mild, Moderate, Severe)  
- 🔥 GradCAM visualization for model interpretability  
- 🖥️ Clean and responsive user interface  
- ✨ Interactive **particles animation** using `tsParticles`  
- ⚡ Real-time inference using **HuggingFace API**  
- 💻 Professional frontend built with **React, JavaScript, and Tailwind CSS**  

---

## 🦠 Diseases Supported

- 🍂 Anthracnose  
- 💧 Downy Mildew  
- 🌿 Healthy (Fresh Leaf)  

---

## 🛠️ Technology Stack

### Frontend
- ⚛️ React.js  
- 🟩 JavaScript  
- 🎨 Tailwind CSS  
- ✨ Framer Motion  
- 💫 tsParticles (interactive particle effects)  
- 📄 React Markdown  

### Backend / AI
- 🐍 Python  
- 🧠 TensorFlow / Keras (**BottleGourdNet** CNN model)  
- 🔥 GradCAM for explainability  
- 🌐 HuggingFace API for model deployment and inference  
- 🤝 Gradio API  

---

## 🏗️ System Architecture

1. 🖼️ User uploads a leaf image from the web interface  
2. 📤 Image is sent to the **HuggingFace API** hosting **BottleGourdNet**  
3. 🧠 The model performs:  
   - Disease classification  
   - Severity estimation  
   - GradCAM heatmap generation  
4. 📥 Response is returned to the frontend  
5. 📊 Results and visualizations are displayed in a structured format  

---

## 🚀 How to Use

1. Visit the live website: [https://careleaf.netlify.app/](https://careleaf.netlify.app/)  
2. Click **Start Analysis**  
3. Upload a clear image of a bottle gourd leaf  
4. Click **Analyze Image**  
5. View:  
   - 🦠 Disease detection results  
   - ⚠️ Severity assessment  
   - 🔥 GradCAM disease visualization  

---

## 💻 Installation (Local Setup)

```bash
git clone https://github.com/your-username/careleaf.git
cd careleaf
npm install
npm run dev
