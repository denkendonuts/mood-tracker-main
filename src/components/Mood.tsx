import { useEffect } from 'react'
import Excited from '@/components/Moods/Excited'
import Sad from '@/components/Moods/Sad'
import Pleasant from '@/components/Moods/Pleasant'
import Placeholder from '@/components/Moods/Placeholder'
import { useRouter } from 'next/router'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { Mood as MoodEnum } from '@/types/mood'

const bgGradients = {
    [MoodEnum.EXCITED]: ['#FF8CD1 0%', '#FFE05B 100%'],
    [MoodEnum.SAD]: ['#195BD1 0%', '#97A3FF 100%'],
    [MoodEnum.PLEASANT]: ['#A1E9FF 0%', '#DDFDFF 55.21%'],
    'placeholder': ['#A1E9FF 0%', '#DDFDFF 55.21%'],
}

function Mood() {
    const mood = useRouter().query.mood as MoodEnum
    const controls = useAnimation()

    const gradient = bgGradients[mood || 'placeholder']

    useEffect(() => {
        controls.start({
            background: `linear-gradient(180deg, ${gradient[0]}, ${gradient[1]})`,
            transition: { duration: 2, delay: 0.5 },
        })
    }, [controls, gradient])

    let moodComponent

    switch (mood) {
        case MoodEnum.EXCITED:
            moodComponent = <Excited key='Excited' />
            break
        case MoodEnum.SAD:
            moodComponent = <Sad key='Sad' />
            break
        case MoodEnum.PLEASANT:
            moodComponent = <Pleasant key='Pleasant' />
            break
        default:
            moodComponent = <Placeholder key='Placeholder' />
            break
    }

    return (
        <motion.div
            className='bg-white h-full w-full rounded-[40px] overflow-hidden '
            style={{ background: `linear-gradient(180deg, ${gradient[0]}, ${gradient[1]})` }}
            animate={controls}
        >
            <AnimatePresence mode='wait'>{moodComponent}</AnimatePresence>
        </motion.div>
    )
}

export default Mood
