import {
  Brands,
  Breast,
  Clothes,
  development,
  Diapering,
  Ess,
  Feeding,
  Gear,
  Home,
  lunch_box,
  mini_art,
  mini_blocks,
  mini_kidd,
  mini_play,
  mini_wooden,
  Mommy,
  Nursery,
  Outdoor,
  Party,
  School,
  school_bag,
  Seats,
  Skincare,
  stationary,
  sub_baby_toy,
  test,
  test2,
  Toys,
  water_bottle,
} from "@/public/assets/sections";
import {
  blog_detail_1,
  blog_detail_2,
  blog_detail_3,
  blog_detail_4,
  blog_detail_5,
  blogImageTwo,
  blogmain,
  img1,
  img2,
  img3,
} from "../public/assets/blogs";
import {
  user,
  truck,
  heart,
  packet,
  basket,
  headset,
  full_star,
  half_star,
  cash_back,
  truck2,
  headset2,
  PayPal,
  stripe,
  GooglePay,
  ApplePay,
  Mastercard,
  employee,
  share,
  left_right_arrow,
  fav,
  Money,
  pools,
  inflatables,
  beach_toys,
  swimwear,
  pool_shoes,
  sun_protector,
} from "../public/assets/icons";
import {
  babychairs,
  breast,
  cribs,
  detail_image,
  detail_image_1,
  detail_image_2,
  detail_image_3,
  detail_image_4,
  diaper,
  fashion,
  feeding,
  gear,
  ios,
  ios2,
  mommy,
  new_arrivals,
  nursery,
  onis,
  p3,
  p4,
  p5,
  party,
  rockers,
  sale,
  school,
  seats,
  skincare,
  stollers,
  toy,
  uutdoor,
} from "../public/assets/products";
import {
  aed100,
  aed200,
  aed50,
  ages,
  gear2,
  booster,
  iso,
  reversible,
  toy_banner,
  toys,
  feeding2,
  outdoor,
  school_bag_2,
  lunch_box_2,
  water_botle_2,
  stationary_2,
  diapers,
  wipes,
  formula,
  skin_care,
  boys_banners,
  girls_banner,
  activity,
  kitchen,
  rc_toys,
  blocks,
  doll_house,
  stem_toys,
  ban_desk_1,
  ban_mob_1,
  ban_desk_2,
  ban_mob_2,
  ban_desk_3,
  ban_mob_3,
  ban_desk_4,
  ban_mob_4,
  ban_desk_5,
  ban_mob_5,
  ban_desk_6,
  ban_mob_6,
} from "@/public/assets/banner";

