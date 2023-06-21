import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClick: () => void;
};

export const FormButton = ({ children, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className=" p-1 px-5 border border-blue-950 hover:bg-blue-50 transition-all "
        >
            {children}
        </button>
    );
};
