interface DashboardIconProps {
  color?: string;
}
const DashboardIcon = ({ color = "#473A3F" }: DashboardIconProps) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Dashboard">
      <g id="Vector">
        <path
          d="M2.79297 4C2.79297 2.89543 3.6884 2 4.79297 2H8.79297C9.89754 2 10.793 2.89543 10.793 4V8C10.793 9.10457 9.89754 10 8.79297 10H4.79297C3.6884 10 2.79297 9.10457 2.79297 8V4Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          d="M14.793 4C14.793 2.89543 15.6884 2 16.793 2H20.793C21.8975 2 22.793 2.89543 22.793 4V8C22.793 9.10457 21.8975 10 20.793 10H16.793C15.6884 10 14.793 9.10457 14.793 8V4Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          d="M2.79297 16C2.79297 14.8954 3.6884 14 4.79297 14H8.79297C9.89754 14 10.793 14.8954 10.793 16V20C10.793 21.1046 9.89754 22 8.79297 22H4.79297C3.6884 22 2.79297 21.1046 2.79297 20V16Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          d="M14.793 16C14.793 14.8954 15.6884 14 16.793 14H20.793C21.8975 14 22.793 14.8954 22.793 16V20C22.793 21.1046 21.8975 22 20.793 22H16.793C15.6884 22 14.793 21.1046 14.793 20V16Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </g>
    </g>
  </svg>
);
const OrderIcon = ({ color = "#473A3F" }: DashboardIconProps) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Track Order">
      <circle
        id="Ellipse 698"
        cx="12.793"
        cy="14"
        r="3"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M22.793 18V8.40312C22.793 7.49484 22.4838 6.6136 21.9164 5.90434L19.9939 3.50122C19.2349 2.55236 18.0856 2 16.8705 2H8.71547C7.50033 2 6.35108 2.55236 5.59199 3.50122L3.66949 5.90434C3.10209 6.6136 2.79297 7.49484 2.79297 8.40312V18C2.79297 20.2091 4.58383 22 6.79297 22H18.793C21.0021 22 22.793 20.2091 22.793 18Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        id="Vector 1890"
        d="M3.79297 7H21.793"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector 2014"
        d="M15.293 16.5L16.293 17.5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
const WishlistIcon = ({ color = "#473A3F" }: DashboardIconProps) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Wishlist">
      <path
        id="Vector 1874"
        d="M17.793 7L7.79297 7"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector 1875"
        d="M17.793 11L7.79297 11"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector 1876"
        d="M12.793 15L7.79297 15"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector 1877"
        d="M19.793 2H5.79297C4.6884 2 3.79297 2.89543 3.79297 4V19.1543C3.79297 20.5396 5.16709 21.5053 6.47041 21.0361L8.03217 20.4739C8.52018 20.2982 9.05736 20.319 9.53034 20.5318L11.9722 21.6307C12.4942 21.8655 13.0918 21.8655 13.6137 21.6307L16.0556 20.5318C16.5286 20.319 17.0658 20.2982 17.5538 20.4739L19.1155 21.0361C20.4189 21.5053 21.793 20.5396 21.793 19.1543V4C21.793 2.89543 20.8975 2 19.793 2Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </g>
  </svg>
);
const MapIcon = ({ color = "#473A3F" }: DashboardIconProps) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="map">
      <g id="Vector">
        <path
          d="M18.6863 5.26999C18.6863 7.63148 16.4593 11.6838 14.2323 11.6838C12.0053 11.6838 9.77832 7.63148 9.77832 5.26999C9.77832 2.90851 11.7725 0.994141 14.2323 0.994141C16.6922 0.994141 18.6863 2.90851 18.6863 5.26999Z"
          stroke={color}
          stroke-width="1.5"
        />
        <path
          d="M15.5685 5.00275C15.5685 5.74072 14.9703 6.33896 14.2323 6.33896C13.4944 6.33896 12.8961 5.74072 12.8961 5.00275C12.8961 4.26479 13.4944 3.66655 14.2323 3.66655C14.9703 3.66655 15.5685 4.26479 15.5685 5.00275Z"
          stroke={color}
          stroke-width="1.5"
        />
      </g>
      <path
        id="Vector_2"
        d="M6.79297 5.03552C4.92569 5.24453 2.65294 6.79263 1.51512 7.65296C1.04834 8.0059 0.792969 8.56261 0.792969 9.1478V18.8172C0.792969 19.6707 1.82087 20.1656 2.52924 19.6895C3.73872 18.8768 5.38166 17.9538 6.79297 17.7959M6.79297 5.03552V17.7959M6.79297 5.03552C8.01219 4.89905 8.9675 5.34367 9.85283 5.94236M6.79297 17.7959C10.1113 17.4244 11.4747 21.3574 14.793 20.986M14.793 20.986C16.6602 20.777 18.933 19.2289 20.0708 18.3685C20.5376 18.0156 20.793 17.4589 20.793 16.8737C20.793 16.8737 20.793 16.8737 20.793 16.8737C20.793 16.8737 20.793 8.05772 20.793 7.20427C20.793 6.35082 19.7651 5.85591 19.0567 6.33194C18.8302 6.48416 18.5885 6.64025 18.3359 6.79445M14.793 20.986V11.5604"
        stroke={color}
        stroke-width="1.5"
      />
    </g>
  </svg>
);
const ReviewsIcon = ({ color = "#473A3F" }: DashboardIconProps) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Reviews">
      <path
        id="Star 2"
        d="M10.8258 3.27141C11.6305 1.5762 13.9555 1.57619 14.7602 3.27141L16.1509 6.20118C16.4704 6.87435 17.0881 7.34094 17.8026 7.44888L20.9123 7.91869C22.7116 8.19053 23.4301 10.4895 22.1281 11.8091L19.8779 14.0896C19.3609 14.6136 19.1249 15.3685 19.247 16.1084L19.7782 19.3285C20.0855 21.1918 18.2046 22.6126 16.5952 21.7329L13.8138 20.2126C13.1747 19.8633 12.4112 19.8633 11.7721 20.2126L8.99073 21.7329C7.38136 22.6126 5.50039 21.1918 5.80775 19.3286L6.33896 16.1084C6.46101 15.3685 6.22508 14.6136 5.70805 14.0896L3.45784 11.8091C2.15583 10.4895 2.8743 8.19053 4.67363 7.91869L7.78334 7.44888C8.49786 7.34094 9.11553 6.87435 9.43508 6.20118L10.8258 3.27141Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
