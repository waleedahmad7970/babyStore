import React from "react";
import CategorySectionPriority from "../category/category-sections/category-section-priority";
import { useAppSelector } from "@/store/hooks";

// const homeSections = [
//   {
//     section_type: "section_1",
//     positions: {
//       desktop: ["main_banner", "sub_banner", "products"],
//       mobile: ["main_banner", "sub_banner", "products"],
//     },
//     mobile_banner: "https://i.postimg.cc/SxLvmPKR/school-banner-mob.png",
//     desktop_banner: "https://i.postimg.cc/ydG66xNV/school-banner.png",

//     underPrice_banners: [],
//     sub_banners: [
//       "https://i.postimg.cc/MZR4sX81/school-bag.png",
//       "https://i.postimg.cc/90rfhTtX/water-bottle.png",
//       "https://i.postimg.cc/8CxG63hG/stationary.png",
//       "https://i.postimg.cc/MZR4sX81/school-bag.png",
//     ],
//     productsTitle: "School Essentials",
//     products: [
//       {
//         id: 91803,
//         slug: "moonkids-castle-tower-with-monkey-bars",
//         image:
//           "/products_images/m/o/moon-kids-castle-tower-with-monkey-bars-1.jpg",
//         name: "Moonkids - Castle Tower with Monkey Bars",
//         promo_price: 0,
//         price: 6855,
//         promo_from_date: null,
//         promo_end_date: null,
//       },
//       {
//         id: 268914,
//         slug: "mima-izi-go-modular-x1-car-seat-without-adaptor-snow-white",
//         image: "products_images/new_images_1/New-Project-102783.jpg",
//         name: "Mima - Izi Go Modular X1 Car Seat Without Adaptor - Snow White",
//         promo_price: 1537.1904761905,
//         price: 1617.1428571,
//         promo_from_date: "2025-05-27 00:00:00",
//         promo_end_date: "2025-06-09 00:00:00",
//       },
//       {
//         id: 271200,
//         slug: "gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids",
//         image:
//           "products_images/users/30162/2025/03/08/gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids-15585.jpg",
//         name: "Gabby's Dollhouse Cat Friend Cruise Ship Playset - Fun Toy with Accessories for Kids",
//         promo_price: 323.81,
//         price: 399,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 271568,
//         slug: "monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids",
//         image:
//           "products_images/new_images_2/monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids-11957.jpg",
//         name: "Monster Jam RC Mega Marvel Spider-Man Monster Truck – Remote Control All-Terrain Vehicle for Kids",
//         promo_price: 665.714,
//         price: 949,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 272882,
//         slug: "plum-14ft-wave-springsafe-trampoline-enclosure-multicolor",
//         image: "products_images/new_images_1/New-Project-45627.jpg",
//         name: "Plum - 14Ft Wave Springsafe Trampoline & Enclosure - Multicolor",
//         promo_price: 1385.6,
//         price: 3464,
//         promo_from_date: "2025-03-05 00:00:00",
//         promo_end_date: "2025-04-05 00:00:00",
//       },
//       {
//         id: 274496,
//         slug: "plum-water-park-splash-station-ultimate-backyard-water-play-for-kids",
//         image:
//           "products_images/users/27088/2025/05/05/plum-water-park-splash-station-ultimate-backyard-water-play-for-kids-17758.jpg",
//         name: "Plum Water Park Splash Station - Ultimate Backyard Water Play for Kids",
//         promo_price: 1027.7142858,
//         price: 1141.904762,
//         promo_from_date: "2025-05-21 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 162673,
//         slug: "kidkraft-garden-view-outdoor-playhouse-for-kids",
//         image:
//           "products_images/users/30162/2025/04/28/kidkraft-garden-view-outdoor-playhouse-for-kids-16799.jpg",
//         name: "KidKraft Garden View Outdoor Playhouse for Kids",
//         promo_price: 1427.619047619,
//         price: 1618.0952380952,
//         promo_from_date: "2025-08-08 00:00:00",
//         promo_end_date: "2025-12-31 00:00:00",
//       },
//     ],
//   },
//   {
//     section_type: "section_1",
//     positions: {
//       desktop: ["main_banner", "sub_banner", "products"],
//       mobile: ["main_banner", "sub_banner", "products"],
//     },
//     mobile_banner: "https://i.postimg.cc/SxLvmPKR/school-banner-mob.png",
//     desktop_banner: "https://i.postimg.cc/zB9CbnDv/travel-banner.png",

