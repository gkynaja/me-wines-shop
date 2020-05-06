import styled from 'styled-components'
import { breakpoints, colors } from '../../base/variable'

const Section = styled.section`
  padding-bottom: 10vw;
  background-color: black;
`

const Container = styled.div`
  max-width: 50vw;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}px) {
    max-width: 83vw;
  }
`

const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto 10vw auto;

  @media (max-width: ${breakpoints.tablet}px) {
    justify-content: space-around;
  }
`

const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  order: ${({ position }) => (position === 'left' ? '1' : '2')};

  @media (max-width: ${breakpoints.tablet}px) {
    position: relative;
    width: 30%;
    padding-top: 70%;
    height: 0;
    order: 1;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 30vw;
  background: linear-gradient(to right top, #a76f1d, #e1a957);
  box-shadow: 0px 20px 20px 4px rgba(25, 25, 25, 0.5);

  .gatsby-image-wrapper {
    width: 8vw;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    box-shadow: none;

    .gatsby-image-wrapper {
      width: 75%;
    }
  }
`

const Detail = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  color: white;
  order: ${({ position }) => (position === 'left' ? '1' : '2')};

  h5 {
    margin-bottom: 1em;
  }

  p {
    color: #909090;
    font-size: 0.8em;
    margin-bottom: 2em;
  }

  button {
    font-size: 0.8em;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    width: 60%;
    order: 2;
  }
`

const Banner = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 20%;
  background: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: grayscale(0.2);
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.5);
  margin-top: 10vw;
  margin-bottom: 10vw;
`

export { Section, Container, Card, Thumbnail, Detail, Wrapper, Banner }
