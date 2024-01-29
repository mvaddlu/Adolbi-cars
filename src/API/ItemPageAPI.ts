import axios from "axios"
const base = axios.create({
    baseURL:"https://test-adolbi-cars-api-0a53b7c73b49.herokuapp.com/"
}) 

export class ItemPageAPI{
    async GetItemByID(id:number | undefined){
        const res = base.get(`/lots/${id}`).then(u =>u.data)
        return res
    }
}