import  { saveProduct } from "./products.firebase.js";
// Call the function
// Call the function using saveProduct
async function migrateAllProducts(products) {
    for (const product of products) {
        try {
            await saveProduct(product);
            console.log(`Migrated: ${product.name}`);
        } catch (err) {
            console.error(`Error migrating ${product.name}:`, err);
        }
    }
}
const products = [
  {
    "id": 1,
    "name": "Chilli",
    "price": 978.9,
    "bulkPrice": 457.33,
    "image": "https://example.com/images/chilli.jpg",
    "rating": 4.0,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 2,
    "name": "Cumin",
    "price": 123.83,
    "bulkPrice": 435.27,
    "image": "https://example.com/images/cumin.jpg",
    "rating": 4.9,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 3,
    "name": "Spice Oil & Oleoresins",
    "price": 887.73,
    "bulkPrice": 754.74,
    "image": "https://example.com/images/spice_oil_and_oleoresins.jpg",
    "rating": 3.8,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 4,
    "name": "Mint Products",
    "price": 689.54,
    "bulkPrice": 426.52,
    "image": "https://example.com/images/mint_products.jpg",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 5,
    "name": "Turmeric",
    "price": 291.44,
    "bulkPrice": 356.92,
    "image": "https://example.com/images/turmeric.jpg",
    "rating": 3.7,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 6,
    "name": "Curry Leaf",
    "price": 859.74,
    "bulkPrice": 134.68,
    "image": "https://example.com/images/curry_leaf.jpg",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 7,
    "name": "Cardamom (S)",
    "price": 388.27,
    "bulkPrice": 920.12,
    "image": "https://example.com/images/cardamom_(s).jpg",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 8,
    "name": "Coriander",
    "price": 713.58,
    "bulkPrice": 537.96,
    "image": "https://example.com/images/coriander.jpg",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 9,
    "name": "Pepper",
    "price": 731.81,
    "bulkPrice": 127.26,
    "image": "https://example.com/images/pepper.jpg",
    "rating": 3.7,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 10,
    "name": "Fennel",
    "price": 379.88,
    "bulkPrice": 829.1,
    "image": "https://example.com/images/fennel.jpg",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 11,
    "name": "Ginger",
    "price": 761.76,
    "bulkPrice": 668.1,
    "image": "https://example.com/images/ginger.jpg",
    "rating": 4.1,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 12,
    "name": "Garlic",
    "price": 754.05,
    "bulkPrice": 879.16,
    "image": "https://example.com/images/garlic.jpg",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 13,
    "name": "Other Seeds",
    "price": 544.61,
    "bulkPrice": 621.82,
    "image": "https://example.com/images/other_seeds.jpg",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 14,
    "name": "Nutmeg & Mace",
    "price": 517.2,
    "bulkPrice": 770.46,
    "image": "https://example.com/images/nutmeg_and_mace.jpg",
    "rating": 4.8,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 15,
    "name": "Fenugreek",
    "price": 120.88,
    "bulkPrice": 603.47,
    "image": "https://example.com/images/fenugreek.jpg",
    "rating": 4.0,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 16,
    "name": "Cardamom (L)",
    "price": 129.47,
    "bulkPrice": 656.05,
    "image": "https://example.com/images/cardamom_(l).jpg",
    "rating": 4.9,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 17,
    "name": "Celery",
    "price": 956.17,
    "bulkPrice": 469.07,
    "image": "https://example.com/images/celery.jpg",
    "rating": 4.4,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 18,
    "name": "Caraway seeds",
    "price": 490.78,
    "bulkPrice": 153.76,
    "image": "https://example.com/images/caraway_seeds.jpg",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 19,
    "name": "Caper",
    "price": 556.11,
    "bulkPrice": 86.87,
    "image": "https://example.com/images/caper.jpg",
    "rating": 3.9,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 20,
    "name": "Basil",
    "price": 560.77,
    "bulkPrice": 643.82,
    "image": "https://example.com/images/basil.jpg",
    "rating": 4.0,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 21,
    "name": "Aniseed",
    "price": 270.04,
    "bulkPrice": 229.54,
    "image": "https://example.com/images/aniseed.jpg",
    "rating": 4.0,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 22,
    "name": "Asafoetida",
    "price": 238.97,
    "bulkPrice": 719.48,
    "image": "https://example.com/images/asafoetida.jpg",
    "rating": 3.6,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 23,
    "name": "Bay Leaf",
    "price": 640.61,
    "bulkPrice": 187.89,
    "image": "https://example.com/images/bay_leaf.jpg",
    "rating": 4.9,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 24,
    "name": "Ajowan",
    "price": 372.8,
    "bulkPrice": 658.23,
    "image": "https://example.com/images/ajowan.jpg",
    "rating": 4.1,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 25,
    "name": "Cambodge",
    "price": 583.82,
    "bulkPrice": 121.33,
    "image": "https://example.com/images/cambodge.jpg",
    "rating": 3.5,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 26,
    "name": "Cassia",
    "price": 460.94,
    "bulkPrice": 623.89,
    "image": "https://example.com/images/cassia.jpg",
    "rating": 4.5,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 27,
    "name": "Cinamon",
    "price": 253.26,
    "bulkPrice": 90.56,
    "image": "https://example.com/images/cinamon.jpg",
    "rating": 5.0,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 28,
    "name": "Clove",
    "price": 159.55,
    "bulkPrice": 284.64,
    "image": "https://example.com/images/clove.jpg",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 29,
    "name": "Dill",
    "price": 387.09,
    "bulkPrice": 471.53,
    "image": "https://example.com/images/dill.jpg",
    "rating": 3.6,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 30,
    "name": "Greater Galanga",
    "price": 613.71,
    "bulkPrice": 887.48,
    "image": "https://example.com/images/greater_galanga.jpg",
    "rating": 3.7,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 31,
    "name": "Horse Radish",
    "price": 426.05,
    "bulkPrice": 629.26,
    "image": "https://example.com/images/horse_radish.jpg",
    "rating": 4.0,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 32,
    "name": "Hyssop",
    "price": 319.22,
    "bulkPrice": 632.77,
    "image": "https://example.com/images/hyssop.jpg",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 33,
    "name": "Junipper Berry",
    "price": 680.36,
    "bulkPrice": 501.76,
    "image": "https://example.com/images/junipper_berry.jpg",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 34,
    "name": "Kokam",
    "price": 433.9,
    "bulkPrice": 876.04,
    "image": "https://example.com/images/kokam.jpg",
    "rating": 4.5,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 35,
    "name": "Lovage",
    "price": 668.29,
    "bulkPrice": 400.01,
    "image": "https://example.com/images/lovage.jpg",
    "rating": 4.5,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 36,
    "name": "Marjoram",
    "price": 317.17,
    "bulkPrice": 532.68,
    "image": "https://example.com/images/marjoram.jpg",
    "rating": 3.9,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 37,
    "name": "Mustard",
    "price": 991.99,
    "bulkPrice": 219.43,
    "image": "https://example.com/images/mustard.jpg",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 38,
    "name": "Oregano",
    "price": 679.22,
    "bulkPrice": 277.96,
    "image": "https://example.com/images/oregano.jpg",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 39,
    "name": "Parsley",
    "price": 273.22,
    "bulkPrice": 869.93,
    "image": "https://example.com/images/parsley.jpg",
    "rating": 4.3,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 40,
    "name": "Long Pepper",
    "price": 811.55,
    "bulkPrice": 662.17,
    "image": "https://example.com/images/long_pepper.jpg",
    "rating": 4.8,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 41,
    "name": "Pomegranate",
    "price": 794.85,
    "bulkPrice": 310.01,
    "image": "https://example.com/images/pomegranate.jpg",
    "rating": 4.6,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 42,
    "name": "Poppy Seed",
    "price": 205.06,
    "bulkPrice": 160.91,
    "image": "https://example.com/images/poppy_seed.jpg",
    "rating": 3.5,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 43,
    "name": "Rosemary",
    "price": 349.56,
    "bulkPrice": 342.56,
    "image": "https://example.com/images/rosemary.jpg",
    "rating": 4.4,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 44,
    "name": "Saffron",
    "price": 712.85,
    "bulkPrice": 253.24,
    "image": "https://example.com/images/saffron.jpg",
    "rating": 4.8,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 45,
    "name": "Sage",
    "price": 472.12,
    "bulkPrice": 539.06,
    "image": "https://example.com/images/sage.jpg",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 46,
    "name": "Savory",
    "price": 284.81,
    "bulkPrice": 762.22,
    "image": "https://example.com/images/savory.jpg",
    "rating": 4.0,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 47,
    "name": "Star Anise",
    "price": 575.43,
    "bulkPrice": 324.3,
    "image": "https://example.com/images/star_anise.jpg",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 48,
    "name": "Sweet flag",
    "price": 875.44,
    "bulkPrice": 513.59,
    "image": "https://example.com/images/sweet_flag.jpg",
    "rating": 4.1,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 49,
    "name": "Tarmarind",
    "price": 957.36,
    "bulkPrice": 878.68,
    "image": "https://example.com/images/tarmarind.jpg",
    "rating": 3.6,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 50,
    "name": "Tarragon",
    "price": 134.55,
    "bulkPrice": 144.75,
    "image": "https://example.com/images/tarragon.jpg",
    "rating": 3.9,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 51,
    "name": "Tejpat",
    "price": 321.52,
    "bulkPrice": 308.89,
    "image": "https://example.com/images/tejpat.jpg",
    "rating": 4.6,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 52,
    "name": "Thyme",
    "price": 659.59,
    "bulkPrice": 624.53,
    "image": "https://example.com/images/thyme.jpg",
    "rating": 3.8,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 53,
    "name": "Vanilla",
    "price": 731.93,
    "bulkPrice": 137.1,
    "image": "https://example.com/images/vanilla.jpg",
    "rating": 3.7,
    "category": "Whole Spices",
    "badge": ""
  }
];
// Example usage
migrateAllProducts(products);
