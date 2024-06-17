import React from 'react';
import Navbar from "../Component/Navbar/Fronr";
import Footer from "../Component/Footer/Footer";
import ContactForm from '../Component/ContactComponent/ContactForm.jsx';


const Contact = () => {
  return (
    <div style={{background:"#ffffff"}}>
      <Navbar />
      <div className="content-container"  >
       <ContactForm />
   
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;