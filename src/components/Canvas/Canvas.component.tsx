import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import CanvasStyles from './Canvas.style';

declare namespace CanvasTypes {
  type Props = {
    size: 'post' | 'story'
    background: string
    callback: (context: CanvasRenderingContext2D) => void
  }
}

export default function Canvas(props: CanvasTypes.Props) {
  const canvas = useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const width = 1080
    const height = (props.size === 'post' ? width : 1920)
    if (!canvas?.current) throw new Error('Could not get canvas')
    const context = canvas.current.getContext('2d')
    canvas.current.width = width
    canvas.current.height = height
    if (!context) throw new Error('Could not get context')
    context.clearRect(0, 0, width, height)
    const image = new Image()
    image.width = width
    image.height = height
    image.src = `canvas/${props.background}`
    image.onload = () => {
      context.drawImage(image, 0, 0, width, height)
      props.callback(context)
    }
  })

  return (
    <Box sx={CanvasStyles.box}>
      <canvas ref={canvas} className={`canvas ${props.size}`}></canvas>
    </Box>
  )
}