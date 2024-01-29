import React, { useEffect } from 'react'
import cross from "../../accest/Main/crooss.webp"
import parket from "../../accest/Main/parket.webp"
import pickUp from "../../accest/Main/pickUp.webp"
import Minivan from "../../accest/Main/Minivan.webp"
import sedan from "../../accest/Main/sedan.webp"
import hachback from "../../accest/Main/hachback.webp"
import kabriolet from "../../accest/Main/kabriolet.webp"
import cupe from "../../accest/Main/cupe.webp"
import vnedoroznik from "../../accest/Main/vnedoroznik.webp"
import back from "../../accest/Main/bensin.svg"
import { Item } from '../Item/Item'
import arrow from "../../accest/Main/play.png"
import BanerCar from "../../accest/Main/BanderCar.webp"
import PointCar from "../../accest/Main/PointCar.svg"
import book from "../../accest/Main/book.webp"
import send from "../../accest/Main/send.webp"
import money from "../../accest/Main/money.webp"
import odred from "../../accest/Main/odred.svg"
import docAccept from "../../accest/Main/docAccept.svg"
import search from "../../accest/Main/search.svg"
import hammer from "../../accest/Main/hammer.svg"
import pay from "../../accest/Main/pay.webp"
import cargo from "../../accest/Main/cargo.svg"
import rozmitnennya from "../../accest/Main/rozmitnennya.svg"
import repair from "../../accest/Main/repair.svg"
import getCar from "../../accest/Main/getCar.svg"
import gogleMaps from "../../accest/Main/gogleMaps.webp"
import Baner2 from "../../accest/Main/Baner2.webp"
import ArrowTo from "../../accest/Main/arrow-bp-lg.svg"
import Copart from "../../accest/Main/Copart.webp"
import Baner from "../../accest/Main/Baner.webp"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import  "./Main.css"
import { BlackTheme } from '../BlackTheme/BlackTheme'
import { FormSelectCar } from '../Forms/FormSelectCar'
import { FormTotalCost } from '../Forms/FormTotalCost'
import { FormQuestions } from '../Forms/FormQuestions'
import { FromCopart } from '../Forms/FromCopart'
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from '../../app/store'
import { GetFilterData, GetListofItem, setFuel, setMark, setbody_style } from '../../app/Catalog'
import { useNavigate } from 'react-router-dom'
import { FormPhone } from '../Forms/FormPhone'
import Image from '../Image'

