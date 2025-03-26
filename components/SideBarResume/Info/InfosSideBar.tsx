import Link from "next/link"
import Logo from '@/public/logo.svg'
import { AiGenerationBtn } from "./AiGenerationBtn"
import { Separator } from "../../ui/separator"
import { BasicInfoSection } from "./BasicInfoSection"
import { SummarySection } from "./SummarySection"

export const InfosSideBar = () => {
    return (
        <aside className="w-full h-full p-6 overflow-y-auto">
            <div className="w-full flex items-center justify-between">
                <Link href="/dashboard/resumes">
                    <Logo className="w-full max-w-[100px]" />
                </Link>
                <AiGenerationBtn />
            </div>

            <Separator className="my-5" />

            <BasicInfoSection />

            <Separator className="my-5" />

            <SummarySection />
        </aside>
    )
}