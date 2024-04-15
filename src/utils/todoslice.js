import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
  name: "todo",
  initialState: {
    task: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.task=state.task.filter((t) => t.id !== action.payload)
    },    
    updateTask: (state, action) => {
      state.task = state.task.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t, // Spread the existing task object
            ...action.payload, // Overwrite the properties with action.payload
          };
        }
         return t; // Return the task as is if not the one being updated
      });
    }
    
  },
});

export default todoslice.reducer;
export const { addTask, deleteTask,updateTask } = todoslice.actions;
