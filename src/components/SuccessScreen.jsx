import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PhotoGallery from './PhotoGallery'

const SuccessScreen = ({ currentPhotoIndex, setCurrentPhotoIndex }) => {
    const [confetti, setConfetti] = useState([])

    useEffect(() => {
        const confettiArray = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: -20,
            rotation: Math.random() * 360,
            color: ['#ff4d6d', '#e63946', '#ff758f', '#a4133c', '#ffb3c1'][Math.floor(Math.random() * 5)],
            delay: Math.random() * 0.5,
            duration: 2 + Math.random() * 2
        }))
        setConfetti(confettiArray)

    }, [])

    return (
        <div style={{ position: 'relative', zIndex: 1 }}>
            {confetti.map((item) => (
                <motion.div
                    key={item.id}
                    className="confetti"
                    style={{
                        left: item.x,
                        backgroundColor: item.color,
                        borderRadius: '50%'
                    }}
                    initial={{
                        y: item.y,
                        rotate: 0,
                        opacity: 1
                    }}
                    animate={{
                        y: window.innerHeight + 100,
                        rotate: item.rotation,
                        opacity: 0
                    }}
                    transition={{
                        duration: item.duration,
                        delay: item.delay,
                        ease: 'easeIn'
                    }}
                />
            ))}

            <motion.div
                className="glass-card"
                style={{
                    textAlign: 'center',
                    maxWidth: '1100px',
                    width: '95%',
                    maxHeight: '90vh',
                    padding: '2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '1.5rem',
                    overflowY: 'auto',
                    overflowX: 'hidden'
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2
                }}
            >
                <motion.h1
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        lineHeight: 1.1
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <span
                        style={{
                            background: 'var(--gradient-text)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: 'none'
                        }}
                    >
                        Yay!
                    </span>
                    <motion.span
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            display: 'inline-block',
                            transformStyle: 'preserve-3d',
                            filter: 'drop-shadow(0 5px 15px rgba(255, 215, 0, 0.6))'
                        }}
                        animate={{
                            scale: [1, 1.08, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        🎉
                    </motion.span>
                </motion.h1>

                <motion.p
                    style={{
                        fontSize: '1.4rem',
                        marginBottom: '0',
                        fontWeight: 600,
                        color: 'var(--light-pink)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.3rem'
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <span>I knew you'd say yes, Afia!</span>
                    <span style={{ fontSize: '1.6rem' }}>💕</span>
                </motion.p>

                <motion.p
                    style={{
                        fontSize: '1.15rem',
                        color: 'var(--cream)',
                        lineHeight: 1.4,
                        marginBottom: '0',
                        maxWidth: '600px'
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    You've made me the happiest person, darling!
                    <br />
                    Can't wait to make endless memories with you! 💖
                </motion.p>

                <motion.div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        fontSize: '2rem',
                        transformStyle: 'preserve-3d'
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        delay: 1,
                        type: "spring",
                        stiffness: 200
                    }}
                >
                    {['💝', '🌹', '💕', '💗', '💖'].map((emoji, index) => (
                        <motion.span
                            key={index}
                            style={{
                                display: 'inline-block',
                                transformStyle: 'preserve-3d',
                                filter: 'drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3))'
                            }}
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0],
                                rotateY: [0, 20, -20, 0],
                                translateZ: [0, 15, 0]
                            }}
                            transition={{
                                duration: 2.5,
                                delay: index * 0.1,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            {emoji}
                        </motion.span>
                    ))}
                </motion.div>

                <PhotoGallery currentPhotoIndex={currentPhotoIndex} setCurrentPhotoIndex={setCurrentPhotoIndex} />

                <motion.p
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--soft-coral)',
                        marginTop: '-1rem',
                        fontStyle: 'italic',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.3rem'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                >
                    <span>My Beautiful Angel</span>
                    <span style={{ fontSize: '1.5rem' }}>👼</span>
                </motion.p>

                <motion.div
                    style={{
                        fontSize: '1.8rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        opacity: { delay: 2 },
                        scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <span style={{ fontSize: '2.2rem' }}>❤️</span>
                    <span
                        style={{
                            background: 'var(--gradient-text)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: '0 0 20px rgba(255, 117, 143, 0.5)'
                        }}
                    >
                        Love you darling
                    </span>
                    <motion.span
                        style={{
                            fontSize: '2.2rem',
                            display: 'inline-block',
                            transformStyle: 'preserve-3d',
                            filter: 'drop-shadow(0 5px 15px rgba(255, 77, 109, 0.6))'
                        }}
                        animate={{
                            scale: [1, 1.08, 1],
                            rotate: [0, -5, 5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        😘
                    </motion.span>
                </motion.div>

                <motion.div
                    style={{
                        marginTop: '1rem',
                        width: '100%',
                        maxWidth: '1000px'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                >
                    <motion.h3
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            textAlign: 'center',
                            background: 'var(--gradient-text)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}
                        animate={{
                            scale: [1, 1.02, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Our Adventure Bucket List
                    </motion.h3>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        overflowX: 'auto',
                        paddingBottom: '1rem',
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(255, 117, 143, 0.5) rgba(255, 255, 255, 0.1)'
                    }}>
                        {[
                            { text: "Bungee jumping together", delay: 2.4 },
                            { text: "Drifting in a sports car", delay: 2.5 },
                            { text: "Foreign adventure trips", delay: 2.6 },
                            { text: "Skinny dipping under stars", delay: 2.7 },
                            { text: "Late night drives", delay: 2.8 },
                            { text: "Cooking together", delay: 2.9 },
                            { text: "...and many more", delay: 3.0, isLast: true }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                style={{
                                    minWidth: '180px',
                                    padding: '1.2rem 1rem',
                                    background: item.isLast
                                        ? 'linear-gradient(135deg, rgba(255, 117, 143, 0.25), rgba(255, 77, 109, 0.25))'
                                        : 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '16px',
                                    border: item.isLast
                                        ? '2px solid rgba(255, 117, 143, 0.6)'
                                        : '1px solid rgba(255, 117, 143, 0.2)',
                                    backdropFilter: 'blur(10px)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    gap: '0.6rem'
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: item.delay }}
                                whileHover={{
                                    scale: 1.05,
                                    background: item.isLast
                                        ? 'linear-gradient(135deg, rgba(255, 117, 143, 0.35), rgba(255, 77, 109, 0.35))'
                                        : 'rgba(255, 117, 143, 0.15)',
                                    borderColor: 'rgba(255, 117, 143, 0.7)',
                                    boxShadow: '0 8px 25px rgba(255, 77, 109, 0.4)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span style={{
                                    fontSize: item.isLast ? '1rem' : '0.95rem',
                                    fontWeight: item.isLast ? 700 : 600,
                                    color: 'var(--cream)',
                                    lineHeight: 1.3,
                                    fontStyle: item.isLast ? 'italic' : 'normal'
                                }}>
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.p
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--soft-coral)',
                        fontStyle: 'italic',
                        marginTop: '2rem',
                        marginBottom: '1rem',
                        maxWidth: '600px',
                        lineHeight: 1.6,
                        fontWeight: 500,
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.2 }}
                >
                    I don't want your voice loud… I want it shaky. 😉
                </motion.p>
            </motion.div>
        </div>
    )
}

export default SuccessScreen
