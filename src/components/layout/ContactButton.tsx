"use client";

import { motion } from "framer-motion";

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ContactButton({ href, children }: Props) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition flex items-center justify-center text-sm font-medium"
        >
            {children}
        </motion.a>
    );
}