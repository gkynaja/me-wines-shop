import React from 'react'
import styled from 'styled-components'
import { H4, H5 } from '../styles/styled-components/typography'

const Filter = styled.div`
  padding: 3rem 1rem 0 1rem;

  background-color: white;

  h4 {
    margin-bottom: 1rem;
  }
`
Filter.Check = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`
Filter.Group = styled.div`
  padding-top: 1rem;

  label {
    position: relative;
    display: block;
    width: 100%;

    color: lightgrey;

    cursor: pointer;

    transition: 0.5s;
  }

  label::after {
    content: '+';
    position: absolute;
    top: 0;
    right: 0;
  }

  ${Filter.Check}:checked ~ label {
    color: #333;
    transition: 0.1s;
  }
  ${Filter.Check}:checked ~ label::after {
    content: '-';
  }
`
Filter.Option = styled.ul`
  display: none;

  transition: 0.7s;

  ${Filter.Check}:checked ~ & {
    display: block;
  }

  li {
    padding: 0.2rem 0;
  }
  li:first-child {
    margin-top: 0.5rem;
  }
`

const filterConfig = {
  vintage: {
    label: 'Vintage',
    value: ['A', 'B', 'C'],
  },
  producer: {
    label: 'Producer',
    value: ['A', 'B', 'C'],
  },
  country: {
    label: 'Country',
    value: ['A', 'B', 'C'],
  },
  type: {
    label: 'Type',
    value: ['A', 'B', 'C'],
  },
  price: {
    label: 'Price',
    value: ['A'],
  },
}

export default () => {
  return (
    <Filter>
      <H4 tag="h4">Filters</H4>
      {Object.keys(filterConfig).map(k => (
        <Filter.Group>
          <Filter.Check id={k} />
          <H5 tag="label" htmlFor={k}>
            {filterConfig[k].label}
          </H5>
          <Filter.Option>
            {filterConfig[k].value.map(v => (
              <li>
                <input type="checkbox" /> {v}
              </li>
            ))}
          </Filter.Option>
        </Filter.Group>
      ))}
    </Filter>
  )
}
