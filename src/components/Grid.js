import React, { useState, useEffect } from 'react';
import w2ui from 'w2ui';

const GridExample = () => {
  const [grid, setGrid] = useState(null);

  useEffect(() => {
    setGrid(
      $().w2grid({ 
        name: 'grid',
        columns: [
          { field: 'fname', caption: 'First Name', size: '30%' },
          { field: 'lname', caption: 'Last Name', size: '30%' },
          { field: 'email', caption: 'Email', size: '40%' }
        ],
        records: [
          { recid: 1, fname: 'John', lname: 'Doe', email: 'jdoe@gmail.com' },
          { recid: 2, fname: 'Jane', lname: 'Doe', email: 'jane.doe@gmail.com' }
        ]
      })
    );
  }, []);

  return (
    <div>
      {grid && <div id="grid" style={{ width: '100%', height: '300px' }} />}
    </div>
  );
};

export default GridExample;