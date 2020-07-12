import React from 'react';
import { Helmet } from 'react-helmet'
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Barracuda Fish Bar</title>
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,600,600i,700,700i|Satisfy|Comic+Neue:300,300i,400,400i,700,700i" rel="stylesheet" />
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
        <link href="assets/vendor/venobox/venobox.css" rel="stylesheet" />
        <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
      </Helmet>
      
      <p>Barracuda</p>
    </div>
  );
}

export default App;
