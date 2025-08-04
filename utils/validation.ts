import * as Yup from "yup";

export const validationSchemas = {
  signup: Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  }),
  login: Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  }),
  resetPassword: Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  }),
  subscribe: Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  }),
  updateResetPassword: Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  }),
  product: Yup.object({
    title: Yup.string()
      .min(3, "Title must be at least 3 characters")
      .required("Title is required"),
    price: Yup.number()
      .min(1, "Price must be greater than 0")
      .required("Price is required"),
    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
  }),
  priceRange: (minLimit: number = 0, maxLimit: number = 10000) =>
    Yup.object({
      lowest: Yup.number()
        .min(minLimit, `Minimum price is ${minLimit}`)
        // .max(maxLimit, `Maximum price is ${maxLimit}`)
        // .lessThan(
        //   Yup.ref("highest"),
        //   "Lowest price must be less than highest price",
        // )
        .nullable(),

      highest: Yup.number()
        // .min(minLimit, `Minimum price is ${minLimit}`)
        .max(maxLimit, `Maximum price is ${maxLimit}`)
        // .moreThan(
        //   Yup.ref("lowest"),
        //   "Highest price must be greater than lowest price",
        // )
        .nullable(),
    }),
  checkoutBilling: Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    address1: Yup.string().required("Required"),
    address2: Yup.string(),
    phone: Yup.string().required("Required"),
    additionalInfo: Yup.string(),
  }),
  checkoutshipping: Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    address1: Yup.string().required("Required"),
    address2: Yup.string(),
    phone: Yup.string().required("Required"),
    zip: Yup.string().required("Required"),
  }),

  // dashnoard
  accountInfo: Yup.object({
    first_name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    last_name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),

    address_1: Yup.string()
      .min(3, "Address must be at least 3 characters")
      .required("Address is required"),
    address2: Yup.string()
      .min(3, "Address 2 must be at least 3 characters")
      .required("Address is required"),
    city: Yup.string()
      .min(3, "City must be at least 3 characters")
      .required("City is required"),
    country: Yup.string()
      .min(3, "Country must be at least 3 characters")
      .max(5)
      .required("Country is required"),
    region: Yup.string()
      .min(3, "Region must be at least 3 characters")
      .required("Region is required"),
    phone: Yup.string()
      .min(3, "Phone must be at least 3 characters")
      .required("Phone is required"),
  }),
  defaultAddress: Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    address: Yup.string()
      .min(3, "Address must be at least 3 characters")
      .required("Address is required"),
    city: Yup.string()
      .min(3, "City must be at least 3 characters")
      .required("City is required"),
    country: Yup.string()
      .min(3, "Country must be at least 3 characters")
      .required("Country is required"),
    region: Yup.string()
      .min(3, "Region must be at least 3 characters")
      .required("Region is required"),
    phone: Yup.string()
      .min(3, "Phone must be at least 3 characters")
      .required("Phone is required"),
  }),
};
