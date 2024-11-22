import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as n}from"./index-RYns6xqu.js";import{B as w}from"./Button-B7mFRUld.js";function h({isOpen:t,onClose:r,onPrimaryAction:y,onSecondaryAction:f,title:g,subtitle:x,primaryAction:a,secondaryAction:d,primaryActionColor:v,isLoading:c}){const[u,l]=n.useState(t),[m,p]=n.useState("opacity-0"),[i,s]=n.useState("scale-95");return n.useEffect(()=>{if(t){const o=setTimeout(()=>{p("opacity-100"),s("scale-100")},10);return l(!0),()=>clearTimeout(o)}else{p("opacity-0"),s("scale-95");const o=setTimeout(()=>{l(!1)},150);return()=>clearTimeout(o)}},[t]),n.useEffect(()=>{const o=T=>{T.key==="Escape"&&r()};return t&&window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[t,r]),e.jsx(e.Fragment,{children:u&&e.jsxs("div",{className:`fixed inset-0 z-50 ${t?"":"pointer-events-none"}`,children:[e.jsx("div",{className:`absolute inset-0 bg-gray-100/50 transition-opacity
             duration-150 dark:bg-black/75
              ${m}
            `,onClick:r,"data-testid":"dialog-overlay"}),e.jsxs("div",{className:`absolute
              left-1/2
              top-1/2
              w-full
              max-w-sm
              -translate-x-1/2
              -translate-y-1/2
              transform rounded-2xl
              bg-surface p-5
              transition-all
              duration-150
              dark:bg-gray-1
              ${i} 
              ${m}`,children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("p",{className:"text-2xl font-medium text-gray-100",children:g}),e.jsx("p",{className:"text-gray-60",children:x})]}),e.jsxs("div",{className:"mt-5 flex justify-end space-x-2",children:[e.jsx(w,{variant:"secondary",onClick:f,disabled:c,children:d}),e.jsx(w,{onClick:y,loading:c,variant:v==="primary"?"primary":"destructive",children:a})]})]})]})})}h.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},primaryAction:{required:!0,tsType:{name:"string"},description:""},secondaryAction:{required:!0,tsType:{name:"string"},description:""},primaryActionColor:{required:!0,tsType:{name:"union",raw:"'primary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const j=({isOpen:t,onClose:r,children:y,maxWidth:f,className:g,width:x,preventClosing:a=!1})=>{const d=n.useRef(null),[v,c]=n.useState(t),[u,l]=n.useState("opacity-0"),[m,p]=n.useState("scale-95");return n.useEffect(()=>{if(t){const i=setTimeout(()=>{l("opacity-100"),p("scale-100")},10);return c(!0),()=>clearTimeout(i)}else{l("opacity-0"),p("scale-95");const i=setTimeout(()=>{c(!1)},150);return()=>clearTimeout(i)}},[t]),n.useEffect(()=>{const i=s=>{d.current&&!d.current.contains(s.target)&&!a&&r()};return t&&document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[t,r,a]),n.useEffect(()=>{const i=s=>{s.key==="Escape"&&!a&&r()};return t&&window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[t,r,a]),e.jsx(e.Fragment,{children:v&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`
              fixed
              inset-0
              z-50
              bg-highlight/40
              transition-opacity
              duration-150
              ease-out
              ${u}
              pointer-events-none'}              
            `}),e.jsx("div",{className:`
              fixed
              inset-0
              z-50
              flex
              min-h-full
              items-center
              justify-center
              transition-opacity
              duration-150
              ease-out
              ${u}
              ${m}
              pointer-events-none
            `,children:e.jsx("section",{"data-testid":"ModalContent",ref:d,className:`
                ${x??"w-full"}
                ${f??"max-w-lg"}
                ${g??"p-5"}
                text-gray-100
                rounded-2xl
                bg-surface
                shadow-subtle-hard
                transform
                transition-all
                duration-150
                ease-out
                ${u}
                ${m}
                pointer-events-none
              `,children:y})})]})})};j.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},preventClosing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{h as D,j as M};
