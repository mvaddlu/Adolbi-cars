import { useFormik } from 'formik'
import React,{ useState } from 'react'
import { useAppDispatch } from '../../app/store'
import { AsyncFetch } from '../../app/Message'

interface Props{
    title:string,
    button:string,
    style?:string,
    styleButton?:string,
    id:number,
    message_type:string
}
interface InitialValues{
    name:string,
    phone_number:string,
    cost:string,
    commnet:string
}

export const PopUp:React.FC<Props> = ({button,title,style,styleButton,id,message_type}) => {
    const [isOpen,SetisOpen] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    const formik = useFormik<InitialValues>({initialValues:{
        commnet:'',
        cost:'',
        name:'',
        phone_number:''
    },onSubmit:({commnet,cost,name,phone_number})=>{
        dispatch(AsyncFetch({amount:cost,comment:commnet,lot_number:id,message_type:message_type,name,phone_number}))
        SetisOpen(false)
    }})
  return (

    <div>
        <button onClick={()=>SetisOpen(true)} className={styleButton !==undefined?styleButton:'bg-[#740706] rounded h-[45px] w-[120px] sm:w-[180px] text-[14px]'}>
            {button}
        </button>
        {
            isOpen &&    <div className={style !==undefined?style:'absolute z-[70]  top-full left-1/3'}>
                    <form onBlur={()=>SetisOpen(false)} onSubmit={formik.handleSubmit} className='bg-[#f1f1f6]  fixed left-16 sm:left-[15%]  md:left-1/4 lg:left-1/3 bottom-36 sm:bottom-0 gap-[10px] z-[1000] text-black rounded-lg p-5 flex flex-col justify-start items-center box-border w-[350px] sm:w-[520px] h-[560px] my-5 border border-solid border-[#12120e]'>
                        <div className='flex justify-between w-full'> 
                            <div className='text-[21px] font-title font-bold'>
                                {title}
                            </div>
                            <div onClick={()=>SetisOpen(false)} className='text-[32px] text-[#740706] cursor-pointer'>
                                X
                            </div>
                        </div>
                        <div >
                            <div className='hidden md:block'>
                                Ім'я 
                            </div>
                            <input name='name' onChange={formik.handleChange} className=' w-[220px] sm:w-[420px] h-[40px] outline-none p-5 rounded ' type="text" placeholder="Ім'я та прізвище  " />
                        </div>
                        <div >
                            <div className='hidden md:block'>
                                    Телефон 
                            </div>
                            <input name='phone_number' onChange={formik.handleChange} className=' w-[220px] sm:w-[420px] h-[40px] outline-none p-5 rounded ' type="text" placeholder="+ 380 XX XX XX XXX  " />
                        </div>
                        <div  >
                            <div className='hidden md:block'>
                                    Сумма в долр.
                            </div>
                            <input name='cost' onChange={formik.handleChange} className=' w-[220px] sm:w-[420px] h-[40px] outline-none p-5 rounded ' type="text" placeholder="50 $ " />
                        </div>
                        <div >
                            <div className='hidden md:block'>
                                Коментар 
                            </div>
                            <textarea name='commnet' onChange={formik.handleChange} className=' w-[220px] sm:w-[420px] h-[120px] outline-none p-5 rounded' placeholder='Коментар' >

                            </textarea>
                        </div>
                        <button onClick={(e:any)=>formik.handleSubmit(e)} type='button' className='bg-[#740706] rounded h-[45px]  w-[220px] sm:w-[420px] text-white cursor-pointer'>
                            Відправити 
                        </button>
                    </form>
            </div>
        }
    </div>
  )
}
