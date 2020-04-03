import React from 'react'
import Hero from './style'

export default () => {
  return (
    <Hero>
      {/* <Hero.Grid>
        <Hero.Grid.Left>
          <Hero.Ribbon>Best Seller</Hero.Ribbon>
        </Hero.Grid.Left>
        <Hero.Grid.TopRight>
          <Hero.Ribbon>Recommend</Hero.Ribbon>
        </Hero.Grid.TopRight>
        <Hero.Grid.BottomRight>
          <Hero.Ribbon>New Arrival</Hero.Ribbon>
        </Hero.Grid.BottomRight>
      </Hero.Grid> */}
      <Hero.ImageStack>
        {/* <Hero.Title>ME WINES SHOP</Hero.Title> */}
        <Hero.ImageStack.FirstItem>
          <Hero.ImageStack.Image src={require('../../images/hero-7.jpg')} />
        </Hero.ImageStack.FirstItem>
        <Hero.ImageStack.SecondItem>
          <Hero.ImageStack.Image src={require('../../images/hero-2.png')} />
        </Hero.ImageStack.SecondItem>
        <Hero.ImageStack.Third>
          <Hero.ImageStack.Image src={require('../../images/hero-9.jpg')} />
        </Hero.ImageStack.Third>
        <Hero.ImageStack.Forth>
          <Hero.ImageStack.Image src={require('../../images/hero-8.jpg')} />
        </Hero.ImageStack.Forth>
        <Hero.ImageStack.Fifth>
          <Hero.ImageStack.Image src={require('../../images/hero-5.jpg')} />
        </Hero.ImageStack.Fifth>
        <Hero.ImageStack.Sixth>
          <Hero.ImageStack.Image src={require('../../images/hero-6.jpg')} />
        </Hero.ImageStack.Sixth>
        <Hero.ImageStack.Seventh></Hero.ImageStack.Seventh>
        <Hero.ImageStack.Eighth>
          <Hero.ImageStack.Image src={require('../../images/hero-10.jpg')} />
        </Hero.ImageStack.Eighth>
        <Hero.ImageStack.Nineth></Hero.ImageStack.Nineth>
      </Hero.ImageStack>
    </Hero>
  )
}
