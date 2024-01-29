import React from 'react'
import Baner1 from "../../accest/Main/Baner1.webp"
import { useFormik } from 'formik'
import { useAppDispatch } from '../../app/store'
import { SendQuestions } from '../../app/Message'
import Image from '../Image'

export const FormPhone = () => {
    const dispatch = useAppDispatch()
    const formik = useFormik<{phone_number:string}>({
        initialValues:{
            phone_number:''
        },onSubmit:({phone_number})=>{
            dispatch(SendQuestions({comment:'',message_type:'Отримати консультацію',name:'',phone_number}))
        }
    })
  return (
    <form className=' text-white'>
        <div className='w-screen  min-h-[350px] bg-[#12120e] flex items-center justify-between'>
            <div className='h-[350px]  xl:w-[250px] hidden md:block   box-border '>
                <Image src={Baner1}  alt="" className='h-[350px]  xl:w-[250px]   box-border '/>
            </div>
            <div className='flex flex-col mx-auto lg:flex-row gap-5 w-[66%] justify-between'>  
                <div className='flex flex-col justify-between '>
                    <div className='font-mono text-[20px] font-bold'>
                        Зателефонуйте нам та отримайте консультацію
                    </div>
                    <button className='border-4 border-solid border-[#aeaeb2] w-[270px] h-[60px] mt-10 font-mono text-[15px]' >
                        +380 99 491 32 25
                    </button>
                </div>
                <div className='mr-16 flex flex-col justify-between'>
                    <div className='font-mono text-[20px] font-bold'>
                        Або залиште свій номер телефону
                        ,<br /> і ми вам перезвонимо
                    </div>
                    <div className='flex mt-10 flex-col sm:flex-row gap-2'>
                        <input name='phone_number' onChange={formik.handleChange} type="text" placeholder='+380XXXXXXXX' className='w-[270px] h-[60px] border-4 border-solid border-[#aeaeb2] bg-[#12120e] p-2 outline-none'/>
                        <button onClick={(e:any)=>formik.handleSubmit(e)} className='bg-[#740706] w-[270px] sm:w-[170px] h-[60px] rounded sm:ml-5'>Відправити</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
  )
}
