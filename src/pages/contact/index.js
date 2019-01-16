import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import contactStyles from './contact.module.css'

const ContactPage = () => (
  <Layout colour="black" active="contact">
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>
      You can find me on{' '}
      <a
        className={contactStyles.contactTwitter}
        href="https://twitter.com/jackjdleslie"
      >
        Twitter
      </a>{' '}
      and fire me a DM, or if you're feeling fancy you can connect with me on{' '}
      <a
        className={contactStyles.contactLinkedIn}
        href="https://linkedin.com/in/jackjdleslie"
      >
        LinkedIn
      </a>
      . If you're really cool you can get me on{' '}
      <a
        className={contactStyles.contactKeybase}
        href="https://keybase.io/jackleslie"
      >
        Keybase
      </a>
      , or feel free to use the form below.
    </p>
    <form
      className={contactStyles.contactForm}
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <div className={contactStyles.contactElement}>
        <input
          className={contactStyles.contactInput}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
      </div>
      <div className={contactStyles.contactElement}>
        <input
          className={contactStyles.contactInput}
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div className={contactStyles.contactElement}>
        <textarea
          className={contactStyles.contactTextArea}
          name="message"
          id="message"
          rows="6"
          placeholder="Message"
          required
        />
      </div>
      <div className={contactStyles.contactElement}>
        <input
          className={contactStyles.contactButton}
          type="submit"
          value="Send Message"
        />
      </div>
    </form>
  </Layout>
)

export default ContactPage
