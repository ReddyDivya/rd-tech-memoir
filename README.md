# Tech Memoir

## Install Dependencies
```
npm install react-router-dom firebase axios react-query react-icons
```

---

## Set Up Firebase

  ### Step 1: Create a Firebase Project
    - Go to the Firebase Console.
    - Click on "Add project."
    - Enter a project name, select your country/region, and click "Create Project."

  ### Step 2: Set Up Authentication
    - In the Firebase Console, select your project.
    - Navigate to "Authentication" in the left menu.
    - Click on the "Sign-in method" tab.
    - Enable the authentication providers you want to use (e.g., Email/Password, Google, etc.).
  
  ### Step 3: Set Up Firebase in Your React App
    ```
    //Install the Firebase CLI:
    npm install -g firebase-tools
    
    //Initialize Firebase in your React app
    firebase init
    ```

    - During initialization, choose the following options:
    - Choose "Hosting" when prompted for services.
    - Select your Firebase project.
    - Choose the public directory (e.g., build if using Create React App).
    - Configure as a single-page app.

  ### Step 4: Enable Firebase Authentication in Your React App
  ```
  //Install the Firebase SDK in your React app
  npm install firebase
  ```

  ### Create a Firebase configuration file (e.g., src/firebase.js):
  ```
  // src/firebase.js
  import { initializeApp } from 'firebase/app';
  import { getAuth } from 'firebase/auth';
  
  const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export { auth };
  ```
  
  ### Step 5: Implement Authentication in Your React App

---

## Creating Components

- Navbar
- Social media icons
- Dark Mode Theme
- Analytics Section
- Sign in with Google
- Sign out
- Blog posts list
- Blog post
- User profile

---
