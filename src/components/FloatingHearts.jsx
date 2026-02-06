import { motion } from 'framer-motion'

const FloatingHearts = () => {
    const colors = [
        'rgba(255, 77, 109, 0.4)',
        'rgba(255, 179, 193, 0.3)',
        'rgba(255, 215, 0, 0.2)',
        'rgba(255, 255, 255, 0.3)'
    ]
    const numberOfParticles = 15

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        }}>
            {Array.from({ length: numberOfParticles }).map((_, index) => {
                const isHeart = Math.random() < 0.3
                const hearts = ['❤️', '💖', '💗', '💕']
                const randomHeart = hearts[Math.floor(Math.random() * hearts.length)]

                const randomColor = colors[Math.floor(Math.random() * colors.length)]
                const randomLeft = Math.random() * 100
                const randomDelay = Math.random() * 5
                const randomDuration = 8 + Math.random() * 10
                const randomSize = isHeart ? (1.5 + Math.random() * 1.5) : (10 + Math.random() * 40)

                return (
                    <motion.div
                        key={index}
                        className="particle"
                        style={{
                            position: 'absolute',
                            left: `${randomLeft}%`,
                            width: isHeart ? 'auto' : `${randomSize}px`,
                            height: isHeart ? 'auto' : `${randomSize}px`,
                            background: isHeart ? 'transparent' : `radial-gradient(circle, ${randomColor} 0%, rgba(0,0,0,0) 70%)`,
                            fontSize: isHeart ? `${randomSize}rem` : undefined,
                            borderRadius: isHeart ? '0' : '50%',
                            filter: isHeart ? 'drop-shadow(0 0 5px rgba(255, 105, 180, 0.5))' : 'blur(5px)',
                            zIndex: isHeart ? 1 : 0
                        }}
                        initial={{
                            y: '110vh',
                            opacity: 0,
                            scale: 0,
                            rotate: 0
                        }}
                        animate={{
                            y: '-20vh',
                            opacity: [0, 0.8, 0.4, 0],
                            scale: [0, 1, 1.2, 0],
                            x: [0, Math.random() * 100 - 50, 0],
                            rotate: isHeart ? [0, 15, -15, 0] : 0
                        }}
                        transition={{
                            duration: randomDuration,
                            delay: randomDelay,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    >
                        {isHeart ? randomHeart : null}
                    </motion.div>
                )
            })}
        </div>
    )
}

export default FloatingHearts
