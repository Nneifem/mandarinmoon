import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import miffyBkg from './assets/images/miffy.jpg'
import './App.css'

function App() {

  return (
    <>
    <div style={{ backgroundImage: `url(${miffyBkg})`, backgroundSize: 'cover', width: '100vw', height: '100vh'}}>
    <Outlet />
    </div>
    </>
  )
}

export default App;
