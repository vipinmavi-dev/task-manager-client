type Type = "text" | "password" | "email" | "submit" | "number" | "date" | "file";
export interface InputProps {
    type: Type;
    placeholder?: string;
    id: string;
    required?: boolean;
    value?: string;
}