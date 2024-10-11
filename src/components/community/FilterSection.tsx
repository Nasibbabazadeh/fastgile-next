"use client"
import { SearchIcon } from "@/assets"
import CustomButton from "../common/CustomButton"
import { filterHandle } from "@/services/communityService"
import { useState, useCallback } from "react"
import { TCommunityData } from "./CommunityComponent"
import convertTimeFormat, { calculateTimeAgo } from "@/utils/calculateTimeAgo"
import { useFilterStore } from "@/store/useFilteredQuestiosStore"
import AskQuestionModal from "./AksQuestionModal"

export default function FilterSection() {
    const [searchTerm, setSearchTerm] = useState("")
    const { setFilterData } = useFilterStore()
    const setTermHandler = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault()
            const term = new URLSearchParams()
            term.append("term", searchTerm)
            const data = await filterHandle(term)
            setFilterData(data)
        },
        [searchTerm]
    )
    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }, [])

    return (
        <>
            <section className="max-w-[1184px] mx-auto flex justify-between my-16 h-[51px]">
                <form className="w-[68%] relative" onSubmit={setTermHandler}>
                    <input
                        placeholder="Axtar"
                        className="w-full border-2 border-[#D0D0E3] py-3 px-5 focus:outline-none rounded-sm"
                        onChange={handleSearchChange}
                        value={searchTerm}
                    />
                    <button type="submit" className="absolute right-2 top-2">
                        <SearchIcon />
                    </button>
                </form>
                <AskQuestionModal />
            </section>
        </>
    )
}
