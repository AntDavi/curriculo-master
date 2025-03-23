import { AvatarFallback } from "@radix-ui/react-avatar"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { LogOut } from "lucide-react"

export const UserDropdown = () => {
    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className="w-full gap-2 justify-start px-2">
                    <Avatar className="w-7 h-7 block">
                        <AvatarImage src="https://github.com/antdavi.png" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <p>Anthony Davi</p>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[var(--radix-dropdown-menu-trigger-width)]">
                <DropdownMenuItem className="gap-2 text-red-500">
                    <LogOut size={12} />
                    Sair
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}