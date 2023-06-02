import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClick: () => void;
};

export const Button = ({ children, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className=" p-1 px-5 border  rounded-md "
        >
            {children}
        </button>
    );
};
