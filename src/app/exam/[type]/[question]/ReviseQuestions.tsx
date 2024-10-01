'use client'
import { DoubleArrowRight, FlagIcon } from '@/assets'

export default function ReviseQuestions() {
    return (
        <div className="flex justify-center">
            <button
                className="py-3 px-4 border-x-[1px] border-b-4 border-t-[1px] border-orange-light rounded-[10px] flex items-center gap-2 mr-[5px]"
                // onClick={handleSelectedQuestions}
            >
                <FlagIcon alt="flag-choosen-questions" />
                <span className="text-text2 text-raging-leaf font-medium">İşarələnmiş Suallar</span>
            </button>
            <button
                className="px-8 py-3 border-x-[1px] border-b-4 border-t-[1px] border-orange-light rounded-[10px] flex items-center gap-2 ml-[5px]"
                // onClick={handleAllQuestionsUI}
            >
                <span className="text-text2 text-raging-leaf font-medium py-1">Bütün Suallar</span>
                <DoubleArrowRight alt="all-questions-arrow" />
            </button>
        </div>
    )
}
