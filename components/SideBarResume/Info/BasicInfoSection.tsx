import { UserRound } from "lucide-react"
import { SectionTitle } from "../SectionTitle"
import { InputField } from "@/components/InputField"
import { SwitchField } from "@/components/SwitchField"

export const BasicInfoSection = () => {
    return (
        <div>
            <SectionTitle icon={UserRound} title="Informações Básicas" />

            <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                <div className="col-span-full w-full flex gap-3 items-end">
                    <InputField label="Foto" placeholder="https://" name="content.image.url" containerClassName="flex-1" />
                    <SwitchField name="content.image.visible" className="mb-2" />
                </div>

                <InputField label="Nome Completo" name="content.infos.fullName" />
                <InputField label="Cabeçalho" name="content.infos.headline" />
                <InputField label="Email" name="content.infos.email" />
                <InputField label="Site" name="content.infos.website" />
                <InputField label="Telefone" name="content.infos.phone" />
                <InputField label="Localização" name="content.infos.location" />
            </div>
        </div>
    )
}