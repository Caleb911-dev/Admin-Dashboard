import "./Table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Playstation 5",
      img: "https://phantom-marca.unidadeditorial.es/0a160ffa615b282fcee6a59b9f9a5f7a/resize/660/f/webp/assets/multimedia/imagenes/2023/12/11/17022938196238.jpg",
      customer: "Mixhael Smart",
      date: "1 March",
      amount: 785,
      method: "Cash on delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Xbox 360",
      img: "https://www.cnet.com/a/img/resize/5152db9e2c4ec265ceebbd556a5d6ce47e0b9502/hub/2020/10/27/baa73fb8-b581-4306-b7b7-586de7016772/xbox-series-x-s-console-hoyle-studio-promo-12.jpg?auto=webp&fit=crop&height=675&width=1200",
      customer: "Chineme Quill",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 28934839,
      product: "Macbook Air",
      img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-macbook-air-gold-202002?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1610746650000",
      customer: "Chris Long",
      date: "1 March",
      amount: 785,
      method: "Cash on delivery",
      status: "Pending",
    },
    {
      id: 49392949,
      product: "Razor Blade",
      img: "https://assets2.razerzone.com/images/pnx.assets/a2c45a48832815a0cf64acd462fe9bf7/razer-blade-15-ch9-ogimage_1200x630.png",
      customer: "Esosa Young",
      date: "1 March",
      amount: 458,
      method: "Online",
      status: "Approved",
    },
    {
      id: 37282949,
      product: "ASUS ROG Strix",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6fGTXDh_lV7CFapod_bEw059XwZGjlYvbAKLoKgInQ&s",
      customer: "Greg Erimus",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table1">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="img" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
