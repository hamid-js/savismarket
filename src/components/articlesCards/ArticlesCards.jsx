import  Titles  from '../ui/Titles';
import  ProductArticle  from './ProductArticle';

export default function ArticlesCards() {
  return (
    <div className=" flex flex-col bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950  ">
      <Titles />
      <ProductArticle />
      <ProductArticle />
    </div>
  );
}
