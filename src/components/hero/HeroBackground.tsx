export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-white/8 blur-[140px]" />
      <div className="absolute bottom-[-14rem] left-[10%] h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-[150px]" />
      <div className="absolute bottom-[-15rem] right-[14%] h-[24rem] w-[24rem] rounded-full bg-cyan-300/10 blur-[150px]" />
    </div>
  )
}
