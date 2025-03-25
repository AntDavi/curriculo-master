type ResumeImageData = {
    url: string;
    visible: boolean
}

type ResumeInfoData = {
    fullName: string;
    headline: string;
    email: string;
    website: string;
    phone: string;
    location: string;
}

type ResumeContentData = {
    image: ResumeImageData;
    infos: ResumeInfoData;
}

type ResumeData = {
    content: ResumeContentData;
    // structure: ResumeDataStructure;
}