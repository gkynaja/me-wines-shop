import styled from 'styled-components'
import { colors, padding, space, breakpoints } from '../base/variable'

const Nav = styled.nav`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 32px;
  padding: ${padding.m} ${padding.l};
  background-color: ${colors.backgroundPrimary};
  color: whitesmoke;

  @media (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`

const SideMenu = styled.aside`
  display: inline-block;
  background-color: white;
  width: 0;
  height: 100%;

  h5 {
    margin: ${space.l} ${space.m};
  }

  li {
    border-bottom: 1px solid #e8e8e8;
    font-weight: 500;

    a {
      display: block;
      padding: ${space.m};
    }
  }

  ${({ active }) =>
    active &&
    `
    width: 350px;
    transition: width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  `}
`

export { Nav, SideMenu }
