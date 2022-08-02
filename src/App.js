import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import PortfolioCom from './components/Portfolio';
import Resume from './components/Resume'


function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
      ></Nav>
        <main>
        {!contactSelected ? (
          <>
          <About></About>
          <PortfolioCom></PortfolioCom>
          <Resume></Resume>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
          <div>
          <Footer ></Footer>
          </div>
        </main> 
    </div>
  );
}

export default App;