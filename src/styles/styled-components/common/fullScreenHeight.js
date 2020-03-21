import { css } from 'styled-components'
import { breakpoint } from '../config/breakpoint'

export default css`
  height: 700px;

  @media (max-width: ${breakpoint.tablet}px) {
    height: 100vh;
  }
`
