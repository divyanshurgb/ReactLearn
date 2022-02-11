import { useLocation, useParams } from "react-router-dom";

const Post = ({match}) => {
    const { id } = useParams();
    
    const query = new URLSearchParams(useLocation().search);

    return ( 
            <>  <h2> Id is = {match.params.id} </h2> 
                <h2> { query.get("first")} </h2>
                <h2> { query.get("last")} </h2>
            </> 
                );
};

export default Post;
