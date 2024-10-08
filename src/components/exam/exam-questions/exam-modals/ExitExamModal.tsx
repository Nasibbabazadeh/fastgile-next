"use client"
import CustomButton from "@/components/common/CustomButton"
import CustomModal from "@/components/common/CustomModal"
import useUserAnswersStore from "@/store/useUserAnswers"
import { useRouter } from "next/navigation"

export default function ExitExamModal() {
    const router = useRouter()
    const resetUserAnswers = useUserAnswersStore().resetAnswers
    const handleExit = () => {
        resetUserAnswers()
        router.push("/")
    }
    return (
        <>
            <CustomModal
                variant="danger"
                buttonContent="İmtahandan çıx"
                modalStyle="h-[220px] shadow-exam-card bg-white rounded-xs p-10 relative"
                exitContent={"Xeyir"}
                exitStyle="absolute bottom-5 right-5"
                buttonStyle="py-1 px-2 text-xs sm:absolute sm:top-5"
                buttonSize="extra-small"
            >
                <div>
                    <h6 className="text-md font-bold">İmtahandan çıxmaq istədiyinizə əminsiniz?</h6>
                    <CustomButton variant="secondary" className="absolute left-5 bottom-5" onClick={handleExit}>
                        Bəli
                    </CustomButton>
                </div>
            </CustomModal>
        </>
    )
}
