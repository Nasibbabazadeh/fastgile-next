"use client"
import CustomButton from "@/components/common/CustomButton"
import AuthRegisterService from "@/services/authService"
import { useFormik } from "formik"
import Link from "next/link"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.min.css"
import CustomAuthInput from "../CustomAuthInput"
import { RegisterSchema } from "./schema"
export default function AuthRegister() {
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            nickname: "",
            email: "",
            password: "",
            confirmPassword: "",
            terms: false,
            remember: false,
        },
        onSubmit: async (values) => {
            const response = await AuthRegisterService(values)
            // response.message === "Successfully" ? ro
        },
        validationSchema: RegisterSchema,
        validateOnChange: true,
    })
    const { handleSubmit, errors, touched, dirty, isValid } = formik

    return (
        <div className="max-w-[700px] xl:max-w-[620px]  w-full bg-[#F9F9F9] rounded-md border-l-[3px] border-l-orange-60 py-8 relative flex flex-col items-center sm:border-none">
            <form onSubmit={handleSubmit} className="w-full px-8 flex flex-col gap-4 sm:gap-[18px] sm:px-4">
                <h3 className="text-[47px] leading-[56px] text-[#171717] font-semibold mb-3 sm:text-header5 sm:text-center sm:text-xl-3">
                    Qeydiyyat
                </h3>
                <div className="flex justify-between sm:flex-col sm:gap-[18px]">
                    <CustomAuthInput
                        id="name"
                        htmlId="name"
                        type="text"
                        placeholder="Ad"
                        error={touched.name && errors.name}
                        {...formik.getFieldProps("name")}
                    />
                    <CustomAuthInput
                        id="surname"
                        htmlId="surname"
                        type="text"
                        placeholder="Soyad"
                        error={touched.surname && errors.surname}
                        {...formik.getFieldProps("surname")}
                    />
                </div>
                <div className="flex  sm:flex-col sm:gap-[18px]">
                    <CustomAuthInput
                        id="nickname"
                        htmlId="nickname"
                        type="text"
                        placeholder="Nickname"
                        error={touched.nickname && errors.nickname}
                        {...formik.getFieldProps("nickname")}
                    />
                    <CustomAuthInput
                        id="email"
                        htmlId="email"
                        type="email"
                        placeholder="Email address"
                        error={touched.email && errors.email}
                        {...formik.getFieldProps("email")}
                    />
                </div>
                <div className="flex  sm:flex-col sm:gap-[18px]">
                    <CustomAuthInput
                        id="password"
                        htmlId="password"
                        type="password"
                        placeholder="Şifrə"
                        error={touched.password && errors.password}
                        {...formik.getFieldProps("password")}
                    />
                    <CustomAuthInput
                        id="confirmPassword"
                        htmlId="confirmPassword"
                        type="password"
                        placeholder="Şifrəni təkrar daxil et"
                        error={touched.confirmPassword && errors.confirmPassword}
                        {...formik.getFieldProps("confirmPassword")}
                    />
                </div>
                <div className="flex flex-col items-start gap-2 ">
                    <div className="flex items-center">
                        <CustomAuthInput
                            type="checkbox"
                            htmlId="remember"
                            id="remember"
                            label="Məni yadda saxla"
                            {...formik.getFieldProps("remember")}
                        />
                    </div>
                    <div className="flex items-center">
                        <CustomAuthInput type="checkbox" htmlId="terms" id="terms" className="text-nowrap" {...formik.getFieldProps("terms")} />
                        <label htmlFor="terms" className="text-nowrap text-sm2 text-black-[#222222]">
                            <span className="text-[#FF0000]"> Şəxsi məlumatlarımın emalı</span> ilə razıyam
                        </label>
                    </div>
                </div>
                <CustomButton type="submit" disabled={!isValid || !dirty} className="mt-2 sm:text-md">
                    Qeydiyyatdan keç
                </CustomButton>
            </form>
            <div className="pt-2 flex gap-3  text-sm tracking-[0.3px] font-normal">
                <span>Hesabın var?</span>
                <Link href="/login">
                    <span className="text-[#007AFF] mt-2">Daxil ol</span>
                </Link>
                <ToastContainer />
            </div>
        </div>
    )
}
