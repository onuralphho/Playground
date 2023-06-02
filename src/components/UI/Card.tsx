import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const Card = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center gap-2 border text-lg  p-2  bg-blue-950 text-white  rounded-lg backdrop-blur-sm">
            {children}
        </div>
    );
};