export const Main = () => {
    const { ListItem,currentPage } = useSelector( (u:RootState)=>u.Catalog)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(GetListofItem({page:currentPage,body_style:'',make:'',fuel:'',color:'',drive_type:'',engine_type:'',key:'',model:'',odometer_from:0,odometer_to:99999,pre_accident_value_from:0,pre_accident_value_to:99999,primary_damage:'',transmission:'',year_from:0,year_to:9999}))
        dispatch(GetFilterData())
    },[dispatch,currentPage])

    const RedicetWithFuel = React.useCallback((value:string)=>{
        dispatch( setFuel(value) )
        navigate('/calalog',{relative:'path'})
    },[navigate,dispatch])

    const RedicetWithMarks = React.useCallback((value:string)=>{
        dispatch(setMark(value))
        navigate('/calalog',{relative:'path'})
    },[navigate,dispatch])

    const RedicetWithbody_style = React.useCallback((value:string)=>{
        dispatch(setbody_style(value))
        navigate('/calalog',{relative:'path'})
    },[navigate,dispatch])

  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen gap-[75px]'>
        <div className='mx-auto'>
            <div className='m-8 text-black font-bold text-[36px] font-title'>Купити авто з США</div>
            <div className='flex gap-[50px] relative'>
                <BlackTheme>
                    <FormSelectCar/>
                </BlackTheme>

                <div className='Baner1 '>
                    <div className='w-[620px] h-[100px] text-[18px] font-bold font-title bg-[#e1ae32] rounded-3xl flex justify-center items-center'>
                        Adolbi.inc ваш надійний партнер в виборі "сталевого" коня!
                    </div>
                    <Image className=' w-[620px] h-[515px] ' src={Baner} alt="" />

                </div>                
            </div>
        </div>
        <div className=' flex mx-auto flex-col items-center'>
            <div className='w-screen  h-[109px] bg-[#12120e] '>
                <div className='ml-5 mt-8 text-[28px] font-title font-bold text-white'>
                    Виберіть авто за:
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                <div className='flex flex-col  sm:mx-[60px]'>
                    <div className='font-mono text-[25px] font-bold my-5'>
                        Кузовом:
                    </div>
                    <div onClick={()=>RedicetWithbody_style('4DR EXT')} className='flex flex-wrap items-start justify-center sm:w-[575px] gap-[10px] sm:gap-[20px] '>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                            <div className='w-[160px] h-[80px]'>
                                <Image src={cross} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Кросовери
                            </div>
                        </div>
                        <div onClick={()=>RedicetWithbody_style('4DR SPOR')}  className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                            <div className='w-[160px] h-[80px]'>
                                <Image src={parket} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Паркетники 
                            </div>
                        </div>
                        <div onClick={()=>RedicetWithbody_style('4DR EXT')}  className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                            <div className='w-[160px] h-[80px]'>
                                <Image src={pickUp} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Пікапи
                            </div>
                        </div>
                        <div onClick={()=>RedicetWithbody_style('CARGO VA')}  className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                            <div className='w-[160px] h-[80px] scale-x-[-1] scale-y-[1]'>
                                <Image src={Minivan} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Мінівени
                            </div>
                        </div>
                        <div onClick={()=>RedicetWithbody_style('SEDAN 4D')}  className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                            <div className='w-[160px] h-[80px]'>
                                <Image src={sedan} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Седани
                            </div>
                        </div>
                        <div onClick={()=>RedicetWithbody_style('HATCHBAC')}  className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                            <div className='w-[160px] h-[80px]'>
                                <Image src={hachback} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Хетчбеки
                            </div>
                        </div>
                        <div onClick={()=>RedicetWithbody_style('CONVERTI')}  className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                            <div className='w-[160px] h-[80px]'>
                                <Image src={kabriolet} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Кабріолети
                            </div>
                        </div>
                        <div onClick={()=>RedicetWithbody_style('COUPE')}  className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                            <div className='w-[160px] h-[80px]'>
                                <Image src={cupe} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Купе
                            </div>
                        </div>
                        <div onClick={()=>RedicetWithbody_style('CREW PIC')}  className='w-[175px] h-[170px] -mx-22 sm:mx-0 bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                            <div className='w-[160px] h-[80px]'>
                                <Image src={vnedoroznik} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Позашляховики
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' sm:mx-[60px]'>
                    <div className='font-mono text-[25px] font-bold sm:my-5'>
                        Двигуном:
                    </div>
                    <div  className='flex flex-row flex-wrap items-center justify-center sm:w-[390px] gap-[10px] sm:gap-[20px]'>
                        <div onClick={()=>RedicetWithFuel('FLEXIBLE FUEL')} className='cursor-pointer w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                                <div className='font-mono text-[14.4px] text-white font-bold'>
                                    Бензиновий
                                </div>
                                <div className='w-[106px] h-[106px] '>
                                    <Image src={back} alt="" />
                                </div>
                        </div>
                        <div onClick={()=>RedicetWithFuel('DIESEL')}  className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                                <div className='font-mono text-[14.4px] text-white font-bold'>
                                    Дизельний
                                </div>
                                <div className='w-[106px] h-[106px] '>
                                    <Image src={back} alt="" />
                                </div>
                        </div>
                        <div onClick={()=>RedicetWithFuel('ELECTRIC')}  className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                                <div className='font-mono text-[14.4px] text-white font-bold'>
                                    Електро
                                </div>
                                <div className='w-[106px] h-[106px] '>
                                    <Image src={back} alt="" />
                                </div>
                        </div>
                        <div onClick={()=>RedicetWithFuel('HYBRID ENGINE')}  className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                                <div className='font-mono text-[14.4px] text-white font-bold'>
                                    Гібрид
                                </div>  
                                <div className='w-[106px] h-[106px] '>
                                    <Image src={back} alt="" />
                                </div>
                        </div>
                        <div onClick={()=>RedicetWithFuel('GAS')}  className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around hover:opacity-75'>
                                <div className='font-mono text-[14.4px] text-white font-bold'>
                                    Газ
                                </div>  
                                <div className='w-[106px] h-[106px] '>
                                    <Image src={back} alt="" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=' flex mx-auto flex-col items-center'>
            <div className='w-screen box-border h-[109px] bg-[#12120e] '>
                <div className='ml-5 mt-8 text-[28px] font-title font-bold text-white'>
                    ПОПУЛЯРНІ МАРКИ
                </div>
            </div>
            <div className='m-10 font-mono text-[19px] flex flex-col sm:flex-row justify-start underline decoration-1 flex-wrap'>
                <ul style={{listStyleType:"initial"}} className='sm:mx-auto xl:mx-[20px]' >
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('ACURA')} >ACURA</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('ALFA ROMEO')} >ALFA ROMEO</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('ASTON MARTIN')} >ASTON MARTIN</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('AUDI')} >AUDI</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('BENTLEY')} >BENTLEY</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('BMW')} >BMW</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('BUICK')} >BUICK</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('CADILLAC')} >CADILLAC</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('CHEVROLET')} >CHEVROLET</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('CHRYSLER')} >CHRYSLER</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('DODGE')} >DODGE</li>
                </ul>
                <ul style={{listStyleType:"initial"}} className='sm:mx-auto xl:mx-[20px]' >
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('FERRARI')} >FERRARI</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('FIAT')} >FIAT</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('FORD')} >FORD</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('FREIGHTLINER')} >FREIGHTLINER</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('GENESIS')} >GENESIS</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('GMC')} >GMC</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('HONDA')} >HONDA</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('HYUNDAI')} >HYUNDAI</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('INFINITI')} >INFINITI</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('JAGUAR')} >JAGUAR</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('JEEP')} >JEEP</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('KIA')} >KIA</li>
                </ul>
                <ul style={{listStyleType:"initial"}} className='sm:mx-auto xl:mx-[20px]' >
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('LAMBORGHINI')} >LAMBORGHINI</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('LAND ROVER')} >LAND ROVER</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('LEXUS')} >LEXUS</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('LINCOLN')} >LINCOLN</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('MASERATI')} >MASERATI</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('MAZDA')} >MAZDA</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('MCLAREN AUTOMOTIVE')} >MCLAREN AUTOMOTIVE</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('MERCEDES-BENZ')} >MERCEDES-BENZ</li>
                    <li className='cursor-pointer' onClick={()=>RedicetWithMarks('MINI')} >MINI</li>
                    <li className='cursor-pointer' onClick={()=>RedicetWithMarks('MITSUBISHI')} >MITSUBISHI</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('NISSAN')} >NISSAN</li>
                </ul>
                <ul style={{listStyleType:"initial"}} className='sm:mx-auto xl:mx-[20px]'>
                    <li className='cursor-pointer' onClick={()=>RedicetWithMarks('POLARIS')} >POLARIS</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('POLESTAR')} >POLESTAR</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('PORSCHE')} >PORSCHE</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('RAM')} >RAM</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('SCION')} >SCION</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('SMART')} >SMART</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('SUBARU')} >SUBARU</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('TESLA')} >TESLA</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('TOYOTA')} >TOYOTA</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('VOLKSWAGEN')} >VOLKSWAGEN</li>
                    <li className='cursor-pointer'  onClick={()=>RedicetWithMarks('VOLVO')} >VOLVO</li>
                </ul>
            </div>
            <button className='text-white bg-[#740706] p-4 box-border xl:w-[461px] h-[58.6px] rounded my-10'>Перейти до каталогу всіх товарів</button>
        </div>
        <div className=' flex flex-col gap-[10px] md:gap-10 '>
            <div className='w-screen  h-[109px] bg-[#12120e] '>
                    <div className='ml-5 mt-8 text-[26px] font-title font-bold text-white'>
                        Схожі Авто
                    </div>
            </div>
            
            <div className='w-screen mx-auto flex gap-[20px] justify-center items-center overflow-x-hidden'>
                <Image src={arrow} alt="" className='w-[28px] h-[25px]  scale-x-[-1] scale-y-[1]'/>
                {ListItem.map((u)=><Item key={u.VIN_code} {...u} />)}
                <Image src={arrow} alt="" className='w-[28px] h-[25px]'/>
            </div>
        </div>
       <FormPhone/>
        <div className='mx-auto'>
            <div className='w-screen  h-[109px] bg-[#12120e] md:pt-8'>
                <div className='ml-5 py-3 text-[26px] font-title font-bold text-white'>
                    ЧОМУ АВТО З США ВИГІДНО ДЛЯ ВАС?
                </div>
            </div>
            <div className='flex flex-col xl:flex-row'>
                <div className='flex flex-col w-[300px] sm:w-[600px] mx-8 my-2  sm:mx-14 sm:my-10'>
                    <div className='font-mono text-[#12120e]'>
                        Покупка авто з США надає вам доступ до широкого вибору автомобілів різних марок та моделей, і дозволяє знайти ідеальний варіант для ваших потреб і бюджету. Ми працюємо в цій сфері вже декілька років і на власному досвіді переконалися, що це надійно та вигідно.
                    </div>
                    <div className='w-[641px] h-[258px] hidden xl:block'>
                        <Image src={BanerCar} alt="" />
                    </div>
                </div>
                <div className='flex flex-col mx-auto'>
                    <div className='flex m-5 box-border'>
                        <div className='w-[71px] h-[71px] bg-gradient-to-tr from-[#740706] to-[#922a2a] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={book} alt="" />
                        </div>
                        <div className='ml-5 font-mono  w-[480px]'>
                            <div className=' text-[20px] font-bold'>
                                Справжня історія авто:
                            </div>
                            <div className=' mt-5 w-[250px] sm:w-[460px] '>
                                За допомогою сервісів, які надають інформацію про історію автомобілів, ви можете отримати точну картину того, що сталося з машиною раніше. Ви будете знати, чи було авто учасником дорожньо-транспортної пригоди, чи ретельно обслуговувалося і чи має якісь серйозні проблеми. Це дозволяє вам приймати обдумані рішення та обрати автомобіль.
                            </div>
                        </div>
                    </div>
                    <div className='flex m-5'>
                        <div className='w-[71px] h-[71px] bg-gradient-to-tr from-[#740706] to-[#922a2a] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={money} alt="" />
                        </div>
                        <div className='ml-5 font-mono w-[480px]'>
                            <div className=' text-[20px] font-bold'>
                                Економія:
                            </div>
                            <div className=' mt-5 w-[250px] sm:w-[460px] '>
                                Покупка автомобіля із США може значно зекономити ваші кошти. Ринок Сполучених Штатів пропонує широкий вибір автомобілів за конкурентними цінами, а також багато автомобілів зі знижками після оренди або лізингу.
                            </div>
                        </div>
                    </div>
                    <div className='flex m-5'>
                        <div className='w-[71px] h-[71px] bg-gradient-to-tr from-[#740706] to-[#922a2a] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={send} alt="" />
                        </div>
                        <div className='ml-5 font-mono w-[480px]'>
                            <div className=' text-[20px] font-bold'>
                                Безпечна доставка:
                            </div>
                            <div className=' mt-5 w-[250px] sm:w-[460px]'>
                            Наша команда професіоналів гарантує безпечну та надійну доставку вашого автомобіля зі США. Ми співпрацюємо з досвідченими логістичними компаніями та страховими агентами, щоб ваш автомобіль дістався до вас цілим і неушкодженим.
                            </div>
                        </div>
                    </div>
                    <div className='flex m-5'>
                        <div className='w-[71px] h-[71px] bg-gradient-to-tr from-[#740706] to-[#922a2a] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={PointCar} alt="" />
                        </div>
                        <div className='ml-5 font-mono w-[480px]'>
                            <div className=' text-[20px] w-[250px] font-bold'>
                                Хороший технічний стан авто:
                            </div>
                            <div className=' mt-5 w-[250px] sm:w-[460px]'>
                                Ми завжди перевіряємо та докладно аналізуємо технічний стан кожного автомобіля перед його продажем. Усі наші авто проходять комплексну перевірку, щоб ви могли бути впевнені в їхній надійності та безпеці на дорозі.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col xl:flex-row mx-auto'>
            <div className=' w-[300px] sm:w-[600px] mx-auto'>
                <div className='font-title text-[26px] font-bold'>
                    ВАРТІСТЬ АВТО З США В УКРАЇНІ
                </div>
                <div className='font-mono text-[17] my-4 mx-auto '>
                    <div className='text-[18px ]font-bold'>
                    При покупці автомобіля зі США і його подальшій доставці до України, важливо зрозуміти, як формується вартість цієї операції. Доставка залежить від кількох ключових факторів:
                    </div>
                    <ul className='list-inside flex flex-col gap-3  list-decimal mt-2'>
                        <li>
                            Автомобіль спочатку доставляється автовозом до нашого складу, який розташований біля одного з портів в Сполучених Штатах.
                        </li>
                        <li>
                            Після цього, авто транспортується судном через океан до обраного вами європейського порту.
                        </li>
                        <li>
                            Після прибуття до порту, автомобіль транспортується автовозом до необхідного міста в Україні.
                        </li>
                    </ul>                
                </div>
                <div className='font-mono w-[250px] sm:w-[500px]'>
                    <div className='font-mono text-[17] my-4 '>
                        <div className='text-[18px ] font-bold'>
                            Крім того, ми пропонуємо спеціальний сервіс для стеження за доставкою вашого авто.
                            <div className='my-2'>
                                Щодо розмитнення, важливо враховувати такі аспекти:
                            </div>
                        </div>
                        <ul className='list-inside list-decimal flex flex-col gap-3 mt-2'>
                            <li>
                                Загальна ставка мита: Вона становить 10% від оціненої вартості автомобіля.
                            </li>
                            <li>
                                Акцизний збір: Вартість цього збору визначається в залежності від типу, ціни авто, об’єму двигуна та року випуску.
                            </li>
                            <li>
                                ПДВ (податок на додану вартість): Становить 20% і обчислюється від оціненої вартості авто.
                            </li>
                            <li>
                                Додаткові виплати до Пенсійного фонду: Зазвичай встановлюються відповідно до правил та норм.
                            </li>
                        </ul>                
                    </div>
                <div className='font-mono text-[17] my-4 '>
                    <div className='text-[18px] font-bold'>
                        Для електромобілів та гібридів діє інша система тарифів.
                    </div>
                    <div className=' flex flex-col gap-3 '>
                        <div>
                            Для отримання точної вартості автомобіля і розрахунків використовуйте наш Калькулятор.
                        </div>
                        <div>
                            Вартість доставки авто з США: Починається від $600
                            Терміни доставки авто: Зазвичай від 6 до 8 тижнів
                            Комісія: Від $400
                        </div>
                    </div>                
                </div>
                </div>
            </div>
            <BlackTheme>
                <FormTotalCost/>               
            </BlackTheme>

        </div>
        <div className='mx-auto'>
            <div className='font-title text-[26px] w-[250px] md:-[350px] mx-auto lg:mx-0 font-bold my-4 '>
                ПРОЦЕС ПОКУПКИ АВТО З США
            </div>
            <div className='text-white flex flex-wrap gap-[35px] phone:justify-center w-screen xl:w-[1280px] mx-auto'>
                    <div    className='buing-item bg-[#12120e] w-[350px] sm:w-[400px] min-h-[169px] rounded flex p-4 box-border  relative phone:before:block'>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={odred} alt="" />
                        </div>
                        <div className='ml-5 font-mono box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Заявка та консультація
                            </div>
                            <div className=' mt-5'>
                                Ваш перший крок – заповнення заявки. Протягом декількох хвилин, наш консультант зв’яжеться з вами, щоб визначити ваші побажання та бюджет.
                            </div>
                        </div>
                    </div>
                    <div  className='buing-item bg-[#12120e]  w-[350px] sm:w-[400px] min-h-[169px] rounded flex p-4 box-border  relative phone:before:block max-laptop:before:hidden  '>
                        <div className='w-[66px] h-[70px] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={docAccept} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Договір
                            </div>
                            <div className=' mt-5'>
                                Після детального ознайомлення з договором, ви підписуєте його. І це стає гарантом виконання умов угоди.
                            </div>
                        </div>
                    </div>
                    <div className='w-screen -ml-28  hidden max-laptop:block phone:hidden'>
                        <Image className=' w-[600px] mx-auto ml-60' src={ArrowTo} alt="" />
                    </div>
                    <div   className='buing-item bg-[#12120e]  w-[350px] sm:w-[400px] min-h-[169px] rounded flex p-4 box-border relative phone:before:block  xl:before:hidden'>
                        <div className='w-[66px] h-[70px]  rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={search} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Підбір та перевірка
                            </div>
                            <div className=' mt-5'>
                                Наші експерти знаходять для вас відповідну модель і ще декілька варіантів. Під час цього етапу проводиться ретельна перевірка автомобілів, включаючи документацію та технічний стан.
                            </div>
                        </div>
                    </div>
                    <div className='w-screen  -ml-28  hidden laptop:block'>
                        <Image className='w-[850px]  mx-auto' src={ArrowTo} alt="" />
                    </div>
                    <div    className='buing-item bg-[#12120e]  w-[350px] sm:w-[400px] min-h-[169px] rounded flex p-4 box-border  relative phone:before:block max-laptop:before:hidden '>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={hammer} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Аукціон
                            </div>
                            <div className=' mt-5'>
                                Ви маєте можливість взяти участь в аукціоні для придбання вигідного лота. Наша система розрахунків допомагає значно зекономити ваші кошти.
                            </div>
                        </div>
                    </div>
                    <div className='w-screen -ml-28  hidden max-laptop:block phone:hidden'>
                        <Image className=' w-[600px] mx-auto ml-60' src={ArrowTo} alt="" />
                    </div>
                    <div    className='buing-item bg-[#12120e]  w-[350px] sm:w-[400px] min-h-[169px] rounded flex p-4 box-border  relative '>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={pay} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Оплата
                            </div>
                            <div className=' mt-5'>
                                Упродовж двох днів ви здійснюєте оплату виграного автомобіля через банк. Рахунок включає комісію аукціону та витрати на транспортування в Америці та Україні.
                            </div>
                        </div>
                    </div>
                    <div    className='buing-item bg-[#12120e]  w-[350px] sm:w-[400px] min-h-[169px] rounded flex p-4 box-border  relative phone:before:block xl:before:hidden max-laptop:before:hidden'>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={cargo} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Доставка
                            </div>
                            <div className=' mt-5'>
                                Ваш автомобіль відправляється евакуатором до найближчого порту. Перед завантаженням машина проходить додаткову перевірку і фотозвіт.
                            </div>
                        </div>
                    </div>
                    <div className='w-screen  -ml-28  hidden laptop:block'>
                        <Image className='w-[850px]  mx-auto' src={ArrowTo} alt="" />
                    </div>
                    <div className='w-screen -ml-28  hidden max-laptop:block phone:hidden'>
                        <Image className=' w-[600px] mx-auto ml-60' src={ArrowTo} alt="" />
                    </div>
                    <div    className='buing-item bg-[#12120e]  w-[350px] sm:w-[400px] min-h-[169px] rounded flex p-4 box-border  relative '>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={rozmitnennya} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Розмитнення
                            </div>
                            <div className=' mt-5'>
                                Ми здійснюємо митне оформлення за зниженими тарифами, включаючи мито, податки, акцизні збори та відсоток до Пенсійного фонду.
                            </div>
                        </div>
                    </div>
                    <div    className='buing-item bg-[#12120e]  w-[350px] sm:w-[400px] min-h-[169px] rounded flex p-4 box-border  relative  phone:before:block max-laptop:before:hidden'>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={repair} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Ремонт авто
                            </div>
                            <div className=' mt-5'>
                                За необхідності ми забезпечуємо виконання ремонтних робіт.
                            </div>
                        </div>
                    </div>
                    <div className='w-screen -ml-28  hidden max-laptop:block phone:hidden'>
                        <Image className=' w-[600px] mx-auto ml-60' src={ArrowTo} alt="" />
                    </div>
                    <div  className=' bg-[#12120e]  w-[350px] sm:w-[400px] min-h-[169px] rounded flex p-4 box-border  relative '>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <Image className='w-[45px] h-[45px]' src={getCar} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Отримання авто
                            </div>
                            <div className=' mt-5'>
                                Після прибуття автомобіля на наш склад, він проходить фінальну перевірку. І Через декілька днів ви отримуєте ключі та всі необхідні документи для вашої нової автівки.
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className='mx-auto'>
            <div className='font-title mx-2 text-[26px] font-bold'>
                ПРИЧИНИ ЗАМОВИТИ АВТО У НАС
            </div>
            <div className='flex mx-3 flex-col xl:flex-row gap-[10px] sm:gap-[15px]'>
                <div className='max-w-[700px] text-white flex flex-wrap gap-[10px] sm:gap-[20px]'>
                    <div className=' w-[340px] min-h-[192px] bg-[#12120e] p-[20px] rounded'>
                        <div className='text-[18] font-bold my-3'>
                            Офіційний представник Copart
                        </div>
                        <div>
                            Наша компанія є офіційним ліцензійним представником Copart, що дає нам повний доступ до всіх можливостей цього аукціону. Ця ліцензія дозволяє переглядати закриті лоти і отримувати детальну інформацію про кожен автомобіль, а в разі необхідності, навіть отримувати ексклюзивні фотографії.
                        </div>
                    </div>
                    <div className=' w-[340px] min-h-[192px] bg-[#12120e] p-[20px] rounded'>
                        <div className='text-[18] font-bold my-3'>
                            Завжди на зв’язку
                        </div>
                        <div>
                            Ми завжди на зв’язку з вами, готові відповісти на всі ваші запитання та надати консультації у будь-який час..
                        </div>
                    </div>
                    <div className=' w-[340px] min-h-[192px] bg-[#12120e] p-[20px] rounded'>
                        <div className='text-[18] font-bold my-3'>
                            Власні склади в США
                        </div>
                        <div>
                            Наша компанія має декілька великих складів площею 20 000 м², розташованих по всій території Сполучених Штатів. Три з них розташовані на східному узбережжі, а два - на західному. Їхнє географічне положення дозволяє нам доставляти автомобілі з аукціонів в порти в 3 рази швидше.
                        </div>
                    </div>
                    <div className=' w-[340px] min-h-[192px] bg-[#12120e] p-[20px] rounded'>
                        <div className='text-[18] font-bold my-3'>
                            Звітність на кожному етапі
                        </div>
                        <div>
                            Ми прагнемо забезпечити вас повною інформацією на кожному етапі процесу. Починаючи з підписання договору, ми надаємо вам звіти про всі особливості угоди та торгів. Від аукціону до отримання автомобіля - ми піклуємося про вашу впевненість і надаємо фотозвіти на всіх етапах транспортування.
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' w-[340px] min-h-[192px] bg-[#12120e] p-[20px] rounded text-white'>
                        <div className='text-[18] font-bold my-3'>
                            А також, відгуки наших клієнтів
                        </div>
                        <div>
                            Наша репутація дуже важлива для нас, і ми завжди вдячні за відгуки наших клієнтів.
                        </div>
                        <button className='bg-[#740706] w-[230px] h-[40px]'>Подивитися відгуки</button>
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
        <div className=' flex mx-auto '>
            <FormQuestions/>
            <div className='hidden xl:block'> 
                <Image className='ml-80' src={Baner2} alt="" />
            </div>
        </div>
        <div className='flex flex-col mx-auto xl:flex-row'>
            <div className='w-[300px] sm:w-[450px] mx-auto'>
                <div className='w-[160px] h-[60px]'>
                    <Image  src={Copart} alt="" />
                </div>
                <div className='text-[23px] font-bold'>
                    ПРАЦЮЄМО З COPART
                </div>
                <div className='flex flex-col gap-3 my-4 '>
                    <div>
                        Copart є одним з найбільших відкритих онлайн-аукціонів, спеціалізований на утриманих та списаних автомобілях. Цей аукціон відкритий для всіх охочих, але має свої обмеження. На торговому майданчику Copart представлено понад 3 мільйони транспортних засобів, а щоденно на ньому з'являється понад 175 тисяч пропозицій. 
                    </div>
                    <div className='flex flex-col gap-4 '>
                        <div>
                            На аукціоні Copart зустрічаються різні транспортні засоби, включаючи:
                        </div>
                        <ul className='list-disc flex flex-col gap-3 list-inside'>
                            <li>
                                Транспортні засоби, які потрапили в ДТП та потребують відновлення.
                            </li>
                            <li>
                                Авто, які були викрадені або знайдені.
                            </li>
                            <li>
                                Транспортні засоби, які пошкоджено в результаті вандалізму та потребують ремонту.
                            </li>
                            <li>
                                Авто, які постраждали в результаті природних катастроф, таких як повені, урагани, чи інші стихійні лиха.
                            </li>
                            <li>
                                Автомобілі, які були затоплені та потребують відновлення.
                            </li>
                            <li>
                                Транспортні засоби, які мають заводські дефекти або виробничі проблеми.
                            </li>
                        </ul>
                        <div>
                            Ці автомобілі зазвичай виставляються на продаж страховими або лізинговими компаніями після проведення страхових виплат власникам. Купуючи такий автомобіль на аукціоні Copart, ви маєте можливість зекономити до 50% порівняно з ринковою ціною на новий автомобіль.
                        </div>
                    </div>
                </div>
            </div>
            <FromCopart/>
        </div>
        <div className='w-screen mx-auto bg-[#12120e] min-h-[150px] text-white flex items-center'>
            <div className='md:mx-36 flex flex-col xl:flex-row gap-12 p-4'>
                <div>
                    <div className='text-[22px] font-bold '>
                        ПІДПИСУЙТЕСЬ!
                    </div>
                    <div className='text-[18px]'>
                        Та дізнавайтеся перші про вигідні пропозиції
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-[10px] sm:gap-0 xl:ml-96'>
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
