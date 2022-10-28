import GalleryPost from "../Components/Profile/GalleryPost";
import ProfileHeader from "../Components/Profile/Header";
import "../Components/Profile/Profile.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Profile({ profile }) {

    const [posts, setPosts] = useState([])
    const [count, setCount] = useState(0)
    const url = useSelector((state) => state.url.value);

    const getPosts = () => {
        const token = localStorage.getItem('token')
        if (token) {
            fetch(url +'get-posts/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    setPosts(result)
                    setCount(result.length)
                })
                .catch((error) => {
                    console.log("error", error);
                });
                
        }
    }


    useEffect(() => {
        getPosts()
        console.log(posts)
    }, [])

    return (
        <div className="Profile-Body">
            <ProfileHeader profile={profile} count={count}/>

            <main>
                <div className="container">
                    <div className="gallery">

                        {
                            posts.map(post => (
                                <GalleryPost 
                                post={post} 
                                img={post.image}
                                key={post.id} 
                                />
                            ))
                        }

                    </div>
                    <div className="loader"></div>
                </div>
            </main>
        </div>

    );
}

export default Profile;