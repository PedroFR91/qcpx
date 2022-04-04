import React from 'react';
import {
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

var played = false;
if (localStorage) {
  var played = localStorage.getItem('played');
  if (played === null) {
    played = 1;
  }
  if (played === 1) {
    console.log('Ya has JUgado, hasta mañana');

    localStorage.setItem('played', played);
  }
}
var copiedtext;
function Social({ titleEmoji }) {
  var jump = 0;
  var prevtitle = [];
  for (let index = 0; index < titleEmoji.length; index++) {
    prevtitle.push(titleEmoji[index]);
    if (titleEmoji[index] === '\uD83D') {
      jump++;
    } else {
    }
    if (
      index === 9 + jump ||
      index === 19 + jump ||
      index === 29 + jump ||
      index === 39 + jump ||
      index === 49 + jump ||
      index === 59 + jump ||
      index === 69 + jump ||
      index === 79 + jump ||
      index === 89 + jump ||
      index === 99 + jump
    ) {
      prevtitle.push('\n');
    }
  }

  const title = prevtitle.join('');

  copiedtext = title;
  console.log(title);

  return (
    <div className='socialsection hide' id='socialsection'>
      <div className='social-icon'>
        <TelegramShareButton
          url={'http://quickpix.muchopixels.com/'}
          title={title}
          hashtags={['muchopixels']}
        >
          <TelegramIcon size={50} borderRadius={36} />
        </TelegramShareButton>
      </div>
      <div className='social-icon'>
        <TwitterShareButton
          url={'http://quickpix.muchopixels.com/'}
          title={title}
          hashtags={['muchopixels']}
        >
          <TwitterIcon size={50} borderRadius={36} />
        </TwitterShareButton>
      </div>
      <div className='social-icon'>
        <WhatsappShareButton
          url={'http://quickpix.muchopixels.com/'}
          title={title}
        >
          <WhatsappIcon size={50} borderRadius={36} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
export default Social;
export { copiedtext };
