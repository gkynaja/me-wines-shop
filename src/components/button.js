import React from 'react'
import styled from 'styled-components'

const size = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '3rem',
}

const Wrapper = styled.div`
  display: inline-block;
  padding: 0.5em 3.5em;
  margin-top: ${props => size[props.mt] || 0};
  margin-right: ${props => size[props.mr] || 0};
  margin-bottom: ${props => size[props.mb] || 0};
  margin-left: ${props => size[props.ml] || 0};

  border: ${props => (props.outline ? '1px solid black' : 'none')};
  border-bottom: 3px solid darkred;
  border-radius: 0.5em;

  font-weight: bold;
  color: ${props => (props.outline ? 'black' : 'white')};

  background-color: ${props => (props.outline ? 'transparent' : '#ff5e6c')};
  cursor: pointer;

  &:active {
    transform: translateY(2px);
    border: none;
  }
`

const Button = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default Button
