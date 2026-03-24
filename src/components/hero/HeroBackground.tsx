export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">

            <div className="absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/30 blur-[150px]" />

            <div className="absolute bottom-[-200px] left-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

            <div className="absolute bottom-[-200px] right-[20%] h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-[150px]" />

        </div>
    )
}