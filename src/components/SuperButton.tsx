import s from './SeperButton.module.css'

type PropsType = {
    name?: string
    onClick: () => void
    color?: string
    disabled?:boolean
    children?:React.ReactNode
}
export const SuperButton: React.FC<PropsType> = (props) => {
    const {name, onClick,color,disabled,children, ...restProps} = props

    const onClickHandler = () => {
        onClick()
    }

    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    // const finalClassName=`${s.button} ${s.default}`
    //const finalClassName=`${s.button} ${color ? s.red : s.default}`
    // const finalClassName=`
    // ${s.button}
    // ${color ? s.red : s.default}
    // ${disabled ? s.disabled : s.default}`
    const finalClassName=`
    ${s.button}
    ${color==='red' ? s.red : color==='secondary'?s.secondary : s.default}
    ${disabled ? s.disabled : s.default}`

    return (
        <button onClick={onClickHandler} className={finalClassName}>{children}</button>
    )
}


//---------------------------------------------
// type PropsType={
//     name:string
//     onClick:()=>void
//
// }
// export const SuperButton:React.FC<PropsType>=({name,
//                                                   onClick,
//                                                  })=>{
//     const onClickHandler=()=>{
//       onClick()
//     }
//     return(
//         <button onClick={onClickHandler}>{name}</button>
//     )
// }

//-------------------------------------------------------

// type PropsType={
//     name:string
//     onClick:()=>void
// }
// export const SuperButton=(props:PropsType)=>{
//     const onClickHandler=()=>{
//         props.onClick()
//     }
//     return(
//         <button onClick={onClickHandler}>{props.name}</button>
//     )
// }