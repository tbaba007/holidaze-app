import { RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './ui/Footer';
import routes from './routes';

function App() {
  document.title="Holidaze"
  return (
    <>
    <RouterProvider router={routes}/>
    <Footer/>
    </>
   

  );
}

export default App;
