
importScripts("https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging-compat.js")




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
const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging(app)

messaging.onBackgroundMessage(payload => {
  console.log('tienes un mensaje')

  const notificationTitle = payload.notification.title;
  const notificationOptions ={
    body:payload.notification.body,
    icon:"/nabo.webp"
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})