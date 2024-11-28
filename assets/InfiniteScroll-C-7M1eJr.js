import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as t,R as m}from"./index-RYns6xqu.js";const R=({children:i,handleNextPage:s,hasMoreItems:o,loader:u,scrollableTarget:a,classNameLoader:p})=>{const l=t.useRef(null),d=t.useRef(null),[f,c]=t.useState(!1);t.useEffect(()=>{a&&(d.current=document.getElementById(a));const n=new IntersectionObserver(([g])=>{g.isIntersecting&&(o?(s(),c(!0)):c(!1))},{root:d.current||null,rootMargin:"100px",threshold:0}),e=l.current;return e&&n.observe(e),()=>{e&&n.unobserve(e)}},[o,s,a]);const h=m.Children.map(i,(n,e)=>e===m.Children.count(i)-1&&o?r.jsxs(r.Fragment,{children:[n,r.jsx("div",{ref:l,className:p,children:f&&u})]}):n);return r.jsx("div",{children:h})};R.__docgenInfo={description:`InfiniteScroll component to implement infinite scrolling functionality.

@param hildren - The elements to be displayed inside the scroll container.
@param handleNextPage - Function to handle loading the next page of content
when the user scrolls to the bottom.
@param hasMoreItems - Flag indicating whether there are more items to load.
If \`false\` or \`undefined\`, no more items will be loaded.
@param loader - The component to display as a loader while new items are being fetched.
@param [scrollableTarget] - The ID of the scrollable container.
@param classNameLoader ClassName for loader.`,methods:[],displayName:"InfiniteScroll",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},handleNextPage:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hasMoreItems:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},loader:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},scrollableTarget:{required:!1,tsType:{name:"string"},description:""},classNameLoader:{required:!1,tsType:{name:"string"},description:""}}};export{R as I};
