import Headline from "../components/Headline";
import KanbanInputForm from "../components/KanbanInputForm";
import KanbanGallery from "../components/KanbanGallery";
import './MainPage.css'
import {useEffect, useState} from "react";
import {KanbanItem} from "../service/models";
import {getAllKanban} from "../service/apiService";
import Loading from "../components/Loading";

export default function MainPage(){

    const [allTasks, setAllTasks] = useState<KanbanItem[]>()

    useEffect(()=>{
        getAllKanban()
            .then(data => setAllTasks(data))
    },[])

    return(
        <div className={'mainPage'}>
            <Headline/>
            <KanbanInputForm/>
            {
                allTasks ?
                    <KanbanGallery/>
                    :
                    <Loading/>
            }
        </div>
    )
}