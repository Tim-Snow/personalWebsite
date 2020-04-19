import React from 'react';

import Img from './Img';

export default function Error() {
  return (
    <div>
      <h2>Oh no! Something&apos;s gone wrong!</h2>
      <Img width={300} src="error" alt="illustration by Ouch.pics https://icons8.com" />
      <p>It works on my machine...</p>
    </div>
  );
}
