import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';


function App() {
  const [categories] = useState([
    {
      name: 'About',
      description: '',
    },
    { name: 'Portfolio', description: '' },
    { name: 'Resume', description: '' },
    { name: 'Contact', description: '' },
  ]); 

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
        <main>
          <ContactForm></ContactForm>
          <Portfolio currentCategory={currentCategory}></Portfolio>
          <About></About>
          <Footer></Footer>
        </main> 
    </div>
  );
}

export default App;