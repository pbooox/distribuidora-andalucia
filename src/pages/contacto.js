import React from 'react';
import Layout from '../components/layout';
import ContenidoForm from '../components/contenidoForm';

const Contacto = () => {
  return (
    <Layout>
    <form
      name="contact"
      method="post"
      data-netlify="true"
    >
      <input name="name" placeholder="nombre" type="text"/>
      <button>send</button>
    </form>
      {/* <ContenidoForm /> */}
    </Layout>
  )
}

export default Contacto;
