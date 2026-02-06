import { motion } from 'framer-motion'

import { useMemo } from 'react'

const FloatingHearts = () => {
    const particles = useMemo(() => {
        const colors = [
            'rgba(255, 77, 109, 0.4)',
            'rgba(255, 179, 193, 0.3)',
            'rgba(255, 215, 0, 0.2)',
            'rgba(255, 255, 255, 0.3)'
        ]
        const totalParticles = 25
        const heartCount = 3

        const baseArray = Array(totalParticles).fill(null).map((_, i) => ({
            id: i,
            isHeart: i < heartCount
        }))

        for (let i = baseArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [baseArray[i], baseArray[j]] = [baseArray[j], baseArray[i]];
        }

        return baseArray.map((item) => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            const randomSize = item.isHeart
                ? (1.5 + Math.random() * 1.5)
                : (10 + Math.random() * 40)

            return {
                ...item,
                color: randomColor,
                left: Math.random() * 100,
                delay: Math.random() * 15,
                duration: 15 + Math.random() * 10,
                size: randomSize,
                xOffset: Math.random() * 100 - 50
            }
        })
    }, [])

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
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="particle"
                    style={{
                        position: 'absolute',
                        left: `${particle.left}%`,
                        width: particle.isHeart ? 'auto' : `${particle.size}px`,
                        height: particle.isHeart ? 'auto' : `${particle.size}px`,
                        background: particle.isHeart ? 'transparent' : `radial-gradient(circle, ${particle.color} 0%, rgba(0,0,0,0) 70%)`,
                        fontSize: particle.isHeart ? `${particle.size}rem` : undefined,
                        borderRadius: particle.isHeart ? '0' : '50%',
                        filter: particle.isHeart ? 'drop-shadow(0 0 5px rgba(255, 105, 180, 0.5))' : 'blur(5px)',
                        zIndex: particle.isHeart ? 1 : 0
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
                        x: [0, particle.xOffset, 0],
                        rotate: particle.isHeart ? [0, 15, -15, 0] : 0
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    {particle.isHeart ? '❤️' : null}
                </motion.div>
            ))}
        </div>
    )
}

export default FloatingHearts
