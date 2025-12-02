import{j as e}from"./jsx-runtime-o9qq2xiW.js";const s=({leftContent:t,rightContent:n,className:r=""})=>e.jsxs("header",{className:`
        flex
        items-center
        justify-between
        ${r}
      `,children:[e.jsx("div",{className:"flex items-center space-x-4",children:t}),e.jsx("div",{className:"flex items-center space-x-4",children:n})]});s.__docgenInfo={description:`Header component

A flexible header component that can contain any content on its left and right sides.

@param {HeaderProps} props - The properties for the Header component
@returns {JSX.Element} The rendered Header component`,methods:[],displayName:"Header",props:{leftContent:{required:!1,tsType:{name:"JSX.Element"},description:"Elements to be rendered on the left side of the header"},rightContent:{required:!1,tsType:{name:"JSX.Element"},description:"Elements to be rendered on the right side of the header"},className:{required:!1,tsType:{name:"string"},description:"Optional class name for additional styling",defaultValue:{value:"''",computed:!1}}}};export{s as H};
