import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ShoppingList from './pages/ShoppingList'

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Inköpslista</Link>
        {' | '}
        <Link to="/task">Task-Manager</Link>
        {' | '}
        <Link to="/about">Om appen</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ShoppingList />} />
        <Route path="/task" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}

export default App
