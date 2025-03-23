import Logo from '@/public/logo.svg'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen overflow-hidden grid grid-cols-[300px_1fr]">
            <aside className="w-full h-full flex flex-col items-center border-r border-muted">
                <div className="w-full p-6 border-b border-muted">
                    <Logo className="max-w-[100px] mx-auto" />
                </div>
            </aside>
            <main>
                {children}
            </main>
        </div>
    )
}