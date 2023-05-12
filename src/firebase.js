
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyCDxjdzZk4mcryVBKhfTUjNh0N69Jcv6vM",
  authDomain: "push-web-49c1b.firebaseapp.com",
  projectId: "push-web-49c1b",
  storageBucket: "push-web-49c1b.appspot.com",
  messagingSenderId: "319064736682",
  appId: "1:319064736682:web:a78caa5672b329b61c21d3",
  measurementId: "G-C4WMLDREHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app)