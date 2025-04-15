import { x as push, z as pop } from './index-j4_QQaNE.js';
import { S as Section } from './Section-C68pekQe.js';
import { C as Cta } from './Cta-BMrwoifb.js';
import './bundle-mjs-CaBOJI9t.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  Section($$payload, {
    name: "ctawithimg",
    children: ($$payload2) => {
      Cta($$payload2, {
        ctatype: "image",
        children: ($$payload3) => {
          $$payload3.out += `<p class="pl-4 font-light text-gray-500 md:text-lg">Kdo se chce tahat s kusem papíru po stěně, ještě to někde ztratíš. Mobil ti jenom někdo rozsedne, nebo na něj spadneš.</p> <p class="mb-6 font-light text-gray-500 md:text-lg text-right">- Jan Knapovský</p> `;
          if (!data.user) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<a href="/register" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">Jdeme na to!</a> <a href="/login" class="inline-flex items-center text-primary-700 bg-white hover:bg-primary-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 border-2 border-primary-300">Přihlas se</a>`;
          } else {
            $$payload3.out += "<!--[!-->";
            $$payload3.out += `<a href="/boulders" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">Jdeme lézt!</a> <a href="/rules" class="inline-flex items-center text-primary-700 bg-white hover:bg-primary-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 border-2 border-primary-300">Přehled soutěže</a>`;
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: {
          default: true,
          img: ($$payload3) => {
            {
              $$payload3.out += `<img src="/images/arealy3_640.jpg" alt="dashboard">`;
            }
          },
          h2: ($$payload3) => {
            {
              $$payload3.out += `Soutěžní lezení na pokusy?<br>Trochu jsem to zkusil zpohodlnit.`;
            }
          }
        }
      });
    },
    $$slots: { default: true }
  });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C66JQgk7.js.map
