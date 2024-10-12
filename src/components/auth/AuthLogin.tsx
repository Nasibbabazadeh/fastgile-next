"use client"
import CustomButton from "@/components/common/CustomButton"
import { authLoginService } from "@/services/authService"
import { useFormik } from "formik"
import Link from "next/link"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.min.css"
import CustomAuthInput from "../CustomAuthInput"
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
        <div className="max-w-[700px] w-full bg-[#F9F9F9] rounded-md border-l-[3px] border-l-orange-60 py-9 relative  flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-full px-11 flex flex-col gap-3">
                <h3 className="text-[46px] leading-[56px] text-[#171717] font-semibold mb-4">Daxil ol</h3>
                <CustomAuthInput id="email" htmlId="email" type="text" placeholder="Email ünvanı" {...formik.getFieldProps("email")} />
                <CustomAuthInput id="password" htmlId="password" type="password" placeholder="Şifrə" {...formik.getFieldProps("password")} />
                <div className="flex justify-between items-center relative ">
                    <CustomAuthInput type="checkbox" label="Məni yadda saxla" id="save-me" htmlId="save-me" className="w-10" />
                    <span className="right-3 text-orange-60 text-sm font-semibold border-b-[0.5px] border-orange-extra text-nowrap">
                        Şifrəmi unutmuşam
                    </span>
                </div>
                <CustomButton type="submit" disabled={!isValid || !dirty} className="px-10 py-4 rounded-md bg-orange-60 mt-6 ">
                    Daxil ol
                </CustomButton>
            </form>
            <div className="pt-5 flex gap-3 text-sm tracking-[0.3px] font-normal">
                <span>Hesabın yoxdur?</span>
                <Link href="/register">
                    <span className="text-[#007AFF]">Qeydiyyatdan keç</span>
                </Link>
            </div>
            <ToastContainer />
        </div>
    )
}
