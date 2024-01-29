import axios from "axios"
import { Select_lot } from "../app/Message"
import { DataforPopUp, DataforPopUpWithoutAmount, PickUpAssist } from "../app/type/type"

const base = axios.create({
    baseURL:"https://test-adolbi-cars-api-0a53b7c73b49.herokuapp.com/send_message"
}) 

export class MessageAPI {
    async SendQuestions({comment,name,phone_number,message_type}:DataforPopUpWithoutAmount){
        const res = await base.post(`/get_consultation/?name=${name}&phone_number=${phone_number}&comment=${comment}&message_type=${message_type}`)
        return res.data
    }
    async SendSelect_lot({make,name,phone_number,price_from,price_to,year_from,year_to}:Select_lot){
        const res = await base.post(`/select_lot/?name=${name}&phone_number=${phone_number}&auto=${make}&year_from=${year_from}&year_to=${year_to}&budget_from=${price_from}&budget_to=${price_to}`)
        return res.data
    }
    async PickUpSpareParts({comment,name,phone_number,message_type,amount,lot_number}:DataforPopUp){
        const res = await base.post(`/with_amount_and_lot/?name=${name}&phone_number=${phone_number}&comment=${comment}&message_type=${message_type}&amount=${amount}&lot_number=${lot_number}`)
        return res.data
    }
    async PickUpCar ({auto,budget_from,budget_to,name,phone_number}:PickUpAssist){
        const res = await base.post(`/pick_up_car/?name=${name}&phone_number=${phone_number}&budget_from=${budget_from}&budget_to=${budget_to}&auto=${auto}`)
        return res.data
    }
}