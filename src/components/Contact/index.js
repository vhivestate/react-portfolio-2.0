import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
                //only updates if form passed quality
                if (!errorMessage) {
                    setFormState({ ...formState, [e.target.name]: e.target.value });
                  }
              }
              console.log('errorMessage', errorMessage);
          } 
           
         //get input values
        setFormState({...formState, [e.target.name]: e.target.value })
        // console.log(formState);
      }

      //get input value when form is submitted
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    return (
        <section className='contactForm'>
          <h1>Email Me:</h1>
          <form action="" id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name"></label>
              <input type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Name"/>
            </div>
            <div>
              <label htmlFor="email"></label>
              <input type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Email Address"/>
            </div>
            <div>
              <label htmlFor="message"></label>
              <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Your message"/>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
            <Button     
            color="success"
            outline
            size="lg"
            type="submit">Submit</Button>
          </form>
        </section>
        );

    // JSX
    }
    
    export default ContactForm;