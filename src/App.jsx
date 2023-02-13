import Nav from './components/navbar/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
    return (
        <div className="font-Poppins">
            <Nav />
            <Home />
            <About />
            <Projects />
            <Contact />       
        </div>
    )
    
}

export default App