import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from './nav';
import foto from '../images/logo.png'

const EnlaceHome = styled(Link)`
  color: #FFF;
  text-align: center;
  text-decoration: none;
`;

const Header = () => {
  return (
    <header 
      css={css`
        background-color: #034838; 
        padding: 1rem;  
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
          img {
            width: 288px; 
            margin: auto;
            display: block;
            @media (max-width: 768px) {
              margin-bottom: 2rem;
              width: 210px;
            }
          }
        `}
      >
        <EnlaceHome
          to='/'
        >
          <img 
            src={foto} 
            alt="Logotipo"
          />
        </EnlaceHome>
        <Navegacion />

      </div>
    </header>
  )
}

export default Header;
