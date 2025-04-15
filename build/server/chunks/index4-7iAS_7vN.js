import { s as stores } from './client-C5EWfBOT.js';
import { R as getContext } from './index-j4_QQaNE.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  },
  get url() {
    return context().page.url;
  }
};
const page = page$1;

export { page as p };
//# sourceMappingURL=index4-7iAS_7vN.js.map
