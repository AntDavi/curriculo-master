import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { InfosSideBar } from "./SideBarResume/InfosSideBar";
import { ResumeContent } from "./SideBarResume/ResumeContent";
import { StructureSideBar } from "./SideBarResume/StructureSideBar";


export default function ResumePage() {
    return (
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
    );
}