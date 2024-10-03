'use client'

import CustomButton from '@/components/common/CustomButton'
import CustomModal from '@/components/common/CustomModal'

export default function ExitExamModal() {
    const handleExit = () => {}
    return (
        <>
            {/* <button className="rounded-[10px] border-b-4 border-b-[#D00000] py-2 px-4 bg-[#FB1230] hover:bg-red-600 transition-all ease-linear">
                <span className="font-bold  text-white"> İmtahandan çıx</span>
            </button> */}
            <CustomModal
                variant="danger"
                buttonContent="İmtahandan çıx"
                modalStyle="h-[220px] shadow-exam-card bg-white rounded-xs p-10 relative"
                exitContent={<CustomButton variant="secondary">Xeyir</CustomButton>}
                exitStyle="absolute bottom-5 right-5"
            >
                <div>
                    <h6 className="text-md font-bold">İmtahandan çıxmaq istədiyinizə əminsiniz?</h6>
                    <CustomButton variant="secondary" className="absolute left-5 bottom-5">
                        Bəli
                    </CustomButton>
                </div>
            </CustomModal>
        </>
    )
}
