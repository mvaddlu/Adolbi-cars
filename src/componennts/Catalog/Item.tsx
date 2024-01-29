import React from 'react'
import motor from "../../accest/Item/motor.webp"
import car from "../../accest/Item/car.webp"
import probig from "../../accest/Item/probig.webp"
import back from "../../accest/Main/bensin.svg"
import calendar from "../../accest/Item/calendar.svg"
import privod from "../../accest/Item/privod.webp"
import { NavLink } from 'react-router-dom'
import { PopUp } from '../PopUp/PopUp'

interface Props{
    lot_name:string,
    lot_number:number,
    VIN_code:string,
    fuel:string,
    images:string,
    engine_type:string,
    odometer:number,
    year:number,
    primary_damage:string,
    drive_type:string
}

export const Item:React.FC<Props> = ({VIN_code,engine_type,fuel,images,lot_name,odometer,primary_damage,year,drive_type,lot_number}) => {
  return (
    <NavLink id='Item' to={`/car/${lot_number}`} className='h-[578] w-[300px] sm:w-[730px] sm:h-[250px] tablet:w-[950px] tablet:h-[190px] bg-[#12120e] my-[10px] flex  flex-col sm:flex-row justify-between items-center text-white border border-solid border-[#12120e]'>
        <div>
            <img  className='w-[300px] h-[196px] sm:w-[250px] sm:h-[250px] object-cover  tablet:w-[290px] tablet:h-[190px]' src={images} alt="" />
        </div>
        <div className='flex flex-col tablet:flex-row'>
            <div className='h-[190px] table:border-r border-solid border-[#f1f1f6] py-5 pr-20 ml-5 md:w-[390px]'>
                <div className='text-[15px] font-bold'>
                    {lot_name}
                </div>
                <div className='flex mt-5 mb-1'>
                    <div className='flex flex-col gap-[5px]'>
                        <div className='flex '>
                            <div className='w-[19px] h-[19px]'>
                                <img src={calendar} alt="" />
                            </div>
                            <div className='text-[10px] ml-3'>
                                {year}
                            </div>
                        </div>
                        <div className='flex '>
                            <div className='w-[19px] h-[19px]'>
                                <img src={motor} alt="" />
                            </div>
                            <div className='text-[10px] ml-3'>
                                {engine_type}
                            </div>
                        </div>
                        <div className='flex '>
                            <div className='w-[19px] h-[19px]'>
                                <img src={probig} alt="" />
                            </div>
                            <div className='text-[10px] ml-3'>
                                {odometer}
                            </div>
                        </div>
                        <div className='flex '>
                            <div className='w-[19px] h-[19px]'>
                                <img src={car} alt="" />
                            </div>
                            <div className='text-[10px] ml-3'>
                                {primary_damage}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[5px] ml-14'>
                        <div className='flex '>
                            <div className='w-[19px] h-[19px]'>
                                <img src={back} alt="" />
                            </div>
                            <div className='text-[10px] ml-3'>
                                {fuel}
                            </div>
                        </div>
                        <div className='flex '>
                            <div className='w-[19px] h-[19px]'>
                                <img src={privod} alt="" />
                            </div>
                            <div className='text-[10px] ml-3'>
                                {drive_type}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex '>
                    <div className='text-[9px]'>
                        VIN
                    </div>
                    <div className='text-[10px] ml-2'>
                        {VIN_code}
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center p-3 sm:-mt-16 tablet:mt-0'>
                <div className='text-[13px]'>
                    Аукціон через 1 день
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-[13px]'>
                        Поточна ставка:
                    </div>
                    <div className='text-[#740706] text-[17px] font-bold'>
                        $0
                    </div>
                </div>
                <div className='flex flex-col md:flex-row tablet:-mt-0 tablet:flex-col gap-2'>
                <PopUp message_type='Зробити ставку' id={lot_number} button='Зробити ставку'  title='Зробити ставку' styleButton='bg-[#12120e] border-4 border-solid border-[#aeaeb2] w-[220px] h-[30px] rounded' />
                    <button className='w-[220px] h-[30px] rounded text-[11px] bg-[#740706] '>
                        Детальніше
                    </button>
                </div>
            </div>
        </div>
    </NavLink>
  )
}
