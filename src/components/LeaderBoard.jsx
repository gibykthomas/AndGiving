import "./leaderBoard.css";
import React,{useContext} from "react";
import { clubData } from '../data/data.js'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../useContext/DataContext';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import Logo from "../img/placeholderLogo.png";

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
            {params.row.Club}
            </div>
          </div>
        </>
      );
    }
  },
  { field: 'Total_Raised_to_date', 
    headerName: 'Amount Raised(£)', 
    headerClassName:'gridHeader',
    flex: 3,
    renderCell: (params) => {
      return (
        <>
            {parseInt(params.row.Total_Raised_to_date.replace(',',''))}
        </>    
            
      ); 
    }
    
 },
 
 {
    field: 'Match_requested',
    headerName: 'Amount Matched(£)',
    headerClassName:'gridHeader',
    flex: 3,
    renderCell: (params) => {
        return (
          <div className="amountRaised">
              {parseInt(params.row.Match_requested)}
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
              <PopulateBadge val={params.row.Total_Raised_to_date.replace(',','') }/>
          </div>
        ); }
    
 },
];

function PopulateBadge(prop) {
  const amount = prop.val
  switch(true) {
    case (amount) >=800 :
        return (
            <>
            <img className="userListImg" src="/images/badge.png" alt="" />
            <img className="userListImg" src="/images/badge.png" alt="" />
            <img className="userListImg" src="/images/badge.png" alt="" />
            <img className="userListImg" src="/images/badge.png" alt="" />
            <img className="userListImg" src="/images/badge.png" alt="" />
            </>
           )
    case (amount) >=500:
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
    const {data,setData}= useContext(DataContext)
    const sortData = data.sort((a,b) => b.Total_Raised_to_date.replace(',','') - a.Total_Raised_to_date.replace(',',''))
    const indexeData = sortData.map((item, id) => Object.assign(item, { id }))
    
    React.useEffect(() => {
      if(data.length ===0) {
        axios.get(`https://sheet.best/api/sheets/a958d2bd-fe72-483c-a828-941c3563df09`)
            .then(res => {
                const clubData = res.data;
                setData(clubData)
            })
            .catch((error) => {
                console.warn('Error fetching data: ', error)
                this.setState({
                    error: `There was an error fetching the club data.`
                })
            })
      } 
    }, []);
    const getRowSpacing = React.useCallback((params: GridRowSpacingParams) => {
        return {
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        };
      }, []);  
      
  return (
    <>
    <NavLink className="nav-link" to="/">

        <div className="logo-leader">
          <img src={Logo} alt="Charity img" width="40%"/>
        </div>
    </NavLink>
    <div className="dataGrid">
      
      <h3 className="leaderHeading">Leaderboard</h3>
      <DataGrid
        rows={indexeData}
        columns={columns}
        pageSize={9}
        disableColumnSelector = {true}
        rowsPerPageOptions={[9]}
        getRowSpacing={getRowSpacing}
        rowSpacingType="border"
        sx={{ '& .MuiDataGrid-row': { borderTopColor: "lightgray", borderTopStyle: 'solid' } }}


      />
      
    </div>
    </>
  );
}