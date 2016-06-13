import React from 'react';
import {render} from 'react-dom';

import MemoryLayout from './MemoryLayout/memoryLayout.jsx';


class App extends React.Component {
  render () {

    return (
      <div>

        <div className="row" id="information">
            <div className="col-sm-12">
                <h4>Information</h4>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-12">
              <MemoryLayout />
            </div>
        </div>

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));