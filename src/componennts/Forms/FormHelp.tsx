import { Select } from 'antd'
import React from 'react'
import {useFormik} from "formik"
import { RootState, useAppDispatch } from '../../app/store'
import { GetFilterData } from '../../app/Catalog'
import { useSelector } from 'react-redux'
import { SendSelect_lot } from '../../app/Message'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Мінімум 3 символи')
    .max(20, 'Максимум 20 символів')
    .required("Обов'язкове поле"),
    phone: Yup.string()
    .matches(/^[0-9]+$/, 'Номер телефону повинен містити лише цифри')
    .min(10, 'Мінімум 10 цифр')
    .max(15, 'Максимум 15 цифр')
    .required("Обов'язкове поле"),
});
interface InitialValues{
    SelectMark:string,
    YearFrom:string,
    YearTo:string,
    PriceFrom:string,
    PriceTo:string,
    phone:string,
    name:string
}


export const FormHelp = () => {
    const {Option} =Select
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch(GetFilterData())
    },[dispatch])
    const {pre_accident_values,makes,years} = useSelector((u:RootState)=>u.Catalog.Data)
    const { isload } = useSelector((u:RootState)=>u.Catalog)
    const formik = useFormik<InitialValues>({
        initialValues:{
            SelectMark:'',
            YearFrom:'',
            YearTo:'',
            PriceFrom:'',
            PriceTo:'',
            phone:'',
            name:''
        },
        onSubmit:({PriceFrom,PriceTo,SelectMark,YearFrom,YearTo,name,phone})=>{
            dispatch(SendSelect_lot({make:SelectMark,name,phone_number:phone,price_from:PriceFrom,price_to:PriceTo,year_from:YearFrom,year_to:YearTo}))
        },
        onReset(values) {
            values = {name:'',phone:'',PriceFrom:'',PriceTo:"",SelectMark:'',YearFrom:'',YearTo:'',}
 
        },
        validationSchema
    })
    if(isload){
        return(
            <div>

            </div>
        )
    }else{
        return (
            <form onSubmit={formik.handleSubmit}   className='w-[300px] sm:w-[600px]  xl:w-[950px] xl:h-[240px] bg-white p-5 text-[#12120e] drop-shadow-lg'>
                <div className='text-[17px] font-bold font-title'>
                    ДОПОМОГА У ПІДБОРІ АВТО
                </div>
                <div className='flex flex-col xl:flex-row'>
                    <div>
                        <div className='text-[15px]'>
                            Марка
                        </div>
                        <Select onSelect={(e:any)=>formik.setFieldValue('SelectMark',e)} placeholder="Марка" className='w-[210px] h-[40px] mt-1'>
                            {makes.map((u:{label:string,value:number})=><Option key={u.label}><div className='text-black'>  {u.label}</div></Option>)}
                        </Select>
                    </div>
                    <div className='flex'>
                        <div className='mx-2'>
                            <div className='text-[15px]'>
                                Рік від
                            </div>
                            <Select onSelect={(e:any)=>formik.setFieldValue('YearFrom',e)} placeholder="Рік від" className='w-[120px] h-[40px] mt-1'>
                                {years.map((u:{label:string,value:number})=><Option key={u.label}><div className='text-black'>  {u.label}</div></Option>)}
                            </Select>
                        </div>
                        <div className='mx-2'>
                            <div className='text-[15px]'>
                                Рік до
                            </div>
                            <Select onSelect={(e:any)=>formik.setFieldValue('YearTo',e)} placeholder="Рік до" className='w-[120px] h-[40px] mt-1'>
                                {years.map((u:{label:string,value:number})=><Option key={u.label}><div className='text-black'>  {u.label}</div></Option>)}
                            </Select>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mx-2'>
                            <div className='text-[15px]'>
                                Ціна від
                            </div>
                            <Select onSelect={(e:any)=>formik.setFieldValue('PriceFrom',e)} placeholder="Ціна від" className='w-[120px] h-[40px] mt-1'>
                                {pre_accident_values.map((u:{label:string,value:number})=><Option key={u.label}><div className='text-black'>  {u.label}</div></Option>)}
                            </Select>
                        </div>
                        <div className='mx-2'>
                            <div className='text-[15px]'>
                                Ціна до
                            </div>
                            <Select onSelect={(e:any)=>formik.setFieldValue('PriceTo',e)} placeholder="Ціна до" className='w-[120px] h-[40px] mt-1'>
                                {pre_accident_values.map((u:{label:string,value:number})=><Option key={u.label}><div className='text-black'>  {u.label}</div></Option>)}
                            </Select>
                        </div>
                    </div>
                </div>
                <div className='flex  flex-col xl:flex-row'>
                    <div className='mx-2'>
                        <div className='text-[15px]'>
                            Телефон
                        </div>
                        <input {...formik.getFieldProps('phone')}  type="text" className=' p-2 w-[202px] h-[32px] rounded border-[3px] border-solid border-[#12120e]' placeholder='+380 ХХ ХХ ХХХ' />
                        {formik.errors.phone && formik.touched.phone && (
                            <div className='text-red-600'>{formik.errors.phone}</div>
                        )}
                    </div>
                    <div className='mx-2'>
                        <div className='text-[15px]'>
                            Ваше ім’я
                        </div>
                        <input {...formik.getFieldProps('name')}  type="text" className=' p-2 w-[252px] h-[32px] rounded border-[3px] border-solid border-[#12120e]' placeholder='Ім’я Прізвище' />
                        {formik.errors.name && formik.touched.name && (
                            <div className='text-red-600'>{formik.errors.name}</div>
                        )}
                    </div>
                    <button type='submit'  className='text-white font-bold rounded w-[260px] h-[40px] bg-[#740706] mx-2 mt-4'>
                        Вибрати авто
                    </button>
                </div>
            </form>
        ) 
    }

}
