"use client"

import { motion } from "framer-motion"

export default function AuroraBackground() {
    return (
        <div className="absolute inset-0 -z-20 overflow-hidden">

            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full bg-purple-500/30 blur-[160px]"
                animate={{
                    x: [0, 200, -200, 0],
                    y: [0, -150, 150, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute w-[700px] h-[700px] rounded-full bg-blue-500/30 blur-[160px]"
                animate={{
                    x: [0, -250, 250, 0],
                    y: [0, 200, -200, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full bg-pink-500/30 blur-[160px]"
                animate={{
                    x: [0, 150, -150, 0],
                    y: [0, -200, 200, 0],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

        </div>
    )
}