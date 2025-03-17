---

# TodoApp - Task Manager 📝

A modern mobile task management application built with **React Native** and **TypeScript**, featuring an onboarding flow and intuitive task management capabilities.

---

## ✨ Features

### Onboarding Experience
- Welcome screen with an engaging call-to-action  
- Step-by-step instructional guide  
- Smooth screen transitions  

### Core Functionality
- Create, complete, and delete tasks  
- Visual feedback for completed items (strikethrough style)  
- Real-time task list updates  
- Clean and intuitive user interface  

### Technical Highlights
- Type-safe implementation with **TypeScript**  
- Seamless navigation with **React Navigation**  
- Optimized rendering using **FlatList**  
- Cross-platform support (iOS & Android)  

---

## 📋 Prerequisites
- **Node.js** (v16+ recommended)  
- **npm** (v7+)  
- **Expo CLI**  
- **Android Studio** or **Xcode** (for emulators or real device testing)  

---

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/janitha479/TodoApp.git
   cd TodoApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   npx expo install react-native-screens react-native-safe-area-context react-native-vector-icons
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

---

## 🚀 Usage Guide

### Onboarding Screens  
- **Welcome Screen**: Tap `Get Started` to begin.  
- **Instructions Screen**: Review the interactive guide and tap `Let's Get Started!` to continue.  

### Main Task Manager  
- **Add Task**: Type in the input field and press `Add`.  
- **Complete Task**: Tap the task text to toggle its completed status.  
- **Delete Task**: Press the `X` button next to any task to remove it.  
- **Visual Feedback**: Completed tasks are shown with a strikethrough effect.  

---

## 💻 Tech Stack
- **Framework**: React Native (Expo)  
- **Language**: TypeScript  
- **Navigation**: React Navigation  
- **Icons**: react-native-vector-icons  
- **State Management**: React `useState`  
- **Linting & Formatting**: ESLint / Prettier  

---

## 📂 Project Structure
```
TodoApp/
├── src/
│   ├── components/          # Reusable UI components
│   ├── screens/             # App screens/views
│   │   ├── WelcomeScreen.tsx
│   │   ├── InstructionsScreen.tsx
│   │   └── HomeScreen.tsx
│   └── types/               # Type definitions
├── App.tsx                  # Root component
├── package.json
└── tsconfig.json
```

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:  
1. **Fork the repository**  
2. **Create a feature branch**  
   ```bash
   git checkout -b feature/AmazingFeature
   ```  
3. **Commit your changes**  
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```  
4. **Push to the branch**  
   ```bash
   git push origin feature/AmazingFeature
   ```  
5. **Open a Pull Request**  

---

## 🚧 Future Enhancements
- Persistent storage with **AsyncStorage**  
- Task categories and tags  
- Due dates and reminders  
- Dark mode support  
- Swipe-to-delete gestures  
- Cloud sync functionality  

---

## 📄 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

### 🎉 Happy Task Managing!

---
