import { useEffect, useState } from "react";
import { useSelector } from "react-redux";  
function Notification({ notification }) {
    const [difference, setDifference] = useState(0)

    useEffect(() => {
        console.log(notification.created)
        
        //get the day of today
        const today = new Date()
        const todayDay = today.getDate()
        
        //get the day of the notification
        const notificationDate = new Date(notification.created)
        const notificationDay = notificationDate.getDate()
        
        //get the difference between the two days
        const difference = todayDay - notificationDay
        console.log(difference)
        setDifference(difference)
        
    }, [])
    return (
        <div className="Notification">

            <img className="notification-avatar" src={notification.user.avatar} alt="Avatar" />

            <div className="Notification-Content">
                <h2 className="Create-h2">{notification.user.user.username} Liked your post</h2>
            </div>
            <div className="Notification-Date">
                <p>
                    {
                        difference === 0 ? 'Today' : difference === 1 ? 'Yesterday' : difference + ' days ago'
                    }
                </p>
            </div>

            <img className="notification-avatar post" src={notification.post.image} alt="Avatar" />

        </div>
    );
}

export default Notification;