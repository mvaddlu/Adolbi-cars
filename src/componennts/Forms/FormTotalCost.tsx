import { Select } from 'antd'
import React from 'react'
import { useFormik } from 'formik'
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../app/store";
import {GetCalculatorData} from "../../app/Catalog";

interface InitialValues{
    WinningBet:number,
    EngineType:string,
    FuelsType:string,
    YearIssue:string,
    total_loss:boolean,
    add_damage:boolean

}

export const FormTotalCost = () => {
    const {engine_types,fuels,years } = useSelector((u:RootState)=>u.Catalog.Data)
    const { isload,res_calculator } =useSelector((u:RootState)=>u.Catalog)
    const {customs_payments,delivery,overall } = res_calculator
    const dispatch = useAppDispatch()
    const {Option} = Select
    const formik = useFormik<InitialValues>({
        initialValues:{
            WinningBet:0,
            FuelsType:'',
            EngineType:'',
            YearIssue:'',
            add_damage:false,
            total_loss:false
        },
        onSubmit:({YearIssue,total_loss,add_damage,FuelsType,EngineType,WinningBet})=>{
            dispatch(GetCalculatorData({engine_type:FuelsType,price:WinningBet,engine_size:EngineType,year:YearIssue,}))
        }
    })

    if(isload){
        return(
            <div>
                ...Loading
            </div>
        )
    }else{
        return (
            <form className=' w-[330px] mx-3 sm:w-[637px]  bg-[#12120e] flex flex-col text-white p-5 box-border font-mono'>
                <div className='font-title text-[23px] font-bold'>
                    КАЛЬКУЛЯТОР ЗАГАЛЬНОЇ ВАРТОСТІ
                </div>
                <div className='border-b border-solid border-[#f1f1f6] my-8'>
                    <div className='text-[18px]  font-bold'>
                        Крок 1: аукціон
                    </div>
                    <div className='flex flex-col sm:flex-row  gap-[10px]'>
                        <div className='text-[#aeaeb2]'>
                            <div>
                                Переможна ставка
                            </div>
                            <input name='WinningBet' onChange={formik.handleChange} placeholder='Переможна ставка, $' type="text" className='outline-none p-3 w-[260px] h-[40px] border-4 border-solid border-[#aeaeb2] bg-[#12120e] rounded' />
                        </div>
                    </div>
                    <div className='flex mb-5 justify-between'>
                        Вартість авто на аукціоні: <div className='text-[20px] font-bold text-[#ad3d3a]'>${formik.values.WinningBet}</div>
                    </div>
                </div>
                <div className='border-b border-solid border-[#f1f1f6] my-8'>
                    <div className='text-[18px]  font-bold'>
                        Крок 2: доставка
                    </div>
                    <div className='flex mb-5 justify-between'>
                        Вартість доставки: <div className='text-[20px] font-bold text-[#ad3d3a]'>${delivery}</div>
                    </div>
                </div>
                <div className='border-b border-solid border-[#f1f1f6] my-8' >
                    <div className='text-[18px]  font-bold'>
                        Крок 3: розмитнення
                    </div>
                    <div className='flex flex-col sm:flex-row  flex-wrap gap-[10px]'>
                        <div>
                            <div>
                                Тип двигуна
                            </div>
                            <Select onSelect={(e:any)=>formik.setFieldValue('FuelsType',e)} placeholder="Тип двигуна" className='bg-[#12120e] w-[260px] h-[40px]'>
                                {fuels.map((u:{label:string,value:number})=><Option key={u.label}><div className='text-black'>  {u.label}</div></Option>)}
                            </Select>
                        </div>
                        <div>
                            <div>
                                Об’єм двигуна
                            </div>
                            <Select onSelect={(e:any)=>formik.setFieldValue('EngineType',e)} placeholder='Об’єм двигуна' className="w-[260px] ">
                                {engine_types.map((u:{label:string,value:number})=><Option key={u.label}><div className='text-black'>  {u.label}</div></Option>)}
                            </Select>
                        </div>
                        <div>
                            <div>
                                Рік випуску
                            </div>
                            <Select onSelect={(e:any)=>formik.setFieldValue('YearIssue',e)} placeholder="Рік випуску" className='bg-[#12120e] w-[260px] h-[60px]'>
                                {years.map((u:{label:string,value:number})=><Option key={u.label}><div className='text-black'>  {u.label}</div></Option>)}
                            </Select>
                        </div>
                    </div>
                    <div className='flex mb-5 justify-between text-[18px]'>
                        Вартість розмитнення: <div className='text-[20px] font-bold text-[#ad3d3a]'>${customs_payments}</div>
                    </div>
                </div>
                <div>
                    <div className='flex mb-5 justify-between text-[21px] font-bold my-2'>
                        Загальна вартість:<div className='text-[20px]  text-[#ad3d3a]'>${overall}</div>
                    </div>
                    <button onClick={(e:any)=>formik.handleSubmit(e)} className='w-[300px] h-[55px] text-[19px] bg-[#740706] rounded' >
                        Детальний розрахунок
                    </button>
                </div>
            </form>
        )
    }
}
