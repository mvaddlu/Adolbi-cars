import { PayloadAction, createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { ItemDetails } from "./type/type";
import { ItemPageAPI } from "../API/ItemPageAPI";



const InitialState:ItemDetails={
    lot_name:" " ,
    lot_number:" " ,
    location:" " ,
    fuel:" " ,
    year:0,
    odometer: 0,
    odometer_type:" " ,
    keys:" " ,
    VIN_code:" " ,
    primary_damage:" " ,
    drive_type:  " " ,
    color:" " ,
    engine_type:  " " ,
    current_bid: 0,
    images: {
        FULL_IMAGE:[]
    }
}

export const GetItemByID = createAsyncThunk<unknown,number | undefined >("GET-ITEM-BY-ID",async (ItemID,{dispatch,rejectWithValue})=>{
    try {
        const res = await new ItemPageAPI().GetItemByID(ItemID).then(u =>u)
        dispatch(SetItemByID(res))
    } catch (error) {
        rejectWithValue(error)
    }
})
const SetItemByID = createAction<ItemDetails>('SET-ITEM-BY-ID')

export const ItemPage = createReducer(InitialState,{
    [SetItemByID.type]:(state,action:PayloadAction<ItemDetails>)=>{
        const {VIN_code,color,current_bid,drive_type,engine_type,fuel,images,keys,location,lot_name,lot_number,odometer,odometer_type,primary_damage,year} = action.payload

        return{
            ...state,
            color,
            current_bid,
            drive_type,
            engine_type,
            fuel,
            keys,
            location,
            lot_name,
            lot_number,
            odometer,
            odometer_type,
            primary_damage,
            VIN_code,
            year,
            images:{
                FULL_IMAGE:images.FULL_IMAGE
            }

        }
    }
})