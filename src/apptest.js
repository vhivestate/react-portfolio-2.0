import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioCom from './components/Portfolio';
import Resume from './components/Resume';
import Header from './components/Header'

function App() {
    const [currentPage, setCurrentPage] = useState(0)

    function displayPage(){
        if (currentPage === 0) {
            return<About></About>;
        }else if(currentPage === 1){
            return <Contact></Contact>
        } else if (currentPage ===2 ){
            return <Portfolio></Portfolio>
        } else {
            return <Resume></Resume>
        }
    }
    return (
        <>
            <Nav setCurrentPage={setCurrentPage}/>
            {displayPage()}
        </>
    )
}