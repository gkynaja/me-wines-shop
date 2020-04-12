import styled from 'styled-components'
import { breakpoint } from '../../styles/styled-components/config/breakpoint'

const Navbar = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  color: white;
  /* background-color: #222; */
  background-color: transparent;
`
Navbar.Nav = styled.nav`
  position: fixed;
  top: 0;
  left: -100%;
  bottom: 0;
  width: 25%;
  height: 100%;
  min-width: 275px;
  color: #222;
  background-color: white;
  z-index: 999;
  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

  ul {
    padding-top: 3rem;
    cursor: pointer;
  }
  li {
    border-bottom: 1px solid #e8e8e8;
    font-weight: 600;
    transition: 0.3s;

    a {
      display: block;
      padding: 1rem;
    }
  }
  li:not(:first-child) {
    svg {
      display: none;
    }
  }
  /* li:not(:first-child):hover {
    background-color: whitesmoke;
    font-size: 2rem;
    text-align: center;
    a {
      display: flex;
      flex-flow: column;
      align-items: center;
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    svg {
      display: block;
    }
  } */
  li:first-child {
    padding-left: 1rem;
    padding-bottom: 3rem;
    font-size: 2rem;

    span {
      position: absolute;
      right: 2rem;
    }
  }
  #menu-trigger:checked ~ & {
    left: 0;
  }

  @media (max-width: ${breakpoint.mobile}px) {
    width: 100%;
    min-width: auto;
  }
`
Navbar.Nav.Overlay = styled.label`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 998;
  transition: 0.3s;

  #menu-trigger:checked ~ & {
    width: 100%;
  }
`
Navbar.Header = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`
Navbar.Header.Menu = styled.label`
  height: 100%;
  padding: 0 1rem;
  line-height: 4.375;
  text-align: center;

  svg:not(:last-of-type),
  svg:first-child:not(:last-child) {
    margin-right: 0.8rem;
  }

  @media (max-width: ${breakpoint.tablet}px) {
    span {
      display: none;
    }
    svg {
      margin: 0;
    }
  }
`
Navbar.Header.LeftMenu = styled(Navbar.Header.Menu)`
  min-width: 110px;
  cursor: pointer;
  @media (max-width: ${breakpoint.tablet}px) {
    min-width: auto;
  }
`
Navbar.Header.Search = styled(Navbar.Header.Menu)`
  cursor: pointer;
  @media (max-width: ${breakpoint.tablet}px) {
    order: 3;
  }
`
Navbar.Header.Logo = styled(Navbar.Header.Menu)`
  flex: 1;
  color: #e1a957;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.917;
  letter-spacing: 0.1rem;
`
Navbar.Header.Contact = styled(Navbar.Header.Menu)`
  padding: 0 2rem;
  font-size: 1.5rem;
  line-height: 2.917;

  svg {
    cursor: pointer;
  }

  @media (max-width: ${breakpoint.tablet}px) {
    display: none;
  }
`
Navbar.BoxSearch = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 110px);
  height: 70px;
  background-color: white;
  z-index: -1;
  opacity: 0;
  transition: 0.5s;

  #search-trigger:checked ~ & {
    opacity: 1;
    z-index: 2;
  }

  @media (max-width: ${breakpoint.tablet}px) {
    width: 100%;
  }
`
Navbar.BoxSearch.Input = styled.input.attrs({
  type: 'test',
  placeholder: 'Search...',
})`
  height: 100%;
  padding: 0 1rem;
  flex: 1;
  color: #777;
`
Navbar.BoxSearch.Close = styled.label`
  width: 70px;
  height: 70px;
  color: white;
  background-color: #202121;
  font-size: 2rem;
  line-height: 70px;
  text-align: center;
  cursor: pointer;

  @media (max-width: ${breakpoint.tablet}px) {
    width: auto;
    padding: 0 1rem;
    color: black;
    background-color: white;
  }
`

export default Navbar
