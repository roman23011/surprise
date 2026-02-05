import { motion } from 'framer-motion'

const FloatingHearts = () => {
    const hearts = ['💖', '💕', '💗', '💓', '💝', '❤️', '🌹']
    const numberOfHearts = 12

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0
        }}>
            {Array.from({ length: numberOfHearts }).map((_, index) => {
                const randomHeart = hearts[Math.floor(Math.random() * hearts.length)]
                const randomLeft = Math.random() * 100
                const randomDelay = Math.random() * 8
                const randomDuration = 10 + Math.random() * 5
                const randomSize = 1.5 + Math.random() * 1

                return (
                    <motion.div
                        key={index}
                        className="heart"
                        style={{
                            left: `${randomLeft}%`,
                            fontSize: `${randomSize}rem`,
                        }}
                        initial={{
                            y: '100vh',
                            opacity: 0,
                            rotate: 0
                        }}
                        animate={{
                            y: '-100px',
                            opacity: [0, 0.5, 0.5, 0],
                            rotate: 360
                        }}
                        transition={{
                            duration: randomDuration,
                            delay: randomDelay,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    >
                        {randomHeart}
                    </motion.div>
                )
            })}
        </div>
    )
}

export default FloatingHearts
