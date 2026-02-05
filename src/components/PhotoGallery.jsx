import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PhotoGallery = ({ currentPhotoIndex, setCurrentPhotoIndex }) => {
    const [isPaused, setIsPaused] = useState(false)

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

    const goToPhoto = (index) => {
        setCurrentPhotoIndex(index)
    }

    return (
        <motion.div
            style={{
                marginTop: '3rem',
                position: 'relative',
                transformStyle: 'preserve-3d',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
            }}
            initial={{ scale: 0, rotateY: -180, opacity: 0 }}
            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
            transition={{
                delay: 1.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                style={{
                    position: 'relative',
                    width: 'min(350px, 80vw)',
                    height: 'min(350px, 80vw)',
                    borderRadius: '50%',
                    overflow: 'hidden'
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPhotoIndex}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid rgba(255, 117, 143, 0.5)',
                            boxShadow: `
                                0 0 30px rgba(255, 77, 109, 0.6),
                                0 0 60px rgba(255, 117, 143, 0.4),
                                0 20px 40px rgba(0, 0, 0, 0.5),
                                inset 0 0 20px rgba(255, 255, 255, 0.1)
                            `,
                            position: 'absolute',
                            transformStyle: 'preserve-3d',
                            transform: 'translateZ(30px)'
                        }}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotateY: 0,
                            y: [0, -15, 0],
                            boxShadow: [
                                '0 0 30px rgba(255, 77, 109, 0.6), 0 0 60px rgba(255, 117, 143, 0.4), 0 20px 40px rgba(0, 0, 0, 0.5)',
                                '0 0 40px rgba(255, 77, 109, 0.8), 0 0 80px rgba(255, 117, 143, 0.6), 0 25px 50px rgba(0, 0, 0, 0.6)',
                                '0 0 30px rgba(255, 77, 109, 0.6), 0 0 60px rgba(255, 117, 143, 0.4), 0 20px 40px rgba(0, 0, 0, 0.5)'
                            ]
                        }}
                        exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                        transition={{
                            opacity: { duration: 0.5 },
                            scale: { duration: 0.5 },
                            rotateY: { duration: 0.5 },
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <img
                            src={photos[currentPhotoIndex]}
                            alt={`Afia ${currentPhotoIndex + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(1.05) contrast(1.1)'
                            }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div
                style={{
                    display: 'flex',
                    gap: '0.8rem',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {photos.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => goToPhoto(index)}
                        style={{
                            width: currentPhotoIndex === index ? '12px' : '8px',
                            height: currentPhotoIndex === index ? '12px' : '8px',
                            borderRadius: '50%',
                            border: 'none',
                            background: currentPhotoIndex === index
                                ? 'linear-gradient(135deg, #ff4d6d, #ff758f)'
                                : 'rgba(255, 117, 143, 0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: currentPhotoIndex === index
                                ? '0 0 15px rgba(255, 77, 109, 0.8)'
                                : 'none'
                        }}
                        whileHover={{
                            scale: 1.3,
                            boxShadow: '0 0 15px rgba(255, 77, 109, 0.8)'
                        }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default PhotoGallery
