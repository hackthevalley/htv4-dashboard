import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

// HIDE SPLIT SCREEN VIEW FOR MOBILE
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  //document.getElementById("leftdesktop").disabled = true; NOT WORKING, returns null bcz wrong page
 }

export * from './Login';
export * from './Live';
