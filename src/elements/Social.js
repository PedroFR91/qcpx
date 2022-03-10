import React from 'react';
import {
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
function toUTF16(codePoint) {
  var TEN_BITS = parseInt('1111111111', 2);
  function u(codeUnit) {
    return '\\u' + codeUnit.toString(16).toUpperCase();
  }

  if (codePoint <= 0xffff) {
    return u(codePoint);
  }
  codePoint -= 0x10000;

  // Shift right to get to most significant 10 bits
  var leadSurrogate = 0xd800 + (codePoint >> 10);

  // Mask to get least significant 10 bits
  var tailSurrogate = 0xdc00 + (codePoint & TEN_BITS);

  return u(leadSurrogate) + u(tailSurrogate);
}
var brown = '🟫'.codePointAt(0);
console.log(brown);
var brownhex = toUTF16(brown);
console.log(brownhex);
var emoji = "'" + brownhex + "'";
console.log(emoji);
function Social({ titleEmoji }) {
  const final = [];
  for (let index = 0; index < titleEmoji.length; index++) {
    final.push(titleEmoji[index]);
  }

  const title = final.join('');
  console.log(title);

  return (
    <div className='socialsection hide' id='socialsection'>
      <div className='social-icon'>
        <TelegramShareButton
          url={'http://www.muchopixels.com'}
          title={title}
          hashtags={['muchopixels']}
        >
          <TelegramIcon size={40} borderRadius={36} />
        </TelegramShareButton>
      </div>
      <div className='social-icon'>
        <TwitterShareButton
          url={'http://www.muchopixels.com'}
          title={title}
          hashtags={['muchopixels']}
        >
          <TwitterIcon size={40} borderRadius={36} />
        </TwitterShareButton>
      </div>
      <div className='social-icon'>
        <WhatsappShareButton url={'http://www.muchopixels.com'} title={title}>
          <WhatsappIcon size={40} borderRadius={36} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default Social;
