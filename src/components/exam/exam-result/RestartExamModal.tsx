"use client"
import CustomButton from "@/components/common/CustomButton"
import CustomModal from "@/components/common/CustomModal"
import useUserAnswersStore from "@/store/useUserAnswers"
import { useRouter } from "next/navigation"

export default function RestartExamModal() {
    const router = useRouter()
    const resetUserAnswers = useUserAnswersStore().resetAnswers
    const handleReset = () => {
        resetUserAnswers()
        localStorage.removeItem("exam-result-data")
        router.push("./0")
    }
    return (
        <>
            <CustomModal
                variant="exam"
                buttonContent="İmtahana yenidən başla"
                modalStyle="h-[220px] shadow-exam-card bg-white rounded-xs p-10 relative"
                exitContent={"Xeyir"}
                exitStyle="absolute bottom-5 right-5"
            >
                <div>
                    <h6 className="text-md font-bold">Məlumatlarınız silinəcək. Əminsiniz?</h6>
                    <CustomButton variant="exam" size="xs" className="absolute left-5 bottom-5" onClick={handleReset}>
                        Bəli
                    </CustomButton>
                </div>
            </CustomModal>
        </>
    )
}
