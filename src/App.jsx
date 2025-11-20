import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ve-chung-toi" element={<div className="min-h-screen p-8"><h1 className="text-2xl font-bold">Về chúng tôi</h1></div>} />
          <Route path="/dich-vu" element={<div className="min-h-screen p-8"><h1 className="text-2xl font-bold">Dịch vụ</h1></div>} />
          <Route path="/tien-ich" element={<div className="min-h-screen p-8"><h1 className="text-2xl font-bold">Tiện ích cho bạn</h1></div>} />
          <Route path="/blog" element={<div className="min-h-screen p-8"><h1 className="text-2xl font-bold">Blog</h1></div>} />
          <Route path="/lien-he" element={<div className="min-h-screen p-8"><h1 className="text-2xl font-bold">Liên hệ</h1></div>} />
        </Routes>
     </div>
    </Router>
  )
}

export default App
