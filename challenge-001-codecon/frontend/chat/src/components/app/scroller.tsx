import { ReactNode, RefObject } from "react";

interface ScrollerProps extends React.HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    ref?: RefObject<HTMLDivElement | null>
}

const Scroller: React.FC<ScrollerProps> = ({ className = "", children, ...rest }) => {
    return (
        <div 
            className={`${className} overflow-y-auto
                [&::-webkit-scrollbar]:w-1
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}
            {...rest}
        >
            {children}
        </div>
    )
}

export default Scroller;