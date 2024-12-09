import{j as a}from"./jsx-runtime-DEdD30eg.js";import{L as m}from"./Loader-BkvXvL7i.js";const g=({variant:n="primary",type:o="button",id:s,children:i,className:u="",disabled:e=!1,onClick:l=()=>{},onKeyDown:d=()=>{},size:p="default",loading:r,dataTest:c,autofocus:f,buttonDataCy:y,buttonChildrenDataCy:b})=>{let t="";return n==="primary"&&!e?t=`${r?"bg-primary-dark":"bg-primary"} active:bg-primary-dark text-white shadow-sm`:n==="primary"&&e?t="bg-gray-30 text-white shadow-sm":n==="destructive"&&!e?t=`${r?"bg-red-dark":"bg-red"} active:bg-red-dark text-white shadow-sm`:n==="destructive"&&e?t="bg-gray-30 text-white shadow-sm":n==="secondary"&&!e?t="bg-surface dark:bg-gray-5 border border-gray-10 hover:border-gray-20 active:bg-gray-1 dark:active:bg-gray-10 text-gray-80 shadow-sm":n==="secondary"&&e?t="bg-surface dark:bg-gray-5 text-gray-30 border border-gray-5 shadow-sm":n==="ghost"&&!e?t="hover:bg-gray-5 active:bg-gray-10 focus-visible:bg-gray-10":n==="ghost"&&e&&(t="text-gray-30"),a.jsxs("button",{"data-cy":y,id:s,onClick:l,onKeyDown:d,disabled:e||r,type:o,"data-test":c,autoFocus:f,className:`${p==="default"?"h-10 px-5":"h-8 px-3.5"} relative flex shrink-0 select-none flex-row items-center justify-center space-x-2 
      whitespace-nowrap rounded-lg text-base font-medium outline-none ring-2 ring-primary/0 
      ring-offset-2 ring-offset-transparent transition-all duration-100 ease-in-out 
      focus-visible:ring-primary/50 ${t} ${u}`,children:[r&&a.jsx(m,{size:18}),a.jsx("div",{className:"flex items-center justify-center space-x-2","data-cy":b,children:i})]})};g.__docgenInfo={description:`Button component

@property {string} [id]
- Optional ID for the button element, useful for accessibility and styling.

@property {'primary' | 'secondary' | 'ghost' | 'destructive'} [variant]
- Defines the button's style variant. Options are:
  - 'primary': Standard button style with primary color.
  - 'secondary': Button with border and subtle background color.
  - 'ghost': Button with transparent background, suitable for icons or light use.
  - 'destructive': Button for destructive actions.

@property {'button' | 'submit'} [type]
- Specifies the type of the button. Defaults to 'button'.
  - 'button': Standard button behavior.
  - 'submit': Button submits a form when used inside a form element.

@property {ReactNode} [children]
- The content inside the button, such as text or icons.
  - Can be a single element or an array of elements.

@property {string} [className]
- Custom CSS classes for additional styling of the button.

@property {boolean} [disabled]
- Disables the button, preventing user interaction and applying a disabled style.
  - Defaults to false.

@property {(e?: unknown) => void} [onClick]
- Function called when the button is clicked. Accepts an optional event object.

@property {(e?: unknown) => void} [onKeyDown]
- Function called when a key is pressed while the button is focused. Accepts an optional event object.

@property {'medium' | 'default'} [size]
- Specifies the button size. Options are:
  - 'default': Standard size.
  - 'medium': Slightly smaller size for compact use.

@property {boolean} [loading]
- If true, shows a loading spinner inside the button.

@property {string} [dataTest]
- Custom data attribute used for test automation or tracking purposes.

@property {boolean} [autofocus]
- If true, the button will be focused automatically when the page loads.

@property {string} [buttonDataCy]
- Custom data attribute for the button element.

@property {string} [buttonChildrenDataCy]
- Custom data attribute for the children of the button.`,methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},onClick:{defaultValue:{value:"() => undefined",computed:!1},required:!1},onKeyDown:{defaultValue:{value:"() => undefined",computed:!1},required:!1},size:{defaultValue:{value:"'default'",computed:!1},required:!1}}};export{g as B};
