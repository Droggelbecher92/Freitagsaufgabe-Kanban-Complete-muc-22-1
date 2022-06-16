import axios from "axios";
import {NewKanbanItem} from "./models";

export const postNewKanban = (item : NewKanbanItem) => {
    return axios.post("/api/kanban", item)
        .then(response => response.data)
}

export const getAllKanban = () => {
    return axios.get("/api/kanban")
        .then(response => response.data)
}