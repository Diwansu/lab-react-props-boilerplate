import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import AppClass from "./AppClass";
import './index.css'
import photos from './Components/DataComponent'

console.log(photos)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App data={photos}/> */}
    {<AppClass data={photos}/>}


  </React.StrictMode>,
)
