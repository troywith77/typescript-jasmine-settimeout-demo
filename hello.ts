export default async function hello(): Promise<string> {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Hello,world!');
    }, 100000);
  });
}
