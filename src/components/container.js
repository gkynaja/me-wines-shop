import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`

export default ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
