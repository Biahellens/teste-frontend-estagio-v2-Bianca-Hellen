// dependencies
import styled from 'styled-components'

// componentes
import { Flex, Box } from 'reflexbox'

// interfaces
import { BoxProps } from 'reflexbox'

export const Wrapper = styled(Flex)`
  flex-wrap: wrap;
`

export const Container = styled(Box)<BoxProps>`
  padding: 2rem;
  display:flex;
  flex-wrap:wrap;
`

export const MapId = styled.div`

`
export const FormMap = styled.div`
  width: 600px;
  height: 400px;

  display:flex;
  flex-wrap: wrap;
`

export const Form = styled.form`
  flex-wrap: wrap;

  background: #ffffff;
  border: 2px solid #87CEFA;
  border-radius: 2rem;

  padding: 2rem 3rem;

  position: absolute;
`
export const Fieldset = styled.fieldset`
  border: none;
`
export const ContainerInput = styled(Box)<BoxProps>`
  padding: 0.8rem;

  flex-wrap: wrap;
`
