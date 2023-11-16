import { useRef } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { MoodRecord, useDataContext } from '@/utils/ContextProvider'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { Mood } from '@/types/mood'

function MoodCard({ mood, date, index }: MoodRecord & {
    index: number
}) {
    const playerRef = useRef(null)
    const { activeIndex, handleActiveIndex } = useDataContext()

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            handleActiveIndex(index)
        }
    }

    return (
        <motion.div
            key={mood}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
            className='overflow-hidden'
        >
            <div
                className={cn(
                    'w-[320px] p-[24px] flex bg-white rounded-[24px] gap-[16px] cursor-pointer h-fit hover:bg-lavender-200 mb-[8px] border-2 transition-all duration-300',
                    index === activeIndex ? 'border-lavender-300' : 'border-lavender-100'
                )}
                onMouseEnter={(e) => playerRef.current.play()}
                onClick={() => handleActiveIndex(index)}
                onKeyDown={handleKeyPress}
                tabIndex={index + 1}
                aria-label={`${mood} Mood Card`}
                role='button'
            >
                <Player
                    src={`/lottie/${mood}.json`}
                    style={{ height: '48px', width: '48px' }}
                    ref={playerRef}
                />
                <div className='my-auto'>
                    <h3 className='text-inter-16 mb-[4px] capitalize'>{mood}</h3>
                    <p className='text-inter-12'>{date}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default MoodCard
