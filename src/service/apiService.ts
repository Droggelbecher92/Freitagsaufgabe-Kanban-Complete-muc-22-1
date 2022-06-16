import axios from "axios";
import {KanbanItem, NewKanbanItem} from "./models";

export const postNewKanban = (item : NewKanbanItem) => {
    return axios.post("/api/kanban", item)
        .then(response => response.data)
}

export const getAllKanban = () => {
    return axios.get("/api/kanban")
        .then(response => response.data)
}

export const deleteKanban = (id:string)=>{
    return axios.delete(`/api/kanban/${id}`)
        .then(response => response.data)
}

export const putKanbanStatus = (direction:string,item:KanbanItem)=>{
    return axios.put(`/api/kanban/${direction}`,item)
        .then(response => response.data)
}

export const getKanbanById = (id : string) => {
    return axios.get(`/api/kanban/${id}`)
        .then(response => response.data)
}

export const putUpdatedKanban = (item : KanbanItem) =>{
    return axios.put(`/api/kanban`,item)
        .then(response => response.data)
}