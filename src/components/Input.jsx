import { useEffect, useState } from "react";

export const Input = ({onChangeContents, onChangeTime, onChangeRegistry, isRegistered}) => {
    const [learningContents, setLearningContents] = useState('');
    const [learningTime, setLearningTime] = useState('');

    const typingContents = (e) => {
        setLearningContents(e.target.value);
    }
    const typingTime = (e) => {
        setLearningTime(e.target.value);
    }

    useEffect(() => {
        onChangeContents(learningContents);
    }, [learningContents]);
    useEffect(() => {
        onChangeTime(learningTime);
    }, [learningTime]);
    useEffect(() => {
        if (isRegistered) {
            setLearningContents('');
            setLearningTime(0);
            onChangeRegistry(false);
        }
    }, [isRegistered]);

    return (
        <div>
            <p>学習内容：</p>
            <input type="text" value={learningContents} onChange={typingContents} />
            <br />
            <p>学習時間：</p>
            <input type="text" value={learningTime} onChange={typingTime}/>
        </div>
    )
}