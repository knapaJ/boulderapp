import { x as push, U as ensure_array_like, Q as escape_html, z as pop } from './index-j4_QQaNE.js';
import { B as Button } from './Button-BPcScjDD.js';
import { T as Table, a as TableHead, c as TableHeadCell, b as TableBody, d as TableBodyRow, e as TableBodyCell } from './TableHeadCell-Byp4GGBk.js';
import './bundle-mjs-CaBOJI9t.js';
import './index3-BUhioI_l.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let pohlavi = { "F": "Ženy", "M": "Muži" };
  let levels = {
    "beginner": "Začátečníci",
    "advanced": "Pokročilí"
  };
  let showCSV = false;
  const each_array = ensure_array_like(data.boards);
  $$payload.out += `<div class="flex flex-col items-center w-full"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
    let board = each_array[$$index_2];
    $$payload.out += `<h2 class="text-2xl">${escape_html(levels[board.level])} - ${escape_html(pohlavi[board.sex])}</h2> <div class="flex-col max-w-3xl overflow-x-scroll">`;
    Table($$payload, {
      children: ($$payload2) => {
        TableHead($$payload2, {
          children: ($$payload3) => {
            TableHeadCell($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->Pořadí`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
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
                $$payload4.out += `<!---->Počet topnutých boulderů`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            TableHeadCell($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->Počet pokusů`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        TableBody($$payload2, {
          children: ($$payload3) => {
            const each_array_1 = ensure_array_like(board.board);
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              let user = each_array_1[$$index];
              TableBodyRow($$payload3, {
                children: ($$payload4) => {
                  TableBodyCell($$payload4, {
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(user.rank)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> `;
                  TableBodyCell($$payload4, {
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(user.username)}`;
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
                      $$payload5.out += `<!---->${escape_html(user.toppedBoulders)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> `;
                  TableBodyCell($$payload4, {
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(user.totalAttempts)}`;
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
    $$payload.out += `<!----> `;
    if (data.user?.isAdmin) {
      $$payload.out += "<!--[-->";
      Button($$payload, {
        onclick: () => {
          showCSV = !showCSV;
        },
        children: ($$payload2) => {
          $$payload2.out += `<!---->CSV`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> `;
    if (showCSV) {
      $$payload.out += "<!--[-->";
      const each_array_2 = ensure_array_like(board.board);
      $$payload.out += `<p class="text-left">Pořadí, Přezdívka, Jméno, Příjmení, Fakulta, Počet topnutých boulderů, Počet pokusů</p> <!--[-->`;
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let user = each_array_2[$$index_1];
        $$payload.out += `<p class="text-left">${escape_html(user.rank)}, ${escape_html(user.username)}, ${escape_html(user.firstName)}, ${escape_html(user.lastName)}, ${escape_html(user.faculty)}, ${escape_html(user.toppedBoulders)}, ${escape_html(user.totalAttempts)}</p>`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BEH6C-_d.js.map
