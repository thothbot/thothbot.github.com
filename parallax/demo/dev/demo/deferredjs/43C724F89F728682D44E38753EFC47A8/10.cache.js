function uib(){}
function Dib(){}
function Aib(){}
function Iib(){}
function Hib(){}
function Mib(){}
function Lib(){}
function Wtb(){}
function lvb(){}
function qvb(){}
function tvb(){}
function kEb(){}
function opb(a,b){a.s=b}
function mEb(){pyb.call(this)}
function uvb(){eub.call(this,new pub)}
function vib(){vhb.call(this,(zib(),yib))}
function mvb(a){eub.call(this,a);dub(this,a.b)}
function rvb(){pub.call(this);this.b=(_ub(),$ub)}
function zib(){zib=uIb;yib=new Dib}
function Pib(){Pib=uIb;Bib=new Iib}
function Qib(){Qib=uIb;Cib=new Mib}
function Xtb(){Mtb.call(this,16777215);this.c=1;this.b=0;new $qb(0,0,0)}
function lEb(){var a,b,c,d,e,f,g,i;a=$doc.createElement(rMb);a.width=256;a.height=256;b=a.getContext(sMb);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=kp(Math.floor(g^i))}b.putImageData(d,0,0);return a}
_=vib.prototype=uib.prototype=new qhb;_.gC=function wib(){return rw};_.Zc=function xib(){shb(this,'mNear',new ilb((Dlb(),plb),new eX(1)));shb(this,'mFar',new ilb(plb,new eX(2000)));shb(this,qMb,new ilb(plb,new eX(1)))};var yib;_=Dib.prototype=Aib.prototype=new Jb;_.gC=function Eib(){return qw};_.ad=function Fib(){return Pib(),Bib};_.bd=function Gib(){return Qib(),Cib};var Bib=null,Cib=null;_=Iib.prototype=Hib.prototype=new Jb;_.gC=function Jib(){return ow};_.Lb=function Kib(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n}\r\n'};_.cM={45:1};_=Mib.prototype=Lib.prototype=new Jb;_.gC=function Nib(){return pw};_.Lb=function Oib(){return 'void main() {\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n'};_.cM={45:1};_=Xtb.prototype=Wtb.prototype=new Ltb;_.gC=function Ytb(){return Wx};_.cM={149:1,150:1,161:1};_.b=0;_.c=0;_=mvb.prototype=lvb.prototype=new $tb;_.Ed=function nvb(){return null};_.gC=function ovb(){return iy};_.Gd=function pvb(){return new vib};_.cM={153:1};_=rvb.prototype=qvb.prototype=new oub;_.gC=function svb(){return hy};_=uvb.prototype=tvb.prototype=new $tb;_.gC=function vvb(){return jy};_.cM={153:1,157:1};_=fEb.prototype;_.lb=function jEb(){lyb(this.c,new mEb(this.b))};_=mEb.prototype=kEb.prototype=new oyb;_.gC=function nEb(){return Oz};_.Yc=function oEb(){t5(this,new iob(45,B5(this.r.D),1,2000))};_.cb=function pEb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;Wqb(this.q.G,0,200,800);xnb(this.t,this.q);c=new ppb;for(i=0;i<=40;++i){o0(c.C,new $qb(-500,-75,i*25-500));o0(c.C,new $qb(500,-75,i*25-500));o0(c.C,new $qb(i*25-500,-75,-500));o0(c.C,new $qb(i*25-500,-75,500))}o=new yub;o.b=new xob(16777215);o.v=0.20000000298023224;n=new uub(o);k=new owb(c,n,(xwb(),vwb));xnb(this.t,k);C=new nmb(lEb());hmb(C,(zW(),zW(),yW));this.b=new y0;u=new Bvb;u.k=C;u.w=true;o0(this.b,new xvb(u));v=new Bvb;v.i=new xob(14540253);v.e=(_ub(),Yub);o0(this.b,new xvb(v));z=new Pvb;z.b=new xob(197379);z.i=new xob(14540253);z.g=new xob(39168);z.f=30;z.e=Yub;o0(this.b,new Lvb(z));o0(this.b,new Evb(new Ivb));q=new jvb;q.i=new xob(16755200);q.w=true;q.r=(Jub(),Cub);o0(this.b,new evb(q));w=new Bvb;w.i=new xob(14540253);w.e=$ub;o0(this.b,new xvb(w));z.k=C;z.w=true;o0(this.b,new Lvb(z));y=new Ivb;y.b=$ub;o0(this.b,new Evb(y));r=new jvb;r.i=new xob(65450);r.y=true;o0(this.b,new evb(r));o0(this.b,new mvb(new rvb));x=new Bvb;x.i=new xob(6710886);x.d=new xob(16711680);x.b=new xob(0);x.e=$ub;o0(this.b,new xvb(x));A=new Pvb;A.b=new xob(0);A.d=new xob(16711680);A.i=new xob(0);A.g=new xob(6710886);A.f=10;A.e=$ub;A.v=0.8999999761581421;A.w=true;o0(this.b,new Lvb(A));s=new jvb;r.k=C;r.w=true;o0(this.b,new evb(s));g=new Ssb(70,32,16);e=new Ssb(70,32,16);f=new Ssb(70,32,16);for(i=0,j=f.o.c;i<j;++i){b=ep(s0(f.o,i),135);b.i=0}opb(f,this.b);o0(this.b,new uvb);this.c=new y0;for(i=0,j=this.b.c;i<j;++i){p=ep(s0(this.b,i),153);d=p.gC()==jy?f:p.P==Yub?e:g;B=new Lwb(d,p);Cqb(B.G,i%4*200-400);Xqb(B.G,Math.floor(i/4)*200-200);Cqb(B.J,Math.random()*200-100);Dqb(B.J,Math.random()*200-100);Xqb(B.J,Math.random()*200-100);o0(this.c,B);xnb(this.t,B)}t=new jvb;t.i=new xob(16777215);this.d=new Lwb(new Ssb(4,8,8),new evb(t));xnb(this.t,this.d);xnb(this.t,new Ptb(1118481));a=new Ttb(0.125);Cqb(a.G,Math.random()-0.5);Dqb(a.G,Math.random()-0.5);Xqb(a.G,Math.random()-0.5);a.G.zd();xnb(this.t,a);this.e=new Xtb;xnb(this.t,this.e)};_.Wc=function qEb(){};_.db=function rEb(a){var b,c,d,e,f;f=1.0E-4*a;Cqb(this.q.G,Math.cos(f)*1000);Xqb(this.q.G,Math.sin(f)*1000);Onb(this.q,this.t.G);for(b=0,c=this.c.c;b<c;++b){e=ep(s0(this.c,b),164);e.J.d+=0.009999999776482582;e.J.e+=0.004999999888241291;d=ep(s0(this.b,b),153);b>9&&gp(d,159)?sob(ep(d,159).c,0.5400000214576721,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&gp(d,158)&&sob(ep(d,158).c,0.03999999910593033,1,0.7*(0.5+0.5*Math.cos(35*f)))}Cqb(this.d.G,Math.sin(f*7)*300);Dqb(this.d.G,Math.cos(f*5)*400);Xqb(this.d.G,Math.cos(f*3)*300);Cqb(this.e.G,this.d.G.d);Dqb(this.e.G,this.d.G.e);Xqb(this.e.G,this.d.G.c);s5(this)};_.b=null;_.c=null;_.d=null;_.e=null;var rw=LW(tMb,'ShaderDepth'),qw=LW(tMb,'ShaderDepth_Resources_default_InlineClientBundleGenerator'),ow=LW(tMb,'ShaderDepth_Resources_default_InlineClientBundleGenerator$1'),pw=LW(tMb,'ShaderDepth_Resources_default_InlineClientBundleGenerator$2'),hy=LW(uMb,'MeshDepthMaterial$MeshDepthMaterialOptions'),jy=LW(uMb,'MeshFaceMaterial'),Oz=LW(BLb,'MaterialsCanvas2D$DemoScene');wIb(Md)(10);