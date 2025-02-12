import './App.css'
import { Home } from './pages/Home.jsx'
import { Profile } from './pages/Profile.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout.jsx'
import { Register } from './pages/Register.jsx'
import { Login } from './pages/Login.jsx'
import { AuthProvider } from './context/AuthContext'


function App(){
    return (
        <AuthProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/Register" element={<Register/>}/>
                        <Route path="/Login" element={<Login/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App