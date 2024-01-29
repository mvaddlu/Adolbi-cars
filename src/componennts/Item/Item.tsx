import React from 'react'
import motor from "../../accest/Item/motor.webp"
import car from "../../accest/Item/car.webp"
import probig from "../../accest/Item/probig.webp"
import back from "../../accest/Main/bensin.svg"
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
    drive_type:string,
    current_bid:number
}

export const Item:React.FC<Props> = ({VIN_code,engine_type,fuel,images,lot_name,odometer,primary_damage,lot_number,current_bid}) => {

  return (
    <NavLink id='Item' to={`/car/${lot_number}`} className='w-[300px] h-[578px] bg-[#12120e] flex flex-col justify-between items-center text-white '>
        <img src={images} alt="" className='w-[300px] h-[196px] object-cover'/>
        <div className='font-mono font-bold '>
            {lot_name}
        </div>
        <div className='w-[280px] border-b border-solid border-[#f1f1f6] mx-2'>
            <div className='flex mx-3 my-4'>
                <div className='flex mx-3'>
                    <img src={motor} alt="" className='w-[32.5px] h-[32.5px] mr-1'/>
                    {engine_type}
                </div>
                <div className='flex'>
                    <img src={back} alt="" className='w-[32.5px] h-[32.5px] mr-1' />
                    {fuel}
                </div>
            </div>
            <div  className='flex mx-3 my-4'>
                <div className='flex mx-3'>
                    <img src={probig} alt=""  className='w-[32.5px] h-[32.5px] mr-1'/>
                    {odometer}
                </div>
                <div className='flex'>
                    <img src={car} alt=""  className='w-[32.5px] h-[32.5px] mr-1'/>
                    {primary_damage}
                </div>
            </div>
        </div>
        <div className='font-mono'>
            <div className='flex '>
                <div className='text-white '>Поточна ставка:</div>
                <div className='text-[#ad3b3a] text-[17.3px] ml-2'>${current_bid}</div>
            </div>
        </div>
        <PopUp message_type='Зробити ставку' id={lot_number} button='Зробити ставку' title='Зробити ставку' styleButton='bg-[#12120e] border-4 border-solid border-[#aeaeb2] w-[256px] h-[52px] rounded' />
        <button className='w-[256px] h-[52px] bg-[#740706] rounded mb-2'>
            Детальніше
        </button>
    </NavLink>
  )
}
