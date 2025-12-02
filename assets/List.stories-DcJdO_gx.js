import{j as a}from"./jsx-runtime-o9qq2xiW.js";import{L as p}from"./List-CgDImlYD.js";import{r as i}from"./iframe-C1-GEPpH.js";import"./IconBase.es-DWuuYLqk.js";import"./ContextMenu-B9lnddGp.js";import"./Menu-DFe5yjEM.js";import"./Checkbox-DhuBjC8k.js";import"./SkeletonLoader-DCUECBVL.js";import"./InfiniteScroll-RoMnOfRJ.js";import"./preload-helper-PPVm8Dsz.js";const x=[{name:"Techniques",action:()=>{}},{name:"Training",action:()=>{}},{separator:!0},{name:"More info...",action:()=>{}}],g=e=>{const{items:n,...s}=e,[l,y]=i.useState(void 0),[u,c]=i.useState(n),[w,h]=i.useState([]),f=r=>{y(r);const t=[...n].sort((d,m)=>r.direction==="ASC"?d[r.field]>m[r.field]?1:-1:d[r.field]<m[r.field]?1:-1);c(t)},S=r=>{h(r.filter(t=>t.value).map(t=>t.props))};return a.jsx("div",{className:"flex justify-center",children:a.jsx(p,{...s,selectedItems:w,onSelectedItemsChanged:S,items:u,orderBy:l,onOrderByChanged:f,menu:x})})},T={title:"Components/List",component:p,parameters:{layout:"fullscreen"},tags:["autodocs"]},o={args:{header:[{label:"Name",width:"flex grow min-w-driveNameHeader",name:"name",orderable:!0,defaultDirection:"ASC"},{label:"Power",width:"flex grow min-w-driveNameHeader",name:"power",orderable:!0,defaultDirection:"ASC"},{label:"Type",width:"flex grow w-size",name:"type",orderable:!0,defaultDirection:"ASC"}],disableKeyboardShortcuts:!0,items:[{id:1,name:"Son Goku",power:15e5,type:"Saiyan"},{id:2,name:"Vegeta",power:1e6,type:"Saiyan"},{id:3,name:"Piccolo",power:8e5,type:"Namekian"},{id:4,name:"Son Gohan",power:1e6,type:"Saiyan"},{id:5,name:"Krillin",power:15e4,type:"Human"},{id:6,name:"Trunks",power:6e5,type:"Saiyan"},{id:7,name:"Frieza",power:12e5,type:"Alien"},{id:8,name:"Cell",power:95e4,type:"Android"},{id:9,name:"Majin Buu",power:95e4,type:"Majin"},{id:12,name:"Bulma",power:5,type:"Human"},{id:13,name:"Yamcha",power:5e4,type:"Human"},{id:14,name:"Tien Shinhan",power:18e4,type:"Human"},{id:15,name:"Android 18",power:9e5,type:"Android"},{id:16,name:"Master Roshi",power:1e4,type:"Human"}],itemComposition:[e=>a.jsx("div",{style:{textAlign:"left",fontWeight:"bold"},children:e.name}),e=>a.jsx("div",{style:{color:"darkblue"},children:e.power}),e=>a.jsx("div",{style:{},children:e.type})]},render:e=>a.jsx(g,{...e,className:"max-h-[500px] overflow-y-auto"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    itemComposition: [(props: any) => <div style={{
      textAlign: 'left',
      fontWeight: 'bold'
    }}>
          {props.name}
        </div>, (props: any) => <div style={{
      color: 'darkblue'
    }}>
          {props.power}
        </div>, (props: any) => <div style={{}}>{props.type}</div>]
  },
  render: (args: any) => <ListWrapper {...args} className="max-h-[500px] overflow-y-auto" />
}`,...o.parameters?.docs?.source}}};const M=["ListLayout"];export{o as ListLayout,M as __namedExportsOrder,T as default};
