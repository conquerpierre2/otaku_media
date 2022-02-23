import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import './index.css'
import CometChat from '@cometchat-pro/chat'
import {cometChatConfig} from './app.config'

const appId = cometChatConfig.APP_ID;
const region = cometChatConfig.APP_REGION;
const appSetting = new CometChat.AppSettingsBuilder()
.subscribePresenceForAllUsers()
.setRegion(region)
.build();

CometChat.init(appId, appSetting)
.then(() => {
    console.log("Initialization completed successfully ");

    createApp(App).mount('#app');

}).catch(
    error => console.log("Initialization failed with" + error)
);









