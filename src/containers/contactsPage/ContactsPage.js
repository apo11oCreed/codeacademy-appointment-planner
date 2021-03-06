import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const {contacts,addContact}=props;

 const [name,setName]=useState('');
 const [phone,setPhone]=useState('');
 const [email,setEmail]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const { name, phone, email} = e.target.elements;
    
    const dup=contacts.some(item=>{return item.name==name.value});

    if(dup){
      alert('Duplication found!');
    } else {
      const obj={};
      obj.name=name.value;
      obj.phone=phone.value;
      obj.email=email.value;
      addContact(obj);

      name.value='';
      phone.value='';
      email.value='';
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        setName={setName} 
        phone={phone}
        setPhone={setPhone} 
        email={email}
        setEmail={setEmail} 
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
