import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SvgHeroParty from './animate-svg/hero-party'
import Container from './container'
import Text from './typography/text'
import Button from './button'

const Section = styled.section`
  display: table;
  width: 100%;
  height: 800px;
`
const Inner = styled.div`
  display: table-cell;
  vertical-align: middle;
`
const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Description = styled.div`
  max-width: 25em;
`

const Hero = () => {
  return (
    <Section>
      <Inner>
        <Container>
          <LayoutGrid>
            <div>
              <div>
                <Text type="h1" fontType="display" noMargin>
                  Me Wines
                </Text>
                <Text type="h1" fontType="display" noMargin>
                  Shop
                </Text>
              </div>
              <Description>
                <Text>The best wine shop in Silom area.</Text>
                <Text noMargin>
                  You can find a good wine quality in our shop.
                </Text>
                <Text noMargin>
                  Also can order some food near by Me Wine Shop to pairing with
                  our wine in shop as well.
                </Text>
                <Text noMargin>
                  So please come to have a good time with good wine.
                </Text>
              </Description>
              <Button mt="lg">
                <Link to="/products">Our Wines</Link>
              </Button>
            </div>
            <SvgHeroParty />
          </LayoutGrid>
        </Container>
      </Inner>
    </Section>
  )
}

export default Hero
