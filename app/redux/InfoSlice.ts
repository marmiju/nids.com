import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InfoData, SocialData } from '../../lib/infoData/InfoData' // Update with actual file path

interface InfoState {
  infoData: InfoData | null;
  socialData: SocialData[];
  siteLogo: string;
}

const initialState: InfoState = {
  infoData: null,
  socialData: [],
  siteLogo: '',
}

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setInfo: (
      state,
      action: PayloadAction<{
        infoData: InfoData;
        socialData: SocialData[];
        siteLogo: string;
      }>
    ) => {
      state.infoData = action.payload.infoData
      state.socialData = action.payload.socialData
      state.siteLogo = action.payload.siteLogo
    },
  },
})

export const { setInfo } = infoSlice.actions
export default infoSlice.reducer
