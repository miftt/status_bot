'use client'

import { BsRobot } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import { BiNoSignal } from "react-icons/bi";
import { FaBan } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";
import Card from "./Card";

const DashboardsPage = () => {
    return ( 
        <div>
            <div className="grid gap-y-1 gap-x-1 md:grid-cols-2 xl:grid-cols-3">
                <Card icon={<BsRobot size={40}/>} title="" total={10} description="50%"/>
                <Card icon={<FaSignal size={40}/>} title="Online" total={10} description="50%"/>
                <Card icon={<BiNoSignal size={40}/>} title="Ofline" total={10} description="50%"/>
                <Card icon={<FaBan size={40}/>} title="Banned" total={10} description="50%"/>
                <Card icon={<GrPowerShutdown size={40}/>} title="Suspend" total={10} description="50%"/>
            </div>
        </div>
     );
}
 
export default DashboardsPage;