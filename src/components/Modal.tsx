import { useEffect } from "react";

export default function Modal({children,open}:{children: Readonly<React.ReactNode>,open: boolean}){
    // Modal Open/Close State

    useEffect(() => {},[])

    return (
        open && <div className="flex justify-center items-center flex-col absolute top-15 left-15 bg-cyan-200 h-[90vh] w-[90vw] rounded-lg p-3">{children}</div>
    )
}