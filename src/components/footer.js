import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from './nav';
// import logo from '../images/logoblanco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const EnlaceHome = styled(Link)`
  color: #FFF;
  text-align: center;
  text-decoration: none;
`;

const Footer = ({title}) => {

    const year = new Date().getFullYear();

  return (
    <>
      
      <footer 
        css={css`
          background-color: #034838; 
          margin-top: 5rem;
          padding: 1rem;  
          img {
            width: 175px; 
            margin: auto;
            display: block;
            padding-bottom: 2rem;
            /* @media (max-width: 768px) {
              margin-bottom: 2rem;
              width: 210px;
            } */
          }
        `}
      >
        <div
          css={css`
            
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Navegacion />
          <EnlaceHome
            to='/'
          >
            <div 
              css={css`
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                `}
            >
              <FontAwesomeIcon css={css`
                padding-right: 1rem;
              `} icon={faFacebook} size="3x" />
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </div> 
          </EnlaceHome>
          
          
        </div>
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;
            color: #FFF;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <div>
            <ul>
              <p
                css={css`
                  margin:0;
                `}
              > <FontAwesomeIcon icon={faMapMarkedAlt} /> Paso Portezuelo Km 188 Periferico Salcajá, Quetzaltenango Guatemala. </p>
              <p
                css={css`
                  margin:0;
                `}
              > <FontAwesomeIcon icon={faPhoneSquareAlt} /> PBX: 7765-4470  </p>
              <p
                css={css`
                  margin:0;
                `}
              > <FontAwesomeIcon icon={faEnvelope} /> andaluciadistribuciongt@gmail.com </p>
            </ul>
          </div>
        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: #FFF;
          background-color: #02372b ;
          margin: 0;
          padding: 1rem;
        `}
      >
        {title}. Todos los derechos reservados {year} &copy;
      </p>
    </>
  )
}

export default Footer;
