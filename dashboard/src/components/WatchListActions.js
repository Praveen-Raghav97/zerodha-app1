import { Tooltip , Grow } from '@mui/material'
import { BarChartOutlined, MoreHoriz } from '@mui/icons-material'


const WatchListActions = ({ uid }) => {


    return (
      <span className="actions">
        <span>
          <Tooltip
            title="Buy (B)"
            placement="top"
            arrow
            TransitionComponent={Grow}
           
          >
            <button className="buy">Buy</button>
          </Tooltip>
          <Tooltip
            title="Sell (S)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="sell">Sell</button>
          </Tooltip>
          <Tooltip
            title="Analytics (A)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="action">
              <BarChartOutlined className="icon" />
            </button>
          </Tooltip>
          <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>
        </span>
      </span>
    );
  };
  export default WatchListActions