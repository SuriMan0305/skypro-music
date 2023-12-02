import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [undefined],
  nowPlay: {
    album: '',
    author: '',
    track_file: '',
  },
};

export const playlist = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.data = action.payload; // данные из диспатча передаются в state
    },
    startHandlePlay: (state, action) => {
      state.nowPlay = action.payload
    },
    setNext: (state) => {
      // добавляем к счетчику и делаем всё неактивным
      state.counter++;
      state.data = state.data.map((element) => {
        return { ...element, status: false };
      });
      // добавляем к счетчику и делаем всё неактивным
      // проверяем соответствие индекса и если совпадает с кликом меняем статус если счётчик сделать с 0 то получается по индексу будет опережать события
      state.data = state.data.map((element, index) => {
        return index+1 === state.counter ? { ...element, status: true } : element;
      });
      // проверяем соответствие индекса и если совпадает с кликом меняем статус если счётчик сделать с 0 то получается по индексу будет опережать события
    },
  },
});

export const { setPlaylist, setNext, startHandlePlay } = playlist.actions; //Экспортируем для диспатча

export default playlist.reducer; // Экспортируем для store