import { useEffect } from "react";
import { useState } from "react";
import Comment from "./Comment";
import "./Post.css";
import SubmitComment from "./SubmitComment";
import { useSelector } from "react-redux";  

function Post({ avatar, username, img, caption, likes, post, liked }) {

    const url = useSelector((state) => state.url.value);
    const [heart, setHeart] = useState("./icons/heart-liked.svg");

    function isLike() {
        if (liked) {
            setHeart("./icons/heart-liked.svg");
        } else {
            setHeart("./icons/heart.svg");
        }
    }

    const like = () => {
        fetch(url + "like/" + post.id, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });

        //change the liked property to true
        heart === "./icons/heart.svg" ? setHeart("./icons/heart-liked.svg") : setHeart("./icons/heart.svg");

    };

    useEffect(
        () => {
            isLike();
        }, []
    )



    return (
        <div className="Post">

            <div className="Post-Header">
                <img
                    className="Avatar"
                    src={avatar}
                />
                <h2 className="Username"> <strong>{username}</strong></h2>
            </div>

            <img className="PostImage"
                src={img}
                alt=""
            />

            <div className="Post-Actions">
                <div className="Post-Action">

                    <img className="Action" src={heart} onClick={like} />

                </div>
                <div className="Post-Action">
                    <img className="Action" src="./icons/comment.svg" />
                </div>
                <div className="Post-Action">
                    <img className="Action" src="./icons/save.svg" />
                </div>
            </div>

            <div className="Liked-By">
                <h4>{likes}</h4>
            </div>

            <Comment caption={caption} post={post} />

            <SubmitComment id={post.id} />


        </div>
    );
}

export default Post;