import { graphql, useStaticQuery } from 'gatsby';

const useProducto = () => {

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsProducto  {
        nodes {
          id
          titulo
          slug
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  // console.log(data);
  // return( <p>desde hook</p> );
  return data.allDatoCmsProducto.nodes.map(producto => ({
    id: producto.id,
    titulo: producto.titulo,
    contenido: producto.contenido,
    imagen: producto.imagen,
    slug: producto.slug,
  }))
}

export default useProducto;