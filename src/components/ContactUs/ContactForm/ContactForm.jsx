import React from 'react'
import images from '../../../constants/images'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='app__contactform section__padding'>
        <div className='app__contactform-form'>
            <div className='contact__form-input'>
                <form className='create-contact__form'>
                    <input 
                    className="contact__form-field" 
                    placeholder='Name' 
                    onChange={() => {}} 
                    name='name'
                    />
                    <input 
                    className="contact__form-field" 
                    placeholder='Email' 
                    onChange={() => {}} 
                    name='email'
                    />
                    <textarea 
                    className="contact__form-field contact-form-message" 
                    placeholder='Message' 
                    onChange={() => {}} 
                    name='message'
                    />
                    
                    <button onClick={() => {}} className="contact__form-button">Submit</button>
                </form>
            </div>
        </div>
        <div className='contact__form-images'>
            <img src={images.contact} alt="" />
        </div>
    </div>
  )
}

export default ContactForm