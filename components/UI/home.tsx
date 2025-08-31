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
//     mobile_banner: "assets/back-to-school-mobile.jpg",
//     desktop_banner: "assets/back-to-school-desktop.jpg",

//     underPrice_banners: [],
//     sub_banners: [
//       "assets/stationary-2.jpg",
//       "assets/water-bottles.jpg",
//       "assets/school-bags.jpg",
//       "assets/lunch-boxes-2.jpg",
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
//     mobile_banner: "assets/travel-safe-mobile.jpg",
//     desktop_banner: "assets/travel-safe-desktop.jpg",

//     underPrice_banners: [],
//     sub_banners: [
//       "assets/reversible.jpg",
//       "assets/isofix.jpg",
//       "assets/all-ages.jpg",
//       "assets/booster.jpg",

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
//     mobile_banner: "assets/get-summer-ready-mobile.jpg",
//     desktop_banner: "assets/get-summer-ready-desktop.jpg,

//     underPrice_banners: [],
//     sub_banners: [
//       "assets/swimwear.jpg",
//       "assets/sun-protection.jpg",
//       "assets/pools.jpg",
//       "assets/pool-shoes.jpg",
//       "assets/beach-toys.jpg",
//       "assets/inflatables.jpg",

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
//     desktop_banner: "assets/mommy-fav-desktop.jpg",
//     mobile_banner: "assets/mommy-fav-mobile.jpg",

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
//     desktop_banner: "assets/clearance-sale-desktop.jpg",
//     mobile_banner: "assets/clearance-sale-mobile.jpg",

//     underPrice_banners: [],
//     sub_banners: [
//       "assets/toys.jpg",
//       "assets/outdoor.jpg",
//       "assets/feeding.jpg",
//       "assets/gear.jpg",

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
//     desktop_banner: "assets/my-first-day-at-school-desktop.jpg",
//     mobile_banner: "assets/my-first-day-at-school-mobile.jpg",

//     underPrice_banners: [],
//     sub_banners: [
//       "assets/stationary.jpg",
//       "assets/water-bottles-2.jpg",
//       "assets/lunch-box.jpg",
//       "assets/school-bags-2.jpg",

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
//     desktop_banner: "assets/moms-in-a-budget-desktop.jpg",
//     mobile_banner: "assets/moms-on-a-budget-mobile.jpg",

//     underPrice_banners: [],
//     sub_banners: [
//       "assets/wipes-bundles.jpg",
//       "assets/formula-bundles.jpg",
//       "assets/diaper-bundles.jpg",
//       "assets/skincare-bundles.jpg",

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
//     mobile_banner: "assets/toy-station-mobile.jpg",
//     desktop_banner: "assets/toy-station-desktop.jpg",

//     kids_banner: [
//       "assets/girl-toys.jpg",
//       "assets/girl-toys.jpg",
//     ],
//     underPrice_banners: [
//       "assets/under-aed-50.jpg",
//       "assets/under-aed-100.jpg",
//       "assets/under-aed-200.jpg",

//     ],
//     sub_banners: [
//       "assets/doll-house.jpg",
//       "assets/activity-center.jpg",
//       "assets/blocks.jpg",
//       "assets/play-kitchen.jpg",
//       "assets/rc-toys.jpg",
//       "assets/stem-toys.jpg",

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
