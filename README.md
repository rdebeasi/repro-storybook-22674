# Angular CLI (latest)

This is project reproduces this issue: https://github.com/storybookjs/storybook/issues/22674

## Testing in Storybook

These steps demonstrate `APP_INITIALIZER` not running in Storybook.

1. Install and start Storybook: `yarn && yarn start`
2. Open Storybook in a browser.
3. Open console in web developer tools.
4. Note that `Hello from useFactory` is not logged.

## Testing outside Storybook

These steps demonstrate `APP_INITIALIZER` running as expected outside Storybook.

1. Install Angular CLI (version 16 or later)
2. Create a new app: `ng new --standalone`
3. Update `app.config.ts` as shown below.
4. Open the application in a browser.
5. Open console in web developoer tools.
6. Note that `Hello from useFactory` is logged.

```ts
// app.config.ts
import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {
        console.log('Hello from useFactory');
      },
      multi: true,
    },
  ],
};
```
