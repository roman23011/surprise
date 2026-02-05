import { useEffect } from 'react'

const Parallax3D = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.glass-card')
            const mouseX = e.clientX / window.innerWidth - 0.5
            const mouseY = e.clientY / window.innerHeight - 0.5

            cards.forEach(card => {
                const rotateY = mouseX * 15
                const rotateX = -mouseY * 15

                card.style.transform = `
                    perspective(1500px)
                    rotateY(${rotateY}deg)
                    rotateX(${rotateX}deg)
                    translateZ(20px)
                    scale(1.02)
                `
            })
        }

        const handleMouseLeave = () => {
            const cards = document.querySelectorAll('.glass-card')
            cards.forEach(card => {
                card.style.transform = 'translateZ(0) rotateX(2deg)'
            })
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return null
}

export default Parallax3D
