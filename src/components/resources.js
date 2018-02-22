import React from 'react';

import Authentication from './require_authentication';

export default () => {
  return (
    <div>
      <Authentication render={() => (
        <div>
          Super Special Recipe
          <ul>
            <li>1 Cup Sugar</li>
            <li>1 Cup Pepper</li>
            <li>1 Cup Salt</li>
          </ul>
        </div>
      )}/>
    </div>
  )
}
