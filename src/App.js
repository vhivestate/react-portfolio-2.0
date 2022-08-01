import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';


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
          <Project currentCategory={currentCategory}></Project>
          <About></About>
        </main> 
    </div>
  );
}

export default App;