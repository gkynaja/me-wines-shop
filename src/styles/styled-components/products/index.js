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
`

Products.Title = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  width: 100%;

  text-align: center;
`

Products.Image = styled.img`
  width: 100%;

  min-height: 100%;
  min-width: 1200px;
`

Products.Content = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  padding: 10rem 0;
`

Products.List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, 400px);
  padding: 4.5rem 1rem 0 1rem;
  background-color: white;

  @media (max-width: ${breakpoint.tablet}px) {
    /* grid-template-columns: repeat(2, 255px); */
  }
`
Products.List.Wrapper = styled.div`
  height: 400px;
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
