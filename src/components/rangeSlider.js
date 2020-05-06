import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  position: relative;
  height: 5px;
  width: 100%;
  background-color: grey;
`
const KnobStyles = styled.div`
  position: absolute;
  width: ${({ progress }) => `${progress}%`};
  height: 5px;
  background-color: #e1a957;

  &::after {
    content: '';
    position: absolute;
    top: -7.5px;
    right: -10px;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background-color: #e1a957;
    z-index: 2;
  }
`
const Checkpoint = styled.div`
  height: 10px;
  border-left: 1px solid black;
  position: absolute;
  font-size: 12px;
  top: -2.5px;
  left: ${({ left }) => `${left}%`};

  &::after {
    content: ${({ content }) => `'${content}'`};
    position: absolute;
    left: -21px;
    width: 42px;
    top: 17px;
    text-align: center;
  }
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;
`
const Input = styled.input.attrs({ type: 'number' })`
  width: 40%;
  padding: 0.5em;
  border: none;
  font-size: 0.5em;
`
const Pipe = styled.span`
  width: 10%;
  text-align: center;
  &::after {
    content: '-';
  }
`

const getProgressFromValue = (val, min, max) =>
  Math.floor(((val - min) / (max - min)) * 100)

const getValueFromProgress = (progress, min, max) =>
  Math.floor(min + (max - min) * (progress / 100))

const Slider = ({
  sliderMin = 0,
  sliderMax = 100,
  value = [0, 100],
  scale = 4,
  onMove = () => {},
}) => {
  /* Convert value array to progress(%) array */
  const progress = value.map(v => getProgressFromValue(v, sliderMin, sliderMax))

  const [motion, setMotion] = useState(
    value.map((v, i) => ({ value: v, progress: progress[i] }))
  )

  const handleOnMove = (child, progress) => {
    let motionObj
    setMotion(prevMotion => {
      const nextMotion = prevMotion.slice()

      // 1st knob
      if (child === 0) {
        // have next
        if (prevMotion[child + 1]) {
          progress =
            progress > prevMotion[child + 1].progress
              ? prevMotion[child + 1].progress
              : progress
        }
      }
      // last knob
      else if (child === prevMotion.length - 1) {
        progress =
          progress < prevMotion[child - 1].progress
            ? prevMotion[child - 1].progress
            : progress
      }
      // Between knob
      else {
        progress =
          progress > prevMotion[child + 1].progress
            ? prevMotion[child + 1].progress
            : progress
        progress =
          progress < prevMotion[child - 1].progress
            ? prevMotion[child - 1].progress
            : progress
      }

      motionObj = {
        value: getValueFromProgress(progress, sliderMin, sliderMax),
        progress,
      }

      nextMotion.splice(child, 1, motionObj)
      console.log(nextMotion)
      return nextMotion
    })

    onMove(child, motionObj)
  }

  const handleOnMotionBlur = child => {
    return e => {
      let value = e.target.value
      let progress
      const nextMotion = motion.slice()

      // 1st knob
      if (child === 0) {
        // have next
        if (motion[child + 1]) {
          value =
            value > motion[child + 1].value ? motion[child + 1].value : value
        }
      }
      // last knob
      else if (child === motion.length - 1) {
        value =
          value < motion[child - 1].value ? motion[child - 1].value : value
      }
      // Between knob
      else {
        value =
          value > motion[child + 1].value ? motion[child + 1].value : value
        value =
          value < motion[child - 1].value ? motion[child - 1].value : value
      }

      progress = getProgressFromValue(value, sliderMin, sliderMax)
      nextMotion.splice(child, 1, { value, progress })
      setMotion(nextMotion)
    }
  }

  const handleOnMotionChange = child => {
    return e => {
      const value = e.target.value
      const progress = getProgressFromValue(value, sliderMin, sliderMax)
      const nextMotion = motion.slice()

      nextMotion.splice(child, 1, { value, progress })
      setMotion(nextMotion)
    }
  }

  return (
    <>
      <InputWrapper>
        {motion.map((m, i) => (
          <>
            <Input
              type="number"
              value={motion[i].value}
              onBlur={handleOnMotionBlur(i)}
              onChange={handleOnMotionChange(i)}
            />
            {i !== motion.length - 1 ? <Pipe /> : null}
          </>
        ))}
      </InputWrapper>
      <Bar>
        {motion.map((m, i) => (
          <Knob key={`knob-${i}`} child={i} motion={m} onMove={handleOnMove} />
        ))}
        {Array.from({ length: scale + 1 }, (v, i) => i).map((v, i) => {
          const value = Math.floor(
            i === 0
              ? sliderMin
              : sliderMin + i * ((sliderMax - sliderMin) / scale)
          )
          return (
            <Checkpoint
              key={`checkpoint-${i}`}
              content={value}
              left={(i * 100) / scale}
            />
          )
        })}
      </Bar>
    </>
  )
}

const Knob = ({ child, motion, onMove }) => {
  let sliderStart = 0,
    sliderEnd = 0,
    dragging = false,
    target,
    knob

  const nodeMeasurement = node => {
    if (node) {
      const { left, right } = node.parentNode.getBoundingClientRect()
      sliderStart = left
      sliderEnd = right
      knob = node
    }
  }

  const handleOnMouseDown = e => {
    if (!(e.target === knob)) {
      return
    }
    target = e.target
    dragging = true
  }

  const handleOnMouseMove = e => {
    if (!dragging) {
      return
    }

    const deltaX =
      e.pageX < sliderStart
        ? 0
        : e.pageX > sliderEnd
        ? sliderEnd - sliderStart
        : e.pageX - sliderStart
    const progress = (deltaX / (sliderEnd - sliderStart)) * 100

    // knob.style.width = `${progress}%`

    onMove(child, progress)
  }

  const handleOnMouseUp = e => {
    if (!dragging) {
      return
    }

    dragging = false
  }

  const handleOnResize = e => {
    if (knob) {
      const { left, right } = knob.parentNode.getBoundingClientRect()
      sliderStart = left
      sliderEnd = right
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOnMouseDown)
    document.addEventListener('mousemove', handleOnMouseMove)
    document.addEventListener('mouseup', handleOnMouseUp)
    window.addEventListener('resize', handleOnResize)

    return () => {
      document.removeEventListener('mousedown', handleOnMouseDown)
      document.removeEventListener('mousemove', handleOnMouseMove)
      document.removeEventListener('mouseup', handleOnMouseUp)
      window.removeEventListener('resize', handleOnResize)
    }
  }, [])

  return <KnobStyles ref={nodeMeasurement} progress={motion.progress} />
}

export default Slider
