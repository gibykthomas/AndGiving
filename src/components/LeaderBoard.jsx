import {clubData} from '../data/data.js'
/*import { DataGrid } from '@mui/x-data-grid';

export default function LeaderBoard() {
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "club",
          headerName: "Club",
          width: 200,
          /*renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: "amount_raised", headerName: "Amount Raised", width: 200 },
        {
          field: "amount_matched",
          headerName: "Amount Matched",
          width: 200,
        }
      ];  
  return (
    <div className="userList">
      <DataGrid
        rows={clubData}
        columns={columns}
        pageSize={8}
      />
    </div>
  )
}*/
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'club', headerName: 'Club', width: 130 },
  { field: 'amount_raised', headerName: 'Amount Raised', width: 130 },
  {
    field: 'amount_matched',
    headerName: 'Amount Matched',
    type: 'number',
    width: 90,
  }
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={clubData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