const WalletIcon = ({ color = "#473A3F" }: DashboardIconProps) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="ecommerce/outline/wallet 01">
      <path
        id="Rectangle 830"
        d="M2.79297 6H18.793C21.0021 6 22.793 7.79086 22.793 10V18C22.793 20.2091 21.0021 22 18.793 22H6.79297C4.58383 22 2.79297 20.2091 2.79297 18V6Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        id="Rectangle 831"
        d="M2.79297 6C2.79297 3.79086 4.58383 2 6.79297 2H12.793C15.0021 2 16.793 3.79086 16.793 6H2.79297Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        id="Rectangle 828"
        d="M22.793 12L22.793 16H18.793C17.6884 16 16.793 15.1046 16.793 14C16.793 12.8954 17.6884 12 18.793 12L22.793 12Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
const CouponIcon = ({ color = "#473A3F" }: DashboardIconProps) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Coupon">
      <path
        id="Ellipse 685"
        d="M10.793 9C10.793 9.55228 10.3453 10 9.79297 10C9.24068 10 8.79297 9.55228 8.79297 9C8.79297 8.44772 9.24068 8 9.79297 8C10.3453 8 10.793 8.44772 10.793 9Z"
        fill={color}
      />
      <path
        id="Ellipse 686"
        d="M16.793 15C16.793 15.5523 16.3453 16 15.793 16C15.2407 16 14.793 15.5523 14.793 15C14.793 14.4477 15.2407 14 15.793 14C16.3453 14 16.793 14.4477 16.793 15Z"
        fill={color}
      />
      <path
        id="Star 6"
        d="M10.8469 2.65806C11.9682 1.70252 13.6174 1.70252 14.7386 2.65806L15.4213 3.23978C15.9017 3.64925 16.4992 3.89671 17.1285 3.94693L18.0225 4.01827C19.491 4.13546 20.6571 5.3016 20.7743 6.77012L20.8457 7.66414C20.8959 8.29344 21.1434 8.89086 21.5528 9.37135L22.1345 10.054C23.0901 11.1752 23.0901 12.8244 22.1345 13.9457L21.5528 14.6283C21.1434 15.1088 20.8959 15.7062 20.8457 16.3355L20.7743 17.2295C20.6571 18.698 19.491 19.8642 18.0225 19.9814L17.1285 20.0527C16.4992 20.1029 15.9017 20.3504 15.4213 20.7599L14.7386 21.3416C13.6174 22.2971 11.9682 22.2971 10.8469 21.3416L10.1643 20.7599C9.68383 20.3504 9.08641 20.1029 8.45711 20.0527L7.56309 19.9814C6.09456 19.8642 4.92843 18.698 4.81124 17.2295L4.7399 16.3355C4.68968 15.7062 4.44222 15.1088 4.03275 14.6283L3.45103 13.9457C2.49549 12.8244 2.49549 11.1752 3.45103 10.054L4.03275 9.37135C4.44222 8.89086 4.68968 8.29344 4.7399 7.66414L4.81124 6.77012C4.92843 5.3016 6.09456 4.13546 7.56309 4.01827L8.45711 3.94693C9.08641 3.89671 9.68383 3.64925 10.1643 3.23978L10.8469 2.65806Z"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        id="Vector 1887"
        d="M9.79297 15L15.793 9"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </g>
  </svg>
);
const CashbackIcon = ({ color = "#473A3F" }: DashboardIconProps) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Cashback">
      <path
        id="Vector"
        d="M18.3788 22L17.0859 20.7071C16.6953 20.3166 16.6953 19.6834 17.0859 19.2929L18.3788 18M22.793 20L17.3788 20"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        id="Rectangle 830"
        d="M22.793 15V6H6.79297C4.58383 6 2.79297 7.79086 2.79297 10V18C2.79297 20.2091 4.58383 22 6.79297 22H13.793"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Rectangle 831"
        d="M22.793 6C22.793 3.79086 21.0021 2 18.793 2H12.793C10.5838 2 8.79297 3.79086 8.79297 6V6H22.793V6Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        id="Rectangle 828"
        d="M2.79297 12L2.79297 16L6.79297 16C7.89754 16 8.79297 15.1046 8.79297 14V14C8.79297 12.8954 7.89754 12 6.79297 12L2.79297 12Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