//     underPrice_banners: [],
//     sub_banners: [
//       "https://i.postimg.cc/FHLQ0vxK/booster.png",
//       "https://i.postimg.cc/bwDqLkqp/reversible.png",
//       "https://i.postimg.cc/m2cxG4JS/iso.png",
//       "https://i.postimg.cc/65SX7qnS/ages.png",
//     ],
//     productsTitle: "Travel Safety",
//     products: [
//       {
//         id: 91803,
//         slug: "moonkids-castle-tower-with-monkey-bars",
//         image:
//           "/products_images/m/o/moon-kids-castle-tower-with-monkey-bars-1.jpg",
//         name: "Moonkids - Castle Tower with Monkey Bars",
//         promo_price: 0,
//         price: 6855,
//         promo_from_date: null,
//         promo_end_date: null,
//       },
//       {
//         id: 268914,
//         slug: "mima-izi-go-modular-x1-car-seat-without-adaptor-snow-white",
//         image: "products_images/new_images_1/New-Project-102783.jpg",
//         name: "Mima - Izi Go Modular X1 Car Seat Without Adaptor - Snow White",
//         promo_price: 1537.1904761905,
//         price: 1617.1428571,
//         promo_from_date: "2025-05-27 00:00:00",
//         promo_end_date: "2025-06-09 00:00:00",
//       },
//       {
//         id: 271200,
//         slug: "gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids",
//         image:
//           "products_images/users/30162/2025/03/08/gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids-15585.jpg",
//         name: "Gabby's Dollhouse Cat Friend Cruise Ship Playset - Fun Toy with Accessories for Kids",
//         promo_price: 323.81,
//         price: 399,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 271568,
//         slug: "monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids",
//         image:
//           "products_images/new_images_2/monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids-11957.jpg",
//         name: "Monster Jam RC Mega Marvel Spider-Man Monster Truck – Remote Control All-Terrain Vehicle for Kids",
//         promo_price: 665.714,
//         price: 949,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 272882,
//         slug: "plum-14ft-wave-springsafe-trampoline-enclosure-multicolor",
//         image: "products_images/new_images_1/New-Project-45627.jpg",
//         name: "Plum - 14Ft Wave Springsafe Trampoline & Enclosure - Multicolor",
//         promo_price: 1385.6,
//         price: 3464,
//         promo_from_date: "2025-03-05 00:00:00",
//         promo_end_date: "2025-04-05 00:00:00",
//       },
//       {
//         id: 274496,
//         slug: "plum-water-park-splash-station-ultimate-backyard-water-play-for-kids",
//         image:
//           "products_images/users/27088/2025/05/05/plum-water-park-splash-station-ultimate-backyard-water-play-for-kids-17758.jpg",
//         name: "Plum Water Park Splash Station - Ultimate Backyard Water Play for Kids",
//         promo_price: 1027.7142858,
//         price: 1141.904762,
//         promo_from_date: "2025-05-21 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 162673,
//         slug: "kidkraft-garden-view-outdoor-playhouse-for-kids",
//         image:
//           "products_images/users/30162/2025/04/28/kidkraft-garden-view-outdoor-playhouse-for-kids-16799.jpg",
//         name: "KidKraft Garden View Outdoor Playhouse for Kids",
//         promo_price: 1427.619047619,
//         price: 1618.0952380952,
//         promo_from_date: "2025-08-08 00:00:00",
//         promo_end_date: "2025-12-31 00:00:00",
//       },
//     ],
//   },
//   {
//     section_type: "section_2",
//     positions: {
//       desktop: ["main_banner", "sub_banner", "products"],
//       mobile: ["main_banner", "sub_banner", "products"],
//     },
//     mobile_banner: "https://i.postimg.cc/SxLvmPKR/school-banner-mob.png",
//     desktop_banner: "https://i.postimg.cc/T16cNrzS/summer-banner.png",

