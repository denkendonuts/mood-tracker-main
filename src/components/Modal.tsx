import { useRef } from 'react'
import { useDataContext } from '@/utils/ContextProvider'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Mood } from '@/types/mood'

function Modal() {
    const { showModal, handleCloseModal } = useDataContext()

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    className='absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center bg-[#000]/[.6]'
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: {
                            ease: 'easeIn',
                            duration: 0.15,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        transition: {
                            ease: 'easeOut',
                            duration: 0.15,
                        },
                    }}
                >
                    <motion.div
                        className='p-[48px] flex flex-col bg-lavender-100 w-fit rounded-[32px]'
                        initial={{
                            opacity: 0,
                            scale: 0.75,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                ease: 'easeIn',
                                duration: 0.2,
                            },
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.75,
                            transition: {
                                ease: 'easeOut',
                                duration: 0.2,
                            },
                        }}
                    >
                        <button className='ml-auto' aria-label='close' onClick={handleCloseModal}>
                            <Image
                                src='/x.svg'
                                alt='close'
                                height={24}
                                width={24}
                            />
                        </button>
                        <h2 className='text-inter-48 leading-[32px] mt-[32px] text-center'>
                            What mood are you in today?
                        </h2>
                        <div className='mt-[64px] flex gap-[16px]'>
                            <MoodButton mood={Mood.PLEASANT} />
                            <MoodButton mood={Mood.SAD} />
                            <MoodButton mood={Mood.EXCITED} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal

const MoodButton = ({ mood }: {
    mood: Mood
}) => {
    const playerRef = useRef(null)
    const { updateMood, handleCloseModal } = useDataContext()

    const handleUpdateMood = () => {
        updateMood(mood)
        handleCloseModal()
    }

    return (
        <button
            className='w-[252px] h-[242px] flex flex-col gap-[24px] p-[24px] bg-white rounded-[32px] items-center justify-center hover:bg-lavender-200 transition-all duration-300'
            onMouseEnter={(e) => playerRef.current.play()}
            onClick={() => handleUpdateMood()}
        >
            <Player
                src={`/lottie/${mood}.json`}
                style={{ height: '64px', width: '64px' }}
                ref={playerRef}
            />
            <p className='text-inter-24 capitalize'>{mood}</p>
        </button>
    )
}
