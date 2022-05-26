import "./leaderBoard.css";
import * as React from 'react'
import { clubData } from '../data/data.js'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';


const mediumBorder = ["", "4px solid gold", "4px solid silver", "4px solid brown"];
const crown = ["gold", "silver", "brown"]


const columns: GridColDef[] = [

  {
    field: 'club',
    headerName: 'Club',
    headerClassName: 'gridHeader',
    width: 200,
    renderCell: (params) => {
      return (

        <>
          <div className="rankData">{params.row.id}  </div>
          <div className=
            {params.row.id <= 3 ? `${crown[params.row.id - 1]}-img userListUser` :
              "userListUser"
            }
          >
            <div className="image-name">
              <img className="userListImg"
                style={{
                  border:
                    params.row.id <= 3 ? mediumBorder[params.row.id] : ""
                }} src={params.row.image} alt="" />
              {params.row.club}
            </div>
          </div>
        </>
      );
    }
  },
  {
    field: 'amount_raised',
    headerName: 'Amount Raised',
    headerClassName: 'gridHeader',
    //width: 400,
    flex: 3,

  },

  {
    field: 'amount_matched',
    headerName: 'Amount Matched',
    headerClassName: 'gridHeader',
    //width: 200,
    flex: 3,
    renderCell: (params) => {
      return (
        <div className="amountRaised">
          {params.row.amount_matched}
          <ProgressBar variant={params.row.amount_matched < 650 ? "warning" : "info"} now={params.row.amount_matched / 6.5} label={`${Math.trunc(params.row.amount_matched / 6.5)}%`} />
        </div>
      );
    }

  },
  {
    field: 'amount',
    headerName: 'Badges',
    headerClassName: 'gridHeader',
    //width: 400,
    flex: 4,
    renderCell: (params) => {
      return (
        <div className="amountRaised">
          <PopulateBadge val={params.row.amount_raised} />
        </div>
      );
    }

  },
];

function PopulateBadge(prop) {

  switch (true) {
    case (prop.val) >= 800:
      return (
        <>
          <img className="userListImg" src="/images/badge.png" alt="" />
          <img className="userListImg" src="/images/badge.png" alt="" />
          <img className="userListImg" src="/images/badge.png" alt="" />
          <img className="userListImg" src="/images/badge.png" alt="" />
          <img className="userListImg" src="/images/badge.png" alt="" />
        </>
      )
    case (prop.val) >= 500:
      return (
        <>
          <img className="userListImg" src="/images/badge.png" alt="" />
          <img className="userListImg" src="/images/badge.png" alt="" />
          <img className="userListImg" src="/images/badge.png" alt="" />
        </>
      )
    default:
      return (
        <>
          <img className="userListImg" src="/images/badge.png" alt="" />
          <img className="userListImg" src="/images/badge.png" alt="" />
        </>
      )
  }

}

export default function DataTable() {

  const getRowSpacing = React.useCallback((params: GridRowSpacingParams) => {
    return {
      top: params.isFirstVisible ? 0 : 5,
      bottom: params.isLastVisible ? 0 : 5,
    };
  }, []);

  return (
    <div className="dataGrid">
      <h3 className="leaderHeading">Leaderboard</h3>
      <DataGrid
        rows={clubData}
        columns={columns}
        pageSize={7}
        disableColumnSelector={true}
        rowsPerPageOptions={[7]}
        getRowSpacing={getRowSpacing}
        rowSpacingType="border"
        sx={{ '& .MuiDataGrid-row': { borderTopColor: "lightgray", borderTopStyle: 'solid' } }}


      />

    </div>
  );
}
