(()=>{var bi=Object.create;var mt=Object.defineProperty;var yi=Object.getOwnPropertyDescriptor;var wi=Object.getOwnPropertyNames;var _i=Object.getPrototypeOf,ki=Object.prototype.hasOwnProperty;var xi=(D,c,p)=>c in D?mt(D,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):D[c]=p;var $i=(D,c)=>()=>(c||D((c={exports:{}}).exports,c),c.exports);var Fi=(D,c,p,m)=>{if(c&&typeof c=="object"||typeof c=="function")for(let b of wi(c))!ki.call(D,b)&&b!==p&&mt(D,b,{get:()=>c[b],enumerable:!(m=yi(c,b))||m.enumerable});return D};var Ei=(D,c,p)=>(p=D!=null?bi(_i(D)):{},Fi(c||!D||!D.__esModule?mt(p,"default",{value:D,enumerable:!0}):p,D));var Oe=(D,c,p)=>(xi(D,typeof c!="symbol"?c+"":c,p),p);var tn=$i((bt,yt)=>{(function(D,c){typeof bt=="object"&&typeof yt<"u"?yt.exports=c():typeof define=="function"&&define.amd?define(c):(D=typeof globalThis<"u"?globalThis:D||self).chroma=c()})(bt,function(){"use strict";for(var D=function(e,t,a){return t===void 0&&(t=0),a===void 0&&(a=1),e<t?t:e>a?a:e},c=D,p={},m=0,b=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];m<b.length;m+=1){var M=b[m];p["[object "+M+"]"]=M.toLowerCase()}var $=function(e){return p[Object.prototype.toString.call(e)]||"object"},L=$,G=$,q=Math.PI,d={clip_rgb:function(e){e._clipped=!1,e._unclipped=e.slice(0);for(var t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=c(e[t],0,255)):t===3&&(e[t]=c(e[t],0,1));return e},limit:D,type:$,unpack:function(e,t){return t===void 0&&(t=null),e.length>=3?Array.prototype.slice.call(e):L(e[0])=="object"&&t?t.split("").filter(function(a){return e[0][a]!==void 0}).map(function(a){return e[0][a]}):e[0]},last:function(e){if(e.length<2)return null;var t=e.length-1;return G(e[t])=="string"?e[t].toLowerCase():null},PI:q,TWOPI:2*q,PITHIRD:q/3,DEG2RAD:q/180,RAD2DEG:180/q},T={format:{},autodetect:[]},an=d.last,nn=d.clip_rgb,xt=d.type,re=T,$t=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=this;if(xt(e[0])==="object"&&e[0].constructor&&e[0].constructor===this.constructor)return e[0];var n=an(e),o=!1;if(!n){o=!0,re.sorted||(re.autodetect=re.autodetect.sort(function(u,f){return f.p-u.p}),re.sorted=!0);for(var i=0,r=re.autodetect;i<r.length;i+=1){var s=r[i];if(n=s.test.apply(s,e))break}}if(!re.format[n])throw new Error("unknown format: "+e);var l=re.format[n].apply(null,o?e:e.slice(0,-1));a._rgb=nn(l),a._rgb.length===3&&a._rgb.push(1)};$t.prototype.toString=function(){return xt(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var F=$t,Ee=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ee.Color,[null].concat(e)))};Ee.Color=F,Ee.version="2.4.2";var j=Ee,rn=d.unpack,Ft=Math.max,on=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=rn(e,"rgb"),n=a[0],o=a[1],i=a[2],r=1-Ft(n/=255,Ft(o/=255,i/=255)),s=r<1?1/(1-r):0,l=(1-n-r)*s,u=(1-o-r)*s,f=(1-i-r)*s;return[l,u,f,r]},sn=d.unpack,ln=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=sn(e,"cmyk"))[0],n=e[1],o=e[2],i=e[3],r=e.length>4?e[4]:1;return i===1?[0,0,0,r]:[a>=1?0:255*(1-a)*(1-i),n>=1?0:255*(1-n)*(1-i),o>=1?0:255*(1-o)*(1-i),r]},cn=j,Et=F,Mt=T,un=d.unpack,fn=d.type,dn=on;Et.prototype.cmyk=function(){return dn(this._rgb)},cn.cmyk=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Et,[null].concat(e,["cmyk"])))},Mt.format.cmyk=ln,Mt.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=un(e,"cmyk"),fn(e)==="array"&&e.length===4)return"cmyk"}});var hn=d.unpack,pn=d.last,Re=function(e){return Math.round(100*e)/100},gn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=hn(e,"hsla"),n=pn(e)||"lsa";return a[0]=Re(a[0]||0),a[1]=Re(100*a[1])+"%",a[2]=Re(100*a[2])+"%",n==="hsla"||a.length>3&&a[3]<1?(a[3]=a.length>3?a[3]:1,n="hsla"):a.length=3,n+"("+a.join(",")+")"},mn=d.unpack,At=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=mn(e,"rgba"))[0],n=e[1],o=e[2];a/=255,n/=255,o/=255;var i,r,s=Math.min(a,n,o),l=Math.max(a,n,o),u=(l+s)/2;return l===s?(i=0,r=Number.NaN):i=u<.5?(l-s)/(l+s):(l-s)/(2-l-s),a==l?r=(n-o)/(l-s):n==l?r=2+(o-a)/(l-s):o==l&&(r=4+(a-n)/(l-s)),(r*=60)<0&&(r+=360),e.length>3&&e[3]!==void 0?[r,i,u,e[3]]:[r,i,u]},vn=d.unpack,bn=d.last,yn=gn,wn=At,Te=Math.round,_n=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=vn(e,"rgba"),n=bn(e)||"rgb";return n.substr(0,3)=="hsl"?yn(wn(a),n):(a[0]=Te(a[0]),a[1]=Te(a[1]),a[2]=Te(a[2]),(n==="rgba"||a.length>3&&a[3]<1)&&(a[3]=a.length>3?a[3]:1,n="rgba"),n+"("+a.slice(0,n==="rgb"?3:4).join(",")+")")},kn=d.unpack,Ge=Math.round,Ct=function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var n,o,i,r=(t=kn(t,"hsl"))[0],s=t[1],l=t[2];if(s===0)n=o=i=255*l;else{var u=[0,0,0],f=[0,0,0],v=l<.5?l*(1+s):l+s-l*s,w=2*l-v,y=r/360;u[0]=y+1/3,u[1]=y,u[2]=y-1/3;for(var g=0;g<3;g++)u[g]<0&&(u[g]+=1),u[g]>1&&(u[g]-=1),6*u[g]<1?f[g]=w+6*(v-w)*u[g]:2*u[g]<1?f[g]=v:3*u[g]<2?f[g]=w+(v-w)*(2/3-u[g])*6:f[g]=w;n=(e=[Ge(255*f[0]),Ge(255*f[1]),Ge(255*f[2])])[0],o=e[1],i=e[2]}return t.length>3?[n,o,i,t[3]]:[n,o,i,1]},Nt=Ct,Dt=T,St=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Pt=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,Bt=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,It=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Ot=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Lt=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Rt=Math.round,Tt=function(e){var t;if(e=e.toLowerCase().trim(),Dt.format.named)try{return Dt.format.named(e)}catch{}if(t=e.match(St)){for(var a=t.slice(1,4),n=0;n<3;n++)a[n]=+a[n];return a[3]=1,a}if(t=e.match(Pt)){for(var o=t.slice(1,5),i=0;i<4;i++)o[i]=+o[i];return o}if(t=e.match(Bt)){for(var r=t.slice(1,4),s=0;s<3;s++)r[s]=Rt(2.55*r[s]);return r[3]=1,r}if(t=e.match(It)){for(var l=t.slice(1,5),u=0;u<3;u++)l[u]=Rt(2.55*l[u]);return l[3]=+l[3],l}if(t=e.match(Ot)){var f=t.slice(1,4);f[1]*=.01,f[2]*=.01;var v=Nt(f);return v[3]=1,v}if(t=e.match(Lt)){var w=t.slice(1,4);w[1]*=.01,w[2]*=.01;var y=Nt(w);return y[3]=+t[4],y}};Tt.test=function(e){return St.test(e)||Pt.test(e)||Bt.test(e)||It.test(e)||Ot.test(e)||Lt.test(e)};var xn=j,Gt=F,qt=T,$n=d.type,Fn=_n,Wt=Tt;Gt.prototype.css=function(e){return Fn(this._rgb,e)},xn.css=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Gt,[null].concat(e,["css"])))},qt.format.css=Wt,qt.autodetect.push({p:5,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&$n(e)==="string"&&Wt.test(e))return"css"}});var jt=F,En=j,Mn=d.unpack;T.format.gl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Mn(e,"rgba");return a[0]*=255,a[1]*=255,a[2]*=255,a},En.gl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(jt,[null].concat(e,["gl"])))},jt.prototype.gl=function(){var e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]};var An=d.unpack,Cn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n=An(e,"rgb"),o=n[0],i=n[1],r=n[2],s=Math.min(o,i,r),l=Math.max(o,i,r),u=l-s,f=100*u/255,v=s/(255-u)*100;return u===0?a=Number.NaN:(o===l&&(a=(i-r)/u),i===l&&(a=2+(r-o)/u),r===l&&(a=4+(o-i)/u),(a*=60)<0&&(a+=360)),[a,f,v]},Nn=d.unpack,Dn=Math.floor,Sn=function(){for(var e,t,a,n,o,i,r=[],s=arguments.length;s--;)r[s]=arguments[s];var l,u,f,v=(r=Nn(r,"hcg"))[0],w=r[1],y=r[2];y*=255;var g=255*w;if(w===0)l=u=f=y;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360);var k=Dn(v/=60),_=v-k,P=y*(1-w),N=P+g*(1-_),W=P+g*_,z=P+g;switch(k){case 0:l=(e=[z,W,P])[0],u=e[1],f=e[2];break;case 1:l=(t=[N,z,P])[0],u=t[1],f=t[2];break;case 2:l=(a=[P,z,W])[0],u=a[1],f=a[2];break;case 3:l=(n=[P,N,z])[0],u=n[1],f=n[2];break;case 4:l=(o=[W,P,z])[0],u=o[1],f=o[2];break;case 5:l=(i=[z,P,N])[0],u=i[1],f=i[2]}}return[l,u,f,r.length>3?r[3]:1]},Pn=d.unpack,Bn=d.type,In=j,Vt=F,zt=T,On=Cn;Vt.prototype.hcg=function(){return On(this._rgb)},In.hcg=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Vt,[null].concat(e,["hcg"])))},zt.format.hcg=Sn,zt.autodetect.push({p:1,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Pn(e,"hcg"),Bn(e)==="array"&&e.length===3)return"hcg"}});var Ln=d.unpack,Rn=d.last,Me=Math.round,Ht=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Ln(e,"rgba"),n=a[0],o=a[1],i=a[2],r=a[3],s=Rn(e)||"auto";r===void 0&&(r=1),s==="auto"&&(s=r<1?"rgba":"rgb");var l=(n=Me(n))<<16|(o=Me(o))<<8|(i=Me(i)),u="000000"+l.toString(16);u=u.substr(u.length-6);var f="0"+Me(255*r).toString(16);switch(f=f.substr(f.length-2),s.toLowerCase()){case"rgba":return"#"+u+f;case"argb":return"#"+f+u;default:return"#"+u}},Tn=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Gn=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Qt=function(e){if(e.match(Tn)){e.length!==4&&e.length!==7||(e=e.substr(1)),e.length===3&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16);return[t>>16,t>>8&255,255&t,1]}if(e.match(Gn)){e.length!==5&&e.length!==9||(e=e.substr(1)),e.length===4&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);var a=parseInt(e,16);return[a>>24&255,a>>16&255,a>>8&255,Math.round((255&a)/255*100)/100]}throw new Error("unknown hex color: "+e)},qn=j,Ut=F,Wn=d.type,Yt=T,jn=Ht;Ut.prototype.hex=function(e){return jn(this._rgb,e)},qn.hex=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ut,[null].concat(e,["hex"])))},Yt.format.hex=Qt,Yt.autodetect.push({p:4,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&Wn(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});var Vn=d.unpack,Jt=d.TWOPI,zn=Math.min,Hn=Math.sqrt,Qn=Math.acos,Un=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n=Vn(e,"rgb"),o=n[0],i=n[1],r=n[2],s=zn(o/=255,i/=255,r/=255),l=(o+i+r)/3,u=l>0?1-s/l:0;return u===0?a=NaN:(a=(o-i+(o-r))/2,a/=Hn((o-i)*(o-i)+(o-r)*(i-r)),a=Qn(a),r>i&&(a=Jt-a),a/=Jt),[360*a,u,l]},Yn=d.unpack,qe=d.limit,ue=d.TWOPI,We=d.PITHIRD,fe=Math.cos,Jn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,o,i=(e=Yn(e,"hsi"))[0],r=e[1],s=e[2];return isNaN(i)&&(i=0),isNaN(r)&&(r=0),i>360&&(i-=360),i<0&&(i+=360),(i/=360)<1/3?n=1-((o=(1-r)/3)+(a=(1+r*fe(ue*i)/fe(We-ue*i))/3)):i<2/3?o=1-((a=(1-r)/3)+(n=(1+r*fe(ue*(i-=1/3))/fe(We-ue*i))/3)):a=1-((n=(1-r)/3)+(o=(1+r*fe(ue*(i-=2/3))/fe(We-ue*i))/3)),[255*(a=qe(s*a*3)),255*(n=qe(s*n*3)),255*(o=qe(s*o*3)),e.length>3?e[3]:1]},Kn=d.unpack,Zn=d.type,Xn=j,Kt=F,Zt=T,er=Un;Kt.prototype.hsi=function(){return er(this._rgb)},Xn.hsi=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Kt,[null].concat(e,["hsi"])))},Zt.format.hsi=Jn,Zt.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Kn(e,"hsi"),Zn(e)==="array"&&e.length===3)return"hsi"}});var tr=d.unpack,ar=d.type,nr=j,Xt=F,ea=T,rr=At;Xt.prototype.hsl=function(){return rr(this._rgb)},nr.hsl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Xt,[null].concat(e,["hsl"])))},ea.format.hsl=Ct,ea.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=tr(e,"hsl"),ar(e)==="array"&&e.length===3)return"hsl"}});var or=d.unpack,ir=Math.min,sr=Math.max,lr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,o,i=(e=or(e,"rgb"))[0],r=e[1],s=e[2],l=ir(i,r,s),u=sr(i,r,s),f=u-l;return o=u/255,u===0?(a=Number.NaN,n=0):(n=f/u,i===u&&(a=(r-s)/f),r===u&&(a=2+(s-i)/f),s===u&&(a=4+(i-r)/f),(a*=60)<0&&(a+=360)),[a,n,o]},cr=d.unpack,ur=Math.floor,fr=function(){for(var e,t,a,n,o,i,r=[],s=arguments.length;s--;)r[s]=arguments[s];var l,u,f,v=(r=cr(r,"hsv"))[0],w=r[1],y=r[2];if(y*=255,w===0)l=u=f=y;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360);var g=ur(v/=60),k=v-g,_=y*(1-w),P=y*(1-w*k),N=y*(1-w*(1-k));switch(g){case 0:l=(e=[y,N,_])[0],u=e[1],f=e[2];break;case 1:l=(t=[P,y,_])[0],u=t[1],f=t[2];break;case 2:l=(a=[_,y,N])[0],u=a[1],f=a[2];break;case 3:l=(n=[_,P,y])[0],u=n[1],f=n[2];break;case 4:l=(o=[N,_,y])[0],u=o[1],f=o[2];break;case 5:l=(i=[y,_,P])[0],u=i[1],f=i[2]}}return[l,u,f,r.length>3?r[3]:1]},dr=d.unpack,hr=d.type,pr=j,ta=F,aa=T,gr=lr;ta.prototype.hsv=function(){return gr(this._rgb)},pr.hsv=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ta,[null].concat(e,["hsv"])))},aa.format.hsv=fr,aa.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=dr(e,"hsv"),hr(e)==="array"&&e.length===3)return"hsv"}});var Ae={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},de=Ae,mr=d.unpack,na=Math.pow,je=function(e){return(e/=255)<=.04045?e/12.92:na((e+.055)/1.055,2.4)},Ve=function(e){return e>de.t3?na(e,1/3):e/de.t2+de.t0},vr=function(e,t,a){return e=je(e),t=je(t),a=je(a),[Ve((.4124564*e+.3575761*t+.1804375*a)/de.Xn),Ve((.2126729*e+.7151522*t+.072175*a)/de.Yn),Ve((.0193339*e+.119192*t+.9503041*a)/de.Zn)]},ra=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=mr(e,"rgb"),n=a[0],o=a[1],i=a[2],r=vr(n,o,i),s=r[0],l=r[1],u=r[2],f=116*l-16;return[f<0?0:f,500*(s-l),200*(l-u)]},he=Ae,br=d.unpack,yr=Math.pow,ze=function(e){return 255*(e<=.00304?12.92*e:1.055*yr(e,1/2.4)-.055)},He=function(e){return e>he.t1?e*e*e:he.t2*(e-he.t0)},oa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,o,i=(e=br(e,"lab"))[0],r=e[1],s=e[2];return n=(i+16)/116,a=isNaN(r)?n:n+r/500,o=isNaN(s)?n:n-s/200,n=he.Yn*He(n),a=he.Xn*He(a),o=he.Zn*He(o),[ze(3.2404542*a-1.5371385*n-.4985314*o),ze(-.969266*a+1.8760108*n+.041556*o),ze(.0556434*a-.2040259*n+1.0572252*o),e.length>3?e[3]:1]},wr=d.unpack,_r=d.type,kr=j,ia=F,sa=T,xr=ra;ia.prototype.lab=function(){return xr(this._rgb)},kr.lab=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ia,[null].concat(e,["lab"])))},sa.format.lab=oa,sa.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=wr(e,"lab"),_r(e)==="array"&&e.length===3)return"lab"}});var $r=d.unpack,Fr=d.RAD2DEG,Er=Math.sqrt,Mr=Math.atan2,Ar=Math.round,la=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=$r(e,"lab"),n=a[0],o=a[1],i=a[2],r=Er(o*o+i*i),s=(Mr(i,o)*Fr+360)%360;return Ar(1e4*r)===0&&(s=Number.NaN),[n,r,s]},Cr=d.unpack,Nr=ra,Dr=la,Sr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Cr(e,"rgb"),n=a[0],o=a[1],i=a[2],r=Nr(n,o,i),s=r[0],l=r[1],u=r[2];return Dr(s,l,u)},Pr=d.unpack,Br=d.DEG2RAD,Ir=Math.sin,Or=Math.cos,ca=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Pr(e,"lch"),n=a[0],o=a[1],i=a[2];return isNaN(i)&&(i=0),[n,Or(i*=Br)*o,Ir(i)*o]},Lr=d.unpack,Rr=ca,Tr=oa,ua=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=Lr(e,"lch"))[0],n=e[1],o=e[2],i=Rr(a,n,o),r=i[0],s=i[1],l=i[2],u=Tr(r,s,l),f=u[0],v=u[1],w=u[2];return[f,v,w,e.length>3?e[3]:1]},Gr=d.unpack,qr=ua,Wr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Gr(e,"hcl").reverse();return qr.apply(void 0,a)},jr=d.unpack,Vr=d.type,fa=j,Ce=F,Qe=T,da=Sr;Ce.prototype.lch=function(){return da(this._rgb)},Ce.prototype.hcl=function(){return da(this._rgb).reverse()},fa.lch=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ce,[null].concat(e,["lch"])))},fa.hcl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ce,[null].concat(e,["hcl"])))},Qe.format.lch=ua,Qe.format.hcl=Wr,["lch","hcl"].forEach(function(e){return Qe.autodetect.push({p:2,test:function(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];if(t=jr(t,e),Vr(t)==="array"&&t.length===3)return e}})});var ha={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},pa=T,zr=d.type,we=ha,Hr=Qt,Qr=Ht;F.prototype.name=function(){for(var e=Qr(this._rgb,"rgb"),t=0,a=Object.keys(we);t<a.length;t+=1){var n=a[t];if(we[n]===e)return n.toLowerCase()}return e},pa.format.named=function(e){if(e=e.toLowerCase(),we[e])return Hr(we[e]);throw new Error("unknown color name: "+e)},pa.autodetect.push({p:5,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&zr(e)==="string"&&we[e.toLowerCase()])return"named"}});var Ur=d.unpack,Yr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Ur(e,"rgb"),n=a[0],o=a[1],i=a[2];return(n<<16)+(o<<8)+i},Jr=d.type,Kr=function(e){if(Jr(e)=="number"&&e>=0&&e<=16777215)return[e>>16,e>>8&255,255&e,1];throw new Error("unknown num color: "+e)},Zr=j,ga=F,ma=T,Xr=d.type,eo=Yr;ga.prototype.num=function(){return eo(this._rgb)},Zr.num=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ga,[null].concat(e,["num"])))},ma.format.num=Kr,ma.autodetect.push({p:5,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e.length===1&&Xr(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});var to=j,Ue=F,va=T,ba=d.unpack,ya=d.type,wa=Math.round;Ue.prototype.rgb=function(e){return e===void 0&&(e=!0),e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(wa)},Ue.prototype.rgba=function(e){return e===void 0&&(e=!0),this._rgb.slice(0,4).map(function(t,a){return a<3?e===!1?t:wa(t):t})},to.rgb=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ue,[null].concat(e,["rgb"])))},va.format.rgb=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=ba(e,"rgba");return a[3]===void 0&&(a[3]=1),a},va.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=ba(e,"rgba"),ya(e)==="array"&&(e.length===3||e.length===4&&ya(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});var Ne=Math.log,_a=function(e){var t,a,n,o=e/100;return o<66?(t=255,a=o<6?0:-155.25485562709179-.44596950469579133*(a=o-2)+104.49216199393888*Ne(a),n=o<20?0:.8274096064007395*(n=o-10)-254.76935184120902+115.67994401066147*Ne(n)):(t=351.97690566805693+.114206453784165*(t=o-55)-40.25366309332127*Ne(t),a=325.4494125711974+.07943456536662342*(a=o-50)-28.0852963507957*Ne(a),n=255),[t,a,n,1]},ao=_a,no=d.unpack,ro=Math.round,oo=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a,n=no(e,"rgb"),o=n[0],i=n[2],r=1e3,s=4e4,l=.4;s-r>l;){var u=ao(a=.5*(s+r));u[2]/u[0]>=i/o?s=a:r=a}return ro(a)},Ye=j,De=F,Je=T,io=oo;De.prototype.temp=De.prototype.kelvin=De.prototype.temperature=function(){return io(this._rgb)},Ye.temp=Ye.kelvin=Ye.temperature=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(De,[null].concat(e,["temp"])))},Je.format.temp=Je.format.kelvin=Je.format.temperature=_a;var so=d.unpack,Ke=Math.cbrt,lo=Math.pow,co=Math.sign,ka=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=so(e,"rgb"),n=a[0],o=a[1],i=a[2],r=[Ze(n/255),Ze(o/255),Ze(i/255)],s=r[0],l=r[1],u=r[2],f=Ke(.4122214708*s+.5363325363*l+.0514459929*u),v=Ke(.2119034982*s+.6806995451*l+.1073969566*u),w=Ke(.0883024619*s+.2817188376*l+.6299787005*u);return[.2104542553*f+.793617785*v-.0040720468*w,1.9779984951*f-2.428592205*v+.4505937099*w,.0259040371*f+.7827717662*v-.808675766*w]};function Ze(e){var t=Math.abs(e);return t<.04045?e/12.92:(co(e)||1)*lo((t+.055)/1.055,2.4)}var uo=d.unpack,Se=Math.pow,fo=Math.sign,xa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=uo(e,"lab"))[0],n=e[1],o=e[2],i=Se(a+.3963377774*n+.2158037573*o,3),r=Se(a-.1055613458*n-.0638541728*o,3),s=Se(a-.0894841775*n-1.291485548*o,3);return[255*Xe(4.0767416621*i-3.3077115913*r+.2309699292*s),255*Xe(-1.2684380046*i+2.6097574011*r-.3413193965*s),255*Xe(-.0041960863*i-.7034186147*r+1.707614701*s),e.length>3?e[3]:1]};function Xe(e){var t=Math.abs(e);return t>.0031308?(fo(e)||1)*(1.055*Se(t,1/2.4)-.055):12.92*e}var ho=d.unpack,po=d.type,go=j,$a=F,Fa=T,mo=ka;$a.prototype.oklab=function(){return mo(this._rgb)},go.oklab=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply($a,[null].concat(e,["oklab"])))},Fa.format.oklab=xa,Fa.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=ho(e,"oklab"),po(e)==="array"&&e.length===3)return"oklab"}});var vo=d.unpack,bo=ka,yo=la,wo=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=vo(e,"rgb"),n=a[0],o=a[1],i=a[2],r=bo(n,o,i),s=r[0],l=r[1],u=r[2];return yo(s,l,u)},_o=d.unpack,ko=ca,xo=xa,$o=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=_o(e,"lch"))[0],n=e[1],o=e[2],i=ko(a,n,o),r=i[0],s=i[1],l=i[2],u=xo(r,s,l),f=u[0],v=u[1],w=u[2];return[f,v,w,e.length>3?e[3]:1]},Fo=d.unpack,Eo=d.type,Mo=j,Ea=F,Ma=T,Ao=wo;Ea.prototype.oklch=function(){return Ao(this._rgb)},Mo.oklch=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ea,[null].concat(e,["oklch"])))},Ma.format.oklch=$o,Ma.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Fo(e,"oklch"),Eo(e)==="array"&&e.length===3)return"oklch"}});var Aa=F,Co=d.type;Aa.prototype.alpha=function(e,t){return t===void 0&&(t=!1),e!==void 0&&Co(e)==="number"?t?(this._rgb[3]=e,this):new Aa([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]},F.prototype.clipped=function(){return this._rgb._clipped||!1};var oe=F,No=Ae;oe.prototype.darken=function(e){e===void 0&&(e=1);var t=this.lab();return t[0]-=No.Kn*e,new oe(t,"lab").alpha(this.alpha(),!0)},oe.prototype.brighten=function(e){return e===void 0&&(e=1),this.darken(-e)},oe.prototype.darker=oe.prototype.darken,oe.prototype.brighter=oe.prototype.brighten,F.prototype.get=function(e){var t=e.split("."),a=t[0],n=t[1],o=this[a]();if(n){var i=a.indexOf(n)-(a.substr(0,2)==="ok"?2:0);if(i>-1)return o[i];throw new Error("unknown channel "+n+" in mode "+a)}return o};var pe=F,Do=d.type,So=Math.pow;pe.prototype.luminance=function(e){if(e!==void 0&&Do(e)==="number"){if(e===0)return new pe([0,0,0,this._rgb[3]],"rgb");if(e===1)return new pe([255,255,255,this._rgb[3]],"rgb");var t=this.luminance(),a=20,n=function(i,r){var s=i.interpolate(r,.5,"rgb"),l=s.luminance();return Math.abs(e-l)<1e-7||!a--?s:l>e?n(i,s):n(s,r)},o=(t>e?n(new pe([0,0,0]),this):n(this,new pe([255,255,255]))).rgb();return new pe(o.concat([this._rgb[3]]))}return Po.apply(void 0,this._rgb.slice(0,3))};var Po=function(e,t,a){return .2126*(e=et(e))+.7152*(t=et(t))+.0722*(a=et(a))},et=function(e){return(e/=255)<=.03928?e/12.92:So((e+.055)/1.055,2.4)},J={},Ca=F,Na=d.type,Pe=J,Da=function(e,t,a){a===void 0&&(a=.5);for(var n=[],o=arguments.length-3;o-- >0;)n[o]=arguments[o+3];var i=n[0]||"lrgb";if(Pe[i]||n.length||(i=Object.keys(Pe)[0]),!Pe[i])throw new Error("interpolation mode "+i+" is not defined");return Na(e)!=="object"&&(e=new Ca(e)),Na(t)!=="object"&&(t=new Ca(t)),Pe[i](e,t,a).alpha(e.alpha()+a*(t.alpha()-e.alpha()))},Sa=F,Bo=Da;Sa.prototype.mix=Sa.prototype.interpolate=function(e,t){t===void 0&&(t=.5);for(var a=[],n=arguments.length-2;n-- >0;)a[n]=arguments[n+2];return Bo.apply(void 0,[this,e,t].concat(a))};var Pa=F;Pa.prototype.premultiply=function(e){e===void 0&&(e=!1);var t=this._rgb,a=t[3];return e?(this._rgb=[t[0]*a,t[1]*a,t[2]*a,a],this):new Pa([t[0]*a,t[1]*a,t[2]*a,a],"rgb")};var tt=F,Io=Ae;tt.prototype.saturate=function(e){e===void 0&&(e=1);var t=this.lch();return t[1]+=Io.Kn*e,t[1]<0&&(t[1]=0),new tt(t,"lch").alpha(this.alpha(),!0)},tt.prototype.desaturate=function(e){return e===void 0&&(e=1),this.saturate(-e)};var Ba=F,Ia=d.type;Ba.prototype.set=function(e,t,a){a===void 0&&(a=!1);var n=e.split("."),o=n[0],i=n[1],r=this[o]();if(i){var s=o.indexOf(i)-(o.substr(0,2)==="ok"?2:0);if(s>-1){if(Ia(t)=="string")switch(t.charAt(0)){case"+":case"-":r[s]+=+t;break;case"*":r[s]*=+t.substr(1);break;case"/":r[s]/=+t.substr(1);break;default:r[s]=+t}else{if(Ia(t)!=="number")throw new Error("unsupported value for Color.set");r[s]=t}var l=new Ba(r,o);return a?(this._rgb=l._rgb,this):l}throw new Error("unknown channel "+i+" in mode "+o)}return r};var Oo=F;J.rgb=function(e,t,a){var n=e._rgb,o=t._rgb;return new Oo(n[0]+a*(o[0]-n[0]),n[1]+a*(o[1]-n[1]),n[2]+a*(o[2]-n[2]),"rgb")};var Lo=F,at=Math.sqrt,ge=Math.pow;J.lrgb=function(e,t,a){var n=e._rgb,o=n[0],i=n[1],r=n[2],s=t._rgb,l=s[0],u=s[1],f=s[2];return new Lo(at(ge(o,2)*(1-a)+ge(l,2)*a),at(ge(i,2)*(1-a)+ge(u,2)*a),at(ge(r,2)*(1-a)+ge(f,2)*a),"rgb")};var Ro=F;J.lab=function(e,t,a){var n=e.lab(),o=t.lab();return new Ro(n[0]+a*(o[0]-n[0]),n[1]+a*(o[1]-n[1]),n[2]+a*(o[2]-n[2]),"lab")};var To=F,me=function(e,t,a,n){var o,i,r,s,l,u,f,v,w,y,g,k,_;return n==="hsl"?(r=e.hsl(),s=t.hsl()):n==="hsv"?(r=e.hsv(),s=t.hsv()):n==="hcg"?(r=e.hcg(),s=t.hcg()):n==="hsi"?(r=e.hsi(),s=t.hsi()):n==="lch"||n==="hcl"?(n="hcl",r=e.hcl(),s=t.hcl()):n==="oklch"&&(r=e.oklch().reverse(),s=t.oklch().reverse()),n.substr(0,1)!=="h"&&n!=="oklch"||(l=(o=r)[0],f=o[1],w=o[2],u=(i=s)[0],v=i[1],y=i[2]),isNaN(l)||isNaN(u)?isNaN(l)?isNaN(u)?k=Number.NaN:(k=u,w!=1&&w!=0||n=="hsv"||(g=v)):(k=l,y!=1&&y!=0||n=="hsv"||(g=f)):k=l+a*(u>l&&u-l>180?u-(l+360):u<l&&l-u>180?u+360-l:u-l),g===void 0&&(g=f+a*(v-f)),_=w+a*(y-w),new To(n==="oklch"?[_,g,k]:[k,g,_],n)},Go=me,Oa=function(e,t,a){return Go(e,t,a,"lch")};J.lch=Oa,J.hcl=Oa;var qo=F;J.num=function(e,t,a){var n=e.num(),o=t.num();return new qo(n+a*(o-n),"num")};var Wo=me;J.hcg=function(e,t,a){return Wo(e,t,a,"hcg")};var jo=me;J.hsi=function(e,t,a){return jo(e,t,a,"hsi")};var Vo=me;J.hsl=function(e,t,a){return Vo(e,t,a,"hsl")};var zo=me;J.hsv=function(e,t,a){return zo(e,t,a,"hsv")};var Ho=F;J.oklab=function(e,t,a){var n=e.oklab(),o=t.oklab();return new Ho(n[0]+a*(o[0]-n[0]),n[1]+a*(o[1]-n[1]),n[2]+a*(o[2]-n[2]),"oklab")};var Qo=me;J.oklch=function(e,t,a){return Qo(e,t,a,"oklch")};var nt=F,Uo=d.clip_rgb,rt=Math.pow,ot=Math.sqrt,it=Math.PI,La=Math.cos,Ra=Math.sin,Yo=Math.atan2,Jo=function(e,t){for(var a=e.length,n=[0,0,0,0],o=0;o<e.length;o++){var i=e[o],r=t[o]/a,s=i._rgb;n[0]+=rt(s[0],2)*r,n[1]+=rt(s[1],2)*r,n[2]+=rt(s[2],2)*r,n[3]+=s[3]*r}return n[0]=ot(n[0]),n[1]=ot(n[1]),n[2]=ot(n[2]),n[3]>.9999999&&(n[3]=1),new nt(Uo(n))},K=j,ve=d.type,Ko=Math.pow,st=function(e){var t="rgb",a=K("#ccc"),n=0,o=[0,1],i=[],r=[0,0],s=!1,l=[],u=!1,f=0,v=1,w=!1,y={},g=!0,k=1,_=function(h){if((h=h||["#fff","#000"])&&ve(h)==="string"&&K.brewer&&K.brewer[h.toLowerCase()]&&(h=K.brewer[h.toLowerCase()]),ve(h)==="array"){h.length===1&&(h=[h[0],h[0]]),h=h.slice(0);for(var x=0;x<h.length;x++)h[x]=K(h[x]);i.length=0;for(var C=0;C<h.length;C++)i.push(C/(h.length-1))}return z(),l=h},P=function(h){return h},N=function(h){return h},W=function(h,x){var C,E;if(x==null&&(x=!1),isNaN(h)||h===null)return a;if(x)E=h;else if(s&&s.length>2){var Q=function(O){if(s!=null){for(var I=s.length-1,U=0;U<I&&O>=s[U];)U++;return U-1}return 0}(h);E=Q/(s.length-2)}else E=v!==f?(h-f)/(v-f):1;E=N(E),x||(E=P(E)),k!==1&&(E=Ko(E,k)),E=r[0]+E*(1-r[0]-r[1]),E=Math.min(1,Math.max(0,E));var R=Math.floor(1e4*E);if(g&&y[R])C=y[R];else{if(ve(l)==="array")for(var B=0;B<i.length;B++){var S=i[B];if(E<=S){C=l[B];break}if(E>=S&&B===i.length-1){C=l[B];break}if(E>S&&E<i[B+1]){E=(E-S)/(i[B+1]-S),C=K.interpolate(l[B],l[B+1],E,t);break}}else ve(l)==="function"&&(C=l(E));g&&(y[R]=C)}return C},z=function(){return y={}};_(e);var A=function(h){var x=K(W(h));return u&&x[u]?x[u]():x};return A.classes=function(h){if(h!=null){if(ve(h)==="array")s=h,o=[h[0],h[h.length-1]];else{var x=K.analyze(o);s=h===0?[x.min,x.max]:K.limits(x,"e",h)}return A}return s},A.domain=function(h){if(!arguments.length)return o;f=h[0],v=h[h.length-1],i=[];var x=l.length;if(h.length===x&&f!==v)for(var C=0,E=Array.from(h);C<E.length;C+=1){var Q=E[C];i.push((Q-f)/(v-f))}else{for(var R=0;R<x;R++)i.push(R/(x-1));if(h.length>2){var B=h.map(function(O,I){return I/(h.length-1)}),S=h.map(function(O){return(O-f)/(v-f)});S.every(function(O,I){return B[I]===O})||(N=function(O){if(O<=0||O>=1)return O;for(var I=0;O>=S[I+1];)I++;var U=(O-S[I])/(S[I+1]-S[I]);return B[I]+U*(B[I+1]-B[I])})}}return o=[f,v],A},A.mode=function(h){return arguments.length?(t=h,z(),A):t},A.range=function(h,x){return _(h),A},A.out=function(h){return u=h,A},A.spread=function(h){return arguments.length?(n=h,A):n},A.correctLightness=function(h){return h==null&&(h=!0),w=h,z(),P=w?function(x){for(var C=W(0,!0).lab()[0],E=W(1,!0).lab()[0],Q=C>E,R=W(x,!0).lab()[0],B=C+(E-C)*x,S=R-B,O=0,I=1,U=20;Math.abs(S)>.01&&U-- >0;)Q&&(S*=-1),S<0?(O=x,x+=.5*(I-x)):(I=x,x+=.5*(O-x)),R=W(x,!0).lab()[0],S=R-B;return x}:function(x){return x},A},A.padding=function(h){return h!=null?(ve(h)==="number"&&(h=[h,h]),r=h,A):r},A.colors=function(h,x){arguments.length<2&&(x="hex");var C=[];if(arguments.length===0)C=l.slice(0);else if(h===1)C=[A(.5)];else if(h>1){var E=o[0],Q=o[1]-E;C=Zo(0,h,!1).map(function(I){return A(E+I/(h-1)*Q)})}else{e=[];var R=[];if(s&&s.length>2)for(var B=1,S=s.length,O=1<=S;O?B<S:B>S;O?B++:B--)R.push(.5*(s[B-1]+s[B]));else R=o;C=R.map(function(I){return A(I)})}return K[x]&&(C=C.map(function(I){return I[x]()})),C},A.cache=function(h){return h!=null?(g=h,A):g},A.gamma=function(h){return h!=null?(k=h,A):k},A.nodata=function(h){return h!=null?(a=K(h),A):a},A};function Zo(e,t,a){for(var n=[],o=e<t,i=a?o?t+1:t-1:t,r=e;o?r<i:r>i;o?r++:r--)n.push(r);return n}var _e=F,Xo=st,lt=j,Z=function(e,t,a){if(!Z[a])throw new Error("unknown blend mode "+a);return Z[a](e,t)},ae=function(e){return function(t,a){var n=lt(a).rgb(),o=lt(t).rgb();return lt.rgb(e(n,o))}},ne=function(e){return function(t,a){var n=[];return n[0]=e(t[0],a[0]),n[1]=e(t[1],a[1]),n[2]=e(t[2],a[2]),n}};Z.normal=ae(ne(function(e){return e})),Z.multiply=ae(ne(function(e,t){return e*t/255})),Z.screen=ae(ne(function(e,t){return 255*(1-(1-e/255)*(1-t/255))})),Z.overlay=ae(ne(function(e,t){return t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255))})),Z.darken=ae(ne(function(e,t){return e>t?t:e})),Z.lighten=ae(ne(function(e,t){return e>t?e:t})),Z.dodge=ae(ne(function(e,t){return e===255||(e=t/255*255/(1-e/255))>255?255:e})),Z.burn=ae(ne(function(e,t){return 255*(1-(1-t/255)/(e/255))}));for(var ei=Z,ct=d.type,ti=d.clip_rgb,ai=d.TWOPI,ni=Math.pow,ri=Math.sin,oi=Math.cos,Ta=j,ii=F,si=Math.floor,li=Math.random,ut=$,Ga=Math.log,ci=Math.pow,ui=Math.floor,fi=Math.abs,qa=function(e,t){t===void 0&&(t=null);var a={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0};return ut(e)==="object"&&(e=Object.values(e)),e.forEach(function(n){t&&ut(n)==="object"&&(n=n[t]),n==null||isNaN(n)||(a.values.push(n),a.sum+=n,n<a.min&&(a.min=n),n>a.max&&(a.max=n),a.count+=1)}),a.domain=[a.min,a.max],a.limits=function(n,o){return Wa(a,n,o)},a},Wa=function(e,t,a){t===void 0&&(t="equal"),a===void 0&&(a=7),ut(e)=="array"&&(e=qa(e));var n=e.min,o=e.max,i=e.values.sort(function(pt,gt){return pt-gt});if(a===1)return[n,o];var r=[];if(t.substr(0,1)==="c"&&(r.push(n),r.push(o)),t.substr(0,1)==="e"){r.push(n);for(var s=1;s<a;s++)r.push(n+s/a*(o-n));r.push(o)}else if(t.substr(0,1)==="l"){if(n<=0)throw new Error("Logarithmic scales are only possible for values > 0");var l=Math.LOG10E*Ga(n),u=Math.LOG10E*Ga(o);r.push(n);for(var f=1;f<a;f++)r.push(ci(10,l+f/a*(u-l)));r.push(o)}else if(t.substr(0,1)==="q"){r.push(n);for(var v=1;v<a;v++){var w=(i.length-1)*v/a,y=ui(w);if(y===w)r.push(i[y]);else{var g=w-y;r.push(i[y]*(1-g)+i[y+1]*g)}}r.push(o)}else if(t.substr(0,1)==="k"){var k,_=i.length,P=new Array(_),N=new Array(a),W=!0,z=0,A=null;(A=[]).push(n);for(var h=1;h<a;h++)A.push(n+h/a*(o-n));for(A.push(o);W;){for(var x=0;x<a;x++)N[x]=0;for(var C=0;C<_;C++)for(var E=i[C],Q=Number.MAX_VALUE,R=void 0,B=0;B<a;B++){var S=fi(A[B]-E);S<Q&&(Q=S,R=B),N[R]++,P[C]=R}for(var O=new Array(a),I=0;I<a;I++)O[I]=null;for(var U=0;U<_;U++)O[k=P[U]]===null?O[k]=i[U]:O[k]+=i[U];for(var ie=0;ie<a;ie++)O[ie]*=1/N[ie];W=!1;for(var se=0;se<a;se++)if(O[se]!==A[se]){W=!0;break}A=O,++z>200&&(W=!1)}for(var le={},ke=0;ke<a;ke++)le[ke]=[];for(var be=0;be<_;be++)le[k=P[be]].push(i[be]);for(var X=[],xe=0;xe<a;xe++)X.push(le[xe][0]),X.push(le[xe][le[xe].length-1]);X=X.sort(function(pt,gt){return pt-gt}),r.push(X[0]);for(var dt=1;dt<X.length;dt+=2){var ht=X[dt];isNaN(ht)||r.indexOf(ht)!==-1||r.push(ht)}}return r},ja={analyze:qa,limits:Wa},Va=F,za=F,te=Math.sqrt,V=Math.pow,di=Math.min,hi=Math.max,Ha=Math.atan2,Qa=Math.abs,Be=Math.cos,Ua=Math.sin,pi=Math.exp,Ya=Math.PI,Ja=F,gi=F,Ka=j,Za=st,mi={cool:function(){return Za([Ka.hsl(180,1,.9),Ka.hsl(250,.7,.4)])},hot:function(){return Za(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Ie={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},ft=0,Xa=Object.keys(Ie);ft<Xa.length;ft+=1){var en=Xa[ft];Ie[en.toLowerCase()]=Ie[en]}var vi=Ie,H=j;return H.average=function(e,t,a){t===void 0&&(t="lrgb"),a===void 0&&(a=null);var n=e.length;a||(a=Array.from(new Array(n)).map(function(){return 1}));var o=n/a.reduce(function(k,_){return k+_});if(a.forEach(function(k,_){a[_]*=o}),e=e.map(function(k){return new nt(k)}),t==="lrgb")return Jo(e,a);for(var i=e.shift(),r=i.get(t),s=[],l=0,u=0,f=0;f<r.length;f++)if(r[f]=(r[f]||0)*a[0],s.push(isNaN(r[f])?0:a[0]),t.charAt(f)==="h"&&!isNaN(r[f])){var v=r[f]/180*it;l+=La(v)*a[0],u+=Ra(v)*a[0]}var w=i.alpha()*a[0];e.forEach(function(k,_){var P=k.get(t);w+=k.alpha()*a[_+1];for(var N=0;N<r.length;N++)if(!isNaN(P[N]))if(s[N]+=a[_+1],t.charAt(N)==="h"){var W=P[N]/180*it;l+=La(W)*a[_+1],u+=Ra(W)*a[_+1]}else r[N]+=P[N]*a[_+1]});for(var y=0;y<r.length;y++)if(t.charAt(y)==="h"){for(var g=Yo(u/s[y],l/s[y])/it*180;g<0;)g+=360;for(;g>=360;)g-=360;r[y]=g}else r[y]=r[y]/s[y];return w/=n,new nt(r,t).alpha(w>.99999?1:w,!0)},H.bezier=function(e){var t=function(a){var n,o,i,r,s,l,u;if((a=a.map(function(g){return new _e(g)})).length===2)n=a.map(function(g){return g.lab()}),s=n[0],l=n[1],r=function(g){var k=[0,1,2].map(function(_){return s[_]+g*(l[_]-s[_])});return new _e(k,"lab")};else if(a.length===3)o=a.map(function(g){return g.lab()}),s=o[0],l=o[1],u=o[2],r=function(g){var k=[0,1,2].map(function(_){return(1-g)*(1-g)*s[_]+2*(1-g)*g*l[_]+g*g*u[_]});return new _e(k,"lab")};else if(a.length===4){var f;i=a.map(function(g){return g.lab()}),s=i[0],l=i[1],u=i[2],f=i[3],r=function(g){var k=[0,1,2].map(function(_){return(1-g)*(1-g)*(1-g)*s[_]+3*(1-g)*(1-g)*g*l[_]+3*(1-g)*g*g*u[_]+g*g*g*f[_]});return new _e(k,"lab")}}else{if(!(a.length>=5))throw new RangeError("No point in running bezier with only one color.");var v,w,y;v=a.map(function(g){return g.lab()}),y=a.length-1,w=function(g){for(var k=[1,1],_=1;_<g;_++){for(var P=[1],N=1;N<=k.length;N++)P[N]=(k[N]||0)+k[N-1];k=P}return k}(y),r=function(g){var k=1-g,_=[0,1,2].map(function(P){return v.reduce(function(N,W,z){return N+w[z]*Math.pow(k,y-z)*Math.pow(g,z)*W[P]},0)});return new _e(_,"lab")}}return r}(e);return t.scale=function(){return Xo(t)},t},H.blend=ei,H.cubehelix=function(e,t,a,n,o){e===void 0&&(e=300),t===void 0&&(t=-1.5),a===void 0&&(a=1),n===void 0&&(n=1),o===void 0&&(o=[0,1]);var i,r=0;ct(o)==="array"?i=o[1]-o[0]:(i=0,o=[o,o]);var s=function(l){var u=ai*((e+120)/360+t*l),f=ni(o[0]+i*l,n),v=(r!==0?a[0]+l*r:a)*f*(1-f)/2,w=oi(u),y=ri(u);return Ta(ti([255*(f+v*(-.14861*w+1.78277*y)),255*(f+v*(-.29227*w-.90649*y)),255*(f+v*(1.97294*w)),1]))};return s.start=function(l){return l==null?e:(e=l,s)},s.rotations=function(l){return l==null?t:(t=l,s)},s.gamma=function(l){return l==null?n:(n=l,s)},s.hue=function(l){return l==null?a:(ct(a=l)==="array"?(r=a[1]-a[0])===0&&(a=a[1]):r=0,s)},s.lightness=function(l){return l==null?o:(ct(l)==="array"?(o=l,i=l[1]-l[0]):(o=[l,l],i=0),s)},s.scale=function(){return Ta.scale(s)},s.hue(a),s},H.mix=H.interpolate=Da,H.random=function(){for(var e="#",t=0;t<6;t++)e+="0123456789abcdef".charAt(si(16*li()));return new ii(e,"hex")},H.scale=st,H.analyze=ja.analyze,H.contrast=function(e,t){e=new Va(e),t=new Va(t);var a=e.luminance(),n=t.luminance();return a>n?(a+.05)/(n+.05):(n+.05)/(a+.05)},H.deltaE=function(e,t,a,n,o){a===void 0&&(a=1),n===void 0&&(n=1),o===void 0&&(o=1);var i=function(X){return 360*X/(2*Ya)},r=function(X){return 2*Ya*X/360};e=new za(e),t=new za(t);var s=Array.from(e.lab()),l=s[0],u=s[1],f=s[2],v=Array.from(t.lab()),w=v[0],y=v[1],g=v[2],k=(l+w)/2,_=(te(V(u,2)+V(f,2))+te(V(y,2)+V(g,2)))/2,P=.5*(1-te(V(_,7)/(V(_,7)+V(25,7)))),N=u*(1+P),W=y*(1+P),z=te(V(N,2)+V(f,2)),A=te(V(W,2)+V(g,2)),h=(z+A)/2,x=i(Ha(f,N)),C=i(Ha(g,W)),E=x>=0?x:x+360,Q=C>=0?C:C+360,R=Qa(E-Q)>180?(E+Q+360)/2:(E+Q)/2,B=1-.17*Be(r(R-30))+.24*Be(r(2*R))+.32*Be(r(3*R+6))-.2*Be(r(4*R-63)),S=Q-E;S=Qa(S)<=180?S:Q<=E?S+360:S-360,S=2*te(z*A)*Ua(r(S)/2);var O=w-l,I=A-z,U=1+.015*V(k-50,2)/te(20+V(k-50,2)),ie=1+.045*h,se=1+.015*h*B,le=30*pi(-V((R-275)/25,2)),ke=-(2*te(V(h,7)/(V(h,7)+V(25,7))))*Ua(2*r(le)),be=te(V(O/(a*U),2)+V(I/(n*ie),2)+V(S/(o*se),2)+ke*(I/(n*ie))*(S/(o*se)));return hi(0,di(100,be))},H.distance=function(e,t,a){a===void 0&&(a="lab"),e=new Ja(e),t=new Ja(t);var n=e.get(a),o=t.get(a),i=0;for(var r in n){var s=(n[r]||0)-(o[r]||0);i+=s*s}return Math.sqrt(i)},H.limits=ja.limits,H.valid=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];try{return new(Function.prototype.bind.apply(gi,[null].concat(e))),!0}catch{return!1}},H.scales=mi,H.colors=ha,H.brewer=vi,H})});var vt=[{key:"black hot",name:"Black hot",steps:[{color:"#F5F5F5",value:0},{color:"#242124",value:1}],type:"relative"},{device_class:"carbon_dioxide",documentation:{text:`<p>CO\u2082 levels reflect the amount of fresh air in a space. High levels
indicate insufficient ventilation. The specific effects of higher
concentrations of CO\u2082 are highly individual, but studies have shown
that levels over 1000 ppm cause cognitive impairment in many
individuals.</p>
<p>Levels over 2000 ppm have been linked to health effects in some
studies. There is no conclusive sum of evidence.</p>
<p>This scale caps at 3000 ppm, as a maximum level that'd signify
fairly bad air. Levels above 5000 ppm are considered dangerous
in workplace standards (f.x OSHA in the US) and are indicative
of greatly insufficient ventilation overall.</p>`},key:"carbon dioxide",name:"CO\u2082, indoor exposure",steps:[{color:"#6d9b17",value:520},{color:"#FFBF00",value:1e3},{color:"#cf0000",value:1400},{color:"#5b0f8c",value:3e3}],type:"absolute"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl bugn",name:"ColorBrewer 5-class BuGn",steps:[{color:"#edf8fb",value:0},{color:"#b2e2e2",value:.25},{color:"#66c2a4",value:.5},{color:"#2ca25f",value:.75},{color:"#006d2c",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl bupu",name:"ColorBrewer 5-class BuPu",steps:[{color:"#edf8fb",value:0},{color:"#b3cde3",value:.25},{color:"#8c96c6",value:.5},{color:"#8856a7",value:.75},{color:"#810f7c",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl rdpu",name:"ColorBrewer 5-class BuPu",steps:[{color:"#feebe2",value:0},{color:"#fbb4b9",value:.25},{color:"#f768a1",value:.5},{color:"#c51b8a",value:.75},{color:"#7a0177",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl ylorbr",name:"ColorBrewer 5-class YlOrBr",steps:[{color:"#ffffd4",value:0},{color:"#fed98e",value:.25},{color:"#fe9929",value:.5},{color:"#d95f0e",value:.75},{color:"#993404",value:1}],type:"relative"},{device_class:"temperature",documentation:{text:`<p>Indoor temperatures related to human comfort levels. Amalgation
of multiple sources. As always with temperature, individual
factors such as generics, clothing and activity level have a big
impact.</p>`},key:"indoor temperature",name:"Indoor temperature",steps:[{color:"#0f3489",value:12},{color:"#595ea3",value:16},{color:"#7374b0",value:18},{color:"#F5F5F5",value:20},{color:"#F5F5F5",value:22},{color:"#ea755a",value:24},{color:"#cf0000",value:28}],type:"absolute",unit:"\xB0C"},{key:"iron red",name:"Iron red",steps:[{color:"#230382",value:0},{color:"#921C96",value:.1},{color:"#C93F55",value:.25},{color:"#DF6D2D",value:.4},{color:"#EFB03D",value:.6},{color:"#F9DE52",value:.75},{color:"#F5F5D4",value:1}],type:"relative"},{device_class:"nitrogen_dioxide",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"nitrogen dioxide eaqi",name:"Nitrogen dioxide (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:40},{color:"#F0E641",legend:"Moderate",value:90},{color:"#FF5050",legend:"Poor",value:120},{color:"#960032",legend:"Very poor",value:230},{color:"#7D2181",legend:"Extremely poor",value:340}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"temperature",documentation:{text:`<p>Outdoor temperatures related to human comfort and risk levels.</p>
<p>Note that this works best when using apparent (or <a href="https://en.wikipedia.org/wiki/Wet-bulb_temperature" rel="noopener" target="_blank">wet bulb</a>)
temperature and taking wind chill into account, not just <a href="https://en.wikipedia.org/wiki/Dry-bulb_temperature" rel="noopener" target="_blank">dry bulb</a>
temperature, such as a like a thermometer reading.</p>
<p>Individual factors such as clothing, activity level, wind speed and
exposure to sun all play a part in how we perceive temperature.
See this is a rough guideline.</p>`},key:"outdoor temperature",name:"Outdoor temperature",steps:[{color:"#0f3489",legend:"Severe risk of frostbite",value:-30},{color:"#595ea3",legend:"Risk of frostbite",value:0},{color:"#7374b0",legend:"Risk of hypothermia",value:10},{color:"#7374b0",legend:"Chilling temperatures",value:15},{color:"#F5F5F5",value:22},{color:"#F5F5F5",value:27},{color:"#ea755a",legend:"Risk of heat cramps or exhaustion",value:32},{color:"#cf0000",legend:"Heat exhaustion more likely",value:40},{color:"#5b0f8c",legend:"Heat stroke risk",value:54}],type:"absolute",unit:"\xB0C"},{device_class:"temperature",documentation:{text:`<p>Temperature scale specifically designed for oceanic climates - regions characterized 
by mild temperatures with rare extremes throughout the year.</p>
<p>Found in areas such as Western Europe, the Pacific Northwest of North America, 
parts of Southern Chile, New Zealand, and other coastal regions under maritime influence.</p>`},key:"outdoor temperature oceanic",name:"Outdoor temperature (Oceanic Climate)",steps:[{color:"#112488",legend:"Exceptionally cold for oceanic climate",value:-10},{color:"#1846A1",legend:"Very cold for oceanic climate",value:-5},{color:"#1F67C0",legend:"Freezing",value:0},{color:"#4CA9D5",legend:"Cold",value:5},{color:"#81DB7D",legend:"Cool",value:10},{color:"#B5DA60",legend:"Mild",value:15},{color:"#E0DD4A",legend:"Pleasant",value:20},{color:"#F98F46",legend:"Warm",value:25},{color:"#F5392A",legend:"Very warm for oceanic climate",value:30},{color:"#BE31B1",legend:"Exceptionally hot for oceanic climate",value:35}],type:"absolute",unit:"\xB0C"},{device_class:"ozone",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"ozone eaqi",name:"Ozone (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:50},{color:"#F0E641",legend:"Moderate",value:100},{color:"#FF5050",legend:"Poor",value:130},{color:"#960032",legend:"Very poor",value:240},{color:"#7D2181",legend:"Extremely poor",value:380}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"pm10",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"pm10 eaqi",name:"PM10 (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:20},{color:"#F0E641",legend:"Moderate",value:40},{color:"#FF5050",legend:"Poor",value:50},{color:"#960032",legend:"Very poor",value:100},{color:"#7D2181",legend:"Extremely poor",value:150}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"pm25",documentation:{text:`<p>This scale is based on an aggregate of the World Health Organization
<a href="https://www.who.int/publications/i/item/9789240034228" rel="noopener" target="_blank">global air quality guidelines</a> 
and <a href="https://www.who.int/publications/i/item/9789240000278" rel="noopener" target="_blank">Personal interventions and risk communication on Air Pollution</a>
reports.</p>
<p>The lowest part of the range map to the AQG (Air Quality Goal)
target, a PM<sub>2.5</sub> level of &lt;5 \u03BCg/m<sup>3</sup> which is considered relatively safe.
The upper part, &gt;100 \u03BCg/m<sup>3</sup>, is considered the level where the 
health benefits of regular physical activity is greatly offset by the
PM<sub>2.5</sub> exposure.</p>
<p>Note that the level of &lt;5 \u03BCg/m<sup>3</sup> is the AQG exposure
level on an annaul basis. The WHO also has a 24-hour AQG level of
&lt;15 \u03BCg/m<sup>3</sup> which is not included in this scale. As we're
trending patterns over time, the annual target made more sense for
the heatmap.</p>`},key:"pm25",name:"PM2.5 (WHO aggregate)",steps:[{color:"#6d9b17",legend:"AQG level",value:5},{color:"#FFBF00",legend:"Interim target 2",value:25},{color:"#cf0000",value:50},{color:"#5b0f8c",legends:"Risk level",value:100}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"pm25",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"pm25 eaqi",name:"PM2.5 (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:10},{color:"#F0E641",legend:"Moderate",value:20},{color:"#FF5050",legend:"Poor",value:25},{color:"#960032",legend:"Very poor",value:50},{color:"#7D2181",legend:"Extremely poor",value:75}],type:"absolute",unit:"\xB5g/m\xB3"},{key:"stoplight",name:"Stoplight",steps:[{color:"#6d9b17",value:0},{color:"#fde74c",value:.5},{color:"#cf0000",value:1}],type:"relative"},{device_class:"sulphur_dioxide",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"sulphur dioxide eaqi",name:"Sulphur dioxide (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:100},{color:"#F0E641",legend:"Moderate",value:200},{color:"#FF5050",legend:"Poor",value:350},{color:"#960032",legend:"Very poor",value:500},{color:"#7D2181",legend:"Extremely poor",value:750}],type:"absolute",unit:"\xB5g/m\xB3"},{key:"white hot",name:"White hot",steps:[{color:"#242124",value:0},{color:"#F5F5F5",value:1}],type:"relative"},{device_class:"temperature",documentation:{license:{name:"Creative Commons Attribution-ShareAlike License 3.0",url:"https://creativecommons.org/licenses/by-sa/3.0/"},text:`<p>Wikipedia's <a href="https://en.wikipedia.org/wiki/Module:Weather" rel="noopener" target="_blank">Weather</a> template temperature graph color scheme, cool2 version.
Slightly modified by setting the minimum to -60\xB0C, instead of -90\xB0C.</p>`},key:"wikipedia climate cool2",name:"Wikipedia climate, cool2",steps:[{color:"#0000A2",value:-60},{color:"#0000D7",value:-43},{color:"#6565FF",value:-24},{color:"#FCFCFF",value:4},{color:"#FF7F00",value:23},{color:"#FF2C00",value:35},{color:"#F60000",value:42},{color:"#000000",value:56}],type:"absolute",unit:"\xB0C"},{device_class:"wind_speed",documentation:{text:`<p>Wind speed scale based on the Beaufort scale, developed in 1805 by Sir Francis Beaufort.</p>
<p>The scale ranges from 0 (Calm) to 12 (Hurricane force) and is the standard 
measurement for maritime and meteorological wind observations worldwide.</p>`},key:"wind speed beaufort",name:"Wind Speed (Beaufort Scale)",steps:[{color:"#FFFFFF",legend:"Calm - Smoke rises vertically",value:0},{color:"#AEF1F9",legend:"Light air - Smoke drift shows direction",value:.3},{color:"#96F7DC",legend:"Light breeze - Leaves rustle, wind vanes move",value:1.6},{color:"#96F7B4",legend:"Gentle breeze - Leaves in constant motion",value:3.4},{color:"#6FF46F",legend:"Moderate breeze - Small branches move",value:5.5},{color:"#73ED12",legend:"Fresh breeze - Small trees sway",value:8},{color:"#A4ED12",legend:"Strong breeze - Large branches move",value:10.8},{color:"#DAED12",legend:"Near gale - Whole trees in motion",value:13.9},{color:"#EDC212",legend:"Gale - Twigs break off trees",value:17.2},{color:"#ED8F12",legend:"Strong gale - Structural damage possible",value:20.8},{color:"#ED6312",legend:"Storm - Trees uprooted",value:24.5},{color:"#ED2912",legend:"Violent storm - Widespread damage",value:28.5},{color:"#D5102D",legend:"Hurricane force - Devastating damage",value:32.7}],type:"absolute",unit:"m/s"}];var ce={apparent_power:{},area:{},atmospheric_pressure:{},aqi:{},battery:{},blood_glucose_concentration:{},carbon_dioxide:{default:"carbon dioxide"},carbon_monoxide:{},conductivity:{},current:{},data_rate:{},data_size:{},date:{},distance:{},duration:{},energy:{},energy_storage:{},enum:{},frequency:{},gas:{},humidity:{},illuminance:{},irradiance:{},moisture:{},monetary:{},nitrogen_dioxide:{},nitrogen_monoxide:{},nitrous_oxide:{},ozone:{},ph:{},pm1:{},pm10:{},pm25:{default:"pm25"},power_factor:{},power:{},precipitation:{},precipitation_intensity:{},pressure:{},reactive_power:{},signal_strength:{},sound_pressure:{},speed:{},sulphur_dioxide:{},temperature:{default:"outdoor temperature",unit_system:"temperature"},timestamp:{},volatile_organic_compounds:{},volatile_organic_compounds_parts:{},voltage:{},volume:{},volume_storage:{},volume_flow_rate:{},water:{},weight:{},wind_speed:{}};var wt=Ei(tn()),Le={temperature:{"\xB0C":{"\xB0F":D=>parseInt(D*1.8+32)},"\xB0F":{"\xB0C":D=>parseInt((D-32)/1.8)}}},ye=class{constructor(){this.default_scale="iron red",this.scale_by_key={};for(let c of vt)this.scale_by_key[c.key]=c}get_scale(c,p="",m={}){if(c===void 0&&(c=this.default_scale),typeof c=="string")return this.generate_scale(this.scale_by_key[c],p,m);var b=this.generate_scale(c,p,m);return delete b.docs,b}generate_scale(c,p=void 0,m={}){let b=JSON.parse(JSON.stringify(c.steps)),M=[],$=[],L=c.unit,G=d=>d;if(c.unit&&p&&m){let d=ce[p].unit_system,T=m[d];d&&T&&c.unit!==T&&Le[d]&&Le[d][c.unit]&&Le[d][c.unit][T]&&(L=T,G=Le[d][c.unit][T])}for(let d of b)M.push(d.color),"value"in d&&(d.value=G(d.value),$.push(d.value));let q;return $.length>0&&$.length===M.length?q=wt.default.scale(M).domain($):q=wt.default.scale(M),{gradient:q,type:c.type??"relative",name:c.name,key:c.key,steps:b,unit:L,docs:c.documentation,css:this.legend_css_by_gradient(q)}}legend_css_by_gradient(c){var p=[];for(let[m,b]of c.colors(21).entries())p.push(`${b} ${m*5}%`);return p.join(", ")}defaults_for(c){return c in ce&&"default"in ce[c]?ce[c].default:this.default_scale}get_by(c,p){var m=vt.filter(b=>b[c]===p);return m.map(b=>this.get_scale(b))}};var _t=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),ee=_t.prototype.html,Ci=_t.prototype.css,$e=class extends _t{last_render_ts=0;scales=new ye;static get properties(){return{hass:{},config:{},grid:[],grid_status:void 0,meta:{},tooltipOpen:!1,selected_element_data:""}}render(){return this.grid===void 0&&(this.grid=[]),ee`
            <ha-card header="${this.meta.title}" id="card">
                <div class="card-content">
                    <table>
                        <thead>
                            <tr class="hr${this.myhass.locale.time_format}">
                                <th class="hm-row-title">${this.myhass.localize("ui.dialogs.helper_settings.input_datetime.date")}</th>
                                ${this.date_table_headers()}
                            </tr>
                        </thead>
                        <tbody>
                    ${this.grid.map((c,p)=>ee`<tr>
                            <td class="hm-row-title">${c.date}</td>
                            ${c.vals.map((m,b)=>{var M="hm-box",$=m;if($===null&&(M+=" null"),this.meta.scale.type==="relative"){let G=this.meta.data.max-this.meta.data.min;$=(m-this.meta.data.min)/G,$<0&&($=0),$>1&&($=1)}let L=this.meta.scale.gradient($);return ee`<td @click="${this.toggle_tooltip}" class="${M}" data-val="${m}" data-row="${p}" data-col="${b}" style="color: ${L}"></td>`})}
                        </tr>`)}
                        </tbody>
                    </table>
                    ${this.render_status()}
                    ${this.render_legend()}
                    ${this.render_tooltip()}
                </div>
            </ha-card>
        `}date_table_headers(){return this.myhass.locale.time_format==="12"?ee`
                <th>12<br/>AM</th><th>·</th><th>·</th><th>·</th><th>4<br/>AM</th><th>·</th><th>·</th><th>·</th>
                <th>8<br/>AM</th><th>·</th><th>·</th><th>·</th><th>12<br/>PM</th><th>·</th><th>·</th><th>·</th>
                <th>4<br/>PM</th><th>·</th><th>·</th><th>·</th><th>8<br/>PM</th><th>·</th><th>·</th><th>11<br/>PM</th>
            `:ee`
                <th>00</th><th>·</th><th>·</th><th>·</th><th>04</th><th>·</th><th>·</th><th>·</th>
                <th>08</th><th>·</th><th>·</th><th>·</th><th>12</th><th>·</th><th>·</th><th>·</th>
                <th>16</th><th>·</th><th>·</th><th>·</th><th>20</th><th>·</th><th>·</th><th>23</th>
            `}render_status(){if(this.grid_status)return ee`<h3>${this.grid_status}</h3>`}render_legend(){if(this.config.display.legend===!1)return;let c=this.legend_scale(this.meta.scale);return ee`
            <div class="legend-container">
                <div id="legend" style="background: linear-gradient(90deg, ${this.meta.scale.css})"></div>
                <div class="tick-container">
                    ${c.map(p=>ee`
                        <div class="legend-tick" style="left: ${p[0]}%;"">
                            <div class="caption">${p[1]} ${this.meta.scale.unit}</div>
                        </div>
                        <span class="legend-shadow">${p[1]} ${this.meta.scale.unit}</span>`)}
                </div>
            </div>
        `}render_tooltip(){var c="";if(this.selected_element_data){let $=this.grid[this.selected_element_data.row]?.date,L=parseInt(this.selected_element_data.col);var p=new Date("2022-03-20 00:00:00").setHours(L),m=new Date("2022-03-20 00:00:00").setHours(L+1),b;this.selected_element_data.val===""?b=this.myhass.localize("ui.components.data-table.no-data"):b=`${+parseFloat(this.selected_element_data.val).toFixed(2)} ${this.meta.scale.unit||this.meta.unit_of_measurement}`;var M=new Intl.DateTimeFormat("sv-SE",{hour:"numeric",minute:"numeric"});this.myhass.locale.time_format=="12"&&(M=new Intl.DateTimeFormat("en-US",{hour:"numeric"})),c=ee`<div class="meta">${$} ${M.format(p)} - ${M.format(m)}</div><div class="value">${b}</div>`}return ee`
            <div id="tooltip" class="${this.tooltipOpen?"active":"hidden"}">${c}</div>
        `}legend_scale(c){var p=[];if(c.type==="relative")for(var m=this.meta.data.max-this.meta.data.min,b=0;b<=5;b++)p.push([b*20,+Number(this.meta.data.min+m/5*b).toFixed(2)]);else{var M=c.steps[0].value,$=c.steps[c.steps.length-1].value,L=$-M;for(let G of c.steps)p.push([(G.value-M)/L*100,G.value])}return p}toggle_tooltip(c){let p=this.renderRoot.querySelector("#selected"),m=this.renderRoot.querySelector("#card"),b=this.renderRoot.querySelector("#tooltip"),M=c.target;if(p&&(p.removeAttribute("id"),p===c.target)){this.tooltipOpen=!1;return}this.tooltipOpen=!0,M.id="selected";var $=M.getBoundingClientRect(),L=m.getBoundingClientRect(),G=$.top-L.top,q=$.left-L.left;b.style.top=(G-50-$.height).toString()+"px",b.style.left=(q-$.width/2-70).toString()+"px",this.selected_element_data=M.dataset}set hass(c){if(!(Date.now()-this.last_render_ts<10*60*1e3)){this.myhass=c,this.meta=this.populate_meta(c);var p=[this.config.entity];this.get_recorder(p,this.config.days),this.last_render_ts=Date.now()}}get_recorder(c,p){let m=new Date;this.grid_status=void 0;var b=new Date(m-p*864e5);b.setHours(23,0,0),this.myhass.callWS({type:"recorder/statistics_during_period",statistic_ids:c,period:"hour",units:{energy:"kWh",temperature:this.myhass.config.unit_system.temperature},start_time:b.toISOString(),types:["sum","mean"]}).then(M=>{for(let $ of c){let L=M[$];if(L===void 0){this.grid=[],this.grid_status=this.myhass.localize("ui.components.data-table.no-data");continue}switch(this.meta.state_class){case"measurement":this.grid=this.calculate_measurement_values(L);break;case"total":case"total_increasing":this.grid=this.calculate_increasing_values(L);break;default:throw new Error(`Unknown state_class defined (${this.meta.state_class} for ${$}.`)}}(this.config.data.max===void 0||this.config.data.max==="auto")&&(this.meta.data.max=this.max_from(this.grid)),(this.config.data.min===void 0||this.config.data.min==="auto")&&(this.meta.data.min=this.min_from(this.grid))})}max_from(c){var p=[];for(let m of c)p=p.concat(m.vals);return Math.max(...p)}min_from(c){var p=[];for(let m of c)p=p.concat(m.vals);return Math.min(...p)}calculate_measurement_values(c){var p=[],m=[],b=null,M;for(let $ of c){let L=new Date($.start);M=L.getHours();let G=L.toLocaleDateString(this.meta.language,{month:"short",day:"2-digit"});G!==b&&b!==null&&(m=Array(24).fill(null),p.push({date:G,nativeDate:L,vals:m})),m[M]=$.mean,b=G}return m.splice(M+1),p.reverse()}calculate_increasing_values(c){var p=[],m=null,b=[],M=null,$;for(let G of c){let q=new Date(G.start);$=q.getHours();let d=q.toLocaleDateString(this.meta.language,{month:"short",day:"2-digit"});if(d!==M&&m!==null&&(b=Array(24).fill(0),p.push({date:d,nativeDate:q,vals:b})),m!==null){var L=(G.sum-m).toFixed(2);b[$]=L}m=G.sum,M=d}return b.splice($+1),p.reverse()}populate_meta(c){let p=c.states[this.config.entity].attributes,m=p.device_class??this.config.device_class;var b={unit_of_measurement:p.unit_of_measurement,state_class:p.state_class,device_class:m,language:c.selectedLanguage??c.language??"en",scale:this.scales.get_scale(this.config.scale??this.scales.defaults_for(m),m,this.myhass.config.unit_system),title:this.config.title??(this.config.title===null?void 0:p.friendly_name),data:{max:this.config.data.max,min:this.config.data.min}};return b}setConfig(c){if(!c.entity)throw new Error("You need to define an entity");if(c.days&&c.days<=0)throw new Error("`days` need to be 1 or higher");if(this.config={title:c.title,days:c.days??21,entity:c.entity,scale:c.scale,data:c.data??{},display:c.display??{}},this.config.data.max!==void 0&&this.config.data.max!=="auto"&&typeof this.config.data.max!="number")throw new Error("`data.max` need to be either `auto` or a number");if(this.config.data.min!==void 0&&this.config.data.min!=="auto"&&typeof this.config.data.min!="number")throw new Error("`data.min` need to be either `auto` or a number");this.last_render_ts=0}getCardSize(){return this.config.days?1+Math.ceil(this.config.days/6):1}static getConfigElement(){return document.createElement("heatmap-card-editor")}};Oe($e,"styles",Ci`
            /* Heatmap table */
            table {
                border: none;
                border-spacing: 0px;
                table-layout:fixed;
                width: 100%;
                pointer-events: none;
                user-drag: none;
                user-select: none;
                color: var(--secondary-text-color);
            }
            th {
                position:relative;
                font-weight: normal;
                vertical-align: bottom;
            }
            th:not(.hm-row-title) {
                text-align: center;
                white-space: nowrap;
            }
            /* Used for 12hr displays; we need space for two lines */
            tr.hr12 th:not(.hm-row-title) {
                font-size: 70%;
            }
            tr {
                line-height: 1.1;
                overflow: hidden;
                font-size: 90%;
            }
            .hm-row-title {
                text-align: left;
                max-height: 20px;
                min-width: 50px;
                width: 50px;
            }
            .hm-box {
                background-color: currentcolor;
                pointer-events: auto;
            }
            #selected {
                outline: 6px currentcolor solid;
                z-index: 2;
                margin: 3px;
                position: relative;
                box-shadow: 0px 0px 0px 7px rgba(0,0,0,1), 0px 0px 0px 8px rgba(255,255,255,1);
            }

            /* Legend */
            .legend-container {
                margin-top: 20px;
                width: 80%;
                margin-left: auto;
                margin-right: 5%;
                position: relative;

            }
            .tick-container {
                position: relative:
                left: -10px;
            }
            #legend {
                height: 10px;
                outline-style: solid;
                outline-width: 1px;
                /*
                    Background is set via the style attribute in the object while rendering,
                    as lit-element and CSS templating is a bit of a PITA.
                */
            }

            .legend-tick {
                position: absolute;
                top: 10px;
                height: 10px;
                vertical-align: bottom;
                border-left-style: solid;
                border-left-width: 1px;
                white-space: nowrap;
                text-align: right;
                opacity: 0.7;
            }

            .legend-container .caption {
                position: relative;
                top: -15px;
                transform: translateY(100%) rotate(90deg);
                transform-origin: center left;
                font-size: 80%;
                text-align: left;
            }

            /*
                We use a non-visible shadow copy of the tick captions
                to get a height for the element. As the ticks themselves
                are position: absolute'd, we can't use their height for
                this purpose without some JS kludging.
            */
            span.legend-shadow {
                margin-top: 15px;
                position: relative;
                border-color: red;
                border-style: solid;
                writing-mode: vertical-rl;
                transform-origin: bottom left;
                font-size: 80%;
                line-height: 0.2;
                visibility: hidden;
            }

            /* Detail view */
            #tooltip {
                display: none;
                z-index: 1;
                position: absolute;
                padding: 6px;
                border-radius: 4px;
                background: var(--ha-card-background, var(--card-background-color, white) );
                border-color: currentcolor;
                border-width: 1px;
                border-style: solid;
                white-space: nowrap;
            }
            #tooltip.active {
                display: block;
            }
            #tooltip div.meta {
                font-size: 90%;
            }
            #tooltip div.value {
                font-size: 120%;
            }
        `);var kt=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),Y=kt.prototype.html,Ni=kt.prototype.css;function Di(D){var c=[D];return c.raw=!0,Y(c)}var Fe=class extends kt{scales=new ye;static get properties(){return{_config:{},active_tab:void 0,entity:void 0,device_class:void 0,scale:void 0}}set hass(c){this.myhass=c}async setConfig(c){this._config=c;var p=await loadCardHelpers();customElements.get("ha-entity-picker")||await(await p.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement(),this.entity=this.myhass.states[this._config.entity],this.device_class=(this.entity&&this.entity.attributes.device_class)??this._config.device_class,this.scale=this.scales.get_scale(this._config.scale),this.active_tab===void 0&&this._config.scale&&(this.active_tab=this.tab_from_scale(this._config.scale))}tab_from_scale(c){return typeof c=="object"?2:this.scales.get_scale(c).type==="relative"?1:0}render_device_class_picker(){let c=Object.keys(ce).map(function(p){return{label:p,value:p}});if(this.entity&&!this.entity.attributes.device_class)return Y`
                <ha-combo-box
                    .label=${"Device class"}
                    .hass=${this.myhass}
                    .configValue=${"device_class"}
                    .items=${c}
                    .value=${this._config.device_class??""}
                    .allowCustomValue=${!1}
                    .helper=${"What device_class best represents this entity?"}
                ></ha-combo-box>
            `}render_scale_docs(c){if(this.scale!==void 0){var p;if(!(this.scale.docs===void 0||this.scale.type!==c))return this.scale.docs?.license&&(p=Y`
                <h4>Scale license</h4>
                <p>
                    This scale is licensed separately from the heatmap card
                    under <a href="${this.scale.docs.license.url}" target="_blank">${this.scale.docs.license.name}</a>.
                </p>
            `),Y`
            <div class="scale-docs">
                <h3>About this scale</h3>
                ${Di(this.scale.docs?.text)}
                ${p}
            </div>
        `}}render_tab_bar(){return this.device_class?Y`
            <mwc-tab-bar
                @MDCTabBar:activated=${p=>{for(let m of this.renderRoot.querySelectorAll(".scale-picker-content"))m.style.display="none";this.renderRoot.querySelector(`#tab-idx-${p.detail.index}`).style.display="block"}}
                .activeIndex=${this.active_tab??0}
            >
                <mwc-tab label="Absolute"></mwc-tab>
                <mwc-tab label="Relative"></mwc-tab>
                <mwc-tab label="Custom"></mwc-tab>
            </mwc-tab-bar>
            <div class="scale-picker-content" id="tab-idx-0">
                ${this.render_absolute_scale_picker()}
                ${this.render_scale_docs("absolute")}
            </div>
            <div class="scale-picker-content" id="tab-idx-1">
                ${this.render_relative_scale_picker()}
                ${this.render_scale_docs("relative")}
            </div>
            <div class="scale-picker-content" id="tab-idx-2">
                <h3>Custom scale</h3>
                <p>There's no GUI support for setting a custom scale; use the code editor.</p>
                <p>See <a href="https://github.com/kandsten/ha-heatmap-card#custom-color-scales">
                the card README</a> for the config reference.</p>
            </div>
        `:void 0}render_absolute_scale_picker(){var c;let p=this.scales.get_by("device_class",this.device_class);return typeof this._config.scale=="object"?c=Y`Using a custom scale, picker disabled`:p.length===0?c=Y`There are no predefined scales for this device class`:c=Y`
                ${p.map(m=>Y`
                    <ha-formfield .label=${m.name} @change=${this.update_field}>
                        <ha-radio
                            .checked=${m.key===this._config.scale}
                            .value=${m.key}
                            .configValue=${"scale"}
                        ></ha-radio>
                    </ha-formfield><br>
                `)}
            `,Y`
            <div>
                <h3>Scales for this device class</h3>
                ${c}
            </div>
        `}render_relative_scale_picker(){var c,p=this.scales.get_by("type","relative").map(function(b){return{label:b.name,value:b.key,css:b.css}});if(typeof this._config.scale=="object")c=Y`Using a custom scale, picker disabled`;else{var m=b=>Y`
            <ha-list-item>
                <div style="display: inline-block; margin-right: 15px; width: 120px; height: 12px; background: linear-gradient(90deg, ${b.css});"></div> ${b.label}
            </ha-list-item>`;c=Y`
                <ha-combo-box
                    .label=${"Scale"}
                    .hass=${this.myhass}
                    .configValue=${"scale"}
                    .items=${p}
                    .value=${this._config.scale}
                    .renderer=${m}
                    .allowCustomValue=${!0}
                > </ha-combo-box>
            `}if(this.entity&&this.device_class)return Y`
                <h3>Color scales</h3>
                    ${c}
                <h3>Range</h3>
                <div>
                    <ha-textfield
                        .label=${"Minimum value"}
                        .value=${this._config.data?.min??"auto"}
                        .placeholder=0
                        .disabled=${this._config.data?.min==="auto"||this._config.data?.min===void 0}
                        .configValue=${"data.min"}
                        @input=${this.update_field}
                        ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.min==="auto"||this._config.data?.min===void 0}
                            .value=${"auto"}
                            .configValue=${"data.min"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                <div>
                    <ha-textfield
                        .label=${"Maximum value"}
                        .value=${this._config.data?.max??"auto"}
                        .disabled=${this._config.data?.max==="auto"||this._config.data?.max===void 0}
                        .configValue=${"data.max"}
                        @input=${this.update_field}
                    ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.max==="auto"||this._config.data?.max===void 0}
                            .value=${"auto"}
                            .configValue=${"data.max"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                `}render_entity_warning(){if(this.entity!==void 0&&(this.entity.attributes?.state_class===void 0||["measurement","total","total_increasing"].includes(this.entity.attributes?.state_class)===!1))return Y`
                    <ha-alert
                        .title=${"Warning"}
                        .type=${"warning"}
                        own-margin
                    >
                        <div>
                            <p>This entity has a <code>state_class</code> attribute set to
                            <i>${this.entity.attributes?.state_class??"undefined"}</i>.</p>
                            <p>This means that data won't be saved to Long Term Statistics, which
                            we use to drive the heatmap; no results will be shown.</p>
                        </div>
                    </ha-alert>
                `}render(){if(!(this.myhass===void 0||this._config===void 0))return Y`
        <div class="root card-config">
            <ha-entity-picker
                .required=${!0}
                .hass=${this.myhass}
                .value=${this._config.entity}
                .configValue=${"entity"}
                .includeDomains=${"sensor"}
            ></ha-entity-picker>
            ${this.render_entity_warning()}
            ${this.render_device_class_picker()}
            <ha-textfield
                .label=${"Days"}
                .placeholder=${21}
                .type=${"number"}
                .value=${this._config.days}
                .configValue=${"days"}
                @input=${this.update_field}
                .helper=${"Days of data to include in the heatmap. Defaults to 21"}
                .helperPersistent=${!0}
            ></ha-textfield>
            ${this.render_tab_bar()}
            <h3>Card elements</h3>
            <ha-textfield
                .label=${"Card title"}
                .placeholder=${this.entity&&this.entity.attributes.friendly_name||""}
                .value=${this._config.title||""}
                .configValue=${"title"}
                @input=${this.update_field}
                ></ha-textfield>
        </div>`}update_field(c){c.stopPropagation();let p=c.target.value;if(this.disabled||p===void 0||p===this.value)return;let m=new Event("value-changed",{bubbles:!0});"checked"in c.target?m.detail={value:c.target.checked===!0?p:0}:isNaN(parseFloat(p))?m.detail={value:p}:m.detail={value:parseFloat(p)},c.target.dispatchEvent(m)}createRenderRoot(){let c=super.createRenderRoot();return c.addEventListener("value-changed",p=>{p.stopPropagation();let m=p.target.configValue,b=p.detail.value;var M=JSON.parse(JSON.stringify(this._config));if(m==="device_class"&&(M.scale=this.scales.defaults_for(b),this.active_tab=this.tab_from_scale(M.scale)),m==="entity"){let q=this.myhass.states[b],d=q&&q.attributes.device_class;d&&(M.scale=this.scales.defaults_for(d),this.active_tab=this.tab_from_scale(M.scale),delete M.device_class)}var $=M,L=m;if(m.indexOf(".")){for(let q of m.split(".").slice(0,-1))$[q]===void 0&&($[q]={}),$=$[q];L=m.split(".").slice(-1)}$[L]=b;let G=new Event("config-changed");G.detail={config:M},this.dispatchEvent(G)}),c}};Oe(Fe,"styles",Ni`
        .root > * {
            display: block;
        }
        .root > *:not([own-margin]):not(:last-child) {
            margin-bottom: 24px;
        }
        ha-alert[own-margin] {
            margin-bottom: 4px;
        }


        a:link, a:visited {
            color: var(--primary-color);
        }

        .scale-docs {
            margin-left: 2em;
            margin-right: 2em;
            word-wrap: break-word;
        }

        /* Don't mess with the line spacing */
        sup, sub {
            line-height: 0;
        }
    `);customElements.define("heatmap-card",$e);customElements.define("heatmap-card-editor",Fe);window.customCards=window.customCards||[];window.customCards.push({type:"heatmap-card",name:"Heatmap card",preview:!0,description:"Heat maps of entities or energy data"});})();
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
