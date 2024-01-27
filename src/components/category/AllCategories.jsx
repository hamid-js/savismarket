import  CategoryBox  from './CategoryBox';

export default function AllCategories() {
  return (
    <div className="p-4">
      <CategoryBox
        title="headphones"
        count={10}
        url="/images/digital/headphone-1.png"
        color="blue"
      />
      <CategoryBox
        title="laptops"
        count={23}
        url="/images/digital/laptop-1.png"
        color="red"
      />
      <CategoryBox
        title="phones"
        count={15}
        url="/images/digital/phone5.png"
        color="gold"
      />

      <CategoryBox
        title="Computers"
        count={7}
        url="/images/digital/case19.png"
        color="green"
      />
      <CategoryBox
        title="watches"
        count={33}
        url="/images/digital/watch-3.png"
        color="purple"
      />
    </div>
  );
}
