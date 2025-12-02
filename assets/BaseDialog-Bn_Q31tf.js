import{j as e}from"./jsx-runtime-o9qq2xiW.js";import{n as f}from"./X.es-D67TZzyf.js";const h=({isOpen:o,title:t,subTitle:s,dialogRounded:r,children:i,onClose:n,classes:a,panelClasses:l,titleClasses:d,closeClass:p,weightIcon:c,bgColor:u,dataTest:m,hideCloseButton:g})=>e.jsx("div",{"data-test":m,className:`${o?"flex":"hidden"} ${a||""} absolute bottom-0 left-0 right-0 top-0 z-50 bg-black/40`,children:e.jsxs("div",{className:`${l||""} absolute left-1/2 top-1/2 flex w-104 -translate-x-1/2
        -translate-y-1/2 flex-col overflow-hidden  ${r?"rounded-2xl":"rounded-lg pt-8"} text-gray-100 ${u||"bg-surface"}`,children:[e.jsxs("div",{className:`${s?"justify-between bg-gray-1 p-5":""} flex flex-row items-start`,children:[t?e.jsxs("div",{className:"relative flex max-w-full flex-1 flex-col truncate",children:[e.jsx("span",{className:`${d||""} truncate text-xl`,title:t,children:t}),e.jsx("span",{className:"max-w-fit flex-1 truncate text-base font-normal text-gray-50",children:s})]}):null,g?null:e.jsx("div",{className:`relative ml-auto cursor-pointer bg-surface
           transition duration-200 ease-in-out ${p||"text-primary hover:text-primary-dark"} `,children:e.jsx(f,{role:"button",onClick:n,size:28,weight:c})})]}),i]})});h.__docgenInfo={description:`BaseDialog component

@property {boolean} isOpen
- Controls whether the dialog is open or closed. If true, the dialog is visible.

@property {string} [title]
- The title of the dialog, displayed at the top of the dialog box.

@property {boolean} [hideCloseButton]
- If true, hides the close button (X icon) in the top right corner of the dialog.

@property {string} [subTitle]
- A subtitle for the dialog, displayed below the title.

@property {boolean} [dialogRounded]
- If true, applies a more rounded corner style to the dialog.

@property {JSX.Element | JSX.Element[]} children
- The content to be displayed inside the dialog. Can be a single JSX element or an array of elements.

@property {string} [classes]
- Custom classes for the outermost container of the dialog. Allows additional styling like margins or padding.

@property {string} [titleClasses]
- Custom classes for styling the title element. Can modify font size, weight, etc.

@property {string} [panelClasses]
- Custom classes for the main dialog panel, where the content is displayed.

@property {string} [closeClass]
- Custom classes for the close button, allowing for customization of the button's appearance.

@property {IconWeight} [weightIcon]
- Controls the thickness of the close button icon (X). Options range from "thin" to "bold".

@property {string} [bgColor]
- Custom background color for the dialog. Defaults to a light surface color if not provided.

@property {() => void} onClose
- Callback function triggered when the close button or overlay is clicked, used to close the dialog.`,methods:[],displayName:"BaseDialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},hideCloseButton:{required:!1,tsType:{name:"boolean"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},dialogRounded:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:""},classes:{required:!1,tsType:{name:"string"},description:""},titleClasses:{required:!1,tsType:{name:"string"},description:""},panelClasses:{required:!1,tsType:{name:"string"},description:""},closeClass:{required:!1,tsType:{name:"string"},description:""},weightIcon:{required:!1,tsType:{name:"IconWeight"},description:""},bgColor:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dataTest:{required:!1,tsType:{name:"string"},description:""}}};export{h as B};
