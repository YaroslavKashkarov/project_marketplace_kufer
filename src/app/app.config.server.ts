import {mergeApplicationConfig, ApplicationConfig} from '@angular/core';
import {provideServerRendering} from '@angular/platform-server';
import {provideLottieServerOptions} from 'ngx-lottie/server';

import {appConfig} from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // provideLottieServerOptions({
    //   preloadAnimations: {
    //     folder: 'dist/browser/assets',
    //     animations: ['data.json'],
    //   },
    // }),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
