import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProposalScreen from './components/ProposalScreen'
import SuccessScreen from './components/SuccessScreen'
import FloatingHearts from './components/FloatingHearts'
import Parallax3D from './components/Parallax3D'
import Particles3D from './components/Particles3D'
import BackgroundSlideshow from './components/BackgroundSlideshow'

function App() {
    const [accepted, setAccepted] = useState(false)
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
    const [musicStarted, setMusicStarted] = useState(false)
    const audioRef = useRef(null)


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhotoIndex((prev) => (prev + 1) % 8)
        }, 4000)

        return () => clearInterval(interval)
    }, [])



    useEffect(() => {
    }, [])


    useEffect(() => {
        if (musicStarted && audioRef.current && audioRef.current.paused) {
            audioRef.current.play().catch(console.log)
        }
    }, [accepted, musicStarted])

    const handleAccept = () => {
        setAccepted(true)
    }

    return (
        <>
            { }
            <audio ref={audioRef} loop preload="auto">
                <source src="/music/faasle.mp3" type="audio/mpeg" />
            </audio>

            { }
            {!musicStarted && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={async () => {
                        if (audioRef.current) {
                            audioRef.current.volume = 0.4
                            await audioRef.current.play()
                            setMusicStarted(true)
                        }
                    }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 10000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(5px)',
                        cursor: 'pointer'
                    }}
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            padding: '2rem 3rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '20px',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}></div>
                        <div style={{
                            fontSize: '1.5rem',
                            color: 'white',
                            fontWeight: 600,
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}>
                            Something special for my favourite person
                        </div>
                    </motion.div>
                </motion.div>
            )}

            <BackgroundSlideshow currentIndex={currentPhotoIndex} />
            <Particles3D />
            <Parallax3D />
            <FloatingHearts />
            <AnimatePresence mode="wait">
                {!accepted ? (
                    <motion.div
                        key="proposal"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProposalScreen onAccept={handleAccept} audioRef={audioRef} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                        }}
                    >
                        <SuccessScreen currentPhotoIndex={currentPhotoIndex} setCurrentPhotoIndex={setCurrentPhotoIndex} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default App
