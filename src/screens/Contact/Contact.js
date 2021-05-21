import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div id='contact-container'>
      <div className='contact-link-container'>
      <a
        href='mailto: craig.a.navarro@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
        className='contact-link'>
        <h1 className='contact-title'>
          Email Me
        </h1>
        </a>
      </div>
      <div className='contact-link-container'>
      <a
        href='https://www.linkedin.com/in/craig-navarro-35004420b/'
        target='_blank'
        rel='noopener noreferrer'
        className='contact-link'>
        <h1 className='contact-title'>
          Linkedin
        </h1>
      </a>
      </div>
      <div className='contact-link-container'>
      <a
        href='https://github.com/foremanlb'
        target='_blank'
        rel='noopener noreferrer'
        className='contact-link'>
        <h1 className='contact-title'>
          Git
        </h1>
      </a>
      </div>
    </div>
  )
}
