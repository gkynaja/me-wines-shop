import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors, breakpoints } from '../../base/variable'
import container from '../container'

const Section = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  /* padding-top: 10vw; */

  @media (max-width: ${breakpoints.tablet}px) {
    height: auto;
  }
`

// transform: `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${scrollY *
//     -1 *
//     1.5},0,1)`,
//   willChange: 'transform',

// const GrapeWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 50%;
//   transform: translateX(-50%);
// `

const Grape = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 32vw;
  transform: translateX(-50%);

  @media (max-width: ${breakpoints.mobile}px) {
    left: unset;
    right: 1rem;
    transform: translateX(0) !important;
  }
`

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  ${container}

  margin-top: 10vw;
  margin-bottom: 10vw;

  @media (max-width: ${breakpoints.tablet}px) {
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    display: block;
  }
`

const Title = styled(motion.div)`
  width: 50%;
  align-self: flex-start;

  h2 {
    color: ${colors.fontPrimary};
    line-height: 1;
    text-shadow: -4px 4px 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 3vw;
  }

  h4 {
    color: white;
  }

  span {
    display: block;
    /* width: 50vw; */
  }

  div {
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
    margin-bottom: 1em;

    h2 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1rem;
    }

    button {
      display: none;
    }
  }
`

const Subtitle = styled(motion.div)`
  width: 25%;
  align-self: flex-end;
  color: #909090;

  p {
    margin-bottom: 1em;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`

export { Section, Grape, Container, Title, Subtitle }
