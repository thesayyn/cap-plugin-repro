declare global {
  interface PluginRegistry {
    ReproPlugin?: ReproPluginPlugin;
  }
}

export interface ReproPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
