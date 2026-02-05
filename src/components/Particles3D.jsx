import { motion } from 'framer-motion'

const Particles3D = () => {
    const particles = Array.from({ length: 20 })

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            perspective: '1500px'
        }}>
            {particles.map((_, index) => {
                const randomX = Math.random() * 100
                const randomY = Math.random() * 100
                const randomSize = 2 + Math.random() * 4
                const randomDelay = Math.random() * 5
                const randomDuration = 10 + Math.random() * 10
                const randomZ = -200 + Math.random() * 400

                return (
                    <motion.div
                        key={index}
                        style={{
                            position: 'absolute',
                            left: `${randomX}%`,
                            top: `${randomY}%`,
                            width: `${randomSize}px`,
                            height: `${randomSize}px`,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(255, 117, 143, 0.6), rgba(255, 77, 109, 0.2))',
                            boxShadow: '0 0 10px rgba(255, 117, 143, 0.5)',
                            transformStyle: 'preserve-3d'
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, -20, 0],
                            rotateX: [0, 360],
                            rotateY: [0, 360],
                            translateZ: [randomZ, randomZ + 100, randomZ],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: randomDuration,
                            delay: randomDelay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                )
            })}
        </div>
    )
}

export default Particles3D
