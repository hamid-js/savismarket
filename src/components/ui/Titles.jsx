export default function Titles({
  title1 = 'play like the pros',
  title2 = 'ready pc builds',
  title3 = ' There are many variations of passages of Lorem Ipsum available, butthe majority have suffered alteration in some form, by injected.',
}) {
  return (
    <div className=" flex flex-col items-center  justify-center gap-4  py-6 text-center  capitalize text-gray-300 ">
      <p className="text-2xl ">{title1}</p>
      <h3 className="text-3xl font-bold uppercase text-white">{title2}</h3>
      <p className="text-sm max-w-60 ">{title3}</p>
    </div>
  );
}
