import React from 'react'
import Baner from "../../accest/ItemPage/Baner.webp"
import { Item } from '../Item/Item'
//import arrow from "../../accest/Main/play.png"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from '../../app/store'
import { GetItemByID } from '../../app/ItemPage'
import { useParams } from 'react-router-dom'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { PopUp } from '../PopUp/PopUp'
import { PopUpWithoutCommnet } from '../PopUp/PopUpWithoutCommnet'
import Image from '../Image'

export const ItemPage = () => {
    const { carID } = useParams()
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch(GetItemByID(Number(carID)))
    },[dispatch,carID])
    const { VIN_code,color,current_bid,drive_type,engine_type,fuel,images,keys,location,lot_name,lot_number,odometer,primary_damage,year } = useSelector((u:RootState)=>u.ItemPage)
    const { ListItem } = useSelector( (u:RootState)=>u.Catalog)
    return (
    <div className='font-mono mt-10 flex flex-col items-start overflow-x-hidden   w-screen sm:pl-36 gap-[75px]'>
        <div className='flex w-full flex-col  ml-2'>
            <div className='font-title text-[21px] '>
                {lot_name}
            </div>
            <div className='flex sm:gap-8 flex-col xl:flex-row'>
                <div className='w-[300px]  lg:w-[823px] flex flex-col gap-8'>
                    <div className='w-[300px] h-[196px] lg:w-[823px] lg:h-[560px] sm:w-[580px] sm:h-[430px]  border border-solid border-[#12120e] overflow-hidden'>
                    <LightGallery
                        onInit={()=>{}}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                    {
                        images.FULL_IMAGE.map(u =><a  className='w-[300px] h-[196px] object-cover lg:w-[823px] lg:h-[560px] rounded ' href={u}><Image className='w-[300px] h-[196px] object-cover lg:w-[823px] lg:h-[560px] rounded '  src={u} alt="" /></a>)
                    }
                    </LightGallery>
                    </div>  
                    <div className='flex ml-5 flex-col xl:flex-row gap-8'>
                        <div className='w-[270px] sm:w-[395px] h-[327px] flex flex-col text-white'>
                            <div className='w-[270px] sm:w-[395px] h-[47px] bg-[#740706]  font-title rounded-tl rounded-tr flex justify-center items-center'>
                                Інформація про авто
                            </div>
                            <div className=' w-[270px] sm:w-[395px] bg-[#12120e] p-5 box-border rounded-bl rounded-br flex flex-col gap-4'>
                                <div className='flex justify-between'>
                                    <div>
                                        Рік
                                    </div>
                                    <div>
                                        {year}
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        Тип палива
                                    </div>
                                    <div>
                                        {fuel}
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        Пробіг
                                    </div>
                                    <div>
                                        {odometer}
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        Об'єм двигуна
                                    </div>
                                    <div>
                                        {engine_type}
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        Привід
                                    </div>
                                    <div>
                                        {drive_type}
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        Колір
                                    </div>
                                    <div>
                                        {color}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[270px] sm:w-[395px] h-[327px] flex flex-col text-white '>
                            <div className='w-[270px] sm:w-[395px] h-[47px] bg-[#740706] font-title rounded-tl rounded-tr flex justify-center items-center'>
                                Пошкодження
                            </div>
                            <div className=' w-[270px] sm:w-[395px] items-center bg-[#12120e] p-5 flex flex-col gap-4 box-border rounded-bl rounded-br'>
                                <div>
                                    <div className='font-title text-[21px] font-bold flex'>
                                        Основні::
                                    </div>
                                    <div>
                                        {primary_damage}
                                    </div>
                                </div>
                                <div>
                                    <div className='font-title text-[21px] font-bold'>
                                        Другорядні:
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                                <PopUpWithoutCommnet message_type='Підібрати запчастини'  button='Підібрати запчастини' styleButton='w-[250px] sm:w-[260px] h-[40px] rounded bg-[#740706]' title='Підібрати запчастини'/>
                                <PopUpWithoutCommnet message_type='Оцінити ремонт' button='Оцінити ремонт' styleButton='w-[250px] sm:w-[260px] h-[40px] rounded bg-[#740706]'  title='Oцінити ремонт' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[270px] ml-5 items-center sm:w-[395px] flex flex-col gap-8 text-white'>
                    <div className='w-[270px] sm:w-[395px] h-[327px] flex flex-col '>
                        <div className='w-[270px] sm:w-[395px] h-[47px] bg-[#740706]  font-title rounded-tl rounded-tr flex justify-center items-center'>
                            Інформація про лот
                        </div>
                        <div className=' w-[270px] sm:w-[395px] bg-[#12120e] box-border p-5 rounded-bl rounded-br flex flex-col gap-4'>
                            <div className='flex justify-between'>
                                <div>
                                    Місцезнаходження
                                </div>
                                <div>
                                    {location}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    Ключі
                                </div>
                                <div>
                                    {keys}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    VIN код
                                </div>
                                <div>
                                    {VIN_code}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    Стан
                                </div>
                                <div>
                                    {primary_damage}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    Пошкодження
                                </div>
                                <div>
                                {primary_damage}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    Реальний пробіг
                                </div>
                                <div>
                                    {odometer}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[270px] sm:w-[395px] h-[327px] flex flex-col '>
                        <div className='w-[270px] sm:w-[395px] h-[47px] bg-[#740706] text-white font-title rounded-tl rounded-tr flex justify-center items-center'>
                            Інформація про ставки
                        </div>
                        <div className=' w-[270px] sm:w-[395px] bg-[#12120e] box-border p-5 rounded-bl rounded-br flex flex-col gap-4'>
                            <div className='border-b-2 pb-1 border-solid border-[#740706] w-[250px] sm:w-[350px]'>
                                Лот  {lot_number}
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    Поточна ставка:
                                </div>
                                <div>
                                    {current_bid}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[270px] sm:w-[395px] h-[327px] flex flex-col '>
                        <div className='w-[270px] sm:w-[395px] h-[47px] bg-[#740706] text-white font-title rounded-tl rounded-tr flex justify-center items-center'>
                            Не втрачай часу
                        </div>
                        <div className=' w-[270px] sm:w-[395px] bg-[#12120e] box-border p-5 rounded-bl rounded-br flex flex-col gap-4 items-center justify-end'>
                            <div>
                                <div className='flex gap-[10px] mb-[10px]'>
                                    <PopUp message_type='Зробити ставку' id={Number(lot_number)} title='Зробити ставку' button='Запропонувати ставку'/>
                                    <PopUp message_type='Замовити авто' id={Number(lot_number)} title='Замовити авто' button='Купити зараз'/>
                                </div>
                                <PopUpWithoutCommnet message_type='Замовити консультацію' button='Замовити консультацію' styleButton='bg-[#740706] rounded h-[45px] w-[250px] sm:w-[370px] text-[14px]' title='Oтримати консультацію' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:-ml-36 sm:mt-52 w-screen flex items-center box-border px-5 h-[230px] bg-[#740706] ' >
            <Image className='h-[404px] w-[720px] hidden xl:block' src={Baner} alt="" />
            <div className='text-[21px] font-title font-bold  sm:w-[450px] sm:m-10 mb-0 text-white'>
                Разом ціна автомобіля з доставкою та розмитненням:  13.000 $
            </div>
            
        </div>
        <div className=' lg:-ml-36 flex flex-col gap-10 '>
            <div className='w-screen sm:pl-36 h-[109px] bg-[#12120e] mt-10'>
                    <div className='ml-5 mt-4 text-[26px] font-title font-bold text-white'>
                        Схожі Авто
                    </div>
            </div>
            
            <div className='w-screen m-0 p-0 flex gap-[20px] overflow-x-hidden items-center'>
                    {ListItem.map(u =><Item {...u}/>)}
            </div>
        </div>
        <div className='w-screen sm:-ml-36 bg-[#12120e] min-h-[250px] text-white flex items-center'>
            <div className='md:mx-28 gap-10 flex flex-col items-center lg:flex-row'>
                <div>
                    <div className='text-[22px] font-bold '>
                        ПІДПИСУЙТЕСЬ!
                    </div>
                    <div className='text-[18px]'>
                        Та дізнавайтеся перші про вигідні пропозиції
                    </div>
                </div>
                <div className='flex xl:ml-96 '>
                    <input className='box-border p-4 w-[220px]  lg:w-[320px] h-[54px] bg-[#12120e] border-[3px] border-solid border-[#f1f1f6]' placeholder='Введіть ваш Email' type="text" />
                    <button className='h-[54px] bg-[#730706] w-[120px] lg:w-[220px]'>
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
