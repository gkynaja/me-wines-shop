import styled from 'styled-components'
import { breakpoints } from '../base/variable'

const Section = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* height: 700px; */
  padding: 5vw 2vw;
  background-color: #191919;

  @media (max-width: ${breakpoints.mobile}px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    padding: 1rem;
  }
`

const Site = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;

  color: #757575;

  h5 {
    color: white;
  }

  a {
    padding: 0.5em 1em;
    border-radius: 2em;
    font-size: 0.6em;
    font-weight: 500;
    transition: 0.5s;
  }
  a:hover,
  a.active {
    color: black;
    background-color: #e1a957;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    display: block;
  }
`

const Social = styled.div`
  color: #757575;

  h5 {
    margin-bottom: 0.5em;
    color: white;
  }

  div {
    font-size: 0.8em;
  }
`

const Contact = styled.div`
  color: #757575;
  font-weight: 500;

  h5 {
    margin-bottom: 0.5em;
    color: white;
  }

  svg,
  p,
  a {
    display: inline-block;
    font-size: 0.6em;
  }
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  h5 {
    margin: 0.5em 0;
    color: white;
  }

  h6 {
    color: #a0864e;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    order: 4;
  }
`

export { Section, Site, Contact, Logo, Social }
