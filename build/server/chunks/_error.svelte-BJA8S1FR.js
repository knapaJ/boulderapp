import { S as Section } from './Section-DZ_RlwQm.js';
import { P as Page404 } from './Page404-BUSTty_t.js';
import { B as Button } from './Button-DQEXdS4i.js';
import './index-_YnrmJpM.js';
import './bundle-mjs-B-saSl0i.js';

function _error($$payload) {
  Section($$payload, {
    name: "page404",
    children: ($$payload2) => {
      Page404($$payload2, {
        $$slots: {
          h1: ($$payload3) => {
            {
              $$payload3.out += `404`;
            }
          },
          paragraph: ($$payload3) => {
            {
              $$payload3.out += `<p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Tak tenhle boulder neznám :(</p> <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Jestli ses sem dostal/a nějakým normálním způsobem, tak je něco hodně špatně. Jestli ti někdo tenhle odkaz poslal, tak to bylo asi dávno.</p> `;
              Button($$payload3, {
                href: "/boulders",
                size: "lg",
                color: "red",
                children: ($$payload4) => {
                  $$payload4.out += `<!---->Zpátky k boulderům`;
                },
                $$slots: { default: true }
              });
              $$payload3.out += `<!---->`;
            }
          }
        }
      });
    },
    $$slots: { default: true }
  });
}

export { _error as default };
//# sourceMappingURL=_error.svelte-BJA8S1FR.js.map
