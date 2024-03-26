import React, { useState } from 'react'
import BigMac from '../../assets/bigmac.png';
import Batata from '../../assets/batata.png';
import Sorvete from '../../assets/sorvete.png';
import BannerLanche from '../../assets/Banner_SacolaLanche.png';
import BannerRestaurante from '../../assets/Banner_Restaurante.png';
import BannerRodape from '../../assets/Banner_Rodape.png';
import Card from './Card';
import * as S from '../../components/Main/main_style';

export default function Main() {

  return (

    <main>
        <S.ContainerMequi>
            <S.ContainerPrincipal>
                <img src={BigMac}/>
                <h1>Bateu aquela <span>#fome</span> de <span>méqui</span>?</h1>
            </S.ContainerPrincipal>

            <S.ContainerImagens>
                <img src={BigMac} alt=''/>
                <img src={Batata} alt=''/>
                <img src={Sorvete} alt=''/>
            </S.ContainerImagens>
        </S.ContainerMequi>

        <S.Section02>
          <h3>Promoção</h3>

          <S.ContainerCards>
             <Card imagem={BannerLanche} texto={"Que tal um #MéquiNoSofá?"}/>
             <Card imagem={BannerRestaurante} texto={"Venha conhecer nossa nova loja"}/>
             <Card imagem={BannerRodape} texto={"Confira as medidas que o Méqui adotou!"}/>
          </S.ContainerCards>
        </S.Section02>
        

    </main>
  )
}