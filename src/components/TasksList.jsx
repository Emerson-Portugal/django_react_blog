
import { useEffect, useState } from "react";
import { getAllTasks } from "../api/blog.api";

export function TasksList(){
    const [tasks, setTasks ] = useState([]);

    useEffect(() => {

        async function loadTasks(){
            const res = await getAllTasks();
            setTasks(res.data);
        }
        loadTasks();

    }, []);


    return <div>


        {

                tasks.map(task => (

                    <div>

                        <h1> {task.title}</h1>

                    </div>


                ))

        }
    </div>





}