import{j as e}from"./jsx-runtime-DEdD30eg.js";import{B as s}from"./Button-LpIkml3t.js";const l=({icon:i,title:a,subtitle:o,action:t,contextMenuClick:r})=>{let n=null;return t&&(n=e.jsxs(s,{variant:"secondary",onClick:t.onClick,children:[e.jsx("span",{children:t.text}),e.jsx(t.icon,{size:20})]})),e.jsx("div",{className:"h-full w-full p-8",onContextMenu:r,children:e.jsxs("div",{className:"flex h-full flex-col items-center justify-center space-y-6 pb-20",children:[e.jsx("div",{className:"pointer-events-none mx-auto w-max",children:i}),e.jsxs("div",{className:"pointer-events-none space-y-1 text-center",children:[e.jsx("p",{className:"text-2xl font-medium text-gray-100",children:a}),e.jsx("p",{className:"text-lg text-gray-60",children:o})]}),n]})})};l.__docgenInfo={description:`Empty component

This component is used to display a message or placeholder content when there is no data or items available.
It allows for a customizable icon, title, subtitle, and an optional action button.

@property {JSX.Element} icon
- The icon to be displayed at the top of the component. This can be any valid React element.

@property {string} title
- The main title or heading to be displayed in the component.

@property {string} subtitle
- A secondary subtitle or description.

@property {object} [action]
- An optional object containing details for an action button that can be displayed.

@property {string} action.text
- The text to display on the action button.

@property {Function} [contextMenuClick]
- An optional function to handle right-click (context menu) interactions on the component.`,methods:[],displayName:"Empty",props:{icon:{required:!0,tsType:{name:"JSX.Element"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  text: string;
  icon: typeof Upload;
  style: 'plain' | 'elevated';
  onClick: () => void;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"icon",value:{name:"Upload",required:!0}},{key:"style",value:{name:"union",raw:"'plain' | 'elevated'",elements:[{name:"literal",value:"'plain'"},{name:"literal",value:"'elevated'"}],required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""},contextMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};export{l as E};
