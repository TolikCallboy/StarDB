import React from "react"

import './title.css'

export const Title = () => {
    return (
        <div>
            <p className="start">Добро пожаловать!</p>

            <h1>StarDB <sub> StarWars</sub></h1>

            <div className="titles">
                <div className="titlecontent">
                    <p>Всем привет!</p>
                    <p>Это мой первый сайт! </p>
                    <p>Сайт написал на React при помощи нескольких библиотек.</p>
                    <p>На данном проекте не используется Библиотека Redux для работы с состоянием!</p>
                    <p>Данные берутся с сервера:</p>
                    <p>https://swapi.dev</p>
                    <div>
                        <p>С чем работал на данном проекте:</p>
                        <p>1. Fetch API</p>
                        <p>2. Классовые компоненты</p>
                        <p>3. Методы жизненного цикла</p>
                        <p>4. Render функции</p>
                        <p>5. Context</p>
                        <p>6. Children</p>
                        <p>7. Компоненты высшего порядка (HOC) </p>
                        <p>Библиотеки: </p>
                        <p>1. react </p>
                        <p>2. react-dom </p>
                        <p>3. react-router-dom </p>
                        <p>4. props-types </p>
                    </div>
                    <div>
                        <p>Отдельное спасибо Юрию, за его проект, который послужил шаблоном.</p>
                        <p>Так же спасибо за курсы и отлично поданную информацию.</p>
                    </div>
                    <div>
                        <p>Спасибо за внимание!</p>
                    </div>
                </div>
            </div>
        </div>
)
}



