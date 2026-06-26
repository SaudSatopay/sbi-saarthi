export default function Background() {
  return (
    <>
      <div className="grain-layer" aria-hidden />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-70 mask-fade-y" />
        <div className="absolute -left-48 -top-48 h-[44rem] w-[44rem] rounded-full bg-saffron/10 blur-[150px]" />
        <div className="absolute right-[-14rem] top-1/3 h-[42rem] w-[42rem] rounded-full bg-teal/[0.08] blur-[160px]" />
        <div className="absolute bottom-[-12rem] left-1/4 h-[36rem] w-[36rem] rounded-full bg-iris/[0.06] blur-[150px]" />
      </div>
    </>
  )
}
