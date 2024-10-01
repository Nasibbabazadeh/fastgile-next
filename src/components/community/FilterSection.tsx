import { SearchIcon } from '@/assets'
import CustomButton from '../common/CustomButton'
import CustomInput from '../common/CustomInput'

export default function FilterSection() {
    return (
        <section className="max-w-[1184px] mx-auto flex justify-between my-16">
            <form action="">
                <input placeholder="Axtar" className=" border-none py-4 px-5" />
                <button>
                    <SearchIcon />
                </button>
            </form>
            <CustomButton>Sual Soruş</CustomButton>
        </section>
    )
}
