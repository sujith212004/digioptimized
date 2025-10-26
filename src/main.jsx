import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

try {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (err) {
  // If mounting fails on a deployed site, show the error in the overlay added to index.html
  try {
    console.error('App mount error', err);
    var o = document.getElementById('app-error');
    var d = document.getElementById('app-error-details');
    if (o && d) {
      d.textContent = (err && err.stack) ? err.stack : String(err);
      o.style.display = 'block';
    }
  } catch (e) {
    console.error('Failed to display mount error overlay', e);
  }
  throw err;
}
