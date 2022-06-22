// dependencies
import styled from 'styled-components'

// componentes
import { Flex, Box } from 'reflexbox'

// interfaces
import { BoxProps } from 'reflexbox'

export const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  justify-Content: center;
  align-Items: center;
  align-Content: center;
`

export const Container = styled(Box)<BoxProps>`
  padding: 2rem;
`

export const MapId = styled.div`

`
