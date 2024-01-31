'use client'
import { Button } from '@/components/ui/button'
import { useState, useRef, type MouseEvent } from 'react'

export default function Video () {
  const [isVideo, setIsVideo] = useState<boolean>(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleFullscreenVideo = () => {
    videoRef.current?.requestFullscreen()
  }

  const handleDimissVideo = () => {
    setIsVideo(false)
  }

  const preventContextMenu = (event: MouseEvent<HTMLVideoElement>) => event.preventDefault()

  return (
    <>
      {isVideo &&
        <div className='fixed sm:right-4 xl:right-12 bottom-0 sm:bottom-4 xl:bottom-12 w-full sm:w-xs h-16 sm:h-auto border-t sm:border bg-white dark:bg-black overflow-hidden sm:rounded-[14px] z-10 flex items-center'>
          <video
            className='w-auto sm:w-full sm:h-auto h-full sm:aspect-video relative'
            width={1920}
            height={1080}
            controls
            poster='/images/placeholder.webp'
            disablePictureInPicture
            controlsList='nodownload noplaybackrate'
            onContextMenu={preventContextMenu}
            ref={videoRef}
          >
            <source src='/video/emah.mp4' type='video/mp4' />
          </video>
          <div className='w-full p-3 sm:absolute bottom-0 left-0 flex justify-end items-center gap-x-2 sm:hidden'>
            <Button size='sm' variant='link' className='sm:text-white' onClick={handleDimissVideo}>
              Descartar
            </Button>
            <Button size='sm' color='primary' className='sm:bg-white sm:text-black rounded-sm py-0.5 px-2.5' onClick={handleFullscreenVideo}>
              Ver video
            </Button>
          </div>
        </div>}
    </>
  )
}
