exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsProducto {
        nodes {
          slug
        }
      }
    }
  `);

  // console.log(resultado.data.allDatoCmsHabitacion.nodes);
  
  if(resultado.errors) {
    reporter.panic('No hubo resultados.', resultado.errors);
  }

  //Si hay resultados
  
  const productos = resultado.data.allDatoCmsProducto.nodes;
  productos.forEach(producto => {
    actions.createPage({
      path: producto.slug,
      component: require.resolve('./src/components/productos.js'),
      context: {
        slug: producto.slug
      }
    });
  });

}