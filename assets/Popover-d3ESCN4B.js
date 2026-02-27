import{j as r}from"./jsx-runtime-C89ddIqy.js";import{r as t}from"./iframe-CeiX8cuE.js";const T=({childrenButton:p,panel:d,className:m,classButton:f,align:g="right"})=>{const[o,s]=t.useState(!1),n=t.useRef(null),[h,a]=t.useState(o),[v,i]=t.useState("opacity-0"),[y,c]=t.useState("scale-95"),b=()=>s(e=>!e),u=e=>{n.current&&!n.current.contains(e.target)&&l()},l=()=>{s(!1)};return t.useEffect(()=>{if(o){const e=setTimeout(()=>{i("opacity-100"),c("scale-100")},10);return a(!0),()=>clearTimeout(e)}else{i("opacity-0"),c("scale-95");const e=setTimeout(()=>{a(!1)},100);return()=>clearTimeout(e)}},[o]),t.useEffect(()=>(document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}),[]),r.jsxs("div",{style:{lineHeight:0},className:`relative ${m}`,children:[r.jsx("button",{onClick:b,className:`cursor-pointer outline-none ${f}`,"aria-expanded":o,"data-testid":"popover-button",children:p}),h&&r.jsx("div",{ref:n,className:`absolute z-50 mt-1 transform rounded-md border border-gray-10 ${g==="left"?"left-0 origin-top-left":"right-0 origin-top-right"} bg-surface py-1.5 shadow-subtle duration-100 ease-out dark:bg-gray-5 ${v} ${y}`,children:d(l)})]})};T.__docgenInfo={description:`Popover component

@property {ReactNode} childrenButton
- The content to be displayed inside the trigger button.

@property {(closePopover: () => void) => ReactNode} panel
- A function that returns the content to be displayed inside the popover panel.
It receives a \`closePopover\` function as a parameter, which can be used to programmatically close the popover.

@property {string} [className]
- Additional custom classes for the outermost container of the popover.
Can be used for positioning or adding custom styles.

@property {string} [classButton]
- Custom classes for the trigger button.

@returns {JSX.Element}
- The rendered Popover component.`,methods:[],displayName:"Popover",props:{childrenButton:{required:!0,tsType:{name:"ReactNode"},description:""},panel:{required:!0,tsType:{name:"signature",type:"function",raw:"(closePopover: () => void) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"closePopover"}],return:{name:"ReactNode"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},classButton:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}}}};export{T as P};
