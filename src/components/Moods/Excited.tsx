import { Player } from '@lottiefiles/react-lottie-player'
import { AnimatedDiv, AnimatedImg } from './Helpers'
import { Mood } from '@/types/mood'

const transition = { type: 'spring', bounce: 0.2, duration: 0.8 }

function Excited() {
    return (
        <div className='relative w-full h-full z-10'>
            <AnimatedImg
                src='/backgrounds/excited/Sun.svg'
                alt='Sun'
                style={{ position: 'absolute', top: '8%', right: '8%', width: '10%' }}
                transition={{ ...transition }}
            />
            <AnimatedImg
                src='/backgrounds/excited/Cloud-1.svg'
                alt='Excited 1'
                style={{ position: 'absolute', top: '10%', right: '0', width: '19%' }}
                transition={{ delay: 0.2, ...transition }}
            />

            <AnimatedImg
                src='/backgrounds/excited/Cloud-2.svg'
                alt='Excited 2'
                style={{ position: 'absolute', top: '30%', left: '0', width: '13%' }}
                transition={{ delay: 0.4, ...transition }}
            />
            <AnimatedImg
                src='/backgrounds/excited/Shape-2.svg'
                alt='Excited 3'
                style={{ position: 'absolute', bottom: '0', right: '0', width: '100%' }}
                transition={{ delay: 0.6, ...transition }}
            />
            <AnimatedDiv
                style={{ position: 'absolute', top: '25%', width: '100%' }}
                transition={{ delay: 0.8, ...transition, bounce: 0.4 }}
            >
                <div className='text-center flex flex-col items-center'>
                    <p className='text-inter-14 mb-[32px] text-white'>Current Mood</p>
                    <p className='text-inter-48 mb-[16px] text-white'>
                        You&apos;re feeling excited
                    </p>
                    <p className='text-inter-18 text-white w-[320px]'>
                        Buckle up, buttercup! Someone&apos;s got an extra sparkle in their step
                        today!
                    </p>
                </div>
            </AnimatedDiv>
            <AnimatedDiv
                style={{ position: 'absolute', top: '45%', width: '100%' }}
                transition={{ delay: 0.8, ...transition, bounce: 0.4 }}
            >
                <Player
                    autoplay
                    loop
                    src={`/lottie/${Mood.EXCITED}.json`}
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
                src='/backgrounds/excited/Shape-1.svg'
                alt='Excited 3'
                style={{ position: 'absolute', bottom: '0', right: '0', width: '100%' }}
                transition={{ delay: 0.8, ...transition }}
            />
        </div>
    )
}

export default Excited
