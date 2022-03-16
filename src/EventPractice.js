import React, { useState } from "react";

const EventPractice = () => {
    const [test, setTest] = useState({
        username:"",
        message:""
    });

    const { username, message } = test;
    const onChange = (e) => {
        const nextTest = {
            ...test,
            [e.target.name]: e.target.value
        };
        setTest(nextTest);
    }

    const onClick = () => {
        alert(`${username} : ${message}`);
        setTest({
            username:"",
            message:"",
        })
    }
    const onKeyPress = (e) => {
        if(e.key==="Enter"){
            onClick();
        }
    }


    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력하세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}
export default EventPractice;