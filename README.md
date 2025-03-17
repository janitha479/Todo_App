# TodoApp - Task Manager 📝

A modern mobile task management application built with React Native and TypeScript, featuring an onboarding flow and intuitive task management capabilities.

## Features ✨

- **Onboarding Experience**
  - Welcome screen with engaging call-to-action
  - Step-by-step instructional guide
  - Smooth screen transitions

- **Core Functionality**
  - Create, complete, and delete tasks
  - Visual feedback for completed items
  - Real-time task list updates
  - Clean and intuitive interface

- **Technical Highlights**
  - Type-safe implementation with TypeScript
  - React Navigation for seamless transitions
  - Optimized rendering with FlatList
  - Cross-platform compatibility (iOS/Android)

## Prerequisites 📋

- Node.js (v16+ recommended)
- npm (v7+)
- Expo CLI
- Android Studio/Xcode (for emulators)

## Installation 🛠️

1. Clone the repository:
```bash
git clone https://github.com/janitha479/TodoApp.git
cd TodoApp
Install dependencies:
***

Copy
***bash
npm install
npx expo install react-native-screens react-native-safe-area-context react-native-vector-icons
Start the development server:

bash
Copy
npm start
Usage 🚀
Welcome Screen

Tap "Get Started" to begin

Instructions Screen

Review the interactive guide

Tap "Let's Get Started!" to continue

Main Interface

Add Task: Type in input field and press Add

Complete Task: Tap task text to toggle status

Delete Task: Press X button on any task

Visual Feedback: Completed tasks show strikethrough

Tech Stack 💻
Framework: React Native (Expo)

Language: TypeScript

Navigation: React Navigation

Icons: react-native-vector-icons

State Management: React useState

Linting: ESLint/Prettier

Project Structure 📂
Copy
TodoApp/
├── src/
│   ├── components/      # Reusable components
│   ├── screens/         # Application views
│   │   ├── WelcomeScreen.tsx
│   │   ├── InstructionsScreen.tsx
│   │   └── HomeScreen.tsx
│   └── types/           # Type definitions
├── App.tsx              # Root component
├── package.json
└── tsconfig.json
Contributing 🤝
Contributions are welcome! Please follow these steps:

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Future Enhancements 🚧
Persistent storage with AsyncStorage

Task categories and tags

Due dates and reminders

Dark mode support

Swipe-to-delete gesture

Cloud sync functionality

License 📄
This project is licensed under the MIT License - see the LICENSE file for details.

Happy Task Managing! 🎉
