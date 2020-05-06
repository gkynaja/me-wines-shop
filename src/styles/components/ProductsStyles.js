import styled from 'styled-components'
import { space } from '../styled-components/config/space'
import { breakpoints } from '../base/variable'

const Products = styled.div``

const Container = styled.div`
  max-width: 60vw;
  margin: 4em auto;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  color: #e1a957;

  @media (max-width: ${breakpoints.tablet}px) {
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
  @media (max-width: ${breakpoints.tablet}px) {
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

const FilterPanel = styled.div`
  font-size: 1em;
  @media (max-width: ${breakpoints.tablet}px) {
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

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 3em;
`

Products.List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-row-gap: 3em;
  padding: 4.5rem 1rem 0 1rem;
  /* background-color: white; */

  @media (max-width: ${breakpoints.mobile}px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`
Products.List.Wrapper = styled.div`
  /* height: 400px; */

  @media (max-width: ${breakpoints.mobile}px) {
    height: auto;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #1a1a1a;
  }

  a {
    width: 100%;
  }
`

const Wrapper = styled.div`
  width: 50%;
  max-width: 250px;
  margin: 0 auto;
`

Products.Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  padding: 1rem;
  cursor: pointer;

  /* background-color: white; */

  transition: 0.3s;

  &:hover {
    /* position: relative;
    z-index: 1;

    box-shadow: 0 2px 10px darkgrey; */
    background-color: #1a1a1a;
  }
`

const Detail = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;

  h5 {
    margin-top: 2em;
    word-break: break-word;
  }
`

const Name = styled.p`
  display: -webkit-box;
  height: 4em;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.6em;
  font-weight: 500;
`
const Price = styled.h5`
  font-size: 0.6em;
  font-weight: 500;
`

Products.Card.Content = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;

  h5 {
    margin-top: 2em;
    word-break: break-word;
  }
`

Products.Card.Button = styled.div`
  padding: 1rem 3rem;
  margin-top: 1rem;

  border: 1px solid #333;

  display: block;

  /* ${Products.Card}:hover & {
    display: block;
  } */
`

export {
  Products,
  Container,
  Content,
  FilterPanel,
  List,
  Card,
  Wrapper,
  Detail,
  Name,
  Price,
}
