import Button from "@/components/button/button";
import InputField from "@/components/fields/input-field";
import OrderTable from "@/components/tables/order-table";
import RecentOrderTable from "@/components/tables/order-table-recent";
import authService from "@/services/auth.service";

import { useAppSelector } from "@/store/hooks";
import { dashboardAction } from "@/store/slices/dashboard.slice";
import { validationSchemas } from "@/utils/validation";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

export default function DasboardPage() {
  const dispatch = useDispatch();
  const { defaultAddress = {}, registerSessionId = "" } = useAppSelector(
    (state) => state.user,
  );
  const {
    email,
    country,
    city,
    phone,
    region,
    address_2,
    address_1,
    first_name,
    last_name,
    postal_code,
  } = (defaultAddress || {}) as any;
  // inital values
  const initialValues = {
    first_name: first_name || "",
    last_name: last_name || "",
    email: email || "",
    country: country || "",
    address_1: address_1 || "",
    address2: address_2 || "",
    phone: phone || "",
    city: city || "",
    region: region || "",
    postal_code: postal_code || "",
    is_default: true,
  };

  // submit handler
  const onSubmit = async (values: any) => {
    const data = {
      user_id: registerSessionId,
      ...values,
    };
    await authService.updateUserProfile(data);
  };
  const formikProps = useFormik({
    validateOnBlur: false,
    initialValues,
    validationSchema: validationSchemas.accountInfo,
    onSubmit: onSubmit,
  });
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    submitCount,
    setFieldValue,
  } = formikProps;

  const handleMakeDefault = () => {
    setFieldValue("is_default", !values.is_default);
  };
  const isSubmitted = submitCount > 0;

  return (
    <div className="w-full">
      <div className="flex flex-col justify-between gap-5 lg:flex-row">
        {/* account form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col justify-between gap-5 lg:flex-row">
            <div className="w-full">
              <div className="mb-6 flex w-full items-center justify-between">
                <p className="mb-0 min-h-[41px] text-[18px] leading-[25px] font-normal text-[#473A3F]">
                  Account info
                </p>
              </div>
              <InputField
                name="first_name"
                value={values.first_name}
                error={
                  isSubmitted && errors.first_name && touched.first_name
                    ? errors.first_name
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Hamyd"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] outline-none placeholder:text-[#ADADAD]"
              />
              <InputField
                name="last_name"
                value={values.last_name}
                error={
                  isSubmitted && errors.last_name && touched.last_name
                    ? errors.last_name
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Kahn"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] outline-none placeholder:text-[#ADADAD]"
              />
              <InputField
                disabled={email ? true : false}
                name="email"
                value={values.email}
                error={
                  isSubmitted && errors.email && touched.email
                    ? errors.email
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="hamydkahn@gmail.com"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] outline-none placeholder:text-[#ADADAD]"
              />
              <div className="mt-3 flex justify-start gap-6">
                <div
                  onClick={() => handleMakeDefault()}
                  className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#FF519E]"
                >
                  <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#fff]">
                    <div
                      className={`h-[8px] w-[8px] rounded-full ${values.is_default ? "bg-[#FF519E]" : "bg-transparent"}`}
                    />
                  </div>
                </div>
                <p className="mb-0 text-[18px] leading-[25px] font-normal whitespace-nowrap text-[#473A3F]">
                  Make Default
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="mb-6 flex w-full items-center justify-between">
                <div className="hidden w-full items-center justify-end gap-2 md:flex">
                  <Button
                    type={"submit"}
                    text={"Save "}
                    className="rounded-[8px] bg-[#FD71AF] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] underline md:px-6 md:py-2 md:text-[18px]"
                  />
                </div>
              </div>
              <InputField
                name="address_1"
                value={values.address_1}
                error={
                  isSubmitted && errors.address_1 && touched.address_1
                    ? errors.address_1
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="88-F State Life Housing Society"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] outline-none placeholder:text-[#ADADAD]"
              />
              <InputField
                name="address2"
                value={values.address2}
                error={
                  isSubmitted && errors.address2 && touched.address2
                    ? errors.address2
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="88-F State Life Housing Society"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] outline-none placeholder:text-[#ADADAD]"
              />
              <div className="flex items-baseline justify-between gap-2">
                <div className="w-full max-w-[40%]">
                  <InputField
                    name="city"
                    value={values.city}
                    error={
                      isSubmitted && errors.city && touched.city
                        ? errors.city
                        : null
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Lahore"
                    className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] outline-none placeholder:text-[#ADADAD]"
                  />{" "}
                </div>
                <div className="w-full max-w-[40%]">
                  <InputField
                    name="region"
                    value={values.region}
                    error={
                      isSubmitted && errors.region && touched.region
                        ? errors.region
                        : null
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Punjab"
                    className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] outline-none placeholder:text-[#ADADAD]"
                  />{" "}
                </div>
                <div className="w-full max-w-[20%]">
                  <InputField
                    name="country"
                    disabled={true}
                    value={values.country || "UAE"}
                    error={
                      isSubmitted && errors.country && touched.country
                        ? errors.country
                        : null
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="PK"
                    className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] uppercase outline-none placeholder:text-[#ADADAD]"
                  />{" "}
                </div>
              </div>
              <InputField
                name="postal_code"
                value={values.postal_code}
                error={
                  isSubmitted && errors.postal_code && touched.postal_code
                    ? errors.postal_code
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Postal Code"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] outline-none placeholder:text-[#ADADAD]"
              />
              <InputField
                name="phone"
                value={values.phone}
                error={
                  isSubmitted && errors.phone && touched.phone
                    ? errors.phone
                    : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+92 324 9485627"
                className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#000] outline-none placeholder:text-[#ADADAD]"
              />{" "}
            </div>
          </div>
          <div className="flex w-full items-center justify-end gap-2 md:hidden">
            <Button
              type={"submit"}
              text={"Save "}
              className="mt-5 w-full rounded-[8px] bg-[#FD71AF] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] underline md:px-6 md:py-2 md:text-[18px]"
            />
          </div>
        </form>
      </div>
      <div className="mt-5 w-full max-w-[1140px]">
        <div className="mb-6 flex w-full items-center justify-between">
          <p className="mb-0 min-w-[150px] text-[18px] leading-[25px] font-normal text-[#473A3F]">
            Recent orders
          </p>
        </div>
        <RecentOrderTable />
      </div>
    </div>
  );
}
