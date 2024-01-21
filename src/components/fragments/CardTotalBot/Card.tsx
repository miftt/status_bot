interface cardTotalBotProps {
    info: string
    total: number
}


const CardTotalBot: React.FC<cardTotalBotProps> = ({
    info,
    total
}) => {
    return ( 
        <div className="w-full mb-4 border border-gray-400 rounded-xl">
            <div className="card-body">
                <h5 className="card-title">Total {info} Bot</h5>
                <p className="card-text">{total}</p>
            </div>
        </div>
     );
}
 
export default CardTotalBot;