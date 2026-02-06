import { motion, AnimatePresence } from 'framer-motion'

const BackgroundSlideshow = ({ currentIndex }) => {
    const photos = [
        '/afia1.jpg',
        '/afia2.png',
        '/afia3.png',
        '/afia4.png',
        '/afia5.jpg',
        '/afia6.jpg',
        '/afia7.jpg',
        '/afia8.jpg'
    ]

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                overflow: 'hidden',
                background: 'var(--gradient-bg)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 20s ease infinite'
            }}
        >
            <AnimatePresence>
                <motion.div
                    key={currentIndex}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${photos[currentIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        mixBlendMode: 'overlay',
                        opacity: 0.4
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />
            </AnimatePresence>


            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
                    pointerEvents: 'none'
                }}
            />
        </div>
    )
}

export default BackgroundSlideshow
