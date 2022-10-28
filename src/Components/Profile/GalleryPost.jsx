function GalleryPost({ post, img }) {


    return (


        <div className="gallery-item" tabIndex="0">
            <div className="Profile-img">
                <img src={img} className="gallery-image" alt="" />
            </div>
            <div className="gallery-item-info">
                <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> {post.likes.length}</li>
                    {/* <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li> */}
                </ul>
            </div>
        </div>


    );
}

export default GalleryPost;