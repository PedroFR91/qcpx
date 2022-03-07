import React from 'react';
import {
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

function Social({ titleEmoji }) {
  const convert = [];
  var limit = 99;
  for (let index = 0; index < titleEmoji.length; index++) {
    convert.push(titleEmoji[index]);

    if (
      index === limit - 90 ||
      index === limit - 80 ||
      index === limit - 70 ||
      index === limit - 60 ||
      index === limit - 50 ||
      index === limit - 40 ||
      index === limit - 30 ||
      index === limit - 20 ||
      index === limit - 10
    ) {
      convert.push('\n');
    }
  }
  const title = convert.join('');
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
