import styled from 'styled-components'
import { space } from '../config/space'
import { breakpoint } from '../config/breakpoint'
import { fullScreenHeight, flexCenter } from '../common'

const Products = styled.div``

Products.Hero = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 45% 55%;
  height: 100vh;
  max-height: 500px;
  overflow: hidden;
  background-color: coral;

  @media (max-width: ${breakpoint.tablet}px) {
    max-height: 700px;
    grid-template-columns: 1fr;
    grid-template-rows: 80% 20%;
  }
`

Products.Title = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  line-height: 1.2;

  h1::before,
  h1::after {
    content: attr(data-text);
    display: block;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }

  @media (max-width: ${breakpoint.tablet}px) {
    top: auto;
    bottom: 0;
    transform: none;
    h1 {
      font-size: 4rem;
      line-height: 1;
    }
  }
`

Products.Image = styled.img`
  width: 100%;

  min-height: 100%;
  min-width: 1200px;

  @media (max-width: ${breakpoint.tablet}px) {
    height: 100%;
    min-width: auto;
    grid-area: 1;
  }
`

Products.Content = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  padding: 10rem 0;

  @media (max-width: ${breakpoint.tablet}px) {
    padding-top: 1rem;
    padding-bottom: 5rem;
    grid-template-columns: 1fr;
  }

  @media (max-width: 1120px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
Products.FilterOverlay = styled.label`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  #trigger-filter:checked ~ & {
    display: block;
  }
`
Products.Triggerer = styled.div`
  display: none;
  align-items: center;
  padding: 2rem 0;
  @media (max-width: ${breakpoint.tablet}px) {
    display: flex;
  }
`
Products.Triggerer.Filter = styled.label`
  display: block;
  padding: 1rem;
  flex: 1;
  color: #0c1e2d;
  background-color: whitesmoke;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
  }
`
Products.Triggerer.Sorting = styled(Products.Triggerer.Filter)`
  color: white;
  background-color: #0c1e2d;
`

Products.Filter = styled.div`
  @media (max-width: ${breakpoint.tablet}px) {
    position: fixed;
    left: -100%;
    width: 300px;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    z-index: 1000;

    #trigger-filter:checked ~ & {
      top: 0;
      left: 0;
      bottom: 0;
    }
  }
`
Products.List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, 400px);
  padding: 4.5rem 1rem 0 1rem;
  background-color: white;

  @media (max-width: ${breakpoint.mobile}px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: ${breakpoint.tablet}px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`
Products.List.Wrapper = styled.div`
  height: 400px;

  @media (max-width: ${breakpoint.mobile}px) {
    height: auto;
  }
`
Products.Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  padding: 1rem;

  background-color: white;

  transition: 0.15s;

  &:hover {
    position: relative;
    z-index: 1;

    box-shadow: 0 2px 10px darkgrey;
  }
`

Products.Card.Content = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;

  h5 {
    margin-top: 1rem;
  }
`

Products.Card.Button = styled.div`
  padding: 1rem 3rem;
  margin-top: 1rem;

  border: 1px solid #333;

  display: none;

  ${Products.Card}:hover & {
    display: block;
  }
`

export default Products
