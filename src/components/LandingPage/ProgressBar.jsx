import React from "react";
import './progressBar.css';
import { clubData } from "../../data/data";

const ProgressBar = ({width}) => {
    const [value, setValue] = React.useState(0);
    const ammount = clubData.map(club  => club.amount_raised).reduce((prev, curr) => prev + curr, 0);
    const percent = ((10000 / ammount) * 100)
    React.useEffect(() => {
      setValue(percent);
    });

    return (
      <div className="whole-termo">
        <div className="termo-wrap">

          <div className="progress-div" style={{ width: width }}>
            <div style={{ width: `${value}px` }} className="progress"><span className="raised-Label">Raised so far</span> <span className="ammount-raised">£{ammount}</span></div>

          </div>

        </div>
      </div>
    );
  };

  export default ProgressBar;