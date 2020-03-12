import { css } from 'styled-components'

export default css`
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt};
  margin-right: ${({ mr }) => mr};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};

  ${({ mx }) =>
    mx &&
    `
    margin-left: ${mx};
    margin-right ${mx};
  `}

  ${({ my }) =>
    my &&
    `
    margin-top: ${my};
    margin-bottom: ${my};
  `}
`
