import { Player } from '@lottiefiles/react-lottie-player'
import { AnimatedDiv, AnimatedImg } from './Helpers'
import { Mood } from '@/types/mood'

const transition = { type: 'spring', bounce: 0.2, duration: 0.8 }


function Pleasant() {
    return (
        <div className='relative w-full h-full z-10 '>
            <AnimatedImg
                src='/backgrounds/pleasant/Shape-4.svg'
                alt='Shape 4'
                style={{ position: 'absolute', top: '15%', right: '15%', width: '15%' }}
                transition={{ ...transition }}
            />

            <AnimatedImg
                src='/backgrounds/pleasant/Shape-3.svg'
                alt='Shape 3'
                style={{ position: 'absolute', bottom: '0', right: '0', width: '100%' }}
                transition={{ duration: 0.5, delay: 0.2, ...transition }}
            />
            <AnimatedImg
                src='/backgrounds/pleasant/Shape-2.svg'
                alt='Shape 2'
                style={{ position: 'absolute', bottom: '0', right: '0', width: '100%' }}
                transition={{ duration: 0.5, delay: 0.4, ...transition }}
            />
            <AnimatedDiv
                style={{ position: 'absolute', top: '25%', width: '100%' }}
                transition={{ duration: 0.5, delay: 0.6, ...transition, bounce: 0.3 }}
            >
                <div className='text-center flex flex-col items-center'>
                    <p className='text-inter-14 mb-[32px] '>Current Mood</p>
                    <p className='text-inter-48 mb-[16px] '>You&apos;re feeling Pleasant</p>
                    <p className='text-inter-18  w-[390px]'>
                        Feeling on top of the world, are we? Must be all those endorphins
                        doing their happy dance!
                    </p>
                </div>
            </AnimatedDiv>
            <AnimatedDiv
                style={{ position: 'absolute', top: '45%', width: '100%' }}
                transition={{ duration: 0.5, delay: 0.6, ...transition, bounce: 0.3 }}
            >
                <Player
                    autoplay
                    loop
                    src={`/lottie/${Mood.PLEASANT}.json`}
                    style={{
                        height: '300px',
                        width: '300px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                    speed={0.8}
                />
            </AnimatedDiv>
            <AnimatedImg
                src='/backgrounds/pleasant/Shape-1.svg'
                alt='Shape 1'
                style={{ position: 'absolute', bottom: '0', right: '0', width: '100%' }}
                transition={{ duration: 0.5, delay: 0.8, ...transition }}
            />
        </div>
    )
}

export default Pleasant
