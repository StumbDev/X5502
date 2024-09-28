import * as toml from 'toml';
import * as fs from 'fs';
import * as path from 'path';

export class EnvConfig {
  private config: any;

  constructor() {
    const configPath = path.join(__dirname, 'envConfig.toml');
    if (fs.existsSync(configPath)) {
      const configData = fs.readFileSync(configPath, 'utf-8');
      this.config = toml.parse(configData);
    } else {
      this.config = {};
    }
  }

  get(key: string): any {
    return this.config[key];
  }

  getAll(): any {
    return this.config;
  }
}

