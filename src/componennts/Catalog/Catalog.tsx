import { Select } from 'antd'
import React, { useRef, useState } from 'react'
import { Item } from './Item'
import play from "../../accest/Main/play.png"
import obert from "../../accest/Catalog/obert.svg"
import Baner1 from "../../accest/Catalog/Baner1.webp"
import Baner2 from "../../accest/Main/Baner2.webp"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import { BlackTheme } from '../BlackTheme/BlackTheme'
import { FormFilter } from '../Forms/FormFilter'
import { FormHelp } from '../Forms/FormHelp'
import { FormQuestionsBorder } from '../Forms/FormQuestionsBorder'
import { GetFilterData, GetListofItem } from '../../app/Catalog'
import { RootState, useAppDispatch } from '../../app/store'
import { useSelector } from "react-redux"
import { useFormik } from 'formik'
import Image from '../Image'

interface InitialValues{
    SelectMark:string,
    SelectModel:string,
    PriceFrom:number |undefined,
    PriceTo:number |undefined,
    YearFrom:number |undefined,
    YearTo:number |undefined,
    MileageFrom:number |undefined,
    MileageTo:number |undefined,
    Keys:string,
    TypeCar:string,
    Fuel:string,
    Color:string,
    Reason:string,
    Damage:string,
    Transmission:string,
    EngineSize:string,
    BuyNow:boolean
}

