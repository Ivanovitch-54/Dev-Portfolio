"use client"

import { TypeAnimation } from "react-type-animation"

export default function HeroTyping() {
    return (
        <TypeAnimation
            sequence={[
                "Frontend Developer",
                2000,
                "React Specialist",
                2000,
                "Next.js Developer",
                2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-purple-400"
        />
    )
}