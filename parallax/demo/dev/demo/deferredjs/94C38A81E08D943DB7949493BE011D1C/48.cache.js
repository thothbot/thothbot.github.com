function Bwc(a,b){a.d=b}
function adc(a){this.a=a}
function jdc(a){this.a=a}
function ddc(a,b){this.a=a;this.b=b}
function gdc(a,b){this.a=a;this.b=b}
function Ycc(){D9b.call(this)}
function zzb(a){return new $wnd.DataView(a)}
function hmb(a,b){dk(a.a,String.fromCharCode.apply(null,b));return a}
function Ywc(a,b){zwc();Cwc.call(this,a,b);Bwc(this,(Hbb(),Fbb));Awc(this)}
function Uwc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new kmb(a.byteLength);for(d=0;d<a.byteLength;d++){hmb(c,njb(b[d]))}return c.a.a}
function Xcc(a,b,c,d,e){var f;f=new rYb(d,e);T5b(f._,b,1,c);gPb(a.H,f);f.S=true;f.e=-1;f.f=1;f.g=1;f.d=-1;f.A=1;f.w=4;f.I=1024;f.G=1024;f.u=-0.005;f.D=0.15}
function njb(a){if(a<0||a>1114111){throw new Yjb}return a>=65536?pu(vR,jKc,-1,[55296+(a-65536>>10&1023)&65535,56320+(a-65536&1023)&65535]):pu(vR,jKc,-1,[a&65535])}
function Vib(a){var b;if(!(b=Uib,!b&&(b=Uib=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new elb(TTc+a+FOc)}return parseFloat(a)}
function Vwc(a){var b,c,d,e,f;f=zzb(a.b);e=Hu(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function Wwc(a){var b,c,d,e,f,g,i,j,k,n;b=new XQb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',HOc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',HOc);for(k=f.exec(n);k;k=f.exec(n)){d=new Z5b(Vib(k[1]),Vib(k[3]),Vib(k[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',HOc);for(j=g.exec(n);j;j=g.exec(n)){b.s.Fc(new Z5b(Vib(j[1]),Vib(j[3]),Vib(j[5])))}c=b.s.Qc();b.i.Fc(new HRb(c-3,c-2,c-1,d))}!b.t&&(b.t=new P2b);N2b(b.t,b.s);!b.u&&(b.u=new Y4b);V4b(b.u,b.s);return b}
function Xwc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=zzb(a.b);j=Hu(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(Hu(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new EQb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(w>>5&31)/31;c=(w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;Azb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);Azb(u,v,r);Azb(u,v+1,s);Azb(u,v+2,t);if(o){Azb(d,v,A);Azb(d,v+1,k);Azb(d,v+2,c)}v+=3}}zQb(n,YNc,new wQb(F,3));zQb(n,uRc,new wQb(u,3));if(o){zQb(n,aQc,new wQb(d,3));a.a=b}return n}
var Uib;fU(1023,1,LLc);_.zb=function Vcc(){d9b(this.b,new Ycc(this.a))};fU(1024,970,{},Ycc);_.nb=function Zcc(){var a,b,c;this.a=new jQb(35,zGb(this.G.k),1,15);T5b(this.a._,3,0.15,3);this.b=new Z5b(0,-0.25,0);g8b(this.H,new Y7b(7496795,2,15));c=new k1b;a1b(c,new c3b(10066329));Z0b(c,new c3b(10066329));h1b(c,new c3b(1052688));b=new v7b(new xWb(40,40),c);p3b(b.cb,-1.5707963267948966);h5b(b._,-0.5);gPb(this.H,b);b.U=true;new Ywc('./static/models/stl/ascii/slotted_disk.stl',new adc(this));a=new k1b;Z0b(a,new c3b(5592405));a1b(a,new c3b(11184810));h1b(a,new c3b(1118481));a.F=200;new Ywc('./static/models/stl/binary/pr2_head_pan.stl',new ddc(this,a));new Ywc('./static/models/stl/binary/pr2_head_tilt.stl',new gdc(this,a));new Ywc('./static/models/stl/binary/colored.stl',new jdc(this));gPb(this.H,new QXb(7829367));Xcc(this,1,1,16777215,1.35);Xcc(this,0.5,-1,16755200,1);XGb(this.G.k,this.H.a.c,1);this.G.k.ab=true;this.G.k.bb=true};_.ob=function $cc(a){g5b(this.a._,Math.cos(a*5.0E-4)*3);V5b(this.a._,Math.sin(a*5.0E-4)*3);FPb(this.a,this.b);LGb(this.G.k,this.H,this.a,null,false)};fU(1025,1,{},adc);_.Af=function bdc(a,b){var c,d;c=new k1b;Z0b(c,new c3b(16733491));a1b(c,new c3b(16733491));h1b(c,new c3b(1118481));c.F=200;d=new v7b(b,c);T5b(d._,0,-0.25,0.6);k3b(d.cb,0,-1.5707963267948966);T5b(d.eb,0.5,0.5,0.5);d.S=true;d.U=true;gPb(this.a.H,d)};fU(1026,1,{},ddc);_.Af=function edc(a,b){var c;c=new v7b(b,this.b);T5b(c._,0,-0.37,-0.6);k3b(c.cb,-1.5707963267948966,0);T5b(c.eb,2,2,2);c.S=true;c.U=true;gPb(this.a.H,c)};fU(1027,1,{},gdc);_.Af=function hdc(a,b){var c;c=new v7b(b,this.b);T5b(c._,0.136,-0.37,-0.6);k3b(c.cb,-1.5707963267948966,0.3);T5b(c.eb,2,2,2);c.S=true;c.U=true;gPb(this.a.H,c)};fU(1028,1,{},jdc);_.Af=function kdc(a,b){var c,d;c=new k1b;pZb(c,zu(a,340).a);i1b(c,($Zb(),ZZb));d=new v7b(b,c);T5b(d._,0.5,0.2,0);k3b(d.cb,-1.5707963267948966,1.5707963267948966);T5b(d.eb,0.3,0.3,0.3);d.S=true;d.U=true;gPb(this.a.H,d)};fU(1318,1316,{340:1},Ywc);_.Cf=function Zwc(a){return null};_.Df=function $wc(a){this.b=a;return Vwc(this)?Xwc(this):Wwc(Uwc(a))};_.a=0;var DK=xjb(PQc,'LoaderSTL$DemoScene',1024),zK=xjb(PQc,'LoaderSTL$DemoScene$1',1025),AK=xjb(PQc,'LoaderSTL$DemoScene$2',1026),BK=xjb(PQc,'LoaderSTL$DemoScene$3',1027),CK=xjb(PQc,'LoaderSTL$DemoScene$4',1028),mP=xjb(UTc,'STLLoader',1318);ZLc(xi)(48);