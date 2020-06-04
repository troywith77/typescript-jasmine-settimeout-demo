export default async function hello(cb: Function) {
  Promise.resolve()
    .then(() => {
      cb();
    });
}
