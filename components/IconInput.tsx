import Image from "next/image";
import { Input } from "./ui/input"

type IconInputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const IconInput = ({ value, onChange, placeholder }: IconInputProps) => {
    return (
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 min-h-8 rounded-full bg-white p-1.5">
                {value.toLowerCase() === "linkedin" ? (
                    <Image
                        src="/linkedin.png"
                        width={16}
                        height={16}
                        alt="LinkedIn"
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <img
                        src={`https://cdn.simpleicons.org/${value}`}
                        alt={value}
                        className="w-full h-full object-contain"
                    />
                )}

            </div>
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />

        </div>
    )
}