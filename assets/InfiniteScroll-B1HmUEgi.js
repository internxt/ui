import{j as n}from"./jsx-runtime-C89ddIqy.js";import{r,R as h}from"./iframe-CeiX8cuE.js";const g=({children:a,handleNextPage:i,hasMoreItems:o,loader:m,scrollableTarget:s,classNameLoader:p})=>{const l=r.useRef(null),d=r.useRef(null),[u,c]=r.useState(!1);r.useEffect(()=>{s&&(d.current=document.getElementById(s));const t=new IntersectionObserver(([b])=>{b.isIntersecting&&(o?(i(),c(!0)):c(!1))},{root:d.current||null,rootMargin:"100px",threshold:0}),e=l.current;return e&&t.observe(e),()=>{e&&t.unobserve(e)}},[o,i,s]);const f=h.Children.map(a,(t,e)=>e===h.Children.count(a)-1&&o?n.jsxs(n.Fragment,{children:[t,n.jsx("div",{ref:l,className:p,children:u&&m})]}):t);return n.jsx("div",{children:f})};g.__docgenInfo={description:`InfiniteScroll component

@param {InfiniteScrollProps} props - The properties of the component.

@property {ReactNode} children
- The child components or elements to be rendered inside the scrollable container.

@property {() => void} handleNextPage
- A callback function that is triggered when the user reaches the bottom of the container
and more items need to be loaded.

@property {boolean | undefined} hasMoreItems
- A flag indicating whether there are more items to load. If \`false\`, the loader will not be shown,
and no more items will be fetched.

@property {React.ReactNode} loader
- The content to be shown as a loader while waiting for more items to load.

@property {string} [scrollableTarget]
- An optional ID of the scrollable container that will be observed for scroll events.
If not provided, the default behavior is to observe the entire window.

@property {string} [classNameLoader]
- An optional custom class name for the loader element, used to style the loader component.

@returns {JSX.Element}
- A JSX element containing the children with the loader attached to the last item, if there are more items to load.

The component uses the \`IntersectionObserver\` API to detect when the loader element (at the bottom of the list)
comes into view. When this happens, it triggers the \`handleNextPage\` callback to load the next set of items.
It also shows the loader element only when there are more items to load (\`hasMoreItems\` is \`true\`).`,methods:[],displayName:"InfiniteScroll",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},handleNextPage:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hasMoreItems:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},loader:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},scrollableTarget:{required:!1,tsType:{name:"string"},description:""},classNameLoader:{required:!1,tsType:{name:"string"},description:""}}};export{g as I};
