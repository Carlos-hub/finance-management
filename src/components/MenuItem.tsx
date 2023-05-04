
interface IProps{
    icon: any;
    name: string;
    active: boolean;
    option?: any;
    classStyle:string;
}

export function MenuItem(props:IProps){
    
    return(
        <>
        {props.active ? (
        <div className={props.classStyle}>
            <div>
                {props.icon}
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.option}
            </div>
        </div>)
        :
        (
        <div className={props.classStyle}>
            {props.icon}
        </div>
        )
        }
        </>
    )
}