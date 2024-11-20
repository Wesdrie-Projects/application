import { ApplicationConfig } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyAx-Y4HPzypkrwyvRPFM-idHcPoOVUXxtA",
  authDomain: "application-eca55.firebaseapp.com",
  projectId: "application-eca55",
  storageBucket: "application-eca55.firebasestorage.app",
  messagingSenderId: "264390168167",
  appId: "1:264390168167:web:cfae5b9b203f54eb9d4ec2"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideRouter(routes)
  ]
};
