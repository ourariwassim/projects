export class Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
  stars: number;
  people: number;
  size?: string;

  constructor(
    _id: string,
    name: string,
    description: string,
    price: number,
    image: string[],
    category: string,
    subCategory: string,
    sizes: string[],
    date: number,
    bestseller: boolean,
    stars: number,
    people: number,
    size: string,
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
    this.subCategory = subCategory;
    this.sizes = sizes;
    this.date = date;
    this.bestseller = bestseller;
    this.stars = stars;
    this.people = people;
    this.size = size;
  }
}
