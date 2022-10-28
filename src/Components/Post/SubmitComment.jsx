import { useState } from "react";
import { useSelector } from "react-redux";  
function SubmitComment({ id }) {
    const url = useSelector((state) => state.url.value);

    const [comment, setComment] = useState("");
    const handleChange = (e) => {
        console.log(e.target.value);
        setComment(e.target.value);
    };
    const handleSumbit = (e) => {
        fetch(url + "comment/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                post: id,
                comment: comment,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });

        const input = document.getElementById('comment');
        input.value = '';
    };

    return (
        <div className="Post-Comment">
            <input id="comment" className="Comment-Input" type="text" placeholder="Add a comment..." onChange={handleChange} />
            <button className="Comment-Button" onClick={handleSumbit}>Post</button>
        </div>
    );
}

export default SubmitComment;