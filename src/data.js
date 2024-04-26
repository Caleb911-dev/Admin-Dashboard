export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="avatar" className="cellImg" />
          {params.row.userName}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <span className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </span>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    userName: "Snow",
    age: 35,
    status: "active",
    email: "test@gmail.com",
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    userName: "Jamie Lannister",
    age: 42,
    status: "active",
    email: "test@gmail.com",
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    userName: "Lannister",
    age: 45,
    status: "passive",
    email: "test@gmail.com",
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    userName: "Stark",
    age: 16,
    status: "pending",
    email: "test@gmail.com",
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    userName: "Targaryen",
    age: null,
    status: "active",
    email: "test@gmail.com",
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    userName: "Melisand",
    age: 150,
    status: "passive",
    email: "test@gmail.com",
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    userName: "Clifford",
    age: 44,
    status: "active",
    email: "test@gmail.com",
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    userName: "Frances",
    age: 36,
    status: "pending",
    email: "test@gmail.com",
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    userName: "Roxie",
    age: 65,
    status: "active",
    email: "test@gmail.com",
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
