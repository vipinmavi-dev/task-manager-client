type Type = "text" | "password" | "email" | "submit" | "number" | "date" | "file";
export interface InputProps {
    type: Type;
    placeholder?: string;
    id: string;
    isRequired?: boolean;
    value?: string;
}