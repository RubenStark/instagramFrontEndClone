import "../Components/WatchStories/Watch.css";
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function WatchStories() {

    const url = useSelector((state) => state.url.value);


    const location = useLocation();
    const [story, setStory] = useState({});
    const [id, setId] = useState(location.state.id);
    const [count, setCount] = useState();

    const getStories = async () => {
        const response = await fetch(url + 'get-storie/' + id);
        const result = await response.json()
        setStory(result[0])

    }

    const nextStory = () => {
        if (id > count - 1) {
            alert('No more stories')
        } else {
        setId(id + 1)
        }

    }
    const prevStory = () => {
        if (id < count - 1) {
            alert('No more stories')
        } else {
        setId(id - 1)
        }
    }

    const getCount = async () => {
        const response = await fetch(url + 'get-stories/');
        const result = await response.json()
        setCount(result.length)
    }


    useEffect(() => {
        getStories()
    }, [id])

    useEffect(() => {
        getCount()
    }, [])


    if (Object.keys(story).length > 0) {
        return (

            <div className="watch-stories">

                <img className="arrow" src="./icons/back-arrow.svg" alt="behind" onClick={prevStory} />

                <div className="watch-stories-container">
                    <div className="watch-stories-header">
                        {<img className="watch-stories-avatar" src={story.user.avatar} alt="avatar" />}
                        <h2 className="watch-stories-username">
                            {story.user.user.username}
                        </h2>
                    </div>
                    <img className="watch-stories-image" src={story.image} alt="story" />
                </div>

                <img className="arrow" src="./icons/arrow.svg" alt="next" onClick={nextStory} />

            </div>
        );
    }
    return <div>Loading...</div>

}

export default WatchStories;