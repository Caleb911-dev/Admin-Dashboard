import Chart from "../../components/Chart/chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import "./Single.css";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="topSingle">
          <div className="leftSingle">
            <div className="editButton">Edit</div>
            <h1 className="titleSingle">Information</h1>
            <div className="itemSingle">
              <img
                src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="itemImg"
              />
              <div className="detailsSingle">
                <h1 className="detailTitle">John Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">JohnDoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+234 567 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. California
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rightSingle">
            <Chart aspect={3 / 1} title="User Spending Last 6 months" />
          </div>
        </div>
        <div className="bottomSingle">
          <h1 className="titleSingle">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
