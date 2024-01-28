const phones = {
  category: 'phones',
  categoryInfo: {
    title: 'Phones',
    count: 0, // 
    imageUrl: '/images/digital/phone5.png',
    color: 'blue',
 
  },
  products: [
    {
      id: 1,
      name: 'iphone 14 pro max',
      price: 1229,
      details: 'good iphone 14 pro max',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      count: 2,
      firstImage: '/images/digital/gallery-2.jpg',
      hoverImage: '/images/digital/gallery-6.jpg',
    },
    {
      id: 1,
      name: 'iphone 14 pro max',
      price: 1229,
      details: 'good iphone 14 pro max',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      count: 2,
      firstImage: '/images/digital/gallery-2.jpg',
      hoverImage: '/images/digital/gallery-6.jpg',
    },
 
  ],
};
const laptops = {
  category: 'laptops',

  categoryInfo: {
    title: 'Laptops',
    imageUrl: '/images/digital/laptop-1.png',
    color: 'orange',
    // Add other properties as needed
  },
  products: [
    {
      id: 1,
      name: 'lenovo cor i3',
      price: 4343,
      details: 'gaming',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      count: 10,
      firstImage: '/images/digital/gallery-5.jpg',
      hoverImage: '/images/digital/gallery-6.jpg',
    },
    {
      id: 2,
      name: 'lenovo cor i5',
      price: 334,
      details: 'programming',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      count: 7,
      firstImage: '/images/digital/gallery-9.jpg',
      hoverImage: '/images/digital/gallery-11.jpg',
    },
    // Add other laptop products
  ],
};

const computers = {
  category: 'computers',
  categoryInfo: {
    count: 0, // You can calculate this dynamically
    imageUrl: '/images/digital/case19.png',
    color: 'orangered',
  },

  products: [
    {
      id: 1,
      name: 'best case',
      pirce: 1554,
      details: 'A high-performance laptop for productivity and gaming.',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      count: 10,
      firstImage: '/images/digital/gallery-7.jpg',
      hoverImage: '/images/digital/gallery-6.jpg',
    },
  ],
};
const watches = {
  category: 'watches',
  categoryInfo: {
    count: 0, // You can calculate this dynamically
    imageUrl: '/images/digital/watch-3.png',
    color: 'purple',
  },
  products: [
    {
      id: 1,
      name: 'apple watch',
      pirce: 1721,
      details: 'goood',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      count: 7,
      firstImage: '/images/digital/gallery-13.jpg',
      hoverImage: '/images/digital/gallery-6.jpg',
    },
  ],
};

const accessories = {
  category: 'accessories',

  categoryInfo: {
    count: 0, // You can calculate this dynamically
    imageUrl: '/images/digital/headphone-1.png',
    color: 'indigo',
  },
  products: [
    {
      id: 1,
      category: 'accessories',
      name: 'headphone',
      pirce: 1569,
      details: 'A high-performance laptop for productivity and gaming.',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      count: 2,
      firstImage: '/images/digital/gallery-16.jpg',
      hoverImage: '/images/digital/gallery-6.jpg',
    },
  ],
};
const auctions = {
    category: 'auctions',

    categoryInfo: {
        count: 0, // You can calculate this dynamically
        imageUrl: '/images/digital/headphone-1.png',
        color: 'darkblue',
      },
  products: [
    {
      id: 1,
      TimeLeft: 134,
      name: 'iphone 14 pro max',
      pirce: 1229,
      details: 'A high-performance laptop for productivity and gaming.',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      count: 14,
      firstImage: '/images/digital/gallery-15.jpg',
      hoverImage: '/images/digital/gallery-6.jpg',
    },
  ],
};
const allCategoriesData = [
  phones,
  laptops,
  watches,
  accessories,
  computers,
  auctions,
];

export {
  phones,
  laptops,
  watches,
  accessories,
  computers,
  auctions,
  allCategoriesData,
};
