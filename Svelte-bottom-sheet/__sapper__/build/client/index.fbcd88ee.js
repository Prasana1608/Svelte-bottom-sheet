import{S as t,i as s,s as e,e as o,k as r,a as l,b as n,l as a,d as h,u as p,f as c,m as f,o as i,p as u,r as g,n as m,I as d}from"./index.795065f4.js";function v(t,s,e){const o=Object.create(t);return o.post=s[e],o}function b(t){var s,e,u,g,m=t.post.title+"";return{c(){s=o("li"),e=o("a"),u=r(m),this.h()},l(t){s=l(t,"LI",{},!1);var o=n(s);e=l(o,"A",{rel:!0,href:!0},!1);var r=n(e);u=a(r,m),r.forEach(h),o.forEach(h),this.h()},h(){p(e,"rel","prefetch"),p(e,"href",g="blog/"+t.post.slug)},m(t,o){c(t,s,o),f(s,e),f(e,u)},p(t,s){t.posts&&m!==(m=s.post.title+"")&&i(u,m),t.posts&&g!==(g="blog/"+s.post.slug)&&p(e,"href",g)},d(t){t&&h(s)}}}function j(t){var s,e,i,j,x;let E=t.posts,I=[];for(let s=0;s<E.length;s+=1)I[s]=b(v(t,E,s));return{c(){s=u(),e=o("h1"),i=r("Recent posts"),j=u(),x=o("ul");for(let t=0;t<I.length;t+=1)I[t].c();this.h()},l(t){s=g(t),e=l(t,"H1",{},!1);var o=n(e);i=a(o,"Recent posts"),o.forEach(h),j=g(t),x=l(t,"UL",{class:!0},!1);var r=n(x);for(let t=0;t<I.length;t+=1)I[t].l(r);r.forEach(h),this.h()},h(){document.title="Blog",p(x,"class","svelte-1frg2tf")},m(t,o){c(t,s,o),c(t,e,o),f(e,i),c(t,j,o),c(t,x,o);for(let t=0;t<I.length;t+=1)I[t].m(x,null)},p(t,s){if(t.posts){let e;for(E=s.posts,e=0;e<E.length;e+=1){const o=v(s,E,e);I[e]?I[e].p(t,o):(I[e]=b(o),I[e].c(),I[e].m(x,null))}for(;e<I.length;e+=1)I[e].d(1);I.length=E.length}},i:m,o:m,d(t){t&&(h(s),h(e),h(j),h(x)),d(I,t)}}}function x({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function E(t,s,e){let{posts:o}=s;return t.$set=(t=>{"posts"in t&&e("posts",o=t.posts)}),{posts:o}}export default class extends t{constructor(t){super(),s(this,t,E,j,e,["posts"])}}export{x as preload};
