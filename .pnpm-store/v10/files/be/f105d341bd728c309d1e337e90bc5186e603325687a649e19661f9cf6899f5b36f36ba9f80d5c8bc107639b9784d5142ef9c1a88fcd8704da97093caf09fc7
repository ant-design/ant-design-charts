/**
 * 等待time ms时间， 默认2000ms
 * @param time ms
 */
export async function sleep(time: number = 2000): Promise<void> {
  console.log('Start of sleep');
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((resolve) => setTimeout(resolve, time));
  console.log('End of sleep');
}
