import React from 'react'
import Baner1 from "../../accest/Calculate/Baner1.jpeg"
import Baner2 from "../../accest/Calculate/Baner2.png"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"

import { Select } from 'antd'
import Image from '../Image'

export const Calculate = () => {
  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen  gap-[75px]'>
        <div className=' flex gap-[50px]  mx-auto'>
            <div className='flex flex-col gap-[35px] w-[300px] md:w-[550px] mx-auto'>
                <div className='font-title font-bold text-[23px]'>
                    Калькулятор доставки та розмитнення авто із США в Україну
                </div>
                <div className='text-[15px] flex flex-col gap-4'>
                    За допомогою онлайн-калькулятора ви можете розрахувати вартість автомобіля з Америки.
                    Для розрахунку вартості покупки авто на аукціоні, потрібно знати не лише ціну автомобіля, але й вартість його доставки та розмитнення.
                    Цей інструмент допоможе вам дізнатися кінцеву вартість обраного вами автомобіля та уникнути неприємних сюрпризів.
                    Розрахувавши вартість для різних автомобілів, ви матимете можливість порівняти їх і вибрати оптимальний варіант. Порівнявши кінцеву вартість автомобіля з США з ціною на аналогічні авто на ринку України, ви зможете оцінити економічну вигідність авто з Америки.
                    <div>
                        Зателефонуйте нам, і ми дамо відповідь на ваші питання щодо вибору авто, доставки та розмитнення.
                    </div>
                </div>
            </div>
            <Image src={Baner1} className='w-[580px] h-[270px] rounded hidden xl:block ' alt="" />
        </div>
        <div className='mx-auto flex flex-col justify-center gap-5 xl:flex-row'>
            
            <form className='w-[340px] md:w-[437px] md:h-[650px] bg-[#12120e] rounded text-white p-4'>
                <div className='font-title text-[21px] font-bold ' >
                    Вхідні дані
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Вартість авто на аукціоні 
                    </div>
                    <input placeholder='5 000 $' type="text" className=' outline-none w-[250px] h-[40px] rounded-md pl-3 ' />
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Аукціон
                    </div>
                    <Select placeholder='Аукціон' className=' outline-none w-[250px] h-[40px] rounded-md '></Select>
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Майданчик аукціону 
                    </div>
                    <Select placeholder='Майданчик аукціону' className=' outline-none w-[250px] h-[40px] rounded-md '></Select>
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Тип транспорту
                    </div>
                    <Select placeholder='Виберіть' className=' outline-none w-[250px] h-[40px] rounded-md '></Select>
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Тип двигуна
                    </div>
                    <Select placeholder='Виберіть' className=' outline-none w-[250px] h-[40px] rounded-md '></Select>
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Об’єм двигуна
                    </div>
                    <input placeholder='Потужність двигуна, кВт' type="text" className=' outline-none w-[250px] h-[40px] rounded-md pl-3' />
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Рік випуску
                    </div>
                    <Select placeholder='Виберіть' className=' outline-none w-[250px] h-[40px] rounded-md '></Select>
                </div>
            </form>
            <div className=' mt-8 xl:mt-0 mx-auto'>
                <div className='flex flex-col gap-[8px] md:mb-[170px]'>
                    <div className='flex justify-between'>
                        <div className='font-title '>
                            Вартість вашого авто на аукціоні США 
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            Аукціонний збір
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            Комісія
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            Доставка по США
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            Доставка в Україну
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            Розмитнення
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                </div>
                <div className=' items-center md:items-start border-t-2 border-solid border-[#740706] w-[340px] md:w-[500px] xl:w-[700px]  '>
                    <div className='flex justify-between'>
                        <div className='font-title text-[21px]'>
                            Вартість авто + доставка
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='text-white flex flex-col md:flex-row gap-[10px] mt-5 ml-16'>
                        <button className='bg-[#740706] h-[40px] w-[250px] rounded'>Детальніше</button>
                        <button className='bg-[#740706] h-[40px] w-[250px] rounded'>Розрахунок по патежам</button>
                    </div>
                </div>
            </div>
        </div>
        <div className=' flex flex-col xl:flex-row gap-[50px] text-white mx-auto '>
            <div className='w-[340px] md:w-[565px] md:h-[500px] bg-[#12120e] rounded flex flex-col items-center p-5'>
                <div className='w-[300px] md:w-[475px] border-b-2 border-solid border-[#740706] font-title text-[21px]'> 
                    Чому варто користуватися калькулятором авто з США?
                </div>
                <div className='mt-4 mx-10'>
                    Щоб розрахувати вартість покупки авто на аукціоні, потрібно знати не лише ціну самого автомобіля, але й вартість його доставки та розмитнення. Це допоможе вам дізнатися кінцеву вартість обраного вами авто та уникнути розчарування.
                    На ціну транспортування впливає те, з якого порту буде доставлятися машина. Наприклад, привезення автівки з Каліфорнії буде дорожчим, ніж з Н'ю-Джерсі. До того ж така подорож триватиме на декілька днів чи тижнів довше. Скориставшись нашим калькулятором, ви зрозумієте, чи буде вам вигідно доставляти авто саме з цього порту.
                    Також розрахувавши вартість розмитнення та доставлення різних автомобілів, ви можете порівняти їх між собою і вибрати для себе оптимальний варіант. А порівнявши кінцеву вартість авто із США з ціною такого ж авто на ринку України, ви побачите, наскільки вигідно пригнати авто з Америки.

                </div>
            </div>
            <div className='w-[340px] md:w-[565px] md:min-h-[340px] bg-[#12120e] rounded flex flex-col items-start p-5'>
                <div className='w-[300px] md:w-[475px] border-b-2 border-solid border-[#740706] font-title text-[21px]'> 
                    Як користуватися калькулятором?
                </div>
                <div className='mt-4 mx-10'>
                    Щоб скористатися калькулятором, вам слід вказати наступні параметри:
                </div>
                <ol className='list-decimal flex flex-col gap-[10px] ml-14 mt-3'>
                    <li>
                        Вартість авто на аукціоні. Можна вказати ціну поточної ставки на аукціоні Copart, або просто визначити максимальну суму, яку плануєте витратити на автомобіль.
                    </li>
                    <li>
                        Тип двигуна: бензин, дизель, гібрид чи електро.
                    </li>
                    <li>
                        Об'єм двигуна в см³ або кВт.
                    </li>
                    <li>
                        Рік випуску авто.
                    </li>
                    <li>
                        Майданчик, на якому знаходиться вибране авто.
                    </li>
                    <li>
                        Натисніть “Розрахунок по платежах” для переходу на сторінку з розрахунком. З нього ви дізнаєтесь подробиці, скільки та за що ви платите на кожному етапі доставлення та розмитнення.
                    </li>
                </ol>
                <div>

                </div>
            </div>
        </div>
        <div className='w-screen h-[230px] mx-auto bg-[#12120e] flex justify-between text-white'>
            <div className='m-10'>
                <div className='font-title text-[21px]'>
                    Отримай знижку на доставку від нашої компанії
                </div>
                <button className='h-[40px]  bg-[#740706] rounded w-[200px] mt-10'>Отримати знижку</button>
            </div>
            <Image className=' md:h-[230px] md:w-[380px] hidden md:block' src={Baner2} alt="" />
        </div>
        <div className='mx-auto text-ellipsis'>
            <div className='text-[#12120e] text-[30px] font-title font-bold'>
                ЧАСТІ ПИТАННЯ
            </div>
            <div className='flex flex-col  xl:flex-row text-white gap-[10px] mb-10'>
                <div className='flex flex-col gap-[10px]'>
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Скільки коштує доставлення авто із США в Україну?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            <div>
                                Вартість доставки авто з США в Україну залежить від кількох факторів і може варіюватися в межах 2.5-5 тис. доларів. Ось розподіл цих витрат за етапами:
                            </div>
                            <ol className='list-decimal list-inside flex flex-col gap-4'>
                                <li>
                                    Транспортування по США: від 450 доларів. Це включає в себе перевезення автомобіля від місця придбання на аукціоні до порту в Америці.
                                </li>
                                <li>
                                    Транспортування через океан: Вартість перевезення автомобіля через океан залежить від типу автомобіля. Для легкових автомобілів це може становити від 1300 доларів. Для позашляховиків ціни різняться і можуть бути в діапазоні від 2300 до 4100 доларів.
                                </li>
                                <li>
                                    Транспортування по Україні: ця послуга коштує близько 700 доларів і включає в себе доставку автомобіля від порту до пункту призначення в Україні.
                                </li>
                            </ol>
                            <div>
                                Зазначена вартість є максимальною, і вона може змінюватися в залежності від конкретних умов і обраного маршруту доставки. Будь ласка, звертайтесь до наших фахівців для отримання точної інформації та розрахунку вартості для конкретного автомобіля.
                            </div>
                        </div>
                    </details> 
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Як відбувається доставка авто із США в Україну?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            <div>
                                Автомобіль з США до України доставляється таким чином:
                            </div>
                            <ul className='list-decimal list-inside flex flex-col gap-4'>
                                <li>
                                    Автомобіль покидає аукціон в США.
                                </li>
                                <li>
                                    Його перевозять до порту в США.
                                </li>
                                <li>
                                    Автомобіль завантажується на судно.
                                </li>
                                <li>
                                    Судно перетинає Атлантичний океан.
                                </li>
                                <li>
                                    Автомобіль вивозять з порту в Європі.
                                </li>
                                <li>
                                    Він доставляється до України, зазвичай в місто Львів.
                                </li>
                                <li>
                                    Після розмитнення і оформлення документів автомобіль готовий до видачі клієнту.
                                </li>
                            </ul>
                        </div>
                    </details> 
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Скільки коштує розмитнення авто в Україні?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            <div>
                                У 2023 році розмитнення авто в Україні коштує приблизно 20-40% від ціни транспортного засобу. Формула митного розрахунку включає наступні складові:
                            </div>
                            <ul className='list-decimal list-inside'>
                                <li>
                                    Державне мито на ввезення (10% від вартості авто).
                                </li>
                                <li>
                                    Акцизний збір (розраховується відповідно до тарифу за об'ємом двигуна та віком авто).
                                </li>
                                <li>
                                    Податок на додану вартість (ПДВ) (20% від вартості авто).
                                </li>
                                <li>
                                    Додатковий внесок до Пенсійного фонду (3-5% від вартості авто).
                                </li>
                            </ul>
                            <div>
                                Якщо розмитнити електромобіль, то мито не стягується, а акцизний збір розраховується за тарифом 1 євро за 1 кВт-годину ємності акумулятора. Точну вартість авто з США можна розрахувати за допомогою онлайн-калькулятора.
                            </div>
                        </div>
                    </details> 
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Які платежі входять до оплати розмитнення?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            <div>
                                В оплату розмитнення входять такі платежі:
                            </div>
                            <ul className='list-decimal list-inside'>
                                <li>
                                    Ввізне мито: 10% від оцінної вартості.
                                </li>
                                <li>
                                    Акцизний збір за двигун: Розраховується за формулою, яка включає базову ставку, обсяг двигуна (л або кВт), вік машини та курс євро/долар.
                                </li>
                                <li>
                                    Податок на додану вартість (ПДВ): 20% від заявленої вартості транспортного засобу.
                                </li>
                                <li>
                                    Пенсійний внесок: Від 3 до 5% від суми контрактної вартості, акцизу, держмита та ПДВ.
                                </li>
                            </ul>
                            <div>
                                Усі ці відсоткові ставки розраховуються від оцінної (контрактної) вартості, яка включає договірну ціну, мито та акцизний збір.
                            </div>
                        </div>
                    </details> 
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Коли оплачується доставлення авто з США?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            Оплата за доставлення авто з США зазвичай проводиться протягом 3 днів після закупівлі лота на аукціоні. Ця оплата включає в себе вартість придбаного лота та вартість його доставлення до вас. Ці платежі зазвичай здійснюються за допомогою банківського переказу через систему SWIFT.
                            Оплата інших послуг, таких як розмитнення та інші сервіси, зазвичай проводиться протягом наступних 1-3 місяців, особливо у випадку, коли автомобіль доставляється океаном до місця призначення.

                        </div>
                    </details> 
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Як заощадити на доставленні авто з США?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            Рекомендується звернутися до великої компанії, яка спеціалізується на доставці автомобілів з США. Така компанія може надати доступ до величезної кількості автомобілів, що доставляються, і таким чином забезпечити найнижчі ціни на підбір, покупку, доставку та супровід авто на всіх етапах. Наша компанія готова допомогти вам в цьому процесі і забезпечити ефективну та економічну доставку автомобіля з США.
                        </div>
                    </details>  
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Як відбувається розмитнення авто з США?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            <div>
                                Розмитнення авто з США включає в себе кілька етапів:
                            </div>
                            <ul className='list-decimal list-inside'>
                                <li>
                                    Збирання пакету документів, необхідних для оформлення декларації.
                                </li>
                                <li>
                                    Розрахунок та оплата суми митного збору на Євротерміналі (АвтоХаб).
                                </li>
                                <li>
                                    Складання та подання оригінальної декларації.
                                </li>
                                <li>
                                    Після цього, авто випускається за межі митного контролю та доставляється клієнту.
                                </li>
                            </ul>
                        </div>
                    </details> 
                </div>
            </div>
        </div>
        <div className='w-screen mx-auto bg-[#12120e] min-h-[230px] text-white flex items-center'>
            <div className='mx-auto flex items-center flex-col xl:flex-row gap-12 p-4'>
                <div className='mx-auto'>
                    <div className='text-[22px] font-bold '>
                        ПІДПИСУЙТЕСЬ!
                    </div>
                    <div className='text-[18px]'>
                        Та дізнавайтеся перші про вигідні пропозиції
                    </div>
                </div>
                <div className='flex mx-auto'>
                    <input className='box-border p-4 md:w-[320px] h-[54px] bg-[#12120e] border-[3px] border-solid border-[#f1f1f6]' placeholder='Введіть ваш Email' type="text" />
                    <button className='h-[54px] bg-[#730706] box-border px-5 md:w-[220px] rounded-tr rounded-br'>
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
