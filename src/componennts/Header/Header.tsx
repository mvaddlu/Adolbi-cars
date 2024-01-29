import React from 'react'
import logo from "../../accest/Header/logo.png"
import phoneSVG from "../../accest/Header/PhoneSVG.svg"
import menuBurger from '../../accest/Header/icons8-menu.svg'
import Close from '../../accest/Header/icons8-close.svg'
import { NavLink,useLocation} from "react-router-dom"
import { PopUpWithoutCommnet } from '../PopUp/PopUpWithoutCommnet'
import Image from '../Image'

export const Header = () => {
    const [ Open, SetOpen ] = React.useState<boolean>(false)
    const {pathname} = useLocation()

    const Navigation:React.FC<{ className: string | undefined }> = ({className})=>{

        if(pathname ==='/' ||pathname ===''  ){
            return  <div className={className}>
                        <div className='mx-2'>Навігація по сторінці </div>
                        <button onClick={()=>window.scrollTo(0,1050)} className='mx-2'>Вибір авто</button>
                        <button onClick={()=>window.scrollTo(0,1800)} className='mx-2'>Марки</button>
                        <button onClick={()=>window.scrollTo(0,3900)} className='mx-2'>Вигоди</button>
                        <button onClick={()=>window.scrollTo(0,4700)} className='mx-2'>Калькулятор</button>
                        <button onClick={()=>window.scrollTo(0,6600)} className='mx-2'>Чому ми</button>
                        <button onClick={()=>window.scrollTo(0,7150)} className='mx-2'>Відгуки</button>
                        <button onClick={()=>window.scrollTo(0,12000)} className='mx-2'>Контакти</button>
                    </div>
        } else  if(pathname ==='/calalog' ){
            return  <div className={className}>
                        <div className='mx-2'>Навігація по сторінці </div>
                        <button onClick={()=>window.scrollTo(0,10)} className='mx-2'>Автомобілі</button>
                        <button onClick={()=>window.scrollTo(0,5000)} className='mx-2'>Більше інформації</button>
                        <button onClick={()=>window.scrollTo(0,5600)} className='mx-2'>Часті питання</button>
                        <button onClick={()=>window.scrollTo(0,8000)} className='mx-2'>Контакти</button>
                    </div>
        } else if(pathname ==='/calculate' ){
            return  <div className={className}>
                        <div className='mx-2'>Навігація по сторінці </div>
                        <button onClick={()=>window.scrollTo(0,550)} className='mx-2'>Калькулятор</button>
                        <button onClick={()=>window.scrollTo(0,1700)} className='mx-2'>Знижка</button>
                        <button onClick={()=>window.scrollTo(0,2000)} className='mx-2'>Часті питання</button>
                        <button onClick={()=>window.scrollTo(0,8000)} className='mx-2'>Контакти</button>
                    </div>
        } else if(pathname ==='/contact' ){
            return  <div className={className}>
                        <div className='mx-2'>Навігація по сторінці </div>
                        <button onClick={()=>window.scrollTo(0,100)} className='mx-2'>Контакти</button>
                    </div>
        } else if(pathname ==='/guarantees' ){
            return  <div className={className}>
                        <div className='mx-2'>Навігація по сторінці </div>
                        <button onClick={()=>window.scrollTo(0,1800)} className='mx-2'>Відгуки</button>
                        <button onClick={()=>window.scrollTo(0,2600)} className='mx-2'>Популярні авто</button>
                        <button onClick={()=>window.scrollTo(0,8000)} className='mx-2'>Контакти</button>
                    </div>
        } else if(pathname ==='/about' ){
            return  <div className={className}>
                        <div className='mx-2'>Навігація по сторінці </div>
                        <button onClick={()=>window.scrollTo(0,100)} className='mx-2'>Про нас</button>
                        <button onClick={()=>window.scrollTo(0,1000)} className='mx-2'>Наші цінності</button>
                        <button onClick={()=>window.scrollTo(0,1800)} className='mx-2'>Вакансії</button>
                        <button onClick={()=>window.scrollTo(0,2250)} className='mx-2'>Співпраця</button>
                        <button onClick={()=>window.scrollTo(0,8000)} className='mx-2'>Контакти</button>
                    </div>
        } else if(pathname ==='/cooperation' ){
            return  <div className={className}>
                        <div className='mx-2'>Навігація по сторінці </div>
                        <button onClick={()=>window.scrollTo(0,900)} className='mx-2'>Умови</button>
                        <button onClick={()=>window.scrollTo(0,1200)} className='mx-2'>Аукціони</button>
                        <button onClick={()=>window.scrollTo(0,1800)} className='mx-2'>Переваги</button>
                        <button onClick={()=>window.scrollTo(0,2850)} className='mx-2'>Географія доставки</button>
                        <button onClick={()=>window.scrollTo(0,3300)} className='mx-2'>Часті питання</button>
                        <button onClick={()=>window.scrollTo(0,8000)} className='mx-2'>Контакти</button>
                    </div>
        } else {
            return  <div className={className}>
                        <div className='mx-2'>Навігація по сторінці </div>
                        <button onClick={()=>window.scrollTo(0,150)} className='mx-2'>Інформація про лот</button>
                        <button onClick={()=>window.scrollTo(0,750)} className='mx-2'>Інформація про авто</button>
                        <button onClick={()=>window.scrollTo(0,8000)} className='mx-2'>Контакти</button>
                    </div>
        }
    }
  return (
    <div className='w-screen mb-40 flex flex-col items-center'>
        <div className='w-screen  bg-[#f1f1f6] h-[80px] md:h-[110px] fixed z-[99]'>
            <header className=' left-auto w-screen md:w-[85%] mx-auto h-[80px] md:h-[110px] flex justify-around items-center bg-gradient-to-tr from-[#000] to-[#191919] md:rounded-lg text-white font-mono'>
                <div>
                    <Image  className='w-[70px] h-[70px] md:w-[60px] md:h-[100.5px] object-cover my-[5px]' src={logo} alt=""/>
                </div>
                <div  className='hidden xl:block'>
                    <div className='flex w-[800px] border-b border-solid border-[#f1f1f6] pb-2 '>
                        <NavLink to={'/'} className='mx-2'>Головна</NavLink>
                        <NavLink to={'/calalog'} className='mx-2'>Каталог авто </NavLink>
                        <NavLink to={'/calculate'} className='mx-2'>Калькулятор</NavLink>
                        <NavLink to={'/cooperation'} className='mx-2'>Співпраця </NavLink>
                        <NavLink to={'/guarantees'} className='mx-2'>Гарантії</NavLink>
                        <NavLink to={'/about'} className='mx-2'>Про нас</NavLink>
                        <NavLink to={'/contact'} className='mx-2'>Контакти </NavLink>
                    </div>
                    <Navigation className={'my-2 flex text-[#aeaeb2]'}/>
                </div>
                <div className='flex flex-row xl:flex-col gap-[15px]'>
                    <div className='hidden  lg:flex  items-center'>
                        
                        <div>
                            <Image className='w-[26px] h-[26px] mr-2' alt='phone' src={phoneSVG}/>
                        </div>
                        <div>
                            +380 99 491 32 25
                        </div>
                    </div>
                    <PopUpWithoutCommnet message_type='Отримати консультацію' button='Замовити дзвінок' title='Отримайте консультацію' styleButton='bg-[#740706] box-border w-[140px] h-[41px] mt-2 rounded'/>
                </div>
                <button className='block xl:hidden'>
                    
                    {Open?<Image onClick={()=>SetOpen(false)} src={Close} alt="" />:<Image onClick={()=>SetOpen(true)}  src={menuBurger} alt="" />}

                </button>

            </header>
        </div>
{
                Open ?<div className='mt-[90px] w-screen bg-[#12120e] mx-auto lg:hidden text-[#f1f1f6] border-2 border-t-0 border-solid border-[#12120e] p-5'>
            <div className='flex flex-col md:flex-row w-screen border-b border-solid'>
                <div className='flex flex-col gap-[15px] w-[250px] md:border-r-2 border-solid border-yellow-500'>
                    <NavLink to={'/'} className='mx-2'>Головна</NavLink>
                    <NavLink to={'/calalog'} className='mx-2'>Каталог авто </NavLink>
                    <NavLink to={'/calculate'} className='mx-2'>Калькулятор</NavLink>
                    <NavLink to={'/cooperation'} className='mx-2'>Співпраця </NavLink>
                    <NavLink to={'/guarantees'} className='mx-2'>Гарантії</NavLink>
                    <NavLink to={'/about'} className='mx-2'>Про нас</NavLink>
                    <NavLink to={'/contact'} className='mx-2'>Контакти </NavLink>
                </div>
                <Navigation className={' flex flex-col text-[#f1f1f6] items-start md:ml-5 gap-3'} />
            </div>
        </div>   
                : <div></div>
            }            
              
    </div>

  )
}
