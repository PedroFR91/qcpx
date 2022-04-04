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
  var prevtitle = [];
  var move = 0;
  for (let index = 0; index < titleEmoji.length; index++) {
    prevtitle.push(titleEmoji[index]);
    if (titleEmoji[index] === '\uD83D') {
      move = move + 1;
    }
    if (
      index === 9 + move ||
      index === 19 + move ||
      index === 29 + move ||
      index === 39 + move ||
      index === 49 + move ||
      index === 59 + move ||
      index === 69 + move ||
      index === 79 + move ||
      index === 89 + move ||
      index === 99 + move
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
          url={'http://www.muchopixels.com'}
          title={title}
          hashtags={['muchopixels']}
        >
          <TelegramIcon size={50} borderRadius={36} />
        </TelegramShareButton>
      </div>
      <div className='social-icon'>
        <TwitterShareButton
          url={'http://www.muchopixels.com'}
          title={title}
          hashtags={['muchopixels']}
        >
          <TwitterIcon size={50} borderRadius={36} />
        </TwitterShareButton>
      </div>
      <div className='social-icon'>
        <WhatsappShareButton url={'http://www.muchopixels.com'} title={title}>
          <WhatsappIcon size={50} borderRadius={36} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
export default Social;
export { copiedtext };
