import css from "./Options.module.css";

export default function Options({ updateFeedback, resetFeedback, totalFeedback }) {
    const handleFeedback = (type) => {
        updateFeedback(type);
  };

    return (
        <ul className={css.list}>
            <li><button className={css.button} onClick={()=>{handleFeedback('good')}}>Good</button></li>
            <li><button className={css.button} onClick={()=>{handleFeedback('neutral')}}>Neutral</button></li>
            <li><button className={css.button} onClick={()=>{handleFeedback('bad')}}>Bad</button></li>
            {totalFeedback > 0 && (<li><button className={css.button} onClick={resetFeedback}>Reset</button></li>)}
        </ul>
    )
}