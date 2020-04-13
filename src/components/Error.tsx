import React from 'react';

import ErrorImg from 'assets/error.png';

export default function Error() {
  return (
    <div>
      <h2>Oh no! Something&apos;s gone wrong!</h2>
      <img style={{ width: 300 }} src={ErrorImg} alt="illustration by Ouch.pics https://icons8.com" />
      <p>It works on my machine...</p>
    </div>
  );
}
