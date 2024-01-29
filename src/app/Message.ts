import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { MessageAPI } from "../API/Message";
import { DataforPopUp, DataforPopUpWithoutAmount, PickUpAssist } from "./type/type";

interface InitialStateType{
    Question:Questions,
    Select_lot:Select_lot
}

export interface Questions{
    phone_number:string,
    name:string,
    comment:string
}
export interface Select_lot{
    name:string,
    phone_number:string,
    make:string,
    year_from:string,
    year_to:string,
    price_from:string,
    price_to:string
}

const InitialState:InitialStateType={
    Question:{
        comment:'',
        name:'',
        phone_number:'',
    },
    Select_lot:{
        make:'',
        name:'',
        phone_number:'',
        price_from:'',
        price_to:'',
        year_from:'',
        year_to:''
    }
}

export const SendQuestions = createAsyncThunk<unknown,DataforPopUpWithoutAmount>('SEND-QUESTIONS',async(value,{dispatch})=>{
    const res = await new MessageAPI().SendQuestions(value)
    return res.data
})
export const SetQuestionsData = createAction<Questions>('SET-QUESTIONS-DATA')

export const SendSelect_lot = createAsyncThunk<unknown,Select_lot>('SEND-SELECT-LOT',async (value,{dispatch})=>{
    const res = await new MessageAPI().SendSelect_lot(value)
    return res.data
})

export const AsyncFetch = createAsyncThunk<unknown,DataforPopUp>("ASYNC-FETCH",async(value)=>{
    const res = await new MessageAPI().PickUpSpareParts(value)
    return res.data
})

export const PickUpCar = createAsyncThunk<unknown,PickUpAssist>("PICK-UP-CAR", async (value)=>{
    const res = await new MessageAPI().PickUpCar(value)
    return res.data
})

export const Message = createReducer(InitialState,{
    [SetQuestionsData.type]:(state,action)=>{
        return{
            ...state,
            Question:action.payload
        }
    }
})