(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"0jh0":function(e,n){e.exports=function(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}},"2klF":function(e,n){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"A2+M":function(e,n,a){var t=a("X8hv");e.exports={MDXRenderer:t}},Ck4i:function(e,n,a){var t=a("Q83E"),o=a("2klF");function r(n,a,i){return o()?e.exports=r=Reflect.construct:e.exports=r=function(e,n,a){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(e,o));return a&&t(r,a.prototype),r},r.apply(null,arguments)}e.exports=r},KcSJ:function(e,n,a){"use strict";var t=a("q1tI"),o=a.n(t),r=a("A2+M"),i=a("7ljp"),c=a("MhRC"),s=(a("hZTp"),{pre:function(e){return o.a.createElement("div",e)},code:c.a}),l=function(e){var n=e.children,a=n;return"string"==typeof a&&(a=o.a.createElement(r.MDXRenderer,null,n)),o.a.createElement(i.MDXProvider,{components:s},a)};n.a=function(e){return o.a.createElement("div",null,o.a.createElement(l,null,e.children))}},Q83E:function(e,n){function a(n,t){return e.exports=a=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},a(n,t)}e.exports=a},R7tm:function(e,n,a){var t=a("qHws"),o=a("gC2u"),r=a("dQcQ"),i=a("m7BV");e.exports=function(e){return t(e)||o(e)||r(e)||i()}},VgBf:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return s})),a.d(n,"default",(function(){return u}));var t=a("8o2o"),o=(a("q1tI"),a("7ljp")),r=a("KcSJ"),i=(a("mwIZ"),a("NJaX")),c=a("BXwR"),s={},l={query:"949839999",_frontmatter:s},d=r.a;function u(e){var n,a=e.components,r=Object(t.a)(e,["components"]);return Object(o.mdx)(d,Object.assign({},l,r,{components:a,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Data Table"),Object(o.mdx)(c.a,{frontmatter:null==r||null===(n=r.pageContext)||void 0===n?void 0:n.frontmatter,mdxType:"SingleComponentStatus"}),Object(o.mdx)("p",null,"The DataTable component is a wrapper that uses the ",Object(o.mdx)("a",{href:"https://react-table.tanstack.com/docs"},"react-table")," library to\ncreate tables. It can be used as is, or its subcomponents can be used on their own, allowing the developer full control."),Object(o.mdx)("h2",null,"How children get information"),Object(o.mdx)("p",null,"The table context gets the current ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-table")," instance of the table from the ",Object(o.mdx)("inlineCode",{parentName:"p"},"DataTable")," component and makes it available to any child component within the ",Object(o.mdx)("inlineCode",{parentName:"p"},"DataTable")," provider.\nIn addition to the ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-table")," instance, ",Object(o.mdx)("inlineCode",{parentName:"p"},"itemCount"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"numBreakoutFilters"),", and ",Object(o.mdx)("inlineCode",{parentName:"p"},"bulkActions"),", and any props that are not listed in the\nprops table below are available to child components through the ",Object(o.mdx)("inlineCode",{parentName:"p"},"DataTableContext"),"."),Object(o.mdx)("p",null,"How to use context in a custom component:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"const instance = useContext(DataTableContext)\n")),Object(o.mdx)("h2",null,"Frontend filtering and sorting"),Object(o.mdx)("p",null,"For small tables (less than ~10,000 rows), filtering, sorting and pagination can be done\nquickly and easily on the frontend."),Object(o.mdx)("p",null,"In this example, a default TextFilter component is used for all columns. A default filter can be passed in,\nor a filter component can be defined on the column. See ",Object(o.mdx)("a",{href:"https://react-table.tanstack.com/docs/api/useFilters"},"react-table filters documentation"),"\nfor more information."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"  <DataTable\n    isFilterable\n    isSortable\n    defaultColumnValues={{ Filter: TextFilter }}\n    itemCount={7}\n    data={[\n      {\n        name: 'Lil Bub',\n        color: 'brown tabby',\n        famous_for: 'weird tongue',\n      },\n      {\n        name: 'Grumpy Cat',\n        color: 'siamese',\n        famous_for: 'serving moods',\n      },\n      {\n        name: 'Smoothie',\n        color: 'orange tabby',\n        famous_for: 'modeling',\n      },\n      {\n        name: 'Maru',\n        color: 'brown tabby',\n        famous_for: 'being a lovable oaf',\n      },\n      {\n        name: 'Keyboard Cat',\n        color: 'orange tabby',\n        famous_for: 'piano virtuoso',\n      },\n      {\n        name: 'Long Cat',\n        color: 'russian white',\n        famous_for:\n          'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',\n      },\n      {\n        name: 'Zeno',\n        color: 'brown tabby',\n        famous_for: 'getting halfway there'\n      },\n    ]}\n    columns={[\n      {\n        Header: 'Name',\n        accessor: 'name',\n\n      },\n      {\n        Header: 'Famous For',\n        accessor: 'famous_for',\n      },\n      {\n        Header: 'Coat Color',\n        accessor: 'color',\n        Filter: CheckboxFilter,\n        filter: 'includesValue',\n        filterChoices: [{\n          name: 'russian white',\n          number: 1,\n          value: 'russian white',\n        },\n        {\n          name: 'orange tabby',\n          number: 2,\n          value: 'orange tabby',\n        },\n        {\n          name: 'brown tabby',\n          number: 3,\n          value: 'brown tabby',\n        },\n        {\n          name: 'siamese',\n          number: 1,\n          value: 'siamese',\n        }]\n      },\n    ]}\n  >\n    <DataTable.TableControlBar />\n    <DataTable.Table />\n    <DataTable.EmptyTable content=\"No results found\" />\n    <DataTable.TableFooter />\n  </DataTable>\n")),Object(o.mdx)("h2",null,"Backend filtering and sorting"),Object(o.mdx)("p",null,"For larger tables, it may make sense to do filtering, pagination and sorting on the backend.\nThe user must pass a fetchData function, which will be called when the filtering, sorting, or pagination\ndata changes."),Object(o.mdx)("strong",null,"NOTE"),": You will not see backend filtering and sorting work in this example; instead, you can see in the console what the fetchData function is called with.",Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<DataTable\n  isFilterable\n  manualFilters\n  defaultColumnValues={{ Filter: TextFilter }}\n  isPaginated\n  isSortable\n  manualSortBy\n  initialState={{\n    pageSize: 3,\n    pageIndex: 0\n  }}\n  itemCount={20}\n  fetchData={(currentState) => console.log(`This function will be called with the value: ${JSON.stringify(currentState)}}`)}\n  data={[\n  {\n    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",\n    "title": "Castle in the Sky",\n    "director": "Hayao Miyazaki",\n    "producer": "Isao Takahata",\n    "release_date": "1986",\n    "rt_score": "95",\n  },\n  {\n    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",\n    "title": "Grave of the Fireflies",\n    "director": "Isao Takahata",\n    "producer": "Toru Hara",\n    "release_date": "1988",\n    "rt_score": "97",\n  },\n  {\n    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",\n    "title": "My Neighbor Totoro",\n    "director": "Hayao Miyazaki",\n    "producer": "Hayao Miyazaki",\n    "release_date": "1988",\n    "rt_score": "93",\n  },\n  {\n    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",\n    "title": "Kiki\'s Delivery Service",\n    "director": "Hayao Miyazaki",\n    "producer": "Hayao Miyazaki",\n    "release_date": "1989",\n    "rt_score": "96",\n  },\n  {\n    "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",\n    "title": "Only Yesterday",\n    "director": "Isao Takahata",\n    "producer": "Toshio Suzuki",\n    "release_date": "1991",\n    "rt_score": "100",\n  },\n  {\n    "id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",\n    "title": "Porco Rosso",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "1992",\n    "rt_score": "94",\n  },\n  {\n    "id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",\n    "title": "Pom Poko",\n    "director": "Isao Takahata",\n    "producer": "Toshio Suzuki",\n    "release_date": "1994",\n    "rt_score": "78",\n  },\n  {\n    "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",\n    "title": "Whisper of the Heart",\n    "director": "Yoshifumi Kondō",\n    "producer": "Toshio Suzuki",\n    "release_date": "1995",\n    "rt_score": "91",\n  },\n  {\n    "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",\n    "title": "Princess Mononoke",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "1997",\n    "rt_score": "92",\n  },\n  {\n    "id": "45204234-adfd-45cb-a505-a8e7a676b114",\n    "title": "My Neighbors the Yamadas",\n    "director": "Isao Takahata",\n    "producer": "Toshio Suzuki",\n    "release_date": "1999",\n    "rt_score": "75",\n  },\n  {\n    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c",\n    "title": "Spirited Away",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2001",\n    "rt_score": "97",\n  },\n  {\n    "id": "90b72513-afd4-4570-84de-a56c312fdf81",\n    "title": "The Cat Returns",\n    "director": "Hiroyuki Morita",\n    "producer": "Toshio Suzuki",\n    "release_date": "2002",\n    "rt_score": "89",\n  },\n  {\n    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",\n    "title": "Howl\'s Moving Castle",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2004",\n    "rt_score": "87",\n  },\n  {\n    "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",\n    "title": "Tales from Earthsea",\n    "director": "Gorō Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2006",\n    "rt_score": "41",\n  },\n  {\n    "id": "758bf02e-3122-46e0-884e-67cf83df1786",\n    "title": "Ponyo",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2008",\n    "rt_score": "92",\n  },\n  {\n    "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",\n    "title": "Arrietty",\n    "director": "Hiromasa Yonebayashi",\n    "producer": "Toshio Suzuki",\n    "release_date": "2010",\n    "rt_score": "95",\n  },\n  {\n    "id": "45db04e4-304a-4933-9823-33f389e8d74d",\n    "title": "From Up on Poppy Hill",\n    "director": "Gorō Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2011",\n    "rt_score": "83",\n  },\n  {\n    "id": "67405111-37a5-438f-81cc-4666af60c800",\n    "title": "The Wind Rises",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2013",\n    "rt_score": "89",\n  },\n  {\n    "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",\n    "title": "The Tale of the Princess Kaguya",\n    "director": "Isao Takahata",\n    "producer": "Yoshiaki Nishimura",\n    "release_date": "2013",\n    "rt_score": "100",\n  },\n  {\n    "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",\n    "title": "When Marnie Was There",\n    "director": "Hiromasa Yonebayashi",\n    "producer": "Yoshiaki Nishimura",\n    "release_date": "2014",\n    "rt_score": "92",\n  }\n]}\n  columns={[\n    {\n      Header: \'Title\',\n      accessor: \'title\',\n\n    },\n    {\n      Header: \'Director\',\n      accessor: \'director\',\n    },\n    {\n      Header: \'Release date\',\n      accessor: \'release_date\',\n    },\n  ]}\n  bulkActions={[\n    {\n      buttonText: \'Download CSV\',\n      handleClick: (selectedRows) => console.log(\'Enrolling \', selectedRows),\n    },\n  ]}\n/>\n')),Object(o.mdx)("h2",null,"Actions, Table actions and Bulk actions"),Object(o.mdx)("p",null,"Actions and bulk actions are actions that are performed on table rows, though bulk actions can be used for\nactions that apply to the whole table. It is up to the user to determine what the action does."),Object(o.mdx)("h3",null,"Table Actions"),Object(o.mdx)("p",null,"Table actions are actions that are enacted on the entire table. Their click handler is called with the react-table\ninstance.\nThe first two table actions will be displayed as buttons, while the remaining actions will be displayed in an overflow\ndropdown menu.\nTable actions are not visible if bulk actions are available and there  are selected rows."),Object(o.mdx)("h3",null,"Bulk Actions"),Object(o.mdx)("p",null,"Bulk actions are action that are enacted on specific table rows. The bulk action click handler is called with the selected rows.\nThe first two bulk actions will be displayed as buttons, while the remaining bulk actions will be displayed in a\noverflow dropdown menu.\nBulk actions are not visible unless rows have been selected."),Object(o.mdx)("h3",null,"Actions"),Object(o.mdx)("p",null,"An action can also be definied as an additional column on the table. The Cell property can be defined to display\nany component that a user requires. It will receive the row as props."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"  <DataTable\n    isSelectable\n    itemCount={7}\n    tableActions={[\n        {\n          buttonText: 'Table Action',\n          handleClick: (selectedRows) => alert(`Table actions are called with the table instance`),\n        },\n    ]}\n    bulkActions={[\n        {\n          buttonText: 'Enroll',\n          handleClick: (selectedRows) => alert(`Enrolling ${selectedRows.map((row) => row.values.name).join(', ')}`),\n        },\n        {\n          buttonText: 'Assign',\n          handleClick: (selectedRows) => alert(`Assigning ${selectedRows.map((row) => row.values.name).join(', ')}`),\n        },\n        {\n          buttonText: 'Extra action 1',\n          handleClick: (selectedRows) => alert(`Extra action 1 for ${selectedRows.map((row) => row.values.name).join(', ')}`),\n        },\n        {\n          buttonText: 'Extra action 2',\n          handleClick: (selectedRows) => alert(`Extra action2 for ${selectedRows.map((row) => row.values.name).join(', ')}`),\n        },\n      ]}\n    additionalColumns={[\n      {\n        id: 'action',\n        Header: 'Action',\n        // Proptypes disabled as this prop is passed in separately\n        Cell: ({ row }) => <Button variant=\"link\" onClick={() => alert(`Assigning ${row.values.name}`)}>Assign</Button>,\n      }\n    ]}\n    data={[\n      {\n        name: 'Lil Bub',\n        color: 'brown tabby',\n        famous_for: 'weird tongue',\n      },\n      {\n        name: 'Grumpy Cat',\n        color: 'siamese',\n        famous_for: 'serving moods',\n      },\n      {\n        name: 'Smoothie',\n        color: 'orange tabby',\n        famous_for: 'modeling',\n      },\n      {\n        name: 'Maru',\n        color: 'brown tabby',\n        famous_for: 'being a lovable oaf',\n      },\n      {\n        name: 'Keyboard Cat',\n        color: 'orange tabby',\n        famous_for: 'piano virtuoso',\n      },\n      {\n        name: 'Long Cat',\n        color: 'russian white',\n        famous_for:\n          'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',\n      },\n      {\n        name: 'Zeno',\n        color: 'brown tabby',\n        famous_for: 'getting halfway there'\n      },\n    ]}\n    columns={[\n      {\n        Header: 'Name',\n        accessor: 'name',\n\n      },\n      {\n        Header: 'Famous For',\n        accessor: 'famous_for',\n      },\n      {\n        Header: 'Coat Color',\n        accessor: 'color',\n      },\n    ]}\n  >\n    <DataTable.TableControlBar />\n    <DataTable.Table />\n    <DataTable.EmptyTable content=\"No results found\" />\n    <DataTable.TableFooter />\n  </DataTable>\n")),Object(o.mdx)("h2",null,"CardView and alternate table components"),Object(o.mdx)("p",null,"You may choose to use any table component by using the following code in your display component:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"const instance = useContext(DataTableContext)\n")),Object(o.mdx)("p",null,"The CardView takes a ",Object(o.mdx)("inlineCode",{parentName:"p"},"CardComponent")," that is personalized to the table in question and displays\na responsive grid of cards."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<DataTable\n  isFilterable\n  defaultColumnValues={{ Filter: TextFilter }}\n  isPaginated\n  isSortable\n  initialState={{\n    pageSize: 3,\n    pageIndex: 0\n  }}\n  itemCount={20}\n  fetchData={(currentState) => console.log(`This function will be called with the value: ${JSON.stringify(currentState)}}`)}\n  data={[\n  {\n    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",\n    "title": "Castle in the Sky",\n    "director": "Hayao Miyazaki",\n    "producer": "Isao Takahata",\n    "release_date": "1986",\n    "rt_score": "95",\n  },\n  {\n    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",\n    "title": "Grave of the Fireflies",\n    "director": "Isao Takahata",\n    "producer": "Toru Hara",\n    "release_date": "1988",\n    "rt_score": "97",\n  },\n  {\n    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",\n    "title": "My Neighbor Totoro",\n    "director": "Hayao Miyazaki",\n    "producer": "Hayao Miyazaki",\n    "release_date": "1988",\n    "rt_score": "93",\n  },\n  {\n    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",\n    "title": "Kiki\'s Delivery Service",\n    "director": "Hayao Miyazaki",\n    "producer": "Hayao Miyazaki",\n    "release_date": "1989",\n    "rt_score": "96",\n  },\n  {\n    "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",\n    "title": "Only Yesterday",\n    "director": "Isao Takahata",\n    "producer": "Toshio Suzuki",\n    "release_date": "1991",\n    "rt_score": "100",\n  },\n  {\n    "id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",\n    "title": "Porco Rosso",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "1992",\n    "rt_score": "94",\n  },\n  {\n    "id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",\n    "title": "Pom Poko",\n    "director": "Isao Takahata",\n    "producer": "Toshio Suzuki",\n    "release_date": "1994",\n    "rt_score": "78",\n  },\n  {\n    "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",\n    "title": "Whisper of the Heart",\n    "director": "Yoshifumi Kondō",\n    "producer": "Toshio Suzuki",\n    "release_date": "1995",\n    "rt_score": "91",\n  },\n  {\n    "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",\n    "title": "Princess Mononoke",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "1997",\n    "rt_score": "92",\n  },\n  {\n    "id": "45204234-adfd-45cb-a505-a8e7a676b114",\n    "title": "My Neighbors the Yamadas",\n    "director": "Isao Takahata",\n    "producer": "Toshio Suzuki",\n    "release_date": "1999",\n    "rt_score": "75",\n  },\n  {\n    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c",\n    "title": "Spirited Away",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2001",\n    "rt_score": "97",\n  },\n  {\n    "id": "90b72513-afd4-4570-84de-a56c312fdf81",\n    "title": "The Cat Returns",\n    "director": "Hiroyuki Morita",\n    "producer": "Toshio Suzuki",\n    "release_date": "2002",\n    "rt_score": "89",\n  },\n  {\n    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",\n    "title": "Howl\'s Moving Castle",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2004",\n    "rt_score": "87",\n  },\n  {\n    "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",\n    "title": "Tales from Earthsea",\n    "director": "Gorō Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2006",\n    "rt_score": "41",\n  },\n  {\n    "id": "758bf02e-3122-46e0-884e-67cf83df1786",\n    "title": "Ponyo",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2008",\n    "rt_score": "92",\n  },\n  {\n    "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",\n    "title": "Arrietty",\n    "director": "Hiromasa Yonebayashi",\n    "producer": "Toshio Suzuki",\n    "release_date": "2010",\n    "rt_score": "95",\n  },\n  {\n    "id": "45db04e4-304a-4933-9823-33f389e8d74d",\n    "title": "From Up on Poppy Hill",\n    "director": "Gorō Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2011",\n    "rt_score": "83",\n  },\n  {\n    "id": "67405111-37a5-438f-81cc-4666af60c800",\n    "title": "The Wind Rises",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2013",\n    "rt_score": "89",\n  },\n  {\n    "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",\n    "title": "The Tale of the Princess Kaguya",\n    "director": "Isao Takahata",\n    "producer": "Yoshiaki Nishimura",\n    "release_date": "2013",\n    "rt_score": "100",\n  },\n  {\n    "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",\n    "title": "When Marnie Was There",\n    "director": "Hiromasa Yonebayashi",\n    "producer": "Yoshiaki Nishimura",\n    "release_date": "2014",\n    "rt_score": "92",\n  }\n]}\n  columns={[\n    {\n      Header: \'Title\',\n      accessor: \'title\',\n\n    },\n    {\n      Header: \'Director\',\n      accessor: \'director\',\n    },\n    {\n      Header: \'Release date\',\n      accessor: \'release_date\',\n    },\n  ]}\n  bulkActions={[\n    {\n      buttonText: \'Download CSV\',\n      handleClick: (selectedRows) => console.log(\'Downloading CSV \', selectedRows),\n    },\n  ]}\n>\n  <TableControlBar />\n  <CardView CardComponent={MiyazakiCard} />\n  <TableFooter />\n</DataTable>\n')),Object(o.mdx)(i.a,Object.assign({},r.data.dataTable,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.bulkActions,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.tableActions,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.table,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.cell,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.headerCell,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.headerRow,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.row,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.filterStatus,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.selectionStatus,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.rowStatus,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.smartStatus,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.pagination,{mdxType:"PropsTable"})),Object(o.mdx)(i.a,Object.assign({},r.data.textFilter,{mdxType:"PropsTable"})))}u.isMDXComponent=!0},X8hv:function(e,n,a){var t=a("Ck4i"),o=a("R7tm"),r=a("0jh0"),i=a("uDP2");function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var l=a("q1tI"),d=a("7ljp"),u=d.useMDXComponents,b=d.mdx,m=a("BfwJ").useMDXScope;e.exports=function(e){var n=e.scope,a=e.components,r=e.children,c=i(e,["scope","components","children"]),d=u(a),p=m(n),f=l.useMemo((function(){if(!r)return null;var e=s({React:l,mdx:b},p),n=Object.keys(e),a=n.map((function(n){return e[n]}));return t(Function,["_fn"].concat(o(n),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,n]);return l.createElement(f,s({components:d},c))}},dQcQ:function(e,n,a){var t=a("hMe3");e.exports=function(e,n){if(e){if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?t(e,n):void 0}}},gC2u:function(e,n){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}},m7BV:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(e,n,a){var t=a("hMe3");e.exports=function(e){if(Array.isArray(e))return t(e)}}}]);
//# sourceMappingURL=component---src-pages-table-datatable-mdx-5b6f345ea261e127e95d.js.map