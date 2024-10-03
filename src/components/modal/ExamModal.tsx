'use client'
import Link from 'next/link'
import CustomModal from '../common/CustomModal'

export default function ExamModal({ href }: any) {
    const userToken = false
    return (
        <>
            <CustomModal buttonContent="Başla" modalStyle="p-8">
                <div className="max-w-[700px] bg-white ">
                    <div className="w-[90%] mx-auto h-24 bg-[#f2f2f2] flex justify-center items-center  my-12 px-2">
                        <p className="text-center text-[#333] text-[18px] ">
                            Imtahan nəticənizin <strong className="text-[#06c] font-bold text-sm">&quot;Leadership board&quot;</strong> siyahısında
                            görünməyin istəyirsinizsə, qeydiyyatdan keçin.
                        </p>
                    </div>
                    {!userToken ? (
                        <div className="w-[90%] mx-auto flex justify-between">
                            <Link
                                href="/register"
                                className="px-10 py-4 rounded-[20px] bg-[#0072B1]  text-base text-white  text-nowrap hover:bg-extra-blue transition-all ease-linear sm:px-7"
                            >
                                Qeydiyyatdan keç
                            </Link>
                            <Link
                                href={href}
                                className="px-8 py-4 rounded-[20px] bg-gray-700  text-base text-white  text-nowrap hover:bg-gray-dark transition-all ease-linear sm:px-4"
                            >
                                Qeydiyyatsız imtahan ver
                            </Link>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center">
                            <Link href={href} className="px-12 py-4 rounded-[20px] bg-raging-leaf  text-md text-white  text-nowrap">
                                İmtahana başla
                            </Link>
                        </div>
                    )}
                </div>
            </CustomModal>
        </>
    )
}
