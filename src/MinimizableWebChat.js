// import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import { createStore, /* createStyleSet */ } from 'botframework-webchat';
import Typography from '@material-ui/core/Typography';

import WebChat from './WebChat';

// import MessageCloud from './message-cloud.png';

import './fabric-icons-inline.css';
import './MinimizableWebChat.css';

const MinimizableWebChat = () => {

  const store = useMemo(
    () =>
      createStore({}, ({ dispatch }) => next => action => {
        if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
          dispatch({
            type: 'WEB_CHAT/SEND_EVENT',
            payload: {
              name: 'webchat/join',
              value: {
                language: 'window.navigator.language'
              }
            }
          });
        }
        /* else if (action.type === 'DIRECT_LINE/INCOMING_ACTIVITY') {
          if (action.payload.activity.from.role === 'bot') {
            // setNewMessage(true);
          }
        } */

        return next(action);
      }),
    []
  );

  const [token, setToken] = useState();

  // To learn about reconnecting to a conversation, see the following documentation:
  // https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-direct-line-3-0-reconnect-to-conversation?view=azure-bot-service-4.0

  const handleFetchToken = useCallback(async () => {
    if (!token) {
      // const res = await fetch('https://e-councilhr.azurewebsites.net/directline/token', { method: 'POST' }, { mode: 'no-cors'});
      const res = await fetch(
        'https://webchat.botframework.com/api/tokens',
        {
          method: 'GET',
          headers: {
            'Authorization': 'BotConnector KxH5mTB3KH0.GOS2JFASIiLQlZttpBQUsxBmHjn-SbtS73Q7gKlh8ZA',
          }
        });
      let token = await res.text();

      setTimeout(() => {
        setToken(token.substring(1, token.length - 1));
      }, 1000);
    }
  }, [setToken, token]);

  return (
    <div className={"minimizable-web-chat"}>
      <div className={'chat-box'}>
        <header>
          {token &&
            <Typography className={'header-title'} >
              {'Chat with us'}
            </Typography>
          }
          {/* <div>
            <img
              src={MessageCloud}
              alt={''}
              className={'header-icon'}
            />
          </div>
          <Typography className={'header-title'} >
            {'Hazza'}
          </Typography> */}
          {/* <Typography className={classes.title2} >
            {'Your MoIAT Digital Assistant'}
          </Typography> */}
        </header>
        <WebChat
          className={'react-web-chat'}
          onFetchToken={handleFetchToken}
          store={store}
          token={token}
        />
      </div>
    </div>
  );
};

export default MinimizableWebChat;
