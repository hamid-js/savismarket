import  Titles  from '../ui/Titles';

export default function Gallery() {
  return (
    <div className="bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950">
      <Titles
        title1="play like the pros"
        title2="ready pc builds"
        title3=" There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected."
      />

      <div className="grid h-full w-full  grid-cols-2 grid-rows-4 bg-gray-900  ">
        <div className=" over bg bg-center-center m-1 h-40  bg-[url(/images/digital/gallery-1.jpg)] bg-cover "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-2.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-3.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-4.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-10.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-11.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-12.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-13.jpg)] bg-cover  bg-center p-1 "></div>
      </div>
    </div>
  );
}
