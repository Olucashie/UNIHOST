import{BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';
import Home from './pages/Home';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}
