import { useSearchParams } from "react-router-dom";

export default function Detail(){
    const [ code ] = useSearchParams();
    return <p>detail page for code={code}</p>

}