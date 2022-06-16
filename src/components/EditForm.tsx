import {FormEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getKanbanById, putUpdatedKanban} from "../service/apiService";
import {KanbanItem} from "../service/models";
import Loading from "./Loading";

export default function EditForm(){

    const [task, setTask] = useState('')
    const [desc, setDesc] = useState('')
    const [item, setItem] = useState<KanbanItem>()

    const {id} = useParams()
    const nav = useNavigate()

    useEffect(()=>{
        getKanbanById(id||'undefined')
            .then(data => {
                setTask(data.task)
                setDesc(data.description)
                setItem(data)
            })
    },[id])

    const updateKanban = (ev : FormEvent) => {
        ev.preventDefault()
        item && putUpdatedKanban({id:item.id,task:task,description:desc,status:item.status})
            .then(() => nav('/'))
    }



    return(item ?
                <form className={'editForm'} onSubmit={updateKanban}>
                    <input type="text" placeholder={'Neue Task Bezeichnung'} value={task} onChange={ev => setTask(ev.target.value)}/>
                    <br/>
                    <input type="text" placeholder={'Neue Task Beschreibung'} value={desc} onChange={ev => setDesc(ev.target.value)}/>
                    <br/>
                    <button type={'submit'}>Save</button>
                </form>
                :
                <Loading/>
    )
}