import { WebPlugin } from '@capacitor/core';
import { ReproPluginPlugin } from './definitions';

export class ReproPluginWeb extends WebPlugin implements ReproPluginPlugin {
  constructor() {
    super({
      name: 'ReproPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return Promise.resolve({ value: options.value });
  }
}

const ReproPlugin = new ReproPluginWeb();

export { ReproPlugin };
