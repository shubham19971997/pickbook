import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import Signup from './components/Signup'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,  
    children: [
      {
        path: 'login',
        element: <Body/>
      },
      {
        path: 'signup',
        element: <Body/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
