import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    cameraImage: null,
  },
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload; // action.playload, is whatever we pass in the playload 
    },
    resetCameraImage: (state) => {
        state.cameraImage = null;
    }
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

export const selectCameraImage = state => state.camera.cameraImage;
// here we select image and we connect to the store in store.js reducer section
export default cameraSlice.reducer;