// nav
export const userMenu = [user, basket, heart];
// categoryData.js
export const categories = [
  {
    id: 1,
    name: "gear",
    image: gear,
  },
  {
    id: 2,

    name: "Nursery",
    image: nursery,
  },
  {
    id: 3,
    name: "Feeding",
    image: feeding,
  },
  {
    id: 4,

    name: "Diapering",
    image: diaper,
  },
  {
    id: 5,

    name: "Toys",
    image: toy,
  },
  {
    id: 6,
    name: "Skincare",
    image: skincare,
  },
  {
    id: 7,
    name: "Outdoor",
    image: uutdoor,
  },
  {
    id: 8,
    name: "School",
    image: school,
  },
  {
    id: 9,
    name: "Mommy",
    image: mommy,
  },
  {
    id: 10,
    name: "Party",
    image: party,
  },
  {
    id: 11,

    name: "Fashion",
    image: fashion,
  },
  {
    id: 12,

    name: "SALE",
    image: sale,
  },
];
// sections
export const schoolSection = [school_bag, water_bottle, stationary, lunch_box];
export const travelSection = [reversible, booster, iso, ages];
export const clearanceSection = [toys, gear2, feeding2, outdoor];
export const babySection = [diapers, wipes, formula, skin_care];
export const summerSection = [
  pools,
  inflatables,
  beach_toys,
  swimwear,
  pool_shoes,
  sun_protector,
];
export const firstDaySection = [
  school_bag_2,
  lunch_box_2,
  water_botle_2,
  stationary_2,
];
export const dualSectionBannersBoyGirls = [boys_banners, girls_banner];
export const dualCateSection = [
  activity,
  kitchen,
  rc_toys,
  blocks,
  doll_house,
  stem_toys,
];
export const categoriesL2 = [
  {
    name: "New Arrivals",
    image: new_arrivals,
  },
  {
    name: "Strollers",
    image: stollers,
  },
  {
    name: "Car Seats",
    image: seats,
  },
  {
    name: "Onesies",
    image: onis,
  },
  {
    name: "Breast Pumps",
    image: breast,
  },
  {
    name: "Cribs",
    image: cribs,
  },
  {
    name: "Rockers",
    image: rockers,
  },
  {
    name: "High Chairs",
    image: babychairs,
  },
];
// paths
export const breadcrumbPaths = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "Evenflo EveryStage LX All-In-One Car Seat", link: "#" },
];
export const breadcrumbPathsBlog = [
  { name: "Home", link: "/" },
  { name: "How to choose the best baby swing?", link: "#" },
];
// product data
export const productData = {
  id: 1,
  name: "Ubeybi Shopping Trolley & High Chair Hygienic Cover - Black",
  brand: "Kidkraft",
  price: 165,
  originalPrice: 199,
  discount: "25% OFF",
  coupon: "NEW15",
  ratings: [
    {
      id: 1,
      rating: 5,
      count: 200,
      icon: full_star,
    },
    {
      id: 2,
      rating: 4,
      count: 150,
      icon: full_star,
    },
    {
      id: 3,
      rating: 3,
      count: 100,
      icon: full_star,
    },
    {
      id: 4,
      rating: 2,
      count: 50,
      icon: full_star,
    },
    {
      id: 5,
      rating: 1,
      count: 20,
      icon: half_star,
    },
  ],
  deliveryService: [
    {
      id: 1,
      icon: truck,
      title: "Free Shipping",
    },
    {
      id: 2,
      icon: cash_back,
      title: "2x Cashback",
    },
    {
      id: 3,
      icon: headset,
      title: "24/7 Support",
    },
    {
      id: 4,
      icon: packet,
      title: "Cash Delivery",
    },
  ],
  shareProduct: [share, left_right_arrow, fav],
  reviews: 80,
  image: detail_image,
  sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
  images: [detail_image_1, detail_image_2, detail_image_3, detail_image_4],
  highlights: [
    "Recommended Age: 0 - 3 years",
    "Returns: Eligible for refund within 7 days",
    "Type: Car Seat",
    "Color: Black",
    "Dimensions: 80cm x 50cm x 5cm",
    "Weight: 9.3kg",
    "SKU: 103297",
  ],
  features: [
    "Side impact protection for the head",
    "Anatomical head hugger with back support",
    "8 points belt",
    "Padded shoulder straps and crotch strap",
    "Practical height adjustment mechanism",
    "Side display for correct use",
    "Headrest adjustable in 7 heights",
  ],
  specifications:
    "Scudo is the innovative car seat by Cam of the Group 0/1/2/3 that follows the growth of your child from birth...",
};
export const productsLIST1 = [
  {
    id: 1,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: ios,
    price: 10529,
    oldPrice: 10625,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 2,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 22339,
    oldPrice: 5233,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 3,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: p3,
    price: 63234,
    oldPrice: 7233,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 4,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: ios2,
    price: 4735,
    oldPrice: 6030,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 5,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 229,
    oldPrice: 523,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 6,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: p3,
    price: 3333,
    oldPrice: 7323,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 7,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: p4,
    price: 47325,
    oldPrice: 6002,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 8,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 22329,
    oldPrice: 3223,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 9,
    title: "Ching Ching - Smart Coupe - Green ext Generation Infa",
    image: p3,
    price: 63324,
    oldPrice: 723,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 10,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: p4,
    price: 47325,
    oldPrice: 60032,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 11,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: p5,
    price: 475,
    oldPrice: 600,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 12,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: ios,
    price: 43275,
    oldPrice: 60320,
    discount: "20% OFF",
    rating: 3.9,
  },

  {
    id: 13,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 22339,
    oldPrice: 5233,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 14,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: p3,
    price: 63234,
    oldPrice: 7233,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 15,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: p4,
    price: 4735,
    oldPrice: 6030,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 16,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 229,
    oldPrice: 523,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 17,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: p3,
    price: 3333,
    oldPrice: 7323,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 18,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: ios,
    price: 10529,
    oldPrice: 10625,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 19,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 22339,
    oldPrice: 5233,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 20,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: p3,
    price: 63234,
    oldPrice: 7233,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 21,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: p4,
    price: 4735,
    oldPrice: 6030,
    discount: "20% OFF",
    rating: 3.9,
  },
  {
    id: 22,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 229,
    oldPrice: 523,
    discount: "20% OFF",
    rating: 3.9,
  },
];
export const bannerData = [
  {
    id: 1,
    desktopImg: ban_desk_1,
    mobileImg: ban_mob_1,
    alt: "Banner 1 Description",
  },
  {
    id: 2,
    desktopImg: ban_desk_2,
    mobileImg: ban_mob_2,
    alt: "Banner 2 Description",
  },
  {
    id: 3,
    desktopImg: ban_desk_3,
    mobileImg: ban_mob_3,
    alt: "Banner 3 Description",
  },
  {
    id: 4,
    desktopImg: ban_desk_4,
    mobileImg: ban_mob_4,
    alt: "Banner 4 Description",
  },
  {
    id: 5,
    desktopImg: ban_desk_5,
    mobileImg: ban_mob_5,
    alt: "Banner 5 Description",
  },
  {
    id: 6,
    desktopImg: ban_desk_6,
    mobileImg: ban_mob_6,
    alt: "Banner 6 Description",
  },
];
export const categoryData = [
  {
    title: "Baby Toys",
    icon: sub_baby_toy,
    subcategories: ["Board Games & Puzzles", "Soft Toys", "Building Blocks"],
  },
  {
    title: "Toddler & kids toys",
    icon: mini_kidd,
    subcategories: [],
  },
  {
    title: "Building sets & blocks",
    icon: mini_blocks,
    subcategories: [],
  },
  {
    title: "Development toys",
    icon: development,
    subcategories: ["Board Games & Puzzles", "Soft Toys", "Building Blocks"],
  },
  {
    title: "Art & craft",
    icon: mini_art,
    subcategories: [],
  },
  {
    title: "Role play",
    icon: mini_play,
    subcategories: [],
  },
  {
    title: "Wooden toys",
    icon: mini_wooden,
    subcategories: [],
  },
];
// product card data
export const cardsData = [
  {
    id: 1,
    bgColor: "bg-[#DAF0DC]",
    rightContent: [
      { text: "CALL US TO RECEIVE YOUR PERSONALIZED DISCOUNT CODES" },
    ],
  },
  {
    id: 1,
    bgColor: "bg-pink-100",
    leftContent: { text: "2X", subtext: "Cashback", bold: true },
    rightContent: [
      { text: "Earn AED 5.50", className: "text-green-600 font-semibold" },
      { text: "Earn 2 Points for Every Dirham Spent" },
    ],
  },
  {
    id: 2,
    bgColor: "bg-gray-100",
    leftContent: { image: "/kwik.png" },
    rightContent: [
      {
        text: "Deliver to Abu Dhabi Media Co, Abu Dhabi",
        className: "text-green-600",
      },
      { text: "by Tomorrow, January 27", className: "font-bold" },
      { text: "When you order before 12 PM." },
    ],
  },
  {
    id: 3,
    bgColor: "bg-orange-100",
    leftContent: {
      text: "Price Match",
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
    rightContent: [
      { text: "Find a better price? We'll beat it by", className: "" },
      { text: "10%", className: "font-bold" },
      { text: "CONNECT ON", icon: "/whatsapp.png" },
    ],
  },
  {
    id: 4,
    bgColor: "bg-green-100",
    leftContent: { image: "/tabby.png" },
    rightContent: [{ text: "Split in 4 payments. No interest. No late fees." }],
  },
];
// rating
export const blogs = [
  {
    id: 1,
    category: "High Chair",
    date: "Jun 21, 2021",
    read_time: "5 min read",
    title: "What to look in a baby high chair?",
    description:
      "As a parent, finding the right babysitting chair to ensure your child will be safe and comfortable while caring for another individual can be daunting...",
    image: img1,
  },
  {
    id: 2,
    category: "Bassinets",
    date: "Jun 21, 2021",
    read_time: "8 min read",
    title: "How to find the best baby bassinets?",
    description:
      "As a parent, you want to ensure your baby is safe and comfortable. One of the most important things you need to buy is a good bassinet, as you...",
    image: img2,
  },
  {
    id: 3,
    category: "Baby Swings",
    date: "Jun 21, 2021",
    read_time: "4 min read",
    title: "How to choose the best baby swing?",
    description:
      "A baby swing is a magical device that will rock your little one to provide comfort like never before. With its soft and cozy seat, gentle rocking m...",
    image: img3,
  },
  {
    id: 4,
    category: "High Chair",
    date: "Jun 21, 2021",
    read_time: "9 min read",
    title: "Two little ones -",
    description:
      "Shopping for a twin stroller comes with double the choices, sizes, and options, however...",
    image: img1,
  },
  {
    id: 5,
    category: "High Chair",
    date: "Jun 21, 2021",
    read_time: "9 min read",
    title: "Two little ones -",
    description:
      "Shopping for a twin stroller comes with double the choices, sizes, and options, however...",
    image: img1,
  },
  {
    id: 6,
    category: "High Chair",
    date: "Jun 21, 2021",
    read_time: "9 min read",
    title: "Two little ones -",
    description:
      "Shopping for a twin stroller comes with double the choices, sizes, and options, however...",
    image: img1,
  },
  {
    id: 7,
    category: "High Chair",
    date: "Jun 21, 2021",
    read_time: "9 min read",
    title: "Two little ones -",
    description:
      "Shopping for a twin stroller comes with double the choices, sizes, and options, however...",
    image: img1,
  },
];
export const reviews = [
  {
    id: 1,
    review_count: 837,
    text: "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
    reviewer: {
      name: "Millon Zahino",
      field: "Behavioral Science",
      image: employee,
    },
  },
  {
    id: 2,
    review_count: 837,
    text: "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
    reviewer: {
      name: "Millon Zahino",
      field: "Behavioral Science",
      image: employee,
    },
  },
  {
    id: 3,
    review_count: 837,
    text: "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
    reviewer: {
      name: "Millon Zahino",
      field: "Behavioral Science",
      image: employee,
    },
  },
  {
    id: 4,
    review_count: 837,
    text: "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
    reviewer: {
      name: "Millon Zahino",
      field: "Behavioral Science",
      image: employee,
    },
  },
  {
    id: 5,
    review_count: 837,
    text: "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
    reviewer: {
      name: "Millon Zahino",
      field: "Behavioral Science",
      image: employee,
    },
  },
  {
    id: 6,
    review_count: 837,
    text: "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
    reviewer: {
      name: "Millon Zahino",
      field: "Behavioral Science",
      image: employee,
    },
  },
  {
    id: 7,
    review_count: 837,
    text: "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
    reviewer: {
      name: "Millon Zahino",
      field: "Behavioral Science",
      image: employee,
    },
  },
  {
    id: 8,
    review_count: 837,
    text: "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
    reviewer: {
      name: "Millon Zahino",
      field: "Behavioral Science",
      image: employee,
    },
  },
];
export const storeInfoServices = [
  {
    title: "Baby Store – New Mom and Baby Products online in UAE",
    describtion:
      "No more hopping from one baby shop in Dubai to other in search of best quality products for your little ones when Baby store is there for you. While shopping with us, rest assured to get the widest range of quality baby care products in an array of niches. We know how special is your little bundle of joy and to make sure that your loved one gets the products which are tested and reviewed. Though each and every moment with kids is special, but from pregnancy to the preschool, you have to be little more cautious and careful when it comes to essentials. Considering this mind, we have all that you need from tummy to toddler phase. No matter whether you are looking for feeding essentials, clothes, diapers, toys, skincare products, gear & safety products, pregnancy essentials, school essentials and even gifts, we have everything at just a click of a button.",
  },
  {
    title: "Online Shopping with Babystore.ae",
    describtion:
      "There is no dearth of online shopping sites when it comes to baby products. Selecting and choosing the right online store for kids shopping become even more important as it is related to your little ones. We at babystore.ae works on one simple philosophy- If we would use a product for our own baby then we stock it if we wouldn’t then we don’t! So while browsing hundreds of products on the site, you can leave all your worries at bay.  When you shop online with us, sit back and relax on your couch, search for the desired category or product, make an online payment and you are done. The product will be right there at your doorstep. So no more waiting for your spouse’s holiday or relying on your nanny to shop for your baby’s essential when it can be done right from the comfort zone of your home.",
  },
  {
    title: "Online Shopping for Kids made easy",
    describtion:
      "With a huge collection of products available online, selecting the right one is definitely a difficult task. To help you with the same, we have categorized products in simple categories like Feeding, Clothes, Diapers, Toys, and so on. So get your newborn baby shopping checklist ready and keep ticking the products as you add them to your cart at the site. It’s simple and yes fun of course!!! No matter whether you are pregnant for the first time or getting a sibling for your little one, you will get everything under one roof. And yes, we also have a wide range of organic products under our Go Green section.",
  },
  {
    title: "Best Offers And Deals When You Baby Shop Online",
    describtion: `In addition to comfort, huge collection of products and easy process, we at Babystore.ae want to make your shopping experience even more amazing and thus have special deals, offers, and sale from time to time. The offers are not only limited to our online baby shopping UAE but to salons, play areas, restaurants, and other baby shop Dubai.
    
    Birthdays are really special and we try to make them a little more special for one lucky kid every month where we gift them a voucher worth AED 200. It's just a token of love and wishes from the entire team at Babystore.ae.

    And yes, you can even earn points when you shop, refer, and review us.
    
    Babystore.ae as an online baby shopping UAE site ensures that you have funfilled, comfortable, and an enjoyable shopping experience.`,
  },
];
export const navigationsLinks = [
  {
    title: "Categories",
    links: [
      { name: "Feeding", url: "#" },
      { name: "Skincare", url: "#" },
      { name: "Nursery", url: "#" },
      { name: "Clothes", url: "#" },
      { name: "Diapers", url: "#" },
      { name: "Toys", url: "#" },
      { name: "gear & Safety", url: "#" },
      { name: "School", url: "#" },
      { name: "Mommy", url: "#" },
      { name: "Outdoor", url: "#" },
    ],
  },
  {
    title: "Contact",
    details: {
      address:
        "Babystore. c/o Edge Technical Solutions, 1706, Silver Tower, Marasi Dr, Business Bay, Dubai, United Arab Emirates",
      phone: "+212 929 9953",
      whatsapp: "+971 55 799 4258",
      emails: [
        { type: "info", email: "info@babystore.ae" },
        { type: "sales", email: "sales@babystore.ae" },
      ],
    },
  },
  {
    title: "Company Info",
    links: [
      { name: "About Us", url: "#" },
      { name: "Contact Us", url: "#" },
      { name: "Our Brands", url: "#" },
      { name: "Media & Press", url: "#" },
      { name: "Blogs", url: "#" },
    ],
  },
  {
    title: "Shipping & Policies",
    links: [
      { name: "Terms & Conditions", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Shipping Policy", url: "#" },
      { name: "Cancellation & Returns", url: "#" },
    ],
  },
];
export const featuresData = [
  { id: 1, icon: truck2, text: "Free Shipping" },
  { id: 2, icon: Money, text: "2x Cashback" },
  { id: 3, icon: headset2, text: "24/7 Support" },
];

// menu bar mob
export const categoryIconsOne = [
  { name: "Feeding", icon: Feeding },
  { name: "Skincare", icon: Skincare },
  { name: "Nursery", icon: Nursery },
  { name: "Clothes", icon: Clothes },
  { name: "Diapering", icon: Toys },
  { name: "Toys", icon: Diapering },
  // { name: "Toys", icon: Toys },
  { name: "Outdoor", icon: Outdoor },
  { name: "Gear", icon: Gear },
];
export const categoryIconsTwo = [
  { name: "School", icon: School },
  { name: "Mommy", icon: Mommy },
  { name: "Party", icon: Party },
  { name: "Home", icon: Home },
  { name: "Breast", icon: Breast },
  { name: "Seats", icon: Seats },
  { name: "Brands", icon: Brands },
  { name: "Essentials", icon: Ess },
];

// banners sections
export const toy_section = {
  banner: toy_banner,
  underPrice: [aed50, aed100, aed200],
};

// footer data
export const aboutUsData = {
  title: "babystore",
  tagline: "From Tummy to Toddler",
  description: `Babystore.ae is one of the biggest online store with mother and babv products. Having a tagline "From tummv to toddler", we carrv a large number of brands with various categories. Our range of International brands is of highest aualitv and best suited for babv and mommv. We provide free deliver all over UAE which includes Dubai. Abu Dhabi. Shariah. Aiman. RAK. Fuiairah and UAO. Our range includes evervthing a mom needs herself and her little one. from prenatal care to the toddler stage and bevond. We are the best Online Shonning Store. and we providing 50k+ Products.`,
};
export const paymentMethods = [
  { name: "PayPal", img: PayPal },
  { name: "Stripe", img: stripe },
  { name: "Google Pay", img: GooglePay },
  { name: "Apple Pay", img: ApplePay },
  { name: "Mastercard", img: Mastercard },
];
export const footerBottomLinks = [
  { name: "Promotion", url: "/promotion" },
  { name: "Contact", url: "/contact" },
  { name: "Frequently Asked Questions", url: "/faq" },
];

export const blogTags = [
  "ALL",
  "Clothing & Fashion",
  "Parenting Tips",
  "Nursery & Decor",
  "Skin & Bath",
  "Feeding & Nursing",
  "Baby Travel - Tips & Accessories",
  "Rideons & Bikes",
  "Parenting Tips",
  "Gears And Safety",
  "Toys",
  "Cribs & Bassinets",
  "Outdoor",
  "Christmas",
  "Decor",
  "Mommy",
  "Mommy Essentials",
  "Maternity Pillows",
  "Daily Hacks",
  "New Events",
  "Ramadan",
  "Prophet Stories",
  "Diapering",
];
export const babySwingCardsData = [
  {
    image: "/assets/baby-swing-1.jpg",
    date: "12 Mar, 2023",
    comments: 52,
    title: "How to choose the best baby swing?",
    description:
      "We've tested dozens of baby swings so you don’t have to. tested dozens of baby swings so you don’t have to.tested dozens of baby swings so you don’t have to.tested dozens of baby swings so you don’t have to.tested dozens of baby swings so you don’t have to.tested dozens of baby swings so you don’t have to. From smart Bluetooth-enabled models to simple manual ones, here are the top picks that balance comfort, safety, and ease of use for busy parents.",
    authorName: "Lionardo De Caprio",
    authorImage: "/assets/authors/samantha.jpg",
  },
  {
    image: "/assets/baby-swing-2.jpg",
    date: "24 Feb, 2023",
    comments: 136,
    title: "How to Choose the Right Baby Swing",
    description:
      "Not all baby swings are made equal. This guide helps you understand the different types, features to prioritize like recline settings and noise levels, and how to match the swing to your baby's age and temperament.",
    authorName: "Lionardo De Caprio",
    authorImage: "/assets/authors/lionardo.jpg",
  },
  {
    image: "/assets/baby-swing-3.jpg",
    date: "03 Jan, 2023",
    comments: 87,
    title: "Swing Safety Tips Every Parent Should Know",
    description:
      "Even the best swing isn't safe if not used properly. Learn about essential safety practices including harnessing, placement, swing timing, and why it's important never to leave your baby unattended.",
    authorName: "Emily Stone",
    authorImage: "/assets/authors/emily.jpg",
  },
  {
    image: "/assets/baby-swing-4.jpg",
    date: "18 Dec, 2022",
    comments: 64,
    title: "Best Budget Baby Swings That Actually Work",
    description:
      "On a tight budget? We’ve reviewed swings under $100 that are still durable, reliable, and packed with useful features. Find out which ones are worth it and which to avoid.",
    authorName: "Michael Sun",
    authorImage: "/assets/authors/michael.jpg",
  },
  {
    image: "/assets/baby-swing-5.jpg",
    date: "06 Nov, 2022",
    comments: 29,
    title: "When to Start and Stop Using a Baby Swing",
    description:
      "Wondering when to introduce your baby to a swing? Or when it’s time to stop using it altogether? Our pediatric-backed advice breaks down age guidelines, developmental milestones, and weaning tips.",
    authorName: "Isabella Blue",
    authorImage: "/assets/authors/isabella.jpg",
  },
  {
    image: "/assets/baby-swing-6.jpg",
    date: "21 Oct, 2022",
    comments: 111,
    title: "Do Baby Swings Help with Sleep?",
    description:
      "Baby swings can be soothing—but are they safe for sleep? We explore what doctors recommend, how to use swings for short naps, and when it's time to transition to a crib for better sleep habits.",
    authorName: "James Holloway",
    authorImage: "/assets/authors/james.jpg",
  },
];

export const blogDetailsData = {
  date: "Lionardo de Caprio • Fri 24 Feb 2023",
  title: "How to choose the best baby swing?",
  description:
    "A baby swing is a magical device that will rock your little one to provide comfort like never before. With its soft and cozy seat, gentle rocking motion, and fun toy bar, your baby will be cradled in comfort.",
  tags: ["Outdoor", "Online", "Kid", "Baby Products"],
  blogImage: blogmain,
  blogDescription:
    "A baby swing is a magical device that will rock your little one to provide comfort like never before. With its soft and cozy seat, gentle rocking motion, and fun toy bar, your baby will be cradled in comfort. Plus, some swings come equipped with music, vibration, and adjustable speeds to personalize the experience. The best part? This solution allows you to take a much-needed break without holding your baby the entire time. It is designed for babies 4 months and younger, and a baby swing is essential in every parent's toolkit.",
  blogImageTwo: blogImageTwo,
  sectionOne: {
    title: "How you should be choosin the best for your baby?",
    description:
      "Choosing the right baby can be a lifesaver for busy parents! With so many options available, it can be difficult to find the one that will perfectly fit your lifestyle and baby comfort. To make your life easier, here are some key factors to consider when choosing the best baby swing for your needs.",
    sectionItems: [
      {
        title: "Padded Seats:",
        image: blog_detail_1,
        description:
          " Cozy and plush, the padded seats of the baby swing provide the ultimate comfort for your little one. Whether they’re playing or napping, the softness of the seats ensures that they can sit and play for hours on end without any discomfort. So let your baby have a good time while you can have peace of mind that they’re safe and comfortable in the baby swing.",
      },
      {
        title: "Multiple Recline Positions::",
        image: blog_detail_2,
        description:
          "A baby swing with multiple recline positions will allow you to adjust the angle of the seat to suit your baby’s needs. Whether they prefer a soothing back-and-forth motion, a gentle side-to-side sway, or a mesmerizing circular motion, this swing has it all! No more worrying about your baby getting fussy or uncomfortable in a one-position swing because now you have the flexibility to adjust the angle and motion to their ",
      },
      {
        title: "Padded Seats:",
        image: blog_detail_1,
        description:
          " Cozy and plush, the padded seats of the baby swing provide the ultimate comfort for your little one. Whether they’re playing or napping, the softness of the seats ensures that they can sit and play for hours on end without any discomfort. So let your baby have a good time while you can have peace of mind that they’re safe and comfortable in the baby swing.",
      },
      {
        title: "Multiple Recline Positions :",
        image: blog_detail_2,
        description:
          "  A baby swing with multiple recline positions will allow you to adjust the angle of the seat to suit your baby’s needs. Whether they prefer a soothing back-and-forth motion, a gentle side-to-side sway, or a mesmerizing circular motion, this swing has it all! No more worrying about your baby getting fussy or uncomfortable in a one-position swing because now you have the flexibility to adjust the angle and motion to their ",
      },
      {
        title: "Padded Seats:",
        image: blog_detail_1,
        description:
          " Cozy and plush, the padded seats of the baby swing provide the ultimate comfort for your little one. Whether they’re playing or napping, the softness of the seats ensures that they can sit and play for hours on end without any discomfort. So let your baby have a good time while you can have peace of mind that they’re safe and comfortable in the baby swing.",
      },
      {
        title: "Multiple Recline Positions :",
        image: blog_detail_2,
        description:
          "  A baby swing with multiple recline positions will allow you to adjust the angle of the seat to suit your baby’s needs. Whether they prefer a soothing back-and-forth motion, a gentle side-to-side sway, or a mesmerizing circular motion, this swing has it all! No more worrying about your baby getting fussy or uncomfortable in a one-position swing because now you have the flexibility to adjust the angle and motion to their ",
      },
    ],
  },
  sectionTwo: {
    title: "Recommendation of Top-Rated Baby Swings:",
    description:
      "As for the top-rated baby swings in the UAE, there are a few that stand out.",

    sectionItems: [
      {
        title: "Ingenuity - Ingenuity Dream Comfort Cradling Swing – Grey",
        image: blog_detail_3,
        description:
          "If you're looking for a baby swing that's both stylish and functional, the Ingenuity Dream Comfort Cradling Swing is a great option. Although the swing has a 180-degree rotation, this swing allows for easy access to your baby from any angle. Plus, the included USB Power Adapter cord offers the option for smartphone connectivity, allowing you to control the swing's settings and play soothing music for your baby right from your phone. And when not in use, the swing's foldable design makes for easy storage and portability.",
      },
      {
        title: "Brevi - Portable Swing Brilly - Love Natural",
        image: blog_detail_4,
        description:
          "This versatile swing works on a battery or power adapter, providing you with the flexibility to take it wherever you go. With 12 soothing melodies and 3 natural sounds, your baby will be lulled into a peaceful slumber in no time. The best part? It folds easily and quickly, so you can lean back and relax while your little one plays.",
      },
      {
        title: "4Moms MamaRoo 4.0 Cool Mesh - Baby Bouncer/Rocker And Swing",
        image: blog_detail_5,
        description:
          "This innovative baby seat is designed to replicate parents' natural motions to comfort their little ones. Featuring five different speeds and five unique motions, the MamaRoo 4.0 Cool Mesh can be customized to suit your baby's preferences. Moreover, it provides a breathable, comfortable seating surface for your baby, while the adjustable recline feature allows you to find the perfect position for your little one.",
      },
    ],
  },
  conclusionTitle: "Conclusion",
  conclusionDescription:
    "From traditional swings to modern, high-tech options, a wide selection suits your needs and preferences. Plus, with the convenience of online shopping, you can browse and compare different models and brands from the comfort of your home. You can have the perfect swing delivered right to your doorstep with just a few clicks. So, don't wait any longer! Order a baby swing online today and give your little one the ultimate comfort and relaxation. Your little one will love it!",
};
