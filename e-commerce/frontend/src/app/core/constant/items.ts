import { GLOBAL_CONST } from './Global.constant';

export const items = [
  {
    _id: 'aaaaa',
    name: 'Women Round Neck Cotton Top',
    description: '...',
    price: 100,
    image: [GLOBAL_CONST.FRONTEND_ASSETS + 'p_img1.png'],
    category: 'Women',
    subCategory: 'Topwear',
    sizes: ['S', 'M', 'L'],
    date: 1716634345448,
    bestseller: true,
    stars: 4,
    people: 122,
  }, // ✅ correct

  {
    _id: 'aaaab',
    name: 'Women Round Neck Cotton Top',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur autem, sint officia possimus ut, aperiam voluptatibus tempore voluptate exercitationem asperiores illo eum maiores, voluptates molestias! Commodi autem dolores temporibus.',
    price: 80,
    image: [
      GLOBAL_CONST.FRONTEND_ASSETS + 'p_img2_1.png',
      GLOBAL_CONST.FRONTEND_ASSETS + 'p_img2_2.png',
      GLOBAL_CONST.FRONTEND_ASSETS + 'p_img2_3.png',
      GLOBAL_CONST.FRONTEND_ASSETS + 'p_img2_4.png',
    ],
    category: 'Men',
    subCategory: 'Topwear',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    date: 1716634345448,
    bestseller: true,
    stars: 4,
    people: 122,
  },

  {
    _id: 'aaaac',
    name: 'Women Round Neck Cotton Top',
    description: '...',
    price: 80,
    image: [GLOBAL_CONST.FRONTEND_ASSETS + 'p_img3.png'],
    category: 'Kids',
    subCategory: 'Topwear',
    sizes: ['S', 'M', 'L'],
    date: 1716634345448,
    bestseller: true,
    stars: 4,
    people: 122,
  },

  {
    _id: 'aaaad',
    name: 'Women Round Neck Cotton Top',
    description: '...',
    price: 80,
    image: [GLOBAL_CONST.FRONTEND_ASSETS + 'p_img4.png'],
    category: 'Men',
    subCategory: 'Topwear',
    sizes: ['S', 'M', 'L', 'Xl', 'XXL'],
    date: 1716634345448,
    bestseller: true,
    stars: 4,
    people: 122,
  },
];
