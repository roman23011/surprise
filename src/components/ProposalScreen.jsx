import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const ProposalScreen = ({ onAccept, audioRef }) => {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
    const [yesButtonScale, setYesButtonScale] = useState(1)
    const [noAttempts, setNoAttempts] = useState(0)
    const containerRef = useRef(null)


    useEffect(() => {
        if (audioRef?.current) {
            audioRef.current.muted = false
            audioRef.current.volume = 0.4
            if (audioRef.current.paused) {
                audioRef.current.play().catch(error => {
                    console.log('Audio play on ProposalScreen mount:', error)
                })
            }
        }
    }, [])

    const moveNoButton = () => {
        if (!containerRef.current) return


        const maxX = 150
        const maxY = 80

        const newX = (Math.random() - 0.5) * maxX
        const newY = (Math.random() - 0.5) * maxY

        setNoButtonPosition({ x: newX, y: newY })
        setNoAttempts(prev => prev + 1)


        setYesButtonScale(prev => Math.min(prev + 0.15, 2.5))
    }

    const handleNoHover = () => {
        moveNoButton()
    }

    const handleNoClick = (e) => {
        e.preventDefault()
        moveNoButton()
    }

    const messages = [
        { text: "Afia, Will You Be My Valentine?", emoji: "" },
        { text: "Heyy Darling?", emoji: "😉" },
        { text: "Are you sure, Afia?", emoji: "❤️" },
        { text: "Really sure?" },
        { text: "Think about it, Afia!", emoji: "❤️" },
        { text: "You know you want to!", emoji: "❤️" },
        { text: "Just say yes, Afia!", emoji: "❤️" },
        { text: "Come on, Afia!", emoji: "❤️" }
    ]

    const currentMessage = messages[Math.min(noAttempts, messages.length - 1)]

    return (
        <div ref={containerRef} style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
                className="glass-card"
                style={{
                    textAlign: 'center',
                    maxWidth: '600px',
                    position: 'relative',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                { }
                <motion.div
                    style={{
                        fontSize: '5rem',
                        transformStyle: 'preserve-3d',
                        filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))'
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 3, -3, 0],
                        rotateY: [0, 10, -10, 0],
                        translateZ: [0, 20, 0]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    ❤️
                </motion.div>

                { }
                <motion.h1
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        flexWrap: 'wrap'
                    }}
                    animate={{
                        scale: [1, 1.01, 1]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
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
                        {currentMessage.text}
                    </span>
                    <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                        {currentMessage.emoji}
                    </span>
                </motion.h1>

                { }
                <motion.p
                    style={{
                        fontSize: '1.5rem',
                        color: 'var(--light-pink)',
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.3rem'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <span>Choose wisely, Afia...</span>
                    <span style={{ fontSize: '1.4rem' }}>😊</span>
                </motion.p>

                { }
                <div style={{
                    position: 'relative',
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '80px',
                    width: '100%',
                    padding: '2rem'
                }}>
                    { }
                    <motion.button
                        className="btn btn-yes"
                        onClick={onAccept}
                        animate={{
                            scale: yesButtonScale,
                        }}
                        whileHover={{
                            scale: yesButtonScale * 1.05,
                        }}
                        whileTap={{ scale: yesButtonScale * 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15
                        }}
                        style={{
                            position: 'relative',
                            zIndex: 10
                        }}
                    >
                        <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <span>Yes!</span>
                            <span style={{ fontSize: '1.2em' }}>❤️</span>
                        </span>
                    </motion.button>

                    { }
                    <motion.button
                        className="btn btn-no"
                        onMouseEnter={handleNoHover}
                        onClick={handleNoClick}
                        animate={{
                            x: noButtonPosition.x,
                            y: noButtonPosition.y,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 20
                        }}
                        whileHover={{
                            scale: 1.05
                        }}
                        style={{
                            position: noAttempts > 0 ? 'absolute' : 'relative',
                            left: noAttempts > 0 ? '50%' : 'auto',
                            top: noAttempts > 0 ? '50%' : 'auto',
                        }}
                    >
                        <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <span>No</span>
                            <span style={{ fontSize: '1.2em' }}>😢</span>
                        </span>
                    </motion.button>
                </div>

                { }
                {noAttempts > 2 && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: '0.9rem',
                            color: 'var(--soft-coral)',
                            fontStyle: 'italic',
                            marginTop: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.3rem'
                        }}
                    >
                        <span>Hint: There's only one right answer!</span>
                        <span style={{ fontSize: '1.1rem' }}>😉</span>
                    </motion.p>
                )}
            </motion.div>
        </div>
    )
}

export default ProposalScreen
