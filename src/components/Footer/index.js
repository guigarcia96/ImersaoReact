import React from 'react';
import { FooterBase } from './styles';
import logo from '../../assets/logo_main.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.gmflix.vercel.app/">
        <img src={logo} width={150} height={75} alt="Logo GMFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
