import { x as push, z as pop, U as ensure_array_like, Q as escape_html } from './index-j4_QQaNE.js';
import { B as Badge } from './Badge-OJhq9-SK.js';
import { B as Button } from './Button-BPcScjDD.js';
import { T as Table, a as TableHead, b as TableBody, c as TableHeadCell, d as TableBodyRow, e as TableBodyCell } from './TableHeadCell-Byp4GGBk.js';
import { T as Toast, B as BadgeCheckSolid } from './BadgeCheckSolid-B5jTAKIF.js';
import { i as invalidateAll, a as applyAction, b as app } from './client-C5EWfBOT.js';
import { U as UNDEFINED, N as NAN, P as POSITIVE_INFINITY, a as NEGATIVE_INFINITY, b as NEGATIVE_ZERO, d as decode64, H as HOLE } from './constants-BaiUsPxc.js';
import './bundle-mjs-CaBOJI9t.js';
import './CloseButton-HqruGkaA.js';
import './index3-BUhioI_l.js';
import './exports-Cv9LZeD1.js';

/**
 * Revive a value serialized with `devalue.stringify`
 * @param {string} serialized
 * @param {Record<string, (value: any) => any>} [revivers]
 */
function parse(serialized, revivers) {
	return unflatten(JSON.parse(serialized), revivers);
}

/**
 * Revive a value flattened with `devalue.stringify`
 * @param {number | any[]} parsed
 * @param {Record<string, (value: any) => any>} [revivers]
 */
function unflatten(parsed, revivers) {
	if (typeof parsed === 'number') return hydrate(parsed, true);

	if (!Array.isArray(parsed) || parsed.length === 0) {
		throw new Error('Invalid input');
	}

	const values = /** @type {any[]} */ (parsed);

	const hydrated = Array(values.length);

	/**
	 * @param {number} index
	 * @returns {any}
	 */
	function hydrate(index, standalone = false) {
		if (index === UNDEFINED) return undefined;
		if (index === NAN) return NaN;
		if (index === POSITIVE_INFINITY) return Infinity;
		if (index === NEGATIVE_INFINITY) return -Infinity;
		if (index === NEGATIVE_ZERO) return -0;

		if (standalone) throw new Error(`Invalid input`);

		if (index in hydrated) return hydrated[index];

		const value = values[index];

		if (!value || typeof value !== 'object') {
			hydrated[index] = value;
		} else if (Array.isArray(value)) {
			if (typeof value[0] === 'string') {
				const type = value[0];

				const reviver = revivers?.[type];
				if (reviver) {
					return (hydrated[index] = reviver(hydrate(value[1])));
				}

				switch (type) {
					case 'Date':
						hydrated[index] = new Date(value[1]);
						break;

					case 'Set':
						const set = new Set();
						hydrated[index] = set;
						for (let i = 1; i < value.length; i += 1) {
							set.add(hydrate(value[i]));
						}
						break;

					case 'Map':
						const map = new Map();
						hydrated[index] = map;
						for (let i = 1; i < value.length; i += 2) {
							map.set(hydrate(value[i]), hydrate(value[i + 1]));
						}
						break;

					case 'RegExp':
						hydrated[index] = new RegExp(value[1], value[2]);
						break;

					case 'Object':
						hydrated[index] = Object(value[1]);
						break;

					case 'BigInt':
						hydrated[index] = BigInt(value[1]);
						break;

					case 'null':
						const obj = Object.create(null);
						hydrated[index] = obj;
						for (let i = 1; i < value.length; i += 2) {
							obj[value[i]] = hydrate(value[i + 1]);
						}
						break;

          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const TypedArrayConstructor = globalThis[type];
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            const typedArray = new TypedArrayConstructor(arraybuffer);
            hydrated[index] = typedArray;
            break;
          }

          case "ArrayBuffer": {
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            hydrated[index] = arraybuffer;
            break;
          }

					default:
						throw new Error(`Unknown type ${type}`);
				}
			} else {
				const array = new Array(value.length);
				hydrated[index] = array;

				for (let i = 0; i < value.length; i += 1) {
					const n = value[i];
					if (n === HOLE) continue;

					array[i] = hydrate(n);
				}
			}
		} else {
			/** @type {Record<string, any>} */
			const object = {};
			hydrated[index] = object;

			for (const key in value) {
				const n = value[key];
				object[key] = hydrate(n);
			}
		}

		return hydrated[index];
	}

	return hydrate(0);
}

