import Footer from "./comps/footer/Footer";
import Header from "./comps/header/Header";

const Layout = ({children}) => {
    return ( 
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;