export const Catalog = () => {
    const {ListItem,body_style,fuels,markes,currentPage,totalofItems,nextPage, } = useSelector((u:RootState)=>u.Catalog )
    const formik = useFormik<InitialValues>({
        initialValues:{
            SelectMark:markes,
            SelectModel:'',
            PriceFrom:0,
            PriceTo:134725,
            YearFrom:2013,
            YearTo:2023,
            MileageFrom:0,
            MileageTo:347501,
            Keys:'',
            TypeCar:body_style,
            Fuel:fuels,
            Color:'',
            Reason:'',
            Damage:'',
            Transmission:'',
            EngineSize:'',
            BuyNow:false
        },
        onSubmit:()=>{

        }
    })
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch(GetListofItem({page:currentPage,body_style:formik.values.TypeCar,color:formik.values.Color,drive_type:formik.values.Reason,fuel:formik.values.Fuel,key:formik.values.Keys,make:formik.values.SelectMark,model:formik.values.SelectModel,primary_damage:formik.values.Damage,engine_type:formik.values.EngineSize,odometer_from:formik.values.MileageFrom,odometer_to:formik.values.MileageTo,transmission:formik.values.Transmission,pre_accident_value_from:formik.values.PriceFrom,pre_accident_value_to:formik.values.PriceTo,year_from:formik.values.YearFrom,year_to:formik.values.YearTo,}))
        dispatch(GetFilterData())
    },[dispatch,formik.values,body_style,fuels,markes,currentPage])
    const Ref = useRef<HTMLDetailsElement>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const TetxChange = React.useCallback(()=>{
        setIsOpen(!isOpen); 
        if (Ref.current) {
            Ref.current.open = !isOpen;
          }
    },[Ref,isOpen])
    const Pagination = React.useCallback((page:number)=>{
        dispatch(GetListofItem({page,body_style:body_style,color:formik.values.Color,drive_type:formik.values.Reason,fuel:fuels,key:formik.values.Keys,make:markes,model:formik.values.SelectModel,primary_damage:formik.values.Damage,engine_type:formik.values.EngineSize,odometer_from:formik.values.MileageFrom,odometer_to:formik.values.MileageTo,transmission:formik.values.Transmission,pre_accident_value_from:formik.values.PriceFrom,pre_accident_value_to:formik.values.PriceTo,year_from:formik.values.YearFrom,year_to:formik.values.YearTo,}))
        window.scrollTo(0,0)
    },[dispatch,formik.values,body_style,fuels,markes])
  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen  gap-[75px] overflow-x-hidden'>
        <div className=' font-mono mx-auto sm:min-h-[1400px]'>
            <div className='font-title text-[21px] font-bold m-8'>
                АВТОМОБІЛІ З АУКЦІОНІВ США
            </div>
            <div className='flex sm:ml-0'>
                <div className={' relative flex-col  xl:flex '}>
                    <div className='hidden lg:block'>
                        <BlackTheme>
                            <FormFilter setisOpenForm={setIsOpenForm} formik={formik}  isOpenForm={isOpenForm}/>                      
                        </BlackTheme>
                    </div>

                    {
                        isOpenForm ? <div className='absolute left-0 xl:hidden z-[100]'><BlackTheme>
                        <FormFilter close setisOpenForm={setIsOpenForm} formik={formik}  isOpenForm={isOpenForm}/>                      
                    </BlackTheme> </div> : <div> </div>
                    }
                    <div className='w-[256px] bg-[#12120e] text-white mr-5 mt-5 pl-5 py-2 hidden xl:block'>
                        <div>
                            Отримувати новини на Email
                        </div>
                        <input placeholder='Введіть ваш email' type="text" className='border-[3px] pl-2 border-solid border-[#f1f1f6] bg-[#12120e] w-[210px] h-[40px] outline-none rounded my-4'/>
                        <button className='text-[15px] font-bold w-[210px] h-[40px] bg-[#740706] rounded'>
                            Підписатися
                        </button>
                    </div>
                </div>
                <div>
                    
                    <div className='flex xl:w-[950px] justify-between'>
                        <button onClick={()=>setIsOpenForm(true)} className='block tablet:hidden rounded w-[210px] h-[40px] bg-[#740706] text-white'>
                            Фільтр
                        </button>
                        <div className=' hidden tablet:block'>
                            Знайдено {totalofItems} авто
                        </div>
                        <Select  className='w-[210px] h-[40px]' placeholder="Відсортувати"></Select>
                    </div>
                    <div className={isOpenForm?'flex flex-col ml-8 sm:-ml-20 tablet:ml-0 blur-sm':'flex flex-col ml-8 sm:-ml-20 tablet:ml-0'}>
                        {
                            ListItem.map((u:any)=><Item key={u.VIN_code} {...u} />)
                        }
                        <FormHelp/>
                        <div className='flex gap-[10px] text-[#12120e] font-bold text-[14px] mt-[200px]'>
                            {/*додати редірект на верх при натисканні*/}
                            <div aria-disabled  className='w-[42.5px] h-[42.5px] font-bold bg-[#740706] rounded text-white flex justify-center items-center'>
                                <div>
                                    {currentPage}
                                </div>
                            </div>
                            <div onClick={()=>Pagination(nextPage)} className='w-[42.5px] h-[42.5px] font-bold bg-white rounded flex justify-center items-center'>
                                {nextPage}
                            </div>
                            <div onClick={()=>Pagination(nextPage)} className='cursor-pointer min-w-[42.5px] h-[42.5px] font-bold bg-white rounded flex justify-center items-center'>
                                <img className='w-[20px] h-[20px]' src={play} alt="" />
                            </div>
                            <button className=' flex w-[176px] h-[42px] border-[3px] border-solid border-[#740706] rounded justify-center items-center'>
                                Показати ще 
                                <img className='w-[22px] h-[30px] rotate-12 ml-3' src={obert} alt="" />
                            </button>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
        <div className='flex mx-auto text-ellipsis'>
            <div className=' flex flex-col items-center mx-auto '>
                <details ref={Ref} id="text-details" className='w-[300px] md:w-[630px] mx-auto flex flex-col items-center'>
                    <summary>
                        <div className='mt-10'>
                            <div className='text-[21px] font-bold font-title  mb-5'>
                                Пошук та підбір б/в машин на американських аукціонах
                            </div>
                            <div className='text-[15px]'>
                                Купівля автомобіля на американських аукціонах може бути більш економічно вигідною, ніж придбання авто на українському ринку. Проте ключовою частиною успішної покупки є правильний вибір. Наша компанія має досвід у цій галузі, і ми знаємо, як здійснити безпечну та вигідну покупку авто з США. Проте, ви також маєте можливість спробувати зробити це самостійно.
                            </div>
                        </div>                    
                    </summary>
                    <div>
                        <div className='mt-10'>
                            <div className='text-[25px] font-bold font-title  mb-5'>
                                Як вдало купити автомобіль в Америці на аукціоні?
                            </div>
                            <ul className='lg:ml-5 list-decimal list-inside text-[15px] flex flex-col gap-5'>
                                <li>
                                    Реєстрація: Пошук автомобілів розпочинається з реєстрації на аукціонах. Найбільш популярними з них є Copart, Manheim та IAAI.
                                </li>
                                <li>
                                    Ліцензія: Завантажте необхідну ліцензію, яка надасть вам право придбати авто на аукціоні.
                                </li>
                                <li>
                                    Пошук: Почніть пошук автомобілів в Америці, використовуючи наявні фільтри та параметри.
                                </li>
                                <li>
                                    Огляд: Ретельно вивчайте характеристики кожного лота та досліджуйте інформацію та фотографії авто.
                                </li>
                                <li>
                                    Торги: Беріть участь у торгах та обирайте вигідні лоти. Наша команда допоможе вам ефективно провести торги.
                                </li>
                                <li>
                                    Оплата та доставка: Сплачуйте за виграні автомобілі та організовуйте їх транспортування в Україну.
                                </li>
                                <li>
                                    Сертифікація: Після отримання авто в Україні, проходьте обов'язкову сертифікацію та розмитнення.
                                </li>
                                <li>
                                    Отримання та реєстрація: Завершуйте процес, отримуйте свій автомобіль та реєструйте його.
                                </li>
                                <div>
                                Кожен з цих етапів має свої особливості. Наприклад, деякі аукціони, такі як Manheim, доступні лише для дилерів з ліцензією. Ми пропонуємо спрощений процес покупки авто на аукціоні.
                                </div>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <div className='text-[25px] font-bold font-title  mb-5'>
                                Биті чи не биті авто з аукціону, чи варто ризикувати?
                            </div>
                            <div className='text-[15px]'>
                                Різниця між битими автомобілями та автомобілями без пошкоджень полягає в ціні. Автомобілі з США після аварій продаються за значно нижчою ціною. Однак це не завжди критично, оскільки наші спеціалісти ретельно перевіряють документацію та технічний стан кожного лоту. Детальна оцінка за 38 пунктами дозволяє нам зрозуміти, чи варто придбати авто після ДТП.
                                Співпрацюючи з десятками СТО, з нами ви витратите в 3-4 рази менше на ремонт авто після пошкодження.
                                Розширені пошукові фільтри на нашому сайті роблять підбір авто з США максимально зручним. Навіть якщо ви ще не визначились, наші консультанти допоможуть вам знайти авто, що відповідає вашим потребам за ціною та комплектацією.
                            </div>
                        </div>                    
                    </div>
                </details>
                <div onClick={TetxChange}  className='text-[#740706] cursor-pointer underline decoration-1 text-[18px] hover:italic mt-10'>
                    Згорнути
                </div>                
            </div>

            <div>
                <img className='w-[482px] h-[321px] hidden xl:block' src={Baner1} alt="" />
            </div>
        </div>
        <div className='mx-auto mt-8'>
            <div className='text-[#12120e] mx-auto md:mx-36 text-[30px] font-title font-bold'>
                Популярні питання
            </div>
            <div className='flex flex-col  xl:flex-row mx-auto text-white gap-[10px] mb-10'>
                <div className='flex flex-col mx-auto gap-[10px]'>
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px]  md:w-[470px]  box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] hover:ease-in duration-150 h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо?
                        </summary>
                        <div className=' ease-in duration-150 w-[280px] md:w-[345px] mx-10'>
                            На даний момент ми працюємо з одним із найпопулярніших аукціонів Америки, Copart.
                        </div>
                    </details> 
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Як купити автомобіль на аукціоні?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            Перейдіть до Каталогу, оберіть бажаний автомобіль і подайте заявку, натиснувши кнопку "Зробити ставку" або "Замовити авто". Крім того, ви можете скористатися опцією "Купити зараз" у фільтрі, щоб вибрати автомобіль з фіксованою кінцевою вартістю, яку встановив продавець (без урахування додаткових зборів). Якщо у вас ще залишилися питання, залиште заявку прямо на сторінці автомобіля, використовуючи кнопку "Замовити консультацію".
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] cursor-pointer w-[305px]  md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Як дізнатися пробіг автомобіля?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            Реальний пробіг та історію автомобіля можна дізнатися на сервісах Carfax або AutoCheck.
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] cursor-pointer w-[305px]  md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Скільки часу триває доставлення?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            Зазвичай доставка авто з США до України може займати від 6 до 8 тижнів. Проте цей термін може змінюватися в залежності від конкретних умов і послуг, які ви обираєте. А також погоди, завантаженості та віддаленості портів. Транспортування відбувається в 4 етапи: доставлення до порту США (біля 10 робочих днів), проходження американської митниці (до 5 днів), перевезення морем (3-5 тижнів) та перегін по Україні від порту до клієнта (декілька діб).
                        </div>
                    </details> 
                </div>
                <div className='flex flex-col mx-auto gap-[10px]'>
                    <details id='details' className='bg-[#12120e] cursor-pointer w-[305px]  md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Як розмитнити куплений автомобіль?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            На митниці проводиться огляд технічного стану автомобіля та перевірка наявності супровідних документів. Також тут здійснюється розрахунок та оплата державних зборів. Митний збір становить 10% від вартості машини. Акцизний податок розраховується за наступною формулою: фіксована ставка від 50 до 150 доларів помножується на об'єм двигуна та кількість повних років автомобіля. ПДВ становить 20% від вартості автомобіля, державного мита та акцизного податку. Також здійснюється збір до Пенсійного фонду в розмірі 3-5%.
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] cursor-pointer w-[305px]  md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Як вибрати авто із США?
                        </summary>
                        <div className=' w-[280px] md:w-[470px] mx-10'>
                            Щоб вибрати бажану марку та модель автомобіля, використовуйте фільтр. Потім налаштуйте додаткові фільтри, такі як пробіг, рік випуску, середню роздрібну ціну і т. д. Якщо ви хочете придбати автомобіль негайно, без очікування, позначте опцію "Купити зараз" або натисніть кнопку "Замовити авто" і заповніть необхідні поля форми.
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] cursor-pointer w-[305px]  md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            За що, окрім ціни автомобіля, потрібно ще заплатити?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            Зазвичай, для участі в аукціоні доводиться сплатити комісію, яка становить до 10% від кінцевої ставки. Крім того, значними витратами є розмитнення, яке включає державне мито, акцизний збір, ПДВ та внесок до Пенсійного фонду. До цих витрат також додається оплата за доставку, послуги брокерської компанії та послуги нашої компанії. Зазвичай, після отримання автомобіля, необхідно оплатити сертифікацію.
                        </div>
                    </details> 
                </div>
            </div>
            <div className='flex mx-auto '>
                    <FormQuestionsBorder/>
                <div className='hidden xl:block'> 
                    <Image className='ml-80' src={Baner2} alt="" />
                </div>
            </div>
        </div> 
        <div className='w-screen mx-auto bg-[#12120e] min-h-[230px] text-white flex items-center'>
            <div className='mx-auto flex items-center flex-col xl:flex-row gap-12 p-4'>
                <div className='ml-12 md:ml-0'>
                    <div className='text-[22px] font-bold '>
                        ПІДПИСУЙТЕСЬ!
                    </div>
                    <div className='text-[18px]'>
                        Та дізнавайтеся перші про вигідні пропозиції
                    </div>
                </div>
                <div className='flex xl:ml-96'>
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
