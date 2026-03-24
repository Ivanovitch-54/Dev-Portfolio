"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-sm text-white/40"
      >
        © {new Date().getFullYear()} Ivan — Built with Next.js & Tailwind
      </motion.div>
    </footer>
  );
}