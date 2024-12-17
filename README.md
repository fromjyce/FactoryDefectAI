# **FactoryDefectAI: Real-Time Defect Detection for Industry 4.0**
**Optimizing defect detection with Intel® AI Stack on Edge Devices**

---

## **Overview**
Traditional manufacturing relies on **manual visual inspections** for defect detection, which are **slow**, **error-prone**, and **inefficient**. FactoryDefectAI is an **AI-driven defect detection system** that leverages **Intel® AI PC** capabilities, including its **CPU**, **GPU**, and **NPU**, to perform **real-time, accurate, and scalable defect identification**.

By integrating **Edge AI processing**, **depth estimation**, and **Intel’s AI Stack**, FactoryDefectAI ensures **low-latency defect detection**, enabling modern factories to enhance **precision**, **throughput**, and **operational efficiency**.

---

## **Problem Statement**
Manual defect detection in manufacturing:
- Is **time-consuming** and prone to **human error**.
- Results in **30% of defects** going undetected.
- Lacks scalability for **high-speed production lines**, leading to product recalls, financial loss, and customer dissatisfaction.

Our objective is to **automate and optimize defect detection** using AI-based **Edge Computing** solutions that align with **Industry 4.0** standards.

---

## **Proposed Solution**
FactoryDefectAI detects **surface and internal defects** in real time using:
1. **Multi-angle Image Capture**: High-resolution images of products from multiple angles.
2. **Data Preprocessing**: Images are cleaned and normalized using **Intel® AI Analytics Toolkit** and **OpenCV**.
3. **Defect Detection Model**: 
   - A deep learning model optimized using **Intel® OpenVINO™ Toolkit** for efficient inference.
   - Depth estimation using **Intel®/dpt-large** for identifying both surface-level and internal defects.
4. **Edge Deployment**: AI models run on **Intel® AI PCs** for real-time, low-latency processing.
5. **Result Visualization**: Defects and severity levels are displayed on a **user-friendly dashboard** for immediate decision-making.

---

## **Features**
- **Real-Time Defect Detection**: Ensures near-instantaneous feedback during production.
- **Depth Estimation**: Integrates **Intel®/dpt-large** for multi-angle defect analysis.
- **Edge AI Processing**: Deploys models locally on Intel® AI PCs, reducing cloud dependency and latency.
- **Scalable and Efficient**: Designed to scale across multiple production lines.
- **Optimized Models**: Leveraging **Intel® OpenVINO™ Toolkit** and **Intel® Neural Compressor** for high performance.

---

## **Architecture**

![Solution Flowchart](path-to-your-flowchart-image.png)

### **Workflow**:
1. **Image Capture**: Multi-angle image collection using high-resolution cameras.
2. **Data Preprocessing**: Resize, normalize, and clean images using Intel® AI Analytics Toolkit.
3. **AI Model**:
   - Defect detection with **OpenVINO-optimized AI models**.
   - Depth estimation with **Intel®/dpt-large**.
4. **Edge Deployment**: Real-time inference on **Intel® AI PC** using CPUs, GPUs, and NPUs.
5. **Dashboard Visualization**: Defect results displayed in a visual interface for immediate action.

---

## **Tech Stack**

### **Hardware**:
- **Intel® AI PC** for Edge AI processing.
- **Intel® CPUs/GPUs/NPUs** for model execution.

### **Software**:
- **Intel® OpenVINO™ Toolkit**: Optimizes AI models for real-time inference.
- **Intel®/dpt-large**: For depth estimation and multi-angle defect detection.
- **Intel® AI Analytics Toolkit**: Data preprocessing and feature extraction.
- **Intel® Neural Compressor**: Model compression and post-training optimization.
- **Intel® VTune™ Profiler**: Performance profiling and optimization.

### **Frameworks**:
- **TensorFlow/PyTorch**: For model training.
- **OpenCV**: For image processing.
- **Next.js + Tailwind CSS**: For the frontend user interface.
- **Vercel**: Deployment of the web-based prototype.

---

## **Live Demo**
- **Prototype Showcase**: [Watch Video](https://youtu.be/Dp58JsgqvUU)  
- **Live Web App**: [FactoryDefectAI Deployment](https://factory-defect-ai.vercel.app/)

---

## **How to Run Locally**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/factorydefectai.git
   cd factorydefectai
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm run dev
   ```

4. Open the app at `http://localhost:3000` in your browser.

---

## **Assumptions**
1. Access to **Intel® AI PC** for edge deployment.
2. Availability of labeled datasets for defect detection training.
3. Stable infrastructure to deploy the solution across multiple production lines.

---

## **Expected Results**
- **Enhanced Accuracy**: 50%+ improvement in defect detection rates.
- **Reduced Latency**: Real-time processing ensures near-instantaneous defect identification.
- **Operational Efficiency**: Automating defect detection improves production speed and quality.
- **Scalability**: Easily expandable across factories and production lines.

---

## **Impact**
FactoryDefectAI enables manufacturers to:
- **Reduce product defects** and improve quality assurance.
- **Minimize operational costs** and downtime.
- Scale operations efficiently, ensuring readiness for **Industry 4.0**.

By harnessing the capabilities of **Intel® AI Stack** and **Edge AI**, this solution transforms manufacturing quality control into a **real-time, automated, and scalable process**.

---

## **Team**
- **Team Name**: Definox  
- **Team Member**: Jayashre (jaya2004kra@gmail.com)

---

## Contact

If you come across any issues, have suggestions for improvement, or want to discuss further enhancements, feel free to contact me at [jaya2004kra@gmail.com](mailto:jaya2004kra@gmail.com). Your feedback is greatly appreciated.

## License

All the code and resources in this repository are licensed under the MIT License. You are free to use, modify, and distribute the code under the terms of this license. However, I do not take responsibility for the accuracy or reliability of the programs.

## Social Profiles:

[**LINKEDIN - Jayashre**](https://www.linkedin.com/in/jayashrek/)
