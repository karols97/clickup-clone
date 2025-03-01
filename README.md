# ClickUp Clone

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![TanStack Table](https://img.shields.io/badge/TanStack%20Table-FF5733?style=for-the-badge&logo=react-table&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Yup](https://img.shields.io/badge/Yup-4CAF50?style=for-the-badge)

A ClickUp-inspired task management application built with Next.js and Firebase. This project allows users to create and update tasks in real-time, leveraging Firebase Authentication for user management.

## Features
- User authentication with Firebase Auth
- Task creation with editable attributes (status, assignees, name, priority)
- Real-time updates using refetching with TanStack Query
- Form handling with React Hook Form and validation using Yup

## Tech Stack
- **Frontend:** Next.js, React, TanStack Query, TanStack Table
- **Backend:** Firebase (Firestore, Authentication)
- **State Management:** TanStack Query
- **Forms & Validation:** React Hook Form, Yup

## Installation & Setup
### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/karols97/clickup-clone.git
cd clickup-clone
```

### 2. Create a Firebase project

If you don't have a Firebase project already, you'll need to create one. Follow these steps:
  - Go to the [Firebase Console](https://console.firebase.google.com/)
  - Click on **"Add Project"** and follow the prompts to create a new project
  - Once your project is created, navigate to the **Project Settings** (gear icon > **Project settings**)
  - Under the **Your apps** section, click on **Web App** to get your Firebase configuration (you'll need this later)

### 3. Set up firebase in your project
  - In your local project directory, create a .env.local file
  - Copy the Firebase configuration snippet from your Firebase project (found in the Firebase Console > Project Settings > Your apps > Web app) and add it to the .env.local file
  - The .env.local file should look something like this:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

### 4. Install dependencies and run the app locally
Once you've configured Firebase, you need to install the necessary dependencies and run the app:

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash 
npm run dev
```

The app should now be running locally, connected to your Firebase project.

### Additional Notes:
Firebase Project: Make sure you’ve followed the steps to create a Firebase project and have the correct configuration details. You can always go back to the Firebase Console if you need to find your Firebase configuration.

Sensitive Data: The .env.local file is not committed to Git (it’s in .gitignore by default), so your Firebase configuration remains private. You’ll need to create your own .env.local file to work locally with Firebase.

Firebase Authentication & Firestore Rules: If you're using Firebase Authentication, Firestore, or other Firebase services, make sure to check the security rules and adjust them for local development if necessary.

## Deployment
The application is deployed on **Vercel** and can be viewed as a live demo here: https://clickup-clone-sable.vercel.app/

## Contributors
- [karols97](https://github.com/karols97)
- [molszewski34](https://github.com/molszewski34)
- [jakubking98](https://github.com/jakubking98)
- [BroksDMG](https://github.com/BroksDMG)
- [n3ssh](https://github.com/n3ssh)

## Future Plans & Roadmap
We are currently refactoring the database to enable actual user interactions, including:
- Shared workspaces
- Task assignments and management among team members

This project is for educational purposes and is not affiliated with ClickUp.
