"use client";

import { motion } from "framer-motion";
import ContactButton from "@/components/layout/ContactButton";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-32 px-6 max-w-5xl mx-auto text-center"
        >
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-blue-500 text-transparent bg-clip-text"
            >
                Let&apos;s build something together
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white/60 max-w-xl mx-auto mb-12"
            >
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your team.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
            >
                <ContactButton href="mailto:your@email.com">
                    Email Me
                </ContactButton>

                <ContactButton href="https://github.com/yourusername">
                    GitHub
                </ContactButton>

                <ContactButton href="https://linkedin.com/in/yourusername">
                    LinkedIn
                </ContactButton>
            </motion.div>
        </section>
    );
}