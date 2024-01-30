import  Titles  from '../ui/Titles';
import  PricingTable  from './PricingTable';

// background-image:-webkit-linear-gradient(bottom , rgb(16, 16, 16) , rgba(0, 0, 0, 0) 51%);background-image:linear-gradient(to top , rgb(16, 16, 16) , rgba(0, 0, 0, 0) 51%)
export default function PricingBox() {
  return (
    <div className="bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950 py-10">
      <Titles
        title1="play like the pros"
        title2="ready pc builds"
        title3=" There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected."
      />
      <div className="flex  flex-wrap items-center justify-center">
        <PricingTable url={"/images/digital/gallery-4.jpg"} price={120} text1={"online game"} text2={"12 GB"} text3={"Learning"} text4={"18 GB ram"} />
        <PricingTable url={"/images/digital/gallery-10.jpg"} price={120} text1={"online game"} text2={"12 GB"} text3={"Learning"} text4={"18 GB ram"} />
        <PricingTable url={"/images/digital/gallery-17.jpg"} price={120} text1={"online game"} text2={"12 GB"} text3={"Learning"} text4={"18 GB ram"} />
       
      </div>
    </div>
  );
}
