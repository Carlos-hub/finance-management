import { ArrowDown, CaretDown, ChartPie, FileText, ListDashes, ShoppingCart, SquaresFour, User, Wallet } from "@phosphor-icons/react";
import { MenuItem } from "../MenuItem";


export function Menu(props:any){

    const menuList =[
        {
            name:'Dashboard',
            icon:<ChartPie size={24} />,
        },
        {
            name:'Transaction history',
            icon:<ListDashes size={24} />,
        },
        {
            name:'Payment',
            icon:<Wallet size={24} />,
        },
        {
            name:'Your products',
            icon:<ShoppingCart size={24} />,
        },
        {
            name:'Services',
            icon:<SquaresFour size={24} />,
        }
    ]
    return(
        <aside className="bg-bunker max-w-sm float-left p-3 h-screen text-white">
            <div className="flex space-x-2 text-white">
                <User size={32}
                />
                <div>
                    <span className="block text-xs text-white">Profile</span>
                    <span className="block text-sm">Fulano de tal(privado)</span>
                </div>
                <CaretDown size={24}/>
            </div>
            <MenuItem 
            name="Account details" 
            icon={<FileText size={24} />} 
            active={true} 
            classStyle="flex space-x-5 m-3"
            option={<CaretDown size={24}/>}
            />

        </aside>
    )
}