import type { Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { APP_INITIALIZER } from '@angular/core';
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  applicationConfig({
    providers: [
      {
        provide: APP_INITIALIZER,
        useFactory: () => () => {
          // This console.log never runs.
          console.log('Hello from useFactory');
        },
        multi: true,
      },
    ],
  }),
];

export default preview;
