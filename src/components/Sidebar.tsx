import { useState, useEffect } from 'react'
import { useDataContext } from '@/utils/ContextProvider'
import MoodCard from './MoodCard'
import { Scrollbar } from 'smooth-scrollbar-react'
import { AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/utils/cn'

function Sidebar() {
  const { handleShowModal, mood } = useDataContext()
  const [isTopVisible, setIsTopVisible] = useState(false)
  const [isBottomVisible, setIsBottomVisible] = useState(false)

  const { ref: topIntersectionRef, inView: isTopIntersecting } = useInView({ threshold: 0, })
  const { ref: bottomIntersectionRef, inView: isBottomIntersecting } = useInView({ threshold: 0, })

  useEffect(() => {
    setIsTopVisible(isTopIntersecting)
    setIsBottomVisible(isBottomIntersecting)
  }, [isTopIntersecting, isBottomIntersecting])

  return (
    <div className='py-[24px] pl-[24px] min-w-[368px] relative h-[98vh]'>

      <div className='flex flex-col gap-[8px] h-[87vh] max-h-[87vh] relative overflow-auto'>
        <ScrollGradient visible={isTopVisible} top />

        <AnimatePresence initial={false}>
          {/* It appears that the types for smooth-scrollbar-react are incorrect. Ignoring the error for now. */}
          {/* @ts-ignore */}
          <Scrollbar
            damping={0.1}
            plugins={{
              overscroll: {
                effect: 'bounce',
                damping: 0.1,
                maxOverscroll: 300,
              },
            }}
          >
            <div ref={topIntersectionRef} />

            {mood.map((mood, index) => (
              <MoodCard key={mood.id} index={index} {...mood} />
            ))}

            <div ref={bottomIntersectionRef} />
          </Scrollbar>
        </AnimatePresence>

        <ScrollGradient visible={isBottomVisible} />
      </div>

      <button
        className='w-[320px] rounded-[24px] px-[40px] py-[32px] bg-lavender-300 hover:bg-lavender-200 flex justify-center items-center absolute bottom-0 mx-auto transition-all duration-300'
        onClick={() => handleShowModal()}
        tabIndex={0}
        aria-label='Log Mood'
      >
        <p className='text-inter-14 text-[16px] text-white font-normal'>
          Log Mood
        </p>
      </button>
    </div >
  )
}

const ScrollGradient = ({ visible, top = false }: {
  visible: boolean
  top?: boolean
}) => (
  <div className={cn(
    'scroll-gradient left-0 absolute w-full h-[100px] z-[1]',
    {
      hidden: visible,
      'top-0': top,
      'rotate-180 bottom-0': !top,
    }
  )} />
)

export default Sidebar
