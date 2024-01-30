  // todo create 3 slide for this carosel slider

export default function HiroSilder() {
  return (
    <div className=" flex h-dvh w-full flex-col items-center justify-center bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950">
      <div className=" w-full">
        <img  className="m-auto w-4/6" src="/images/computer/case18.png" alt="" />
      </div>
      <div className="w-1/4 bg-black text-center text-5xl font-extralight">
        <button className="mb-2 pr-4"> &#8249;</button>
        <button className="mb-2 pl-4"> &#8250;</button>
      </div>
    </div>
  );
}
