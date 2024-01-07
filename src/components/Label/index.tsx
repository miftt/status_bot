interface LabelProps {
    htmlFor: string;
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({
    htmlFor,
    children
}) => {
    return ( 
        <label
            htmlFor={htmlFor}
            className="
             text-sm
             font-medium 
             text-gray-900 
             block mb-2 
             dark:text-gray-300
             "
        >
            {children}
        </label>
     );
}
 
export default Label;