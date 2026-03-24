"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import {
    Code2,
    Atom,
    Server,
    Layers,
    Cpu
} from "lucide-react"

const icons = [
    { Icon: Atom, x: -250, y: -120 },
    { Icon: Code2, x: 220, y: -100 },
    { Icon: Server, x: -200, y: 140 },
    { Icon: Layers, x: 250, y: 120 },
    { Icon: Cpu, x: 0, y: 200 },
]

export default function HeroFloatingIcons() {

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX - window.innerWidth / 2) / 30
            const y = (e.clientY - window.innerHeight / 2) / 30

            mouseX.set(x)
            mouseY.set(y)
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <div className="absolute inset-0 pointer-events-none">

            {icons.map(({ Icon, x, y }, index) => (
                <motion.div
                    key={index}
                    style={{
                        x: springX,
                        y: springY,
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        willChange: "transform"
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="absolute text-white/20"
                >
                    <Icon size={40} />
                </motion.div>
            ))}

        </div>
    )
}
