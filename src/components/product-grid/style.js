import styled from 'styled-components'
import { color } from '../../styles/config'

const ProductGrid = {}

ProductGrid.Title = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 0.5rem;
  background-color: white;
  text-align: center;
  /* box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.5); */
  box-shadow: inset 0px 0px 8px 1px rgba(0, 0, 0, 0.5);
`
ProductGrid.TextHighlight = styled.div`
  position: relative;
  height: 100%;
  p {
    position: absolute;
    left: 0;
    bottom: 0;
    color: #c1902c;
    font-size: 4rem;
    letter-spacing: 0.75rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transform: rotate(-90deg);
    transform-origin: left;
  }
`
ProductGrid.Title.Number = styled.div`
  font-size: 5rem;
  line-height: 1;
`
ProductGrid.Title.Underline = styled.div`
  width: 4rem;
  height: 10px;
  margin: 1rem auto;
  background-color: ${color.bgColor.primary};
`
ProductGrid.Title.Brand = styled.div`
  color: ${color.textColor.accent};
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  word-break: break-word;
`
ProductGrid.BottleImage = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  background-color: #14181c;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

  .gatsby-image-wrapper {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`
ProductGrid.Detail = styled.div`
  display: table;
  height: 100%;
  padding: 0 0.5rem;
  color: #777;
  background-color: white;
  font-size: 0.75rem;
  text-align: center;
  box-shadow: inset 0px 0px 8px 1px rgba(0, 0, 0, 0.5);

  span {
    display: table-cell;
    vertical-align: middle;
  }
`
ProductGrid.Image = styled.div`
  height: 100%;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
  }
`
ProductGrid.Vintage = styled.div`
  height: 100%;
  color: #a29f9a;
  background-color: #3c3636;
  font-size: 3.5rem;
  line-height: 160px;
  text-align: center;
  /* box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.5); */
  box-shadow: inset 0px 0px 8px 1px rgba(0, 0, 0, 0.5);
`
ProductGrid.Size = styled.div`
  height: 100%;
  color: #db9722;
  background-color: #717171;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 160px;
  text-align: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`
ProductGrid.Alcohol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  padding: 0.5rem;
  color: #db9722;
  background-color: #3c3636;
  font-weight: bold;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

  span:first-child {
    font-size: 1.5rem;
  }
  span:not(:first-child) {
    font-size: 3rem;
  }
`
ProductGrid.ColorBox = styled.div`
  height: 100%;
  background-color: ${({ color }) => color};
`
ProductGrid.MoreFirstLine = styled.div`
  height: 100%;
  color: #db9722;
  font-size: 6rem;
  text-align: center;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 3px;
`
ProductGrid.MoreSecondLine = styled.div`
  height: 100%;
  color: white;
  font-size: 6rem;
  text-align: center;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 3px;
`
ProductGrid.MoreProduct = styled.div`
  position: relative;
  height: 100%;
  background-color: #191919;
`
ProductGrid.MoreProduct.Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 60%;
  padding-bottom: 0.5rem;
`
ProductGrid.MoreProduct.Product.Wrapper = styled.div`
  width: 60px;
  transition: 0.3s;

  &:hover {
    width: 80px;
  }
`
ProductGrid.MoreProduct.Product.Detail = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 40%;
  padding: 1rem 2rem 0 2rem;
  background-color: #191919;
  visibility: hidden;
  z-index: 1;

  p:first-child {
    margin-bottom: 1rem;
    color: #e1a957;
    font-size: 1.25rem;
    font-weight: bold;
  }
  p:nth-child(2) {
    color: #aaa;
    font-size: 0.9rem;
  }

  ${ProductGrid.MoreProduct.Product.Wrapper}:hover & {
    visibility: visible;
  }
`
ProductGrid.MoreProduct.Detail = styled.div`
  height: 40%;
  padding: 1rem 2rem 0 2rem;
  color: #e1a957;
  font-size: 2.5rem;
  font-weight: bold;
`
ProductGrid.ProductModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 1200px;
  height: 80%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  opacity: 0;
  z-index: 999;

  input[type='checkbox']:checked ~ & {
    opacity: 1;
    visibility: visible;
    transition: 0.5s;
  }
`

export default ProductGrid
