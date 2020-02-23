import React from 'react'
import styled from 'styled-components'
import Icon from '../images/logo.jpg'

const FooterWrapper = styled.div`
  width: 100%;
  padding: 5rem 0;
  color: white;
  background-color: #212121;
`
const FooterContent = styled.div`
  max-width: 50%;
  margin: 0 auto;
`
const Logo = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  img {
    width: 8rem;
    border-radius: 50%;
  }
`
const Address = styled.div`
  overflow: hidden;
  line-height: 33px;
`
const AddressLeft = styled.div`
  float: left;
  width: 48%;
  text-align: right;
`
const AddressRight = styled.div`
  float: right;
  width: 48%;
  text-align: left;
`
const Social = styled.div``

const CopyRight = styled.div`
  padding: 3rem 0;
  text-align: center;
  color: white;
  background-color: black;
`

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContent>
          <Logo><img src={Icon} alt="logo" /></Logo>
          <Address>
            <AddressLeft>
              12 Saladaeng Road, <br />
              Silom, Bangrak, <br />
              Bangkok Thailand 10500
            </AddressLeft>
            <AddressRight>
              Phone: 080-989-4154
            </AddressRight>
          </Address>
          <Social></Social>
        </FooterContent>
      </FooterWrapper>
      <CopyRight>
        Me Wines © 2020 All Rights Reserved
    </CopyRight>
    </>
  )
}

export default Footer