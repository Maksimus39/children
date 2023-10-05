import React from "react";

type PropsType={
    tasks:TaskType[]
    children:React.ReactNode
}
type TaskType=  {
    id: number,
    title: string,
    isDone: boolean
}

export const SuperTodolist:React.FC<PropsType>=(props)=>{
    const{tasks,children,...restProps}=props
    return(
        <>
            <ul>
                {tasks.map(el=>{
                    return(
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type='checkbox' checked={el.isDone}/>
                        </li>
                    )
                })}
            </ul>
            {children}
            <ul>
                {tasks.map(el=>{
                    return(
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type='checkbox' checked={el.isDone}/>
                        </li>
                    )
                })}
            </ul>
            <hr/>
        </>


    )
}