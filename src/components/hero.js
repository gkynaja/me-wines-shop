import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Section,
  Grape,
  Container,
  Title,
  Subtitle,
} from '../styles/layouts/components/HeroStyles'

const grape = {
  hidden: { opacity: 1, scale: 0, x: '-50%' },
  visible: {
    opacity: 1,
    scale: 1,
    x: '-50%',
    transition: {
      duration: 0.5,
    },
  },
}
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0,
      when: 'beforeChildren',
      staggerChildren: 0,
    },
  },
}
const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const Hero = () => {
  return (
    <Section>
      <Grape
        src={require('../images/grape-filter-shadow.png')}
        variants={grape}
        initial="hidden"
        animate="visible"
      />
      <Container variants={container} initial="hidden" animate="visible">
        <Title variants={item}>
          <h4>
            <span>Welcome</span>
            <span>to</span>
          </h4>
          <h2>
            <span>ME</span>
            <span>WINES</span>
          </h2>
          <Link to="/products">
            <button className="button--round">Our Wines</button>
          </Link>
        </Title>
        <Subtitle variants={item}>
          <p>
            Wine shop & bar in Silom, where you can find best wines from all
            over the world. Join us for a glass of wine & some bites. Or come by
            and stock your cellar
          </p>
          <div>
            <FontAwesomeIcon icon={['fab', 'facebook-square']} />
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </div>
        </Subtitle>
      </Container>
    </Section>
  )
}

export default Hero
