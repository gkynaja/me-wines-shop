import styled from 'styled-components'
import { breakpoints } from '../base/variable'

const Section = styled.section`
  position: relative;
  display: flex;
  height: 500px;

  @media (max-width: ${breakpoints.tablet}px) {
    flex-flow: column;
    height: 600px;
  }
`

const Wrapper = styled.div`
  flex: 1;
`

const Address = styled.div`
  position: absolute;
  top: 50%;
  left: 15vw;
  transform: translateY(-50%);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding: 2em 3em;
  background-color: white;
  z-index: 1;

  h6 {
    margin-bottom: 1em;
  }

  p {
    font-size: 0.6em;
  }

  a {
    padding: 1.5em 2.5em;
    margin-top: 2em;
    background-color: #d8232f;
    color: white;
    font-size: 0.4em;
    font-weight: bold;
    letter-spacing: 5px;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    position: static;
    top: unset;
    transform: none;
    flex: 0.5;

    h6 {
      font-size: 2em;
    }

    p,
    a {
      font-size: 1em;
    }
  }
`

export { Section, Address, Wrapper }
