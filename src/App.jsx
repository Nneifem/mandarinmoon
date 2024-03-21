import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import strawberryBkg from './assets/images/strawberry.jpg'
import './App.css'

function App() {

  return (
    <>
    <div style={{ backgroundImage: `url(${strawberryBkg})`, backgroundSize: 'cover', width: '100vw', height: '100vh'}}>
    <Outlet />
    </div>
    </>
  )
}

export default App;
