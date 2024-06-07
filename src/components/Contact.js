import React from 'react';

function Contact() {
  return (
    <div id="contact" className="container">
      <h2>Contacto</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
