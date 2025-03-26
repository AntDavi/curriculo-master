import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type ToltipFieldProps = {
    children: React.ReactNode;
    content: string | React.ReactNode | number;
}

export const ToltipField = ({ children, content }: ToltipFieldProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={300}>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}