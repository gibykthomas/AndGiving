import React,{useContext} from "react";
import './progressBar.css';
import { clubData } from "../../data/data";
import { DataContext } from '../../useContext/DataContext';

const ProgressBar = ({ width }) => {
  const {data, setData}= useContext(DataContext)
  const [value, setValue] = React.useState(0);
  const ammount = data.map(club =>  club['Total_Raised_to_date'].replace(/[^0-9£.]/g, '')).reduce((prev, curr) => prev+ Number(curr), 0)
  const percent = ((ammount/10000) *100)
  const percentForBar = ((percent /100 )* 18) 
  React.useEffect(() => {
    setValue(percentForBar);
  });

  return (
    <div className="whole-termo">
      <div className="termo-wrap">

        <div className="progress-div whole-progress-bar" style={{ width: '18em' }}>
          <div style={{ width: `${value}em` }} className="only-bar"><span className="raised-Label">Raised so far</span> <span className="ammount-raised">£{ammount}</span></div>

        </div>

      </div>
    </div>
  );
};

export default ProgressBar;