//     underPrice_banners: [],
//     sub_banners: [
//       "https://i.postimg.cc/8CLJKqTp/pools.png",
//       "https://i.postimg.cc/g2VmfdLT/inflatables.png",
//       "https://i.postimg.cc/c1FKb7Gn/beach-toys.png",
//       "https://i.postimg.cc/ZRTRfnfH/swimwear.png",
//       "https://i.postimg.cc/13r4DDBX/pool-shoes.png",
//       "https://i.postimg.cc/25YhDzcb/sun-protector.png",
//     ],
//     productsTitle: "Summer Collection",
//     products: [
//       {
//         id: 91803,
//         slug: "moonkids-castle-tower-with-monkey-bars",
//         image:
//           "/products_images/m/o/moon-kids-castle-tower-with-monkey-bars-1.jpg",
//         name: "Moonkids - Castle Tower with Monkey Bars",
//         promo_price: 0,
//         price: 6855,
//         promo_from_date: null,
//         promo_end_date: null,
//       },
//       {
//         id: 268914,
//         slug: "mima-izi-go-modular-x1-car-seat-without-adaptor-snow-white",
//         image: "products_images/new_images_1/New-Project-102783.jpg",
//         name: "Mima - Izi Go Modular X1 Car Seat Without Adaptor - Snow White",
//         promo_price: 1537.1904761905,
//         price: 1617.1428571,
//         promo_from_date: "2025-05-27 00:00:00",
//         promo_end_date: "2025-06-09 00:00:00",
//       },
//       {
//         id: 271200,
//         slug: "gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids",
//         image:
//           "products_images/users/30162/2025/03/08/gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids-15585.jpg",
//         name: "Gabby's Dollhouse Cat Friend Cruise Ship Playset - Fun Toy with Accessories for Kids",
//         promo_price: 323.81,
//         price: 399,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 271568,
//         slug: "monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids",
//         image:
//           "products_images/new_images_2/monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids-11957.jpg",
//         name: "Monster Jam RC Mega Marvel Spider-Man Monster Truck – Remote Control All-Terrain Vehicle for Kids",
//         promo_price: 665.714,
//         price: 949,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 272882,
//         slug: "plum-14ft-wave-springsafe-trampoline-enclosure-multicolor",
//         image: "products_images/new_images_1/New-Project-45627.jpg",
//         name: "Plum - 14Ft Wave Springsafe Trampoline & Enclosure - Multicolor",
//         promo_price: 1385.6,
//         price: 3464,
//         promo_from_date: "2025-03-05 00:00:00",
//         promo_end_date: "2025-04-05 00:00:00",
//       },
//       {
//         id: 274496,
//         slug: "plum-water-park-splash-station-ultimate-backyard-water-play-for-kids",
//         image:
//           "products_images/users/27088/2025/05/05/plum-water-park-splash-station-ultimate-backyard-water-play-for-kids-17758.jpg",
//         name: "Plum Water Park Splash Station - Ultimate Backyard Water Play for Kids",
//         promo_price: 1027.7142858,
//         price: 1141.904762,
//         promo_from_date: "2025-05-21 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 162673,
//         slug: "kidkraft-garden-view-outdoor-playhouse-for-kids",
//         image:
//           "products_images/users/30162/2025/04/28/kidkraft-garden-view-outdoor-playhouse-for-kids-16799.jpg",
//         name: "KidKraft Garden View Outdoor Playhouse for Kids",
//         promo_price: 1427.619047619,
//         price: 1618.0952380952,
//         promo_from_date: "2025-08-08 00:00:00",
//         promo_end_date: "2025-12-31 00:00:00",
//       },
//     ],
//   },
//   {
//     section_type: "section_1",
//     positions: {
//       desktop: ["main_banner", "sub_banner"],
//       mobile: ["main_banner", "sub_banner", "products"],
//     },
//     desktop_banner: "https://i.postimg.cc/Znqp9Vpr/mummy-banner.png",

