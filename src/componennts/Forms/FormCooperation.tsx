import React from 'react'
import phone from '../../accest/Cooperation/phone.svg'
import user from '../../accest/Cooperation/user.svg'
import comment from '../../accest/Cooperation/comment.svg'
import { useFormik} from "formik"
import { useAppDispatch } from '../../app/store'
import { SendQuestions } from '../../app/Message'
import * as Yup from 'yup';
import Image from '../Image'

interface InitialValues{
    phone:string,
    name:string,
    comment:string
}


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
export const FormCooperation = () => {
    const dispatch = useAppDispatch()
    const formik = useFormik<InitialValues>({
        initialValues:{
            comment:'',
            name:'',
            phone:''
        },
        onSubmit:({comment,name,phone})=>{
            dispatch(SendQuestions({comment,message_type:'',name,phone_number:phone}))
        },
        validationSchema:validationSchema
    })
  return (
    <form className=' mx-auto flex flex-col items-center gap-4'>
        <div className='text-[21px] font-bold font-title w-[250px] md:w-[350px]'>
            Отримайте вигідні умови партнерства
        </div>
        <div className='flex gap-[30px] flex-col lg:flex-row'>
            <div>
                <div className='flex gap-4 text-[15px] my-2'>
                    <Image className='w-[26px] h-[26px]' src={phone} alt="" />
                    <label htmlFor='phone'>
                        Номер телефону
                    </label>
                </div>
                <input {...formik.getFieldProps('phone')} placeholder='+380 XX XX XX XXX' className='h-[60px] w-[250px] border-[3px] border-solid border-[#12120e] rounded box-border p-5' type="text" />
                
                {formik.errors.phone && formik.touched.phone && (
                    <div style={{color:'red'}}>{formik.errors.phone}</div>
                )}
            </div>
            <div>
                <div className='flex gap-4 text-[15px] my-2'>
                    <Image className='w-[26px] h-[26px]' src={user} alt="" />
                    <label htmlFor='name'>
                        Ваше ім’я
                    </label>
                </div>
                <input placeholder='Ім’я Прізвище' 
                className='h-[60px] w-[250px] border-[3px] border-solid border-[#12120e] rounded box-border p-5' type="text"
                {...formik.getFieldProps('name')}/>
                {formik.errors.name && formik.touched.name && (
                    <div style={{color:'red'}}>{formik.errors.name}</div>
                )}
            </div>
        </div>
        <div>
            <div className='flex gap-4 text-[15px] my-2'>
                <Image className='w-[26px] h-[26px]' src={comment} alt="" />
                <div>
                    Коментар
                </div>
            </div>
            <textarea name='comment' onChange={formik.handleChange} placeholder='Коментар' className='w-[250px] md:w-[530px] h-[200px]  border-[3px] border-solid border-[#12120e] rounded box-border p-5'></textarea>
        </div>
        <button onClick={(e:any)=>formik.handleSubmit(e)} className='w-[250px] md:w-[420px] h-[60px] bg-[#740706] rounded text-white'>
            Стати Партнером
        </button>
    </form>
  )
}
