import { query } from "./gqless-generated";

(async () => {
  const helloInterval = setInterval(() => {
    if (query.hello) {
      console.log(query.hello);
      clearInterval(helloInterval);
    }
  }, 500);
})();
