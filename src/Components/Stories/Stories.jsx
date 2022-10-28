import "./Stories.css";
import React, { useState, useEffect } from 'react';
import Story from "./Story";
import { useSelector } from "react-redux";        

function Stories() {
    const url = useSelector((state) => state.url.value);

    const [stories, setStories] = useState([

    ]);

    const getStories = () => {
        fetch(url + 'get-stories/')
            .then(response => response.json())
            .then(result => {
                
                setStories(result)

                // console.log(result[0].id)
                // console.log(result[0].user.avatar)
                // console.log(result[0].user.user.username)
                // console.log(result[0].image)

            })
    }

    useEffect(() => {
        getStories()
    }, [])

    return (
        <div className="Story">
            {
                stories.map(story => (
                    <Story
                        story={story}
                        avatar={story.user.avatar}
                        username={story.user.user.username}
                        image={story.image}
                        key={story.id}
                    />
                ))
            }
        </div>


    );
}

export default Stories;