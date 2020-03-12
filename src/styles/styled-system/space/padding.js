import { css } from 'styled-components'

export default css`
  padding: ${({ p }) => p};
  padding-top: ${({ pt }) => pt};
  padding-right: ${({ pr }) => pr};
  padding-bottom: ${({ pb }) => pb};
  padding-left: ${({ pl }) => pl};

  ${({ px }) =>
    px &&
    `
    padding-left: ${px};
    padding-right ${px};
  `}

  ${({ py }) =>
    py &&
    `
    padding-top: ${py};
    padding-bottom: ${py};
  `}
`
