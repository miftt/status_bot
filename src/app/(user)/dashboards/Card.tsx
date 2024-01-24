interface CardProps {
    icon : any;
    title : string;
    total : number;
    description? : string;
}
 
const Card: React.FC<CardProps> = ({
    icon,
    title,
    total,
    description
}) => {
    return ( 
        <div className="flex flex-col p-8 bg-white border border-gray-200 rounded-lg shadow-md mx-4 my-2">
            <div className="flex justify-between items-center">
                {icon}
                <div className="text-blue-gray-600">
                    <p className="block antialiased font-roboto text-base leading-normal">Total {title} Bot</p>
                    <p className="text-base font-bold text-center">{total}</p>
                </div>              
            </div>
            <div className="border-t border-gray-300 mt-4">
                <p className="font-semibold text-xs text-center text-gray-400 mt-4">{description}</p>
            </div>
        </div>
     );
}
 
export default Card;