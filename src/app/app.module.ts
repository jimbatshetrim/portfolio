import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';

import { FIREBASE_CONFIG } from 'env';

// Import the functions you need from the SDKs you need
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(FIREBASE_CONFIG)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    ProfileComponent,
    MainComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
