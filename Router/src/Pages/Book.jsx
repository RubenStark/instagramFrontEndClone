import { useLocation, useParams } from 'react-router-dom';

function Book() {

    const location = useLocation();

    return (
        <div>
            <h1> Book: {} </h1>
            <p> {location.state} </p>
        </div>
    )
}

export default Book;