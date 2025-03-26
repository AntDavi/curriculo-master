import { ScrollText } from "lucide-react"
import { SectionTitle } from "../SectionTitle"
import { Controller, useFormContext } from "react-hook-form"
import { TextEditor } from "@/components/TextEditor"

export const SummarySection = () => {
    const { control } = useFormContext()

    return (
        <div>
            <SectionTitle title="Sobre Você" icon={ScrollText} />

            <Controller
                control={control}
                name="content.summary"
                render={({ field }) => (
                    <TextEditor {...field} className="min-h-[200px] max-h-[300px] mt-4" />
                )}
            />
        </div>
    )
}