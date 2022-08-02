import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ResumeCom from './components/Resume'


function App() {
  const [categories] = useState([
    { name: 'Portfolio', description: '' },
    { name: 'Resume', description: '' },
  ]); 

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
      ></Nav>
        <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
            <ResumeCom></ResumeCom>
            <Footer></Footer>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
        </main> 
    </div>
  );
}

export default App;