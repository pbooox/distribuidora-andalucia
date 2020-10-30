import React from 'react';

const ContenidoForm = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
    >
      <input name="name" placeholder="nombre" type="text"/>
      <button>send</button>
      {/* <div className="input_field">
        <label>Nombre</label>
        <input name="nombre" type="text" className="input" />
      </div>
      <div className="input_field">
        <label>Correo electrónico</label>
        <input name="correo" type="email" className="input" />
      </div>
      <div className="input_field">
        <label>Numero de teléfono</label>
        <input name="telefono" type="text" className="input" />
      </div>
      <div className="input_field">
        <label>Asunto</label>
        <input name="asunto" type="text" className="input" />
      </div>
      <div className="input_field">
        <label>Mensaje</label>
        <textarea name="mensaje" type="text" className="input" />
      </div>
      <div className="inputfield">
        <button type="submit">Enviar</button>
      </div> */}
    </form>
  )
}

export default ContenidoForm;
