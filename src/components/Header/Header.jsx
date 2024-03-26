
import React from 'react'
import LogoMec from '../../assets/logo.svg';
import Cell from '../../assets/cell01.svg';
import App from '../../assets/app.svg';
import * as S from './header_style';

export default function Header() {
  return (
    <S.ContainerHeader>
        <img src={LogoMec} alt=''/>
          
        <section>
            <div>
                <img src={Cell} alt='' />
                <p>Baixe o App</p>
            </div>

            <S.ContainerPedido>
                <h3>Peça seu Méqui</h3>
                <img src={App} alt='' />
            </S.ContainerPedido>
        </section>
    </S.ContainerHeader>
  )
}