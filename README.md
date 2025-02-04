# **Real-Time Speech Transcription & Translation**

## **📌 Project Description**
This project is a **real-time speech-to-text transcription and translation system**. It allows users to **upload or record audio**, transcribe it using **OpenAI Whisper**, and translate the transcription into any selected language using **Meta’s NLLB-200 model**.

The project is optimized with **Web Workers**, ensuring that heavy computations for transcription and translation run smoothly in the background without blocking the user interface.

## **🚀 Features**
- 🎙 **Upload or record audio**
- 🔤 **Transcribes speech to text** using **OpenAI Whisper**
- 🌍 **Translates text** to any selected language using **NLLB-200**
- 📜 **Real-time transcription & translation updates**
- 📥 **Download or copy transcribed and translated text**
- ⚡ **Web Workers for smooth processing**

## **🛠 Models Used**
- **Speech-to-Text:** [OpenAI Whisper (Tiny English)](https://huggingface.co/openai/whisper-tiny.en)
- **Translation:** [Xenova/nllb-200-distilled-600M](https://huggingface.co/Xenova/nllb-200-distilled-600M)

## **🖥 Demo Link**
[🔗 **[Live Demo](#)** [*(Update with actual link when deployed)*
](https://transcription-translation-app.vercel.app/)](https://transcription-translation-app.vercel.app/)

## **📸 UI Preview**
**![image](https://github.com/user-attachments/assets/64986695-c195-4756-9c47-dc65789cf611)
![image](https://github.com/user-attachments/assets/eb3c90fa-5010-419e-95c7-9ecd6a3352f8)



## **📌 How It Works**
1. **User uploads/records audio** from the UI.
2. **Audio is sent to `whisper.worker.js`** for **speech-to-text transcription**.
3. **Transcribed text is passed to `translate.worker.js`** for **translation**.
4. **User receives translated text**, which can be copied or downloaded.

## **📂 Project Structure**
```
📂 project-root/
 ├── 📜 index.html             # Main HTML file
 ├── 📜 main.js                # Main JavaScript file handling UI
 ├── 📜 whisper.worker.js      # Web Worker for speech-to-text processing
 ├── 📜 translate.worker.js    # Web Worker for text translation
 ├── 📂 assets/                # UI-related assets (images, styles, etc.)
 ├── 📜 README.md              # Project documentation
```

## **⚙️ Installation & Setup**
### **🔹 Prerequisites**
Ensure you have **Node.js** and **npm** installed.

### **🔹 Steps to Run the Project**
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the project**
   ```sh
   npm start
   ```
4. **Open your browser and visit**
   ```
   http://localhost:3000
   ```

## **🌟 Advantages**
✅ **Real-time transcription & translation**
✅ **Efficient processing with Web Workers**
✅ **Supports multiple languages**
✅ **User-friendly and lightweight**

## **📩 Contributing**
Feel free to fork this repository and contribute improvements. Pull requests are welcome!

## **📜 License**
This project is licensed under the MIT License.

---
**💡 Have questions or suggestions?** Open an issue or reach out! 🚀

