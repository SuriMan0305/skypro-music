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
  shuffleTracksStatus: false,
  shuffleTracksList: "",
};

export const playlist = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.data = action.payload; // данные из диспатча передаются в state
      state.shuffleTracksList = action.payload;
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
          statusPlay: true,
        };
      } else {
        state.nowPlay = {
          id: state.data[0].id,
          album: state.data[0].album,
          author: state.data[0].author,
          track_file: state.data[0].track_file,
          statusPlay: true,
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
          statusPlay: true,
        };
      } else {
        state.nowPlay = {
          id: state.data[state.data.length - 1].id,
          album: state.data[state.data.length - 1].album,
          author: state.data[state.data.length - 1].author,
          track_file: state.data[state.data.length - 1].track_file,
          statusPlay: true,
        };
      }
    },
    shuffleTracksButton: (state) => {
      state.shuffleTracksStatus = !state.shuffleTracksStatus;
      if (state.shuffleTracksStatus === true) {
        const idContainer = [];
        state.data.map((el) => {
          idContainer.push(el.id);
        });
        let shuffleIdContainer = idContainer;
        shuffleIdContainer = idContainer.sort(() => Math.random() - 0.5);
        let shuffleObjects = [];
        shuffleIdContainer.map((id) => {
          state.data.map((el) => {
            if (el.id === id) {
              shuffleObjects.push({
                id: el.id,
                album: el.album,
                author: el.author,
                track_file: el.track_file,
                statusPlay: el.statusPlay,
              });
            }
          });
        });
        state.shuffleTracksList = shuffleObjects;
      } else {
        state.shuffleTracksList = state.data;
      }
    },
    nextButtonShuffle: (state) => {
      let pos = 0;
      let count = 0;

      state.shuffleTracksList.map((list, index) => {
        const nowIdTrack = state.nowPlay.id;
        if (list.id === nowIdTrack) {
          pos = index;
        }
        if (pos !== 0) {
          if (count > 1) {
            pos = 0;
            count = count - 2;
            state.nowPlay = {
              id: list.id,
              album: list.album,
              author: list.author,
              track_file: list.track_file,
              statusPlay: true,
            };
            console.log(list.id);
          }
          count++;
        }
      });
    },
    prevButtonShuffle: (state) => {},
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

export const {
  setPlaylist,
  setNext,
  startHandlePlay,
  nextButton,
  prevButton,
  shuffleTracksButton,
  nextButtonShuffle,
  prevButtonShuffle,
} = playlist.actions; //Экспортируем для диспатча

export default playlist.reducer; // Экспортируем для store
