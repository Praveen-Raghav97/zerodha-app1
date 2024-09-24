
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { useState } from 'react';
import WatchListActions from './WatchListActions.js';

const WatchListItem = ({ stock  }) => {
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  
    const handleMouseEnter = (e) => {
      setShowWatchlistActions(true);
    };
  
    const handleMouseLeave = (e) => {
      setShowWatchlistActions(false);
    }
  
    return (
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="itemInfo">
            <span className="percent">{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="down" />
            )}
            <span className="price">{stock.price}</span>
          </div>
        </div>
        {showWatchlistActions && <WatchListActions uid={stock.name} />}
      </li>
    );
  };

  export default WatchListItem