export default function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>

      <p>
        If you have any questions, concerns, or feedback regarding LexStorm
        Vault, feel free to reach out to us. We value your input and are here to
        assist you.
      </p>

      <h2>Get In Touch</h2>
      <p>
        You can contact us directly at{" "}
        <a href="mailto:support@lexstormvault.com">support@lexstormvault.com</a>{" "}
        or fill out the form below:
      </p>

      <div className="contact-form">
        <form action="submit_contact_form" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
