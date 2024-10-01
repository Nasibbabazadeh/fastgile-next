import { BriefCaseVector, LinkedinVector, LocationVector, ProfileUserVector } from '@/assets'
import Image from 'next/image'
export default function AboutPage() {
    return (
        <div>
            <div className="my-12 pb-40  flex flex-col gap-[100px] bg-raging-leaf bg-no-repeat bg-[linear-gradient(white,white)] bg-[length:100%_25%]">
                <section className="max-w-[1311px] w-full py-[80px] px-[105px] mx-auto shadow-resouce-card bg-white rounded-md border-none flex justify-between items-center">
                    <article className="flex flex-col gap-7 w-[436px]">
                        <div>
                            <h6 className="text-raging-leaf text-text2">BİZ KİMİK?</h6>
                            <h3 className="text-[60px] leading-[72px] font-medium">Haqqımızda</h3>
                        </div>
                        <p className="text-md w-[418px]">
                            Fastgile, çevik metodologiyalar və məhsul inkişafını öyrətmək məqsədilə yaradılmışdır. Biz, çevik təlimlər və işçi
                            qruplarının inkişafı ilə bağlı maarifləndirici fəaliyyətlər həyata keçiririk. Məqsədimiz, çevik yanaşmaların iş
                            proseslərinə və məhsul keyfiyyətinə necə təsir etdiyini insanlara çatdırmaqdır.
                        </p>
                    </article>
                    <Image src="/static/about-image.jpg" alt="about-img" width={540} height={357} />
                </section>
                <hr className="w-full text-white text-opacity-50" />
                <section className="flex flex-col gap-8 max-w-[1240px] mx-auto w-full text-pretty ">
                    <div className="flex justify-between">
                        <article className="flex gap-10 ">
                            <p className="text-[120px] w-[67px] leading-[110px] font-semibold text-white-secondary text-opacity-50">1</p>
                            <div className="flex flex-col gap-3 text-white">
                                <h3 className="text-[36px] w-[67px] leading-[43px] font-semibold">Missiyamız</h3>
                                <p className="text-md w-[418px]">
                                    Azərbaycanda agile sahəsində şirkətləri və fərdləri maarifləndirərək, daha məhsuldar komandalara və müştəri
                                    yönümlü şirkətlərə çevrilmələrinə kömək etməkdir.
                                </p>
                            </div>
                        </article>
                        <article className="flex gap-10 ">
                            <p className="text-[120px] leading-[110px] w-[67px] font-semibold text-white-secondary text-opacity-50">2</p>
                            <div className="flex flex-col gap-3 text-white">
                                <h3 className="text-[36px] leading-[43px] font-semibold">Vizyonumuz</h3>
                                <p className="text-md w-[418px]">
                                    Bizim vizyonumuz, Azərbaycanda agile metodologiyalarının geniş yayılmasını təmin edərək, təşkilatların və
                                    fərdlərin daha çevik, effektiv və yenilikçi olmalarına dəstək verməkdir. Hədəfimiz, ölkəmizdə çevik yanaşmaların
                                    tətbiqi ilə məhsuldarlığı və iş keyfiyyətini artırmaq və bu sahədə lider olmaqdır.
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="flex justify-between items-end">
                        <article className="flex gap-10 ">
                            <p className="text-[120px] w-[67px] leading-[110px] font-semibold text-white-secondary text-opacity-50">3</p>
                            <div className="flex flex-col gap-3 text-white">
                                <h3 className="text-[36px] leading-[43px] font-semibold">Missiyamız</h3>
                                <p className="text-md w-[418px]">
                                    Azərbaycanda agile sahəsində şirkətləri və fərdləri maarifləndirərək, daha məhsuldar komandalara və müştəri
                                    yönümlü şirkətlərə çevrilmələrinə kömək etməkdir.
                                </p>
                            </div>
                        </article>
                        <article className="flex flex-col gap-4 text-white w-[418px]">
                            <h6 className="text-xl font-semibold ">Bizimlə əlaqəyə keç:</h6>
                            <ul className="flex flex-col gap-3 items-start w-[918px] sm:w-[360px]">
                                <li className="flex items-center gap-3">
                                    <LinkedinVector color="white" alt="linkedin" />
                                    <a href="https://www.linkedin.com/in/fehruzjabrayilov/" className="text-md underline sm:text-balance">
                                        Connect Fehruz Jabrayilov on LinkedIn
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <LinkedinVector color="white" alt="linkedin" />
                                    <a href="https://www.linkedin.com/company/fastgileorg/posts/" className="text-md underline">
                                        Connect Fastgile on LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
            <section className="grid grid-cols-3 gap-5 max-w-[1159px] mx-auto sm:grid-cols-1 md:grid-cols-2">
                <article className="border-[1px] border-[#DFDFDF] rounded-lg flex flex-col gap-4 p-8">
                    <div className="flex items-center gap-[14px] text-[22px] leading-9 font-medium">
                        <BriefCaseVector alt="brief-case" />
                        <h6>Haqqımızda</h6>
                    </div>
                    <p className="text-sm text-[#585858]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard.
                    </p>
                </article>
                <article className="border-[1px] border-[#DFDFDF] rounded-lg flex flex-col gap-4 p-8">
                    <div className="flex items-center gap-[14px] text-[22px] leading-9 font-medium">
                        <LocationVector alt="location" />
                        <h6>Missiyamız</h6>
                    </div>
                    <p className="text-sm text-[#585858]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis soluta distinctio eos repellat accusantium minima itaque.
                        Architecto.
                    </p>
                </article>
                <article className="border-[1px] border-[#DFDFDF] rounded-lg flex flex-col  p-8 gap-4">
                    <div className="flex items-center gap-[14px] text-[22px] leading-9 font-medium">
                        <ProfileUserVector alt="profile-users" />
                        <h6>Vizyonumuz</h6>
                    </div>
                    <p className="text-sm text-[#585858]">
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true
                        generator on the Internet.
                    </p>
                </article>
            </section>
        </div>
    )
}
