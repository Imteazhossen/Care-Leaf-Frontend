import React from 'react';
import ContactHero from '../Components/ContactHero';
import ContactInfo from '../Components/ContactInfo';
import ContactMap from '../Components/ContactMap';

const Contact = () => {
    return (
        <div className='bg-white'>
            <ContactHero></ContactHero>
            <ContactInfo></ContactInfo>
            <ContactMap></ContactMap>
        </div>
    );
};

export default Contact;