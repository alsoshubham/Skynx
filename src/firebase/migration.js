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
export const products = [
  {
    "id": 1,
    "name": "Chilli",
    "price": 978.9,
    "bulkPrice": 457.33,
    "image": "https://img.shoplineapp.com/media/image_clips/60d49cea446f7b003e7161da/original.jpg?1624546537",
    "rating": 4.0,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 2,
    "name": "Cumin Powder (Jeera powder)",
    "price": 123.83,
    "bulkPrice": 435.27,
    "image": "https://www.selefina.com/images5/products_index_retina/cumin_ground_spices.jpg",
    "rating": 4.9,
    "category": "Ground Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 3,
    "name": "Spice Oil & Oleoresins",
    "price": 887.73,
    "bulkPrice": 754.74,
    "image": "https://tse3.mm.bing.net/th/id/OIP.h5SwIGU-_ANoRscjV9RHvwHaHa?rs=1&pid=ImgDetMain",
    "rating": 3.8,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 4,
    "name": "Mint Products",
    "price": 689.54,
    "bulkPrice": 426.52,
    "image": "https://tse1.mm.bing.net/th/id/OIP.NWUQ5m5hO0YLWDDk8R7-EQHaE8?rs=1&pid=ImgDetMain",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 5,
    "name": "Turmeric",
    "price": 291.44,
    "bulkPrice": 356.92,
    "image": "https://th.bing.com/th/id/R.3192696ac0fdf674a446a4eebbe88ad4?rik=hSkGAd8sd0qI7A&riu=http%3a%2f%2fcosmicpineapple.co.uk%2fwordpress%2fwp-content%2fuploads%2f2016%2f01%2fEnhancing-the-Bioavailability-of-Turmeric.jpg&ehk=n0EZHVQh306QYDQXH5xqy%2bPrIWwD%2f12HZINyqtkLq9o%3d&risl=1&pid=ImgRaw&r=0",
    "rating": 3.7,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 6,
    "name": "Curry Leaf",
    "price": 859.74,
    "bulkPrice": 134.68,
    "image": "https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/files/https_www.fourwindsgrowers.com_products_curry-tree_variant_41357996163131.jpg?v=1695923134",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 7,
    "name": "Cardamom (S)",
    "price": 388.27,
    "bulkPrice": 920.12,
    "image": "https://tse3.mm.bing.net/th/id/OIP.SXatWFUB6DkvBnPSVg1puAAAAA?rs=1&pid=ImgDetMain",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 8,
    "name": "Coriander",
    "price": 713.58,
    "bulkPrice": 537.96,
    "image":"https://tse3.mm.bing.net/th/id/OIP.Fbte4oyeuqywwiFEm4oWyQHaHa?rs=1&pid=ImgDetMain",
    "rating": 4.2,
    "category": "Ground Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 9,
    "name": "Pepper",
    "price": 731.81,
    "bulkPrice": 127.26,
    "image": "https://www.lush.com/cdn-cgi/image/width=3840,f=auto/https://unicorn.lush.com/media/ground_black_pepper_ingredients_website.jpg",
    "rating": 3.7,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 10,
    "name": "Ginger",
    "price": 761.76,
    "bulkPrice": 668.1,
    "image": "https://tse4.mm.bing.net/th/id/OIP.UhXPLXxiOuZMoXPG5ahzrwHaGu?rs=1&pid=ImgDetMain",
    "rating": 4.1,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 11,
    "name": "Garlic",
    "price": 754.05,
    "bulkPrice": 879.16,
    "image": "https://4.bp.blogspot.com/-FMirQg3_iio/WRmeQ6ANXBI/AAAAAAAAAKE/dZwAszw-A3sTh6JoencrFxnZMeHW9ueQgCLcB/s1600/2.jpg",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 12,
    "name": "Other Seeds",
    "price": 544.61,
    "bulkPrice": 621.82,
    "image": "https://i.pinimg.com/originals/ba/e1/6a/bae16a73bbb5d63e712e34b12241a949.jpg",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 13,
    "name": "Nutmeg & Mace",
    "price": 517.2,
    "bulkPrice": 770.46,
    "image": "https://i2.wp.com/blog.bigbasket.com/wp-content/uploads/2020/12/nutmeg-and-mace.jpeg?w=2850&ssl=1",
    "rating": 4.8,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 14,
    "name": "Fenugreek",
    "price": 120.88,
    "bulkPrice": 603.47,
    "image": "https://healthjade.com/wp-content/uploads/2017/09/fenugreek.jpg",
    "rating": 4.0,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 15,
    "name": "Cardamom (L)",
    "price": 129.47,
    "bulkPrice": 656.05,
    "image": "https://cpimg.tistatic.com/05389803/b/4/Large-Cardamom.jpg",
    "rating": 4.9,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 16,
    "name": "Caraway seeds",
    "price": 490.78,
    "bulkPrice": 153.76,
    "image": "https://tse1.mm.bing.net/th/id/OIP.lVmuVMyQ7XQjcqc2zg9VsgHaHa?rs=1&pid=ImgDetMain",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 17,
    "name": "Caper",
    "price": 556.11,
    "bulkPrice": 86.87,
    "image": "https://naturalfoodseries.com/wp-content/uploads/2018/08/Capers.jpeg",
    "rating": 3.9,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 18,
    "name": "Basil",
    "price": 560.77,
    "bulkPrice": 643.82,
    "image": "https://tse4.mm.bing.net/th/id/OIP.8mpk5alVYvQD-yQXzF6ZDQHaFj?rs=1&pid=ImgDetMain",
    "rating": 4.0,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 19,
    "name": "Asafoetida (Hing)",
    "price": 238.97,
    "bulkPrice": 719.48,
    "image": "https://mccormick.widen.net/content/q6idirrl2y/original/schwartz_allspice_637390500194179688_2000x1125.jpg",
    "rating": 3.6,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 20,
    "name": "Bay Leaf",
    "price": 640.61,
    "bulkPrice": 187.89,
    "image": "https://unpackt.com.sg/wp-content/uploads/2020/07/Bay-Leaf.png",
    "rating": 4.9,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 21,
    "name": "Ajwain (Carom Seeds)",
    "price": 372.8,
    "bulkPrice": 658.23,
    "image": "https://th.bing.com/th/id/R.28588e59b248ef4c5e9b9f5ee2968830?rik=W0S3SaxTwNLFqg&riu=http%3a%2f%2fwww.101herbs.com%2fimages%2fpro-body-img%2fajowan-seeds.jpg&ehk=cozrwaIA8qXxYU8nYvUnqqy5pcGsQpYNOtgFLPUqucg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    "rating": 4.1,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 22,
    "name": "Cambodge",
    "price": 583.82,
    "bulkPrice": 121.33,
    "image": "https://img2.exportersindia.com/product_images/bc-full/dir_187/5587426/cambodge-spices-1524129649-3790773.jpeg",
    "rating": 3.5,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 23,
    "name": "Cassia",
    "price": 460.94,
    "bulkPrice": 623.89,
    "image": "https://tse1.mm.bing.net/th/id/OIP.Y0yel_R2DQAmfY_dHbEXcgHaHa?rs=1&pid=ImgDetMain",
    "rating": 4.5,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 24,
    "name": "Clove",
    "price": 159.55,
    "bulkPrice": 284.64,
    "image": "https://www.healthbenefitstimes.com/9/gallery/clove/Clove.jpg",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 25,
    "name": "Dill",
    "price": 387.09,
    "bulkPrice": 471.53,
    "image": "https://www.thespruceeats.com/thmb/yErF4tGYbBFRyPwQmLnLSFb1Ty8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/dill-2500-56a20f953df78cf772718536.jpg",
    "rating": 3.6,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 26,
    "name": "Kokam",
    "price": 433.9,
    "bulkPrice": 876.04,
    "image": "https://img2.exportersindia.com/product_images/bc-full/dir_187/5587426/kokam-spices-1524129843-3790798.jpeg",
    "rating": 4.5,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 27,
    "name": "Lovage",
    "price": 668.29,
    "bulkPrice": 400.01,
    "image": "https://www.gardeningknowhow.com/wp-content/uploads/2017/08/lovage-benefits-1024x729.jpg",
    "rating": 4.5,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 28,
    "name": "Mustard",
    "price": 991.99,
    "bulkPrice": 219.43,
    "image": "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX6788786.jpg",
    "rating": 4.2,
    "category": "Whole Spices",
    "badge": "Common Household Use"
  },
  {
    "id": 29,
    "name": "Oregano",
    "price": 679.22,
    "bulkPrice": 277.96,
    "image": "https://www.thespruce.com/thmb/TCYimj6CqpIuk43xjhoDyXckK4I=/2124x1413/filters:fill(auto,1)/130136311-56a47d6d5f9b58b7d0d742ca.jpg",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 30,
    "name": "Long Pepper",
    "price": 811.55,
    "bulkPrice": 662.17,
    "image": "https://tse2.mm.bing.net/th/id/OIP.PWDx-EfeOFqxew5U_4y2ngHaGJ?rs=1&pid=ImgDetMain",
    "rating": 4.8,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 31,
    "name": "Pomegranate",
    "price": 794.85,
    "bulkPrice": 310.01,
    "image": "https://tse1.mm.bing.net/th/id/OIP.IKB7G_jY59lK-4_VmUsDRQHaFF?rs=1&pid=ImgDetMain",
    "rating": 4.6,
    "category": "Whole Spices",
    "badge": "Seasonal Special"
  },
  {
    "id": 32,
    "name": "Poppy Seed",
    "price": 205.06,
    "bulkPrice": 160.91,
    "image": "https://th.bing.com/th/id/R.eef46ed84fb8dbb0886edbf97c43c6d0?rik=5RvPiNC3JhctZA&riu=http%3a%2f%2fimages.wisegeek.com%2fpoppy-seeds-on-wooden-scoop.jpg&ehk=BZhOL9zArfLUJ3eVsRSV%2b%2fezM3O7CwC3HeGDnfbix3Q%3d&risl=&pid=ImgRaw&r=0",
    "rating": 3.5,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 33,
    "name": "Rosemary",
    "price": 349.56,
    "bulkPrice": 342.56,
    "image": "https://th.bing.com/th/id/OIP.yFQmBRxZoPHWZ5WjlBVb2wHaGG?w=251&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "rating": 4.4,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 34,
    "name": "Saffron",
    "price": 712.85,
    "bulkPrice": 253.24,
    "image": "https://img.freepik.com/premium-photo/saffron-spice-wooden-bowl-isolated-white-background_157837-979.jpg?w=1480",
    "rating": 4.8,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 35,
    "name": "Star Anise",
    "price": 575.43,
    "bulkPrice": 324.3,
    "image": "https://i.pinimg.com/originals/69/94/91/69949196c28a615e3d1d8cffc4ea3c0b.jpg",
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 36,
    "name": "Tarmarind",
    "price": 957.36,
    "bulkPrice": 878.68,
    "image": "https://keralaspiceswholesale.com/wp-content/uploads/2023/03/tamarind.jpeg",
    "rating": 3.6,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 37,
    "name": "Tejpat",
    "price": 321.52,
    "bulkPrice": 308.89,
    "image": "https://tse4.mm.bing.net/th/id/OIP.g979r-o83GUEoAzfuWHcfAHaE7?rs=1&pid=ImgDetMain",
    "rating": 4.6,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 38,
    "name": "Vanilla",
    "price": 731.93,
    "bulkPrice": 137.1,
    "image": "https://4.imimg.com/data4/HU/MR/MY-2/vanilla-spice-500x500.jpg",
    "rating": 3.7,
    "category": "Whole Spices",
    "badge": ""
  },
  {
    "id": 39,
    "name": "Turmeric (Haldi)",
    "price": 60,
    "bulkPrice": 450,
    "image": "https://th.bing.com/th/id/OIP.yotw_FBnR0G3qDXTjRKj-gAAAA?w=294&h=176&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "rating": 4.8,
    "category": "Ground Spices",
    "badge": "Household Essential"
  },
  {
    "id": 40,
    "name": "Coriander Seeds (Dhaniya)",
    "price": 50,
    "bulkPrice": 400,
    "image": "https://img.freepik.com/free-photo/bunch-coriander-leaves-isolated-white-surface_34152-2280.jpg?w=2000", 
    "rating": 4.7,
    "category": "Whole Spices",
    "badge": "Household Essential"
  },
  {
    "id": 41,
    "name": "Cumin Seeds (Jeera)",
    "price": 70,
    "bulkPrice": 500,
   "image": "https://th.bing.com/th/id/R.d53bc86c77bad56c4e2a54a9492f393b?rik=in%2fhZk0exeO1lw&riu=http%3a%2f%2f5.imimg.com%2fdata5%2fSELLER%2fDefault%2f2021%2f10%2fXZ%2fIW%2fLO%2f3042133%2fcumin-seed.jpg&ehk=Qa4bLBdMwoJL8gzfxs84x%2big%2fyfNwAEY4o27BlIItm0%3d&risl=&pid=ImgRaw&r=0",
    "rating": 4.8,
    "category": "Whole Spices",
    "badge": "Household Essential"
  },
  {
    "id": 42,
    "name": "Red Chili Powder (Lal Mirch)",
    "price": 80,
    "bulkPrice": 600,
    "image": "https://tiimg.tistatic.com/fp/1/008/343/dried-ground-spicy-taste-organic-red-chilli-powder-579.jpg",
    "rating": 4.7,
    "category": "Ground Spices",
    "badge": "Household Essential"
  },
  {
    "id": 43,
    "name": "Black Mustard Seeds (Rai)",
    "price": 45,
    "bulkPrice": 350,
    "image": "https://th.bing.com/th/id/R.21391fd9f966ba4c72858ddfd8212dc6?rik=ve3DOapd2LEiaw&riu=http%3a%2f%2fwww.ravalexports.com%2fwp-content%2fuploads%2f2020%2f09%2fblack-mustard-seed.jpg&ehk=GiAiDBiOGiBkHS1Kr9aWiBMC9kChKY2kWMefME0wAvY%3d&risl=&pid=ImgRaw&r=0",
    "rating": 4.5,
    "category": "Whole Spices",
    "badge": "Household Essential"
  },
  {
    "id": 44,
    "name": "Fennel Seeds (Saunf)",
    "price": 55,
    "bulkPrice": 430,
    "image": "https://tse2.mm.bing.net/th/id/OIP.vZ1NJLDIzzMygxe-AKMMEgHaJ3?pid=ImgDet&w=474&h=631&rs=1",
    "rating": 4.6,
    "category": "Whole Spices",
    "badge": "Household Essential"
  },
  {
    "id": 45,
    "name": "Cinnamon (Dalchini)",
    "price": 130,
    "bulkPrice": 1000,
    "image": "https://th.bing.com/th/id/R.e2aaea4f3e0dd1a924fb395f23ce5955?rik=4zG6PNbVXt3kJQ&riu=http%3a%2f%2fmedia.trusper.net%2fu%2f5b64a77f-cb23-43bf-8827-1cafefff106b.jpg&ehk=l41T%2b%2bxuqqLdwXcNSztdivIDNmcP3HhJ068t7kMBrsY%3d&risl=&pid=ImgRaw&r=0",
    "rating": 4.8,
    "category": "Whole Spices",
    "badge": "Premium"
  },
  {
    "id": 46,
    "name": "Garam Masala",
    "price": 95,
    "bulkPrice": 750,
    "image": "https://i5.walmartimages.com/asr/f24a7aec-5a0e-46e9-ab1f-24f5c78f7eb3.fcd81cecd5a74e28cfce85c59a8c58fb.jpeg",
    "rating": 4.8,
    "category": "Blends",
    "badge": "Household Essential"
  },
  {
    "id": 47,
    "name": "Chaat Masala",
    "price": 60,
    "bulkPrice": 480,
    "image": "https://i.pinimg.com/736x/2c/be/0a/2cbe0a01edf944d78f9e4630573b56b3.jpg",
    "rating": 4.5,
    "category": "Retail Packs",
    "badge": "Popular Blend"
  },
  {
    "id": 48,
    "name": "Sambar Masala",
    "price": 85,
    "bulkPrice": 680,
    "image": "https://i.pinimg.com/736x/6d/bd/82/6dbd82655737e94f384f927fd2e3356c.jpg",
    "rating": 4.6,
    "category": "Retail Packs",
    "badge": "South Indian"
  },
  {
    "id": 49,
    "name": "Pav Bhaji Masala",
    "price": 70,
    "bulkPrice": 550,
    "image": "https://i.pinimg.com/736x/12/43/a8/1243a85a34874546d432ebd13c614af6.jpg",
    "rating": 4.6,
    "category": "Retail Packs",
    "badge": "Mumbai Favorite"
  },
  {
    "id": 50,
    "name": "Classic Raw Makhana",
    "price": 70,
    "bulkPrice": 520,
    "image": "https://i.pinimg.com/736x/38/8a/42/388a425192aa990139ec73711a428e81.jpg",
    "rating": 4.8,
    "category": "Makhana",
    "badge": "Household Essential"
  },
  {
    "id": 51,
    "name": "Roasted Salted Makhana",
    "price": 90,
    "bulkPrice": 620,
    "image": "https://i.pinimg.com/736x/7c/6f/17/7c6f175859200cc95fc72f2fba62a193.jpg",
    "rating": 4.7,
    "category": "Makhana",
    "badge": "Healthy Snack"
  },
  {
    "id": 52,
    "name": "Spicy Peri-Peri Makhana",
    "price": 95,
    "bulkPrice": 640,
    "image": "https://i.pinimg.com/736x/0d/09/71/0d097163ca1a2a73b4f36958c8ed27b5.jpg",
    "rating": 4.6,
    "category": "Makhana",
    "badge": "Healthy Snack"
  },
  {
    "id": 53,
    "name": "Caramel Makhana",
    "price": 100,
    "bulkPrice": 700,
    "image": "https://i.pinimg.com/736x/ca/e3/da/cae3da2de69db661d57add121f718665.jpg",
    "rating": 4.5,
    "category": "Makhana",
    "badge": "Sweet Treat"
  },
  {
    "id": 54,
    "name": "Mint Makhana",
    "price": 95,
    "bulkPrice": 660,
    "image": "https://i.pinimg.com/736x/74/5d/5a/745d5a5a180ac093264ab5f813010463.jpg",
    "rating": 4.4,
    "category": "Makhana",
    "badge": "Healthy Snack"
  },
  {
    "id": 55,
    "name": "Cream & Onion Makhana",
    "price": 95,
    "bulkPrice": 660,
    "image": "https://i.pinimg.com/736x/cb/ba/47/cbba4777dbf16aee2f380ab0096a8870.jpg",
    "rating": 4.5,
    "category": "Makhana",
    "badge": "Healthy Snack"
  },
  {
    "id": 56,
    "name": "Desi Masala Makhana",
    "price": 95,
    "bulkPrice": 650,
    "image": "https://i.pinimg.com/736x/2d/57/f2/2d57f28fec2178c6fe0aba7c4b8380f0.jpg",
    "rating": 4.6,
    "category": "Makhana",
    "badge": "Spicy Snack"
  },
];
// // Example usage
// migrateAllProducts(products);
