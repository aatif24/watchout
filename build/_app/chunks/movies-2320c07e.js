var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{M as s,C as r}from"./vendor-cb2d9ecf.js";let c="5111dc44329bdeadc983e2943ead5d2302d3177f102684c658544c3ea7efacdb",i="https://api.trakt.tv/";const p=r([]),l=r({}),d=r([]),h=r("trending"),y=r(!1),m=(e="trending",t=50,a="")=>{y.set(!0);let n=g({limit:t,extended:"full",query:a}),o=`${i}movies/${e}?${n}`;""!=a&&(o=`${i}search/movie?${n}`),fetch(o,{headers:{"Content-Type":"application/json","trakt-api-version":"2","trakt-api-key":`${c}`}}).then((e=>e.json())).then((e=>{p.set(e),y.set(!1)})).catch((e=>(console.log(e),[])))},f=s(p,(async e=>e=await Promise.all(e.map((async e=>(e.movie=e.movie?e.movie:e,e)))))),v=async e=>{y.set(!0),fetch(`${i}movies/${e}?extended=full`,{headers:{"Content-Type":"application/json","trakt-api-version":"2","trakt-api-key":`${c}`}}).then((e=>e.json())).then((e=>{l.set(e),y.set(!1)})).catch((e=>(console.log(e),[])))},b=s(l,(async e=>((e,s)=>{for(var r in s||(s={}))a.call(s,r)&&o(e,r,s[r]);if(t)for(var r of t(s))n.call(s,r)&&o(e,r,s[r]);return e})({},e))),$=async e=>{y.set(!0),fetch(`${i}movies/${e}/people?extended=full`,{headers:{"Content-Type":"application/json","trakt-api-version":"2","trakt-api-key":`${c}`}}).then((e=>e.json())).then((e=>{d.set(e),y.set(!1)})).catch((e=>(console.log(e),[])))},j=s(d,(async e=>e)),u=async(e,t="movie")=>{let a=await fetch(`https://api.themoviedb.org/3/${t}/${e}/images?api_key=961722508c416cd134e8adfe6e7ac8e3&language=en`);return await a.json()},g=e=>{var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")};export{m as a,u as b,b as c,v as d,$ as e,h as f,y as l,f as m,j as p};