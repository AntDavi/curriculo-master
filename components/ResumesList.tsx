import { AddResumeButton } from "./AddResumeButton"
import { NewResumeDialog } from "./NewResumeDialog"
import { ResumeCard } from "./ResumeCard"

export const ResumesList = () => {
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:gird-cols-4 xl:grid-cols-5 auto-rows-max gap-4 lg:gap-5 flex-1">
            <ResumeCard />
            <ResumeCard />
            <NewResumeDialog>
                <AddResumeButton />
            </NewResumeDialog>
        </section>
    )
}