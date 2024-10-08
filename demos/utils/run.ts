import { sleepAsync, spawn } from './utils';
import chalk from 'chalk';
import { Response } from 'node-fetch';
import path from 'path';
import { ensureCompositorReadyAsync } from './prepare_compositor';

export async function runCompositorExample(
  fn: () => Promise<void>,
  displayOutput: boolean
): Promise<void> {
  await ensureCompositorReadyAsync();
  const { command, args, cwd } = getCompositorRunCmd();
  try {
    spawn(command, args, {
      displayOutput: displayOutput,
      cwd: cwd ?? process.cwd(),
    });

    await sleepAsync(2000);

    await fn();
  } catch (err) {
    logError(err);
    throw err;
  }
}

async function logError(err: any): Promise<void> {
  if (err.response instanceof Response) {
    const body = await err.response.json();
    if (body.error_code && body.stack) {
      console.error();
      console.error(chalk.red(`Request failed with error (${body.erorr_code}):`));
      for (const errLine of body.stack) {
        console.error(chalk.red(` - ${errLine}`));
      }
    } else {
      console.error();
      console.error(chalk.red(`Request failed with status code ${err.response.status}`));
      console.error(chalk.red(JSON.stringify(body, null, 2)));
    }
  } else {
    console.error(err);
  }
}

const COMPOSITOR_DIR = path.join(__dirname, '../.live_compositor');

function getCompositorRunCmd(): {
  command: string;
  args: string[];
  cwd?: string;
} {
  if (process.env.LIVE_COMPOSITOR_SOURCE_DIR) {
    return {
      command: 'cargo',
      args: ['run', '--release', '--bin', 'live_compositor'],
      cwd: process.env.LIVE_COMPOSITOR_SOURCE_DIR,
    };
  } else if (process.platform === 'linux') {
    return {
      command: path.join(COMPOSITOR_DIR, 'live_compositor/live_compositor'),
      args: [],
    };
  } else if (process.platform === 'darwin') {
    return {
      command: path.join(COMPOSITOR_DIR, 'live_compositor/live_compositor'),
      args: [],
    };
  }

  throw new Error('Unsupported platform.');
}
