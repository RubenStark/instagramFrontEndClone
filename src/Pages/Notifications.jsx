import { useEffect, useState } from "react";
import Notification from "../Components/Notifications/Notification";
import "../Components/Notifications/Notifications.css"
import { useSelector } from "react-redux";

function Notifications({ profile }) {

    const [notifications, setNotifications] = useState([])
    const url = useSelector((state) => state.url.value);

    const getNotifications = () => {
        const token = localStorage.getItem('token')
        if (token) {
        fetch(url + 'get-notifications/',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setNotifications(data)
            })
        }

        }

        useEffect(
            () => {
                getNotifications()
            },[])

    return (
        <div className="Notifications-Container">
            {
                notifications.map(notification => (
                    <Notification notification={notification} key={notification.id} />
                ))
            }

        </div>
    );
}

export default Notifications;