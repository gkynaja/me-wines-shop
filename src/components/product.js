import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import {
  Section,
  Container,
  Card,
  Thumbnail,
  Detail,
  Wrapper,
  Banner,
} from '../styles/layouts/components/ProductStyles'
import composition from '../images/wine-composition.jpg'

const Product = ({ products }) => {
  return (
    <Section>
      <Banner src={composition} />
      <Container>
        {products.slice(0, 5).map((product, index) => {
          const { frontmatter, excerpt, fields } = product.node
          return (
            <Card>
              <Thumbnail position={index % 2 === 0 ? `left` : `right`}>
                <Wrapper>
                  <Img
                    fluid={frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </Wrapper>
              </Thumbnail>
              <Detail position={index % 2 === 0 ? `right` : `left`}>
                <div>
                  <h5>{frontmatter.name}</h5>
                  <p>{excerpt}</p>
                  <Link to={`/${fields.collection}${fields.slug}`}>
                    <button className="button--round">Read More</button>
                  </Link>
                </div>
              </Detail>
            </Card>
          )
        })}
      </Container>
    </Section>
  )
}

export default Product
