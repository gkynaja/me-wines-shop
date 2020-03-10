import React from 'react'
import styled from 'styled-components'
import { fontSize, fontWeight, fontFamily, color } from '../../styled-system'

const typographyStyles = {
  H1: {
    fontSize: '5rem',
    fontWeight: 'bold',
    fontFamily: 'inherit',
  },
  H4: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'inherit',
  },
  H5: {
    fontSize: '1rem',
    fontWeight: 'bold',
    fontFamily: 'inherit',
  },
}

const DynamicComponent = styled.div`
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${color}
`

const H1 = ({ children, tag = 'div', ...props }) => (
  <DynamicComponent as={`${tag}`} {...typographyStyles['H1']} {...props}>
    {children}
  </DynamicComponent>
)
const H4 = ({ children, tag = 'div', ...props }) => (
  <DynamicComponent as={`${tag}`} {...typographyStyles['H4']} {...props}>
    {children}
  </DynamicComponent>
)
const H5 = ({ children, tag = 'div', ...props }) => (
  <DynamicComponent as={`${tag}`} {...typographyStyles['H5']} {...props}>
    {children}
  </DynamicComponent>
)
export { H1, H4, H5 }
