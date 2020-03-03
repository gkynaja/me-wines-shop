import React from 'react'
import styled, { css } from 'styled-components'

const colorPalette = {
  primary: '',
  secondary: '',
  accent: '#ff5e6c',
}

const common = css`
  margin: ${props => (props.noMargin ? '0 auto' : '1rem auto 0')};

  font-family: ${props =>
    props.fontType === 'display' ? 'Love Ya Like A Sister' : 'inherit'};
  font-weight: ${props => props.weight || 'normal'};

  color: ${props => colorPalette[props.color] || colorPalette['primary']};
`

const Header1 = styled.h1`
  ${common}
  font-size: 5em;
  line-height: 1.25;
`
const Header2 = styled.h2`
  ${common}
`
const Header3 = styled.h3`
  ${common}
  font-size: 2rem;
`
const Header4 = styled.h4`
  ${common}
  font-size: 1.25rem;
`
const Paragraph = styled.p`
  ${common}
`

const headerType = {
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  p: Paragraph,
}

const Text = ({ type, children, ...props }) => {
  return React.createElement(
    headerType[type] || headerType['p'],
    props,
    children
  )
}

export default Text
