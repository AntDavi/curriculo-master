import { Plus } from "lucide-react"
import { ResumeCardButton } from "./ResumeCard"


export const AddResumeButton = () => {
    return (
        <ResumeCardButton
            title="Adicionar novo curriculo"
            description="Comece do zero"
            icon={<Plus size={50} />}
        />
    )
}