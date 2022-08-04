import React, {useState} from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from './components/Portfolio';
import Nav from "./components/Nav"

function App() {
    const [currentPage, setCurrentPage] = useState(0)

    function displayPage(){
        if (currentPage === 0) {
            return<About></About>;
        }else if(currentPage === 1){
            return <Contact></Contact>
        } else {
            return <Portfolio></Portfolio>
        }
    }
    return (
        <>
            <Nav setCurrentPage={setCurrentPage}/>
            {displayPage()}
        </>
    )
}