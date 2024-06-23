import css from "./Notification.module.css";

export default function Notification({ message }) {
    return (
        <div>
            <p className={css.text}>{message}</p>
        </div>
  );
};