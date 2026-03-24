"use client"

import { motion } from "framer-motion"

const tech = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind"
]

export default function HeroTechStack() {
    return (
        <div className="flex gap-4 mt-12 flex-wrap justify-center">

            {tech.map((item, index) => (
                <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur"
                >
                    {item}
                </motion.div>
            ))}

        </div>
    )
}