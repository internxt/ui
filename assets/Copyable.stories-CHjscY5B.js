import{j as a}from"./jsx-runtime-CiAlIWFd.js";import{r as e}from"./iframe-B8JFBOZm.js";import{p as H}from"./IconBase.es-B0sfiftb.js";import{T as V}from"./Tooltip-D3595ajE.js";import"./preload-helper-PPVm8Dsz.js";const x=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"}),e.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"}))]]),i=e.forwardRef((t,n)=>e.createElement(H,{ref:n,...t,weights:x}));i.displayName="CopyIcon";const y=i,s=({className:t="",classText:n="select-text text-gray-80",text:l,copiedText:d="Copied!",copyToClipboardText:m="Copy to clipboard"})=>{const[p,c]=e.useState(!1);async function u(){await navigator.clipboard.writeText(l),c(!0),setTimeout(()=>c(!1),1e3)}return a.jsxs("div",{className:`${t} flex h-11 items-center justify-between rounded-md border border-gray-10 bg-gray-5 px-4`,children:[a.jsx("p",{className:`${n}`,children:l}),a.jsx(V,{className:"ml-6",popsFrom:"bottom",title:p?d:m,delayInMs:p?500:void 0,children:a.jsx("button",{disabled:p,onClick:u,children:a.jsx(y,{className:"shrink-0 text-gray-50 hover:text-gray-60",size:24})})})]})};s.__docgenInfo={description:`Copyable component

@property {string} [className]
- Custom classes for the outer container.

@property {string} [classText]
- Custom classes for the selected text.

@property {string} text
- The text content to be displayed and copied to the clipboard.

@property {string} copiedText
- The text to display in the tooltip when the content has been copied.

@property {string} copyToClipboardText
- The text to display in the tooltip when the content can be copied to the clipboard.`,methods:[],displayName:"Copyable",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},classText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'select-text text-gray-80'",computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},copiedText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Copied!'",computed:!1}},copyToClipboardText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Copy to clipboard'",computed:!1}}}};const b={title:"Input/Copyable",component:s,parameters:{layout:"centered"},args:{text:"Sample text to copy",copiedText:"Copied!",copyToClipboardText:"Copy to clipboard"},tags:["autodocs"]},r={render:t=>a.jsx(s,{...t})},o={args:{copiedText:"Done!",copyToClipboardText:"Copy text",classText:"text-green"},render:t=>a.jsx(s,{...t})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Copyable {...args} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    copiedText: 'Done!',
    copyToClipboardText: 'Copy text',
    classText: 'text-green'
  },
  render: args => <Copyable {...args} />
}`,...o.parameters?.docs?.source}}};const Z=["Default","WithCustomClassName"];export{r as Default,o as WithCustomClassName,Z as __namedExportsOrder,b as default};
