import{S as t,i as s,s as a,l as e,f as l,d as c,e as r,k as n,t as o,c as i,a as h,n as m,g as d,b as f,E as u,h as p,H as g,u as v,w as b,x as k,J as x,A as E,r as q,N as w,P as I,j as $,m as D,o as V,v as y,R as M}from"../chunks/vendor-cb2d9ecf.js";import{L as P}from"../chunks/loader-46234079.js";import{b as N,l as j,c as L,p as S,d as _,e as C}from"../chunks/movies-2320c07e.js";function G(t){let s;function a(t,s){return t[2]?A:O}let r=a(t),n=r(t);return{c(){n.c(),s=e()},l(t){n.l(t),s=e()},m(t,a){n.m(t,a),l(t,s,a)},p(t,e){r===(r=a(t))&&n?n.p(t,e):(n.d(1),n=r(t),n&&(n.c(),n.m(s.parentNode,s)))},d(t){n.d(t),t&&c(s)}}}function O(t){let s;return{c(){s=r("i"),this.h()},l(t){s=i(t,"I",{class:!0}),h(s).forEach(c),this.h()},h(){f(s,"class","icon fas fa-user svelte-1rqqrky")},m(t,a){l(t,s,a)},p:g,d(t){t&&c(s)}}}function A(t){let s,a,e,n;return{c(){s=r("div"),a=r("img"),this.h()},l(t){s=i(t,"DIV",{class:!0});var e=h(s);a=i(e,"IMG",{class:!0,src:!0,alt:!0}),e.forEach(c),this.h()},h(){f(a,"class","img-fluid svelte-1rqqrky"),a.src!==(e=t[2])&&f(a,"src",e),f(a,"alt",n=t[0].character),f(s,"class","image svelte-1rqqrky")},m(t,e){l(t,s,e),u(s,a)},p(t,s){4&s&&a.src!==(e=t[2])&&f(a,"src",e),1&s&&n!==(n=t[0].character)&&f(a,"alt",n)},d(t){t&&c(s)}}}function z(t){let s,a,e,v,b,k,x,E,q,w,I,$=t[0].person.name+"",D=t[0].character+"",V=t[1]&&G(t);return{c(){s=r("div"),V&&V.c(),a=n(),e=r("div"),v=r("p"),b=o($),x=n(),E=r("p"),q=o(D),this.h()},l(t){s=i(t,"DIV",{class:!0,"image-sourse":!0});var l=h(s);V&&V.l(l),a=m(l),e=i(l,"DIV",{class:!0});var r=h(e);v=i(r,"P",{class:!0,"data-bs-toggle":!0,"data-bs-placement":!0,title:!0});var n=h(v);b=d(n,$),n.forEach(c),x=m(r),E=i(r,"P",{class:!0,"data-bs-toggle":!0,"data-bs-placement":!0,title:!0});var o=h(E);q=d(o,D),o.forEach(c),r.forEach(c),l.forEach(c),this.h()},h(){f(v,"class","h5 name text-truncate svelte-1rqqrky"),f(v,"data-bs-toggle","tooltip"),f(v,"data-bs-placement","top"),f(v,"title",k=t[0].person.name),f(E,"class","character text-truncate fw-light svelte-1rqqrky"),f(E,"data-bs-toggle","tooltip"),f(E,"data-bs-placement","bottom"),f(E,"title",w=t[0].character),f(e,"class","title"),f(s,"class","cast svelte-1rqqrky"),f(s,"image-sourse",I=t[3](t[0].person.ids))},m(t,c){l(t,s,c),V&&V.m(s,null),u(s,a),u(s,e),u(e,v),u(v,b),u(e,x),u(e,E),u(E,q)},p(t,[e]){t[1]?V?V.p(t,e):(V=G(t),V.c(),V.m(s,a)):V&&(V.d(1),V=null),1&e&&$!==($=t[0].person.name+"")&&p(b,$),1&e&&k!==(k=t[0].person.name)&&f(v,"title",k),1&e&&D!==(D=t[0].character+"")&&p(q,D),1&e&&w!==(w=t[0].character)&&f(E,"title",w),1&e&&I!==(I=t[3](t[0].person.ids))&&f(s,"image-sourse",I)},i:g,o:g,d(t){t&&c(s),V&&V.d()}}}function B(t,s,a){let e,{cast:l}=s,c=!1;return t.$$set=t=>{"cast"in t&&a(0,l=t.cast)},[l,c,e,async t=>{if(t.tmdb){let s=await N(t.tmdb,"person");s.profiles&&s.profiles.length&&a(2,e="https://image.tmdb.org/t/p/w500"+s.profiles[0].file_path)}a(1,c=!0)}]}class H extends t{constructor(t){super(),s(this,t,B,z,a,{cast:0})}}function J(t,s,a){const e=t.slice();return e[9]=s[a],e[11]=a,e}function R(t){let s,a,r,n={ctx:t,current:null,token:null,hasCatch:!1,pending:Y,then:K,catch:F,value:7,blocks:[,,,]};return w(a=t[3],n),{c(){s=e(),n.block.c()},l(t){s=e(),n.block.l(t)},m(t,a){l(t,s,a),n.block.m(t,n.anchor=a),n.mount=()=>s.parentNode,n.anchor=s,r=!0},p(s,e){t=s,n.ctx=t,8&e&&a!==(a=t[3])&&w(a,n)||I(n,t,e)},i(t){r||(k(n.block),r=!0)},o(t){for(let s=0;s<3;s+=1){const t=n.blocks[s];v(t)}r=!1},d(t){t&&c(s),n.block.d(t),n.token=null,n=null}}}function T(t){let s,a;return s=new P({}),{c(){$(s.$$.fragment)},l(t){D(s.$$.fragment,t)},m(t,e){V(s,t,e),a=!0},p:g,i(t){a||(k(s.$$.fragment,t),a=!0)},o(t){v(s.$$.fragment,t),a=!1},d(t){y(s,t)}}}function F(t){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function K(t){let s,a,e,g,b,x,E,q,$,D,V,y,M,P,N,j,L,S,_,C,G,O,A,z,B,H,J,R,T,F,K,W,Y,Z,tt,st,at=t[7].released+"",et=Math.round(10*(t[7].rating+Number.EPSILON))/10+"",lt=t[7].title+"",ct=t[7].genres.join(", ")+"",rt=(t[7].tagline&&t[7].tagline)+"",nt=t[7].overview+"",ot={ctx:t,current:null,token:null,hasCatch:!1,pending:X,then:U,catch:Q,value:8,blocks:[,,,]};return w(Z=t[4],ot),{c(){s=r("section"),a=r("img"),g=n(),b=r("div"),x=r("div"),E=r("img"),D=n(),V=r("div"),y=r("div"),M=r("p"),P=o(at),N=n(),j=r("p"),L=r("i"),S=n(),_=o(et),C=n(),G=r("div"),O=r("p"),A=o(lt),z=n(),B=r("small"),H=o(ct),J=n(),R=r("p"),T=o(rt),F=n(),K=r("p"),W=o(nt),Y=n(),ot.block.c(),this.h()},l(t){s=i(t,"SECTION",{"image-source":!0,class:!0});var e=h(s);a=i(e,"IMG",{src:!0,alt:!0,class:!0}),g=m(e),b=i(e,"DIV",{class:!0});var l=h(b);x=i(l,"DIV",{class:!0});var r=h(x);E=i(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(c),D=m(l),V=i(l,"DIV",{class:!0});var n=h(V);y=i(n,"DIV",{class:!0});var o=h(y);M=i(o,"P",{class:!0});var f=h(M);P=d(f,at),f.forEach(c),N=m(o),j=i(o,"P",{class:!0});var u=h(j);L=i(u,"I",{class:!0}),h(L).forEach(c),S=m(u),_=d(u,et),u.forEach(c),o.forEach(c),C=m(n),G=i(n,"DIV",{});var p=h(G);O=i(p,"P",{class:!0});var v=h(O);A=d(v,lt),z=m(v),B=i(v,"SMALL",{class:!0});var k=h(B);H=d(k,ct),k.forEach(c),v.forEach(c),J=m(p),R=i(p,"P",{class:!0});var q=h(R);T=d(q,rt),q.forEach(c),F=m(p),K=i(p,"P",{class:!0});var w=h(K);W=d(w,nt),w.forEach(c),p.forEach(c),n.forEach(c),l.forEach(c),Y=m(e),ot.block.l(e),e.forEach(c),this.h()},h(){a.src!==(e=t[0])&&f(a,"src",e),f(a,"alt","bg-image"),f(a,"class","background svelte-1qxad2m"),f(E,"class","poster svelte-1qxad2m"),E.src!==(q=t[1])&&f(E,"src",q),f(E,"alt",$=t[7].title),f(x,"class","me-4 d-none d-md-block"),f(M,"class",""),f(L,"class","icon fas fa-star svelte-1qxad2m"),f(j,"class","h3"),f(y,"class","date-rating d-flex flex-column-reverse  svelte-1qxad2m"),f(B,"class","genre fw-lighter text-capitalize svelte-1qxad2m"),f(O,"class","h1 title svelte-1qxad2m"),f(R,"class","h3 tagline fw-light mb-2 svelte-1qxad2m"),f(K,"class","fw-lighter overview w-75 m-0 svelte-1qxad2m"),f(V,"class","d-flex flex-column justify-content-between"),f(b,"class","d-flex mt-5 px-3 content svelte-1qxad2m"),f(s,"image-source",tt=t[5](t[7].ids)),f(s,"class","svelte-1qxad2m")},m(t,e){l(t,s,e),u(s,a),u(s,g),u(s,b),u(b,x),u(x,E),u(b,D),u(b,V),u(V,y),u(y,M),u(M,P),u(y,N),u(y,j),u(j,L),u(j,S),u(j,_),u(V,C),u(V,G),u(G,O),u(O,A),u(O,z),u(O,B),u(B,H),u(G,J),u(G,R),u(R,T),u(G,F),u(G,K),u(K,W),u(s,Y),ot.block.m(s,ot.anchor=null),ot.mount=()=>s,ot.anchor=null,st=!0},p(l,c){t=l,(!st||1&c&&a.src!==(e=t[0]))&&f(a,"src",e),(!st||2&c&&E.src!==(q=t[1]))&&f(E,"src",q),(!st||8&c&&$!==($=t[7].title))&&f(E,"alt",$),(!st||8&c)&&at!==(at=t[7].released+"")&&p(P,at),(!st||8&c)&&et!==(et=Math.round(10*(t[7].rating+Number.EPSILON))/10+"")&&p(_,et),(!st||8&c)&&lt!==(lt=t[7].title+"")&&p(A,lt),(!st||8&c)&&ct!==(ct=t[7].genres.join(", ")+"")&&p(H,ct),(!st||8&c)&&rt!==(rt=(t[7].tagline&&t[7].tagline)+"")&&p(T,rt),(!st||8&c)&&nt!==(nt=t[7].overview+"")&&p(W,nt),ot.ctx=t,16&c&&Z!==(Z=t[4])&&w(Z,ot)||I(ot,t,c),(!st||8&c&&tt!==(tt=t[5](t[7].ids)))&&f(s,"image-source",tt)},i(t){st||(k(ot.block),st=!0)},o(t){for(let s=0;s<3;s+=1){const t=ot.blocks[s];v(t)}st=!1},d(t){t&&c(s),ot.block.d(),ot.token=null,ot=null}}}function Q(t){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function U(t){let s,a,e,n=t[8].cast,o=[];for(let l=0;l<n.length;l+=1)o[l]=W(J(t,n,l));const m=t=>v(o[t],1,1,(()=>{o[t]=null}));return{c(){s=r("div"),a=r("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){s=i(t,"DIV",{class:!0});var e=h(s);a=i(e,"DIV",{class:!0});var l=h(a);for(let s=0;s<o.length;s+=1)o[s].l(l);l.forEach(c),e.forEach(c),this.h()},h(){f(a,"class","row w-100 svelte-1qxad2m"),f(s,"class","cast-container container-fluid svelte-1qxad2m")},m(t,c){l(t,s,c),u(s,a);for(let s=0;s<o.length;s+=1)o[s].m(a,null);e=!0},p(t,s){if(16&s){let e;for(n=t[8].cast,e=0;e<n.length;e+=1){const l=J(t,n,e);o[e]?(o[e].p(l,s),k(o[e],1)):(o[e]=W(l),o[e].c(),k(o[e],1),o[e].m(a,null))}for(q(),e=n.length;e<o.length;e+=1)m(e);b()}},i(t){if(!e){for(let t=0;t<n.length;t+=1)k(o[t]);e=!0}},o(t){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)v(o[s]);e=!1},d(t){t&&c(s),M(o,t)}}}function W(t){let s,a,e,o;return a=new H({props:{cast:t[9]}}),{c(){s=r("div"),$(a.$$.fragment),e=n(),this.h()},l(t){s=i(t,"DIV",{class:!0});var l=h(s);D(a.$$.fragment,l),e=m(l),l.forEach(c),this.h()},h(){f(s,"class","p-3  col-md-3 col-lg-2 col-6")},m(t,c){l(t,s,c),V(a,s,null),u(s,e),o=!0},p(t,s){const e={};16&s&&(e.cast=t[9]),a.$set(e)},i(t){o||(k(a.$$.fragment,t),o=!0)},o(t){v(a.$$.fragment,t),o=!1},d(t){t&&c(s),y(a)}}}function X(t){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function Y(t){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function Z(t){let s,a,r,n;const o=[T,R],i=[];function h(t,s){return t[2]?0:1}return s=h(t),a=i[s]=o[s](t),{c(){a.c(),r=e()},l(t){a.l(t),r=e()},m(t,a){i[s].m(t,a),l(t,r,a),n=!0},p(t,[e]){let l=s;s=h(t),s===l?i[s].p(t,e):(q(),v(i[l],1,1,(()=>{i[l]=null})),b(),a=i[s],a?a.p(t,e):(a=i[s]=o[s](t),a.c()),k(a,1),a.m(r.parentNode,r))},i(t){n||(k(a),n=!0)},o(t){v(a),n=!1},d(t){i[s].d(t),t&&c(r)}}}let tt;async function st({page:t,fetch:s,session:a,context:e}){return tt=t.params.movie_id,{status:200}}function at(t,s,a){let e,l,c,r,n;x(t,j,(t=>a(2,e=t))),x(t,L,(t=>a(3,l=t))),x(t,S,(t=>a(4,c=t))),E((()=>{j.set(!0),_(tt),C(tt)}));return[r,n,e,l,c,async t=>{if(t.tmdb){let s=await N(t.tmdb);s.backdrops&&s.backdrops.length&&a(0,r="https://image.tmdb.org/t/p/w780"+s.backdrops[Math.floor(Math.random()*s.backdrops.length)].file_path),s.posters&&s.posters.length&&a(1,n="https://image.tmdb.org/t/p/w342"+s.posters[Math.floor(Math.random()*s.posters.length)].file_path)}}]}export default class extends t{constructor(t){super(),s(this,t,at,Z,a,{})}}export{st as load};