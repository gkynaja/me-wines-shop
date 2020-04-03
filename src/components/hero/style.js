import styled from 'styled-components'

const Hero = styled.section`
  height: 700px;
`
Hero.Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
`
Hero.Grid.Left = styled.div`
  position: relative;
  grid-row: 1 / -1;
  background-color: rgb(109, 33, 40);
`
Hero.Grid.TopRight = styled.div`
  position: relative;
  background-color: rgb(7, 86, 132);
`
Hero.Grid.BottomRight = styled.div`
  position: relative;
  background-color: rgb(31, 147, 88);
`
Hero.Ribbon = styled.span`
  position: absolute;
  top: 2rem;
  left: 0;
  height: 48px;
  padding: 0 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  line-height: 48px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -24px;
    border-top: 24px solid rgba(0, 0, 0, 0.3);
    border-right: 24px solid transparent;
    border-bottom: 24px solid rgba(0, 0, 0, 0.3);
  }
`
Hero.ImageStack = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 100%;
`
Hero.ImageStack.Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
Hero.ImageStack.FirstItem = styled.figure`
  grid-column: 4;
  grid-row: 1 / span 2;
`
Hero.ImageStack.SecondItem = styled.figure`
  grid-column: 2 / span 2;
  grid-row: 1 / span 4;
`
Hero.ImageStack.Third = styled.figure`
  grid-column: 11 / span 2;
  grid-row: 1 / span 4;
`
Hero.ImageStack.Forth = styled.figure`
  grid-column: 7 / span 1;
  grid-row: 1 / span 2;
`
Hero.ImageStack.Fifth = styled.figure`
  grid-column: 9 / span 1;
  grid-row: 1 / span 2;
`
Hero.ImageStack.Sixth = styled.figure`
  grid-column: 10 / span 1;
  grid-row: 1 / span 2;
`
Hero.ImageStack.Seventh = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  background-color: white;
`
Hero.ImageStack.Eighth = styled.div`
  grid-column: 5;
  grid-row: 1 / span 2;
`
Hero.ImageStack.Nineth = styled.div`
  grid-column: 8;
  grid-row: 1 / span 2;
  background-color: white;
`
Hero.Title = styled.h1`
  grid-column: 5 / span 4;
  grid-row: 4 / span 2;
`

export default Hero
