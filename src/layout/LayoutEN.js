import React from 'react'

import FooterEN from '../components/Footer/FooterEN'
import HeaderEN from '../components/Header/HeaderEN'
import { Container } from './LayoutStyles'

export const LayoutEN = ({children}) => {
  return (
    <Container>
     <HeaderEN/>
     <main>{children}</main> 
     <FooterEN/>
    </Container>
  )
}
