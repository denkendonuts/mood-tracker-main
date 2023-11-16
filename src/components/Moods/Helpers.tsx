import { motion } from 'framer-motion'

const variants = {
    initial: {
        y: '100vh',
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
}

export const AnimatedImg = ({ src, alt, style, transition }: {
    src: string
    alt: string
    style: React.CSSProperties
    transition: {
        type: string
        bounce?: number
        duration?: number
        delay?: number
    }
}) => {
    return (
        <motion.img
            src={src}
            alt={alt}
            style={style}
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ ...transition }}
            aria-hidden='true'
        />
    )
}

export const AnimatedDiv = ({ style, children, transition }: {
    style: React.CSSProperties
    children: React.ReactNode
    transition: {
        type: string
        bounce?: number
        duration?: number
        delay?: number
    }
}) => {
    return (
        <motion.div
            style={style}
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ ...transition }}
            aria-hidden='true'
        >
            {children}
        </motion.div>
    )
}
