import css from "./Feedback.module.css";

export default function Feedback({feedback, total, positive}) {

    return (
        <div className={css.container}>
            <ul className={css.list}>
                <li className={css.items}><span>Good: {feedback.good}</span></li>
                <li className={css.items}><span>Neutral: {feedback.neutral}</span></li>
                <li className={css.items}><span>Bad: {feedback.bad}</span></li>
                <li className={css.items}><span>Total: {total}</span></li>
                <li className={css.items}><span>Positive: {positive}%</span></li>
            </ul>
        </div>
    )
}