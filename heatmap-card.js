(()=>{var vs=Object.create;var yt=Object.defineProperty;var ys=Object.getOwnPropertyDescriptor;var _s=Object.getOwnPropertyNames;var ws=Object.getPrototypeOf,ks=Object.prototype.hasOwnProperty;var $s=(O,l,h)=>l in O?yt(O,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):O[l]=h;var xs=(O,l)=>()=>(l||O((l={exports:{}}).exports,l),l.exports);var Ms=(O,l,h,m)=>{if(l&&typeof l=="object"||typeof l=="function")for(let b of _s(l))!ks.call(O,b)&&b!==h&&yt(O,b,{get:()=>l[b],enumerable:!(m=ys(l,b))||m.enumerable});return O};var Fs=(O,l,h)=>(h=O!=null?vs(ws(O)):{},Ms(l||!O||!O.__esModule?yt(h,"default",{value:O,enumerable:!0}):h,O));var Ie=(O,l,h)=>($s(O,typeof l!="symbol"?l+"":l,h),h);var nn=xs((wt,kt)=>{(function(O,l){typeof wt=="object"&&typeof kt<"u"?kt.exports=l():typeof define=="function"&&define.amd?define(l):(O=typeof globalThis<"u"?globalThis:O||self).chroma=l()})(wt,function(){"use strict";for(var O=function(e,t,a){return t===void 0&&(t=0),a===void 0&&(a=1),e<t?t:e>a?a:e},l=O,h={},m=0,b=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];m<b.length;m+=1){var M=b[m];h["[object "+M+"]"]=M.toLowerCase()}var F=function(e){return h[Object.prototype.toString.call(e)]||"object"},T=F,E=F,x=Math.PI,p={clip_rgb:function(e){e._clipped=!1,e._unclipped=e.slice(0);for(var t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=l(e[t],0,255)):t===3&&(e[t]=l(e[t],0,1));return e},limit:O,type:F,unpack:function(e,t){return t===void 0&&(t=null),e.length>=3?Array.prototype.slice.call(e):T(e[0])=="object"&&t?t.split("").filter(function(a){return e[0][a]!==void 0}).map(function(a){return e[0][a]}):e[0]},last:function(e){if(e.length<2)return null;var t=e.length-1;return E(e[t])=="string"?e[t].toLowerCase():null},PI:x,TWOPI:2*x,PITHIRD:x/3,DEG2RAD:x/180,RAD2DEG:180/x},q={format:{},autodetect:[]},Te=p.last,je=p.clip_rgb,te=p.type,ie=q,Ft=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=this;if(te(e[0])==="object"&&e[0].constructor&&e[0].constructor===this.constructor)return e[0];var n=Te(e),i=!1;if(!n){i=!0,ie.sorted||(ie.autodetect=ie.autodetect.sort(function(u,f){return f.p-u.p}),ie.sorted=!0);for(var s=0,r=ie.autodetect;s<r.length;s+=1){var o=r[s];if(n=o.test.apply(o,e))break}}if(!ie.format[n])throw new Error("unknown format: "+e);var c=ie.format[n].apply(null,i?e:e.slice(0,-1));a._rgb=je(c),a._rgb.length===3&&a._rgb.push(1)};Ft.prototype.toString=function(){return te(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var C=Ft,Ce=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ce.Color,[null].concat(e)))};Ce.Color=C,Ce.version="2.4.2";var W=Ce,sn=p.unpack,Ct=Math.max,on=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=sn(e,"rgb"),n=a[0],i=a[1],s=a[2],r=1-Ct(n/=255,Ct(i/=255,s/=255)),o=r<1?1/(1-r):0,c=(1-n-r)*o,u=(1-i-r)*o,f=(1-s-r)*o;return[c,u,f,r]},ln=p.unpack,cn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=ln(e,"cmyk"))[0],n=e[1],i=e[2],s=e[3],r=e.length>4?e[4]:1;return s===1?[0,0,0,r]:[a>=1?0:255*(1-a)*(1-s),n>=1?0:255*(1-n)*(1-s),i>=1?0:255*(1-i)*(1-s),r]},un=W,Nt=C,At=q,fn=p.unpack,hn=p.type,dn=on;Nt.prototype.cmyk=function(){return dn(this._rgb)},un.cmyk=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Nt,[null].concat(e,["cmyk"])))},At.format.cmyk=cn,At.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=fn(e,"cmyk"),hn(e)==="array"&&e.length===4)return"cmyk"}});var pn=p.unpack,gn=p.last,qe=function(e){return Math.round(100*e)/100},mn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=pn(e,"hsla"),n=gn(e)||"lsa";return a[0]=qe(a[0]||0),a[1]=qe(100*a[1])+"%",a[2]=qe(100*a[2])+"%",n==="hsla"||a.length>3&&a[3]<1?(a[3]=a.length>3?a[3]:1,n="hsla"):a.length=3,n+"("+a.join(",")+")"},bn=p.unpack,Et=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=bn(e,"rgba"))[0],n=e[1],i=e[2];a/=255,n/=255,i/=255;var s,r,o=Math.min(a,n,i),c=Math.max(a,n,i),u=(c+o)/2;return c===o?(s=0,r=Number.NaN):s=u<.5?(c-o)/(c+o):(c-o)/(2-c-o),a==c?r=(n-i)/(c-o):n==c?r=2+(i-a)/(c-o):i==c&&(r=4+(a-n)/(c-o)),(r*=60)<0&&(r+=360),e.length>3&&e[3]!==void 0?[r,s,u,e[3]]:[r,s,u]},vn=p.unpack,yn=p.last,_n=mn,wn=Et,Ge=Math.round,kn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=vn(e,"rgba"),n=yn(e)||"rgb";return n.substr(0,3)=="hsl"?_n(wn(a),n):(a[0]=Ge(a[0]),a[1]=Ge(a[1]),a[2]=Ge(a[2]),(n==="rgba"||a.length>3&&a[3]<1)&&(a[3]=a.length>3?a[3]:1,n="rgba"),n+"("+a.slice(0,n==="rgb"?3:4).join(",")+")")},$n=p.unpack,We=Math.round,St=function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var n,i,s,r=(t=$n(t,"hsl"))[0],o=t[1],c=t[2];if(o===0)n=i=s=255*c;else{var u=[0,0,0],f=[0,0,0],v=c<.5?c*(1+o):c+o-c*o,_=2*c-v,y=r/360;u[0]=y+1/3,u[1]=y,u[2]=y-1/3;for(var g=0;g<3;g++)u[g]<0&&(u[g]+=1),u[g]>1&&(u[g]-=1),6*u[g]<1?f[g]=_+6*(v-_)*u[g]:2*u[g]<1?f[g]=v:3*u[g]<2?f[g]=_+(v-_)*(2/3-u[g])*6:f[g]=_;n=(e=[We(255*f[0]),We(255*f[1]),We(255*f[2])])[0],i=e[1],s=e[2]}return t.length>3?[n,i,s,t[3]]:[n,i,s,1]},Pt=St,Ot=q,Dt=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Rt=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,Bt=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,It=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Lt=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Tt=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,jt=Math.round,qt=function(e){var t;if(e=e.toLowerCase().trim(),Ot.format.named)try{return Ot.format.named(e)}catch{}if(t=e.match(Dt)){for(var a=t.slice(1,4),n=0;n<3;n++)a[n]=+a[n];return a[3]=1,a}if(t=e.match(Rt)){for(var i=t.slice(1,5),s=0;s<4;s++)i[s]=+i[s];return i}if(t=e.match(Bt)){for(var r=t.slice(1,4),o=0;o<3;o++)r[o]=jt(2.55*r[o]);return r[3]=1,r}if(t=e.match(It)){for(var c=t.slice(1,5),u=0;u<3;u++)c[u]=jt(2.55*c[u]);return c[3]=+c[3],c}if(t=e.match(Lt)){var f=t.slice(1,4);f[1]*=.01,f[2]*=.01;var v=Pt(f);return v[3]=1,v}if(t=e.match(Tt)){var _=t.slice(1,4);_[1]*=.01,_[2]*=.01;var y=Pt(_);return y[3]=+t[4],y}};qt.test=function(e){return Dt.test(e)||Rt.test(e)||Bt.test(e)||It.test(e)||Lt.test(e)||Tt.test(e)};var xn=W,Gt=C,Wt=q,Mn=p.type,Fn=kn,Vt=qt;Gt.prototype.css=function(e){return Fn(this._rgb,e)},xn.css=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Gt,[null].concat(e,["css"])))},Wt.format.css=Vt,Wt.autodetect.push({p:5,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&Mn(e)==="string"&&Vt.test(e))return"css"}});var Ht=C,Cn=W,Nn=p.unpack;q.format.gl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Nn(e,"rgba");return a[0]*=255,a[1]*=255,a[2]*=255,a},Cn.gl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ht,[null].concat(e,["gl"])))},Ht.prototype.gl=function(){var e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]};var An=p.unpack,En=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n=An(e,"rgb"),i=n[0],s=n[1],r=n[2],o=Math.min(i,s,r),c=Math.max(i,s,r),u=c-o,f=100*u/255,v=o/(255-u)*100;return u===0?a=Number.NaN:(i===c&&(a=(s-r)/u),s===c&&(a=2+(r-i)/u),r===c&&(a=4+(i-s)/u),(a*=60)<0&&(a+=360)),[a,f,v]},Sn=p.unpack,Pn=Math.floor,On=function(){for(var e,t,a,n,i,s,r=[],o=arguments.length;o--;)r[o]=arguments[o];var c,u,f,v=(r=Sn(r,"hcg"))[0],_=r[1],y=r[2];y*=255;var g=255*_;if(_===0)c=u=f=y;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360);var k=Pn(v/=60),w=v-k,R=y*(1-_),P=R+g*(1-w),G=R+g*w,H=R+g;switch(k){case 0:c=(e=[H,G,R])[0],u=e[1],f=e[2];break;case 1:c=(t=[P,H,R])[0],u=t[1],f=t[2];break;case 2:c=(a=[R,H,G])[0],u=a[1],f=a[2];break;case 3:c=(n=[R,P,H])[0],u=n[1],f=n[2];break;case 4:c=(i=[G,R,H])[0],u=i[1],f=i[2];break;case 5:c=(s=[H,R,P])[0],u=s[1],f=s[2]}}return[c,u,f,r.length>3?r[3]:1]},Dn=p.unpack,Rn=p.type,Bn=W,zt=C,Ut=q,In=En;zt.prototype.hcg=function(){return In(this._rgb)},Bn.hcg=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(zt,[null].concat(e,["hcg"])))},Ut.format.hcg=On,Ut.autodetect.push({p:1,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Dn(e,"hcg"),Rn(e)==="array"&&e.length===3)return"hcg"}});var Ln=p.unpack,Tn=p.last,Ne=Math.round,Yt=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Ln(e,"rgba"),n=a[0],i=a[1],s=a[2],r=a[3],o=Tn(e)||"auto";r===void 0&&(r=1),o==="auto"&&(o=r<1?"rgba":"rgb");var c=(n=Ne(n))<<16|(i=Ne(i))<<8|(s=Ne(s)),u="000000"+c.toString(16);u=u.substr(u.length-6);var f="0"+Ne(255*r).toString(16);switch(f=f.substr(f.length-2),o.toLowerCase()){case"rgba":return"#"+u+f;case"argb":return"#"+f+u;default:return"#"+u}},jn=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,qn=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Jt=function(e){if(e.match(jn)){e.length!==4&&e.length!==7||(e=e.substr(1)),e.length===3&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16);return[t>>16,t>>8&255,255&t,1]}if(e.match(qn)){e.length!==5&&e.length!==9||(e=e.substr(1)),e.length===4&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);var a=parseInt(e,16);return[a>>24&255,a>>16&255,a>>8&255,Math.round((255&a)/255*100)/100]}throw new Error("unknown hex color: "+e)},Gn=W,Qt=C,Wn=p.type,Kt=q,Vn=Yt;Qt.prototype.hex=function(e){return Vn(this._rgb,e)},Gn.hex=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Qt,[null].concat(e,["hex"])))},Kt.format.hex=Jt,Kt.autodetect.push({p:4,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&Wn(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});var Hn=p.unpack,Zt=p.TWOPI,zn=Math.min,Un=Math.sqrt,Yn=Math.acos,Jn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n=Hn(e,"rgb"),i=n[0],s=n[1],r=n[2],o=zn(i/=255,s/=255,r/=255),c=(i+s+r)/3,u=c>0?1-o/c:0;return u===0?a=NaN:(a=(i-s+(i-r))/2,a/=Un((i-s)*(i-s)+(i-r)*(s-r)),a=Yn(a),r>s&&(a=Zt-a),a/=Zt),[360*a,u,c]},Qn=p.unpack,Ve=p.limit,fe=p.TWOPI,He=p.PITHIRD,he=Math.cos,Kn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,i,s=(e=Qn(e,"hsi"))[0],r=e[1],o=e[2];return isNaN(s)&&(s=0),isNaN(r)&&(r=0),s>360&&(s-=360),s<0&&(s+=360),(s/=360)<1/3?n=1-((i=(1-r)/3)+(a=(1+r*he(fe*s)/he(He-fe*s))/3)):s<2/3?i=1-((a=(1-r)/3)+(n=(1+r*he(fe*(s-=1/3))/he(He-fe*s))/3)):a=1-((n=(1-r)/3)+(i=(1+r*he(fe*(s-=2/3))/he(He-fe*s))/3)),[255*(a=Ve(o*a*3)),255*(n=Ve(o*n*3)),255*(i=Ve(o*i*3)),e.length>3?e[3]:1]},Zn=p.unpack,Xn=p.type,er=W,Xt=C,ea=q,tr=Jn;Xt.prototype.hsi=function(){return tr(this._rgb)},er.hsi=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Xt,[null].concat(e,["hsi"])))},ea.format.hsi=Kn,ea.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Zn(e,"hsi"),Xn(e)==="array"&&e.length===3)return"hsi"}});var ar=p.unpack,nr=p.type,rr=W,ta=C,aa=q,ir=Et;ta.prototype.hsl=function(){return ir(this._rgb)},rr.hsl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ta,[null].concat(e,["hsl"])))},aa.format.hsl=St,aa.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=ar(e,"hsl"),nr(e)==="array"&&e.length===3)return"hsl"}});var sr=p.unpack,or=Math.min,lr=Math.max,cr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,i,s=(e=sr(e,"rgb"))[0],r=e[1],o=e[2],c=or(s,r,o),u=lr(s,r,o),f=u-c;return i=u/255,u===0?(a=Number.NaN,n=0):(n=f/u,s===u&&(a=(r-o)/f),r===u&&(a=2+(o-s)/f),o===u&&(a=4+(s-r)/f),(a*=60)<0&&(a+=360)),[a,n,i]},ur=p.unpack,fr=Math.floor,hr=function(){for(var e,t,a,n,i,s,r=[],o=arguments.length;o--;)r[o]=arguments[o];var c,u,f,v=(r=ur(r,"hsv"))[0],_=r[1],y=r[2];if(y*=255,_===0)c=u=f=y;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360);var g=fr(v/=60),k=v-g,w=y*(1-_),R=y*(1-_*k),P=y*(1-_*(1-k));switch(g){case 0:c=(e=[y,P,w])[0],u=e[1],f=e[2];break;case 1:c=(t=[R,y,w])[0],u=t[1],f=t[2];break;case 2:c=(a=[w,y,P])[0],u=a[1],f=a[2];break;case 3:c=(n=[w,R,y])[0],u=n[1],f=n[2];break;case 4:c=(i=[P,w,y])[0],u=i[1],f=i[2];break;case 5:c=(s=[y,w,R])[0],u=s[1],f=s[2]}}return[c,u,f,r.length>3?r[3]:1]},dr=p.unpack,pr=p.type,gr=W,na=C,ra=q,mr=cr;na.prototype.hsv=function(){return mr(this._rgb)},gr.hsv=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(na,[null].concat(e,["hsv"])))},ra.format.hsv=hr,ra.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=dr(e,"hsv"),pr(e)==="array"&&e.length===3)return"hsv"}});var Ae={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},de=Ae,br=p.unpack,ia=Math.pow,ze=function(e){return(e/=255)<=.04045?e/12.92:ia((e+.055)/1.055,2.4)},Ue=function(e){return e>de.t3?ia(e,1/3):e/de.t2+de.t0},vr=function(e,t,a){return e=ze(e),t=ze(t),a=ze(a),[Ue((.4124564*e+.3575761*t+.1804375*a)/de.Xn),Ue((.2126729*e+.7151522*t+.072175*a)/de.Yn),Ue((.0193339*e+.119192*t+.9503041*a)/de.Zn)]},sa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=br(e,"rgb"),n=a[0],i=a[1],s=a[2],r=vr(n,i,s),o=r[0],c=r[1],u=r[2],f=116*c-16;return[f<0?0:f,500*(o-c),200*(c-u)]},pe=Ae,yr=p.unpack,_r=Math.pow,Ye=function(e){return 255*(e<=.00304?12.92*e:1.055*_r(e,1/2.4)-.055)},Je=function(e){return e>pe.t1?e*e*e:pe.t2*(e-pe.t0)},oa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,i,s=(e=yr(e,"lab"))[0],r=e[1],o=e[2];return n=(s+16)/116,a=isNaN(r)?n:n+r/500,i=isNaN(o)?n:n-o/200,n=pe.Yn*Je(n),a=pe.Xn*Je(a),i=pe.Zn*Je(i),[Ye(3.2404542*a-1.5371385*n-.4985314*i),Ye(-.969266*a+1.8760108*n+.041556*i),Ye(.0556434*a-.2040259*n+1.0572252*i),e.length>3?e[3]:1]},wr=p.unpack,kr=p.type,$r=W,la=C,ca=q,xr=sa;la.prototype.lab=function(){return xr(this._rgb)},$r.lab=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(la,[null].concat(e,["lab"])))},ca.format.lab=oa,ca.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=wr(e,"lab"),kr(e)==="array"&&e.length===3)return"lab"}});var Mr=p.unpack,Fr=p.RAD2DEG,Cr=Math.sqrt,Nr=Math.atan2,Ar=Math.round,ua=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Mr(e,"lab"),n=a[0],i=a[1],s=a[2],r=Cr(i*i+s*s),o=(Nr(s,i)*Fr+360)%360;return Ar(1e4*r)===0&&(o=Number.NaN),[n,r,o]},Er=p.unpack,Sr=sa,Pr=ua,Or=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Er(e,"rgb"),n=a[0],i=a[1],s=a[2],r=Sr(n,i,s),o=r[0],c=r[1],u=r[2];return Pr(o,c,u)},Dr=p.unpack,Rr=p.DEG2RAD,Br=Math.sin,Ir=Math.cos,fa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Dr(e,"lch"),n=a[0],i=a[1],s=a[2];return isNaN(s)&&(s=0),[n,Ir(s*=Rr)*i,Br(s)*i]},Lr=p.unpack,Tr=fa,jr=oa,ha=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=Lr(e,"lch"))[0],n=e[1],i=e[2],s=Tr(a,n,i),r=s[0],o=s[1],c=s[2],u=jr(r,o,c),f=u[0],v=u[1],_=u[2];return[f,v,_,e.length>3?e[3]:1]},qr=p.unpack,Gr=ha,Wr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=qr(e,"hcl").reverse();return Gr.apply(void 0,a)},Vr=p.unpack,Hr=p.type,da=W,Ee=C,Qe=q,pa=Or;Ee.prototype.lch=function(){return pa(this._rgb)},Ee.prototype.hcl=function(){return pa(this._rgb).reverse()},da.lch=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ee,[null].concat(e,["lch"])))},da.hcl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ee,[null].concat(e,["hcl"])))},Qe.format.lch=ha,Qe.format.hcl=Wr,["lch","hcl"].forEach(function(e){return Qe.autodetect.push({p:2,test:function(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];if(t=Vr(t,e),Hr(t)==="array"&&t.length===3)return e}})});var ga={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},ma=q,zr=p.type,we=ga,Ur=Jt,Yr=Yt;C.prototype.name=function(){for(var e=Yr(this._rgb,"rgb"),t=0,a=Object.keys(we);t<a.length;t+=1){var n=a[t];if(we[n]===e)return n.toLowerCase()}return e},ma.format.named=function(e){if(e=e.toLowerCase(),we[e])return Ur(we[e]);throw new Error("unknown color name: "+e)},ma.autodetect.push({p:5,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&zr(e)==="string"&&we[e.toLowerCase()])return"named"}});var Jr=p.unpack,Qr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Jr(e,"rgb"),n=a[0],i=a[1],s=a[2];return(n<<16)+(i<<8)+s},Kr=p.type,Zr=function(e){if(Kr(e)=="number"&&e>=0&&e<=16777215)return[e>>16,e>>8&255,255&e,1];throw new Error("unknown num color: "+e)},Xr=W,ba=C,va=q,ei=p.type,ti=Qr;ba.prototype.num=function(){return ti(this._rgb)},Xr.num=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ba,[null].concat(e,["num"])))},va.format.num=Zr,va.autodetect.push({p:5,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e.length===1&&ei(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});var ai=W,Ke=C,ya=q,_a=p.unpack,wa=p.type,ka=Math.round;Ke.prototype.rgb=function(e){return e===void 0&&(e=!0),e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(ka)},Ke.prototype.rgba=function(e){return e===void 0&&(e=!0),this._rgb.slice(0,4).map(function(t,a){return a<3?e===!1?t:ka(t):t})},ai.rgb=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ke,[null].concat(e,["rgb"])))},ya.format.rgb=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=_a(e,"rgba");return a[3]===void 0&&(a[3]=1),a},ya.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=_a(e,"rgba"),wa(e)==="array"&&(e.length===3||e.length===4&&wa(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});var Se=Math.log,$a=function(e){var t,a,n,i=e/100;return i<66?(t=255,a=i<6?0:-155.25485562709179-.44596950469579133*(a=i-2)+104.49216199393888*Se(a),n=i<20?0:.8274096064007395*(n=i-10)-254.76935184120902+115.67994401066147*Se(n)):(t=351.97690566805693+.114206453784165*(t=i-55)-40.25366309332127*Se(t),a=325.4494125711974+.07943456536662342*(a=i-50)-28.0852963507957*Se(a),n=255),[t,a,n,1]},ni=$a,ri=p.unpack,ii=Math.round,si=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a,n=ri(e,"rgb"),i=n[0],s=n[2],r=1e3,o=4e4,c=.4;o-r>c;){var u=ni(a=.5*(o+r));u[2]/u[0]>=s/i?o=a:r=a}return ii(a)},Ze=W,Pe=C,Xe=q,oi=si;Pe.prototype.temp=Pe.prototype.kelvin=Pe.prototype.temperature=function(){return oi(this._rgb)},Ze.temp=Ze.kelvin=Ze.temperature=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Pe,[null].concat(e,["temp"])))},Xe.format.temp=Xe.format.kelvin=Xe.format.temperature=$a;var li=p.unpack,et=Math.cbrt,ci=Math.pow,ui=Math.sign,xa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=li(e,"rgb"),n=a[0],i=a[1],s=a[2],r=[tt(n/255),tt(i/255),tt(s/255)],o=r[0],c=r[1],u=r[2],f=et(.4122214708*o+.5363325363*c+.0514459929*u),v=et(.2119034982*o+.6806995451*c+.1073969566*u),_=et(.0883024619*o+.2817188376*c+.6299787005*u);return[.2104542553*f+.793617785*v-.0040720468*_,1.9779984951*f-2.428592205*v+.4505937099*_,.0259040371*f+.7827717662*v-.808675766*_]};function tt(e){var t=Math.abs(e);return t<.04045?e/12.92:(ui(e)||1)*ci((t+.055)/1.055,2.4)}var fi=p.unpack,Oe=Math.pow,hi=Math.sign,Ma=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=fi(e,"lab"))[0],n=e[1],i=e[2],s=Oe(a+.3963377774*n+.2158037573*i,3),r=Oe(a-.1055613458*n-.0638541728*i,3),o=Oe(a-.0894841775*n-1.291485548*i,3);return[255*at(4.0767416621*s-3.3077115913*r+.2309699292*o),255*at(-1.2684380046*s+2.6097574011*r-.3413193965*o),255*at(-.0041960863*s-.7034186147*r+1.707614701*o),e.length>3?e[3]:1]};function at(e){var t=Math.abs(e);return t>.0031308?(hi(e)||1)*(1.055*Oe(t,1/2.4)-.055):12.92*e}var di=p.unpack,pi=p.type,gi=W,Fa=C,Ca=q,mi=xa;Fa.prototype.oklab=function(){return mi(this._rgb)},gi.oklab=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Fa,[null].concat(e,["oklab"])))},Ca.format.oklab=Ma,Ca.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=di(e,"oklab"),pi(e)==="array"&&e.length===3)return"oklab"}});var bi=p.unpack,vi=xa,yi=ua,_i=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=bi(e,"rgb"),n=a[0],i=a[1],s=a[2],r=vi(n,i,s),o=r[0],c=r[1],u=r[2];return yi(o,c,u)},wi=p.unpack,ki=fa,$i=Ma,xi=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=wi(e,"lch"))[0],n=e[1],i=e[2],s=ki(a,n,i),r=s[0],o=s[1],c=s[2],u=$i(r,o,c),f=u[0],v=u[1],_=u[2];return[f,v,_,e.length>3?e[3]:1]},Mi=p.unpack,Fi=p.type,Ci=W,Na=C,Aa=q,Ni=_i;Na.prototype.oklch=function(){return Ni(this._rgb)},Ci.oklch=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Na,[null].concat(e,["oklch"])))},Aa.format.oklch=xi,Aa.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Mi(e,"oklch"),Fi(e)==="array"&&e.length===3)return"oklch"}});var Ea=C,Ai=p.type;Ea.prototype.alpha=function(e,t){return t===void 0&&(t=!1),e!==void 0&&Ai(e)==="number"?t?(this._rgb[3]=e,this):new Ea([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]},C.prototype.clipped=function(){return this._rgb._clipped||!1};var se=C,Ei=Ae;se.prototype.darken=function(e){e===void 0&&(e=1);var t=this.lab();return t[0]-=Ei.Kn*e,new se(t,"lab").alpha(this.alpha(),!0)},se.prototype.brighten=function(e){return e===void 0&&(e=1),this.darken(-e)},se.prototype.darker=se.prototype.darken,se.prototype.brighter=se.prototype.brighten,C.prototype.get=function(e){var t=e.split("."),a=t[0],n=t[1],i=this[a]();if(n){var s=a.indexOf(n)-(a.substr(0,2)==="ok"?2:0);if(s>-1)return i[s];throw new Error("unknown channel "+n+" in mode "+a)}return i};var ge=C,Si=p.type,Pi=Math.pow;ge.prototype.luminance=function(e){if(e!==void 0&&Si(e)==="number"){if(e===0)return new ge([0,0,0,this._rgb[3]],"rgb");if(e===1)return new ge([255,255,255,this._rgb[3]],"rgb");var t=this.luminance(),a=20,n=function(s,r){var o=s.interpolate(r,.5,"rgb"),c=o.luminance();return Math.abs(e-c)<1e-7||!a--?o:c>e?n(s,o):n(o,r)},i=(t>e?n(new ge([0,0,0]),this):n(this,new ge([255,255,255]))).rgb();return new ge(i.concat([this._rgb[3]]))}return Oi.apply(void 0,this._rgb.slice(0,3))};var Oi=function(e,t,a){return .2126*(e=nt(e))+.7152*(t=nt(t))+.0722*(a=nt(a))},nt=function(e){return(e/=255)<=.03928?e/12.92:Pi((e+.055)/1.055,2.4)},Q={},Sa=C,Pa=p.type,De=Q,Oa=function(e,t,a){a===void 0&&(a=.5);for(var n=[],i=arguments.length-3;i-- >0;)n[i]=arguments[i+3];var s=n[0]||"lrgb";if(De[s]||n.length||(s=Object.keys(De)[0]),!De[s])throw new Error("interpolation mode "+s+" is not defined");return Pa(e)!=="object"&&(e=new Sa(e)),Pa(t)!=="object"&&(t=new Sa(t)),De[s](e,t,a).alpha(e.alpha()+a*(t.alpha()-e.alpha()))},Da=C,Di=Oa;Da.prototype.mix=Da.prototype.interpolate=function(e,t){t===void 0&&(t=.5);for(var a=[],n=arguments.length-2;n-- >0;)a[n]=arguments[n+2];return Di.apply(void 0,[this,e,t].concat(a))};var Ra=C;Ra.prototype.premultiply=function(e){e===void 0&&(e=!1);var t=this._rgb,a=t[3];return e?(this._rgb=[t[0]*a,t[1]*a,t[2]*a,a],this):new Ra([t[0]*a,t[1]*a,t[2]*a,a],"rgb")};var rt=C,Ri=Ae;rt.prototype.saturate=function(e){e===void 0&&(e=1);var t=this.lch();return t[1]+=Ri.Kn*e,t[1]<0&&(t[1]=0),new rt(t,"lch").alpha(this.alpha(),!0)},rt.prototype.desaturate=function(e){return e===void 0&&(e=1),this.saturate(-e)};var Ba=C,Ia=p.type;Ba.prototype.set=function(e,t,a){a===void 0&&(a=!1);var n=e.split("."),i=n[0],s=n[1],r=this[i]();if(s){var o=i.indexOf(s)-(i.substr(0,2)==="ok"?2:0);if(o>-1){if(Ia(t)=="string")switch(t.charAt(0)){case"+":case"-":r[o]+=+t;break;case"*":r[o]*=+t.substr(1);break;case"/":r[o]/=+t.substr(1);break;default:r[o]=+t}else{if(Ia(t)!=="number")throw new Error("unsupported value for Color.set");r[o]=t}var c=new Ba(r,i);return a?(this._rgb=c._rgb,this):c}throw new Error("unknown channel "+s+" in mode "+i)}return r};var Bi=C;Q.rgb=function(e,t,a){var n=e._rgb,i=t._rgb;return new Bi(n[0]+a*(i[0]-n[0]),n[1]+a*(i[1]-n[1]),n[2]+a*(i[2]-n[2]),"rgb")};var Ii=C,it=Math.sqrt,me=Math.pow;Q.lrgb=function(e,t,a){var n=e._rgb,i=n[0],s=n[1],r=n[2],o=t._rgb,c=o[0],u=o[1],f=o[2];return new Ii(it(me(i,2)*(1-a)+me(c,2)*a),it(me(s,2)*(1-a)+me(u,2)*a),it(me(r,2)*(1-a)+me(f,2)*a),"rgb")};var Li=C;Q.lab=function(e,t,a){var n=e.lab(),i=t.lab();return new Li(n[0]+a*(i[0]-n[0]),n[1]+a*(i[1]-n[1]),n[2]+a*(i[2]-n[2]),"lab")};var Ti=C,be=function(e,t,a,n){var i,s,r,o,c,u,f,v,_,y,g,k,w;return n==="hsl"?(r=e.hsl(),o=t.hsl()):n==="hsv"?(r=e.hsv(),o=t.hsv()):n==="hcg"?(r=e.hcg(),o=t.hcg()):n==="hsi"?(r=e.hsi(),o=t.hsi()):n==="lch"||n==="hcl"?(n="hcl",r=e.hcl(),o=t.hcl()):n==="oklch"&&(r=e.oklch().reverse(),o=t.oklch().reverse()),n.substr(0,1)!=="h"&&n!=="oklch"||(c=(i=r)[0],f=i[1],_=i[2],u=(s=o)[0],v=s[1],y=s[2]),isNaN(c)||isNaN(u)?isNaN(c)?isNaN(u)?k=Number.NaN:(k=u,_!=1&&_!=0||n=="hsv"||(g=v)):(k=c,y!=1&&y!=0||n=="hsv"||(g=f)):k=c+a*(u>c&&u-c>180?u-(c+360):u<c&&c-u>180?u+360-c:u-c),g===void 0&&(g=f+a*(v-f)),w=_+a*(y-_),new Ti(n==="oklch"?[w,g,k]:[k,g,w],n)},ji=be,La=function(e,t,a){return ji(e,t,a,"lch")};Q.lch=La,Q.hcl=La;var qi=C;Q.num=function(e,t,a){var n=e.num(),i=t.num();return new qi(n+a*(i-n),"num")};var Gi=be;Q.hcg=function(e,t,a){return Gi(e,t,a,"hcg")};var Wi=be;Q.hsi=function(e,t,a){return Wi(e,t,a,"hsi")};var Vi=be;Q.hsl=function(e,t,a){return Vi(e,t,a,"hsl")};var Hi=be;Q.hsv=function(e,t,a){return Hi(e,t,a,"hsv")};var zi=C;Q.oklab=function(e,t,a){var n=e.oklab(),i=t.oklab();return new zi(n[0]+a*(i[0]-n[0]),n[1]+a*(i[1]-n[1]),n[2]+a*(i[2]-n[2]),"oklab")};var Ui=be;Q.oklch=function(e,t,a){return Ui(e,t,a,"oklch")};var st=C,Yi=p.clip_rgb,ot=Math.pow,lt=Math.sqrt,ct=Math.PI,Ta=Math.cos,ja=Math.sin,Ji=Math.atan2,Qi=function(e,t){for(var a=e.length,n=[0,0,0,0],i=0;i<e.length;i++){var s=e[i],r=t[i]/a,o=s._rgb;n[0]+=ot(o[0],2)*r,n[1]+=ot(o[1],2)*r,n[2]+=ot(o[2],2)*r,n[3]+=o[3]*r}return n[0]=lt(n[0]),n[1]=lt(n[1]),n[2]=lt(n[2]),n[3]>.9999999&&(n[3]=1),new st(Yi(n))},K=W,ve=p.type,Ki=Math.pow,ut=function(e){var t="rgb",a=K("#ccc"),n=0,i=[0,1],s=[],r=[0,0],o=!1,c=[],u=!1,f=0,v=1,_=!1,y={},g=!0,k=1,w=function(d){if((d=d||["#fff","#000"])&&ve(d)==="string"&&K.brewer&&K.brewer[d.toLowerCase()]&&(d=K.brewer[d.toLowerCase()]),ve(d)==="array"){d.length===1&&(d=[d[0],d[0]]),d=d.slice(0);for(var $=0;$<d.length;$++)d[$]=K(d[$]);s.length=0;for(var S=0;S<d.length;S++)s.push(S/(d.length-1))}return H(),c=d},R=function(d){return d},P=function(d){return d},G=function(d,$){var S,N;if($==null&&($=!1),isNaN(d)||d===null)return a;if($)N=d;else if(o&&o.length>2){var U=function(L){if(o!=null){for(var I=o.length-1,Y=0;Y<I&&L>=o[Y];)Y++;return Y-1}return 0}(d);N=U/(o.length-2)}else N=v!==f?(d-f)/(v-f):1;N=P(N),$||(N=R(N)),k!==1&&(N=Ki(N,k)),N=r[0]+N*(1-r[0]-r[1]),N=Math.min(1,Math.max(0,N));var j=Math.floor(1e4*N);if(g&&y[j])S=y[j];else{if(ve(c)==="array")for(var B=0;B<s.length;B++){var D=s[B];if(N<=D){S=c[B];break}if(N>=D&&B===s.length-1){S=c[B];break}if(N>D&&N<s[B+1]){N=(N-D)/(s[B+1]-D),S=K.interpolate(c[B],c[B+1],N,t);break}}else ve(c)==="function"&&(S=c(N));g&&(y[j]=S)}return S},H=function(){return y={}};w(e);var A=function(d){var $=K(G(d));return u&&$[u]?$[u]():$};return A.classes=function(d){if(d!=null){if(ve(d)==="array")o=d,i=[d[0],d[d.length-1]];else{var $=K.analyze(i);o=d===0?[$.min,$.max]:K.limits($,"e",d)}return A}return o},A.domain=function(d){if(!arguments.length)return i;f=d[0],v=d[d.length-1],s=[];var $=c.length;if(d.length===$&&f!==v)for(var S=0,N=Array.from(d);S<N.length;S+=1){var U=N[S];s.push((U-f)/(v-f))}else{for(var j=0;j<$;j++)s.push(j/($-1));if(d.length>2){var B=d.map(function(L,I){return I/(d.length-1)}),D=d.map(function(L){return(L-f)/(v-f)});D.every(function(L,I){return B[I]===L})||(P=function(L){if(L<=0||L>=1)return L;for(var I=0;L>=D[I+1];)I++;var Y=(L-D[I])/(D[I+1]-D[I]);return B[I]+Y*(B[I+1]-B[I])})}}return i=[f,v],A},A.mode=function(d){return arguments.length?(t=d,H(),A):t},A.range=function(d,$){return w(d),A},A.out=function(d){return u=d,A},A.spread=function(d){return arguments.length?(n=d,A):n},A.correctLightness=function(d){return d==null&&(d=!0),_=d,H(),R=_?function($){for(var S=G(0,!0).lab()[0],N=G(1,!0).lab()[0],U=S>N,j=G($,!0).lab()[0],B=S+(N-S)*$,D=j-B,L=0,I=1,Y=20;Math.abs(D)>.01&&Y-- >0;)U&&(D*=-1),D<0?(L=$,$+=.5*(I-$)):(I=$,$+=.5*(L-$)),j=G($,!0).lab()[0],D=j-B;return $}:function($){return $},A},A.padding=function(d){return d!=null?(ve(d)==="number"&&(d=[d,d]),r=d,A):r},A.colors=function(d,$){arguments.length<2&&($="hex");var S=[];if(arguments.length===0)S=c.slice(0);else if(d===1)S=[A(.5)];else if(d>1){var N=i[0],U=i[1]-N;S=Zi(0,d,!1).map(function(I){return A(N+I/(d-1)*U)})}else{e=[];var j=[];if(o&&o.length>2)for(var B=1,D=o.length,L=1<=D;L?B<D:B>D;L?B++:B--)j.push(.5*(o[B-1]+o[B]));else j=i;S=j.map(function(I){return A(I)})}return K[$]&&(S=S.map(function(I){return I[$]()})),S},A.cache=function(d){return d!=null?(g=d,A):g},A.gamma=function(d){return d!=null?(k=d,A):k},A.nodata=function(d){return d!=null?(a=K(d),A):a},A};function Zi(e,t,a){for(var n=[],i=e<t,s=a?i?t+1:t-1:t,r=e;i?r<s:r>s;i?r++:r--)n.push(r);return n}var ke=C,Xi=ut,ft=W,Z=function(e,t,a){if(!Z[a])throw new Error("unknown blend mode "+a);return Z[a](e,t)},ne=function(e){return function(t,a){var n=ft(a).rgb(),i=ft(t).rgb();return ft.rgb(e(n,i))}},re=function(e){return function(t,a){var n=[];return n[0]=e(t[0],a[0]),n[1]=e(t[1],a[1]),n[2]=e(t[2],a[2]),n}};Z.normal=ne(re(function(e){return e})),Z.multiply=ne(re(function(e,t){return e*t/255})),Z.screen=ne(re(function(e,t){return 255*(1-(1-e/255)*(1-t/255))})),Z.overlay=ne(re(function(e,t){return t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255))})),Z.darken=ne(re(function(e,t){return e>t?t:e})),Z.lighten=ne(re(function(e,t){return e>t?e:t})),Z.dodge=ne(re(function(e,t){return e===255||(e=t/255*255/(1-e/255))>255?255:e})),Z.burn=ne(re(function(e,t){return 255*(1-(1-t/255)/(e/255))}));for(var es=Z,ht=p.type,ts=p.clip_rgb,as=p.TWOPI,ns=Math.pow,rs=Math.sin,is=Math.cos,qa=W,ss=C,os=Math.floor,ls=Math.random,dt=F,Ga=Math.log,cs=Math.pow,us=Math.floor,fs=Math.abs,Wa=function(e,t){t===void 0&&(t=null);var a={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0};return dt(e)==="object"&&(e=Object.values(e)),e.forEach(function(n){t&&dt(n)==="object"&&(n=n[t]),n==null||isNaN(n)||(a.values.push(n),a.sum+=n,n<a.min&&(a.min=n),n>a.max&&(a.max=n),a.count+=1)}),a.domain=[a.min,a.max],a.limits=function(n,i){return Va(a,n,i)},a},Va=function(e,t,a){t===void 0&&(t="equal"),a===void 0&&(a=7),dt(e)=="array"&&(e=Wa(e));var n=e.min,i=e.max,s=e.values.sort(function(bt,vt){return bt-vt});if(a===1)return[n,i];var r=[];if(t.substr(0,1)==="c"&&(r.push(n),r.push(i)),t.substr(0,1)==="e"){r.push(n);for(var o=1;o<a;o++)r.push(n+o/a*(i-n));r.push(i)}else if(t.substr(0,1)==="l"){if(n<=0)throw new Error("Logarithmic scales are only possible for values > 0");var c=Math.LOG10E*Ga(n),u=Math.LOG10E*Ga(i);r.push(n);for(var f=1;f<a;f++)r.push(cs(10,c+f/a*(u-c)));r.push(i)}else if(t.substr(0,1)==="q"){r.push(n);for(var v=1;v<a;v++){var _=(s.length-1)*v/a,y=us(_);if(y===_)r.push(s[y]);else{var g=_-y;r.push(s[y]*(1-g)+s[y+1]*g)}}r.push(i)}else if(t.substr(0,1)==="k"){var k,w=s.length,R=new Array(w),P=new Array(a),G=!0,H=0,A=null;(A=[]).push(n);for(var d=1;d<a;d++)A.push(n+d/a*(i-n));for(A.push(i);G;){for(var $=0;$<a;$++)P[$]=0;for(var S=0;S<w;S++)for(var N=s[S],U=Number.MAX_VALUE,j=void 0,B=0;B<a;B++){var D=fs(A[B]-N);D<U&&(U=D,j=B),P[j]++,R[S]=j}for(var L=new Array(a),I=0;I<a;I++)L[I]=null;for(var Y=0;Y<w;Y++)L[k=R[Y]]===null?L[k]=s[Y]:L[k]+=s[Y];for(var oe=0;oe<a;oe++)L[oe]*=1/P[oe];G=!1;for(var le=0;le<a;le++)if(L[le]!==A[le]){G=!0;break}A=L,++H>200&&(G=!1)}for(var ce={},$e=0;$e<a;$e++)ce[$e]=[];for(var ye=0;ye<w;ye++)ce[k=R[ye]].push(s[ye]);for(var X=[],xe=0;xe<a;xe++)X.push(ce[xe][0]),X.push(ce[xe][ce[xe].length-1]);X=X.sort(function(bt,vt){return bt-vt}),r.push(X[0]);for(var gt=1;gt<X.length;gt+=2){var mt=X[gt];isNaN(mt)||r.indexOf(mt)!==-1||r.push(mt)}}return r},Ha={analyze:Wa,limits:Va},za=C,Ua=C,ae=Math.sqrt,V=Math.pow,hs=Math.min,ds=Math.max,Ya=Math.atan2,Ja=Math.abs,Re=Math.cos,Qa=Math.sin,ps=Math.exp,Ka=Math.PI,Za=C,gs=C,Xa=W,en=ut,ms={cool:function(){return en([Xa.hsl(180,1,.9),Xa.hsl(250,.7,.4)])},hot:function(){return en(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Be={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},pt=0,tn=Object.keys(Be);pt<tn.length;pt+=1){var an=tn[pt];Be[an.toLowerCase()]=Be[an]}var bs=Be,z=W;return z.average=function(e,t,a){t===void 0&&(t="lrgb"),a===void 0&&(a=null);var n=e.length;a||(a=Array.from(new Array(n)).map(function(){return 1}));var i=n/a.reduce(function(k,w){return k+w});if(a.forEach(function(k,w){a[w]*=i}),e=e.map(function(k){return new st(k)}),t==="lrgb")return Qi(e,a);for(var s=e.shift(),r=s.get(t),o=[],c=0,u=0,f=0;f<r.length;f++)if(r[f]=(r[f]||0)*a[0],o.push(isNaN(r[f])?0:a[0]),t.charAt(f)==="h"&&!isNaN(r[f])){var v=r[f]/180*ct;c+=Ta(v)*a[0],u+=ja(v)*a[0]}var _=s.alpha()*a[0];e.forEach(function(k,w){var R=k.get(t);_+=k.alpha()*a[w+1];for(var P=0;P<r.length;P++)if(!isNaN(R[P]))if(o[P]+=a[w+1],t.charAt(P)==="h"){var G=R[P]/180*ct;c+=Ta(G)*a[w+1],u+=ja(G)*a[w+1]}else r[P]+=R[P]*a[w+1]});for(var y=0;y<r.length;y++)if(t.charAt(y)==="h"){for(var g=Ji(u/o[y],c/o[y])/ct*180;g<0;)g+=360;for(;g>=360;)g-=360;r[y]=g}else r[y]=r[y]/o[y];return _/=n,new st(r,t).alpha(_>.99999?1:_,!0)},z.bezier=function(e){var t=function(a){var n,i,s,r,o,c,u;if((a=a.map(function(g){return new ke(g)})).length===2)n=a.map(function(g){return g.lab()}),o=n[0],c=n[1],r=function(g){var k=[0,1,2].map(function(w){return o[w]+g*(c[w]-o[w])});return new ke(k,"lab")};else if(a.length===3)i=a.map(function(g){return g.lab()}),o=i[0],c=i[1],u=i[2],r=function(g){var k=[0,1,2].map(function(w){return(1-g)*(1-g)*o[w]+2*(1-g)*g*c[w]+g*g*u[w]});return new ke(k,"lab")};else if(a.length===4){var f;s=a.map(function(g){return g.lab()}),o=s[0],c=s[1],u=s[2],f=s[3],r=function(g){var k=[0,1,2].map(function(w){return(1-g)*(1-g)*(1-g)*o[w]+3*(1-g)*(1-g)*g*c[w]+3*(1-g)*g*g*u[w]+g*g*g*f[w]});return new ke(k,"lab")}}else{if(!(a.length>=5))throw new RangeError("No point in running bezier with only one color.");var v,_,y;v=a.map(function(g){return g.lab()}),y=a.length-1,_=function(g){for(var k=[1,1],w=1;w<g;w++){for(var R=[1],P=1;P<=k.length;P++)R[P]=(k[P]||0)+k[P-1];k=R}return k}(y),r=function(g){var k=1-g,w=[0,1,2].map(function(R){return v.reduce(function(P,G,H){return P+_[H]*Math.pow(k,y-H)*Math.pow(g,H)*G[R]},0)});return new ke(w,"lab")}}return r}(e);return t.scale=function(){return Xi(t)},t},z.blend=es,z.cubehelix=function(e,t,a,n,i){e===void 0&&(e=300),t===void 0&&(t=-1.5),a===void 0&&(a=1),n===void 0&&(n=1),i===void 0&&(i=[0,1]);var s,r=0;ht(i)==="array"?s=i[1]-i[0]:(s=0,i=[i,i]);var o=function(c){var u=as*((e+120)/360+t*c),f=ns(i[0]+s*c,n),v=(r!==0?a[0]+c*r:a)*f*(1-f)/2,_=is(u),y=rs(u);return qa(ts([255*(f+v*(-.14861*_+1.78277*y)),255*(f+v*(-.29227*_-.90649*y)),255*(f+v*(1.97294*_)),1]))};return o.start=function(c){return c==null?e:(e=c,o)},o.rotations=function(c){return c==null?t:(t=c,o)},o.gamma=function(c){return c==null?n:(n=c,o)},o.hue=function(c){return c==null?a:(ht(a=c)==="array"?(r=a[1]-a[0])===0&&(a=a[1]):r=0,o)},o.lightness=function(c){return c==null?i:(ht(c)==="array"?(i=c,s=c[1]-c[0]):(i=[c,c],s=0),o)},o.scale=function(){return qa.scale(o)},o.hue(a),o},z.mix=z.interpolate=Oa,z.random=function(){for(var e="#",t=0;t<6;t++)e+="0123456789abcdef".charAt(os(16*ls()));return new ss(e,"hex")},z.scale=ut,z.analyze=Ha.analyze,z.contrast=function(e,t){e=new za(e),t=new za(t);var a=e.luminance(),n=t.luminance();return a>n?(a+.05)/(n+.05):(n+.05)/(a+.05)},z.deltaE=function(e,t,a,n,i){a===void 0&&(a=1),n===void 0&&(n=1),i===void 0&&(i=1);var s=function(X){return 360*X/(2*Ka)},r=function(X){return 2*Ka*X/360};e=new Ua(e),t=new Ua(t);var o=Array.from(e.lab()),c=o[0],u=o[1],f=o[2],v=Array.from(t.lab()),_=v[0],y=v[1],g=v[2],k=(c+_)/2,w=(ae(V(u,2)+V(f,2))+ae(V(y,2)+V(g,2)))/2,R=.5*(1-ae(V(w,7)/(V(w,7)+V(25,7)))),P=u*(1+R),G=y*(1+R),H=ae(V(P,2)+V(f,2)),A=ae(V(G,2)+V(g,2)),d=(H+A)/2,$=s(Ya(f,P)),S=s(Ya(g,G)),N=$>=0?$:$+360,U=S>=0?S:S+360,j=Ja(N-U)>180?(N+U+360)/2:(N+U)/2,B=1-.17*Re(r(j-30))+.24*Re(r(2*j))+.32*Re(r(3*j+6))-.2*Re(r(4*j-63)),D=U-N;D=Ja(D)<=180?D:U<=N?D+360:D-360,D=2*ae(H*A)*Qa(r(D)/2);var L=_-c,I=A-H,Y=1+.015*V(k-50,2)/ae(20+V(k-50,2)),oe=1+.045*d,le=1+.015*d*B,ce=30*ps(-V((j-275)/25,2)),$e=-(2*ae(V(d,7)/(V(d,7)+V(25,7))))*Qa(2*r(ce)),ye=ae(V(L/(a*Y),2)+V(I/(n*oe),2)+V(D/(i*le),2)+$e*(I/(n*oe))*(D/(i*le)));return ds(0,hs(100,ye))},z.distance=function(e,t,a){a===void 0&&(a="lab"),e=new Za(e),t=new Za(t);var n=e.get(a),i=t.get(a),s=0;for(var r in n){var o=(n[r]||0)-(i[r]||0);s+=o*o}return Math.sqrt(s)},z.limits=Ha.limits,z.valid=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];try{return new(Function.prototype.bind.apply(gs,[null].concat(e))),!0}catch{return!1}},z.scales=ms,z.colors=ga,z.brewer=bs,z})});var _t=[{key:"black hot",name:"Black hot",steps:[{color:"#F5F5F5",value:0},{color:"#242124",value:1}],type:"relative"},{device_class:"carbon_dioxide",documentation:{text:`<p>CO\u2082 levels reflect the amount of fresh air in a space. High levels
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
impact.</p>`},key:"indoor temperature",name:"Indoor temperature",steps:[{color:"#0f3489",value:12},{color:"#595ea3",value:16},{color:"#7374b0",value:18},{color:"#F5F5F5",value:20},{color:"#F5F5F5",value:22},{color:"#ea755a",value:24},{color:"#cf0000",value:28}],type:"absolute",unit:"\xB0C"},{key:"iron red",name:"Iron red",steps:[{color:"#230382",value:0},{color:"#921C96",value:.1},{color:"#C93F55",value:.25},{color:"#DF6D2D",value:.4},{color:"#EFB03D",value:.6},{color:"#F9DE52",value:.75},{color:"#F5F5D4",value:1}],type:"relative"},{device_class:"temperature",documentation:{text:`<p>Outdoor temperatures related to human comfort and risk levels.</p>
<p>Note that this works best when using apparent (or <a href="https://en.wikipedia.org/wiki/Wet-bulb_temperature" rel="noopener" target="_blank">wet bulb</a>)
temperature and taking wind chill into account, not just <a href="https://en.wikipedia.org/wiki/Dry-bulb_temperature" rel="noopener" target="_blank">dry bulb</a>
temperature, such as a like a thermometer reading.</p>
<p>Individual factors such as clothing, activity level, wind speed and
exposure to sun all play a part in how we perceive temperature.
See this is a rough guideline.</p>`},key:"outdoor temperature",name:"Outdoor temperature",steps:[{color:"#0f3489",legend:"Severe risk of frostbite",value:-30},{color:"#595ea3",legend:"Risk of frostbite",value:0},{color:"#7374b0",legend:"Risk of hypothermia",value:10},{color:"#7374b0",legend:"Chilling temperatures",value:15},{color:"#F5F5F5",value:22},{color:"#F5F5F5",value:27},{color:"#ea755a",legend:"Risk of heat cramps or exhaustion",value:32},{color:"#cf0000",legend:"Heat exhaustion more likely",value:40},{color:"#5b0f8c",legend:"Heat stroke risk",value:54}],type:"absolute",unit:"\xB0C"},{device_class:"pm25",documentation:{text:`<p>This scale is based on an aggregate of the World Health Organization
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
the heatmap.</p>`},key:"pm25",name:"PM2.5 (WHO aggregate)",steps:[{color:"#6d9b17",legend:"AQG level",value:5},{color:"#FFBF00",legend:"Interim target 2",value:25},{color:"#cf0000",value:50},{color:"#5b0f8c",legends:"Risk level",value:100}],type:"absolute",unit:"\xB5g/m\xB3"},{key:"stoplight",name:"Stoplight",steps:[{color:"#6d9b17",value:0},{color:"#fde74c",value:.5},{color:"#cf0000",value:1}],type:"relative"},{key:"white hot",name:"White hot",steps:[{color:"#242124",value:0},{color:"#F5F5F5",value:1}],type:"relative"},{device_class:"temperature",documentation:{license:{name:"Creative Commons Attribution-ShareAlike License 3.0",url:"https://creativecommons.org/licenses/by-sa/3.0/"},text:`<p>Wikipedia's <a href="https://en.wikipedia.org/wiki/Module:Weather" rel="noopener" target="_blank">Weather</a> template temperature graph color scheme, cool2 version.
Slightly modified by setting the minimum to -60\xB0C, instead of -90\xB0C.</p>`},key:"wikipedia climate cool2",name:"Wikipedia climate, cool2",steps:[{color:"#0000A2",value:-60},{color:"#0000D7",value:-43},{color:"#6565FF",value:-24},{color:"#FCFCFF",value:4},{color:"#FF7F00",value:23},{color:"#FF2C00",value:35},{color:"#F60000",value:42},{color:"#000000",value:56}],type:"absolute",unit:"\xB0C"}];var ue={apparent_power:{},atmospheric_pressure:{},aqi:{},battery:{},carbon_dioxide:{default:"carbon dioxide"},carbon_monoxide:{},current:{},date:{},duration:{},energy:{},frequency:{},gas:{},humidity:{},illuminance:{},monetary:{},nitrogen_dioxide:{},nitrogen_monoxide:{},nitrous_oxide:{},ozone:{},pm1:{},pm10:{},pm25:{default:"pm25"},power_factor:{},power:{},pressure:{},reactive_power:{},signal_strength:{},sulphur_dioxide:{},temperature:{default:"outdoor temperature",unit_system:"temperature"},timestamp:{},volatile_organic_compounds:{},voltage:{}};var $t=Fs(nn()),Le={temperature:{"\xB0C":{"\xB0F":O=>parseInt(O*1.8+32)},"\xB0F":{"\xB0C":O=>parseInt((O-32)/1.8)}}},_e=class{constructor(){this.default_scale="iron red",this.scale_by_key={};for(let l of _t)this.scale_by_key[l.key]=l}get_scale(l,h="",m={}){if(l===void 0&&(l=this.default_scale),typeof l=="string")return this.generate_scale(this.scale_by_key[l],h,m);var b=this.generate_scale(l,h,m);return delete b.docs,b}generate_scale(l,h=void 0,m={}){var b=[],M=[],F=l.unit,T=x=>x;if(l.unit&&h&&m){let x=ue[h].unit_system,p=m[x];x&&p&&l.unit!==p&&Le[x]&&Le[x][l.unit]&&Le[x][l.unit][p]&&(F=p,T=Le[x][l.unit][p])}for(let x of l.steps)b.push(x.color),"value"in x&&(x.value=T(x.value),M.push(x.value));var E;return M.length>0&&M.length==b.length?E=$t.default.scale(b).domain(M):E=$t.default.scale(b),{gradient:E,type:l.type??"relative",name:l.name,key:l.key,steps:l.steps,unit:F,docs:l.documentation,css:this.legend_css_by_gradient(E)}}legend_css_by_gradient(l){var h=[];for(let[m,b]of l.colors(21).entries())h.push(`${b} ${m*5}%`);return h.join(", ")}defaults_for(l){return l in ue&&"default"in ue[l]?ue[l].default:this.default_scale}get_by(l,h){var m=_t.filter(b=>b[l]===h);return m.map(b=>this.get_scale(b))}};var xt=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),ee=xt.prototype.html,As=xt.prototype.css,rn=[{recorder:"5minute",steps:12},{recorder:"hour",steps:1}],Me=class extends xt{hass_inited=!1;scales=new _e;static get properties(){return{hass:{},config:{},grid:[],grid_status:void 0,meta:{},tooltipOpen:!1,selected_element_data:""}}period=rn[1];headers=[];render(){return this.grid===void 0&&(this.grid=[]),ee`
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
                    ${this.grid.map((l,h)=>ee`<tr>
                            <td class="hm-row-title">${l.date}</td>
                            ${l.vals.map((m,b)=>{var M="hm-box",F=m;if(F===null&&(M+=" null"),this.meta.scale.type==="relative"){let E=this.meta.data.max-this.meta.data.min;F=(m-this.meta.data.min)/E,F<0&&(F=0),F>1&&(F=1)}let T=this.meta.scale.gradient(F);return ee`<td @click="${this.toggle_tooltip}" class="${M}" data-val="${m}" data-row="${h}" data-col="${b}" style="color: ${T}"></td>`})}
                        </tr>`)}
                        </tbody>
                    </table>
                    ${this.render_status()}
                    ${this.render_legend()}
                    ${this.render_tooltip()}
                </div>
            </ha-card>
        `}date_table_headers(){return this.myhass.locale.time_format==="12"?ee`
                <th colspan="${this.period.steps}">12<br/>AM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">4<br/>AM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th>
                <th colspan="${this.period.steps}">8<br/>AM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">12<br/>PM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th>
                <th colspan="${this.period.steps}">4<br/>PM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">8<br/>PM</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">11<br/>PM</th>
            `:ee`
                <th colspan="${this.period.steps}">00</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">04</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th>
                <th colspan="${this.period.steps}">08</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">12</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th>
                <th colspan="${this.period.steps}">16</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">20</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">·</th><th colspan="${this.period.steps}">23</th>
            `}render_status(){if(this.grid_status)return ee`<h3>${this.grid_status}</h3>`}render_legend(){if(this.config.display.legend===!1)return;let l=this.legend_scale(this.meta.scale);return ee`
            <div class="legend-container">
                <div id="legend" style="background: linear-gradient(90deg, ${this.meta.scale.css})"></div>
                <div class="tick-container">
                    ${l.map(h=>ee`
                        <div class="legend-tick" style="left: ${h[0]}%;"">
                            <div class="caption">${h[1]} ${this.meta.scale.unit}</div>
                        </div>
                        <span class="legend-shadow">${h[1]} ${this.meta.scale.unit}</span>`)}
                </div>
            </div>
        `}render_tooltip(){var l="";if(this.selected_element_data){let F=this.grid[this.selected_element_data.row]?.date,E=parseInt(this.selected_element_data.col)*Math.round(60/this.period.steps);var h=new Date("2022-03-20 00:00:00").setMinutes(E),m=new Date("2022-03-20 00:00:00").setMinutes(E+Math.round(60/this.period.steps)),b;this.selected_element_data.val===""?b=this.myhass.localize("ui.components.data-table.no-data"):b=`${+parseFloat(this.selected_element_data.val).toFixed(2)} ${this.meta.scale.unit||this.meta.unit_of_measurement}`;var M=new Intl.DateTimeFormat("sv-SE",{hour:"numeric",minute:"numeric"});this.myhass.locale.time_format=="12"&&(M=new Intl.DateTimeFormat("en-US",{hour:"numeric"})),l=ee`<div class="meta">${F} ${M.format(h)} - ${M.format(m)}</div><div class="value">${b}</div>`}return ee`
            <div id="tooltip" class="${this.tooltipOpen?"active":"hidden"}">${l}</div>
        `}legend_scale(l){var h=[];if(l.type==="relative")for(var m=this.meta.data.max-this.meta.data.min,b=0;b<=5;b++)h.push([b*20,+Number(this.meta.data.min+m/5*b).toFixed(2)]);else{var M=l.steps[0].value,F=l.steps[l.steps.length-1].value,T=F-M;for(let E of l.steps)h.push([(E.value-M)/T*100,E.value])}return h}toggle_tooltip(l){let h=this.renderRoot.querySelector("#selected"),m=this.renderRoot.querySelector("#card"),b=this.renderRoot.querySelector("#tooltip"),M=l.target;if(h&&(h.removeAttribute("id"),h===l.target)){this.tooltipOpen=!1;return}this.tooltipOpen=!0,M.id="selected";var F=M.getBoundingClientRect(),T=m.getBoundingClientRect(),E=F.top-T.top,x=F.left-T.left;b.style.top=(E-50-F.height).toString()+"px",b.style.left=(x-F.width/2-70).toString()+"px",this.selected_element_data=M.dataset}set hass(l){if(this.hass_inited!==!0){this.myhass=l,this.meta=this.populate_meta(l),this.meta.high_res=="true"&&(this.period=rn[0]);var h=[this.config.entity];this.get_recorder(h,this.config.days),this.hass_inited=!0}}get_recorder(l,h){let m=new Date;this.grid_status=void 0;var b=new Date(m-h*864e5);b.setHours(23,0,0),this.myhass.callWS({type:"recorder/statistics_during_period",statistic_ids:l,period:this.period.recorder,units:{energy:"kWh",temperature:this.myhass.config.unit_system.temperature},start_time:b.toISOString(),types:["sum","mean"]}).then(M=>{for(let F of l){let T=M[F];if(T===void 0){this.grid=[],this.grid_status=this.myhass.localize("ui.components.data-table.no-data");continue}switch(this.meta.state_class){case"measurement":this.grid=this.calculate_measurement_values(T);break;case"total":case"total_increasing":this.grid=this.calculate_increasing_values(T);break;default:throw new Error(`Unknown state_class defined (${this.meta.state_class} for ${F}.`)}}(this.config.data.max===void 0||this.config.data.max==="auto")&&(this.meta.data.max=this.max_from(this.grid)),(this.config.data.min===void 0||this.config.data.min==="auto")&&(this.meta.data.min=this.min_from(this.grid))})}max_from(l){var h=[];for(let m of l)h=h.concat(m.vals);return Math.max(...h)}min_from(l){var h=[];for(let m of l)h=h.concat(m.vals);return Math.min(...h)}calculate_measurement_values(l){var h=[],m=[],b=null,M,F=Math.round(60/this.period.steps);for(let T of l){let E=new Date(T.start);M=E.getHours()*this.period.steps+Math.round(E.getMinutes()/F);let x=E.toLocaleDateString(this.meta.language,{month:"short",day:"2-digit"});x!==b&&b!==null&&(m=Array(24*this.period.steps).fill(null),h.push({date:x,nativeDate:E,vals:m})),m[M]=T.mean,b=x}return m.splice(M+1),h.reverse()}calculate_increasing_values(l){var h=[],m=null,b=[],M=null,F,T=Math.round(60/this.period.steps);this.meta.smoothing&&(l=this.smooth_consumer_data(l));for(let x of l){let p=new Date(x.start);F=p.getHours()*this.period.steps+Math.round(p.getMinutes()/T);let q=p.toLocaleDateString(this.meta.language,{month:"short",day:"2-digit"});if(q!==M&&m!==null&&(b=Array(24*this.period.steps).fill(0),h.push({date:q,nativeDate:p,vals:b})),m!==null){var E=(x.sum-m).toFixed(2);b[F]=E}m=x.sum,M=q}return b.splice(F+1),h.reverse()}smooth_consumer_data(l){let h=JSON.parse(JSON.stringify(l)),m=l[l.length-1].sum-l[0].sum,b=[],M=0;for(let E=1;E<l.length;E++)l[E].sum!==l[M].sum&&(b.push({start:M,end:E-1}),M=E);b.push({start:M,end:l.length-1});let F=l[0].sum;for(let E=0;E<b.length-1;E++){let x=b[E],p=l[b[E+1].start].sum,q=p-F,Te=x.end-x.start+1,je=q/Te;for(let te=x.start;te<=x.end;te++)h[te].sum=F+je*(te-x.start),h[te].sum=Math.round(h[te].sum*100)/100;F=p}let T=h[h.length-1].sum-h[0].sum;if(Math.abs(m-T)>.01)throw new Error("Total change over time is not maintained.");return h}populate_meta(l){let h=l.states[this.config.entity].attributes,m=h.device_class??this.config.device_class;var b={unit_of_measurement:h.unit_of_measurement,state_class:h.state_class,device_class:m,language:l.selectedLanguage??l.language??"en",scale:this.scales.get_scale(this.config.scale??this.scales.defaults_for(m),m,this.myhass.config.unit_system),title:this.config.title??(this.config.title===null?void 0:h.friendly_name),data:{max:this.config.data.max,min:this.config.data.min},smoothing:this.config.smoothing,high_res:this.config.high_res};return b}setConfig(l){if(!l.entity)throw new Error("You need to define an entity");if(l.days&&l.days<=0)throw new Error("`days` need to be 1 or higher");if(this.config={title:l.title,days:l.days??21,entity:l.entity,scale:l.scale,data:l.data??{},display:l.display??{},smoothing:l.smoothing??!1,high_res:l.high_res??!1},this.config.data.max!==void 0&&this.config.data.max!=="auto"&&typeof this.config.data.max!="number")throw new Error("`data.max` need to be either `auto` or a number");if(this.config.data.min!==void 0&&this.config.data.min!=="auto"&&typeof this.config.data.min!="number")throw new Error("`data.min` need to be either `auto` or a number");this.hass_inited=!1}getCardSize(){return this.config.days?1+Math.ceil(this.config.days/6):1}static getConfigElement(){return document.createElement("heatmap-card-editor")}};Ie(Me,"styles",As`
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
        `);var Mt=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),J=Mt.prototype.html,Es=Mt.prototype.css;function Ss(O){var l=[O];return l.raw=!0,J(l)}var Fe=class extends Mt{scales=new _e;static get properties(){return{_config:{},active_tab:void 0,entity:void 0,device_class:void 0,scale:void 0}}set hass(l){this.myhass=l}async setConfig(l){this._config=l;var h=await loadCardHelpers();customElements.get("ha-entity-picker")||await(await h.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement(),this.entity=this.myhass.states[this._config.entity],this.device_class=(this.entity&&this.entity.attributes.device_class)??this._config.device_class,this.scale=this.scales.get_scale(this._config.scale),this.smoothing=this._config.smoothing??"false",this.high_res=this._config.high_res??"false",this.active_tab===void 0&&this._config.scale&&(this.active_tab=this.tab_from_scale(this._config.scale))}tab_from_scale(l){return typeof l=="object"?2:this.scales.get_scale(l).type==="relative"?1:0}render_device_class_picker(){let l=Object.keys(ue).map(function(h){return{label:h,value:h}});if(this.entity&&!this.entity.attributes.device_class)return J`
                <ha-combo-box
                    .label=${"Device class"}
                    .hass=${this.myhass}
                    .configValue=${"device_class"}
                    .items=${l}
                    .value=${this._config.device_class??""}
                    .allowCustomValue=${!1}
                    .helper=${"What device_class best represents this entity?"}
                ></ha-combo-box>
            `}render_scale_docs(l){if(this.scale!==void 0){var h;if(!(this.scale.docs===void 0||this.scale.type!==l))return this.scale.docs?.license&&(h=J`
                <h4>Scale license</h4>
                <p>
                    This scale is licensed separately from the heatmap card
                    under <a href="${this.scale.docs.license.url}" target="_blank">${this.scale.docs.license.name}</a>.
                </p>
            `),J`
            <div class="scale-docs">
                <h3>About this scale</h3>
                ${Ss(this.scale.docs?.text)}
                ${h}
            </div>
        `}}render_tab_bar(){return this.device_class?J`
            <mwc-tab-bar
                @MDCTabBar:activated=${h=>{for(let m of this.renderRoot.querySelectorAll(".scale-picker-content"))m.style.display="none";this.renderRoot.querySelector(`#tab-idx-${h.detail.index}`).style.display="block"}}
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
        `:void 0}render_absolute_scale_picker(){var l;let h=this.scales.get_by("device_class",this.device_class);return typeof this._config.scale=="object"?l=J`Using a custom scale, picker disabled`:h.length===0?l=J`There are no predefined scales for this device class`:l=J`
                ${h.map(m=>J`
                    <ha-formfield .label=${m.name} @change=${this.update_field}>
                        <ha-radio
                            .checked=${m.key===this._config.scale}
                            .value=${m.key}
                            .configValue=${"scale"}
                        ></ha-radio>
                    </ha-formfield><br>
                `)}
            `,J`
            <div>
                <h3>Scales for this device class</h3>
                ${l}
            </div>
        `}render_relative_scale_picker(){var l,h=this.scales.get_by("type","relative").map(function(b){return{label:b.name,value:b.key,css:b.css}});if(typeof this._config.scale=="object")l=J`Using a custom scale, picker disabled`;else{var m=b=>J`
            <ha-list-item>
                <div style="display: inline-block; margin-right: 15px; width: 120px; height: 12px; background: linear-gradient(90deg, ${b.css});"></div> ${b.label}
            </ha-list-item>`;l=J`
                <ha-combo-box
                    .label=${"Scale"}
                    .hass=${this.myhass}
                    .configValue=${"scale"}
                    .items=${h}
                    .value=${this._config.scale}
                    .renderer=${m}
                    .allowCustomValue=${!0}
                > </ha-combo-box>
            `}if(this.entity&&this.device_class)return J`
                <h3>Color scales</h3>
                    ${l}
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
                `}render_entity_warning(){if(this.entity!==void 0&&(this.entity.attributes?.state_class===void 0||["measurement","total","total_increasing"].includes(this.entity.attributes?.state_class)===!1))return J`
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
                `}render(){if(!(this.myhass===void 0||this._config===void 0))return J`
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
            <ha-formfield .label=${"High resolution (usually only 10 days kept)"} @change=${this.update_field}>
                <ha-checkbox
                    .label=${"High resolution"}
                    .checked=${this._config.high_res==="true"}
                    .value=${"true"}
                    .configValue=${"high_res"}
                ></ha-checkbox>
            </ha-formfield>
            <ha-formfield .label=${"Smooth low-precision data"} @change=${this.update_field}>
                <ha-checkbox
                    .label=${"Smoothing"}
                    .checked=${this._config.smoothing==="true"}
                    .disabled=${["total","total_increasing"].includes(this.entity?.attributes?.state_class)?"":"disabled"}
                    .value=${"true"}
                    .configValue=${"smoothing"}
                ></ha-checkbox>
            </ha-formfield>
        </div>`}update_field(l){l.stopPropagation();let h=l.target.value;if(this.disabled||h===void 0||h===this.value)return;let m=new Event("value-changed",{bubbles:!0});"checked"in l.target?m.detail={value:l.target.checked===!0?h:0}:isNaN(parseFloat(h))?m.detail={value:h}:m.detail={value:parseFloat(h)},l.target.dispatchEvent(m)}createRenderRoot(){let l=super.createRenderRoot();return l.addEventListener("value-changed",h=>{h.stopPropagation();let m=h.target.configValue,b=h.detail.value;var M=JSON.parse(JSON.stringify(this._config));if(m==="device_class"&&(M.scale=this.scales.defaults_for(b),this.active_tab=this.tab_from_scale(M.scale)),m==="entity"){let x=this.myhass.states[b],p=x&&x.attributes.device_class;p&&(M.scale=this.scales.defaults_for(p),this.active_tab=this.tab_from_scale(M.scale),delete M.device_class)}var F=M,T=m;if(m.indexOf(".")){for(let x of m.split(".").slice(0,-1))F[x]===void 0&&(F[x]={}),F=F[x];T=m.split(".").slice(-1)}F[T]=b;let E=new Event("config-changed");E.detail={config:M},this.dispatchEvent(E)}),l}};Ie(Fe,"styles",Es`
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
    `);customElements.define("heatmap-card",Me);customElements.define("heatmap-card-editor",Fe);window.customCards=window.customCards||[];window.customCards.push({type:"heatmap-card",name:"Heatmap card",preview:!0,description:"Heat maps of entities or energy data"});})();
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
