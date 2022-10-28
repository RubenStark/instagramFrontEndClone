import { useState } from "react";
import "../Components/Create/Create.css";
import { useSelector } from "react-redux";
function Create() {

    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");

    const url = useSelector((state) => state.url.value);


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handlePost = () => {
        const token = localStorage.getItem('token')
        const data = new FormData();
        data.append("image", image);
        data.append("caption", caption);

        fetch(url + "create-post/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "POST",
            body: data,
        })
            .then((response) => response.json())
            .then((result) => {
                window.location.href = '/profile'
            });

    };

    const handleText = (e) => {
        setCaption(e.target.value);
    };

    return (<>
        <div className="Create-Header">
            <h1 className="Create-h1">
                Create a new Post
            </h1>
            <button className="Create-Post" onClick={handlePost}>
                <h2 className="Create-h2">Post</h2>
            </button>
        </div>
        <div className="Create-Container">
            <div className="Create-Image">
                <label htmlFor="file-upload" className="Create-Input"><h2 className="Create-h2">Upload Image</h2></label>
                <input id="file-upload" className="Create-Input" type="file" accept="image/*" required onChange={handleChange}></input>
                {image && <img className="Create-Image-Preview" src={URL.createObjectURL(image)} alt="Preview" />}
            </div>
            <div className="Create-Desciption">
                <textarea className="Create-Textarea" placeholder="Write a caption..." onChange={handleText}></textarea>
            </div>
        </div>
    </>);
}

export default Create;