//     underPrice_banners: [],
//     sub_banners: [],
//     productsTitle: "Mummy Special",
//     products: [
//       {
//         id: 91803,
//         slug: "moonkids-castle-tower-with-monkey-bars",
//         image:
//           "/products_images/m/o/moon-kids-castle-tower-with-monkey-bars-1.jpg",
//         name: "Moonkids - Castle Tower with Monkey Bars",
//         promo_price: 0,
//         price: 6855,
//         promo_from_date: null,
//         promo_end_date: null,
//       },
//       {
//         id: 268914,
//         slug: "mima-izi-go-modular-x1-car-seat-without-adaptor-snow-white",
//         image: "products_images/new_images_1/New-Project-102783.jpg",
//         name: "Mima - Izi Go Modular X1 Car Seat Without Adaptor - Snow White",
//         promo_price: 1537.1904761905,
//         price: 1617.1428571,
//         promo_from_date: "2025-05-27 00:00:00",
//         promo_end_date: "2025-06-09 00:00:00",
//       },
//       {
//         id: 271200,
//         slug: "gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids",
//         image:
//           "products_images/users/30162/2025/03/08/gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids-15585.jpg",
//         name: "Gabby's Dollhouse Cat Friend Cruise Ship Playset - Fun Toy with Accessories for Kids",
//         promo_price: 323.81,
//         price: 399,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 271568,
//         slug: "monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids",
//         image:
//           "products_images/new_images_2/monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids-11957.jpg",
//         name: "Monster Jam RC Mega Marvel Spider-Man Monster Truck – Remote Control All-Terrain Vehicle for Kids",
//         promo_price: 665.714,
//         price: 949,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 272882,
//         slug: "plum-14ft-wave-springsafe-trampoline-enclosure-multicolor",
//         image: "products_images/new_images_1/New-Project-45627.jpg",
//         name: "Plum - 14Ft Wave Springsafe Trampoline & Enclosure - Multicolor",
//         promo_price: 1385.6,
//         price: 3464,
//         promo_from_date: "2025-03-05 00:00:00",
//         promo_end_date: "2025-04-05 00:00:00",
//       },
//       {
//         id: 274496,
//         slug: "plum-water-park-splash-station-ultimate-backyard-water-play-for-kids",
//         image:
//           "products_images/users/27088/2025/05/05/plum-water-park-splash-station-ultimate-backyard-water-play-for-kids-17758.jpg",
//         name: "Plum Water Park Splash Station - Ultimate Backyard Water Play for Kids",
//         promo_price: 1027.7142858,
//         price: 1141.904762,
//         promo_from_date: "2025-05-21 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 162673,
//         slug: "kidkraft-garden-view-outdoor-playhouse-for-kids",
//         image:
//           "products_images/users/30162/2025/04/28/kidkraft-garden-view-outdoor-playhouse-for-kids-16799.jpg",
//         name: "KidKraft Garden View Outdoor Playhouse for Kids",
//         promo_price: 1427.619047619,
//         price: 1618.0952380952,
//         promo_from_date: "2025-08-08 00:00:00",
//         promo_end_date: "2025-12-31 00:00:00",
//       },
//     ],
//   },
//   {
//     section_type: "section_1",
//     positions: {
//       desktop: ["main_banner", "sub_banner", "products"],
//       mobile: ["main_banner", "sub_banner", "products"],
//     },
//     desktop_banner: "https://i.postimg.cc/fbq1VT3y/clearance-banner.png",

