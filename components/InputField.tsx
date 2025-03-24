import { ComponentProps } from 'react';
import { Input } from './ui/input';
import { Controller, useFormContext } from 'react-hook-form';
import { FieldWrapper } from './FieldWrapper';

type InputFieldProps = ComponentProps<typeof Input> & {
    label: string;
    name: string;
}

export const InputField = ({ label, name, required, ...props }: InputFieldProps) => {

    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: required && 'Campo obrigatório'
            }}
            render={({ field, fieldState }) => (
                <FieldWrapper label={label}>
                    <Input
                        {...field}
                        {...props}
                    />
                    {fieldState.error && (
                        <span className="text-red-400 text-sm">{fieldState.error.message}</span>
                    )}
                </FieldWrapper>
            )}
        />
    )
}