const TrackIcon = ({ color = "#473A3F" }: DashboardIconProps) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Track Order">
      <circle
        id="Ellipse 698"
        cx="12.793"
        cy="14"
        r="3"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        id="Vector"
        d="M22.793 18V8.40312C22.793 7.49484 22.4838 6.6136 21.9164 5.90434L19.9939 3.50122C19.2349 2.55236 18.0856 2 16.8705 2H8.71547C7.50033 2 6.35108 2.55236 5.59199 3.50122L3.66949 5.90434C3.10209 6.6136 2.79297 7.49484 2.79297 8.40312V18C2.79297 20.2091 4.58383 22 6.79297 22H18.793C21.0021 22 22.793 20.2091 22.793 18Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        id="Vector 1890"
        d="M3.79297 7H21.793"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector 2014"
        d="M15.293 16.5L16.293 17.5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);

// menu mobile m=bottom bar iocns

const HomeIcon = ({ color = "#C7CFDA" }: DashboardIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M20.1379 6.81969L14.3779 2.78969C12.8079 1.68969 10.3979 1.74969 8.88789 2.91969L3.87789 6.82969C2.87789 7.60969 2.08789 9.20969 2.08789 10.4697V17.3697C2.08789 19.9197 4.15789 21.9997 6.70789 21.9997H17.4879C20.0379 21.9997 22.1079 19.9297 22.1079 17.3797V10.5997C22.1079 9.24969 21.2379 7.58969 20.1379 6.81969ZM12.8479 17.9997C12.8479 18.4097 12.5079 18.7497 12.0979 18.7497C11.6879 18.7497 11.3479 18.4097 11.3479 17.9997V14.9997C11.3479 14.5897 11.6879 14.2497 12.0979 14.2497C12.5079 14.2497 12.8479 14.5897 12.8479 14.9997V17.9997Z"
      fill={color}
    />
  </svg>
);

const SearchIcon = ({ color = "#C7CFDA" }: DashboardIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <circle
      cx="12.6624"
      cy="11.7669"
      r="8.98856"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.9141 18.4854L22.4381 22.0002"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const CartIcon = ({ color = "#C7CFDA" }: DashboardIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M8.19727 7.66952V6.69952C8.19727 4.44952 10.0073 2.23952 12.2573 2.02952C14.9373 1.76952 17.1973 3.87952 17.1973 6.50952V7.88952"
      stroke={color}
      stroke-width="1.5"
      strokeMiterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.69807 22H15.6981C19.7181 22 20.4381 20.39 20.6481 18.43L21.3981 12.43C21.6681 9.99 20.9681 8 16.6981 8H8.69807C4.42807 8 3.72807 9.99 3.99807 12.43L4.74807 18.43C4.95807 20.39 5.67807 22 9.69807 22Z"
      stroke={color}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.1937 12H16.2027"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.19177 12H9.20075"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ProfileIcon = ({ color = "#C7CFDA" }: DashboardIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M12.6566 10.87C12.5566 10.86 12.4366 10.86 12.3266 10.87C9.94664 10.79 8.05664 8.84 8.05664 6.44C8.05664 3.99 10.0366 2 12.4966 2C14.9466 2 16.9366 3.99 16.9366 6.44C16.9266 8.84 15.0366 10.79 12.6566 10.87Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.31109 13.3725C4.89109 14.9925 4.89109 17.6325 7.31109 19.2425C10.0611 21.0825 14.5711 21.0825 17.3211 19.2425C19.7411 17.6225 19.7411 14.9825 17.3211 13.3725C14.5811 11.5425 10.0711 11.5425 7.31109 13.3725Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const CategoryIcon = ({ color = "#C7CFDA" }: DashboardIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M4.29688 6H20.2969"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.29688 12H20.2969"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.29688 18H20.2969"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Icons = {
  DashboardIcon,
  OrderIcon,
  WishlistIcon,
  MapIcon,
  ReviewsIcon,
  WalletIcon,
  CouponIcon,
  CashbackIcon,
  TrackIcon,
  // menu mobile icons
  CategoryIcon,
  HomeIcon,
  CartIcon,
  SearchIcon,
  ProfileIcon,
};

export default Icons;
