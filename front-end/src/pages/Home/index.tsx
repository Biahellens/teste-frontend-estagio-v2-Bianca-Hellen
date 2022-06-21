//dependencies
import React from 'react'

//componentes
import { Container, Wrapper } from './style'

//images
import aiko from '../../assets/aiko.png';

export function Home(){
  return(
    <Wrapper>
      <Container padding='60px'>
        <img src={aiko} className="App-logo" alt="logo" />
      </Container>
    </Wrapper>
  )
}
