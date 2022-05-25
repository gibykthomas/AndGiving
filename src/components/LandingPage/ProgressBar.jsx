import React,{useContext} from "react";
import './progressBar.css';
import { clubData } from "../../data/data";
import { DataContext } from '../../useContext/DataContext';

const ProgressBar = ({ width }) => {
  const {data, setData}= useContext(DataContext)
  const [value, setValue] = React.useState(0);
  const ammount = data.filter(club => club['Total Raised to-date']).map(club => club['Total Raised to-date']).reduce((prev, curr) => prev + curr, 0);
  const percent = ((10000 / ammount) * 100)
  React.useEffect(() => {
    setValue(percent);
  });

  return (
    <div className="whole-termo">
      <div className="termo-wrap">

        <div className="progress-div whole-progress-bar" style={{ width: width }}>
          <div style={{ width: `${value}px` }} className="only-bar"><span className="raised-Label">Raised so far</span> <span className="ammount-raised">£{ammount}</span></div>

        </div>

      </div>
    </div>
  );
};

export default ProgressBar;