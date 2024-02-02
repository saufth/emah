'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { isFullScreen, requestFullScreen } from '@/lib/utils'

export default function Video () {
  const [isVideo, setIsVideo] = React.useState<boolean>(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const handleFullScreenChange = () => {
    !isFullScreen && videoRef.current?.pause()
  }

  const handleFullscreenVideo = () => {
    const videoNode = videoRef.current

    if (videoNode) {
      requestFullScreen(videoNode)
      videoRef.current?.play()
    }
  }

  const handleDimissVideo = () => {
    setIsVideo(false)
  }

  const preventContextMenu = (event: React.MouseEvent<HTMLVideoElement>) => event.preventDefault()

  React.useEffect(() => {
    const videoNode = videoRef.current

    if (videoNode) {
      videoNode.addEventListener('fullscreenchange', handleFullScreenChange)
      return () => {
        videoNode.removeEventListener('fullscreenchange', handleFullScreenChange)
      }
    }
  }, [])

  return (
    <>
      {isVideo &&
        <div className='fixed lg:right-4 xl:right-12 bottom-0 lg:bottom-4 xl:bottom-12 w-full lg:w-xs h-16 lg:h-auto border-t lg:border bg-white dark:bg-black overflow-hidden lg:rounded-[14px] z-10 flex items-center'>
          <video
            className='w-auto h-full lg:w-full lg:h-auto lg:aspect-video relative'
            width={1920}
            height={1080}
            controls={false}
            poster='/images/placeholder.webp'
            disablePictureInPicture
            controlsList='nodownload noplaybackrate'
            onContextMenu={preventContextMenu}
            ref={videoRef}
          >
            <source src='/video/emah.mp4' type='video/mp4' />
          </video>
          <div className='w-full p-3 lg:absolute bottom-0 left-0 flex justify-end items-center gap-x-2'>
            <Button size='xs' variant='link' className='lg:text-white' onClick={handleDimissVideo}>
              Descartar
            </Button>
            <Button size='sm' color='primary' className='lg:bg-white lg:text-black rounded-lg py-0.5 px-2.5' onClick={handleFullscreenVideo}>
              Ver video
            </Button>
          </div>
        </div>}
    </>
  )
}
