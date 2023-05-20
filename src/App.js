import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  document.title='Holidaze';
  return (
    <>
    <RouterProvider router={routes}/>
    </>
   

  );
}

export default App;
