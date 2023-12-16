import './notification.scss'
import {useEffect} from "react";

const Notification = ({message, duration = 3000, onClose}) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className="popup">
            {message}
        </div>
    );
};

export default Notification;