//     underPrice_banners: [],
//     sub_banners: [
//       "https://i.postimg.cc/rp7Q6d01/toys.png",
//       "https://i.postimg.cc/c4Thxkt4/gear2.png",
//       "https://i.postimg.cc/jSFhNWhp/feeding2.png",
//       "https://i.postimg.cc/4yP63ndF/outdoor.png",
//     ],
//     productsTitle: "Clearance Sale",
//     products: [
//       {
//         id: 91803,
//         slug: "moonkids-castle-tower-with-monkey-bars",
//         image:
//           "/products_images/m/o/moon-kids-castle-tower-with-monkey-bars-1.jpg",
//         name: "Moonkids - Castle Tower with Monkey Bars",
//         promo_price: 0,
//         price: 6855,
//         promo_from_date: null,
//         promo_end_date: null,
//       },
//       {
//         id: 268914,
//         slug: "mima-izi-go-modular-x1-car-seat-without-adaptor-snow-white",
//         image: "products_images/new_images_1/New-Project-102783.jpg",
//         name: "Mima - Izi Go Modular X1 Car Seat Without Adaptor - Snow White",
//         promo_price: 1537.1904761905,
//         price: 1617.1428571,
//         promo_from_date: "2025-05-27 00:00:00",
//         promo_end_date: "2025-06-09 00:00:00",
//       },
//       {
//         id: 271200,
//         slug: "gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids",
//         image:
//           "products_images/users/30162/2025/03/08/gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids-15585.jpg",
//         name: "Gabby's Dollhouse Cat Friend Cruise Ship Playset - Fun Toy with Accessories for Kids",
//         promo_price: 323.81,
//         price: 399,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 271568,
//         slug: "monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids",
//         image:
//           "products_images/new_images_2/monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids-11957.jpg",
//         name: "Monster Jam RC Mega Marvel Spider-Man Monster Truck – Remote Control All-Terrain Vehicle for Kids",
//         promo_price: 665.714,
//         price: 949,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 272882,
//         slug: "plum-14ft-wave-springsafe-trampoline-enclosure-multicolor",
//         image: "products_images/new_images_1/New-Project-45627.jpg",
//         name: "Plum - 14Ft Wave Springsafe Trampoline & Enclosure - Multicolor",
//         promo_price: 1385.6,
//         price: 3464,
//         promo_from_date: "2025-03-05 00:00:00",
//         promo_end_date: "2025-04-05 00:00:00",
//       },
//       {
//         id: 274496,
//         slug: "plum-water-park-splash-station-ultimate-backyard-water-play-for-kids",
//         image:
//           "products_images/users/27088/2025/05/05/plum-water-park-splash-station-ultimate-backyard-water-play-for-kids-17758.jpg",
//         name: "Plum Water Park Splash Station - Ultimate Backyard Water Play for Kids",
//         promo_price: 1027.7142858,
//         price: 1141.904762,
//         promo_from_date: "2025-05-21 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 162673,
//         slug: "kidkraft-garden-view-outdoor-playhouse-for-kids",
//         image:
//           "products_images/users/30162/2025/04/28/kidkraft-garden-view-outdoor-playhouse-for-kids-16799.jpg",
//         name: "KidKraft Garden View Outdoor Playhouse for Kids",
//         promo_price: 1427.619047619,
//         price: 1618.0952380952,
//         promo_from_date: "2025-08-08 00:00:00",
//         promo_end_date: "2025-12-31 00:00:00",
//       },
//     ],
//   },
//   {
//     section_type: "section_1",
//     positions: {
//       desktop: ["main_banner", "sub_banner", "products"],
//       mobile: ["main_banner", "sub_banner", "products"],
//     },
//     desktop_banner: "https://i.postimg.cc/kXdS0QjM/first-day-banner.png",

//     underPrice_banners: [],
//     sub_banners: [
//       "https://i.postimg.cc/nrTQK5qd/school-bag-2.png",
//       "https://i.postimg.cc/0Q06x3X8/lunch-box-2.png",
//       "https://i.postimg.cc/hvwKq1nD/water-botle-2.png",
//       "https://i.postimg.cc/QMbsM3Dn/stationary-2.png",
//     ],
//     productsTitle: "First Day Excitement",
//     products: [
//       {
//         id: 91803,
//         slug: "moonkids-castle-tower-with-monkey-bars",
//         image:
//           "/products_images/m/o/moon-kids-castle-tower-with-monkey-bars-1.jpg",
//         name: "Moonkids - Castle Tower with Monkey Bars",
//         promo_price: 0,
//         price: 6855,
//         promo_from_date: null,
//         promo_end_date: null,
//       },
//       {
//         id: 268914,
//         slug: "mima-izi-go-modular-x1-car-seat-without-adaptor-snow-white",
//         image: "products_images/new_images_1/New-Project-102783.jpg",
//         name: "Mima - Izi Go Modular X1 Car Seat Without Adaptor - Snow White",
//         promo_price: 1537.1904761905,
//         price: 1617.1428571,
//         promo_from_date: "2025-05-27 00:00:00",
//         promo_end_date: "2025-06-09 00:00:00",
//       },
//       {
//         id: 271200,
//         slug: "gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids",
//         image:
//           "products_images/users/30162/2025/03/08/gabbys-dollhouse-cat-friend-cruise-ship-playset-fun-toy-with-accessories-for-kids-15585.jpg",
//         name: "Gabby's Dollhouse Cat Friend Cruise Ship Playset - Fun Toy with Accessories for Kids",
//         promo_price: 323.81,
//         price: 399,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 271568,
//         slug: "monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids",
//         image:
//           "products_images/new_images_2/monster-jam-rc-mega-marvel-spiderman-monster-truck-remote-control-allterrain-vehicle-for-kids-11957.jpg",
//         name: "Monster Jam RC Mega Marvel Spider-Man Monster Truck – Remote Control All-Terrain Vehicle for Kids",
//         promo_price: 665.714,
//         price: 949,
//         promo_from_date: "2025-06-25 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 272882,
//         slug: "plum-14ft-wave-springsafe-trampoline-enclosure-multicolor",
//         image: "products_images/new_images_1/New-Project-45627.jpg",
//         name: "Plum - 14Ft Wave Springsafe Trampoline & Enclosure - Multicolor",
//         promo_price: 1385.6,
//         price: 3464,
//         promo_from_date: "2025-03-05 00:00:00",
//         promo_end_date: "2025-04-05 00:00:00",
//       },
//       {
//         id: 274496,
//         slug: "plum-water-park-splash-station-ultimate-backyard-water-play-for-kids",
//         image:
//           "products_images/users/27088/2025/05/05/plum-water-park-splash-station-ultimate-backyard-water-play-for-kids-17758.jpg",
//         name: "Plum Water Park Splash Station - Ultimate Backyard Water Play for Kids",
//         promo_price: 1027.7142858,
//         price: 1141.904762,
//         promo_from_date: "2025-05-21 00:00:00",
//         promo_end_date: "2025-08-31 00:00:00",
//       },
//       {
//         id: 162673,
//         slug: "kidkraft-garden-view-outdoor-playhouse-for-kids",
//         image:
//           "products_images/users/30162/2025/04/28/kidkraft-garden-view-outdoor-playhouse-for-kids-16799.jpg",
//         name: "KidKraft Garden View Outdoor Playhouse for Kids",
//         promo_price: 1427.619047619,
//         price: 1618.0952380952,
//         promo_from_date: "2025-08-08 00:00:00",
//         promo_end_date: "2025-12-31 00:00:00",
//       },
//     ],
//   },
//   {
//     section_type: "section_1",
//     positions: {
//       desktop: ["main_banner", "sub_banner"],
//       mobile: ["main_banner", "sub_banner", "products"],
//     },
//     desktop_banner: "https://i.postimg.cc/1X928n9k/baby-care-banner.png",

