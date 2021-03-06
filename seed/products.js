const db = require("../db/connection");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      product: "Banana ",
      featured: false,
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
      imgURL2: "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1024-80.jpg",
      imgURL3: "https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/good-reasons-to-eat-a-banana-today.jpg",
      imgURL4: "https://images.carriercms.com/image/upload/w_700,h_400,c_fill,g_center,q_auto,f_auto/v1543516192/carrier/carrier-global/food/bananas.jpg",
      description: " Best bananas",
      review: "5",
      price: "0.75/lb",
      reviews: [{
        title: "Would buy again!!!!",
        author: "Ashik U.",
        location: "New York, New York",
        rating: "5",
        description: "Always ripe!!!"
      }]
    },
    {
      product: "Pink Lady Apple",
      featured: false,
      imgURL: "https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_daedc2bb-883b-42cd-9c4f-31ff0abc5c81_v2.jpg",
      imgURL2: "https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f023a26f-f21b-4661-a081-5a4d111ce422.jpg",
      imgURL3: "https://cdn.vox-cdn.com/thumbor/2F21Htx80ynqDhudrXOa1o6a4po=/0x0:1920x1280/1220x813/filters:focal(807x487:1113x793):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57340051/apples_2811968_1920.0.jpg",
      imgURL4: "https://assets.bonappetit.com/photos/5d8b8a6888c1eb00087ac41a/1:1/w_1024%2Cc_limit/Basically-Apples.jpg",
      description: " An apple a day keeps the doctor away ",
      review: "5",
      price: "1.00/lb",
      reviews: [{
        title: "Best prices in town!",
        author: "Ashley K.,",
        location: "San Jose, California",
        rating: "5",
        description: "My adorable son loves these apples!!!"
      }]
    },
    {
      product: "Avocado",
      featured: false,
      imgURL: "https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_09ff3801-efef-43e6-a14b-6dc55a3fe4c8.jpg",
      imgURL2: "https://www.washingtonian.com/wp-content/uploads/2020/02/iStock-1027572462-scaled-1536x1271.jpg",
      imgURL3: "https://media.self.com/photos/5b43712e4d0c3c282a8878d1/4:3/w_1024%2Cc_limit/avocado.jpg",
      imgURL4: "https://www.jessicagavin.com/wp-content/uploads/2019/04/avocados-3.jpg",
      description: " Yummy ",
      review: "5",
      price: "1.00/lb",
      reviews: [{
        title: "Who doesn't love avocado?",
        author: "Brianna L.,",
        location: "Boston, Massachusetts",
        rating: "5",
        description: "Always fresh and so tasty!!."
      }]
    },
    {
      product: "Cream Cheese",
      featured: true,
      imgURL: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_20826ce1-b4f1-42ed-92d9-690ba76b1f8e.jpg",
      imgURL2: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_053a7f3b-cfdb-46ba-be87-6c1b4371e112.JPG",
      imgURL3: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7a58b7fc-ff64-43f4-87ed-c6da5f9e70f5.jpg",
      imgURL4: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cf0c6ad9-9b84-4430-a8b5-0f649c684533.jpg",
      description: " Best cheese out there ",
      price: "2.00",
      review: "4",
      reviews: [{
        title: "The best cream chesse out there!",
        author: "Nina J.,",
        location: "New York, New York",
        rating: "5",
        description: "My go to with bagels in the morning. You can't beat these prices!!"
      }]
    },
    {
      product: "White Chocolate ",
      featured: true,
      imgURL: "https://images-na.ssl-images-amazon.com/images/I/41MzvnOJ2-L.jpg",
      imgURL2: "https://www.ghirardelli.com/wcsstore/GhirardelliCatalogAssetStore/Attachment/Secondary/61829_cheesecake.png",
      imgURL3: "https://www.ghirardelli.com/wcsstore/GhirardelliCatalogAssetStore/Attachment/Secondary/61829_nutrition.png",
      imgURL4: "https://www.ghirardelli.com/wcsstore/GhirardelliCatalogAssetStore/Attachment/Secondary/61829_ingredients.png",
      description: "Sweet delight",
      review: "5",
      price: "3.50/lb",
      reviews: [{
        title: "Simply delicious!!",
        author: "Chris A.,",
        location: "New Brunswick, New Jersey",
        rating: "5",
        description: "I don't usually eat chocolate but when I do, I always buy these from here!!"
      }]
    },
    {
      product: "Graham Crackers ",
      featured: false,
      imgURL: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4c398cbd-26ec-4dbd-ab5b-19b29cce33f5.jpg",
      imgURL2: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bd9371fa-f113-4dc3-b4c3-242f57e2cda6.jpg",
      imgURL3: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_59698f91-f9d9-449a-a60d-cae20e7be052.jpg",
      imgURL4: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_59698f91-f9d9-449a-a60d-cae20e7be052.jpg",
      description: "Yummy Crackers",
      review: "5",
      price: "4.00",
      reviews: [{
        title: "Would buy again!!!!",
        author: "Dana C.,",
        location: "Detroit, Michigan",
        rating: "5",
        description: "Hits the spot with tea!!"
      }]
    },

    {
      product: "Hotdogs",
      featured: true,
      imgURL: "https://bit.ly/32FdRU2",
      imgURL2: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7b90d878-d1cf-4018-88ca-544772f36e78.jpg",
      imgURL3: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1ba69eb7-c7b7-4780-9850-5a919b25c850.jpg",
      imgURL4: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1a21fc2f-4542-4071-8b7f-11ea1f257f5a.jpg",
      description:
        "It's official! Hot dogs are sandwiches. And they are a staple for your summer BBQ festivities.",
      price: "5.00",
      review: "5",
      reviews: [{
        title: "The best Weiners money can buy!",
        author: "Jeff P.,",
        location: "Atlanta, Georgia",
        rating: "5",
        description: "I bought a pack of these for my BBQ last weekend and I have never had a sandwich this tasty! Highly superior to Hebrew National, definitely pick up a few packs for your next big event. "
      }]
    },
    {
      product: "Ketchup",
      featured: true,
      imgURL: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_dba0a59a-ff8c-4e54-8100-0fe90d425b00.jpg",
      imgURL2: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2c2a326f-1024-4ef1-9e28-68b275fc6949.JPG",
      imgURL3: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d57f68d6-2845-46f8-be86-6083d3b659c4.jpg",
      imgURL4: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_60b7ff32-814c-41a0-a962-4d2c87fa9cba.jpg",
      description: "Who doesn't love ketchup? ",
      review: "5",
      price: "5.00",
      reviews: [{
        title: "Would buy again!",
        author: "Billy C.",
        location: "Miami, Florida",
        rating: "5",
        description: "Best prices in town!!"
      }]
    },
    {
      product: "Raspberries ",
      featured: true,
      imgURL: "https://target.scene7.com/is/image/Target/GUEST_db971b03-6a51-4ee0-a411-10c7ea8300ce?wid=488&hei=488&fmt=pjpeg",
      imgURL2: "https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6a80f735-1c07-403f-8fb7-4ac683f7662a.jpg",
      imgURL3: "https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cefc2350-6da5-41d4-bb64-c26dd801f944.jpg",
      imgURL4: "https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e1a8c469-3d6a-47c0-9b8e-6fe3f88cc852.jpg",
      description: "Yummy in my tummy",
      review: "4",
      price: "5.50",
      reviews: [{
        title: "Would buy again!!!!",
        author: "Manny R.,",
        location: "Boston, Massachusetts",
        rating: "5",
        description: "Simply delicious!!!!"
      }]
    },
    {
      product: "Whole Milk ",
      featured: false,
      imgURL: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_003cb31b-3b22-4592-b40f-d5ef332b472a.jpg",
      imgURL2: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bc263bdd-8095-4218-b2b2-493213aece7c.jpg",
      imgURL3: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_211517da-ae80-4f21-85e4-e4590d36a377.jpg",
      imgURL4: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3946aa41-3c56-46ab-870c-1e318fa1e1cf.jpg",
      description: "Calcium",
      review: "4",
      price: "6.50",
      reviews: [{
        title: "These prices are something you can't beat!!!",
        author: "Leslie S.,",
        location: "Philadelphia, Pennsylvania",
        rating: "5",
        description: "Always fully restocked daily and delicious!!"
      }]
    },
  ];
  await Product.deleteMany()
  await Product.insertMany(products);
  console.log("Created products!");
};
const run = async () => {
  await main();
  db.close();
};

run();
