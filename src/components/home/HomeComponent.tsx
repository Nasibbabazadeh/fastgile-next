import { ArrowToTop } from '@/assets'
import CustomButton from '@/components/common/CustomButton'
import ExamModal from '@/components/modal/ExamModal'
import Image from 'next/image'
export default function HomeComponent() {
    return (
        <div className="flex flex-col gap-18 max-w-[1350px] h-full mx-auto mb-28 relative">
            {/* First Section */}
            <section className="flex max-w-[1084px] w-full mx-auto justify-between md:flex-col md:max-w-[95%] items-center gap-12 sm:flex-col sm:items-center sm:w-[100%] my-12">
                <article className="flex flex-col gap-[57px] items-start max-w-[474px] md:w-full md:items-center sm:w-full sm:items-center">
                    <div className="flex flex-col gap-9">
                        <h2 className="text-[64px] leading-[76px] font-medium text-black-light text-nowrap xl:text-header2 md:text-center sm:text-center sm:text-[48px]">
                            Xoş Gəldiniz!
                        </h2>
                        <p className="text-[32px] leading-[38px] text-gray-30">
                            Peşəkar Scrum Master I (Professional Scrum Master I) sınaq imtahanından keçmək üçün aşağıdakı linkə keçid edin.
                        </p>
                        <div className="flex gap-5 items-center">
                            <div className="h-[46px] border-l-[3px] border-orange-60 rounded-sm"></div>
                            <span className="text-lg-2 text-[#828282] leading-7">Əlavə məlumat</span>
                        </div>
                    </div>
                    <a href="#begin-exam">
                        <CustomButton
                            className="px-10 py-4 rounded-[20px] bg-button-gradient"
                            // textStyle="text-xxl text-white text-nowrap"
                        >
                            Sınaq İmtahanı
                        </CustomButton>
                    </a>
                </article>
                <Image src="/static/home-illustration.svg" alt="Welcome illustration" width={500} height={500} />
            </section>

            {/* Second Section */}
            <div className="flex flex-col items-center gap-[120px] md:items-center md:gap-20 sm:gap-14" id="begin-exam">
                <article>
                    <h3 className="text-[45px] leading-[60px] text-center ">
                        <span>Sınaq imtahanı</span> <br />
                        <span className="text-orange-60 font-medium">çətinlik dərəcəsi</span> üzrə <br />
                        <span>aşağıdakı kimi iki səviyyədən ibarətdir:</span>
                    </h3>
                </article>

                {/* Third Section */}
                <section className="flex max-w-[812px] justify-between sm:flex-col sm:gap-14">
                    <article className="flex flex-col gap-8 w-[42%] items-center text-center xl:w-[35%] md:w-[50%] sm:w-full">
                        <div className="py-3 pl-8 pr-5 rounded-[50%] bg-[#FFECE0] shadow-dot-shadow">
                            <span className="text-gray-90 text-[48px] leading-[56px] font-bold">1</span>
                            <span className="text-orange-60 text-[54px] leading-[64px] relative right-1">.</span>
                        </div>
                        <h5 className="font-bold text-[30px] leading-9 text-gray-90 text-nowrap">Başlanğıc səviyyə</h5>
                        <p className="text-xl-2 text-[#828282] md:text-lg">
                            Sınaq imtahanı <span className="text-orange-60">20 sualdan</span> ibarətdir və imtahanı bitirmək üçün
                            <span className="text-orange-60"> 30 dəqiqə</span> vaxtınız var.
                        </p>
                        <ExamModal href="/exam/simple/0" />
                    </article>
                    <article className="flex flex-col items-center w-[42%] gap-8 text-center xl:w-[35%] md:w-[50%] sm:w-full">
                        <div className="py-3 pl-8 pr-5  rounded-[50%] bg-[#FFECE0] shadow-dot-shadow ">
                            <span className="text-gray-90 text-[48px] leading-[56px] font-bold">2</span>
                            <span className="text-orange-60 text-[54px] leading-[64px] relative">.</span>
                        </div>
                        <h5 className="font-bold text-[30px] leading-9 text-gray-90 text-nowrap">Üstün səviyyə</h5>
                        <p className="text-xl-2 text-[#828282]  md:text-lg">
                            Sınaq imtahanı <span className="text-orange-60">10 sualdan</span> ibarətdir və imtahanı bitirmək üçün
                            <span className="text-orange-60"> 30 dəqiqə</span> vaxtınız var.
                        </p>
                        <ExamModal href="/exam/hard/0" />
                    </article>
                </section>
            </div>
            <a href="#top" className="absolute right-5 bottom-16 p-5 rounded-md border-[3px]  border-orange-60 w-[75px] ">
                <ArrowToTop />
                <ArrowToTop />
            </a>
        </div>
    )
}
