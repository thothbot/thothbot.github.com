function fpb(){}
function opb(){}
function lpb(){}
function tpb(){}
function spb(){}
function xpb(){}
function wpb(){}
function tJb(){}
function BJb(){}
function aXb(){}
function cXb(){fOb.call(this)}
function CJb(){dHb.call(this)}
function gpb(){Wnb.call(this,(kpb(),jpb))}
function JGb(){KGb.call(this,16777215,1,0)}
function uJb(){dHb.call(this);this.b=false;this.c=1}
function kpb(){kpb=P4b;jpb=new opb}
function Apb(){Apb=P4b;mpb=new tpb}
function Bpb(){Bpb=P4b;npb=new xpb}
function bXb(){var a,b,c,d,e,f,g,i;a=$doc.createElement(m9b);a.width=256;a.height=256;b=a.getContext(n9b);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=Mr(Math.floor(g^i))}b.putImageData(d,0,0);return a}
var k9b='mFar',j9b='mNear';_=gpb.prototype=fpb.prototype=new Inb;_.gC=function hpb(){return pz};_.yd=function ipb(){Lnb(this,j9b,new Wrb((psb(),bsb),new s1(1)));Lnb(this,k9b,new Wrb(bsb,new s1(2000)));Lnb(this,G8b,new Wrb(bsb,new s1(1)))};_.cM={130:1};var jpb;_=opb.prototype=lpb.prototype=new Ub;_.gC=function ppb(){return oz};_.Bd=function qpb(){return Apb(),mpb};_.Cd=function rpb(){return Bpb(),npb};var mpb=null,npb=null;_=tpb.prototype=spb.prototype=new Ub;_.gC=function upb(){return mz};_.bc=function vpb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n}\r\n'};_=xpb.prototype=wpb.prototype=new Ub;_.gC=function ypb(){return nz};_.bc=function zpb(){return l9b};_=JGb.prototype=IGb.prototype;_=uJb.prototype=tJb.prototype=new OGb;_.Re=function vJb(){return null};_.Te=function wJb(){return new gpb};_.gC=function xJb(){return PB};_.Oe=function yJb(){return this.c};_.Pe=function zJb(){return this.b};_.Ue=function AJb(a,b,c){var d;VGb(this,c);d=UGb(this).j;if(b.gC()==$z){Vrb(Gr(d.b[j9b],132),new s1(Gr(b,139).e));Vrb(Gr(d.b[k9b],132),new s1(Gr(b,139).c))}Vrb(Gr(d.b[G8b],132),new s1(this.P))};_.cM={176:1,179:1};_.b=false;_.c=0;_=CJb.prototype=BJb.prototype=new OGb;_.Te=function DJb(){return null};_.gC=function EJb(){return QB};_.cM={179:1,185:1};_=XWb.prototype;_.ub=function _Wb(){bOb(this.c,new cXb(this.b))};_=cXb.prototype=aXb.prototype=new eOb;_.gC=function dXb(){return XD};_.ud=function eXb(){ebb(this,new _ub(45,Ybb(this.B.D),1,2000))};_.ib=function fXb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;dAb(this.A.E,0,200,800);jub(this.C,this.A);c=new Uvb;for(i=0;i<=40;++i){c.J.Jc(new iAb(-500,-75,i*25-500));c.J.Jc(new iAb(500,-75,i*25-500));c.J.Jc(new iAb(i*25-500,-75,-500));c.J.Jc(new iAb(i*25-500,-75,500))}n=new mHb;jHb(n,new tvb(16777215));n.P=0.2;k=new NLb(c,n,(WLb(),ULb));jub(this.C,k);C=new Nsb(bXb());Fsb(C,(W0(),W0(),V0));this.b=new U6;t=new MJb;t.q=C;t.O=true;K6(this.b,t);u=new MJb;HJb(u,new tvb(14540253));aHb(u,(GIb(),DIb));K6(this.b,u);y=new wKb;pKb(y,new tvb(197379));qKb(y,new tvb(14540253));tKb(y,new tvb(39168));y.y=30;aHb(y,DIb);K6(this.b,y);K6(this.b,new iKb);p=new ZIb;UIb(p,new tvb(16755200));p.O=true;ZGb(p,(CHb(),vHb));K6(this.b,p);v=new MJb;HJb(v,new tvb(14540253));aHb(v,FIb);K6(this.b,v);A=new wKb;A.u=C;A.O=true;K6(this.b,A);x=new iKb;aHb(x,FIb);K6(this.b,x);q=new ZIb;UIb(q,new tvb(65450));q.i=true;K6(this.b,q);K6(this.b,new uJb);w=new MJb;HJb(w,new tvb(6710886));JJb(w,new tvb(16711680));GJb(w,new tvb(0));aHb(w,FIb);K6(this.b,w);z=new wKb;pKb(z,new tvb(0));sKb(z,new tvb(16776960));qKb(z,new tvb(0));tKb(z,new tvb(6710886));z.y=10;aHb(z,FIb);z.P=0.9;z.O=true;K6(this.b,z);r=new ZIb;q.k=C;q.O=true;K6(this.b,r);g=new hFb(70,32,16);e=new hFb(70,32,16);f=new hFb(70,32,16);for(i=0,j=f.o.Uc();i<j;++i){b=Gr(f.o.Mc(i),141);b.i=0}Svb(f,this.b);K6(this.b,new CJb);this.c=new U6;for(i=0,j=this.b.c;i<j;++i){o=Gr(O6(this.b,i),179);d=o.gC()==QB?f:o.T==DIb?e:g;B=new gMb(d,o);Bzb(B.E,i%4*200-400);fAb(B.E,Math.floor(i/4)*200-200);Bzb(B.H,Math.random()*200-100);Czb(B.H,Math.random()*200-100);fAb(B.H,Math.random()*200-100);K6(this.c,B);jub(this.C,B)}s=new ZIb;UIb(s,new tvb(16777215));this.d=new gMb(new hFb(4,8,8),s);jub(this.C,this.d);jub(this.C,new AGb(1118481));a=new EGb(16777215,0.125);Bzb(a.E,Math.random()-0.5);Czb(a.E,Math.random()-0.5);fAb(a.E,Math.random()-0.5);a.E.me();jub(this.C,a);this.e=new JGb;jub(this.C,this.e)};_.td=function gXb(){};_.jb=function hXb(a){var b,c,d,e,f;f=1.0E-4*a;Bzb(this.A.E,Math.cos(f)*1000);fAb(this.A.E,Math.sin(f)*1000);Fub(this.A,this.C.E);for(b=0,c=this.c.c;b<c;++b){e=Gr(O6(this.c,b),194);e.H.d+=0.01;e.H.e+=0.005;d=Gr(O6(this.b,b),179);b>9&&Ir(d,187)?nvb(Gr(d,187).g,0.54,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&Ir(d,186)&&nvb(Gr(d,186).e,0.04,1,0.7*(0.5+0.5*Math.cos(35*f)))}Bzb(this.d.E,Math.sin(f*7)*300);Czb(this.d.E,Math.cos(f*5)*400);fAb(this.d.E,Math.cos(f*3)*300);Bzb(this.e.d,this.d.E.d);Czb(this.e.d,this.d.E.e);fAb(this.e.d,this.d.E.c)};_.b=null;_.c=null;_.d=null;_.e=null;var pz=g1(o9b,'ShaderDepth'),oz=g1(o9b,'ShaderDepth_Resources_default_InlineClientBundleGenerator'),mz=g1(o9b,'ShaderDepth_Resources_default_InlineClientBundleGenerator$1'),nz=g1(o9b,'ShaderDepth_Resources_default_InlineClientBundleGenerator$2'),PB=g1(p9b,'MeshDepthMaterial'),QB=g1(p9b,'MeshFaceMaterial'),XD=g1(m8b,'MaterialsCanvas2D$DemoScene');R4b(pe)(16);