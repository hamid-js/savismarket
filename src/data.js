const auctions = {
  categoryName: 'auctions',

  categoryInfo: {
    imageUrl: '/images/digital/headphone-1.png',
    color: 'darkblue',
  },
  products: [
    {
      id: 9,
      name: 'asus gaming',
      price: 4567,
      orderCount:1 ,
      details: 'high-performance gaming.',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      expiryTime : '2025-05-10T12:10:09',
      count: 9,
      firstImage: '/images/computer/case2.png',
      hoverImage: '/images/computer/case1.png',
    },
    {
      id: 2,
      name: 'iphone 15 pro max',
      price: 1525,
      orderCount:1 ,
      details: 'good iphone 14 pro max',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      expiryTime : '2025-02-10T02:00:00',
      count: 8,
      firstImage: '/images/phone/phone7.jpg',
      hoverImage: '/images/phone/phone1.jpg',
    },

    {
      id: 5,
      name: 'lenovo core i3',
      price: 4343,
      orderCount:1 ,
      details: 'gaming',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      expiryTime : '2024-04-10T10:07:10',
      count: 13,
      firstImage: '/images/laptop/laptop1.jpg',
      hoverImage: '/images/laptop/laptop4.jpg',
    },
    {
      id: 17,
      name: 'apple watch',
      price: 1268,
      orderCount:1 ,
      details: 'goood',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      expiryTime : '2024-07-10T02:09:09',
      count: 7,
      firstImage: '/images/watch/watch3.png',
      hoverImage: '/images/watch/watch2.png',
    },
    {
      id: 21,
      name: 'headphone',
      price: 569,
      orderCount:1 ,
      details: 'high-quality',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      expiryTime : '2025-01-10T12:00:00',
      count: 4,
      firstImage: '/images/headphone/headphone4.jpg',
      hoverImage: '/images/headphone/headphone3.png',
    },
  ],
};

const phones = {
  categoryName: 'phones',
  categoryInfo: {
    title: 'Phones',
    imageUrl: '/images/phone/phone5.png',
    color: 'blue',
  },
  products: [
    {
      id: 1,
      category: 'phones',

      name: 'iphone 16 pro max',
      price: 1929,
      orderCount:1 ,
      details: 'perfect',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 8,
      firstImage: '/images/phone/phone1.jpg',
      hoverImage: '/images/phone/phone6.jpg',
    },
    {
      id: 2,
      category: 'phones',
      name: 'iphone 15 pro max',
      price: 1525,
      orderCount:1 ,
      details: 'good iphone 14 pro max',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 8,
      firstImage: '/images/phone/phone7.jpg',
      hoverImage: '/images/phone/phone1.jpg',
    },

    {
      id: 3,
      name: 'iphone 14 pro max',
      category: 'phones',
      price: 1268,
      orderCount:1 ,
      details: 'good iphone 14 pro max',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 5,
      firstImage: '/images/phone/phone6.jpg',
      hoverImage: '/images/phone/phone8.jpg',
    },

    {
      id: 4,
      name: 'iphone 13 pro max',
      category: 'phones',
      price: 1019,
      orderCount:1 ,
      details: 'good iphone 14 pro max',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 2,
      firstImage: '/images/phone/phone8.jpg',
      hoverImage: '/images/phone/phone1.jpg',
    },
  ],
};
const laptops = {
  categoryName: 'laptops',

  categoryInfo: {
    title: 'Laptops',
    imageUrl: '/images/laptop/laptop1.png',
    color: 'teal',
  },
  products: [
    {
      id: 5,
      name: 'lenovo core i3',
      category: 'laptops',
      price: 4343,
      orderCount:1 ,
      details: 'gaming',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 13,
      firstImage: '/images/laptop/laptop1.jpg',
      hoverImage: '/images/laptop/laptop4.jpg',
    },
    {
      id: 6,
      name: 'lenovo cor i5',
      category: 'laptops',
      price: 334,
      orderCount:1 ,
      details: 'programming',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 8,
      firstImage: '/images/laptop/laptop2.jpg',
      hoverImage: '/images/laptop/laptop3.jpg',
    },
    {
      id: 7,
      name: 'lenovo cor i5',
      category: 'laptops',
      price: 334,
      orderCount:1 ,
      details: 'programming',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 5,
      firstImage: '/images/laptop/laptop4.jpg',
      hoverImage: '/images/laptop/laptop5.jpg',
    },
    {
      id: 8,
      name: 'lenovo cor i5',
      category: 'laptops',
      price: 334,
      orderCount:1 ,
      details: 'programming',
      isInWishlist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 7,
      firstImage: '/images/laptop/laptop6.jpg',
      hoverImage: '/images/laptop/laptop7.jpg',
    },
  ],
};

