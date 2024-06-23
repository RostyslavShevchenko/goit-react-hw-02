import { useEffect, useState } from "react"
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification"
import css from "./App.module.css";

export default function App() {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    useEffect(() => {
        const savedFeedback = localStorage.getItem('feedback');
        savedFeedback !== null ? JSON.parse(savedFeedback) : feedback;
    }, [])

    useEffect( () => {
        localStorage.setItem('feedback', JSON.stringify(feedback))
    }, [feedback])
    
    const updateFeedback = (feedbackType) => {
        setFeedback((values) => ({
            ...values,
            [feedbackType]: values[feedbackType] + 1          
    }));
    };

    const resetFeedback = () => {
        setFeedback({
        good: 0,
        neutral: 0,
        bad: 0
    })
    }

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positive = Math.round((feedback.good / totalFeedback) * 100)

    return (
        <div className={css.container}>
        <Description/>
        <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}/>
        {totalFeedback > 0 ?
        (<Feedback feedback={feedback} total={totalFeedback} positive={positive} />) :
        (<Notification message="No feedback given yet." />)}
    </div>)
}