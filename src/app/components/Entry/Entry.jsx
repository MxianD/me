import Link from "next/link";
import styles from "./entry.module.css"
const Entry = ({color,section, directTo})=>{
    return(
        <>
        <Link href={directTo} className={`flex items-center h-20 w-44 text-center justify-center btn ${styles[color]}`}>
            <div className="font-serif font-bold text-2xl text-teal-200">{section}</div>
        </Link>
        </>
    )
};

export default Entry;