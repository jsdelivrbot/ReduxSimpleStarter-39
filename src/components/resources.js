import React from 'react';

import requireAuth from './require_authentication';

export default requireAuth(() => {
  return (
    <div>
      Super Special Recipe
      <ul>
        <li>1 Cup Sugar</li>
        <li>1 Cup Pepper</li>
        <li>1 Cup Salt</li>
      </ul>
    </div>
  )
})
