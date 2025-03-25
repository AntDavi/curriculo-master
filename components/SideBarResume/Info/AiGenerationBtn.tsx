import { Bot } from "lucide-react"
import { Button } from "../../ui/button"

export const AiGenerationBtn = () => {
    return (
        <Button className="gap-2 text-xs px-2.5 py-1 h-9">
            <Bot size={20} />
            Inteligencia Artificial
        </Button>
    )
}