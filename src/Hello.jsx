import { useParams } from "react-router-dom";

export default function Hello(){
    const {username} = useParams();
    return <p>Hello {username}</p>
}