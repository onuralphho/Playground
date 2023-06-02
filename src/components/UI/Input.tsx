import React from "react";

type Props = {
    type: "string" | "number";
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
};

export const Input = (props: Props) => {
    return (
        <input
            className="border rounded-md p-1 px-2 focus:outline-lime-400 text-blue-950"
            value={props.value}
            onChange={props.onChange}
            type={props.type}
            placeholder={props.placeholder}
        />
    );
};
