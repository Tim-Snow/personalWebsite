import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import style from './style';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <div style={style.container}>
      <h2>Contact me</h2>
      <div style={style.form}>
        <input style={style.margin} placeholder="Your name" type="text" name="name" />
        <input style={style.margin} placeholder="Your email" type="text" name="email" />
        <input style={style.margin} type="text" placeholder="Subject" name="subject" />
        <textarea style={style.margin} placeholder="Your message" rows={8} cols={80} name="message" />
      </div>

      {sent && (
        <div style={style.error}>
          <p>Sorry, I haven&apos;t implemented anything but the visuals for this, yet..!</p>
          <p>
            Use the info at the top of the page to get in contact{' '}
            <span role="img" aria-label="smile">
              😊
            </span>
          </p>
        </div>
      )}

      <Button variant="contained" color="primary" style={style.margin} onClick={handleSubmit}>
        Send
      </Button>
    </div>
  );
}
