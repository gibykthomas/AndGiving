import "./leaderBoard.css";
import * as React from 'react'
import {clubData} from '../data/data.js'
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'club', 
    headerName: 'Club', 
    //width: 130,
    flex: 1,
    renderCell: (params) => {
        return (
          <div className="userListUser">
              <img className="userListImg" src={params.row.image} alt="" />
            {params.row.club}
          </div>
        ); }},
  { field: 'amount_raised', 
    headerName: 'Amount Raised', 
    //width: 400,
    flex: 1,
    renderCell: (params) => {
        return (
          <div className="amountRaised">
              {params.row.amount_raised}
              <ProgressBar variant={params.row.amount_raised < 650 ? "warning":"info"} now={params.row.amount_raised/6.5} label={`${Math.trunc(params.row.amount_raised/6.5)}%`}/>
          </div>
        ); }
    
 },
 {
    field: 'amount_matched',
    headerName: 'Amount Matched',
    //width: 200,
    flex: 1,
    
  },
  {
    field: 'badges',
    headerName: 'Badges',
    //width: 200,
    flex: 2,
    
  }
];

function PopulateBadge(val) {
    console.log("hello giby", val)
    /*return (
        <div className="amountRaised">
            {"hello"}
        </div>
      ); */
      const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='flex-center'>
      {languages.map((language) => (
        <li key={language}>
          <button
            className='btn-clear nav-link'
            style={{ color: 'rgb(187, 46, 31)' } }
            >
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default function DataTable() {
  
  return (
    <div className="dataGrid">
      <DataGrid
        rows={clubData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      
    </div>
  );
}
