import{j as e}from"./jsx-runtime-CiAlIWFd.js";import{r as o}from"./iframe-B8JFBOZm.js";import{B as l}from"./Button-CmdQJECo.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BVVSTtFR.js";const c=({isOpen:t,onClose:n,onPrimaryAction:s,onSecondaryAction:i,title:g,subtitle:f,primaryAction:h,secondaryAction:x,primaryActionColor:b,isLoading:d,maxWidth:v="sm"})=>{const[A,m]=o.useState(t),[p,u]=o.useState("opacity-0"),[T,y]=o.useState("scale-95");return o.useEffect(()=>{if(t){const r=setTimeout(()=>{u("opacity-100"),y("scale-100")},10);return m(!0),()=>clearTimeout(r)}else{u("opacity-0"),y("scale-95");const r=setTimeout(()=>{m(!1)},150);return()=>clearTimeout(r)}},[t]),o.useEffect(()=>{const r=w=>{w.key==="Escape"&&n()};return t&&window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[t,n]),e.jsx(e.Fragment,{children:A&&e.jsxs("div",{className:`fixed inset-0 z-50 ${t?"":"pointer-events-none"}`,children:[e.jsx("div",{className:`absolute inset-0 bg-gray-100/50 transition-opacity duration-150 dark:bg-black/75 ${p}`,onClick:n,"data-testid":"dialog-overlay"}),e.jsxs("div",{className:`absolute left-1/2 top-1/2 w-full max-w-${v} -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-surface p-5 transition-all duration-150 dark:bg-gray-1 ${T} ${p}`,children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("p",{className:"text-2xl font-medium text-gray-100",children:g}),e.jsx("p",{className:"text-gray-60",children:f})]}),e.jsxs("div",{className:"mt-5 flex justify-end space-x-2",children:[e.jsx(l,{variant:"secondary",onClick:i,disabled:d,children:x}),e.jsx(l,{onClick:s,loading:d,variant:b==="primary"?"primary":"destructive",children:h})]})]})]})})};c.__docgenInfo={description:`Dialog component

@property {boolean} isOpen
- Controls whether the dialog is open or closed. If true, the dialog becomes visible.

@property {() => void} onClose
- Callback function triggered when the overlay or the close button is clicked. Used to close the dialog.

@property {() => void} onPrimaryAction
- Callback function triggered when the primary action button is clicked.

@property {() => void} onSecondaryAction
- Callback function triggered when the secondary action button is clicked.

@property {string} title
- The title of the dialog, displayed at the top of the dialog box.

@property {string} subtitle
- A subtitle for the dialog, displayed below the title.

@property {string | JSX.Element} primaryAction
- The label or content for the primary action button.

@property {string} secondaryAction
- The label or content for the secondary action button.

@property {('primary' | 'danger')} primaryActionColor
- Defines the color of the primary action button. Can either be 'primary' or 'danger'.

@property {boolean} [isLoading]
- Optional flag to indicate if the buttons should show a loading state. Defaults to false.

@property {'sm' | 'md' | 'lg'} [maxWidth]
- Optional maximum width for the dialog. Can be 'sm', 'md', or 'lg'.

@returns {JSX.Element}
- The rendered dialog component.`,methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},primaryAction:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},secondaryAction:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},primaryActionColor:{required:!0,tsType:{name:"union",raw:"'primary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}}}};const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,S=(t,n)=>{const[{isOpen:s},i]=C();return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(l,{onClick:()=>i({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show dialog"}),t({...n,args:{...n.allArgs,isOpen:s,onClose:()=>i({isOpen:!1})}})]})},q={title:"Overlay/Dialog",component:c,decorators:[S],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},primaryAction:{control:"text"},secondaryAction:{control:"text"},primaryActionColor:{control:"select",options:["primary","danger"]},isLoading:{control:"boolean"}}},a={args:{isOpen:!1,title:"Dialog Title",subtitle:"This is a subtitle for the dialog.",primaryAction:"Confirm",secondaryAction:"Cancel",primaryActionColor:"primary",isLoading:!1,onPrimaryAction:()=>alert("Primary action executed!"),onSecondaryAction:()=>alert("Secondary action executed!")},parameters:{docs:{description:{story:"An example dialogue."}}},render:t=>e.jsx(c,{...t})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    title: 'Dialog Title',
    subtitle: 'This is a subtitle for the dialog.',
    primaryAction: 'Confirm',
    secondaryAction: 'Cancel',
    primaryActionColor: 'primary',
    isLoading: false,
    onPrimaryAction: () => alert('Primary action executed!'),
    onSecondaryAction: () => alert('Secondary action executed!')
  },
  parameters: {
    docs: {
      description: {
        story: 'An example dialogue.'
      }
    }
  },
  render: (args: any) => <Dialog {...args} />
}`,...a.parameters?.docs?.source}}};const _=["DialogExample"];export{a as DialogExample,_ as __namedExportsOrder,q as default};
