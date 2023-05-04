import { ArrowCircleLeft, ArrowCircleRight, CaretDown, ChartPie, FileText, ListDashes, ShoppingCart, SignOut, SquaresFour, User, Wallet } from "@phosphor-icons/react";
import { MenuItem } from "../MenuItem";
import { useState } from "react";

interface IProps {
    name: string;
    icon: any;
    classname: string;
}
export function Menu(props: any) {
    const [active,setActive] =  useState(false);
    const menuList = [
        {
            name: 'Account details',
            icon: <FileText size={24} />,
            classname: "flex justify-between p-4 rounded-2xl hover:bg-opacity-200 hover:border hover:border-slate-100 text-white hover:bg-white/20 hover:backdrop-opacity-10"
        },
        {
            name: 'Dashboard',
            icon: <ChartPie size={24} />,
            classname: "flex justify-between p-4 rounded-2xl hover:bg-opacity-200 hover:border hover:border-slate-100 text-white hover:bg-white/20 hover:backdrop-opacity-10"
        },
        {
            name: 'Transaction history',
            icon: <ListDashes size={24} />,
            classname: "flex justify-between p-4 rounded-2xl hover:bg-opacity-200 hover:border hover:border-slate-100 text-white hover:bg-white/20 hover:backdrop-opacity-10"
        },
        {
            name: 'Payment',
            icon: <Wallet size={24} />,
            classname: "flex justify-between p-4 rounded-2xl hover:bg-opacity-200 hover:border hover:border-slate-100 text-white hover:bg-white/20 hover:backdrop-opacity-10"
        },
        {
            name: 'Your products',
            icon: <ShoppingCart size={24} />,
            classname: "flex justify-between p-4 rounded-2xl hover:bg-opacity-200 hover:border hover:border-slate-100 text-white hover:bg-white/20 hover:backdrop-opacity-10"
        },
        {
            name: 'Services',
            icon: <SquaresFour size={24} />,
            classname: "flex justify-between p-4 rounded-2xl hover:bg-opacity-200 hover:border hover:border-slate-100 text-white hover:bg-white/20 hover:backdrop-opacity-10"
        }
    ]
    return (
        <>
        <aside className={active? "bg-zinc-800 max-w-sm float-left p-3 h-screen overflow-hidden": "bg-zinc-800 w-[90px] float-left p-3 h-screen overflow-hidden"}>
            <MenuItem 
            icon={<User size={32}/>} name={"Carlos Miguel"} active={active} classStyle={"flex justify-between p-4 ml-2 rounded-2xl hover:bg-opacity-200 hover:border hover:border-slate-100 text-white hover:bg-white/20 hover:backdrop-opacity-10"}
            option={<CaretDown size={24}/>}
            />
            {active ? (
                <div className="p-4 ml-2 text-center">
                    <ul className="list-disc justify-center text-white">
                        <li className="decoration-red-600">Standard accont</li>
                        <li className="decoration-red-600">Shared account</li>
                    </ul>
                </div>
            ):(<></>)}
            {menuList.map((menu) => {
                return (
                    <MenuItem
                        key={menu.name}
                        icon={menu.icon}
                        name={menu.name}
                        active={active}
                        classStyle="flex justify-between p-4 ml-2 rounded-2xl hover:bg-opacity-200 hover:border hover:border-slate-100 text-white hover:bg-white/20 hover:backdrop-opacity-10" 
                        />
                )
            })}
            <MenuItem icon={<SignOut size={32} />} name={"Logout"} active={active} classStyle={"flex justify-between p-4 rounded-2xl hover:bg-opacity-200 hover:border hover:border-slate-100 text-white hover:bg-white/20 hover:backdrop-opacity-10 bottom-2 absolute "}/>
        </aside>
        <div>
        {active?
            <a onClick={()=>setActive(!active)}><ArrowCircleLeft size={32} className="bg-white rounded-full relative -left-4 top-16"/></a>
            : 
            <a onClick={()=>setActive(!active)}><ArrowCircleRight size={32} className="bg-white rounded-full relative -left-4 top-16" /></a>
        }
        </div>
        </>
    )
}