import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export type BaseModalDialogProps = {
    children?: React.ReactNode;
    open?: boolean;
    setOpen?: (open: boolean) => void;
}

type ModalDialogProps = BaseModalDialogProps & {
    title: string;
    description: string;
    content: React.ReactNode;
}

export const ModalDialog = ({ children, title, description, content, open, setOpen }: ModalDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {children && (
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
            )}

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>

                    {description && <DialogDescription> {description} </DialogDescription>}
                </DialogHeader>

                {content}
            </DialogContent>
        </Dialog>
    )
}
