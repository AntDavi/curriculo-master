import { BaseModalDialogProps, ModalDialog } from "@/components/ModalDialog"
import { MultipleDragItemData } from "./MultipleDragList"
import { FormProvider, useForm } from "react-hook-form"
import { Fragment, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { formConfig } from "@/@types/multipledialog"
import { cn } from "@/lib/utils"
import { InputField } from "@/components/InputField"
import { EditorField } from "./EditorField"
import { IconField } from "./IconField"

type ManageMultipleItemDialogProps = BaseModalDialogProps & {
    data: MultipleDragItemData
}

export const ManageMultipleDialog = ({ data, open, setOpen }: ManageMultipleItemDialogProps) => {
    const methods = useForm();

    const onSubmit = (formData: any) => {
        console.log(formData);
    }

    const formContent = useMemo(() => {
        const config = formConfig[data.formKey]
        return config.map((field, index) => {

            const fieldType = field?.fieldType ?? "text";
            const isFullWidth = !!field?.fullWidth;

            const inputProps = {
                name: field.key,
                label: field.label,
                containerClassName: cn(isFullWidth && "col-span-full"),
                required: field.required,
                placeholder: field.placeholder,
                type: field.type,
                className: field.className,
            }

            return (
                <Fragment key={index}>
                    {fieldType === "text" && <InputField {...inputProps} />}
                    {fieldType === "editor" && <EditorField {...inputProps} />}
                    {fieldType === "icon" && <IconField {...inputProps} />}
                </Fragment>
            )
        })

    }, [data.formKey])

    return (
        <ModalDialog
            title="Adicionar um Novo Item"
            description="Adicione um novo item"
            open={open}
            setOpen={setOpen}
            content={
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="flex flex-col mt-2"
                >
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <FormProvider {...methods}>
                            {formContent}
                        </FormProvider>
                    </div>

                    <div className="ml-auto flex gap-3">
                        <Button type="submit" className="w-max">
                            Adicionar
                        </Button>
                    </div>
                </form>
            }
        />
    )
}