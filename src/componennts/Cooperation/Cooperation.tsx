import React from 'react'
import Baner1 from '../../accest/Cooperation/Baner1.webp'
import Baner2 from '../../accest/Cooperation/Baner2.webp'
import Baner3 from "../../accest/Main/Baner2.webp"
import cargo from '../../accest/Cooperation/cargo.webp'
import doc from '../../accest/Cooperation/doc.webp'
import dolar from '../../accest/Cooperation/dolar.webp'
import hammer from '../../accest/Cooperation/hammer.webp'
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import { FormQuestionsBorder } from '../Forms/FormQuestionsBorder'
import { FormCooperation } from '../Forms/FormCooperation'
import Image from '../Image'

export const Cooperation = () => {
  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen gap-[75px] text-ellipsis'>
        <div className='flex gap-11  mx-auto justify-between'>
            <div className=' w-[300px] sm:w-[475px] '>
                <div className='text-[21px] font-title font-bold mb-5'>
                    Ми завжди відкриті до співпраці
                </div>
                <div>
                    Ми вже декілька років ведемо бізнес привезення авто зі США. Ми доставляємо понад 2 000 автомобільних лотів, надаючи повний спектр послуг, який включає підбір, покупку, доставку, розмитнення та оформлення всіх необхідних документів. З нашою великою активністю, ми захопили 39% ринку уживаних автомобілів, які імпортували з США в Україну.
                    <br/>Всі наші клієнти можуть бути впевнені, що отримають свої автомобільні лоти в найкращому стані, цілими та неушкодженими, без жодних ризиків.
                </div>
            </div>
            <Image className='w-[530px] ml-44 h-[270px] rounded hidden xl:block ' src={Baner1} alt="" />
        </div>
        <FormCooperation/>
        <div className='flex  mx-auto flex-col gap-5 '>
            <div className='text-[21px] font-title font-bold text-center'>
                Вигідні умови співпраці для оптових клієнтів
            </div>
            <div className='flex flex-col xl:flex-row gap-[15px] text-white'>
                <div className='flex flex-col items-center'>
                    <div className='w-[90px] h-[90px] rounded-full bg-[#740706] flex justify-center items-center -mb-10 z-40'>
                        <Image className='w-[60px] h-[60px]' src={hammer} alt="" />
                    </div>
                    <div className='w-[310px] h-[110px] bg-[#12120e] rounded-md flex justify-center items-center'>
                    Дилерський доступ до майданчиків
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[90px] h-[90px] rounded-full bg-[#740706] flex justify-center items-center -mb-10 z-40'>
                        <Image className='w-[60px] h-[60px]' src={doc} alt="" />
                    </div>
                    <div className='w-[310px] h-[110px] bg-[#12120e] rounded-md flex justify-center items-center'>
                    Повний документальний супровід
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[90px] h-[90px] rounded-full bg-[#740706] flex justify-center items-center -mb-10 z-40'>
                        <Image className='w-[60px] h-[60px]' src={dolar} alt="" />
                    </div>
                    <div className='w-[310px] h-[110px] bg-[#12120e] rounded-md flex justify-center items-center'>
                    Мінімальні комісійні ставки
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[90px] h-[90px] rounded-full bg-[#740706] flex justify-center items-center -mb-10 z-40'>
                        <Image className='w-[60px] h-[60px]' src={cargo} alt="" />
                    </div>
                    <div className='w-[310px] h-[110px] bg-[#12120e] rounded-md flex justify-center items-center'>
                    Доставка за оптовими тарифами
                    </div>
                </div>
            </div>
        </div>
        <div className='flex  mx-auto flex-col xl:flex-row gap-[50px]'>
            <div className='w-[300px] md:w-[600px]'>
                <div className='text-[21px] font-title font-bold '>
                    Працюємо з найкращими аукціонами Америки
                </div>
                <div className='text-[15px] w-[300px] md:w-[545px] flex flex-col gap-4'>
                    Наша компанія має довгостроковий та успішний досвід співпраці з аукціоном Copart, одним з найвідоміших та найбільших аукціонів у Сполучених Штатах. Як офіційний та авторизований представник Copart, ми маємо переваги, недоступні для багатьох.

                    <div>
                        У нас є можливість переглядати повний опис транспортних засобів на аукціоні, вільно брати участь у закритих торгах та придбати насправді вигідні лоти. Ми також маємо можливість сплачувати мінімальні комісійні збори, що дозволяє нам забезпечити більш вигідні умови для наших клієнтів при покупці авто зі США на аукціоні Copart.
                        Наш статус авторизованного представника Copart також надає нам доступ до всіх можливих матеріалів та документів, а також дозволяє виконувати різноманітні операції при оформленні угод. 

                    </div>
                
                </div>
            </div>
            <div className='flex flex-wrap gap-4 w-[300px] md:w-[600px]'>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
            </div>
        </div>
        <div className=' mx-auto bg-[#12120e] w-screen min-h-[500px] text-white flex flex-col gap-5'>
            <div className='text-[23px] mx-auto font-title font-bold my-4'>
                Співпрацюючи з нами, ви отримуєте: 
            </div>
            <div className='flex flex-col  mx-auto xl:flex-row text-[#12120e] gap-5 mb-10'>
                <ul className='list-inside list-disc flex flex-col gap-5'>
                    <li className='bg-white rounded-md w-[340px] sm:w-[380px]  p-5'>
                        Привілейований доступ до аукціону: Ми працюємо з найвідомішим аукціоном Америки - Copart, що дозволяє нам вибирати найкращі лоти для вас.
                    </li>
                    <li className='bg-white rounded-md w-[340px] sm:w-[380px]   p-5'>
                        Низькі комісійні: Наш статус довіреного агента Copart дозволяє нам отримувати найкращі умови та знижки на комісійні збори.
                    </li>
                </ul>
                <ul className='list-inside list-disc flex flex-col gap-5'>
                    <li className='bg-white rounded-md w-[340px] sm:w-[380px]  p-5'>
                        Професійний підбір авто: Ми допоможемо вам вибрати автомобіль, що відповідає вашим потребам та бюджету.
                    </li>
                    <li className='bg-white rounded-md w-[340px] sm:w-[380px]  p-5'>
                        Повний сервіс: Ми забезпечимо вас усім необхідним, включаючи покупку, доставку, розмитнення та оформлення документів.
                    </li>
                </ul>
                <ul className='list-inside list-disc flex flex-col gap-5'>
                    <li className='bg-white rounded-md w-[340px] sm:w-[380px]  p-5'>
                        Економію часу і грошей: Наш досвід та професіоналізм допоможуть вам зекономити час і гроші при пригоні авто зі США.
                    </li>
                    <li className='bg-white rounded-md w-[340px] sm:w-[380px]  p-5'>
                        Гарантію якості: Ми перевіряємо кожен лот на стан і історію, щоб ви могли отримати надійне авто.
                    </li>
                    <li className='bg-white rounded-md w-[340px] sm:w-[380px]  p-5'>
                        Підтримку на кожному етапі: Наша команда завжди готова відповісти на ваші запитання і надати професійну консультацію.
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex  mx-auto gap-12'>
            <div className='text-[15px] flex flex-col gap-5 w-[300px] md:w-[530px]'>
                <div className='text-[21px] font-title font-bold'>
                    Доставка в Україну
                </div>
                <div>
                    Наша компанія здійснює доставку автомобілів зі Сполучених Штатів Америки в Україну і ми маємо досвід в організації надійних міжнародних автоперевезень.
                </div>
                <div>
                    Процес доставки розпочинається з моменту виграшу та придбання автомобіля на аукціоні в США. Наші фахівці беруть на себе всі аспекти організації та виконання транспортування, включаючи вивіз автомобіля з аукціону, його доставку до порту, завантаження на судно, морське транспортування через Атлантичний океан, розвантаження в порту призначення та фінальну доставку до вашого місця розташування в Україні.<br/>
                    Ми співпрацюємо з провідними міжнародними перевізниками, тому ваш автомобіль буде доставлений цілим та неушкодженим. Також ми відстежуємо весь процес доставки, щоб ви мали можливість отримати свій автомобіль без зайвих зусиль.
                    Наша географія доставки охоплює всю територію України, незалежно від того, де ви знаходитесь. 
                </div>
            </div>
            <Image className='w-[750px] h-[350px] hidden xl:block ' src={Baner2} alt="" />
        </div>
        <div className=' mx-auto mt-8'>
            <div className='text-[#12120e] mx-auto sm:mx-36 text-[30px] font-title font-bold'>
                Популярні питання
            </div>
            <div className='flex flex-col mx-auto xl:flex-row text-white gap-[10px] mb-10'>
                <div className='flex flex-col mx-auto gap-[10px]'> 
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Які переваги ви отримаєте при співпраці з Adolbi?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            Співпрацюючи з нами, ви отримаєте повний доступ до всіх можливостей аукціонів, а також такі переваги як: низькі комісійні внески, оптові тарифи на доставку та  оперативність на кожному етапі оформлення документації та транспортування.
                        </div>
                    </details> 
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Як стати партнером нашої компанії?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            Наша компанія завжди відкрита до співпраці для дилерів, юридичних осіб чи фірм та оптовиків. Заповніть заявку на партнерство на нашому веб-сайті, вказавши ваші контактні дані та всю необхідну інформацію про вашу компанію. Протягом декількох робочих днів ми розглянемо вашу заявку. Після схвалення, один з наших представників зв'яжеться з вами для подальшого обговорення всіх деталей співпраці.
                        </div>
                    </details>
                </div>
                <div className='flex flex-col mx-auto gap-[10px]'>   
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Як стати дилером з продажу автомобілів?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                            Для того, щоб стати дилером з продажу автомобілів із США, вам слід зареєструвати свій бізнес як ФОП (Фізична особа-підприємець) або юридичну особу та отримати всі необхідні документи та ліцензії для комерційної діяльності. Після цього, оформти партнерство з нашою компанією, що дозволить вам закуповувати авто за оптовими цінами. Потім вже йде продаж автомобілів на ринку, отримуючи прибуток з кожної проданої машини та дотримання всіх відповідних законодавчих вимог. 
                        </div>
                    </details> 
                    <details  id='details' className='bg-[#12120e] cursor-pointer w-[305px] md:w-[470px]   box-content rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Чи можливо купувати авто із США оптом?
                        </summary>
                        <div className='  w-[280px] md:w-[345px] mx-10'>
                        Так, можливо. Як правило, для отримання оптових цін на автомобілі вам потрібно зареєструвати свій бізнес як дилер або юридичну особу та укласти партнерську угоду з компанією. Ми пропонуємо оптовим клієнтам спеціальні умови та знижки. Таким чином, ви зможете купувати автомобілі оптом та продавати їх на ринку з потенційним отриманням прибутку.
                        </div>
                    </details>
                </div>
            </div>
            <div className='  flex -mb-32 '>
                <FormQuestionsBorder/>
                <div className='hidden xl:block'> 
                    <Image className='ml-80' src={Baner3} alt="" />
                </div>
            </div>
        </div> 
        <div className='w-screen mx-auto bg-[#12120e] min-h-[280px] text-white flex items-center'>
            <div className=' mx-auto  flex flex-col xl:flex-row gap-12 pt-6 md:pt-4 p-4'>
                <div>
                    <div className='text-[22px] font-bold '>
                        ПІДПИСУЙТЕСЬ!
                    </div>
                    <div className='text-[18px]'>
                        Та дізнавайтеся перші про вигідні пропозиції
                    </div>
                </div>
                <div className='flex xl:ml-96 flex-col md:flex-row gap-2'>
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

