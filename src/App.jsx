import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, 
Tech, Works, StarsCanvas} from './components';


const App = () => {


  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
      <div className='z-1  '>
          <StarsCanvas />
          </div>
        <div className=''>
          <Navbar/>
          <Hero />
        </div>
        <About/>
        <Experience />
        <Tech />
        <Works />
        <Contact/>
      </div>
    </BrowserRouter>
        
  )
}

export default App
