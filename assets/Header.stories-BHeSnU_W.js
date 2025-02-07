import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{B as s}from"./Button-t3VSbunz.js";import{H as d}from"./Header-BQo-kNV3.js";import"./index-DJO9vBfz.js";import"./Loader-WXXQ1viB.js";const m="https://internxt.com/favicon.ico",u={title:"Components/Header",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{className:{control:"text"}}},a={args:{leftContent:e.jsxs("div",{className:"flex items-center space-x-2 h-12 rounded-2xl border border-white/10 bg-black/50 p-2",children:[e.jsx("img",{src:m,alt:"X Meet Logo",className:"h-7 w-7"}),e.jsx("span",{className:"text-gray-400 font-semibold",children:"Meet"}),e.jsx("span",{className:"text-xs text-yellow px-1 py-0.5 rounded bg-gray-800",children:"BETA"})]}),rightContent:e.jsxs("div",{className:"flex space-x-2 flex-row",children:[e.jsx(s,{variant:"primary",className:"text-gray-300",children:"Log in"}),e.jsx(s,{variant:"secondary",className:"bg-blue-600",children:"Sign up"})]}),className:"px-4 py-3"},parameters:{docs:{description:{story:"Header with logo, beta badge, and authentication buttons."}}}},t={args:{className:"border-b p-4",leftContent:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-xl font-bold text-gray-900",children:"My App"}),e.jsxs("nav",{className:"hidden md:flex space-x-4",children:[e.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-900",children:"Home"}),e.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-900",children:"Features"}),e.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-900",children:"Pricing"})]})]}),rightContent:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{variant:"secondary",className:"border-gray-300",children:"Contact"}),e.jsx(s,{variant:"primary",className:"bg-indigo-600",children:"Get Started"})]})},parameters:{docs:{description:{story:"Alternative header style with different button styling."}}}};var r,o,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const N=["TestHeader","CustomHeader"];export{t as CustomHeader,a as TestHeader,N as __namedExportsOrder,u as default};
