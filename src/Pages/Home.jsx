import Stories from '../Components/Stories/Stories'
import Post from '../Components/Post/Post'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Home({ profile }) {

    const [posts, setPosts] = useState([])
    const url = useSelector((state) => state.url.value);


    const liked = (post) => {

        if (post?.likes.includes(profile.id)) {
            return true
        }

        return false

    }

    useEffect(() => {
        fetch(url + 'posts/')
            .then(res => res.json())
            .then(data => {

                data.map(post => {
                    console.log(post.owner.avatar)
                    console.log(post.owner.user.username)
                    console.log(post.image)
                    console.log(post.caption)
                })

                setPosts(data)
                liked();
            }
            )
    }, [])



    return (
        <div>

            <Stories />
            {
                posts.map(post => (
                    <Post
                        avatar={post.owner.avatar}
                        username={post.owner.user.username}
                        img={post.image}
                        caption={post.caption}
                        post={post}
                        key={post.uuid}
                        liked={liked(post)}
                    />
                ))
            }
        </div>
    )
}

export default Home
