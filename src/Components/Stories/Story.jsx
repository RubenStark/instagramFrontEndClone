import { Link } from "react-router-dom";

function Story({ story, avatar, username }) {

    return (

            <div className="Story-Header">
                <Link to='watch' state={{id: story.id}}>
                <img
                    className="Story-Avatar"
                    src={ avatar}
                />
                </Link>
                <h2 className="Story-Username">{username}</h2>
            </div>
            
    );
}

export default Story;