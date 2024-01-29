import { Select } from 'antd'
import React from 'react'
import { useFormik } from 'formik'
import { RootState, useAppDispatch } from '../../app/store'
import { GetListofItem } from '../../app/Catalog'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

interface InitialValues{
    SelectMark:string,
    SelectModel:string,
    YearBefore:number,
    YearAfter:number
}

export const FormSelectCar = () => {
    const { Option } = Select
    const navigate = useNavigate()
    const dispatch = useAppDispatch()    
    const {makes,models,years} = useSelector((u:RootState)=>u.Catalog.Data)
    const { isload } = useSelector((u:RootState)=>u.Catalog)
    const formik =useFormik<InitialValues>({
        initialValues:{
            SelectMark:'',
            SelectModel:'',
            YearAfter:0,
            YearBefore:0
        },
        onSubmit:(values)=>{
            dispatch(GetListofItem({make:values.SelectMark,model:values.SelectModel,year_from:values.YearAfter,year_to:values.YearBefore}))
            navigate('/calalog',{relative:'path'})
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
            <form className='p-10 ml-4 sm:ml-0 w-[350px] sm:w-[606px] md:h-[375px] bg-[#12120e] rounded text-white z-10'>
                <div className='font-title text-[18px] '>Виберіть Авто:</div>
                <div>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='flex flex-col  mx-3'>
                            <label htmlFor="mark" className='my-5'>Марка</label>
                            <Select onSelect={(e:string)=>formik.setFieldValue('SelectMark',e)} placeholder='Виберіть марку' className='w-[240px] h-[40px] text-black '>
                                {makes.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.label}</div></Option>)}
                            </Select>
                        </div>
                        <div className='flex flex-col  mx-3'>
                            <label htmlFor="mark" className='my-5'>Модель</label>
                            <Select onSelect={(e:string)=>formik.setFieldValue('SelectModel',e)} placeholder='Виберіть Модель' className='w-[240px] h-[40px] text-black '>
                                {models.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.label}</div></Option>)}
                            </Select>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col  mx-3'>
                            <label htmlFor="mark" className='my-5'>Рік від</label>
                            <Select onSelect={(e:string)=>formik.setFieldValue('YearAfter',e)} placeholder='Рік від' className=' w-[120px] sm:w-[240px] h-[40px] text-black '>
                                {years.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.label}</div></Option>)}
                            </Select>
                        </div>
                        <div className='flex flex-col mx-3'>
                            <label htmlFor="mark" className='my-5'>Рік до</label>
                            <Select onSelect={(e:string)=>formik.setFieldValue('YearBefore',e)} placeholder='Рік до' className=' w-[120px] sm:w-[240px] h-[40px] text-black '>
                                {years.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.label}</div></Option>)}
                            </Select>
                        </div>
                    </div>
                </div>
                <button onClick={(e:any)=> formik.handleSubmit(e)} className='bg-[#740706] ml-5 sm:ml-0 w-[240px] sm:w-[140px] h-[41px] my-5 rounded'>Знайти</button>
            </form> 
        )
    }


}
