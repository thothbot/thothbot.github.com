function Wsb(){}
function dtb(){}
function atb(){}
function itb(){}
function htb(){}
function mtb(){}
function ltb(){}
function jPb(){}
function rPb(){}
function R3b(){}
function T3b(){LTb.call(this)}
function sPb(){RMb.call(this)}
function Xsb(){wrb.call(this,(_sb(),$sb))}
function qMb(){Jyb();rMb.call(this,16777215,1,0)}
function qtb(){qtb=qic;ctb=new mtb}
function ptb(){ptb=qic;btb=new itb}
function _sb(){_sb=qic;$sb=new dtb}
function kPb(){RMb.call(this);this.b=false;this.c=1}
function S3b(){var a,b,c,d,e,f,g,i;a=$doc.createElement(Wmc);a.width=256;a.height=256;b=a.getContext(Xmc);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=$s(Math.floor(g^i))}b.putImageData(d,0,0);return a}
var Umc='mFar',Tmc='mNear';_=Xsb.prototype=Wsb.prototype=new irb;_.gC=function Ysb(){return $A};_.xd=function Zsb(){lrb(this,Tmc,new uwb((Owb(),Awb),new B4(1)));lrb(this,Umc,new uwb(Awb,new B4(2000)));lrb(this,Vmc,new uwb(Awb,new B4(1)))};_.cM={131:1};var $sb;_=dtb.prototype=atb.prototype=new Kb;_.gC=function etb(){return ZA};_.Ad=function ftb(){return ptb(),btb};_.Bd=function gtb(){return qtb(),ctb};var btb=null,ctb=null;_=itb.prototype=htb.prototype=new Kb;_.gC=function jtb(){return XA};_.ac=function ktb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n\r\n}'};_=mtb.prototype=ltb.prototype=new Kb;_.gC=function ntb(){return YA};_.ac=function otb(){return 'void main() {\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n'};_=qMb.prototype=pMb.prototype;_=kPb.prototype=jPb.prototype=new AMb;_.We=function lPb(){return null};_.Ye=function mPb(){return new Xsb};_.gC=function nPb(){return HD};_.Te=function oPb(){return this.c};_.Ue=function pPb(){return this.b};_.Ze=function qPb(a,b,c){var d;HMb(this,c);d=GMb(this).j;if(b.gC()==PB){swb(Us(d.b[Tmc],133),new B4(Us(b,141).e));swb(Us(d.b[Umc],133),new B4(Us(b,141).c))}swb(Us(d.b[Vmc],133),new B4(this.S))};_.cM={183:1,186:1};_.b=false;_.c=0;_=sPb.prototype=rPb.prototype=new AMb;_.Ye=function tPb(){return null};_.gC=function uPb(){return ID};_.cM={186:1,193:1};_=M3b.prototype;_.tb=function Q3b(){HTb(this.c,new T3b(this.b))};_=T3b.prototype=R3b.prototype=new KTb;_.gC=function U3b(){return rG};_.td=function V3b(){neb(this,new Ezb(45,ffb(this.B.E),1,2000))};_.hb=function W3b(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;gFb(this.A.X,0,200,800);Kyb(this.C,this.A);c=new xAb;for(i=0;i<=40;++i){c.H.Ic(new mFb(-500,-75,i*25-500));c.H.Ic(new mFb(500,-75,i*25-500));c.H.Ic(new mFb(i*25-500,-75,-500));c.H.Ic(new mFb(i*25-500,-75,500))}n=new $Mb;XMb(n,new Yzb(16777215));n.S=0.2;k=new xLb(c,n,(xRb(),vRb));Kyb(this.C,k);C=new kxb(S3b());cxb(C,(d4(),d4(),c4));this.b=new bab;t=new DPb;t.q=C;t.R=true;T9(this.b,t);u=new DPb;xPb(u,new Yzb(14540253));OMb(u,(wOb(),tOb));T9(this.b,u);y=new oQb;gQb(y,new Yzb(197379));hQb(y,new Yzb(14540253));lQb(y,new Yzb(39168));y.A=30;OMb(y,tOb);T9(this.b,y);T9(this.b,new _Pb);p=new POb;KOb(p,new Yzb(16755200));p.R=true;LMb(p,(oNb(),hNb));T9(this.b,p);v=new DPb;xPb(v,new Yzb(14540253));OMb(v,vOb);T9(this.b,v);A=new oQb;A.u=C;A.R=true;T9(this.b,A);x=new _Pb;OMb(x,vOb);T9(this.b,x);q=new POb;KOb(q,new Yzb(65450));q.i=true;T9(this.b,q);T9(this.b,new kPb);w=new DPb;xPb(w,new Yzb(6710886));zPb(w,new Yzb(16711680));wPb(w,new Yzb(0));OMb(w,vOb);T9(this.b,w);z=new oQb;gQb(z,new Yzb(0));jQb(z,new Yzb(16776960));hQb(z,new Yzb(0));lQb(z,new Yzb(6710886));z.A=10;OMb(z,vOb);z.S=0.9;z.R=true;T9(this.b,z);r=new POb;q.k=C;q.R=true;T9(this.b,r);g=new lKb(70,32,16);e=new lKb(70,32,16);f=new lKb(70,32,16);for(i=0,j=f.o.Tc();i<j;++i){b=Us(f.o.Lc(i),143);b.i=0}vAb(f,this.b);T9(this.b,new sPb);this.c=new bab;for(i=0,j=this.b.c;i<j;++i){o=Us(X9(this.b,i),186);d=o.gC()==ID?f:o.W==tOb?e:g;B=new KRb(d,o);FEb(B.X,i%4*200-400);jFb(B.X,Math.floor(i/4)*200-200);FEb(B.$,Math.random()*200-100);GEb(B.$,Math.random()*200-100);jFb(B.$,Math.random()*200-100);T9(this.c,B);Kyb(this.C,B)}s=new POb;KOb(s,new Yzb(16777215));this.d=new KRb(new lKb(4,8,8),s);Kyb(this.C,this.d);Kyb(this.C,new fMb(1118481));a=new nMb(16777215,0.125);FEb(a.X,Math.random()-0.5);GEb(a.X,Math.random()-0.5);jFb(a.X,Math.random()-0.5);a.X.ne();Kyb(this.C,a);this.e=new qMb;Kyb(this.C,this.e)};_.sd=function X3b(){};_.ib=function Y3b(a){var b,c,d,e,f;f=1.0E-4*a;FEb(this.A.X,Math.cos(f)*1000);jFb(this.A.X,Math.sin(f)*1000);izb(this.A,this.C.X);for(b=0,c=this.c.c;b<c;++b){e=Us(X9(this.c,b),202);e.$.d+=0.01;e.$.e+=0.005;d=Us(X9(this.b,b),186);b>9&&Ws(d,195)?Szb(Us(d,195).g,0.54,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&Ws(d,194)&&Szb(Us(d,194).e,0.04,1,0.7*(0.5+0.5*Math.cos(35*f)))}FEb(this.d.X,Math.sin(f*7)*300);GEb(this.d.X,Math.cos(f*5)*400);jFb(this.d.X,Math.cos(f*3)*300);FEb(this.e.X,this.d.X.d);GEb(this.e.X,this.d.X.e);jFb(this.e.X,this.d.X.c)};_.b=null;_.c=null;_.d=null;_.e=null;var $A=p4(Ymc,'DepthShader'),ZA=p4(Ymc,'DepthShader_Resources_default_InlineClientBundleGenerator'),XA=p4(Ymc,'DepthShader_Resources_default_InlineClientBundleGenerator$1'),YA=p4(Ymc,'DepthShader_Resources_default_InlineClientBundleGenerator$2'),HD=p4(Zmc,'MeshDepthMaterial'),ID=p4(Zmc,'MeshFaceMaterial'),rG=p4(Wlc,'MaterialsCanvas2D$DemoScene');sic(ge)(22);