// "use client"

// import { ModalDialog, BaseModalDialogProps } from "./ModalDialog"
// import { useForm } from "react-hook-form"

// type FormData = {
//     title: string
// }

// export const NewResumeDialog = (props: BaseModalDialogProps) => {
//     const { control, handleSubmit } = useForm<FormData>()

//     const onSubmit = (data: FormData) => {
//         console.log(data)
//     }

//     return (
//         <ModalDialog
//             {...props}
//             title="Criar novo currículo"
//             description="Para começar, escolha um título para seu curriculo"
//             content={
//                 <form onSubmit={handleSubmit(onSubmit)}>

//                 </form>
//             }
//         />
//     )
// }