"use client"

import { motion } from "framer-motion"

export default function GridBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">

            <motion.div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "60px 60px"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

        </div>
    )
}