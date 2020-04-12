import React from 'react'
import ProductCard from './style'
import Img from 'gatsby-image'

export default ({
  featuredImage,
  vintage,
  name,
  type,
  grape,
  excerpt,
  price,
  size,
  alcohol,
}) => {
  return (
    <ProductCard.Card>
      <ProductCard.Product>
        <ProductCard.Product.Wrapper>
          <Img fluid={featuredImage.childImageSharp.fluid} />
        </ProductCard.Product.Wrapper>
        <ProductCard.Product.Size>{size}</ProductCard.Product.Size>
        <ProductCard.Product.Alcohol>
          <span style={{ fontSize: '0.5em' }}>Alc.</span> {alcohol}%
        </ProductCard.Product.Alcohol>
        <ProductCard.Product.type>{type}</ProductCard.Product.type>
      </ProductCard.Product>
      <ProductCard.Detail>
        <ProductCard.Detail.Background />
        <ProductCard.Detail.Wrapper>
          <ProductCard.Detail.Row>
            <ProductCard.Detail.LeftSide>Vintage:</ProductCard.Detail.LeftSide>
            <ProductCard.Detail.RightSide>
              {vintage}
            </ProductCard.Detail.RightSide>
          </ProductCard.Detail.Row>
          <ProductCard.Detail.Row>
            <ProductCard.Detail.LeftSide>Name:</ProductCard.Detail.LeftSide>
            <ProductCard.Detail.RightSide>{name}</ProductCard.Detail.RightSide>
          </ProductCard.Detail.Row>
          <ProductCard.Detail.Row>
            <ProductCard.Detail.LeftSide>Type:</ProductCard.Detail.LeftSide>
            <ProductCard.Detail.RightSide>{type}</ProductCard.Detail.RightSide>
          </ProductCard.Detail.Row>
          <ProductCard.Detail.Row>
            <ProductCard.Detail.LeftSide>Grape:</ProductCard.Detail.LeftSide>
            <ProductCard.Detail.RightSide>{grape}</ProductCard.Detail.RightSide>
          </ProductCard.Detail.Row>
          <ProductCard.Detail.Row>
            <ProductCard.Detail.LeftSide>Detail:</ProductCard.Detail.LeftSide>
            <ProductCard.Detail.RightSide>
              {excerpt}
            </ProductCard.Detail.RightSide>
          </ProductCard.Detail.Row>
          <ProductCard.Detail.Row>
            <ProductCard.Detail.LeftSide>Price:</ProductCard.Detail.LeftSide>
            <ProductCard.Detail.RightSide>{price}</ProductCard.Detail.RightSide>
          </ProductCard.Detail.Row>
        </ProductCard.Detail.Wrapper>
      </ProductCard.Detail>
    </ProductCard.Card>
  )
}
