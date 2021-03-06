import styled from 'styled-components'

const ProductCard = {}

ProductCard.Card = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 100%;
  background-color: #222;
`
ProductCard.Product = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #c79931;
`
ProductCard.Product.Wrapper = styled.div`
  width: 250px;
  margin: 0 auto;
`
ProductCard.Product.Size = styled.div`
  position: absolute;
  color: whitesmoke;
  font-size: 2rem;
  font-weight: bold;
  top: 6vw;
  right: 2vw;
  transform: rotate(-90deg);
`
ProductCard.Product.Alcohol = styled.div`
  position: absolute;
  color: whitesmoke;
  font-size: 2rem;
  font-weight: bold;
  bottom: 3vw;
  left: 2vw;
`
ProductCard.Product.type = styled.div`
  position: absolute;
  color: whitesmoke;
  font-size: 1.2rem;
  top: 5vw;
  right: 90%;
  transform: rotate(-90deg);
  transform-origin: 100% 0;
  white-space: nowrap;
`
ProductCard.Detail = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 1vw;
`
ProductCard.Detail.Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: whitesmoke;
`
ProductCard.Detail.Wrapper = styled.div`
  position: relative;
`
ProductCard.Detail.Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.5vw 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 1px;
    width: 90px;
    background-color: #e1a957;
  }
  &::after {
    content: '';
    position: absolute;
    right: 50%;
    bottom: 0;
    height: 1px;
    width: 90px;
    background-color: #e1a957;
  }
`
ProductCard.Detail.LeftSide = styled.div`
  display: inline-block;
  width: 50%;
  padding-right: 2vw;
  color: #e1a957;
  font-weight: bold;
  text-align: right;
  letter-spacing: 3px;
  vertical-align: top;
`
ProductCard.Detail.RightSide = styled.div`
  display: inline-block;
  width: 50%;
  padding-left: 2vw;
  font-size: 0.8rem;
  text-align: left;
  vertical-align: top;
`

export default ProductCard
