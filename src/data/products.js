// -----------------------------------------------------
// PRODUCTS MAIN DATA
// -----------------------------------------------------

export const productData = [
  {
    id: 1,
    name: "Smart Watch",
    price: 299.0,
    image: "/assets/img/shop/products/1.png",
    categories: ["Electronics", "Gadgets"],
    tags: ["Smart", "Tech"],
    desc: "High-quality smart watch with multiple features.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 149.0,
    image: "/assets/img/shop/products/2.png",
    categories: ["Audio", "Accessories"],
    tags: ["Wireless", "Bluetooth"],
    desc: "Noise-cancelling wireless headphones.",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 199.0,
    image: "/assets/img/shop/products/3.png",
    categories: ["Fashion", "Bags"],
    tags: ["Travel", "Leather"],
    desc: "Premium handmade leather backpack.",
  },
  {
    id: 4,
    name: "DSLR Camera Lens",
    price: 699.0,
    image: "/assets/img/shop/products/4.png",
    categories: ["Photo", "Electronics"],
    tags: ["Photography", "Pro"],
    desc: "Professional lens for DSLR cameras.",
  },
  {
    id: 5,
    name: "Yoga Mat Premium",
    price: 79.0,
    image: "/assets/img/shop/products/5.png",
    categories: ["Fitness", "Lifestyle"],
    tags: ["Wellness", "Sport"],
    desc: "Non-slip eco-friendly premium yoga mat.",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 59.0,
    image: "/assets/img/shop/products/6.png",
    categories: ["Gaming", "Electronics"],
    tags: ["RGB", "Mouse"],
    desc: "Ergonomic gaming mouse with RGB lighting.",
  },
];

// -----------------------------------------------------
// CATEGORIES USED IN SHOP CATEGORY SIDEBAR
// -----------------------------------------------------

export const categories = [
  { id: 1, name: "All Products", href: "#" },
  { id: 2, name: "Electronics", href: "#" },
  { id: 3, name: "Gadgets", href: "#" },
  { id: 4, name: "Audio", href: "#" },
  { id: 5, name: "Accessories", href: "#" },
  { id: 6, name: "Fashion", href: "#" },
  { id: 7, name: "Bags", href: "#" },
  { id: 8, name: "Fitness", href: "#" },
  { id: 9, name: "Lifestyle", href: "#" },
  { id: 10, name: "Gaming", href: "#" },
];

// -----------------------------------------------------
// TAGS — used in sidebar
// -----------------------------------------------------

export const tags = [
  { id: 1, name: "Tech", href: "#" },
  { id: 2, name: "Smart", href: "#" },
  { id: 3, name: "Fashion", href: "#" },
  { id: 4, name: "Trending", href: "#" },
  { id: 5, name: "New", href: "#" },
];

// -----------------------------------------------------
// GET PRODUCT BY ID — for product details page
// -----------------------------------------------------

export const getProductById = (id) =>
  productData.find((p) => Number(p.id) === Number(id));
