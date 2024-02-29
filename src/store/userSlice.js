import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users:[]
    },
    reducers: {
        addUser: (state ,action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => { 
            const filteredUsers=state.users.filter(user=>user.id !== action.payload.id)
            state.users=filteredUsers
        },
        updateuser: (state, action) => { 
            const filteredUser=state.users.find(user=>user.id === action.payload.id)
            filteredUser=action.payload
        },
        
    }
})