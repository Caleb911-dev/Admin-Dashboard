import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./List.css";

const List = () => {
  return (
    <div className="listPage">
      <Sidebar />
      <div className="listContainerPage">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
