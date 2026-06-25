'use client';

import { FormEvent } from 'react';

export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    const email = values.email as string;

    if (!values.name || !email || !values.message) {
      event.preventDefault();
      alert('Please fill in all required fields.');
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(email)) {
      event.preventDefault();
      alert('Please enter a valid email address.');
      return;
    }
  }

  return (
    <section id="contact" aria-label="Contact information and form">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src="/assets/email.png" alt="Email icon" className="icon contact-icon email-icon" />
          <p>
            <a href="mailto:baduntobi2020@gmail.com">baduntobi2020@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img src="/assets/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
          <p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img src="/assets/whatsapp-seeklogo.png" alt="Whatsapp icon" className="icon contact-icon" />
          <p>
            <a href="https://wa.me/qr/VGPTFDGWO35EJ1" target="_blank" rel="noopener noreferrer">
              WhatsApp Chat
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img src="/assets/phone-seeklogo.png" alt="Phone icon" className="icon contact-icon" />
          <p>
            <a href="tel:+2348132194046">+234 813 219 4046</a>
          </p>
        </div>
      </div>
      <form
        className="contact-form"
        id="contactForm"
        action="https://formspree.io/f/xvodjxdl"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Your Name" aria-label="Your Name" required />
          <input type="email" id="email" name="email" placeholder="Your Email" aria-label="Your Email" required />
        </div>
        <div className="form-group">
          <input type="text" id="subject" name="subject" placeholder="Subject" aria-label="Subject" required />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" placeholder="Your Message" rows={6} aria-label="Your Message" required />
        </div>
        <button type="submit" className="btn btn-color-1" aria-label="Send Message">
          <i className="fas fa-paper-plane" /> Send Message
        </button>
      </form>
    </section>
  );
}
