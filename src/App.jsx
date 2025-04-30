import { useState } from 'react'
import { PostProvider } from './context/PostContext'
import Feed from './main/postlist'
import Navigation from './nav/navigation'
import CreateNewPpost from './main/createpost'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Docs from './pages/Docs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navigation />
      <div>

        <PostProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Docs' element={<Docs />} />
          </Routes>
          
          
        </PostProvider>
      </div>
    </div>
  )
}

export default App
