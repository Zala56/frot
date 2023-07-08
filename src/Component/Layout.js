import Header from "./Header";

const Layout = ({navbar=true, children}) => {
  return (
    <>
       { navbar && <Header/>}
      <div className="container mt-3">{children}</div>
    </>
  );
};

export default Layout;