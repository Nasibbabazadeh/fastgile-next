'use client'
import CustomButton from '@/components/common/CustomButton'
import CustomModal from '@/components/common/CustomModal'
import getResultData from '@/services/resultDataService'
import useUserAnswersStore from '@/store/useUserAnswers'
import { useRouter } from 'next/navigation'
import { TExamData } from '../../type'

export default function EndExamModal({ examData }: { examData: TExamData[] }) {
    const userAnswers = useUserAnswersStore().userAnswers
    const router = useRouter()
    const userAnswersCount = Object.keys(userAnswers).length
    const resultHandle = async () => {
        const data = await getResultData(userAnswers, examData)
        localStorage.setItem('exam-result-data', JSON.stringify(data))
        router.push('./result')
    }
    return (
        <CustomModal
            buttonContent="İmtahanı bitir"
            variant="danger"
            buttonStyle="py-2 px-4 text-sm"
            modalStyle="h-[300px] shadow-exam-card bg-white rounded-xs p-10 relative flex flex-col justify-between items-center"
            exitContent="Xeyir"
            exitStyle="w-28 h-12"
        >
            {userAnswersCount < examData.length ? (
                <>
                    <h5 className="text-md font-medium">Bütün suallara cavab verməmisiniz. Hələ də bitirmək istəyirsiniz?</h5>
                    <CustomButton variant="danger" size="small" className="w-28 h-12" onClick={resultHandle}>
                        Bəli
                    </CustomButton>
                </>
            ) : (
                <div>yes end</div>
            )}
        </CustomModal>
    )
}
