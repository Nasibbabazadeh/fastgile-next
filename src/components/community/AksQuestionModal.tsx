import { CancelButton } from "@/assets"
import CustomButton from "@/components/common/CustomButton"
import * as React from "react"
import { toast } from "react-toastify"
import "react-toastify/ReactToastify.min.css"
import CustomModal from "../common/CustomModal"
import { askQuestion } from "@/services/communityService"
export default function AskQuestionModal() {
    const [descriptionValue, setDescriptionValue] = React.useState<string>("")
    const [titleValue, setTitleValue] = React.useState<string>("")

    const handleAskQuestion = (e: any) => {
        e.preventDefault()
        console.log(titleValue, descriptionValue)
        askQuestion(titleValue, descriptionValue)
    }
    return (
        <CustomModal
            buttonContent="Sual soruş"
            buttonStyle="flex items-center text-nowrap bg-[#FF6E14] shadow-none sm:text-[14px] sm:leading-4 sm:px-4"
            exitContent="X"
            modalStyle="w-[648px] bg-white p-10  h-full rounded-md relative z-50"
            exitStyle="absolute right-8 top-4 text-[24px] font-bold"
        >
            <form
                className="w-full px-[50px] mx-auto shadow-ask-question rounded-[20px] bg-orange-bg flex  items-center relative sm:px-2"
                onSubmit={handleAskQuestion}
            >
                <div className="w-full flex flex-col gap-7">
                    <label htmlFor="title" className="text-md font-semibold">
                        Başlıq*
                        <input
                            type="text"
                            id="title"
                            placeholder="Sualınızın başlığını yazın..."
                            className="w-full py-2 px-8  bg-orange-bg flex border-[1px] border-gray rounded-[8px]  placeholder:text-copyright placeholder:text-gray focus:outline-none mt-3"
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                        />
                    </label>
                    <textarea
                        className="w-full max-w-[549px]  h-[329px] py-7 px-[50px]  bg-orange-bg flex border-[1px] border-gray rounded-[20px] placeholder:text-copyright placeholder:text-gray focus:outline-none"
                        placeholder="Sualınızı yazın..."
                        onChange={(e) => setDescriptionValue(e.target.value)}
                        value={descriptionValue}
                    />
                    <CustomButton className="shadow-none">Göndər</CustomButton>
                </div>
            </form>
        </CustomModal>
    )
}
