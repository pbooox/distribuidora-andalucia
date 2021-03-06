import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layourt from './layout';

export const query = graphql`
  query($slug: String!) {
    allDatoCmsProducto(filter: {slug: {eq: $slug}}) {
      nodes {
        titulo
        contenido
        imagen {
          fluid(maxWidth: 1200){
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`;


const ProductoTemplate = ({ data: { allDatoCmsProducto: { nodes } } }) => {

  const { titulo, contenido, imagen } = nodes[0];
  // console.log(nodes);

  return (
    <Layourt>
      <main
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          width: 95%;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-top: 4rem;
          `}
        >{titulo}</h1>
        <p
          css={css`
            text-align: justify;
          `}
        >{contenido}</p>
        <Image
          fluid={imagen.fluid}
        />
      </main>
    </Layourt>
  )
}

export default ProductoTemplate;
