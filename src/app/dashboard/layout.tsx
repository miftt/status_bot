export const metadata = {
    title: 'Dashboard'
}

interface RootLayoutProps {
    children: React.ReactNode
}

const DashboardLayout: React.FC<RootLayoutProps> = ({
    children
}) => {
    return ( 
        <div className="py-10 px-10">
            {children}
        </div>
     );
}
 
export default DashboardLayout;