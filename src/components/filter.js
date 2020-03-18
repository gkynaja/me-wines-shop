import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { H4, H5, P } from '../styles/styled-components/typography'

const Filter = styled.div`
  padding: 3rem 1rem 0 1rem;

  background-color: white;

  h4 {
    margin-bottom: 1rem;
  }
`
Filter.GroupTrigger = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`
Filter.Group = styled.div`
  padding-top: 1rem;

  & > label {
    position: relative;
    display: block;
    width: 100%;

    color: lightgrey;

    cursor: pointer;

    transition: 0.5s;
  }

  & > label::after {
    content: '+';
    position: absolute;
    top: 0;
    right: 0;
  }

  ${Filter.GroupTrigger}:checked ~ label {
    color: #333;
    transition: 0.1s;
  }
  ${Filter.GroupTrigger}:checked ~ label::after {
    content: '-';
  }
`
Filter.Option = styled.ul`
  display: none;

  transition: 0.7s;

  ${Filter.GroupTrigger}:checked ~ & {
    display: block;
  }

  li {
    padding: 0.5rem 0 0.5rem 0;
    border-bottom: 1px solid #eee;
  }
  li:first-child {
    margin-top: 0.5rem;
  }
  input {
    display: none;
  }
  label {
    display: block;
    width: 100%;
    cursor: pointer;
  }
  label::before {
    content: '+';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 1rem;
    color: #bbb;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 4px;
    vertical-align: top;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    transition: 0.3s;
  }

  input:checked ~ label::before {
    content: '-';
    border: 1px solid #00b8ff;
    color: white;
    background-color: #00b8ff;
  }
`

const toCapitalize = str =>
  str.replace(str.substring(0, 1), str.substring(0, 1).toUpperCase())

export default ({ filterConfig, onApply }) => {
  const newFilter = { ...filterConfig }
  const onChange = (group, option) => {
    return e => {
      newFilter[group] = newFilter[group].map(v => {
        if (v.fieldValue === option.fieldValue) {
          return { ...v, checked: e.target.checked }
        }
        return v
      })
    }
  }

  return (
    <Filter>
      <H4 tag="h4">Filters</H4>
      {Object.keys(filterConfig).map(k => (
        <Filter.Group>
          <Filter.GroupTrigger id={k} defaultChecked={true} />
          <H5 tag="label" htmlFor={k}>
            {toCapitalize(k)}
          </H5>
          <Filter.Option>
            {filterConfig[k].map(v => (
              <li>
                <input
                  type="checkbox"
                  onChange={onChange(k, v)}
                  id={v.fieldValue}
                />
                <P tag="label" htmlFor={v.fieldValue}>{`${toCapitalize(
                  v.fieldValue
                )}`}</P>
              </li>
            ))}
          </Filter.Option>
        </Filter.Group>
      ))}
      <div style={{ padding: '3rem' }} onClick={onApply(newFilter)}>
        Filter
      </div>
    </Filter>
  )
}
