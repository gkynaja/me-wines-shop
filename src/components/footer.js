import React from 'react'
import styled from 'styled-components'
import Logo from '../images/logo.png'
import Text from '../components/typography/text'
import { breakpoint } from '../styles/styled-components/config/breakpoint'

const Section = styled.footer`
  width: 100%;
  padding: 5rem 0;
  background-color: #fffdf7;

  @media (max-width: ${breakpoint.mobile}px) {
    display: none;
  }
`
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FooterLayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`
const FooterAddress = styled.div`
  text-align: right;
`
const FooterContact = styled.div`
  text-align: left;
`

const Footer = () => {
  return (
    <Section>
      <Inner>
        <div>
          <img src={Logo} width="150" />
        </div>
        <FooterLayoutGrid>
          <FooterAddress>
            <Text>12 Saladaeng Rd, Silom,</Text>
            <Text noMargin>Bang Rak, Bangkok 10500</Text>
          </FooterAddress>
          <FooterContact>
            <Text>Tel 090 989 4154</Text>
            <Text noMargin>Mon-Sat 11AM–10PM</Text>
          </FooterContact>
        </FooterLayoutGrid>
      </Inner>
    </Section>
  )
}

export default Footer
