import "./leaderBoard.css";
import React,{useContext} from "react";
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../useContext/DataContext';
import axios from "axios";
import Logo from "../components/Logo/Logo.jsx"

const mediumBorder = ["4px solid gold", "4px solid silver", "4px solid brown"];
const crown = ["gold", "silver", "brown"]
const badges = ["/images/bronze.png","/images/silver.png","/images/gold.png","/images/platinum.png","/images/diamond.png","/images/king.png"]


const columns: GridColDef[] = [

  {
    field: 'Club',
    headerName: 'Club',
    headerClassName: 'gridHeader',
    width: 300,
    renderCell: (params) => {
      return (

        <>
          <div className="rankData">{params.row.id + 1}  </div>
          <div className=
            {params.row.id <= 3 ? `${crown[params.row.id]}-img userListUser` :
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
              <ProgressBar variant={"progress"} now={params.row.Match_requested/6.5} label={`${Math.trunc(params.row.Match_requested/6.5)}%`}/>
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
    case (amount) >=3500 :
        return (
            <>
            {badges.slice(0,6).map((badge) => 
            <img className="userListImg" src={badge} alt="" />
            )}
            </>
           )
    case (amount) >=2500:
        return (
            <>
            {badges.slice(0,5).map((badge) => 
            <img className="userListImg" src={badge} alt="" />
            )}
            </>
        )
    case (amount) >=1400:
          return (
              <>
              {badges.slice(0,4).map((badge) => 
              <img className="userListImg" src={badge} alt="" />
              )}
              </>
          )
    case (amount) >=850:
            return (
                <>
                {badges.slice(0,3).map((badge) => 
                <img className="userListImg" src={badge} alt="" />
                )}
                </>
            )
      case (amount) >=500:
              return (
                  <>
                  {badges.slice(0,2).map((badge) => 
                  <img className="userListImg" src={badge} alt="" />
                  )}
                  </>
              )               
    case (amount) >=250:
            return (
                <>
                {badges.slice(0,1).map((badge) => 
                <img className="userListImg" src={badge} alt="" />
                )}
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
        axios.get(`https://sheet.best/api/sheets/fc58725a-51b3-4d04-9d06-85941fa388ed`)
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
    <div className="container  learderboard-page">
   <Logo />
    <div className="dataGrid container">
      
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
    </div>
  );
}