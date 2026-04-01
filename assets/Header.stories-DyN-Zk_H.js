import{j as e}from"./jsx-runtime-CiAlIWFd.js";import{B as s}from"./Button-CmdQJECo.js";import"./iframe-B8JFBOZm.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-BVVSTtFR.js";const r=({leftContent:n,rightContent:o,className:c=""})=>e.jsxs("header",{className:`
        flex
        items-center
        justify-between
        ${c}
      `,children:[e.jsx("div",{className:"flex items-center space-x-4",children:n}),e.jsx("div",{className:"flex items-center space-x-4",children:o})]});r.__docgenInfo={description:`Header component

A flexible header component that can contain any content on its left and right sides.

@param {HeaderProps} props - The properties for the Header component
@returns {JSX.Element} The rendered Header component`,methods:[],displayName:"Header",props:{leftContent:{required:!1,tsType:{name:"JSX.Element"},description:"Elements to be rendered on the left side of the header"},rightContent:{required:!1,tsType:{name:"JSX.Element"},description:"Elements to be rendered on the right side of the header"},className:{required:!1,tsType:{name:"string"},description:"Optional class name for additional styling",defaultValue:{value:"''",computed:!1}}}};const i="https://internxt.com/favicon.ico",h={title:"Layout/Header",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{className:{control:"text"}}},t={args:{leftContent:e.jsxs("div",{className:"flex items-center space-x-2 h-12 rounded-2xl border border-white/10 bg-black/50 p-2",children:[e.jsx("img",{src:i,alt:"X Meet Logo",className:"h-7 w-7"}),e.jsx("span",{className:"text-gray-400 font-semibold",children:"Meet"}),e.jsx("span",{className:"text-xs text-yellow px-1 py-0.5 rounded bg-gray-800",children:"BETA"})]}),rightContent:e.jsxs("div",{className:"flex space-x-2 flex-row",children:[e.jsx(s,{variant:"primary",className:"text-gray-300",children:"Log in"}),e.jsx(s,{variant:"secondary",className:"bg-blue-600",children:"Sign up"})]}),className:"px-4 py-3"},parameters:{docs:{description:{story:"Header with logo, beta badge, and authentication buttons."}}}},a={args:{className:"border-b p-4",leftContent:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-xl font-bold text-gray-900",children:"My App"}),e.jsxs("nav",{className:"hidden md:flex space-x-4",children:[e.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-900",children:"Home"}),e.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-900",children:"Features"}),e.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-900",children:"Pricing"})]})]}),rightContent:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{variant:"secondary",className:"border-gray-300",children:"Contact"}),e.jsx(s,{variant:"primary",className:"bg-indigo-600",children:"Get Started"})]})},parameters:{docs:{description:{story:"Alternative header style with different button styling."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <div className="flex items-center space-x-2 h-12 rounded-2xl border border-white/10 bg-black/50 p-2">
        <img src={IMAGE_SRC} alt="X Meet Logo" className="h-7 w-7" />
        <span className="text-gray-400 font-semibold">Meet</span>
        <span className="text-xs text-yellow px-1 py-0.5 rounded bg-gray-800">BETA</span>
      </div>,
    rightContent: <div className="flex space-x-2 flex-row">
        <Button variant="primary" className="text-gray-300">
          Log in
        </Button>
        <Button variant="secondary" className="bg-blue-600">
          Sign up
        </Button>
      </div>,
    className: 'px-4 py-3'
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with logo, beta badge, and authentication buttons.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'border-b p-4',
    leftContent: <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-gray-900">My App</span>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
        </nav>
      </div>,
    rightContent: <div className="flex items-center space-x-4">
        <Button variant="secondary" className="border-gray-300">
          Contact
        </Button>
        <Button variant="primary" className="bg-indigo-600">
          Get Started
        </Button>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Alternative header style with different button styling.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const g=["TestHeader","CustomHeader"];export{a as CustomHeader,t as TestHeader,g as __namedExportsOrder,h as default};
