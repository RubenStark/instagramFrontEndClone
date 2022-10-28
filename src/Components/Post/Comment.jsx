import { useEffect, useState } from "react";
import { useSelector } from "react-redux";  
function Comment({caption, post}) {
    const url = useSelector((state) => state.url.value);

    const [comments, setComments] = useState([])

    const getComments = () => {
        fetch(`${url}comments/${post.id}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)                
            })
    }

    useEffect(() => {
        getComments()
        return () => {};
    }, []);

    return (
        <div className="Caption-Container">
            <h3 className="Username"><strong>Username: </strong>{caption}</h3>
            <h4 className="Comments">6 hrs ago</h4>
            {
                comments.map(comment => (
                    <h3 className="Username" key={comment.id}><strong>{comment.user.user.username}: </strong>{comment.body}</h3>
                ))
            }
        </div>
    );
}

export default Comment;