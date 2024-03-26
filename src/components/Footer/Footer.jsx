import React from 'react'
import IconGooglePlay from '../../assets/icongoogleplay.png'
import IconPlayStore from '../../assets/iconappstore.png'
import LogoMac from '../../assets/logo.svg';
import * as S from './footer_style';

export default function Footer() {
  return (
    <>
      <S.ContainerFooter>
        <div>
           <S.ImgMac src={LogoMac} alt='logo mec donalds'/>
           <p>© McDonald’s 2024</p>
        </div>

        <div>
           <img src={IconGooglePlay} alt='Icon google play'/>
           <img src={IconPlayStore} alt='Icon play store'/>
        </div>
      </S.ContainerFooter>
    </>
  )
}