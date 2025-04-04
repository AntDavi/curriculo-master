import { FieldWrapper } from '@/components/FieldWrapper';
import { Controller, useFormContext } from 'react-hook-form';
import { TextEditor } from '@/components/TextEditor';

type EditorFieldProps = {
    label: string;
    name: string;
    containerClassName?: string;
    required?: boolean;
}

export const EditorField = ({ label, name, required, containerClassName, ...props }: EditorFieldProps) => {

    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: required && 'Campo obrigatório'
            }}
            render={({ field, fieldState }) => (
                <FieldWrapper label={label} className={containerClassName}>
                    <TextEditor {...field} {...props} />
                    {fieldState.error && (
                        <span className="text-red-400 text-sm">{fieldState.error.message}</span>
                    )}
                </FieldWrapper>
            )}
        />
    )
}