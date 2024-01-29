import React from 'react'
import Licens from "../../accest/AboutUS/Licens.webp"
import deferent from "../../accest/AboutUS/deferent.webp"
import delivery from "../../accest/AboutUS/delivery.webp"
import support from "../../accest/AboutUS/support.webp"
import Baner1 from "../../accest/AboutUS/Baner1.webp"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import { FormSupportAccept } from '../Forms/FormSupportAccept'
import Image from '../Image'
export const AboutUS = () => {
  return (
    <div className='font-mono mt-3 lg:mt-10 flex flex-col items-start w-screen  '>
        <div className='flex flex-col xl:flex-row mx-auto xl:gap-16 items-center'>
            <div className='md:my-8 mx-auto w-[300px]  md:w-[470px]  '>
                <div className='text-[23px] font-title font-bold'>
                    Про Adolbi
                </div>
                <div className='text-[15px] my-5'>
                    Наша компанія має великий досвід у сфері продажу автомобілів із США. Ми розуміємо, що вибір партнера для придбання авто це важливий крок, і ми готові підтримати вас у цьому процесі. Ось, чому ми можемо бути корисними для вас:
                </div>
                <ul className='list-disc flex flex-col gap-[10px] list-inside'>
                    <li>Ми пропонуємо нашим клієнтам конкурентоспроможні ціни на автомобілі з аукціонів у Сполучених Штатах. </li>
                    <li>Завдяки нашим партнерським відносинам з автоаукціоном, ми маємо доступ до вигідних лотів та можливість проводити закриті торги на найкращих умовах.</li>
                    <li>Ми надаємо гарантії на якість кожного автомобіля, який продаємо. Кожен лот супроводжується докладною інформацією та документацією. </li>
                    <li>Наша команда фахівців готова надати вам повну підтримку на кожному етапі співпраці, включаючи логістику, розмитнення та інші послуги. </li>
                </ul>
                <div className='text-[15px] my-5'>
                    Обираючи автомобіль зі США, ви отримуєте унікальну можливість отримати високоякісне авто за вигідними цінами, а ми завжди готові надати вам повну інформацію та підтримку на кожному етапі вашої покупки і доставки.
                </div>
            </div>
            <div className='border border-solid border-[#12120e] w-[300px] h-[260px] md:h-[560px] md:w-[650px]'>

            </div>
        </div>
        <div className='my-8  mx-auto flex gap-12 flex-col xl:flex-row'>
            <div className=' border border-solid border-[#12120e] w-[300px] h-[230px] sm:w-[450px] sm:h-[388px] rounded'>

            </div>
            <div className='w-[300px] mx-auto md:w-[470px] lg:w-[731px]'>
                <div className='text-[23px] font-title font-bold'>
                    Наша історія 
                </div>
                <div className='text-[15px] mt-3'>
                    Adolbi - це історія успіху, яка розпочалася багато років тому з пристрасті до автомобілів і бажанням надавати найкращі послуги в галузі пригону авто зі США.
                    Один із ключових принципів Adolbi - це індивідуальний підхід до клієнта. Команда професіоналів завжди готова слухати потреби та бажання клієнтів, допомагати їм вибрати ідеальний автомобіль і забезпечувати підтримку на кожному етапі пригону.
                    Впровадження сучасних технологій і інформаційних систем дозволило компанії максимально оптимізувати процеси та забезпечити максимальну ефективність.
                    Протягом багатьох років Adolbi розширювала свої горизонти та підвищувала якість своїх послуг. Компанія надає клієнтам можливість приганяти автомобілі зі США з мінімальними труднощами та ризиками.
                </div>
            </div>
        </div>
        <div className='my-8  mx-auto flex gap-12  flex-col '>
            <div className=' w-[300px] mx-auto md:w-[400px]  '>
                <div className='text-[23px] font-title font-bold'>
                    Наші цінності
                </div>
                <div className='text-[15px] my-3 md:my-5'>
                    Ціль нашої компанії полягає в забезпеченні наших клієнтів надійними та високоякісними автомобілями зі США. Ми віримо у доступність мрій про власний автомобіль і прагнемо зробити процес пригону авто максимально простим та зручним для кожного клієнта. 
                </div>
            </div>
            <div className='flex flex-col sm:flex-row flex-wrap xl:flex-nowrap  my-5 mx-auto gap-4'>
                <div className='box-border w-[350px] h-[250px] bg-[#12120e] rounded flex flex-col p-5 text-white'>
                    <div className='flex gap-4'>
                        <div className='bg-[#740706] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <Image className='w-[60px] h-[60px]' src={Licens} alt="" />
                        </div>
                        <div className='text-[21px] font-title font-bold'>
                            Ліцензії
                        </div>
                    </div>
                    <div className='text-[14px] max-w-[560px] mt-4'>
                        Наша ліцензія дає можливість отримати нам доступ до додаткових можливостей на аукціоні, отримувати знижки та брати участь у закритих торгах.
                    </div>
                </div>
                <div className='box-border w-[350px] h-[250px] bg-[#12120e] rounded flex flex-col p-5 text-white'>
                    <div className='flex gap-4'>
                        <div className='bg-[#740706] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <Image className='w-[60px] h-[60px]' src={deferent} alt="" />
                        </div>
                        <div className='text-[21px] font-title font-bold'>
                            Прозорість
                        </div>
                    </div>
                    <div className='text-[14px] max-w-[560px] mt-4'>
                        Ми завжди надаємо чітку та доступну інформацію нашим клієнтам, допомагаючи їм приймати інформовані рішення.
                    </div>
                </div>
                <div className='box-border w-[350px] h-[250px] bg-[#12120e] rounded flex flex-col p-5 text-white'>
                    <div className='flex gap-4'>
                        <div className='bg-[#740706] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <Image className='w-[60px] h-[60px]' src={delivery} alt="" />
                        </div>
                        <div className='text-[21px] font-title font-bold'>
                            Логістика
                        </div>
                    </div>
                    <div className='text-[14px] max-w-[560px] mt-4'>
                        Наша компанія прагне до постійного росту і розширення географії наших послуг, щоб задовольняти потреби клієнтів у всьому світі.                    </div>
                </div>
                <div className='box-border w-[350px] h-[250px] bg-[#12120e] rounded flex flex-col p-5 text-white'>
                    <div className='flex gap-4'>
                        <div className='bg-[#740706] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <Image className='w-[60px] h-[60px]' src={support} alt="" />
                        </div>
                        <div className='text-[21px] font-title font-bold'>
                            Надійність
                        </div>
                    </div>
                    <div className='text-[14px] max-w-[560px] mt-4'>
                        Наші представники супроводжують лоти на всіх етапах їх переміщення, включаючи завантаження, транспортування та розвантаження, щоб забезпечити безпеку та надійність доставки.
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-8  bg-white w-screen min-h-[400px] lg:h-[400px]  mx-auto flex xl:gap-40 items-center '>
            <div className='flex mx-auto flex-col gap-8 mt-16 w-[300px] md:w-[420px]'>
                <div className='text-[23px] font-title font-bold'>
                    Натисни сюди, щоб потрапити на портал пошуку роботи
                </div>
                <div className='text-[15px] '>
                    Ми завжди раді вітати нових співробітників. Переходь, щоб отримати доступ до інформації про вакансії та можливості працевлаштування в нашій компанії.
                </div>
                <button className='bg-[#740706] rounded text-white text-[17px] w-[300px] lg:w-[420px] h-[90px] font-bold'>
                    Натисни сюди, щоб потрапити на портал пошуку роботи
                </button>
            </div>
            <Image src={Baner1} className='hidden xl:block w-[574px] h-[380px] rounded' alt="" />
        </div>
        <div className=' flex gap-32 justify-between w-screen  mx-auto  flex-col xl:flex-row'>
            <div className=' flex flex-col gap-8 xl:gap-16 w-[300px] md:w-[430px] mx-auto'>
                <div className='text-[23px] font-title font-bold'>
                    Ми завжди відкриті до співпраці
                </div>
                <div className='text-[15px]'>
                    Наша компанія завжди відкрита до співпраці з різними клієнтами та партнерами. Ми цінуємо кожного клієнта і стежимо за тим, щоб їх потреби були виконані на вищому рівні. Незалежно від того, чи ви фізична особа, дилер, підприємство або оптовик, ми готові надати вам наші послуги та підтримку.<br/>
                    Переходьте на сторінку “Співпраця”, щоб приєднатися до світу автомобільного бізнесу.
                </div>
                <button className='bg-[#740706] rounded text-white font-bold text-[18px] w-[320px] h-[70px]'>
                    Співпраця
                </button>
            </div>
            <div className='w-screen md:w-[700px] lg:w-[900px] object-cover min-h-[620px] lg:h-[620px] bg-Baner2 text-white '>
                <FormSupportAccept/>
            </div>
        </div>
        <div className='mb-8 w-screen  mx-auto bg-[#12120e] min-h-[150px] text-white flex items-center'>
            <div className='mx-auto flex flex-col xl:flex-row gap-10 p-4'>
                <div>
                    <div className='text-[22px] font-bold '>
                        ПІДПИСУЙТЕСЬ!
                    </div>
                    <div className='text-[18px]'>
                        Та дізнавайтеся перші про вигідні пропозиції
                    </div>
                </div>
                <div className='flex xl:ml-96 flex-col md:flex-row'>
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
            <div className='flex flex-col sm:flex-row gap-12 my-4 md:my-10'>
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
