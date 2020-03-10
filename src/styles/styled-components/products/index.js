import styled from 'styled-components'
import { space } from '../config/space'
import { fullScreenHeight, flexCenter } from '../common'

const Products = styled.div``

Products.Hero = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 45% 55%;

  overflow: hidden;
  background-color: coral;

  ${fullScreenHeight};
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
`
Products.Filter = styled.div`
  padding: 3rem 1rem 0 1rem;

  background-color: white;

  h4 {
    margin-bottom: 1rem;
  }
`
Products.Filter.Check = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`
Products.Filter.Group = styled.div`
  padding-top: 1rem;

  label {
    position: relative;
    display: block;
    width: 100%;

    color: lightgrey;

    cursor: pointer;

    transition: 0.5s;
  }

  label::after {
    content: '+';
    position: absolute;
    top: 0;
    right: 0;
  }

  ${Products.Filter.Check}:checked ~ label {
    color: #333;
    transition: 0.1s;
  }
  ${Products.Filter.Check}:checked ~ label::after {
    content: '-';
  }
`
Products.Filter.Option = styled.ul`
  display: none;

  transition: 0.7s;

  ${Products.Filter.Check}:checked ~ & {
    display: block;
  }

  li {
    padding: 0.2rem 0;
  }
  li:first-child {
    margin-top: 0.5rem;
  }
`
Products.List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background-color: white;
`
Products.List.Wrapper = styled.div`
  height: 400px;
`
Products.Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;

  background-color: white;

  transition: 0.15s;

  &:hover {
    position: relative;
    z-index: 1;

    box-shadow: 0 2px 10px darkgrey;
  }
`

Products.Card.Content = styled.div`
  padding: ${space.L}px;
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
