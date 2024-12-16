import{j as a}from"./jsx-runtime-DEdD30eg.js";import{L as y}from"./List-Do_7JdfG.js";import{r as i}from"./index-RYns6xqu.js";import"./IconBase-C0B5zwrg.js";import"./ContextMenu-BA8jxjCL.js";import"./Menu-GsUnQHJz.js";import"./Checkbox-nMqsM2bW.js";import"./SkeletonLoader-CMPmhq88.js";import"./InfiniteScroll-Bckbvu9a.js";const A=[{name:"Techniques",action:()=>{}},{name:"Training",action:()=>{}},{separator:!0},{name:"More info...",action:()=>{}}],C=e=>{const{items:n,...u}=e,[c,w]=i.useState(void 0),[h,f]=i.useState(n),[S,x]=i.useState([]),g=r=>{w(r);const t=[...n].sort((d,m)=>r.direction==="ASC"?d[r.field]>m[r.field]?1:-1:d[r.field]<m[r.field]?1:-1);f(t)},b=r=>{x(r.filter(t=>t.value).map(t=>t.props))};return a.jsx("div",{className:"flex justify-center",children:a.jsx(y,{...u,selectedItems:S,onSelectedItemsChanged:b,items:h,orderBy:c,onOrderByChanged:g,menu:A})})},D={title:"Components/List",component:y,parameters:{layout:"fullscreen"},tags:["autodocs"]},o={args:{header:[{label:"Name",width:"flex grow min-w-driveNameHeader",name:"name",orderable:!0,defaultDirection:"ASC"},{label:"Power",width:"flex grow min-w-driveNameHeader",name:"power",orderable:!0,defaultDirection:"ASC"},{label:"Type",width:"flex grow w-size",name:"type",orderable:!0,defaultDirection:"ASC"}],disableKeyboardShortcuts:!0,items:[{id:1,name:"Son Goku",power:15e5,type:"Saiyan"},{id:2,name:"Vegeta",power:1e6,type:"Saiyan"},{id:3,name:"Piccolo",power:8e5,type:"Namekian"},{id:4,name:"Son Gohan",power:1e6,type:"Saiyan"},{id:5,name:"Krillin",power:15e4,type:"Human"},{id:6,name:"Trunks",power:6e5,type:"Saiyan"},{id:7,name:"Frieza",power:12e5,type:"Alien"},{id:8,name:"Cell",power:95e4,type:"Android"},{id:9,name:"Majin Buu",power:95e4,type:"Majin"},{id:12,name:"Bulma",power:5,type:"Human"},{id:13,name:"Yamcha",power:5e4,type:"Human"},{id:14,name:"Tien Shinhan",power:18e4,type:"Human"},{id:15,name:"Android 18",power:9e5,type:"Android"},{id:16,name:"Master Roshi",power:1e4,type:"Human"}],itemComposition:[e=>a.jsx("div",{style:{textAlign:"left",fontWeight:"bold"},children:e.name}),e=>a.jsx("div",{style:{color:"darkblue"},children:e.power}),e=>a.jsx("div",{style:{},children:e.type})]},render:e=>a.jsx(C,{...e,className:"max-h-[500px] overflow-y-auto"})};var p,s,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    header: [{
      label: 'Name',
      width: 'flex grow min-w-driveNameHeader',
      name: 'name',
      orderable: true,
      defaultDirection: 'ASC'
    }, {
      label: 'Power',
      width: 'flex grow min-w-driveNameHeader',
      name: 'power',
      orderable: true,
      defaultDirection: 'ASC'
    }, {
      label: 'Type',
      width: 'flex grow w-size',
      name: 'type',
      orderable: true,
      defaultDirection: 'ASC'
    }],
    disableKeyboardShortcuts: true,
    items: [{
      id: 1,
      name: 'Son Goku',
      power: 1500000,
      type: 'Saiyan'
    }, {
      id: 2,
      name: 'Vegeta',
      power: 1000000,
      type: 'Saiyan'
    }, {
      id: 3,
      name: 'Piccolo',
      power: 800000,
      type: 'Namekian'
    }, {
      id: 4,
      name: 'Son Gohan',
      power: 1000000,
      type: 'Saiyan'
    }, {
      id: 5,
      name: 'Krillin',
      power: 150000,
      type: 'Human'
    }, {
      id: 6,
      name: 'Trunks',
      power: 600000,
      type: 'Saiyan'
    }, {
      id: 7,
      name: 'Frieza',
      power: 1200000,
      type: 'Alien'
    }, {
      id: 8,
      name: 'Cell',
      power: 950000,
      type: 'Android'
    }, {
      id: 9,
      name: 'Majin Buu',
      power: 950000,
      type: 'Majin'
    }, {
      id: 12,
      name: 'Bulma',
      power: 5,
      type: 'Human'
    }, {
      id: 13,
      name: 'Yamcha',
      power: 50000,
      type: 'Human'
    }, {
      id: 14,
      name: 'Tien Shinhan',
      power: 180000,
      type: 'Human'
    }, {
      id: 15,
      name: 'Android 18',
      power: 900000,
      type: 'Android'
    }, {
      id: 16,
      name: 'Master Roshi',
      power: 10000,
      type: 'Human'
    }],
    itemComposition: [props => <div style={{
      textAlign: 'left',
      fontWeight: 'bold'
    }}>
          {props.name}
        </div>, props => <div style={{
      color: 'darkblue'
    }}>
          {props.power}
        </div>, props => <div style={{}}>{props.type}</div>]
  },
  render: args => <ListWrapper {...args} className="max-h-[500px] overflow-y-auto" />
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const I=["ListLayout"];export{o as ListLayout,I as __namedExportsOrder,D as default};
