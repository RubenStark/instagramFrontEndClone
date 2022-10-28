import { useEffect } from "react";
import { useSelector } from "react-redux";  

function ProfileHeader({ profile, count }) {


    const handleClick = () => {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    useEffect(() => {

    }, [profile])

    if (Object.keys(profile).length != 0) {
        return (
            <header>
                <div className="container">
                    <div className="profile">
                        <div className="profile-image">
                            {
                                profile.avatar && <img src={profile.avatar} alt="" />
                            }
                        </div>
                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">{profile.user.username}</h1>
                            <button className="btn profile-edit-btn">Edit Profile</button>
                            <button className="btn profile-edit-btn logout" onClick={handleClick}>Logout</button>
                            <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
                        </div>
                        <div className="profile-stats">
                            <ul>
                                <li><span className="profile-stat-count">{count}</span> posts</li>
                                <li><span className="profile-stat-count">{profile.followers.length}</span> followers</li>
                                <li><span className="profile-stat-count">{profile.following.length}</span> following</li>
                            </ul>
                        </div>
                        <div className="profile-bio">
                            <p><span className="profile-real-name">{profile.user.username}</span> {
                            profile.bio && profile.bio 
                            }</p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default ProfileHeader;