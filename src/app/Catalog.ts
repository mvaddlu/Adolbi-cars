import { PayloadAction, createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { FilterData, FilterDataPost, Item } from "./type/type";
import { CatalogAPI } from "../API/CatalogAPI";

interface InitialStateType{
    ListItem:Array<Item>,
    Data:any,
    markes:string,
    body_style:string,
    fuels:string
    year:{
        max:number | undefined,
        min:number| undefined
    },
    odometer:{
        max:number| undefined,
        min:number| undefined
    },
    accident:{
        max:number| undefined,
        min:number| undefined
    },
    isload:boolean
    totalofItems:number ,
    currentPage:number  ,
    nextPage:number ,
    perPage: number,
    calculator:calculator,
    res_calculator:res_calculator
}
export interface calculator{
    engine_size:string,
    price:string |number,
    year:string | number,
    engine_type:string,
    total_loss?:boolean
    add_damage?:boolean
}
export interface res_calculator{
    price: number |string, //
    insurance: number |string, // страховка
    company_service: number |string, // послуги компанії
    brokerage_services: number |string, // послуги брокера
    customs_payments: number |string,// таможня
    delivery: number |string, // доставка
    overall: number |string // повна сума

}

const InitialState:InitialStateType={
    ListItem:[],
    Data:{
        body_styles:{},
        colors:{},
        drive_types:{},
        engine_types:{},
        fuels:{},
        keys:{},
        makes:{},
        models:{},
        odometers:{},
        pre_accident_values:{},
        primary_damages:{},
        transmissions:{},
        years:{},
        year_borders:{
            max:0,
            min:0
        },
        odometer_borders:{
            max:0,
            min:0
        },
        pre_accident_value_borders:{
            max:0,
            min:0
        },

    } as FilterData,
    markes:'',
    body_style:'',
    fuels:'',
    accident:{
        max:0,
        min:0
    },
    odometer:{
        max:0,
        min:0
    },
    year:{
        max:0,
        min:0
    },
    isload:true,
    currentPage:1,
    nextPage:2,
    perPage:20,
    totalofItems:0,
    calculator:{
        engine_size:'',
        price:'',
        year:0,
        engine_type:''
    },
    res_calculator:{
        price:0,
        brokerage_services:0,
        customs_payments:0,
        delivery:0,
        company_service:0,
        insurance:0,
        overall:0

    }

}

export const GetListofItem = createAsyncThunk<unknown,FilterDataPost>('GET-LIST-OF-ITEM',async (values,{dispatch})=>{
    const res = await new CatalogAPI().ListItemGet(values)
    dispatch(SetListofItems(res))

})
export const GetFilterData = createAsyncThunk('GET-FILTER-DATA',async (_,{dispatch})=>{
    const res = await new CatalogAPI().GetDataFiltr()
    dispatch(SetFilterData(res))
})
export const GetCalculatorData = createAsyncThunk<unknown,calculator>('GET-CALCULATOR-DATA',async (value,{dispatch})=>{
    const res = await new CatalogAPI().GetCalculator(value)
    dispatch(SetCalculate(res))

})
const SetCalculate = createAction<res_calculator>('SET-CALCULATE')
interface SetLotsType{
    ListOfItem:Array<Item>,
    totalofItems:number | string,
    currentPage:number | string ,
    nextPage:number | string ,
    perPage: number | string
}


const SetListofItems = createAction<SetLotsType>('SET-LIST-OF-ITEMS')

const SetFilterData = createAction<FilterData>('SET-FILTER-DATA')

export const setFuel = createAction<string>('SET-FUEL')
export const setMark = createAction<string>('SET-MARK')
export const setbody_style = createAction<string>('SET-BORY_STYLE')

export const setYear = createAction<{min:number,max:number}>('SET-Year')
export const setOdometr = createAction<{min:number,max:number}>('SET-Odometr')
export const setaccident = createAction<{min:number,max:number}>('SET-accident')

export const Catalog = createReducer(InitialState,{
    [SetListofItems.type]:(state:InitialStateType,action:PayloadAction<any>)=>{
        return{
            ...state,
            ListItem:action.payload[1],
            currentPage:action.payload[0].current_page,
            nextPage:action.payload[0].next_page,
            perPage:action.payload[0].per_page,
            totalofItems:action.payload[0].overall_lots_number

        }
    },
    [SetFilterData.type]:(state:InitialStateType,action:PayloadAction<FilterData>)=>{

        return{
            ...state,
            Data:action.payload,
            isload:false
        }
    },
    [setFuel.type]:(state,action:PayloadAction<string>)=>{
        return{
            ...state,
            fuels:action.payload
        }
    },
    [setMark.type]:(state,action:PayloadAction<string>)=>{
        return{
            ...state,
            markes:action.payload
        }
    },
    [setbody_style.type]:(state,action:PayloadAction<string>)=>{
        return{
            ...state,
            body_style:action.payload
        }
    },
    [setOdometr.type]:(state,action:PayloadAction<{min:number,max:number}>)=>{
        return{
            ...state,
            odometer:action.payload
        }
    },
    [setYear.type]:(state,action:PayloadAction<{min:number,max:number}>)=>{
        return{
            ...state,
            year:action.payload,
            isload:false
            
        }
    },
    [setaccident.type]:(state,action:PayloadAction<{min:number,max:number}>)=>{
        return{
            ...state,
            accident:action.payload,
            isload:false
            
        }
    },
    [SetCalculate.type]:(state,action:PayloadAction<res_calculator>)=>{
        return{
            ...state,
            res_calculator:action.payload
        }
    }



})