function deserialize(result) {
  const parsed = JSON.parse(result);
  if (parsed.data) {
    parsed.data = parse(parsed.data, app.decoders);
  }
  return parsed;
}
function _page($$payload, $$props) {
  push();
  let { data, form } = $$props;
  async function promoteUser(username) {
    const data2 = new FormData();
    data2.append("username", username);
    const response = await fetch("?/promote", { method: "POST", body: data2 });
    deserialize(await response.text());
    await invalidateAll();
    await applyAction();
  }
  async function demoteUser(username) {
    const data2 = new FormData();
    data2.append("username", username);
    const response = await fetch("?/demote", { method: "POST", body: data2 });
    deserialize(await response.text());
    await invalidateAll();
    await applyAction();
  }
  if (form?.success) {
    $$payload.out += "<!--[-->";
    Toast($$payload, {
      class: "fixed bottom-2 end-2 bg-white z-10 border-1 rounded-2xl border-green-300",
      color: "green",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Provedeno!`;
      },
      $$slots: {
        default: true,
        icon: ($$payload2) => {
          BadgeCheckSolid($$payload2, {
            slot: "icon",
            class: "w-6 h-6 text-green-600 bg-green-100"
          });
        }
      }
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="flex flex-col w-full max-w-full justify-center"><div class="flex flex-col items-center"><h1 class="text-3xl font-bold">Uživatelé</h1> <div class="overflow-scroll max-w-full">`;
  Table($$payload, {
    children: ($$payload2) => {
      TableHead($$payload2, {
        children: ($$payload3) => {
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Přezdívka`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Jméno`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Příjmení`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Fakulta`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Heslo`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Možnosti`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      TableBody($$payload2, {
        tableBodyClass: "divide-y",
        children: ($$payload3) => {
          const each_array = ensure_array_like(data.users);
          $$payload3.out += `<!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let user = each_array[$$index];
            TableBodyRow($$payload3, {
              children: ($$payload4) => {
                TableBodyCell($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(user.username)} `;
                    if (user.isAdmin) {
                      $$payload5.out += "<!--[-->";
                      Badge($$payload5, {
                        color: "green",
                        rounded: true,
                        children: ($$payload6) => {
                          $$payload6.out += `<!---->Admin`;
                        },
                        $$slots: { default: true }
                      });
                    } else {
                      $$payload5.out += "<!--[!-->";
                    }
                    $$payload5.out += `<!--]-->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                TableBodyCell($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(user.firstName)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                TableBodyCell($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(user.lastName)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                TableBodyCell($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(user.faculty)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                TableBodyCell($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(user.password)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                TableBodyCell($$payload4, {
                  children: ($$payload5) => {
                    if (user.isAdmin) {
                      $$payload5.out += "<!--[-->";
                      if (user.username !== data.user.username) {
                        $$payload5.out += "<!--[-->";
                        Button($$payload5, {
                          color: "red",
                          size: "xs",
                          onclick: () => demoteUser(user.username),
                          children: ($$payload6) => {
                            $$payload6.out += `<!---->Degradovat`;
                          },
                          $$slots: { default: true }
                        });
                      } else {
                        $$payload5.out += "<!--[!-->";
                        Button($$payload5, {
                          color: "dark",
                          size: "xs",
                          disabled: true,
                          children: ($$payload6) => {
                            $$payload6.out += `<!---->Degradovat`;
                          },
                          $$slots: { default: true }
                        });
                      }
                      $$payload5.out += `<!--]-->`;
                    } else {
                      $$payload5.out += "<!--[!-->";
                      Button($$payload5, {
                        color: "red",
                        size: "xs",
                        onclick: () => promoteUser(user.username),
                        children: ($$payload6) => {
                          $$payload6.out += `<!---->Povýšit`;
                        },
                        $$slots: { default: true }
                      });
                    }
                    $$payload5.out += `<!--]-->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BIzNX-Tl.js.map
