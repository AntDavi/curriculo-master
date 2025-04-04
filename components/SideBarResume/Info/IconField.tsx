import { FieldWrapper } from '@/components/FieldWrapper';
import { Controller, useFormContext } from 'react-hook-form';
import { IconInput } from '@/components/IconInput';

type IconFieldProps = {
    label: string;
    name: string;
    containerClassName?: string;
    required?: boolean;
}

export const IconField = ({ label, name, required, containerClassName, ...props }: IconFieldProps) => {

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
                    <IconInput {...field} {...props} />
                    {fieldState.error && (
                        <span className="text-red-400 text-sm">{fieldState.error.message}</span>
                    )}
                </FieldWrapper>
            )}
        />
    )
}