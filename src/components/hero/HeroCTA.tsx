import Link from "next/link"

export default function HeroCTA() {
    return (
        <div className="flex gap-4 mt-8">

            <Link
                href="#projects"
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition font-medium"
            >
                View Projects
            </Link>

            <Link
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition"
            >
                Contact Me
            </Link>

        </div>
    )
}