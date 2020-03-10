import { css } from 'styled-components'
import { breakpoint } from '../config/breakpoint'

export default css`
  @media (max-width: ${breakpoint.tablet}px) {
    max-height: 700px;
  }

  height: 100vh;
`
