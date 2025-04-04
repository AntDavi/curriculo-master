import { ResumeArrayKeys } from "@/components/SideBarResume/Info/MultipleDragList";

// Define um tipo genérico para a configuração de formulários
export type FormConfig<T> = {
    label: string; // Rótulo exibido no formulário
    key: keyof T; // Chave correspondente ao campo nos dados
    fieldType?: "text" | "editor" | "icon" | "slider" | "keywords"; // Tipo específico de campo personalizado
    type?: string; // Tipo de entrada HTML (por exemplo, "url", "text")
    placeholder?: string; // Texto de espaço reservado para o campo
    fullWidth?: boolean; // Define se o campo ocupará toda a largura disponível
    required?: boolean; // Indica se o campo é obrigatório
    className?: string; // Permite adicionar classes CSS personalizadas
};

// Define um tipo de objeto que contém configurações de formulário para diferentes seções do currículo
export type FormConfigObject = {
    [K in ResumeArrayKeys]: FormConfig<ResumeData["content"][K][number]>[];
};

// Objeto contendo as configurações de formulário para cada categoria do currículo
export const formConfig: FormConfigObject = {
    // Configuração para redes sociais
    socialMedias: [
        {
            label: "Rede",
            key: "name",
            placeholder: "LinkedIn",
            required: true,
        },
        {
            label: "Usuário",
            key: "username",
            placeholder: "seu-usuario",
            required: true,
        },
        {
            label: "Site",
            key: "url",
            placeholder: "https://linkedin.com/in/seu-usuario",
            type: "url",
            fullWidth: true,
        },
        {
            label: "Ícone",
            key: "icon",
            placeholder: "linkedin",
            fieldType: "icon",
            fullWidth: true,
        },
    ],
    // Configuração para experiências profissionais
    experiences: [
        {
            label: "Empresa",
            key: "company",
            required: true,
        },
        {
            label: "Posição",
            key: "position",
        },
        {
            label: "Data ou intervalo de datas",
            key: "date",
            placeholder: "Janeiro de 2024 - Presente",
        },
        {
            label: "Localização",
            key: "location",
        },
        {
            label: "Site",
            key: "website",
            type: "url",
            fullWidth: true,
        },
        {
            label: "Descrição",
            key: "summary",
            fieldType: "editor",
            fullWidth: true,
            className: "min-h-[200px]",
        },
    ],
    // Configuração para educação
    educations: [
        {
            label: "Instituição",
            key: "institution",
            required: true,
        },
        {
            label: "Curso",
            key: "degree",
        },
        {
            label: "Data ou intervalo de datas",
            key: "date",
            placeholder: "Janeiro de 2024 - Presente",
        },
        {
            label: "Localização",
            key: "location",
        },
        {
            label: "Site",
            key: "website",
            type: "url",
            fullWidth: true,
        },
        {
            label: "Descrição",
            key: "summary",
            fieldType: "editor",
            fullWidth: true,
            className: "min-h-[200px]",
        },
    ],
    // Configuração para habilidades
    skills: [
        {
            label: "Nome",
            key: "name",
            required: true,
        },
        {
            label: "Descrição",
            key: "description",
        },
        {
            label: "Nível",
            key: "level",
            fieldType: "slider",
            fullWidth: true,
        },
        {
            label: "Palavras-chave",
            key: "keywords",
            placeholder: "Adicione palavras-chave separadas por vírgula",
            fieldType: "keywords",
            fullWidth: true,
        },
    ],
    // Configuração para idiomas
    languages: [
        {
            label: "Nome",
            key: "name",
            required: true,
        },
        {
            label: "Descrição",
            key: "description",
        },
        {
            label: "Nível",
            key: "level",
            fieldType: "slider",
            fullWidth: true,
        },
    ],
    // Configuração para certificações
    certifications: [
        {
            label: "Nome",
            key: "name",
            required: true,
        },
        {
            label: "Instituição",
            key: "institution",
        },
        {
            label: "Data",
            key: "date",
            placeholder: "Janeiro de 2024",
        },
        {
            label: "Site",
            key: "website",
            type: "url",
        },
        {
            label: "Descrição",
            key: "summary",
            fieldType: "editor",
            className: "min-h-[200px]",
            fullWidth: true,
        },
    ],
    // Configuração para projetos
    projects: [
        {
            label: "Nome",
            key: "name",
            required: true,
        },
        {
            label: "Descrição",
            key: "description",
        },
        {
            label: "Data ou intervalo de datas",
            key: "date",
            placeholder: "Janeiro de 2024 - Presente",
        },
        {
            label: "Site",
            key: "website",
            type: "url",
        },
        {
            label: "Resumo",
            key: "summary",
            fieldType: "editor",
            className: "min-h-[200px]",
            fullWidth: true,
        },
        {
            label: "Palavras-chave",
            key: "keywords",
            placeholder: "Adicione palavras-chave separadas por vírgula",
            fieldType: "keywords",
            fullWidth: true,
        },
    ],
};
