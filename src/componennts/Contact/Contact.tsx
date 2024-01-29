import React from 'react'
import PhoneWhite from "../../accest/Contact/PhoneWhite.svg"
import UserWhite from "../../accest/Contact/UserWhite.svg"
import commentWhite from "../../accest/Contact/commentWhite.svg"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import * as Yup from 'yup'
import { useAppDispatch } from '../../app/store'
import { useFormik } from 'formik'
import { SendQuestions } from '../../app/Message'
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

export const Contact = () => {
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
    <div className='mt-10 mx-auto flex flex-col xl:flex-row gap-[50px]'>
        <form className='w-[340px] md:w-[600px] min-h-[600px] md:h-[600px] text-white bg-[#12120e] p-5 flex flex-col gap-[25px] rounded-md'>
            <div className='font-title text-[21px] font-bold'>
                Зв‘яжіться з нами!
            </div>
            <div className='my-2'>
                Заповніть форму, щоб отримати консультацію нашого експерта
            </div>
            <div className='flex flex-col md:flex-row gap-[20px]'>
                <div>
                    <div className='flex mb-2'>
                        <img className='w-[30px] h-[30px]' src={PhoneWhite} alt="" />
                        <div className='text-[15px]'>
                            Номер телефону
                        </div>
                    </div>
                    <input {...formik.getFieldProps('phone')}className='w-[246px] h-[60px] outline-none rounded p-3 text-black' placeholder='+380 XX XX XX XXX'/>
            {formik.errors.phone && formik.touched.phone && (
                <div className='text-red-600'>{formik.errors.phone}</div>
            )}                
                </div>
                <div>
                    <div className='flex mb-2'>
                        <img className='w-[30px] h-[30px]' src={UserWhite} alt="" />
                        <div className='text-[15px]'>
                            Ваше ім’я
                        </div>
                    </div>
                    <input {...formik.getFieldProps('name')}className='w-[246px] h-[60px] outline-none rounded p-3 text-black' placeholder='Ім’я Прізвище'/>
                    {formik.errors.name && formik.touched.name && (
                        <div className='text-red-600'>{formik.errors.name}</div>
                    )}                
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex mb-2'>
                    <Image className='w-[30px] h-[30px]' src={commentWhite} alt="" />
                    <div className='text-[15px]'>
                    Коментар
                    </div>
                </div>
                <textarea className='h-[150px] w-[250px] md:w-[530px] p-3 rounded text-black' placeholder='Коментар'></textarea>
            </div>
            <button className='text-[15px] font-bold h-[60px] w-[250px] md:w-[390px] bg-[#740706] rounded'>Зв’язатися</button>
        </form>
        <div className='mx-auto'>
            <div className='text-[26px] font-bold font-title'>
                КОНТАКТИ
            </div>
            <div className='flex flex-col gap-12 my-10'>
                <div className='flex flex-wrap gap-[10px] text-[18px] font-bold'>
                    <Image className='w-[35px] h-[35px]' src={PhoneBlack} alt="" />
                    <div>
                        Телефон:
                    </div>
                    <div>
                        +380 99 491 32 25
                    </div>
                </div>
                <div className='flex flex-wrap gap-[10px] text-[18px] font-bold'>
                    <Image className='w-[35px] h-[35px]' src={EmailBlack} alt="" />
                    <div>
                        Email:
                    </div>
                    <div>
                       Yemetsdarina@gmail.com
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
