import React from 'react'
import * as S from './main_style';

export default function Card({imagem, texto}) {
  return (
      <div>
         <img src={imagem} alt='' />
         <h2>{texto}</h2>
         <a href='#'>Clique aqui</a>
      </div>
  )
}