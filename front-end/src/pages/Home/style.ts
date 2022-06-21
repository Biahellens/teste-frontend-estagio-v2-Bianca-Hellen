// dependencies
import styled from 'styled-components'

// componentes
import { Flex, Box } from 'reflexbox'

// interfaces
import { BoxProps } from 'reflexbox'

export const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  display: flex;
`

export const Container = styled(Box)<BoxProps>`
  justify-Content: center;
`
