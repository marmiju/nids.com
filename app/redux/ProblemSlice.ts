import { createSlice } from "@reduxjs/toolkit";

const initialState: pblsolved[] = [];

export interface pblsolved {
    user_id: number,
    value:[]
}

const ProblemSlice = createSlice({
  name: "Problems",
  initialState,
  reducers: {
    updateData: (state, action) => {
      const { user_id, value } = action.payload;

      const existingUser = state.find((item: pblsolved) => item.user_id === user_id);

      if (existingUser) {
        existingUser.value = value;
      } else {
        state.push({ user_id, value });
          }
     console.log("Updated state:", JSON.parse(JSON.stringify(state)));
    },
  },
});

export const { updateData } = ProblemSlice.actions;
export default ProblemSlice.reducer;
