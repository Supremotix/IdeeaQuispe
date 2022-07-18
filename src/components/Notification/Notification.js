import { useState, createContext, useContext } from "react"
import './Notification.css'

const Notification = ({ message, severity, otherClass }) => {

    const notificationStyle = {
        position: 'absolute',
        top: 100,
        right: 5,
        width: 'auto',
        height: 'auto',
        //  backgroundColor: severity === 'error' ? 'red' : 'green',
        padding: '10px 20px 10px 20px',
        borderRadius: '10px'
    }

    const config = true ? {
        style: notificationStyle,
        className: `${severity === 'error' ? 'Error' : 'Success'} ${otherClass || ''}`
    } : {}


    if (message === '') return
    return (
        <div style={notificationStyle} className={`${severity === 'error' ? 'Error' : 'Success'}`}>
            {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [msgConfig, setMsgConfig] = useState({
        severity: 'success',
        message: ''
    })
    const [otherClass, setOtherClass] = useState('')
    const setNotification = (sev, msg, timeout = 3) => {
        setMsgConfig({ severity: sev, message: msg })
        setTimeout(() => {
            setOtherClass('Animation')
        }, (timeout - 1) * 1000)

        setTimeout(() => {
            setMsgConfig({ ...msgConfig, message: '' })
        }, timeout * 1000)
    }
    //  if (message === '') return


    return (
        <NotificationContext.Provider className='notificacion' value={setNotification}>
            {/*     {msgConfig.message !== '' && <Notification message={msgConfig.message} severity={msgConfig.severity} />} */}
            <Notification message={msgConfig.message} severity={msgConfig.severity} otherClass={otherClass} />
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext