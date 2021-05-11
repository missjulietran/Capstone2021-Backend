exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("inventory")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("inventory").insert([
        //Lush Product (5 Total)
        {
          seller_id: 1,
          event_id: 1,
          name: "Aqua Sea Salt Soap",
          category: ["Bath & Body", "Skincare"],
          sku: "lush1",
          units: 100,
          total_quantity: 10000,
          price: 2,
          image:
            "https://res.cloudinary.com/lush/image/upload/s--jazyHcW---/c_fill,h_200,q_jpegmini,w_200/v1/lush_content/products/main/2020/06/web_sea_vegetable_soap_2020.jpg?itok=MhkYhdPe",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions: "Bath Soap not from NotLush",
        },
        {
          seller_id: 1,
          event_id: 1,
          name: "Lavender Body Scrub",
          category: ["Bath & Body", "Skincare"],
          sku: "lush2",
          units: 100,
          total_quantity: 2000,
          price: 2,
          image:
            "https://res.cloudinary.com/lush/image/upload/s--TQWYn6RC--/c_fill,h_200,q_jpegmini,w_200/v1/lush_content/products/main/2018/08/magic_crystals_scrub_christmas_2018.jpg?itok=jgm5pUI4",
          best_before_date: "2021-05-02T16:49:19.278Z",
          descriptions: "Body Scrub not from NotLush",
        },
        {
          seller_id: 1,
          event_id: null,
          name: "Rose Coconut Shampoo",
          category: ["Bath & Body", "Hair Care"],
          sku: "lush3",
          units: 100,
          total_quantity: 5000,
          price: 2,
          image:
            "https://res.cloudinary.com/lush/image/upload/s--X0Kkkdit--/c_fill,h_200,q_jpegmini,w_200/v1/lush_content/products/main/2018/10/web_coconut_rice_cake_shampoo_bar_2019.jpg?itok=TKvmG6-f",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions: "Shampoo not from NotLush",
        },
        {
          seller_id: 1,
          event_id: 1,
          name: "Key Lime Pie Lip Balm",
          category: ["Makeup", "Skincare"],
          sku: "lush4",
          units: 100,
          total_quantity: 2000,
          price: 2,
          image:
            "https://res.cloudinary.com/lush/image/upload/s--9Jk6zwSL--/c_fill,h_200,q_jpegmini,w_200/v1/products/main/2015/05/Key_Lime_Web.jpg?itok=LtKgTc0p",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions: "Key Lime Pie Lip balm not from NotLush",
        },
        {
          seller_id: 1,
          event_id: null,
          name: "Groovy Bath bomb",
          category: ["Bath & Body", "Skincare"],
          sku: "lush5",
          units: 100,
          total_quantity: 20000,
          price: 3,
          image:
            "https://res.cloudinary.com/lush/image/upload/s--22K4ANnb--/c_fill,h_200,q_jpegmini,w_200/v1/lush_content/products/main/2019/01/web_groovy_-kind_of_love_bath_bomb_harajuku_shop_2018.jpg?itok=---vB_zw",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions: "Groovy Kind of Love bath bomb from NotLush",
        },
        //Lays Product (5 total)
        {
          seller_id: 2,
          event_id: null,
          name: "Classic Flavour",
          category: ["Snacks", "Asian", "Western"],
          sku: "Pringles1",
          units: 100,
          total_quantity: 20000,
          price: 1,
          image: "https://images.heb.com/is/image/HEBGrocery/001865742",
          best_before_date: "2021-09-01T16:49:19.278Z",
          descriptions: "Classic flavour",
        },
        {
          seller_id: 2,
          event_id: null,
          name: "Spicy Crayfish Flavour",
          category: ["Snacks", "Asian", "Western"],
          sku: "Pringles2",
          units: 100,
          total_quantity: 20000,
          price: 3,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/81JrYPJ0QXL._SY741_.jpg",
          best_before_date: "2021-07-01T16:49:19.278Z",
          descriptions: "Spicy Crayfish flavour",
        },
        {
          seller_id: 2,
          event_id: null,
          name: "Family Sized Ketchup Flavour",
          category: ["Snacks", "Western"],
          sku: "Pringles3",
          units: 100,
          total_quantity: 20000,
          price: 4,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/91GSJSJbWCL._SY879_PIbundle-3,TopRight,0,0_SX664SY879SH20_.jpg",
          best_before_date: "2021-06-01T16:49:19.278Z",
          descriptions:
            "All time Canadian favourite Ketchup flavoured in family size",
        },
        {
          seller_id: 2,
          event_id: null,
          name: "Salt and Vinegar Flavour",
          category: ["Snacks", "Western"],
          sku: "Pringles4",
          units: 100,
          total_quantity: 20000,
          price: 2,
          image:
            "https://i5.walmartimages.com/asr/b40775b8-84f0-4371-b51e-aa8c4fb82d49_1.62d8306eeb14714457539a68f0c7ab40.jpeg",
          best_before_date: "2022-05-01T16:49:19.278Z",
          descriptions:
            "Salt with a hint of tangy from the Vinegar makes a perfect combination",
        },
        {
          seller_id: 2,
          event_id: null,
          name: "Jalapeno Flavour",
          category: ["Snacks", "Western"],
          sku: "Pringles5",
          units: 100,
          total_quantity: 20000,
          price: 5,
          image:
            "https://images.albertsons-media.com/is/image/ABS/960124188?$ecom-pdp-desktop$&defaultImage=Not_Available",
          best_before_date: "2021-04-01T16:49:19.278Z",
          descriptions: "Jalapeno flavoured kettle cooked chips",
        },
        //Always Products
        {
          seller_id: 3,
          event_id: null,
          name: "Sensitive Normal Ultra 14pk",
          category: ["Feminine Care"],
          sku: "Always1",
          units: 100,
          total_quantity: 20000,
          price: 5,
          image:
            "https://res.cloudinary.com/mwace/image/upload/w_210,c_limit,q_auto,f_auto/Always_EN_UK/Products/Sanitary-Towels/Sensitive/Normal-Ultra-Size-1-With-Wings/Always-Sensitive-Ultra-Normal-Sanitary-Towels-With-Wings-14ct.png",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "Exceptionally Soft top layer and unique comfort zones to ensure added comfort for your delicate skin. Ideal for normal days of your menstrual cycle.",
        },
        {
          seller_id: 3,
          event_id: null,
          name: "Dailies Cotton Protection Normal 28pk",
          category: ["Feminine Care"],
          sku: "Always2",
          units: 100,
          total_quantity: 20000,
          price: 3,
          image:
            "https://res.cloudinary.com/mwace/image/upload/w_210,c_limit,q_auto,f_auto/Always_EN_UK/Products/Panty-Liners/Cotton-Protection/Alwayss-Dailies-Cotton-Protection-Normal-Panty-Liners-28ct.png",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "NotAlways Dailies Cotton Protection Pantyliners Normal come with a 100% organic cotton topsheet. Pantyliners are free from dyes and fragrances. They are thin and flexible, designed to be comfortable and have an absorbent core. They are breathable. They have been approved by dermatologists of SHA and are certified by Cotton Inc.",
        },
        {
          seller_id: 3,
          event_id: null,
          name: "Maxi Night Sanitary Pads 9pk",
          category: ["Feminine Care"],
          sku: "Always3",
          units: 100,
          total_quantity: 20000,
          price: 4,
          image:
            "https://res.cloudinary.com/mwace/image/upload/w_210,c_limit,q_auto,f_auto/Always_EN_UK/Products/Sanitary-Towels/Maxi/Night-Size-3-With-Wings/Always-Maxi-Night-Sanitary-Towels-With-Wings-9ct.png",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "NotAlways Maxi Profresh Night is a thick sanitary towel offering Always trusted protection with odour neutralising technology to meet all type of needs.",
        },
        {
          seller_id: 3,
          event_id: null,
          name: "Regular Pearl 36pk",
          category: ["Feminine Care"],
          sku: "Always4",
          units: 100,
          total_quantity: 20000,
          price: 6,
          image:
            "https://res.cloudinary.com/mwace/image/upload/w_auto,c_limit,q_auto,f_auto/Tampax-US-EN/Products/Spring%2021%20Update/Pearl/00073010004559_C1N1.png",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions: "All-day comfort & protection for up to 8hrs",
        },
        {
          seller_id: 3,
          event_id: null,
          name: "Pearl Super Plus 36pk",
          category: ["Feminine Care"],
          sku: "Always5",
          units: 100,
          total_quantity: 20000,
          price: 7,
          image:
            "https://res.cloudinary.com/mwace/image/upload/w_auto,c_limit,q_auto,f_auto/Tampax-US-EN/Products/Spring%2021%20Update/Pearl/00073010012172_C1N1.png",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "NotTampax Pearl Super Plus Absorbency provides protection you can feel good about. Free of dyes, perfume, latex*, BPA, and elemental chlorine bleaching. Plus, inserting the tampon is made easy thanks to the applicator’s Anti-Slip Grip, while Tampax FormFit protection lets it gently expand to your individual shape.",
        },
        //Maybelline Products (5)
        {
          seller_id: 4,
          event_id: null,
          name: "Fit Me! Dewy + Smooth Foundation",
          category: ["Makeup", "Cosmetic"],
          sku: "Pocari1",
          units: 100,
          total_quantity: 20000,
          price: 5,
          image:
            "https://www.maybelline.com/~/media/mny/global/face-makeup/foundation/fit-me-dewy-smooth-foundation/maybelline-foundation-fit-me-dewy-and-smooth-sun-beige-041554238761-c.jpg?thn=0&w=380&hash=E5801CB8FDCD20BA4E9A523F7AE65FF578748031",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "Smooth Foundation in Sandy-beige tone. Fit Me® Dewy + Smooth Foundation face makeup. NotMaybelline's smoothing concentrate hydrates rough patches leaving skin with a naturally luminous finish. Ideal for normal to dry skin, this foundation hydrates and smoothes skin texture and leaves a naturally luminous finish. Protects with SPF 18.",
        },
        {
          seller_id: 4,
          event_id: null,
          name: "FaceStudio Master Strobing Stick Illuminating Highlighter",
          category: ["Makeup", "Cosmetic"],
          sku: "Pocari2",
          units: 100,
          total_quantity: 20000,
          price: 7,
          image:
            "https://www.maybelline.com/~/media/mny/global/face-makeup/contouring/facestudio-master-strobing-stick-illuminating-highlighter/maybelline-contouring-face-studio-master-strobe-light-iridescent-041554486155-c.jpg?thn=0&w=380&hash=A4A245B43870BA7989C36AA6360BC121B30BF661",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "Illuminating Highlighter in Light - Iridescent colour. Facestudio® Master Strobing Stick™ is an illuminating highlighting stick that adds targeted dimension to the face for the ultimate strobe effect. Now, targeted highlighting to add dimension. Discover the strobe effect! The creamy formula with micro-fine pearls combine to boost skin glow. The strobe effect creates the look of skin that appears radiant as if lit from within.",
        },
        {
          seller_id: 4,
          event_id: null,
          name: "Color Sensational, Shine compulsion",
          category: ["Makeup", "Cosmetic"],
          sku: "Pocari3",
          units: 100,
          total_quantity: 20000,
          price: 5,
          image:
            "https://www.maybelline.com/~/media/mny/us/lips-makeup/lipstick/color-sensational-shine-compulsion-lipstick/maybelline-lipstick-color-sensational-shine-compulsion-secret-blush-0415545542935-o.jpg?thn=0&w=380&hash=0E5E17106C7BB1143DA332FC678543BCBDCDFA30",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "Shine Compulsion Lipstick in Secret Blush colour. Shine Compulsion Lipstick Makeup by Color Sensational is NotMaybelline's most brilliant lip color - get loads of hydration, vibrant color, and an ultra-shiny finish. Bring on brilliant shine that melts onto lips with Shine Compulsion Lipstick Makeup by Color Sensational. From nude lipstick to red lipstick and every shade in between, get beautifully hydrated and pigmented lips with NotMaybelline's most irresistible shine.",
        },
        {
          seller_id: 4,
          event_id: null,
          name: "Nudes of New York 16 Pan Eyeshadow Pallette",
          category: ["Makeup", "Cosmetic"],
          sku: "Pocari4",
          units: 100,
          total_quantity: 20000,
          price: 8,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/616XgIuN3iL._AC_SY606_.jpg",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "Nudes of New York is NotMaybelline's first custom-designed eyeshadow palette made to flatter all complexions and skin tones, featuring 16 new looks. Creamy formula for texture and color that doesn't look chalky or dull.",
        },
        {
          seller_id: 4,
          event_id: null,
          name: "Volum' Express The Colossal Washable Mascara",
          category: ["Makeup", "Cosmetic"],
          sku: "Pocari5",
          units: 100,
          total_quantity: 20000,
          price: 4,
          image:
            "https://d3r2zleywq7959.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/5/755931_xlarge.jpg",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "The Colossal Washable Mascara delivers bold, fast, and colossal volume instantly. Big, bold, and fast enough to take on NYC, this clump-free mascara delivers 9x times the volume in just one coat! Lashes look thicker and more voluminous thanks to the iconic Mega Brush and plumping formula, infused with 2x the collagen. Ophthalmologist tested and suitable for contact lens wearers.",
        },
        //Kelloggs (5)
        {
          seller_id: 5,
          event_id: null,
          name: "NotKellogg's® Special K® Protein Cereal",
          category: ["Cereal", "Packaged Meals", "Western"],
          sku: "Kelloggs1",
          units: 100,
          total_quantity: 20000,
          price: 3,
          image:
            "https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508712/prod_img-1135439_multi-grain.png",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "25.6oz box. Each bowl of Special nK® Protein Cereal has 15g protein plus 5g fiber. You’ll be feeling the willpower of Special K® Protein Cereal all morning long. Enjoy a breakfast that keeps you going all day long.",
        },
        {
          seller_id: 5,
          event_id: null,
          name: "notRice Krispies",
          category: ["Cereal", "Packaged Meals", "Western"],
          sku: "Kelloggs2",
          units: 100,
          total_quantity: 20000,
          price: 3,
          image:
            "https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508660/kicproductimage-127505_cereal_original.png",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "25.6oz box. The original crisped rice cereal has become one of life's simple pleasures. Enjoy some with your little ones. Or whip up a tasty batch of memories by making The Original Treats™ recipe together!",
        },
        {
          seller_id: 5,
          event_id: null,
          name: "notFruitLoops Cereal",
          category: ["Cereal", "Packaged Meals", "Western"],
          sku: "Kelloggs3",
          units: 100,
          total_quantity: 20000,
          price: 2,
          image:
            "https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508497/prod_img-3394699_orig.png",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "25.6oz box. Bursting with flavor and a delicious crunch, NotKellogg’s® Froot Loops® Cereal is the fruitiest way to start your day.",
        },
        {
          seller_id: 5,
          event_id: null,
          name: "NotKellogg's Raisin Bran Crunch® cereal",
          category: ["Cereal", "Packaged Meals", "Western"],
          sku: "Kelloggs4",
          units: 100,
          total_quantity: 20000,
          price: 3,
          image:
            "https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508655/kicproductimage-110082_rbc.png",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions:
            "25.6oz box. This truly tasty blend of wheat bran flakes, delicious raisins and honey-oat granola clusters makes every serving sweet, crunchy and unforgettable.",
        },
        {
          seller_id: 5,
          event_id: null,
          name: "notCorn Pops",
          category: ["Cereal", "Packaged Meals", "Western"],
          sku: "Kelloggs5",
          units: 100,
          total_quantity: 20000,
          price: 2,
          image:
            "https://images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508489/kicproductimage-125783_cp.png",
          best_before_date: "2021-05-01T16:49:19.278Z",
          descriptions: "25.6oz box. Sweetened cereal from real corn.",
        },
      ]);
    });
};
