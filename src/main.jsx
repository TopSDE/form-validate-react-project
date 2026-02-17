import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import "./global.css"

createRoot(document.getElementById("root")).render(<App/>)

//! Task1 - Apply css TO-DO list
//! Task2 - Complete tailwind css (form validation 1.normal 2.regular expression)

//! TASK 3 :
//? Install 'new reactjs folder' with name "password-validation"
//? [follow steps for new folder-->delete existing src and create new src]
//1)Create one "form" with 2 input a) Passowrd b)Confirm-Passord
//2) if both input are empty for both input filed seperaly show error as "This field is mandatory"
//3)Check if 2 password are matching not. If not matching show error as "Passord is not matching" print it below 2nd input
//! Apply regular expression for password-->password should have 8 letters atleast one capital letter, atleast one special character and atleast one number
//* apply tailwind css