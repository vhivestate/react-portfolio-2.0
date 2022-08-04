import React, {useState, useEffect} from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from './components/Portfolio';

function Nav(props) {

    // <About/> === [0];
    
    // const [currentPage, setCurrentPage ] = useState(0);
    // var pageState = useState(0);
    // var page = pageState.About[0];
    // var setPage = pageState.Contact[1];
    
    // function handleContactClick(){
    //     setCurrentPage({Contact});
    //     // setPage('contact');
    // }
    


    return (
        <div>
            <button onClick={() => setCurrentPage === props.currentPage[0]}>
                About
            </button>
            <button onClick={() => setCurrentPage === (props.Contact.currentPage[1])}>
                Contact
            </button>
            <button onClick={() => setCurrentPage === (props.Portfolio.currentPage[2])}>
                Portfolio
            </button>
        </div>
    )
  }