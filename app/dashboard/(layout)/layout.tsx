import { NavItems } from '@/components/NavItems'
import { ThemeToggle } from '@/components/ThemeToggle'
import { UserDropdown } from '@/components/UserDropdown'
import Logo from '@/public/logo.svg'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen overflow-hidden grid grid-cols-[300px_1fr]">
            <aside className="w-full h-full flex flex-col items-center border-r border-muted">
                <div className="w-full p-6 border-b border-muted">
                    <Logo className="max-w-[100px] mx-auto" />
                </div>

                <NavItems />

                <div className="w-full mt-auto border-t border-muted px-6 py-4 flex items-center justify-center">
                    <UserDropdown />
                    <ThemeToggle />
                </div>
            </aside>
            <main className='p-6 flex flex-col w-full h-full overflow-auto'>
                {children}
            </main>
        </div>
    )
}