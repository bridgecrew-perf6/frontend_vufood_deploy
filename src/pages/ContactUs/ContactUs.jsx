import React from 'react'
import { ContactForm, Map } from '../../components'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='app__contactus'>
        <ContactForm />
        <Map />
    </div>
  )
}

export default ContactUs