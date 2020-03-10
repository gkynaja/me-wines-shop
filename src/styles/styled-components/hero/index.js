import styled from 'styled-components'
import { color, textColor } from '../config/color'
import { space } from '../config/space'
import { fullScreenHeight, flexCenter } from '../common'

const Hero = styled.section`
  position: relative;
  background-color: ${color.primary};

  ${fullScreenHeight};
`

Hero.Title = styled.header`
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translateY(-30%);
  z-index: 1;
  opacity: 0;
  transition: 1s 1s;

  ${props =>
    props.animated &&
    `
    transform: translateY(-50%);
    opacity: 1;
  `};
`

Hero.Left = styled.div`
  ${flexCenter};

  justify-content: flex-end;
  width: 45%;
  height: 100%;
  float: left;

  padding-right: ${space.XL}px;
`

Hero.AlignBox = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`

Hero.Right = styled.div`
  width: 55%;
  height: 100%;
  float: left;
`

Hero.Left.Image = styled.img`
  width: 500px;
`

Hero.Right.Image = styled.img`
  width: 100%;

  min-height: 100%;
  min-width: 1200px;

  transform: scale(1.3);
  transition: 1s 2s;

  ${props =>
    props.animated &&
    `
    transform: scale(1);
  `}
`
Hero.ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
  }

  transform: translateX(-40px);
  opacity: 0;
  transition: 1s;

  ${props =>
    props.animated &&
    `
  transform: translateX(0);
  opacity: 1;
  `}
`

Hero.Button = styled.div`
  position: absolute;
  bottom: ${-space.XXL}px;
  right: ${space.XL}px;

  padding: ${space.NONE} ${space.XL}px;

  line-height: 40px;
  font-weight: bold;
  color: ${textColor.primary};

  transform: translateX(-40px);
  opacity: 0;
  transition: 1s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background-color: #ffd9b2;
    border-radius: 20px;
    transition: 0.3s ease;
  }
  &:hover ::before {
    width: 100%;
  }

  span {
    position: relative;
    z-index: 1;
  }

  ${props =>
    props.animated &&
    `
    transform: translateX(0);
    opacity: 1;
  `}
`

export default Hero
