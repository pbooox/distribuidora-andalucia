import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import prueba from '../videos/prueba2.mp4';

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;   
  }

  p {
    line-height: 2; 
    text-align: justify;
  }
`;  

const ContenidoInicio = () => {

  const informacion = useStaticQuery(graphql`
  query {
    allDatoCmsPagina(filter: { slug: {eq: "inicio"}}) {
      nodes {
        titulo
        contenido
      }
    }
  }
  `);
  // console.log(informacion.allDatoCmsPagina.nodes[0]);

  const { titulo, contenido } = informacion.allDatoCmsPagina.nodes[0];

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
        {/* <Image fluid={imagen.fluid}/> */}
        <video css={css`
          width: 100%;
          height: auto;
        `}
          controls
          >
          <source src={prueba} type="video/mp4" />
          
        </video>
      </TextoInicio>
    </>
  );
}

export default ContenidoInicio;
