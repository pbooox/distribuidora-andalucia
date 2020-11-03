import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const TextoInicio = styled.div`
  padding-top: 2rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  p {
    line-height: 2; 
    text-align: justify;
  }
`;

const  DivField = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  @media (max-width: 420px){
    flex-direction: column;
    align-items: flex-start;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const LabelField = styled.label`
  width: 200px;
  color: #757575;
  margin-right: 10px;

  @media (max-width: 420px){
    margin-bottom: 5px;
  }
`;

const InputField = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #d5dbd9;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 3px;
  transition: all 0.3s ease;

  &:focus {
    border: 1px solid #0ee231;
  }
`;


const ContenidoForm = () => {

  const informacion = useStaticQuery(graphql`
  query {
    allDatoCmsPagina(filter: { slug: {eq: "contacto"}}) {
      nodes {
        titulo
        contenido
      }
    }
  }
  `);

  const { titulo, contenido } = informacion.allDatoCmsPagina.nodes[0];


  // const [datos, setDatos] = useState({
  //   nombre: '',
  //   correo: '',
  //   telefono: '',
  //   asunto: '',
  //   mensaje: ''
  // })

  const onSubmit = (data, e) => {
    // e.preventDefault();
    // console.log(data);
    // e.target.reset();
    try {
      fetch("https://tender-cori-95c4c7.netlify.app/contacto", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    } catch (error) {
      // handle server errors
    }
  }

  const {register, errors, handleSubmit} = useForm();

  // const handleInputChange = (event) => {
  //   // console.log(event.target.name)
  //   // console.log(event.target.value)
  //   setDatos({
  //       ...datos,
  //       [event.target.name] : event.target.value
  //   })
  // }

  // const enviarDatos = (event) => {
  //   event.preventDefault()
  //   console.log('enviando datos...' + datos.nombre + ' ' + datos.correo)
  // }


  return (
    <>
      <h2
          css={css`
            text-align: center;
            font-size: 4rem;
            margin-top: 4rem;
          `}
        >{titulo}</h2>
      <TextoInicio>
        <p>{contenido}</p>
      </TextoInicio>
      <div
        css={css`
          max-width: 500px;
          width: 100%;
          margin: 20px auto;
          padding: 30px;
          box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.125);
        `}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          css={css`
            width: 100%;
          `}
          name="contact"
          method="post"
          data-netlify="true"
        >
        
          <input type="hidden" name="form-name" value="contact" />

          <DivField>
            <LabelField>Nombre</LabelField>
            <InputField name="nombre" type="text" ref={register({
              required: {
                value: true,
                message: 'Campo requerido'
              }
            })}/>
            <span>
                {errors?.nombre?.message}
            </span>
          </DivField>
          <DivField>
            <LabelField>Correo electrónico</LabelField>
            <InputField name="correo" type="email" ref={register({
              required: {
                value: true,
                message: 'Campo requerido'
              }
            })}/>
            <span>
                {errors?.correo?.message}
            </span>            
          </DivField>
          <DivField>
            <LabelField>Numero de teléfono</LabelField>
            <InputField name="telefono" type="text" ref={register({
              required: {
                value: true,
                message: 'Campo requerido'
              }
            })}/>
            <span>
                {errors?.telefono?.message}
            </span>            
          </DivField>
          <DivField>
            <LabelField>Asunto</LabelField>
            <InputField name="asunto" type="text" ref={register({
              required: {
                value: true,
                message: 'Campo requerido'
              }
            })}/>
            <span>
                {errors?.asunto?.message}
            </span>            
          </DivField>
          <DivField>
            <LabelField>Mensaje</LabelField>
            <textarea
              css={css`
                width: 100%;
                outline: none;
                border: 1px solid #d5dbd9;
                font-size: 15px;
                padding: 8px 10px;
                border-radius: 3px;
                transition: all 0.3s ease;
                resize: none;
                height: 250px;

                &:focus {
                  border: 1px solid #0ee231;
                }
              `}
              name="mensaje" 
              type="text" 
              ref={register({
                required: {
                  value: true,
                  message: 'Campo requerido'
                }
              })}
            />
            <span>
                {errors?.mensaje?.message}
            </span>            
          </DivField>
          <DivField>
            <button 
              css={css`
                width: 100%;
                padding: 8px 10px;
                font-size: 15px;
                border: 0;
                background: #034838;
                color: #fff;
                cursor: pointer;
                border-radius: 3px;   
                outline: none;
                
                &:hover {
                  background: #20997d;
                }
              `}
              type="submit"
            >
              Enviar</button>
          </DivField>
        </form>
      </div>
    </>
  )
}

export default ContenidoForm;
