const Products = [
  {
    err: 'Internal Server Error',
  },
  {
    id: 1,
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140',
    features: [
      {
        feature: 'Buttons',
        value: 'Brass',
      },
    ],
  },
  {
    id: 2,
    name: 'Bright Future Sunglasses',
    slogan: "You've got to wear shades",
    description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    category: 'Accessories',
    default_price: '69',
    features: [
      {
        feature: 'Lenses',
        value: 'Ultrasheen',
      },
      {
        feature: 'UV Protection',
        value: 'null',
      },
      {
        feature: 'Frames',
        value: 'LightCompose',
      },
    ],
  },
  {
    id: 3,
    name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    category: 'Pants',
    default_price: '40',
    features: [
      {
        feature: 'Fabric',
        value: '100% Cotton',
      },
      {
        feature: 'Cut',
        value: 'Skinny',
      },
    ],
  },
  {
    id: 4,
    name: "Slacker's Slacks",
    slogan: 'Comfortable for everything, or nothing',
    description: "I'll tell you how great they are after I nap for a bit.",
    category: 'Pants',
    default_price: '65',
    features: [
      {
        feature: 'Fabric',
        value: '99% Cotton 1% Elastic',
      },
      {
        feature: 'Cut',
        value: 'Loose',
      },
    ],
  },
  {
    id: 5,
    name: 'Heir Force Ones',
    slogan: 'A sneaker dynasty',
    description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    category: 'Kicks',
    default_price: '99',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber',
      },
      {
        feature: 'Material',
        value: 'FullControlSkin',
      },
      {
        feature: 'Mid-Sole',
        value: 'ControlSupport Arch Bridge',
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch',
      },
    ],
  },
  {
    id: 6,
    name: 'Pumped Up Kicks',
    slogan: 'Faster than a just about anything',
    description: 'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.',
    category: 'Kicks',
    default_price: '89',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber',
      },
      {
        feature: 'Material',
        value: 'FullControlSkin',
      },
      {
        feature: 'Mid-Sole',
        value: 'ControlSupport Arch Bridge',
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch',
      },
    ],
  },
  {
    id: 7,
    name: 'Blues Suede Shoes',
    slogan: '2019 Stanley Cup Limited Edition',
    description: 'Touch down in the land of the Delta Blues in the middle of the pouring rain',
    category: 'Dress Shoes',
    default_price: '120',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber',
      },
      {
        feature: 'Material',
        value: 'FullControlSkin',
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch',
      },
    ],
  },
  {
    id: 8,
    name: 'YEasy 350',
    slogan: 'Just jumped over jumpman',
    description: 'These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.',
    category: 'Kicks',
    default_price: '450',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber',
      },
      {
        feature: 'Material',
        value: 'FullControlSkin',
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch',
      },
    ],
  },
  {
    id: 9,
    name: 'Summer Shoes',
    slogan: 'A risky call in the spring or fall',
    description: 'Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.',
    category: 'Kicks',
    default_price: '59',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber',
      },
      {
        feature: 'Material',
        value: 'FullControlSkin',
      },
      {
        feature: 'Mid-Sole',
        value: 'ControlSupport Arch Bridge',
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch',
      },
    ],
  },
  {
    id: 10,
    name: 'Infinity Stone',
    slogan: 'Reality is often disappointing. That is, it was. Now, reality can be whatever I want.',
    description: 'The Infinity Stones are six immensely powerful stone-like objects tied to different aspects of the universe, created by the Cosmic Entities. Each of the stones possesses unique capabilities that have been enhanced and altered by various alien civilizations for millennia.',
    category: 'Accessories',
    default_price: '5000000',
    features: [],
  },
  {
    id: 11,
    name: 'Air Minis 250',
    slogan: 'Full court support',
    description: 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
    category: 'Basketball Shoes',
    default_price: '0',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber',
      },
      {
        feature: 'Material',
        value: 'FullControlSkin',
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch',
      },
    ],
  },
  {
    err: 'Internal Server Error',
  },
  {
    id: 13,
    name: 'Nicole Romper',
    slogan: 'Repudiandae quo esse enim dolores qui sed voluptatem.',
    description: 'Sed sit est et velit ut tempore nisi voluptatem. Qui ex laudantium voluptas porro. Eveniet sed quod illo. Sed numquam porro blanditiis. Illum aut nihil quo hic rerum dignissimos porro ut. Rem facere cupiditate.',
    category: 'Romper',
    default_price: '174',
    features: [
      {
        feature: 'Green Leaf Certified',
        value: 'null',
      },
      {
        feature: 'Satisfaction Guaranteed',
        value: 'null',
      },
    ],
  },
  {
    id: 14,
    name: 'Oma Backpack',
    slogan: 'Et hic quia adipisci et dolor aut non.',
    description: 'Temporibus dolores omnis pariatur eos consequatur. Cupiditate quaerat reprehenderit asperiores laborum inventore aspernatur blanditiis. Modi ipsum veritatis. Est dolorum et qui. Quis quia nobis iure.',
    category: 'Backpack',
    default_price: '233',
    features: [
      {
        feature: 'Green Leaf Certified',
        value: 'null',
      },
    ],
  },
  {
    id: 15,
    name: 'Dannie Sunglasses',
    slogan: 'Quia aut nostrum et sint ipsa sunt.',
    description: 'Velit sapiente magnam in totam ut nisi ut sed. Molestias odio officia sit incidunt. Temporibus sint accusantium rerum dolor officiis omnis omnis ipsa.',
    category: 'Sunglasses',
    default_price: '382',
    features: [
      {
        feature: 'Sustainably Sourced',
        value: 'null',
      },
      {
        feature: 'Material',
        value: 'Rubber Mesh',
      },
      {
        feature: 'Lifetime Guarantee',
        value: 'null',
      },
    ],
  },
  {
    id: 16,
    name: 'Georgianna Shorts',
    slogan: 'Ut voluptatem enim consequatur beatae non.',
    description: 'Dolores et ad sunt. Maxime voluptas quis illum. Illo aut repellat voluptas.',
    category: 'Shorts',
    default_price: '493',
    features: [
      {
        feature: 'Non-GMO',
        value: 'null',
      },
      {
        feature: 'Cut',
        value: 'Skinny',
      },
      {
        feature: 'Lens',
        value: 'Ultrasheen Basic',
      },
    ],
  },
  {
    id: 17,
    name: 'The Seamus Romper',
    slogan: 'Vero laboriosam animi vero est beatae rem similique.',
    description: 'Consequatur eos dicta ducimus earum est. A excepturi vel asperiores doloribus sit. Ullam odit sequi et molestiae. Voluptatibus odit iste sit repellat repellat similique nemo vitae.',
    category: 'Romper',
    default_price: '889',
    features: [
      {
        feature: 'Cut',
        value: 'Loose',
      },
      {
        feature: 'Sustainably Sourced',
        value: 'null',
      },
    ],
  },
  {
    id: 18,
    name: 'Halle Heels',
    slogan: 'Quasi a ut.',
    description: 'Minima quis facilis provident accusamus distinctio autem quia exercitationem. Quod eaque ut. Quia voluptate voluptatem incidunt amet enim. Facere autem minima qui praesentium repellat eligendi molestiae voluptatem quia. Dolores quia eos accusamus omnis illo.',
    category: 'Heels',
    default_price: '133',
    features: [
      {
        feature: 'Non-GMO',
        value: 'null',
      },
      {
        feature: 'Material',
        value: 'Rubber Mesh',
      },
    ],
  },
  {
    id: 19,
    name: 'Blanca Tank Top',
    slogan: 'Alias sequi id voluptatem optio vero quia occaecati accusantium vel.',
    description: 'Accusantium velit a dolorum quo eligendi eos deserunt. Repellat voluptatem porro. Inventore beatae recusandae nam dolorum. Ipsa in blanditiis eum est in sed dolorem consequatur. Asperiores atque in repellat laborum sunt dolorem.',
    category: 'Tank Top',
    default_price: '771',
    features: [
      {
        feature: 'Fabric',
        value: '100% Cotton',
      },
      {
        feature: 'Material',
        value: 'Control Support Bridge',
      },
      {
        feature: 'Fair Trade Certified',
        value: 'null',
      },
    ],
  },
  {
    id: 20,
    name: 'Lukas 1000 Hoodie',
    slogan: 'Accusamus debitis laborum et qui esse unde.',
    description: 'Voluptatem commodi pariatur laudantium. Et deleniti necessitatibus molestiae quasi sunt optio rerum. Est aperiam dolorem voluptas eaque accusantium quis neque dolores omnis. Numquam voluptas dolorem cum quo iste. Consequatur eum architecto molestias praesentium velit ut.',
    category: 'Hoodie',
    default_price: '258',
    features: [
      {
        feature: 'Fabric',
        value: 'FullControlSkin',
      },
      {
        feature: 'Frame',
        value: 'DuraResin',
      },
      {
        feature: 'Non-GMO',
        value: 'null',
      },
      {
        feature: 'Frame',
        value: 'AllLight Composition Resin',
      },
    ],
  },
];

export default Products;
