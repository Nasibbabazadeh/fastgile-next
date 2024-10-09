"use client"
import CustomAuthInput from "../CustomAuthInput"
import CustomButton from "@/components/common/CustomButton"
import { authLoginService } from "@/services/authService"
import { useFormik } from "formik"
import Link from "next/link"
import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.min.css"
export default function AuthLogin() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            authLoginService(values)
        },
        validateOnChange: true,
    })
    const { handleSubmit, dirty, isValid } = formik
    return (
        <div className="w-full bg-gray-white rounded-[20px] border-l-[3px] border-l-orange-light py-9 relative  flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-full px-11 flex flex-col gap-3">
                <h3 className="text-header7 text-black-light  font-semibold mb-4">Daxil ol</h3>
                <CustomAuthInput id="email" htmlId="email" type="text" placeholder="Email ünvanı" {...formik.getFieldProps("email")} />
                <CustomAuthInput id="password" htmlId="password" type="password" placeholder="Şifrə" {...formik.getFieldProps("password")} />
                <div className="flex items-center relative ">
                    <CustomAuthInput type="checkbox" label="Məni yadda saxla" id="save-me" htmlId="save-me" />
                    <span className="absolute right-3 text-orange-light text-sm font-semibold border-b-[0.5px] border-orange-extra">
                        Şifrəmi unutmuşam
                    </span>
                </div>
                <CustomButton type="submit" disabled={!isValid || !dirty} className="px-10 py-4 rounded-[20px] bg-orange-light mt-6 ">
                    Daxil ol
                </CustomButton>
            </form>
            <div className="pt-5 flex gap-3 text-sm tracking-[0.3px] font-normal">
                <span>Hesabın yoxdur?</span>
                <Link href="/register">
                    <span className="text-extra-blue  ">Qeydiyyatdan keç</span>
                </Link>
            </div>
            <ToastContainer />
        </div>
    )
}
