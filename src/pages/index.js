import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Layout from '../components/layout';
// import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/contenidoInicio';
import ProductoPreview from '../components/productoPreview';
import useProductos from '../hooks/use-productos';


const ListadoProductos = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {
  
  const productos = useProductos();

  // console.log(habitaciones);

  return (
    <Layout>
      {/* <ImagenHotel/> */}
      {/* <div
        css={css`
          display: flex;
          flex-direction: column;
          flex: 1;
          align-items: center;
          justify-content: center;
        `}
      > */}
        {/* <video
          controls>
          <source src={prueba} type="video/mp4" />
        </video> */}
      {/* </div> */}
      <ContenidoInicio/>
      
      <h2 
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestros productos
      </h2>
      <ListadoProductos>
        {productos.map(producto => (
          <ProductoPreview
            key={producto.id}
            producto={producto}
          />
        ))}
      </ListadoProductos>
      

    </Layout>
  );
}

export default IndexPage;
