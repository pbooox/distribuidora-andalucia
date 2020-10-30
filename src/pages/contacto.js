import React from 'react';
import Layout from '../components/layout';
import ContenidoForm from '../components/contenidoForm';

const Contacto = () => {
  return (
    <Layout>
    {/* <form
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <input name="name" placeholder="nombre" type="text"/>
      <button type="submit" >send</button>
    </form> */}
      <ContenidoForm />
    </Layout>
  )
}

export default Contacto;
