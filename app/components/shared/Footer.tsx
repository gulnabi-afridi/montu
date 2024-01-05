import Link from "next/link"
import Image from "next/image"
export default function Footer() {
    return (
        <div className="bg-[--blackColor] flex items-center py-[3rem]">
            <div className="container justify-between md:items-center flex-col md:flex-row gap-[2rem]">
                <div className="flex flex-col sm:flex-row gap-[1.5rem] sm:gap-[3rem] items-start">
                    <div className="flex flex-col gap-[10px]">
                        <Link href="/">
                            <Image src="/images/logo1.png" width={200} height={50} alt="logo" />
                        </Link>
                        <p className="text-[16px] font-[600] leading-[20px] text-white">hola@montu.io</p>
                    </div>
                    <div className="flex flex-col gap-[1.5rem]">
                        <Link href="/" className="text-[16px] font-[600] leading-[20px] text-white">Home</Link>
                        <Link href="/influencers" className="text-[16px] font-[600] leading-[20px] text-white">Influencers</Link>
                    </div>
                    <div className="flex flex-col gap-[1.5rem]">
                        <Link href="" className="text-[16px] font-[600] leading-[20px] text-white">Términos y Condiciones</Link>
                        <Link href="" className="text-[16px] font-[600] leading-[20px] text-white">Política de Privacidad</Link>
                    </div>
                </div>
                <div className="flex gap-[2rem]">
                    <Image src="/images/Instagram.png" width={50} height={50} alt="" />
                    <Image src="/images/TikTok.png" width={50} height={50} alt="" />
                </div>
            </div>
        </div>
    )
}
