import Link from 'next/link'

interface CommunityNavProps {
    next: string
    prev: string
    isPrevDisabled: boolean
    isNextDisabled: boolean
}

export default function CommunityNav({ next, prev, isPrevDisabled, isNextDisabled }: CommunityNavProps) {
    return (
        <div className="flex gap-3 items-center">
            {isPrevDisabled ? (
                <div className="cursor-pointer p-[6px] rounded-[50px] border-gray-60 border-[1px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" className="opacity-50">
                        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                    </svg>
                </div>
            ) : (
                <Link href={prev} className="cursor-pointer p-[6px] rounded-[50px] border-text-color border-[1px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" className="cursor-pointer">
                        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                    </svg>
                </Link>
            )}

            {isNextDisabled ? (
                <div className="cursor-pointer p-[6px] rounded-[50px] border-gray-60 border-[1px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" className="opacity-50">
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                </div>
            ) : (
                <Link href={next} className="cursor-pointer p-[6px] rounded-[50px] border-text-color border-[1px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" className="cursor-pointer">
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                </Link>
            )}
        </div>
    )
}
