function cvc(a,b){a.d=b}
function mbc(a){this.a=a}
function vbc(a){this.a=a}
function pbc(a,b){this.a=a;this.b=b}
function sbc(a,b){this.a=a;this.b=b}
function ibc(){N7b.call(this)}
function ryb(a){return new $wnd.DataView(a)}
function clb(a,b){dk(a.a,String.fromCharCode.apply(null,b));return a}
function zvc(a,b){avc();dvc.call(this,a,b);cvc(this,(Dab(),Bab));bvc(this)}
function vvc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new flb(a.byteLength);for(d=0;d<a.byteLength;d++){clb(c,jib(b[d]))}return c.a.a}
function hbc(a,b,c,d,e){var f;f=new HWb(d,e);d4b(f._,b,1,c);FNb(a.F,f);f.S=true;f.e=-1;f.f=1;f.g=1;f.d=-1;f.A=1;f.w=4;f.I=1024;f.G=1024;f.u=-0.005;f.D=0.15}
function jib(a){if(a<0||a>1114111){throw new Uib}return a>=65536?gu(rQ,YGc,-1,[55296+(a-65536>>10&1023)&65535,56320+(a-65536&1023)&65535]):gu(rQ,YGc,-1,[a&65535])}
function Rhb(a){var b;if(!(b=Qhb,!b&&(b=Qhb=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new akb(HPc+a+oLc)}return parseFloat(a)}
function wvc(a){var b,c,d,e,f;f=ryb(a.b);e=yu(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function xvc(a){var b,c,d,e,f,g,i,j,k,n;b=new nPb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',qLc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',qLc);for(k=f.exec(n);k;k=f.exec(n)){d=new j4b(Rhb(k[1]),Rhb(k[3]),Rhb(k[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',qLc);for(j=g.exec(n);j;j=g.exec(n)){b.s.Ec(new j4b(Rhb(j[1]),Rhb(j[3]),Rhb(j[5])))}c=b.s.Pc();b.i.Ec(new ZPb(c-3,c-2,c-1,d))}!b.t&&(b.t=new a1b);$0b(b.t,b.s);!b.u&&(b.u=new j3b);g3b(b.u,b.s);return b}
function yvc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=ryb(a.b);j=yu(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(yu(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new WOb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(w>>5&31)/31;c=(w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;syb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);syb(u,v,r);syb(u,v+1,s);syb(u,v+2,t);if(o){syb(d,v,A);syb(d,v+1,k);syb(d,v+2,c)}v+=3}}SOb(n,HKc,new POb(F,3));SOb(n,UNc,new POb(u,3));if(o){SOb(n,AMc,new POb(d,3));a.a=b}return n}
var Qhb;bT(1017,1,xIc);_.zb=function fbc(){n7b(this.b,new ibc(this.a))};bT(1018,965,{},ibc);_.nb=function jbc(){var a,b,c;this.a=new FOb(35,rFb(this.D.k),1,15);d4b(this.a._,3,0.15,3);this.b=new j4b(0,-0.25,0);s6b(this.F,new i6b(7496795,2,15));c=new x_b;n_b(c,new p1b(10066329));k_b(c,new p1b(10066329));u_b(c,new p1b(1052688));b=new H5b(new NUb(40,40),c);C1b(b.cb,-1.5707963267948966);u3b(b._,-0.5);FNb(this.F,b);b.U=true;new zvc('./static/models/stl/ascii/slotted_disk.stl',new mbc(this));a=new x_b;k_b(a,new p1b(5592405));n_b(a,new p1b(11184810));u_b(a,new p1b(1118481));a.F=200;new zvc('./static/models/stl/binary/pr2_head_pan.stl',new pbc(this,a));new zvc('./static/models/stl/binary/pr2_head_tilt.stl',new sbc(this,a));new zvc('./static/models/stl/binary/colored.stl',new vbc(this));FNb(this.F,new eWb(7829367));hbc(this,1,1,16777215,1.35);hbc(this,0.5,-1,16755200,1);PFb(this.D.k,this.F.b.c,1);this.D.k.ab=true;this.D.k.bb=true};_.ob=function kbc(a){t3b(this.a._,Math.cos(a*5.0E-4)*3);f4b(this.a._,Math.sin(a*5.0E-4)*3);bOb(this.a,this.b);DFb(this.D.k,this.F,this.a,null,false)};bT(1019,1,{},mbc);_.xf=function nbc(a,b){var c,d;c=new x_b;k_b(c,new p1b(16733491));n_b(c,new p1b(16733491));u_b(c,new p1b(1118481));c.F=200;d=new H5b(b,c);d4b(d._,0,-0.25,0.6);x1b(d.cb,0,-1.5707963267948966);d4b(d.eb,0.5,0.5,0.5);d.S=true;d.U=true;FNb(this.a.F,d)};bT(1020,1,{},pbc);_.xf=function qbc(a,b){var c;c=new H5b(b,this.b);d4b(c._,0,-0.37,-0.6);x1b(c.cb,-1.5707963267948966,0);d4b(c.eb,2,2,2);c.S=true;c.U=true;FNb(this.a.F,c)};bT(1021,1,{},sbc);_.xf=function tbc(a,b){var c;c=new H5b(b,this.b);d4b(c._,0.136,-0.37,-0.6);x1b(c.cb,-1.5707963267948966,0.3);d4b(c.eb,2,2,2);c.S=true;c.U=true;FNb(this.a.F,c)};bT(1022,1,{},vbc);_.xf=function wbc(a,b){var c,d;c=new x_b;EXb(c,qu(a,337).a);v_b(c,(mYb(),lYb));d=new H5b(b,c);d4b(d._,0.5,0.2,0);x1b(d.cb,-1.5707963267948966,1.5707963267948966);d4b(d.eb,0.3,0.3,0.3);d.S=true;d.U=true;FNb(this.a.F,d)};bT(1325,1323,{337:1},zvc);_.zf=function Avc(a){return null};_.Af=function Bvc(a){this.b=a;return wvc(this)?yvc(this):xvc(vvc(a))};_.a=0;var rK=tib(nNc,'LoaderSTL$DemoScene',1018),nK=tib(nNc,'LoaderSTL$DemoScene$1',1019),oK=tib(nNc,'LoaderSTL$DemoScene$2',1020),pK=tib(nNc,'LoaderSTL$DemoScene$3',1021),qK=tib(nNc,'LoaderSTL$DemoScene$4',1022),CO=tib(IPc,'STLLoader',1325);KIc(xi)(47);