import styled from 'styled-components'

const Breadcrumb = styled.ul`
  padding-left: 1rem;
  margin-bottom: 1rem;
  color: #634923;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
`

Breadcrumb.List = styled.li`
  display: inline-block;
  cursor: default;

  &:not(:last-child)::after {
    content: '/';
    margin: 0 1rem;
  }

  ${({ active }) =>
    active === true &&
    `
      span {
        color: #e1a957;
        font-size: 3em;
      }
  `}

  & a:hover, span:hover {
    color: #e1a957;
  }
`

export default Breadcrumb
