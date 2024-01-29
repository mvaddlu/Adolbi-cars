import React from 'react'
import phone from "../../accest/Main/phone.svg"
import comment from "../../accest/Main/comment.svg"
import user from "../../accest/Main/user.svg"
import { useFormik } from 'formik'
import { useAppDispatch } from '../../app/store'
import { SendQuestions } from '../../app/Message'
import * as Yup from 'yup'
import Image from '../Image'

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
    phone:string,
    name:string,
    comment:string
}

export const FormQuestions = () => {
    const dispatch = useAppDispatch()
    const formik = useFormik<InitialValues>({
        initialValues:{
            comment:'',
            name:'',
            phone:''
        },
        onSubmit:(values)=>{
            dispatch(SendQuestions({comment:values.comment,name:values.name,phone_number:values.phone,message_type:''}))
        },validationSchema:validationSchema
    })
  return (
    <form className='ml-10 flex flex-col gap-[10px]'>
        <div className='font-title text-[26px] font-bold'>
            ЗАЛИШИЛИСЯ ПИТАННЯ?
        </div>
        <div className='font-bold text-[20px]'>
            Наш менеджер охоче відповість на кожне з них
        </div>
        <div>
            <div className='flex mb-1'> 
                <Image src={phone} className='w-[30px] h-[30px] mr-2' alt="" />Номер телефону
            </div>
            <input {...formik.getFieldProps('phone')} className='outline-none box-border p-4 w-[240px] sm:w-[420px] h-[60px] border-4 border-solid border-[#12120e] rounded' placeholder='+380 XX XX XX XXX'/>
            {formik.errors.phone && formik.touched.phone && (
                <div className='text-red-600'>{formik.errors.phone}</div>
            )}
        </div>
        <div>
            <div className='flex  mb-1'>
                <Image src={user} className='w-[30px] h-[30px] mr-2' alt="" />Ваше ім’я
            </div>
            <input {...formik.getFieldProps('name')} className='outline-none box-border p-4 w-[240px] sm:w-[420px] h-[60px] border-4 border-solid border-[#12120e] rounded' placeholder='Ім’я Прізвище'/>
            {formik.errors.name && formik.touched.name && (
                <div className='text-red-600'>{formik.errors.name}</div>
            )}
        </div>
        <div>
            <div className='flex  mb-1'>
                <Image src={comment} className='w-[30px] h-[30px] mr-2' alt="" />Коментар
            </div>
            <textarea name='comment' onChange={formik.handleChange} rows={30} className='outline-none box-border p-4 w-[240px] sm:w-[420px] h-[150px] border-4 border-solid border-[#12120e] rounded' placeholder='Коментар'></textarea>
        </div>
        <button onClick={(e:any)=>formik.handleSubmit(e)} className='text-[19px] w-[240px] sm:w-[420px] h-[60px] bg-[#740706] text-white rounded'>
            Відправити
        </button>
    </form>
  )
}
