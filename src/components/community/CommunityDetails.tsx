"use client"
import { QuestionVector, ReplyVector, RightArrowIcon } from "@/assets"
import CustomButton from "@/components/common/CustomButton"
import { getQuestionDetails, replyQuestionById } from "@/services/communityService"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.min.css"
import convertTimeFormat, { calculateTimeAgo } from "../../utils/calculateTimeAgo"

export default function CommunityDetails() {
    const { page: id, title }: any = useParams()
    const [replyValue, setReplyValue] = useState("")
    const decodedTitle = decodeURIComponent(title)
    const [response, setResponse] = useState<any>(null)
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data: any = await getQuestionDetails(id)
                setResponse(data)
            } catch (error) {
                console.error("Error fetching community details:", error)
            }
        }
        if (id) {
            fetchDetails()
        }
    }, [id])

    const handleReply = async () => {
        if (localStorage.getItem("userToken")) {
            try {
                await replyQuestionById(id, replyValue)
                const data = await getQuestionDetails(id)
                setResponse(data)
                setReplyValue("")
            } catch (error) {
                console.log(error)
            }
        } else toast.info("Sualı cavablamaq üçün hesabınıza daxil olun.")
    }

    if (response) {
        return (
            <div className="max-w-[1193px] mx-auto flex flex-col gap-12 sm:mx-5 md:mx-8 xl:mx-10 ">
                <section className="h-[155px] w-full flex flex-col items-end gap-6">
                    <div className="flex items-center">
                        <Link href="/community/0" className="text-md text-raging-leaf font-semibold">
                            Geri
                        </Link>
                        <RightArrowIcon alt="arrow-right" />
                    </div>
                    <div className="px-4 py-6 w-full h-[105px] shadow-community-dt-shadow rounded-md bg-white flex gap-4 items-center">
                        <div className="w-full max-w-[50px] h-[50px] border-[3px] border-avatar-border bg-[#EF9F48] rounded-[50%] bg-contain  bg-avatar-2 bg-no-repeat"></div>
                        <div className="flex flex-col gap-1 relative w-full">
                            <h6 className="text-xl text-text-color font-bold sm:text-md">
                                {response.ownerFirstName}
                                {response.ownerSurname}
                            </h6>
                            <span className="text-base text-[#979797] font-medium">
                                {calculateTimeAgo(response.createdDate, response.createdTime)}
                            </span>
                            <span className="text-base text-[#979797] font-medium">{convertTimeFormat(response.createdTime)}</span>
                        </div>
                    </div>
                </section>
                <section className="relative flex sm:flex-col">
                    <article className="flex flex-col gap-7 max-w-[640px] w-full ">
                        <h3 className="text-[30px] leading-9 text-text-color font-semibold sm:text-xl">{decodedTitle}</h3>
                        <div className="flex justify-between items-center px-4 py-6 max-w-[640px] shadow-exam-card rounded-md bg-white z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6">
                                    <QuestionVector alt="question-vector" />
                                </div>
                                <p className="leading-6 font-semibold text-wrap">{response.communityDescription}</p>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.4546 20.2727L19 12.6364L12.4546 5"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </article>
                    <div className="flex flex-col gap-8  max-w-[647px] w-full">
                        <div className="shadow-question-reply-shadow  bg-[#FFF7F3] rounded-md pl-[100px] py-10 flex flex-col gap-8 sm:pl-10">
                            <span className="leading-7 font-medium text-raging-leaf">{response.replyCount} Cavab</span>
                            {response.communityReplyList &&
                                response.communityReplyList.map((data: any, index: number) => {
                                    return (
                                        <div className="max-w-[501px] flex gap-4" key={index}>
                                            <div className="w-[50px] h-[50px] border-[3px] border-avatar-border bg-[#EF9F48] rounded-[50%] bg-contain bg-avatar-2 bg-no-repeat"></div>
                                            <div className="max-w-[445px] flex flex-col gap-[10px]">
                                                <div className="flex gap-2 items-center">
                                                    <h6 className="text-base font-semibold ">{`${data.firstName} ${data.surname}`}</h6>
                                                    <span className="text-[10px] font-normal text-bg-secondary">
                                                        {calculateTimeAgo(data.createdDate, data.createdTime)}
                                                    </span>
                                                </div>
                                                <p>{data.description}</p>
                                                <button className="flex gap-2 items-center">
                                                    <ReplyVector alt="reply-vector" />
                                                    <span>Cavabla</span>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>

                        <section className="flex flex-col gap-4 items-end">
                            <div className="flex items-center gap-[15px] w-full">
                                <div className="w-full max-w-[50px] h-[50px] border-[3px] border-avatar-border bg-[#EF9F48] rounded-[50%] bg-contain  bg-avatar-2 bg-no-repeat"></div>
                                <input
                                    type="text"
                                    id="reply"
                                    name="reply"
                                    className="w-full py-2 px-3 border-b-2 border-b-[#171717] border-opacity-50 focus:outline-none"
                                    placeholder="Cavab yaz..."
                                    value={replyValue}
                                    onChange={(e) => setReplyValue(e.target.value)}
                                />
                            </div>
                            <CustomButton size="small" className=" bg-raging-leaf flex justify-center items-center py-3" onClick={handleReply}>
                                Göndər
                            </CustomButton>
                        </section>
                    </div>
                </section>
                <ToastContainer />
            </div>
        )
    }
}
