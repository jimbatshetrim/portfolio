import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';

// Import the functions you need from the SDKs you need
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMO8T6xAJqCpHWCxqUvLKhUoWq3r75QQ0",
  authDomain: "portfolio-20016.firebaseapp.com",
  projectId: "portfolio-20016",
  storageBucket: "portfolio-20016.appspot.com",
  messagingSenderId: "995335252471",
  appId: "1:995335252471:web:22e3b5357e5612901766f2",
  measurementId: "G-KQ1LG56GX7"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    ProfileComponent,
    MainComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
