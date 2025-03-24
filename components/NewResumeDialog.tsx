"use client"

import { InputField } from "./InputField"
import { ModalDialog, BaseModalDialogProps } from "./ModalDialog"
import { FormProvider, useForm } from "react-hook-form"
import { Button } from "./ui/button"

type FormData = {
    title: string
}

export const NewResumeDialog = (props: BaseModalDialogProps) => {
    const methods = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <ModalDialog
            {...props}
            title="Criar novo currículo"
            description="Para começar, escolha um título para seu curriculo"
            content={
                <FormProvider {...methods}>
                    <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
                        <InputField label="Título" name="title" required />
                        <Button type="submit" className="w-max mt-6 ml-auto">
                            Criar
                        </Button>
                    </form>
                </FormProvider>
            }
        />
    )
}