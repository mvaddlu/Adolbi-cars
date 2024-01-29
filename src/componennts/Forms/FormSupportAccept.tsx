import React from 'react'
import comment from "../../accest/AboutUS/comment.svg"
import phone from "../../accest/AboutUS/phone.svg"
import user from "../../accest/AboutUS/user.svg"
import {useFormik} from "formik"
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
    name:string,
    phone:string,
    comment:string
}

export const FormSupportAccept = () => {
    const disatch = useAppDispatch()
    const formik = useFormik<InitialValues>({
        initialValues:{
            comment:'',
            name:'',
            phone:'',
        },
        onSubmit:({comment,name,phone})=>{
            disatch(SendQuestions({comment,name,phone_number:phone,message_type:''}))
        },
        validationSchema:validationSchema
    })
  return (
    <form className='mt-14  flex flex-col gap-3 ml-4 lg:ml-20'>
        <div className='font-title font-bold text-[22px] '>
            Або заповніть форму для замовлення консультації
        </div>
        <div>
            Ми завжди відкриті до співпраці
        </div>
        <div>
            <div className='flex my-2'>
                <Image className='w-[26px] h-[26px]' src={phone} alt="" />
                <div className='text-13px ml-2'>
                    Номер телефону
                </div>
            </div>
            <input  {...formik.getFieldProps('phone')}className=' text-black box-border p-4 bg-white outline-none rounded w-[250px]  md:w-[360px] h-[54px]' placeholder='+380 XX XX XX XXX' type="text" />
            {formik.errors.phone && formik.touched.phone && (
                <div className='text-red-600'>{formik.errors.phone}</div>
            )}
        </div>
        <div>
            <div className='flex my-2 '>
                <Image className='w-[26px] h-[26px]' src={user} alt="" />
                <div className='text-13px ml-2'>
                    Ваше ім’я
                </div>
            </div>
            <input {...formik.getFieldProps('name')}className=' text-black box-border p-4 bg-white outline-none rounded  w-[250px]  md:w-[360px] h-[54px]' placeholder='Ім’я Прізвище' type="text" />
            {formik.errors.name && formik.touched.name && (
                <div className='text-red-600'>{formik.errors.name}</div>
            )}
        </div>
        <div>
            <div className='flex my-2'>
                <Image className='w-[26px] h-[26px]' src={comment} alt="" />
                <div className='text-13px ml-2'>
                    Коментар
                </div>
            </div>
            <textarea name='comment' onChange={(e:any)=>formik.handleChange(e)} className=' text-black box-border p-4 bg-white outline-none rounded  w-[250px]  md:w-[360px] h-[150px]' placeholder='Коментар' ></textarea>
        </div>
        <button onClick={(e:any)=>formik.handleSubmit(e)} className=' bg-[#740706] rounded  w-[250px]  md:w-[360px] h-[50px]'>
            Отримати консультацію
        </button>                    
    </form>
  )
}
