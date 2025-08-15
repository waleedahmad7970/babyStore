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
  cash_back,
  truck2,
  headset2,
  PayPal,
  stripe,
  GooglePay,
  ApplePay,
  Mastercard,
  employee,
  Money,
} from "../public/assets/icons";
import {
  babychairs,
  breast,
  cribs,
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
import { aed100, aed200, aed50, toy_banner } from "@/public/assets/banner";

// top categhry
export const topCategoriesDumy = [
  { name: "breast", image: breast },
  { name: "babychairs", image: babychairs },
  { name: "cribs", image: cribs },
  { name: "onis", image: onis },
  { name: "new arrivals", image: new_arrivals },
  { name: "rockers", image: rockers },
  { name: "seats", image: seats },
  { name: "stollers", image: stollers },
];

// nav
export const userMenu = [user, heart, basket];
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

export const deliveryService = [
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
];

export const productsLIST1 = [
  {
    id: 1,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: ios,
    price: 10529,
    oldPrice: 10625,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 2,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 22339,
    oldPrice: 5233,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 3,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: p3,
    price: 63234,
    oldPrice: 7233,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 4,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: ios2,
    price: 4735,
    oldPrice: 6030,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 5,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 229,
    oldPrice: 523,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 6,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: p3,
    price: 3333,
    oldPrice: 7323,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 7,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: p4,
    price: 47325,
    oldPrice: 6002,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 8,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 22329,
    oldPrice: 3223,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 9,
    title: "Ching Ching - Smart Coupe - Green ext Generation Infa",
    image: p3,
    price: 63324,
    oldPrice: 723,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 10,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: p4,
    price: 47325,
    oldPrice: 60032,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 11,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: p5,
    price: 475,
    oldPrice: 600,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 12,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: ios,
    price: 43275,
    oldPrice: 60320,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 13,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 22339,
    oldPrice: 5233,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 14,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: p3,
    price: 63234,
    oldPrice: 7233,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 15,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: p4,
    price: 4735,
    oldPrice: 6030,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 16,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 229,
    oldPrice: 523,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 17,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: p3,
    price: 3333,
    oldPrice: 7323,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 18,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: ios,
    price: 10529,
    oldPrice: 10625,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 19,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 22339,
    oldPrice: 5233,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 20,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: p3,
    price: 63234,
    oldPrice: 7233,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 21,
    title: "Lindale Outdoor Wooden Swing & Slide Playset",
    image: p4,
    price: 4735,
    oldPrice: 6030,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
  },
  {
    id: 22,
    title: "Aptamil - Advance 1 Next Generation Infant",
    image: ios2,
    price: 229,
    oldPrice: 523,
    discount: "20% OFF",
    rating: 3.9,
    link: "/product",
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
      { name: "Feeding", url: "feeding" },
      { name: "Skincare", url: "skincare" },
      { name: "Nursery", url: "nursery" },
      { name: "Clothes", url: "clothes" },
      { name: "Diapers", url: "diapers" },
      { name: "Toys", url: "toys" },
      { name: "gear & Safety", url: "gears-safety" },
      { name: "School", url: "school" },
      { name: "Mommy", url: "mommy" },
      { name: "Outdoor", url: "outdoor" },
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
      { name: "About Us", url: "/about" },
      { name: "Contact Us", url: "/contact" },
      { name: "Our Brands", url: "our-brands" },
      { name: "Media & Press", url: "media-press" },
      { name: "Blogs", url: "blog" },
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

// catgory sections

export const sections: any[] = [
  {
    title: "Bath",
    image: "baby-food.png",

    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Skin & Hair & Body",
    image: "baby-food.png",

    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Skin & Hair & Body",
    image: "baby-food.png",

    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Skin & Hair & Body",
    image: "baby-food.png",

    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Bath",
    image: "baby-food.png",

    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Bath",
    image: "baby-food.png",

    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Skin & Hair & Body",
    image: "baby-food.png",

    items: [
      "Lotions & Creams",
      "Balms",
      "Powders & Sprays",
      "Baby Oil",
      "Sun Care",
      "Hair Care",
      "Nail Care",
      "Travel Kits",
    ],
  },
  {
    title: "Bath",
    image: "baby-food.png",

    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
  {
    title: "Bath",
    image: "baby-food.png",

    items: [
      "Towels & Accessories",
      "Bath Tubs",
      "Shampoos & Conditioners",
      "Soaps & Body Wash",
      "Oral Care",
      "Bath Accessories",
    ],
  },
];
export const sections2 = [
  {
    title: "Baby Strollers & Prams",
    id: 15,
    image: "baby-food.png",

    items: [
      { id: 78, name: "Strollers", image: "1676839334.jpg" },
      { id: 79, name: "Double Strollers", image: "1676839365.jpg" },
      { id: 80, name: "Travel Systems", image: "1676839412.jpg" },
      { id: 81, name: "Carry Cots & Footmuffs", image: "1676839442.jpg" },
      { id: 82, name: "Stroller Accessories", image: "1676839473.jpg" },
      { id: 83, name: "Stroller Toys", image: "1676839503.jpg" },
    ],
  },
  {
    id: 16,
    image: "baby-food.png",

    title: "Car Seats & Boosters",
    items: [
      { id: 84, name: "Car Seats", image: "1676839690.jpg" },
      { id: 85, name: "Booster Seats", image: "1676839729.jpg" },
      { id: 86, name: "Car Seat Accessories", image: "1676839895.jpg" },
    ],
  },
  {
    id: 17,
    image: "baby-food.png",

    title: "Baby Gears",
    items: [
      { id: 87, name: "Bouncers & Rockers", image: "1676843163.jpg" },
      { id: 88, name: "Walkers", image: "1676843193.jpg" },
      { id: 89, name: "Baby Carriers", image: "1676843236.jpg" },
    ],
  },
  {
    id: 18,
    image: "baby-food.png",

    title: "Travel Essentials",
    items: [
      { id: 90, name: "Travel Bags - Suitcases", image: "1676843324.jpg" },
    ],
  },
  {
    id: 19,
    image: "baby-food.png",

    title: "Baby Safety Products",
    items: [
      { id: 92, name: "Baby Monitors", image: "1676843392.jpg" },
      { id: 93, name: "Child Safety Essentials", image: "1676843491.jpg" },
      { id: 96, name: "Medicine & First Aid", image: "1677842186.jpg" },
      { id: 97, name: "Health Accessories", image: "1677842212.jpg" },
      { id: 98, name: "Gates & Bed Rails", image: "1677842240.jpg" },
      { id: 99, name: "Bath Safety", image: "1677842274.jpg" },
      { id: 100, name: "Travel Safety", image: "1677842298.jpg" },
    ],
  },
];
export const nursingSections = [
  {
    title: "Baby Room Furniture & Decors",
    id: 8,
    image: "baby-food.png",
    items: [
      { id: 39, name: "Cribs & Bassinets", image: "1676675130.jpg" },
      { id: 40, name: "Mattress & Sheets", image: "1676675199.jpg" },
      { id: 41, name: "Sleeping Pods", image: "1676675223.jpg" },
      { id: 42, name: "Blankets & Bedding", image: "1676675261.jpg" },
      { id: 43, name: "Baby Furniture", image: "1676675291.jpg" },
      { id: 44, name: "Playpens", image: "1676675328.jpg" },
      { id: 45, name: "Nursery Centers", image: "1676675351.jpg" },
    ],
  },
  {
    title: "Kids Room Furniture",
    id: 9,
    image: "baby-food.png",

    items: [
      { id: 46, name: "Beds & Mattress", image: "1676675426.jpg" },
      { id: 47, name: "Blankets & Bedding", image: "1676675485.jpg" },
      { id: 48, name: "Kids Furniture", image: "1676675513.jpg" },
      { id: 49, name: "Storages & Organize", image: "1676675541.jpg" },
    ],
  },
  {
    title: "Room Decor & Accessories",
    id: 10,
    image: "baby-food.png",

    items: [
      { id: null, name: "Decor", image: null },
      { id: 50, name: "Lamps & Lighting", image: "1676675599.jpg" },
      { id: 51, name: "Rugs & Playmats", image: "1676675634.jpg" },
      { id: 52, name: "Wall Decor", image: "1676675690.jpg" },
      { id: 53, name: "Accessories", image: "1676675723.jpg" },
      { id: 54, name: "Canopy", image: "1676675739.jpg" },
    ],
  },
];
export const foodingSections = [
  {
    title: "Bottle Feeding",
    image: "bottle-feeding.png",
    id: 4,
    items: [
      { id: 16, name: "Bottles", image: "1676672759.jpg" },
      { id: 17, name: "Teats & Accessories", image: "1676672860.jpg" },
      { id: 18, name: "Warmers & Sterilizers", image: "1676672966.jpg" },
      { id: 19, name: "Milk Powder Dispenser", image: "1676673065.jpg" },
      { id: 20, name: "Bottle Cleaning", image: "1676673094.jpg" },
      { id: 21, name: "Bottle Holders", image: "1676673133.jpg" },
      { id: null, name: "Pacifiers & Holders", image: null },
    ],
  },
  {
    id: 6,
    image: "baby-food.png",

    title: "Baby Food",
    items: [
      { id: 28, name: "Formula", image: "1676673833.jpg" },
      { id: 29, name: "Purees", image: "1676673860.jpg" },
      { id: 30, name: "Snacks", image: "1676673880.jpg" },
      { id: 31, name: "Cereals", image: "1676673905.jpg" },
      { id: 32, name: "Drinks", image: "1676674021.jpg" },
    ],
  },
  {
    id: 5,
    image: "meal-time-essentials.png",

    title: "Meal-Time Essentials",
    items: [
      { id: 22, name: "Bibs", image: "1676673387.jpg" },
      { id: 23, name: "Dishes & Utensils", image: "1676673518.jpg" },
      { id: 24, name: "Food Containers", image: "1676673632.jpg" },
      { id: 25, name: "Sippers & Cups", image: "1676673663.jpg" },
      { id: 1, name: "Food Processors", image: "1676673707.jpg" },
      { id: 27, name: "High Chairs & Boosters", image: "1676673792.jpg" },
    ],
  },
  {
    id: 7,
    image: "baby-food.png",

    title: "Nursing Care",
    items: [
      { id: 33, name: "Pillows & Supports", image: "1676674072.jpg" },
      { id: 34, name: "Breast Feeding Accessories", image: "1676674101.jpg" },
      { id: 35, name: "Breast Pumps", image: "1676674131.jpg" },
      { id: 36, name: "Nursing Scarves & Burpies", image: "1676674162.jpg" },
      { id: 37, name: "Changing Tables", image: "1684013226.jpg" },
      { id: 38, name: "Breast Milk Storage", image: "1676674285.jpg" },
    ],
  },
];
export const diaperingSections = [
  {
    title: "Diapers",
    id: 23,
    image: "baby-food.png",

    items: [
      { id: 115, name: "Disposable Diapers", image: "1677847270.jpg" },
      { id: 116, name: "Re-usable Diapers", image: "1677868409.jpg" },
      { id: 117, name: "Diaper Liners & Inserts", image: "1677868441.jpg" },
      { id: 118, name: "Diaper Rash Creams", image: "1677868471.jpg" },
      { id: 119, name: "Adult Diapers", image: "1677868504.jpg" },
    ],
  },
  {
    title: "Shop by Age",
    id: 24,
    image: "baby-food.png",

    items: [
      { id: 120, name: "Size 1 (Newborn)", image: "1677868552.jpg" },
      { id: 121, name: "Size 2 (Small)", image: "1677868583.jpg" },
      { id: 122, name: "Size 3 (Medium)", image: "1677868624.jpg" },
      { id: 123, name: "Size 4 (Large)", image: "1677868661.jpg" },
      { id: 124, name: "Size 5 (XL)", image: "1677868697.jpg" },
      { id: 125, name: "Size 6 (XXL)", image: "1677868733.jpg" },
    ],
  },
  {
    title: "Changing Diapers",
    id: 25,
    image: "baby-food.png",

    items: [
      { id: 126, name: "Diaper Changing", image: "1677868776.jpg" },
      { id: 126, name: "Changing Tables", image: "1677868776.jpg" },
      { id: 127, name: "Reusable Changing Mats", image: "1677868805.jpg" },
      { id: 128, name: "Disposable Changing Mats", image: "1677868835.jpg" },
      { id: 129, name: "Diaper Bags", image: "1677868864.jpg" },
      { id: 316, name: "Diaper Caddy", image: "1677868776.jpg" },
    ],
  },
  {
    title: "Shop by Brand",
    id: 26,
    image: "baby-food.png",

    items: [],
  },
  {
    title: "Wipes",
    id: 27,
    image: "baby-food.png",

    items: [
      { id: 137, name: "Disposable Wipes", image: "1677869881.jpg" },
      { id: 138, name: "Re-usable Wipes", image: "1677869968.jpg" },
      { id: 317, name: "Wipe Cases", image: "1677869968.jpg" },
    ],
  },
  {
    title: "Potty Training",
    id: 28,
    image: "baby-food.png",

    items: [
      { id: 139, name: "Potties", image: "1677869994.jpg" },
      { id: 140, name: "Toilet Seat Covers", image: "1677870039.jpg" },
      { id: 141, name: "Step Stools", image: "1677870065.jpg" },
    ],
  },
  {
    title: "Diaper Disposal",
    id: 29,
    image: "baby-food.png",

    items: [
      {
        id: 142,
        name: "Diaper Bins & Disposal Systems",
        image: "1677870106.jpg",
      },
      { id: 143, name: "Refills & Nappy bags", image: "1677870136.jpg" },
    ],
  },
];
export const toySections = [
  {
    id: 32,
    image: "baby-food.png",
    title: "Toddler & Kids Toys",

    items: [
      { id: 154, name: "Dolls & Accessories", image: "1677870136.jpg" },
      { id: 155, name: "Action Figures", image: "1677870136.jpg" },
      { id: 156, name: "Play Time", image: "1677870136.jpg" },
      { id: 157, name: "Tents & Teepees", image: "1677870136.jpg" },
      { id: 158, name: "Puppets", image: "1677870136.jpg" },
      { id: 159, name: "Soft Toys", image: "1677870136.jpg" },
      { id: 160, name: "Light & Musical Toys", image: "1677870136.jpg" },
      { id: 161, name: "Dollhouses & Accessories", image: "1677870136.jpg" },
      { id: 166, name: "Playtables", image: "1677870136.jpg" },
    ],
  },
  {
    id: 30,
    image: "baby-food.png",

    title: "Baby Toys",
    items: [
      { id: 144, name: "Rattles", image: "1677870136.jpg" },
      { id: 145, name: "Teethers", image: "1677870136.jpg" },
      { id: 146, name: "Playmats & Gym", image: "1677870136.jpg" },
      { id: 147, name: "Crib Toys", image: "1677870136.jpg" },
      { id: 148, name: "Light & Musical Toys", image: "1677870136.jpg" },
      { id: 149, name: "Jumpers & Swings", image: "1677870136.jpg" },
      { id: 150, name: "Activity Center", image: "1677870136.jpg" },
      { id: 151, name: "Bath Toys", image: "1677870136.jpg" },
      { id: 152, name: "Play Fence", image: "1677870136.jpg" },
      { id: 153, name: "Squeeze Toys", image: "1677870136.jpg" },
    ],
  },
  {
    id: 33,
    image: "baby-food.png",

    title: "Building Set and Blocks",
    items: [
      { id: 162, name: "Push-pull toys", image: "1677870136.jpg" },
      { id: 163, name: "Stacking & Sorting Toys", image: "1677870136.jpg" },
      { id: 164, name: "Guns & Action Toys", image: "1677870136.jpg" },
      { id: 165, name: "Vehicles", image: "1677870136.jpg" },
      { id: 166, name: "Playtables", image: "1677870136.jpg" },
    ],
  },
  {
    id: 35,
    image: "baby-food.png",

    title: "Art & Craft",
    items: [
      { id: 176, name: "Doughs, Slimes & Sand", image: "1677870136.jpg" },
    ],
  },

  {
    id: 34,

    title: "Development Toys",
    image: "baby-food.png",

    items: [
      { id: 169, name: "Educational Toys", image: "1677870136.jpg" },
      { id: 171, name: "Activity Toys", image: "1677870136.jpg" },
      { id: 172, name: "Reward Charts", image: "1677870136.jpg" },
      { id: 173, name: "Science Games", image: "1677870136.jpg" },
      { id: 174, name: "Montessori & Early learning", image: "1677870136.jpg" },
      { id: 175, name: "Cause & Effect Toys", image: "1677870136.jpg" },
    ],
  },
  {
    id: 36,
    image: "baby-food.png",

    title: "Role Play",
    items: [
      { id: 177, name: "Costumes", image: "1677870136.jpg" },
      { id: 178, name: "Pretend Toys", image: "1677870136.jpg" },
      { id: 179, name: "Fashion & Beauty", image: "1677870136.jpg" },
      { id: 180, name: "Kitchen Toys", image: "1677870136.jpg" },
      { id: 181, name: "Work Bench Toys", image: "1677870136.jpg" },
    ],
  },
];
export const skincareSections = [
  {
    title: "Bath",
    id: 2,
    image: "bath.png",
    items: [
      { id: 2, name: "Towels & Accessories", image: "1671907733.jpg" },
      { id: 3, name: "Bath Tubs", image: "1671907780.jpg" },
      { id: 4, name: "Shampoos & Conditioners", image: "1671907820.jpg" },
      { id: 5, name: "Soaps & Body Wash", image: "1671907882.jpg" },
      { id: 6, name: "Oral Care", image: "1671907918.jpg" },
      { id: 7, name: "Bath Accessories", image: "1671907947.jpg" },
      { id: 182, name: "Sponges & Bath Mittens", image: "1684008969.jpg" },
    ],
  },
  {
    title: "Baby Grooming & Hygiene",
    id: 3,
    image: "skin-hair-body.png",

    items: [
      { id: 303, name: "Skin & Hair & Body", image: "1676673707.jpg" },
      { id: 8, name: "Lotions & Creams", image: "1671908075.jpg" },
      { id: 9, name: "Balms", image: "1671908106.jpg" },
      { id: 10, name: "Powders & Sprays", image: "1671908142.jpg" },
      { id: 11, name: "Baby Oil", image: "1671908171.jpg" },
      { id: 12, name: "Sun Care", image: "1671908209.jpg" },
      { id: 15, name: "Travel Kits", image: "1671908301.jpg" },
      { id: 183, name: "Eczema Care", image: "1684009016.jpg" },
    ],
  },
];
export const outdoorSections = [
  {
    title: "Electric Rideons",
    image: "baby-food.png",

    id: 60,
    items: [
      {
        id: 318,
        name: "Electric Jeeps, Trucks & Buggies",
        image: "1676839037.jpg",
      },
      { id: 331, name: "Electric Quad Bikes", image: "1676839037.jpg" },
      { id: 332, name: "Electric Cars", image: "1676839037.jpg" },
      { id: 333, name: "Electric Motor Bikes", image: "1676839037.jpg" },
      { id: 334, name: "Go Karts & Drifters", image: "1676839037.jpg" },
    ],
  },
  {
    id: 61,
    image: "baby-food.png",

    title: "Manual Rideons",
    items: [
      { id: 335, name: "Manual Ride-Ons", image: "1676839037.jpg" },
      { id: 336, name: "Push Cars & Wagons", image: "1676839037.jpg" },
    ],
  },
  {
    id: 62,
    image: "baby-food.png",

    title: "Bikes",
    items: [
      { id: 319, name: "Balance Bikes", image: "1676839037.jpg" },
      { id: 318, name: "Bicycles", image: "1676839037.jpg" },
      { id: 320, name: "Helmets", image: "1676839037.jpg" },
      { id: 321, name: "Protective Gear", image: "1676839037.jpg" },
      { id: 322, name: "Accessories", image: "1676839037.jpg" },
    ],
  },
  {
    id: 63,
    image: "baby-food.png",

    title: "Trikes",
    items: [
      { id: 338, name: "Trikes", image: "Trikes.jpg1748253615.jpg" },
      { id: 323, name: "Tricycle", image: "1676839037.jpg" },
      { id: 324, name: "Stroller Trike", image: "1676839037.jpg" },
    ],
  },
  {
    id: 67,
    image: "baby-food.png",

    title: "Scooters",
    items: [
      { id: 339, name: "Manual Scooters", image: "1676839037.jpg" },
      { id: 325, name: "Electric Scooters", image: "1676839037.jpg" },
    ],
  },
  {
    id: 60,
    image: "baby-food.png",

    title: "Backyard Playsets",
    items: [
      { id: 65, name: "Slides, Swings & Seesaws", image: "1676676661.jpg" },
      { id: 66, name: "Trampolines", image: "1676676686.jpg" },
      { id: 67, name: "Playhouses & Tents", image: "1676676714.jpg" },
      { id: 68, name: "Inflatables", image: "1676676749.jpg" },
    ],
  },
  {
    id: 64,
    image: "baby-food.png",

    title: "Water & Beach Play",
    items: [
      { id: 69, name: "Sandboxes & Water Playtables", image: "1676676815.jpg" },
      { id: 73, name: "Swimming Pools", image: "1676838859.jpg" },
      { id: 75, name: "Beach & Water Toys", image: "1676838923.jpg" },
      { id: 74, name: "Floats & Swim Rings", image: "1676838890.jpg" },
      { id: 77, name: "Swimming Aids", image: "1676839037.jpg" },
    ],
  },
  {
    id: 65,
    image: "baby-food.png",

    title: "Skating",
    items: [
      { id: 340, name: "Roller Skates", image: "1676839037.jpg" },
      { id: 341, name: "Skate Boards", image: "1676839037.jpg" },
    ],
  },
  {
    id: 66,
    image: "baby-food.png",

    title: "Outdoor Toys",
    items: [
      { id: 327, name: "Outdoor Games", image: "1676839037.jpg" },
      { id: 328, name: "Sports Toys", image: "1676839037.jpg" },
      { id: 329, name: "Balls", image: "1676839037.jpg" },
      { id: 330, name: "Outdoor Play Equipments", image: "1676839037.jpg" },
    ],
  },
];
export const schoolEssentialsSections = [
  {
    title: "School Supplies",
    id: 20,
    image: "baby-food.png",

    items: [
      { id: 101, name: "School Bags & Backpacks", image: "1677843185.jpg" },
      { id: 102, name: "Water Bottles", image: "1677843221.jpg" },
      { id: 103, name: "Lunch Box", image: "1677843306.jpg" },
      { id: 104, name: "Lunch Bags", image: "1677843371.jpg" },
      { id: 106, name: "Drawing & Coloring", image: "1677843441.jpg" },
      { id: 107, name: "Craft Activity", image: "1677843470.jpg" },
      { id: 108, name: "Art Table", image: "1677843517.jpg" },
    ],
  },
  {
    title: "Books",
    id: 21,
    image: "baby-food.png",

    items: [
      { id: 109, name: "Activity Books", image: "1677843655.jpg" },
      { id: 110, name: "Reading Books", image: "1677843849.jpg" },
      { id: 111, name: "Sticker Books", image: "1677843900.jpg" },
      { id: 112, name: "Learning Guides", image: "1677843977.jpg" },
      { id: 113, name: "Writing Books", image: "1677844006.jpg" },
      { id: 114, name: "Arabic Books", image: "1677844031.jpg" },
    ],
  },
];
export const maternitySections = [
  {
    title: "Maternity Clothes",
    id: 38,
    image: "baby-food.png",

    items: [
      { id: 184, name: "Maternity Dress", image: "1676673707.jpg" },
      { id: 185, name: "Maternity Tops", image: "1676673707.jpg" },
      { id: 186, name: "Maternity Bottom Wear", image: "1676673707.jpg" },
      { id: 187, name: "Maternity Lingerie", image: "1676673707.jpg" },
      { id: 188, name: "Maternity Swimwear", image: "1676673707.jpg" },
      { id: 191, name: "Shapewear", image: "1676673707.jpg" },
    ],
  },
  {
    title: "Mommy Skincare",
    id: 39,
    image: "baby-food.png",

    items: [
      { id: 192, name: "Nipple Creams", image: "1676673707.jpg" },
      { id: 193, name: "Stretch Mark Creams", image: "1676673707.jpg" },
    ],
  },
  {
    title: "Mommy Bathcare & Hygiene",
    id: 40,
    image: "baby-food.png",

    items: [
      { id: 199, name: "Shampoos & Conditioners", image: "1676673707.jpg" },
      { id: 200, name: "Body Wash & Shower Gel", image: "1676673707.jpg" },
      { id: 202, name: "Oral Care", image: "1676673707.jpg" },
      { id: 203, name: "Scrubs", image: "1676673707.jpg" },
      { id: 204, name: "Soaps", image: "1676673707.jpg" },
      { id: 205, name: "Face Wash & Masks", image: "1676673707.jpg" },
    ],
  },
  {
    title: "Mommy Essentials",
    id: 41,
    image: "baby-food.png",

    items: [
      { id: 208, name: "Maternity Belts & Pillows", image: "1676673707.jpg" },
    ],
  },
];
export const partySections = [
  {
    title: "Special Occasions",
    id: 43,
    image: "baby-food.png",

    items: [
      { id: 219, name: "Christmas", image: "1676673707.jpg" },
      { id: 220, name: "Halloween", image: "1676673707.jpg" },
      { id: 221, name: "Ramadan", image: "1676673707.jpg" },
      { id: 222, name: "Mother's Day", image: "1676673707.jpg" },
      { id: 223, name: "Valentines Day", image: "1676673707.jpg" },
    ],
  },
  {
    title: "Decorations",
    id: 45,
    image: "baby-food.png",

    items: [
      { id: 224, name: "Balloons & Ribbons", image: "1676673707.jpg" },
      { id: 225, name: "Poppers", image: "1676673707.jpg" },
      { id: 226, name: "Confetti", image: "1676673707.jpg" },
      { id: 227, name: "Table Top Decorations", image: "1676673707.jpg" },
      { id: 228, name: "Banners & Garlands", image: "1676673707.jpg" },
      { id: 229, name: "Buntings", image: "1676673707.jpg" },
      { id: 230, name: "Wall decorations", image: "1676673707.jpg" },
      { id: 231, name: "Party Decorations", image: "1676673707.jpg" },
    ],
  },
  {
    title: "Party Supplies",
    id: 45,
    image: "baby-food.png",

    items: [
      { id: 232, name: "Party Favors", image: "1676673707.jpg" },
      { id: 233, name: "Party Bags & Boxes", image: "1676673707.jpg" },
      { id: 234, name: "Games", image: "1676673707.jpg" },
      { id: 235, name: "Cards", image: "1676673707.jpg" },
      {
        id: 236,
        name: "Headware & Photo Booth Props",
        image: "1676673707.jpg",
      },
      { id: 237, name: "Candles & Lights", image: "1676673707.jpg" },
      { id: 238, name: "Cooking Accessories", image: "1676673707.jpg" },
      { id: 239, name: "Costumes & Makeup", image: "1676673707.jpg" },
    ],
  },
  {
    id: 46,
    image: "baby-food.png",

    title: "Tableware",
    items: [
      { id: 240, name: "Cups", image: "1676673707.jpg" },
      { id: 241, name: "Cutlery", image: "1676673707.jpg" },
      { id: 242, name: "Table Covers", image: "1676673707.jpg" },
      { id: 243, name: "Napkins", image: "1676673707.jpg" },
      { id: 244, name: "Plates & Bowls", image: "1676673707.jpg" },
    ],
  },
  {
    title: "Gifts",
    id: 47,
    image: "baby-food.png",

    items: [
      { id: 245, name: "Baby Gifts", image: "1676673707.jpg" },
      { id: 246, name: "Toddler Gifts", image: "1676673707.jpg" },
      { id: 247, name: "Parents Gifts", image: "1676673707.jpg" },
      { id: 248, name: "Gift Wraps & Bags", image: "1676673707.jpg" },
    ],
  },
];
export const clothingSections = [
  {
    title: "Baby (0-2yrs)",
    id: 51,
    image: "baby-food.png",

    items: [
      { id: 273, name: "Onsies - Overalls - Rompers", image: "1676673707.jpg" },
      { id: 274, name: "Tops", image: "1676673707.jpg" },
      { id: 275, name: "Bottoms", image: "1676673707.jpg" },
      { id: 276, name: "Sets", image: "1676673707.jpg" },
      { id: 277, name: "Sleeping bags", image: "1676673707.jpg" },
      { id: 278, name: "Dresses", image: "1676673707.jpg" },
      { id: 279, name: "Swaddles", image: "1676673707.jpg" },
    ],
  },
  {
    title: "Boy Clothes (3-8yrs)",
    id: 52,
    image: "baby-food.png",

    items: [
      { id: 280, name: "Shirts & T-Shirts", image: "1676673707.jpg" },
      { id: 281, name: "Footwear", image: "1676673707.jpg" },
      { id: 190, name: "Shoes", image: "1676673707.jpg" },
      { id: 282, name: "Leg warmers & Socks", image: "1676673707.jpg" },
    ],
  },
  {
    title: "Girl Clothes (3-8yrs)",
    id: 54,
    image: "baby-food.png",

    items: [
      { id: 283, name: "Dresses", image: "1676673707.jpg" },
      { id: 284, name: "Tops & Tees", image: "1676673707.jpg" },
      { id: 285, name: "Bottom Wear", image: "1676673707.jpg" },
      { id: 286, name: "Night wear", image: "1676673707.jpg" },
    ],
  },
  {
    title: "Swimwear",
    id: 55,
    image: "baby-food.png",

    items: [
      { id: 287, name: "Swim wear - Girls", image: "1676673707.jpg" },
      { id: 288, name: "Swim wear - Boys", image: "1676673707.jpg" },
      { id: 289, name: "Swim accessories", image: "1676673707.jpg" },
    ],
  },
  {
    title: "Accessories",
    id: 56,
    image: "baby-food.png",

    items: [
      { id: 290, name: "Gloves & Mittens", image: "1676673707.jpg" },
      { id: 291, name: "Head bands", image: "1676673707.jpg" },
      { id: 292, name: "Caps & Hats", image: "1676673707.jpg" },
      { id: 293, name: "Sunglasses", image: "1676673707.jpg" },
      { id: 294, name: "Watches", image: "1676673707.jpg" },
      { id: 295, name: "Knee Protectors", image: "1676673707.jpg" },
      { id: 296, name: "Belts & Ties", image: "1676673707.jpg" },
      { id: 297, name: "Hand Bags", image: "1676673707.jpg" },
      { id: 298, name: "Jewelry", image: "1676673707.jpg" },
      { id: 299, name: "Hair Accessories", image: "1676673707.jpg" },
      { id: 300, name: "Make Up", image: "1676673707.jpg" },
    ],
  },
];

export const orderColorPallte = {
  green: "#34D399",
  yellow: "#FBBF24",
  blue: "#60A5FA",
  red: "#F87171",
  purple: "#A78BFA",
} as const;

export type OrderColorKey = keyof typeof orderColorPallte;

export const installationPrices = {
  "Dubai, Abu Dhabi, Al Ain, Sharjah & Ajman (within city limits) – FREE": 0,
  "*Abu Dhabi, & Sharjah( Outside City Limits) +315 AED": 315,
  "*Hatta,  RAK, FUJ, UAQ and other Northern & Western emirates +315 aed": 315,
  "No Installation/Delivery required": 0,
};
