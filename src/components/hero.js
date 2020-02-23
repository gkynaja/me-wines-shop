import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import data from '../data/heros/hero-data.json'

const SliderWrapper = styled.div`
  position: relative;
  height: 72vh;
  width: 100%;
  overflow: hidden;
`
const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  background: ${props => `url(${props.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: ${props => props.page === props.currentPage ? 1 : 0};
  transition: opacity 2s cubic-bezier(0.8, 0, 0.53, 0.99);  
`
const Pages = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  text-align: center;
`
const Page = styled.div`
  display: inline-block;
  height: 8px;
  width: 8px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${props => props.page === props.currentPage ? 'white' : 'grey'};
  cursor: pointer;
`

const Hero = () => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      if (page === 2) {
        setPage(1)
      } else {
        setPage(page + 1)
      }
    }, 10000)

    return () => { clearInterval(id) }
  }, [page])

  const handlePageOnClick = page => {
    return () => setPage(page)
  }

  return (
    <SliderWrapper>
      {
        data.heros.map((hero, idx) => <Image key={`img-${idx + 1}`} src={require(`../images/${hero.featuredImage}`)} page={idx + 1} currentPage={page} />)
      }
      <Pages>
        {
          data.heros.map((hero, idx) => <Page key={`page-${idx + 1}`} page={idx + 1} currentPage={page} onClick={handlePageOnClick(idx + 1)} />)
        }
      </Pages>
    </SliderWrapper>
  )
}

export default Hero