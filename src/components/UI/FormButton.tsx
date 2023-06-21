import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	className?: string;
};

export const FormButton = ({ children, onClick, type, className }: Props) => {
	return (
		<button
			onClick={onClick}
			className={`p-1 px-5 border border-blue-950 hover:bg-blue-50 transition-all ${className}`}
			type={type}>
			{children}
		</button>
	);
};
