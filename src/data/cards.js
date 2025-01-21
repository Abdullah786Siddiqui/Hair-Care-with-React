const products = [
  {
    id: 1,
    title: "Hair Coloring Shampoo-Black Soft",
    price: 2950,
    imageUrl: "/public/black shampoo.webp",
    category: "Shampoo",
  },
  {
    id: 2,
    title: "Professional Keratin Shampoo",
    price: 4000,
    imageUrl: "/public/keratin.webp",
    category: "Shampoo",
  },
  {
    id: 3,
    title: "Hair Nourishing Mask",
    price: 3000,
    imageUrl: "/public/hair cream.webp",
    category: "Shampoo",
  },
  {
    id: 4,
    title: "Blue Shampoo",
    price: 1550,
    imageUrl: "/public/blue shampoo.webp",
    category: "Shampoo",
  },
  {
    id: 5,
    title: "Scalp Comfort Shampoo",
    price: 2000,
    imageUrl: "/public/shampooscalfwebp.webp",
    category: "Shampoo",
  },
  {
    id: 6,
    title: "Purple Shampoo",
    price: 1600,
    imageUrl: "/public/purple.webp",
    category: "Shampoo",
  },
  {
    id: 7,
    title: "Hair Growth Shampoo",
    price: 1500,
    imageUrl: "/public/hair growth shampoo.webp",
    category: "Shampoo",
  },
  {
    id: 8,
    title: "Hyaluronic Acid Shampoo",
    price: 2000,
    imageUrl: "/public/hylru acid.webp",
    category: "Shampoo",
  },
  {
    id: 9,
    title: "Hair Repairing Shampoo",
    price: 2700,
    imageUrl: "/public/shampoo.webp",
    category: "Shampoo",
  },
  {
    id: 10,
    title: "Hydrating Aloe Vera Face Wash",
    price: 1120,
    imageUrl: "/public/8_bcaba898-1de3-4749-9e6a-1fcd4e52d8c7.webp",
    category: "Facewash",
  },
  {
    id: 11,
    title: "Saffron Face Wash",
    price: 1120,
    imageUrl: "/public/12_4e33da85-6c94-412d-81e1-e85079a20a5e.webp",
    category: "Facewash",
  },
  {
    id: 12,
    title: "Vitamin C Face Wash",
    price: 1120,
    imageUrl: "/public/10_f41a633c-0a13-4050-883c-50c175e93973.webp",
    category: "Facewash",
  },
  {
    id: 13,
    title: "Tea Tree & Neem Face Wash",
    price: 1120,
    imageUrl: "/public/11_737d4ff0-bd05-4e63-8400-c9ba76629e22.webp",
    category: "Facewash",
  },
  {
    id: 14,
    title: "Cleanser & Make-up Remover",
    price: 1120,
    imageUrl: "/public/6_fdf86a2e-b9f3-4296-904d-01e09181f585.webp",
    category: "Facewash",
  },
  {
    id: 15,
    title: "Rose Face Wash",
    price: 1120,
    imageUrl: "/public/13_2564f508-7845-4a9e-ad18-4957da830ae0.webp",
    category: "Facewash",
  },
  {
    id: 16,
    title: "Daily Essentials Face Wash",
    price: 1120,
    imageUrl: "/public/blue copy.webp",
    category: "Facewash",
  },
  {
    id: 17,
    title: "Acne Defence Face Wash",
    price: 1120,
    imageUrl: "/public/green copy.webp",
    category: "Facewash",
  },
  {
    id: 18,
    title: "Oil Control Face Wash",
    price: 1120,
    imageUrl: "/public/grey copy.webp",
    category: "Facewash",
  },

  {
    id: 19,
    title: "Hair Black Seed Oil",
    price: 950,
    imageUrl: "/public/black seed.webp",
    category: "Hair Growth Oil",
  },
  {
    id: 20,
    title: "Caster Oil",
    price: 800,
    imageUrl: "/public/CastorOil_.webp",
    category: "Hair Growth Oil",
  },
  {
    id: 21,
    title: "Coconut Oil",
    price: 500,
    imageUrl: "/public/cocunt.webp",
    category: "Hair Growth Oil",
  },
  {
    id: 22,
    title: "Onion Oil",
    price: 750,
    imageUrl: "/public/onion_oil.webp",
    category: "Hair Growth Oil",
  },
  {
    id: 23,
    title: "Almond Oil - Natural Hair Treatment",
    price: 600,
    imageUrl: "/public/almond.webp",
    category: "Hair Growth Oil",
  },

  {
    id: 24,
    title: "Hair Growth Herbal Mask for Men",
    price: 950,
    imageUrl: "/public/HairGrowthPowderjar max orange.webp",
    category: "Mask",
  },
  {
    id: 25,
    title: "Amla Herbal Hair Mask",
    price: 800,
    imageUrl: "/public/AMla-Powder-jarmask.webp",
    category: "Mask",
  },
  {
    id: 26,
    title: "Retha Herbal Hair Mask",
    price: 500,
    imageUrl: "/public/Reetha-Powder-Jar_mASK.webp",
    category: "Mask",
  },
  {
    id: 27,
    title: "Shikakai Herbal Hair Mask",
    price: 750,
    imageUrl: "/public/Shikakai-Powder-Jar_mask.webp",
    category: "Mask",
  },

  {
    id: 28,
    title: "TRESEMME Volume Hair Spray Fast Hold",
    price: 4000,
    imageUrl: "/public/022400640457.webp",
    category: "Hair Spray",
  },
  {
    id: 29,
    title: "TRESEMME HAIR SPRAY FREEZE HOLD",
    price: 4000,
    imageUrl: "/public/022400640457.webp",
    category: "Hair Spray",
  },
  {
    id: 30,
    title: "TRES TWO Ultra Fine Mist Hair Spray",
    price: 3000,
    imageUrl: "/public/cd0d36537926fbe5a8cd31f9fcb64afaa7322415-5000x5000.avif",
    category: "Hair Spray",
  },
  {
    id: 31,
    title: "TRES TWO Extra Hold Unscented",
    price: 1550,
    imageUrl: "/public/23f67eb51b9d726c41585a0842052eb95dd0bf68-5000x5000.avif",
    category: "Hair Spray",
  },
  {
    id: 32,
    title: "Flawless Curls Flexible Hold Curly",
    price: 2000,
    imageUrl: "/public/330d887d94a41c200c4240a7cb0d1db29c82eb17-600x600.avif",
    category: "Hair Spray",
  },

  {
    id: 33,
    title: "Hair Studio Line Gel",
    price: 500,
    imageUrl: "/public/gel-1.webp",
    category: "Gel",
  },
  {
    id: 34,
    title: "Hair Super Orange Gel",
    price: 500,
    imageUrl: "/public/gel2.webp",
    category: "Gel",
  },
  {
    id: 35,
    title: "Hair Hyper Solid Gel",
    price: 500,
    imageUrl: "/public/gel-3.webp",
    category: "Gel",
  },
  {
    id: 36,
    title: "Hair Water Gloss Soft Gel",
    price: 500,
    imageUrl: "/public/gel 5.webp",
    category: "Gel",
  },
  {
    id: 37,
    title: "Hair Studio Line Gel",
    price: 2000,
    imageUrl: "/public/gel-1.webp",
    category: "Gel",
  },

  {
    id: 38,
    title: "Vitamin C Skin Serum",
    price: 1499,
    imageUrl: "/public/eye serum.webp",
    category: "Serum",
  },
  {
    id: 39,
    title: "Brightening Skin Serum",
    price: 1350,
    imageUrl: "/public/brightening.webp",
    category: "Serum",
  },
  {
    id: 40,
    title: "HAnti-Aging Serum",
    price: 950,
    imageUrl: "/public/hyua.webp",
    category: "Serum",
  },
  {
    id: 41,
    title: "Anti-Pigmentation Serum",
    price: 950,
    imageUrl: "/public/pigmen.webp",
    category: "Serum",
  },
  {
    id: 42,
    title: "Niacinamide + Zinc Serum",
    price: 950,
    imageUrl: "/public/zinc skin.webp",
    category: "Serum",
  },
  {
    id: 43,
    title: "Anti-Acne Skin Serum",
    price: 1000,
    imageUrl: "/public/aging.webp",
    category: "Serum",
  },

  {
    id: 44,
    title: "Ultra soft Moisturizing Cream",
    price: 500,
    imageUrl: "/public/red1.webp",
    category: "Cream",
  },
  {
    id: 45,
    title: "Classic Moisturizing Cream",
    price: 500,
    imageUrl: "/public/classic4.webp",
    category: "Cream",
  },
  {
    id: 46,
    title: "Soft Moisturizing Cream",
    price: 500,
    imageUrl: "/public/soft3.webp",
    category: "Cream",
  },
  {
    id: 47,
    title: "Whitening Moisturizing Cream",
    price: 500,
    imageUrl: "/public/whitening2.webp",
    category: "Cream",
  },

  {
    id: 48,
    title: "Ultra soft body Lotion",
    price: 600,
    imageUrl: "/public/l-red.webp",
    category: "Lotion",
  },
  {
    id: 49,
    title: "Classic body Lotion",
    price: 600,
    imageUrl: "/public/l-blue.webp",
    category: "Lotion",
  },
  {
    id: 50,
    title: "Vitamin C body Lotion",
    price: 600,
    imageUrl: "/public/l-orange.webp",
    category: "Lotion",
  },

   {
    id: 51,
    title: "Aloe Vera body Lotion",
    price: 600,
    imageUrl: "/public/L-GR.webp",
    category: "Lotion",
  },
  {
    id: 52,
    title: "Sunscreen SPF 60",
    price: 799,
    imageUrl: "/public/20.webp",
    category: "Sunscreen",
  },
  {
    id: 53,
    title: "Classic Moisturizing Sunblock",
    price: 500,
    imageUrl: "/public/Sunblock-3.webp",
    category: "Sunscreen",
  },
  {
    id: 54,
    title: "Soft Moisturizing Sunblock",
    price: 500,
    imageUrl: "/public/Sunblock-2.webp",
    category: "Sunscreen",
  },
  {
    id: 55,
    title: "Whitening Moisturizing Sunblock",
    price: 500,
    imageUrl: "/public/sunscreen-4.webp",
    category: "Sunscreen",
  },
  {
    id: 56,
    title: "Whitening body Lotion",
    price: 600,
    imageUrl: "/public/l-pink1 (1).webp",
    category: "Lotion",
  },
];

export default products;
