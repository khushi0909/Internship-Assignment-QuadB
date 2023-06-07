import './App.css';
import Body from './Components/Body';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import Summary from './Components/Summary';
import Error from './Components/Error';
import RegisterForm  from './Components/RegisterForm'
function App() {
  const appRoute = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/summary/:movId",
      element:<Summary/>
    },
    {
      path:"/summary/form/:movId",
      element:<RegisterForm/>
    },
    {
      errorElement:<Error/>

    }
    
  ]) 
  return (
    <div className="App">
     <RouterProvider router={appRoute} />
    </div>
  );
}



export default App;
