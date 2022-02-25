import React from 'react';
import {
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

function Social() {
  const title =
    '🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨\r\n🟨🟨⬛⬛🟨🟨⬛⬛🟨🟨\r\n🟨🟨⬛⬛🟨🟨⬛⬛🟨🟨\r\n🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨\r\n🟨🟨⬛🟨🟨🟨🟨⬛🟨🟨\r\n🟨🟨🟨⬛🟨🟨⬛🟨🟨🟨\r\n🟨🟨🟨🟨⬛⬛🟨🟨🟨🟨\r\n🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨\r\n🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨\r\n🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨';

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
        <WhatsappShareButton url={'http://www.muchopixels.com'} quote={title}>
          <WhatsappIcon size={40} borderRadius={36} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default Social;
