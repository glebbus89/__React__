// Создать простое приложение счетчика, которое увеличивает или
// уменьшает значение на 1.
// ● Action types: INCREMENT, DECREMENT.
// ● Actions: Создайте два действия: одно для увеличения счетчика
// и другое для его уменьшения.
// ● Reducer: Реализуйте редьюсер, который обрабатывает эти
// действия и изменяет состояние счетчика соответствующим
// образом.
// ● Component: Создайте компонент, который отображает счетчик
// и имеет кнопки для его увеличения и уменьшения.


import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counterSlice";

export const store = configureStore({
    reducer: {
    counter: counterReducer,
    },
    });