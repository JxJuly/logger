import picocolors from 'picocolors';

import { symbols } from './symbols';

import type { LoggerType } from './types';

class Logger {
  private getLogText(type: LoggerType, msg: string) {
    let prefix = symbols[type];

    switch (type) {
      case 'success':
        prefix = picocolors.green(prefix);
        break;
      case 'warning':
        prefix = picocolors.yellow(prefix);
        break;
      case 'error':
        prefix = picocolors.red(prefix);
        break;
      case 'info':
        prefix = picocolors.blue(prefix);
        break;
      case 'pointer':
        prefix = picocolors.cyan(prefix);
        break;
    }
    return `${prefix} ${msg}`;
  }

  success(msg: string) {
    return console.log(this.getLogText('success', msg));
  }
  warning(msg: string) {
    return console.log(this.getLogText('warning', msg));
  }
  error(msg: string) {
    return console.log(this.getLogText('error', msg));
  }
  info(msg: string) {
    return console.log(this.getLogText('info', msg));
  }

  start(msg: string) {
    const startLogText = this.getLogText('pointer', msg);
    const rerender = (msg: string) => {
      process.stdout.write('\r\x1b[2K');
      process.stdout.write(msg);
    };
    const update = (msg: string) => {
      rerender(this.getLogText('pointer', msg));
    };
    const success = (msg: string) => {
      rerender(this.getLogText('success', msg) + '\n');
    };
    const error = (msg: string) => {
      rerender(this.getLogText('error', msg) + '\n');
    };

    process.stdout.write(startLogText);

    return {
      update,
      success,
      error,
    };
  }
}

export const logger = new Logger();
export { symbols } from './symbols';
