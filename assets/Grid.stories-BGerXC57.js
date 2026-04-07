import{j as n}from"./jsx-runtime-CccaB59u.js";import"./iframe-CAAsQIpV.js";import"./preload-helper-PPVm8Dsz.js";const s=({children:t,className:a="",id:e,dataCy:o})=>n.jsx("div",{id:e,"data-cy":o,className:`grid min-w-full auto-rows-min grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ${a}`,children:t});s.__docgenInfo={description:`Grid component

A responsive grid container that automatically adjusts columns from 2 (mobile) up to 6 (extra large screens).

@param {GridProps} props - The properties of the component.

@property {ReactNode} [children]
- The child components or elements to be rendered inside the grid container.

@property {string} [className]
- Optional custom CSS classes for additional styling or layout adjustments overriding default tailwind classes.

@property {string} [id]
- Optional ID for the grid container element.

@property {string} [dataCy]
- Custom data attribute used for e2e Cypress test targeting.

@returns {JSX.Element}
- A JSX element containing the children formatted inside a grid.`,methods:[],displayName:"Grid",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};const l={title:"Layout/Grid",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{className:{control:"text",description:"Custom CSS classes for the Grid container"}}},r={render:t=>n.jsx(s,{...t,children:Array.from({length:12}).map((a,e)=>n.jsxs("div",{className:"flex items-center justify-center rounded-lg bg-gray-10 p-6 text-sm font-medium text-gray-80 shadow-sm",children:["Grid Item ",e+1]},e))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Grid {...args}>
      {Array.from({
      length: 12
    }).map((_, index) => <div key={index} className="flex items-center justify-center rounded-lg bg-gray-10 p-6 text-sm font-medium text-gray-80 shadow-sm">
          Grid Item {index + 1}
        </div>)}
    </Grid>
}`,...r.parameters?.docs?.source}}};const c=["Default"];export{r as Default,c as __namedExportsOrder,l as default};
