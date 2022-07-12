import icon from '../../assets/images/notification-icon.svg'
import './style.css'
export function NotificationButton() {
  return (
    <>
      <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar" />
      </div>
    </>
  )
}