const computers = {
  categoryName: 'computers',
  categoryInfo: {
    title: 'computers',
    imageUrl: '/images/computer/case2.png',
    color: 'orangered',
  },

  products: [
    {
      id: 9,
      name: 'asus gaming',
      category: 'computers',
      price: 4567,
      orderCount:1 ,
      details: 'high-performance gaming.',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 9,
      firstImage: '/images/computer/case2.png',
      hoverImage: '/images/computer/case1.png',
    },
    {
      id: 10,
      name: 'x power',
      category: 'computers',
      price: 1567,
      orderCount:1 ,
      details: ' best-performance ',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 10,
      firstImage: '/images/computer/case3.png',
      hoverImage: '/images/computer/case6.png',
    },
    {
      id: 11,
      name: 'green gaming',
      category: 'computers',
      price: 1500,
      orderCount:1 ,
      details: 'powerfull',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 12,
      firstImage: '/images/computer/case8.png',
      hoverImage: '/images/computer/case9.png',
    },
    {
      id: 12,
      name: 'apple',
      category: 'computers',
      price: 2564,
      orderCount:1 ,
      details: 'high-performance ',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 4,
      firstImage: '/images/computer/case10.png',
      hoverImage: '/images/computer/case11.png',
    },
    {
      id: 13,
      name: 'asus',
      category: 'computers',
      price: 3800,
      orderCount:1 ,
      details: 'progaming',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 5,
      firstImage: '/images/computer/case12.png',
      hoverImage: '/images/computer/case13.png',
    },
    {
      id: 14,
      name: 'gaming pro',
      category: 'computers',
      price: 1554,
      orderCount:1 ,
      details: ' high-quality',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 17,
      firstImage: '/images/computer/case16.png',
      hoverImage: '/images/computer/case15.png',
    },
    {
      id: 15,
      name: 'est33 case',
      category: 'computers',
      price: 1554,
      orderCount:1 ,
      details: 'web development',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 18,
      firstImage: '/images/computer/case17.png',
      hoverImage: '/images/computer/case20.png',
    },
    {
      id: 16,
      name: 'bz4 case',
      category: 'computers',
      price: 1554,
      orderCount:1 ,
      details: 'for front-end devlopers',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 10,
      firstImage: '/images/computer/case18.png',
      hoverImage: '/images/computer/case19.png',
    },
    {
      id: 26,
      name: 'mdt case',
      category: 'computers',
      price: 1554,
      orderCount:1 ,
      details: 'for front-end devlopers',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 10,
      firstImage: '/images/computer/case8.png',
      hoverImage: '/images/computer/case9.png',
    },
    {
      id: 27,
      name: 'teh325 case',
      category: 'computers',
      price: 1554,
      orderCount:1 ,
      details: 'for front-end devlopers',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 10,
      firstImage: '/images/computer/case8.png',
      hoverImage: '/images/computer/case9.png',
    },
  ],
};
const watches = {
  categoryName: 'watches',
  categoryInfo: {
    imageUrl: '/images/watch/watch3.png',
    color: 'purple',
  },
  products: [
    {
      id: 17,
      name: 'apple watch',
      category: 'watches',
      price: 1268,
      orderCount:1 ,
      details: 'goood',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 7,
      firstImage: '/images/watch/watch3.png',
      hoverImage: '/images/watch/watch2.png',
    },
    {
      id: 18,
      name: 'apple watch pro',
      category: 'watches',
      price: 1065,
      orderCount:1 ,
      details: 'goood',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 7,
      firstImage: '/images/watch/watch2.png',
      hoverImage: '/images/watch/watch3.png',
    },
    {
      id: 19,
      name: 'watch pro max',
      category: 'watches',
      price: 1921,
      orderCount:1 ,
      details: 'goood',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 7,
      firstImage: '/images/watch/watch1.png',
      hoverImage: '/images/watch/watch2.png',
    },
  ],
};

const accessories = {
  categoryName: 'headphones',

  categoryInfo: {
    imageUrl: '/images/headphone/headphone3.png',
    color: 'indigo',
  },
  products: [
    {
      id: 20,
      categore: 'headphones',
      name: 'headphone',
      price: 156,
      orderCount:1 ,
      details: 'high-quality',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 7,
      firstImage: '/images/headphone/headphone1.jpg',
      hoverImage: '/images/headphone/headphone7.jpg',
    },
    {
      id: 21,
      category: 'accessories',
      name: 'headphone',
      price: 569,
      orderCount:1 ,
      details: 'high-quality',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 4,
      firstImage: '/images/headphone/headphone2.jpg',
      hoverImage: '/images/headphone/headphone4.jpg',
    },
    {
      id: 22,
      category: 'accessories',
      name: 'zgh 244',
      price: 157,
      orderCount:1 ,
      details: 'high-quality',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 26,
      firstImage: '/images/headphone/headphone4.jpg',
      hoverImage: '/images/headphone/headphone3.png',
    },
    {
      id: 23,
      category: 'accessories',
      name: 'x 864',
      price: 356,
      orderCount:1 ,
      details: 'high-quality',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 2,
      firstImage: '/images/headphone/headphone6.jpg',
      hoverImage: '/images/headphone/headphone7.jpg',
    },
    {
      id: 24,
      category: 'accessories',
      name: 'headphone ax',
      price: 454,
      orderCount:1 ,
      details: 'high-quality',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 24,
      firstImage: '/images/headphone/headphone8.jpg',
      hoverImage: '/images/headphone/headphone9.jpg',
    },
    {
      id: 25,
      category: 'accessories',
      name: 'headphone 454',
      price: 454,
      orderCount:1 ,
      details: 'high-quality',
      isInWahslist: false,
      isInCart: false,
      isInCompare: false,
      isInAuctions: false,
      count: 24,
      firstImage: '/images/headphone/headphone7.jpg',
      hoverImage: '/images/headphone/headphone2.jpg',
    },
  ],
};

const allCategoriesData = [phones, laptops, watches, accessories, computers];

export {
  phones,
  laptops,
  watches,
  accessories,
  computers,
  auctions,
  allCategoriesData,
};
