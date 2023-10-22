import './App.css'
import HomePage from './pages/HomePage/HomePage'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}


function MainApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default MainApp