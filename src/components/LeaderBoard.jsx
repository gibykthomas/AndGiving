import "./leaderBoard.css";
import React,{useContext} from "react";
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../useContext/DataContext';

const mediumBorder = ["4px solid gold", "4px solid silver", "4px solid brown"];



const columns: GridColDef[] = [
  
  { field: 'Club', 
    headerName: 'Club', 
    headerClassName:'gridHeader',
    flex: 3,
    renderCell: (params) => {
      const id = params.row.id + 1
        return (

         <>
         <div className= "rankData">{id}  </div> 
          <div className="userListUser">
              <img style={{
              border:
              params.row.id < 3 ? mediumBorder[params.row.id] : ""
            }} className="userListImg" src={params.row.image} alt="" />
            {params.row.Club}
          </div>
          </>
        ); }},
  { field: 'Total_Raised_to_date', 
    headerName: 'Amount Raised', 
    headerClassName:'gridHeader',
    //width: 400,
    flex: 3,
    
 },
 
 {
    field: 'Match_requested',
    headerName: 'Amount Matched',
    headerClassName:'gridHeader',
    //width: 200,
    flex: 3,
    renderCell: (params) => {
        return (
          <div className="amountRaised">
              {params.row.Match_requested}
              <ProgressBar variant={params.row.Match_requested < 650 ? "warning":"info"} now={params.row.Match_requested/6.5} label={`${Math.trunc(params.row.Match_requested/6.5)}%`}/>
          </div>
        ); }
    
  },
  { field: 'amount', 
    headerName: 'Badges', 
    headerClassName:'gridHeader',
    flex: 4,
    renderCell: (params) => {
        return (
          <div className="amountRaised">
              <PopulateBadge val={params.row.Total_Raised_to_date }/>
          </div>
        ); }
    
 },
];

function PopulateBadge(prop) {
    
  switch(true) {
    case (prop.val) >=800 :
        return (
            <>
            <img className="userListImg" src="/images/badge.png" alt="" />
            <img className="userListImg" src="/images/badge.png" alt="" />
            <img className="userListImg" src="/images/badge.png" alt="" />
            <img className="userListImg" src="/images/badge.png" alt="" />
            <img className="userListImg" src="/images/badge.png" alt="" />
            </>
           )
    case (prop.val) >=500:
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
    const {data}= useContext(DataContext)
    const sortData = data.sort((a,b) => b.Total_Raised_to_date - a.Total_Raised_to_date)
    const indexeData = sortData.map((item, id) => Object.assign(item, { id }))
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
        rows={indexeData}
        columns={columns}
        pageSize={7}
        disableColumnSelector = {true}
        rowsPerPageOptions={[7]}
        getRowSpacing={getRowSpacing}
        rowSpacingType="border"
        sx={{ '& .MuiDataGrid-row': { borderTopColor: "lightgray", borderTopStyle: 'solid' } }}


      />
      
    </div>
  );
}
