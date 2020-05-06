import React, { useRef, useCallback } from 'react'
import styled from 'styled-components'
import { H4, H5, P } from '../styles/styled-components/typography'
import Slider from './rangeSlider'

const Filter = styled.div`
  height: 100%;
  padding: 3rem 1rem 0 1rem;
  overflow: scroll;

  /* background-color: white; */

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

    color: #777;

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
    color: #e1a957;
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
    /* border-bottom: 1px solid #e1a957; */
  }
  li:first-child {
    margin-top: 0.5rem;
  }
  input[type='checkbox'] {
    display: none;
  }
  label {
    position: relative;
    display: block;
    width: 100%;
    cursor: pointer;
  }
  label::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 1rem;
    color: #bbb;
    background-color: #222;
    border: 1px solid #e1a957;
    border-radius: 100%;
    vertical-align: top;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    transition: 0.3s;
  }

  /* input:checked ~ label::before {
    content: '';
    color: white;
    background-color: #777;
  } */
  input:checked ~ label::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 12px;
    height: 12px;
    background-color: #e1a957;
    border-radius: 100%;
  }
`
Filter.Button = styled.button`
  width: 100%;
  padding: 1rem;
  margin: 3rem 0;
  border: 1px solid #e1a957;
  color: #e1a957;
  background-color: transparent;
  font-weight: bold;
`
Filter.SliderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1em 0;
`

const toCapitalize = str =>
  str.replace(str.substring(0, 1), str.substring(0, 1).toUpperCase())

export default ({ filterConfig, onApply }) => {
  const newFilter = { ...filterConfig }
  console.log('render', newFilter)

  const onChange = useCallback((group, option) => {
    return e => {
      newFilter[group] = {
        ...newFilter[group],
        value: newFilter[group].value.map(v => {
          if (v.fieldValue === option.fieldValue) {
            return { ...v, checked: e.target.checked }
          }
          return v
        }),
      }
      console.log('change', newFilter)
    }
  }, [])

  const handleSliderOnMove = useCallback((child, motion) => {
    console.log('move', newFilter)
    //Temporary to find range type filter bcz still cannot know group
    Object.keys(newFilter).forEach(key => {
      if (newFilter[key].type === 'range') {
        newFilter[key].value[child] = { fieldValue: motion.value }
      }
    })

    // onApply(newFilter)()
  }, [])

  const onApplyFilter = useCallback(onApply(newFilter), [])

  console.log('filter render')
  return (
    <Filter>
      <H4 tag="h4">Filters</H4>
      {Object.keys(newFilter).map(k => {
        return (
          <Filter.Group>
            <Filter.GroupTrigger id={k} defaultChecked={true} />
            <H5 tag="label" htmlFor={k}>
              {toCapitalize(k)}
            </H5>
            <Filter.Option>
              {newFilter[k].type === 'value' ? (
                newFilter[k].value.map(v => (
                  <li>
                    <input
                      type="checkbox"
                      onChange={onChange(k, v)}
                      id={v.fieldValue}
                    />
                    <P tag="label" htmlFor={v.fieldValue}>
                      <span
                        style={{
                          display: 'inline-block',
                          width: 'calc(100% - 2.4rem)',
                        }}
                      >{`${toCapitalize(v.fieldValue)}`}</span>
                    </P>
                  </li>
                ))
              ) : (
                <Filter.SliderWrapper>
                  <Slider
                    sliderMin={newFilter[k].range[0]}
                    sliderMax={newFilter[k].range[1]}
                    value={[
                      newFilter[k].value[0].fieldValue,
                      newFilter[k].value[1].fieldValue,
                    ]}
                    scale={4}
                    onMove={handleSliderOnMove}
                  />
                </Filter.SliderWrapper>
              )}
            </Filter.Option>
          </Filter.Group>
        )
      })}

      <Filter.Button onClick={onApplyFilter}>Filter</Filter.Button>
    </Filter>
  )
}
