import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home/index.js'
import Projects from './components/Projects/index.js';
import About from './components/About/index.js';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Layout />}>
        <Route index element = {<Home/>} />
        <Route path= "/projects" element = {<Projects/>}/>
        <Route path= "/about" element = {<About/>}/>
        <Route path= "/contact" element = {<Contact/>}/>

      </Route>
    </Routes>
    </>

  );
}

export default App;
