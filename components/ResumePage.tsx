"use client"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { InfosSideBar } from "./SideBarResume/Info/InfosSideBar";
import { ResumeContent } from "./SideBarResume/ResumeContent";
import { StructureSideBar } from "./SideBarResume/StructureSideBar";
import { FormProvider, useForm } from "react-hook-form";


export default function ResumePage() {
    const defaultValues: ResumeData = {
        content: {
            image: {
                url: "",
                visible: true
            },
            infos: {
                fullName: "",
                headline: "",
                email: "",
                website: "",
                phone: "",
                location: ""
            },
            summary: "",
            certifications: [],
            educations: [],
            experiences: [],
            languages: [],
            projects: [],
            skills: [],
            socialMedias: [],
        }
    }

    const methods = useForm<ResumeData>({ defaultValues });

    return (
        <FormProvider {...methods}>
            <main className="w-full h-creen overflow-hidden">
                <ResizablePanelGroup direction="horizontal" className="w-full h-full">
                    <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
                        <InfosSideBar />
                    </ResizablePanel>
                    <ResizableHandle withHandle />

                    <ResizablePanel>
                        <ResumeContent />
                    </ResizablePanel>
                    <ResizableHandle withHandle />

                    <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
                        <StructureSideBar />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </main>
        </FormProvider>
    );
}