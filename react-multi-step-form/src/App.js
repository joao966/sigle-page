import React from "react";
import { MultiStepForm } from "./components/MultiStepForm";
import { ToastContainer } from 'react-toastify';
import './style/globalStyle.css'

function App() {
  return (
    <div className="content-app">
      <div className="App">
        <h1>Formulário</h1>
      </div>
        <ToastContainer autoClose={3000} />
        <MultiStepForm />

    </div>
  );
}

export default App;
