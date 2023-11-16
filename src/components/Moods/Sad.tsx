import { Player } from '@lottiefiles/react-lottie-player'
import { AnimatedDiv, AnimatedImg } from './Helpers'
import { Mood } from '@/types/mood'

const transition = { type: 'spring', bounce: 0.1, duration: 0.8 }

function Sad() {
    return (
        <div className='relative w-full h-full z-10'>
            <AnimatedImg
                src='/backgrounds/sad/Cloud-1.svg'
                alt='Cloud 1'
                style={{ position: 'absolute', top: '30%', left: '0', width: '15%' }}
                transition={{ duration: 0.5, ...transition }}
            />
            <AnimatedImg
                src='/backgrounds/sad/Cloud-2.svg'
                alt='Cloud 2'
                style={{ position: 'absolute', top: '8%', left: '14%', width: '14%' }}
                transition={{ duration: 0.5, delay: 0.2, ...transition }}
            />
            <AnimatedImg
                src='/backgrounds/sad/Cloud-3.svg'
                alt='Cloud 3'
                style={{ position: 'absolute', top: '12%', right: '0', width: '18%' }}
                transition={{ duration: 0.5, delay: 0.2, ...transition }}
            />
            <AnimatedImg
                src='/backgrounds/sad/Shape-1.svg'
                alt='Shape 1'
                style={{ position: 'absolute', bottom: '0', right: '0', width: '100%' }}
                transition={{ duration: 0.5, delay: 0.4, ...transition }}
            />
            <AnimatedImg
                src='/backgrounds/sad/Shape-2.svg'
                alt='Shape 2'
                style={{ position: 'absolute', bottom: '0', right: '0', width: '100%' }}
                transition={{ duration: 0.5, delay: 0.8, ...transition }}
            />
            <AnimatedDiv
                style={{ position: 'absolute', top: '25%', width: '100%' }}
                transition={{ duration: 0.5, delay: 0.6, ...transition }}
            >
                <div className='text-center flex flex-col items-center'>
                    <p className='text-inter-14 mb-[32px] text-white'>Current Mood</p>
                    <p className='text-inter-48 mb-[16px] text-white'>
                        You&apos;re feeling sad
                    </p>
                    <p className='text-inter-18 text-white w-[480px]'>
                        Got the blues, huh? Remember, even clouds have silver linings. We’re
                        here for you.
                    </p>
                </div>
            </AnimatedDiv>

            <AnimatedDiv
                style={{ position: 'absolute', top: '45%', width: '100%' }}
                transition={{ duration: 0.5, delay: 0.6, ...transition }}
            >
                <Player
                    autoplay
                    loop
                    src={`/lottie/${Mood.SAD}.json`}
                    style={{
                        height: '300px',
                        width: '300px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                    speed={0.6}
                />
            </AnimatedDiv>

        </div>
    )
}

export default Sad
