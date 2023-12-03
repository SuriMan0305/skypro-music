import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [undefined],
  nowPlay: {
    id: "",
    album: "",
    author: "",
    track_file: "",
    statusPlay: "",
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
      state.nowPlay = action.payload;
    },
    nextButton: (state, action) => {
      let rememberNow = action.payload;
      if (rememberNow.id - 7 < state.data.length) {
        let nextInfoTrack = state.data.map((el) => {
          if (rememberNow.id + 1 === el.id) {
            const nextTrack = [el.id, el.album, el.author, el.track_file, true];
            return nextTrack;
          }
        });
        let filter = nextInfoTrack.filter((el) => el !== undefined);
        state.nowPlay = {
          id: filter[0][0],
          album: filter[0][1],
          author: filter[0][2],
          track_file: filter[0][3],
          statusPlay: filter[0][4],
        };
      } else {
        state.nowPlay = {
          id: state.data[0].id,
          album: state.data[0].album,
          author: state.data[0].author,
          track_file: state.data[0].track_file,
          statusPlay: state.data[0].statusPlay,
        };
      }
    },
    prevButton: (state, action) => {
      let rememberNow = action.payload;
      if (rememberNow.id > state.data[0].id) {
        let nextInfoTrack = state.data.map((el) => {
          if (rememberNow.id - 1 === el.id) {
            const nextTrack = [el.id, el.album, el.author, el.track_file, true];
            return nextTrack;
          }
        });
        let filter = nextInfoTrack.filter((el) => el !== undefined);
        state.nowPlay = {
          id: filter[0][0],
          album: filter[0][1],
          author: filter[0][2],
          track_file: filter[0][3],
          statusPlay: filter[0][4],
        };
      } else {
        state.nowPlay = {
          id: state.data[state.data.length - 1].id,
          album: state.data[state.data.length - 1].album,
          author: state.data[state.data.length - 1].author,
          track_file: state.data[state.data.length - 1].track_file,
          statusPlay: state.data[state.data.length - 1].statusPlay,
        };
      }
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
        return index + 1 === state.counter
          ? { ...element, status: true }
          : element;
      });
      // проверяем соответствие индекса и если совпадает с кликом меняем статус если счётчик сделать с 0 то получается по индексу будет опережать события
    },
  },
});

export const { setPlaylist, setNext, startHandlePlay, nextButton, prevButton } =
  playlist.actions; //Экспортируем для диспатча

export default playlist.reducer; // Экспортируем для store
