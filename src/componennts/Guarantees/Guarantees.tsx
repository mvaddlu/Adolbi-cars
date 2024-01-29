import React from 'react'
import Baner1 from "../../accest/Guarantees/Baner1.webp"
import business from "../../accest/Guarantees/icons8-business-report-50.png"
import contract from "../../accest/Guarantees/icons8-contract-64.png"
import information from "../../accest/Guarantees/icons8-information-50.png"
import integrity from "../../accest/Guarantees/icons8-integrity-50.png"
import details from "../../accest/Guarantees/icons8-more-details-50.png"
import pass from "../../accest/Guarantees/icons8-pass-by-64.png"
import quality from "../../accest/Guarantees/icons8-quality-50.png"
import support from "../../accest/Guarantees/icons8-technical-support-50.png"
import gogleMaps from "../../accest/Main/gogleMaps.webp"
import arrow from "../../accest/Main/play.png"
import Baner2 from "../../accest/Main/Baner2.webp"
import { Item } from '../Item/Item'
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import { FormQuestionsBorder } from '../Forms/FormQuestionsBorder'
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from '../../app/store'
import { GetListofItem } from '../../app/Catalog'
import Image from '../Image'

export const Guarantees = () => {
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch(GetListofItem({body_style:'',color:'',drive_type:'',engine_type:'',fuel:'',key:'',make:'',model:'',odometer_from:0,odometer_to:999999,page:1,pre_accident_value_from:0,pre_accident_value_to:999999,primary_damage:'',transmission:'',year_from:0,year_to:99999}))
    },[dispatch])
    const { ListItem } = useSelector( (u:RootState)=>u.Catalog)
  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen  gap-[75px]'>
        <div className=' mx-auto flex gap-[50px]'>
            <div className='mx-auto'>
                <div className='font-title text-[21px] font-bold'>
                    Гарантії
                </div>
                <div className='text-[15px] w-[300px] md:w-[472px]'>
                    <div>
                        Наша компанія надає гарантії для клієнтів, які купують автомобілі зі США. Ми розуміємо, що важливо мати впевненість у якості та стані авто.
                    </div>
                    <div>
                        З нашою компанією ви укладаєте договір, який забезпечує ваші інтереси.  
                        Кожен автомобіль, який ви купуєте через нашу компанію, перевіряється на технічний стан. Тому ми гарантуємо, що авто відповідає опису та усім вимогам безпеки, а також надаємо повний звіт про історію кожного автомобіля, включаючи дані про попередніх власників, аварії та обслуговування.

                    </div>
                </div>
            </div>
            <Image className='hidden xl:block rounded w-[650px] h-[270px] object-cover' src={Baner1} alt="" />
        </div>
        <div className=' mx-auto'>
            <div className='font-title mx-auto md:mx-0 font-bold text-[21px] my-5'>
                Гарантії авто зі США
            </div>
            <div className='flex flex-col flex-wrap mx-auto  xl:flex-row gap-[15px] w-screen xl:w-[1200px]'> 
                <div className='w-[340px] md:w-[550px] mx-auto h-[250px] bg-[#12120e] rounded text-white p-8'>
                    <div className='flex items-center'>
                        <div className='w-[90px] h-[90px] bg-[#740706] rounded-full flex justify-center items-center'>
                            <Image className='h-[60px] w-[60px]' src={integrity} alt="" />
                        </div>
                        <div className='text-[21px] font-title ml-5'>
                            Легальність та Чесність
                        </div>
                    </div>
                    <div className='text-[14px] mt-5'>
                    Ми гарантуємо, що всі транспортні засоби привозяться до України відповідно до законодавства та з чесними оборудками.
                    </div>
                </div> 
                <div className='w-[340px] md:w-[550px] mx-auto h-[250px] bg-[#12120e] rounded text-white p-8'>
                    <div className='flex items-center'>
                        <div className='w-[90px] h-[90px] bg-[#740706] rounded-full flex justify-center items-center'>
                            <Image className='h-[60px] w-[60px]' src={quality} alt="" />
                        </div>
                        <div className='text-[21px] font-title ml-5'>
                            Якість і Стан
                        </div>
                    </div>
                    <div className='text-[14px] mt-5'>
                        Ви отримуєте автомобіль у найкращому стані, оскільки ми докладаємо всі зусилля для того, щоб забезпечити високу якість та технічну справність кожного лоту.
                    </div>
                </div> 
                <div className='w-[340px] md:w-[550px] mx-auto h-[250px] bg-[#12120e] rounded text-white p-8'>
                    <div className='flex items-center'>
                        <div className='w-[90px] h-[90px] bg-[#740706] rounded-full flex justify-center items-center'>
                            <Image className='h-[60px] w-[60px]' src={details} alt="" />
                        </div>
                        <div className='text-[21px] font-title ml-5'>
                            Повна Інформація
                        </div>
                    </div>
                    <div className='text-[14px] mt-5'>
                        Ми надаємо інформацію про кожен автомобіль, включаючи його історію, технічні характеристики та фотографії.
                    </div>
                </div> 
                <div className='w-[340px] md:w-[550px] mx-auto h-[250px] bg-[#12120e] rounded text-white p-8'>
                    <div className='flex items-center'>
                        <div className='w-[90px] h-[90px] bg-[#740706] rounded-full flex justify-center items-center'>
                            <Image className='h-[60px] w-[60px]' src={pass} alt="" />
                        </div>
                        <div className='text-[21px] font-title ml-5'>
                            Супровід Представниками
                        </div>
                    </div>
                    <div className='text-[14px] mt-5'>
                        Наші представники супроводжують кожен лот, щоб ви мали впевненість у його стані під час транспортування та доставки.
                    </div>
                </div>
            </div>
        </div>
        <div className=' mx-auto'>
            <div className='font-title mx-auto md:mx-0 font-bold text-[21px] my-5'>
                Гарантійні зобов’язання компанії
            </div>
            <div className='flex flex-col flex-wrap mx-auto xl:flex-row gap-[15px] w-screen xl:w-[1200px]'> 
                <div className='w-[340px] md:w-[550px] mx-auto h-[250px] bg-[#12120e] rounded text-white p-8'>
                    <div className='flex items-center'>
                        <div className='w-[90px] h-[90px] bg-[#740706] rounded-full flex justify-center items-center'>
                            <Image className='h-[60px] w-[60px]' src={support} alt="" />
                        </div>
                        <div className='text-[21px] font-title ml-5'>
                            Консультації та Підтримка
                        </div>
                    </div>
                    <div className='text-[14px] mt-5'>
                        Ми надаємо консультації та підтримку на кожному етапі співпраці, готові відповісти на всі ваші запитання та надати допомогу.
                    </div>
                </div> 
                <div className='w-[340px] md:w-[550px] mx-auto h-[250px] bg-[#12120e] rounded text-white p-8'>
                    <div className='flex items-center'>
                        <div className='w-[90px] h-[90px] bg-[#740706] rounded-full flex justify-center items-center'>
                            <Image className='h-[60px] w-[60px]' src={business} alt="" />
                        </div>
                        <div className='text-[21px] font-title ml-5'>
                            Звіти про Стан
                        </div>
                    </div>
                    <div className='text-[14px] mt-5'>
                        Під час транспортування автомобіля нашими представниками складаються звіти про його стан, що гарантує якість і надійність при доставці.
                    </div>
                </div> 
                <div className='w-[340px] md:w-[550px] mx-auto h-[250px] bg-[#12120e] rounded text-white p-8'>
                    <div className='flex items-center'>
                        <div className='w-[90px] h-[90px] bg-[#740706] rounded-full flex justify-center items-center'>
                            <Image className='h-[60px] w-[60px]' src={contract} alt="" />
                        </div>
                        <div className='text-[21px] font-title ml-5'>
                            Договір
                        </div>
                    </div>
                    <div className='text-[14px] mt-5'>
                        Кожен клієнт укладає офіційний договір з нашою компанією, в якому фіксуються всі зобов'язання та умови співпраці.
                    </div>
                </div> 
                <div className='w-[340px] md:w-[550px] mx-auto h-[250px] bg-[#12120e] rounded text-white p-8'>
                    <div className='flex items-center'>
                        <div className='w-[90px] h-[90px] bg-[#740706] rounded-full flex justify-center items-center'>
                            <Image className='h-[60px] w-[60px]' src={information} alt="" />
                        </div>
                        <div className='text-[21px] font-title ml-5'>
                            Інформаційна Прозорість
                        </div>
                    </div>
                    <div className='text-[14px] mt-5'>
                        Ми забезпечуємо вас всією інформацією, надаючи доступ до всієї документації та звітів про автомобілі.
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-auto'>
            <div className='font-title text-[26px] font-bold'>
                ВІДГУКИ
            </div>
            <div className=' text-[20px] font-bold my-3'>
                КЛІЄНТИ ПРО НАС
            </div>
            <div className=' flex flex-col sm:flex-row w-[350px]  sm:w-[620px] xl:w-[1210px] sm:h-[200px] bg-[#12120e] text-white p-5'>
                <div className='flex flex-col items-center'>
                    <div className='w-[177px] h-[146px] '>
                        <Image src="" alt="" />
                    </div>

                    <div className='font-bold'>
                        Autor
                    </div>
                </div>
                <div className=' p-5 ml-5'>
                    <div className='text-[20px] font-bold'>
                        title 
                    </div>
                    <div>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту 
                    </div>
                </div>
            </div>
            <div className='flex flex-col xl:flex-row xl:w-[1210px] gap-[10px] xl:gap-[50px] mt-[10px]'>
                <div className=' flex flex-col sm:flex-row w-[350px]  sm:w-[620px] box-border sm:h-[200px] bg-[#12120e] text-white p-2'>
                    <div className='flex flex-col items-center'>
                        <div className='w-[177px] h-[146px] '>
                            <Image src="" alt="" />
                        </div>
                        <div className='font-bold'>
                            Autor
                        </div>
                    </div>
                    <div className=' p-5 ml-5'>
                        <div className='text-[20px] font-bold'>
                            title 
                        </div>
                        <div>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту 
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row w-[350px]  sm:w-[620px] box-border sm:h-[200px] bg-[#12120e] text-white  p-2'>
                    <div className='flex flex-col items-center'>
                        <div className='w-[177px] h-[146px] ' >
                            <Image src="" alt="" />
                        </div>
                        <div className='font-bold'>
                            Autor
                        </div>
                    </div>
                    <div className=' p-5 ml-5'>
                        <div className='text-[20px] font-bold'>
                            title 
                        </div>
                        <div>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту 
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white flex-col sm:flex-row  flex justify-end gap-[10px] mt-5 sm:mr-[250px]'>
                <button className='w-[230px] h-[60px] bg-[#740706] rounded flex justify-center items-center mx-2'>
                    Відгуки в Google <Image src={gogleMaps} className='w-[42px] h-[42px]' alt="" />
                </button>
                <button className='w-[230px] h-[60px] bg-[#740706] rounded flex justify-center items-center mx-2'>
                    Подивитися відгуки
                </button>
            </div>
        </div>
        <div className='mx-auto flex flex-col gap-10 '>
            <div className='w-screen  xl:pl-56 h-[109px] bg-[#12120e] '>
                    <div className='ml-5 mt-8 text-[26px] font-title font-bold text-white'>
                        ПОПУЛЯРНІ АВТО
                    </div>
            </div>
            <div className='w-screen flex gap-[20px] justify-center items-center overflow-x-hidden'>
                <Image src={arrow} alt="" className='w-[28px] h-[25px] ml-32 scale-x-[-1] scale-y-[1]'/>
                    {ListItem.map(u=><Item {...u} />)}
                <Image src={arrow} alt="" className='w-[28px] h-[25px]'/>
            </div>
        </div>
        <div className='mx-auto flex -mb-32 '>
            <FormQuestionsBorder/>
            <div className='hidden xl:block'> 
                <Image className='ml-80' src={Baner2} alt="" />
            </div>
        </div>
        <div className='w-screen  mx-auto bg-[#12120e] min-h-[280px] text-white flex items-center'>
            <div className=' mx-auto flex flex-col xl:flex-row gap-10 pt-6 p-4'>
                <div>
                    <div className='text-[22px] font-bold '>
                        ПІДПИСУЙТЕСЬ!
                    </div>
                    <div className='text-[18px]'>
                        Та дізнавайтеся перші про вигідні пропозиції
                    </div>
                </div>
                <div className='flex  mx-auto flex-col md:flex-row gap-2'>
                    <input className='box-border p-4 w-[320px] h-[54px] bg-[#12120e] border-[3px] border-solid border-[#f1f1f6]' placeholder='Введіть ваш Email' type="text" />
                    <button className='h-[54px] bg-[#730706] w-[220px]'>
                        Підписатися
                    </button>
                </div>
            </div>
        </div>
        <div className='mx-auto'>
            <div className='text-[26px] font-bold font-title'>
                КОНТАКТИ
            </div>
            <div className='flex flex-col sm:flex-row gap-12 my-10'>
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