//     underPrice_banners: [],
//     sub_banners: [
//       "https://i.postimg.cc/JzJxW78Z/diapers.png",
//       "https://i.postimg.cc/SKk6FWDb/wipes.png",
//       "https://i.postimg.cc/QC2765HP/formula.png",
//       "https://i.postimg.cc/xTmMXsZS/skin-care.png",
//     ],
//     productsTitle: "",
//     products: [],
//   },

//   {
//     section_type: "section_3",
//     positions: {
//       desktop: [
//         "main_banner",
//         "under_price_banners",
//         "kids_banner",
//         "sub_banner",
//       ],
//       mobile: ["main_banner", "sub_banner", "products"],
//     },
//     mobile_banner: "https://i.postimg.cc/NFXF0j4v/toys-banner-mob.png",
//     desktop_banner: "https://i.postimg.cc/KjRC2Kmx/toy-banner.png",

//     kids_banner: [
//       "https://i.postimg.cc/FsnCvF6H/boys-banners.png",
//       "https://i.postimg.cc/d11TJFpJ/girls-banner.png",
//     ],
//     underPrice_banners: [
//       "https://i.postimg.cc/d1bQgKKH/aed50.png",
//       "https://i.postimg.cc/XvXVJvj1/aed100.png",
//       "https://i.postimg.cc/rwZkvL11/aed200.png",
//     ],
//     sub_banners: [
//       "https://i.postimg.cc/FFS0zr1K/activity.png",
//       "https://i.postimg.cc/ZKF3Pw8t/kitchen.png",
//       "https://i.postimg.cc/FHHfyNF3/rc-toys.png",
//       "https://i.postimg.cc/cJKrzhnJ/blocks.png",
//       "https://i.postimg.cc/dt43tpR1/doll-house.png",
//       "https://i.postimg.cc/2yTkyLZJ/stem-toys.png",
//     ],
//     productsTitle: "",
//     products: [],
//   },
// ];

export default function HomeSections() {
  const { homeSections = [] } = useAppSelector((state) => state.home);
  return (
    <div>
      {homeSections.map((section: any, index: number) => {
        return (
          <CategorySectionPriority
            key={index}
            section_type={section?.section_type}
            bannerImage={section?.desktop_banner}
            categoryImages={section?.sub_banners}
            mobile_banner={section?.mobile_banner}
            underPrice_banners={section?.underPrice_banners}
            products={section.products}
            kids_banner={section?.kids_banner || []}
            productsTitle={section.productsTitle}
            positions={{
              desktop: section?.positions.desktop,
              mobile: section?.positions.mobile,
            }}
          />
        );
      })}
    </div>
  );
}
