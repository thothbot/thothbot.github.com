function Lnb(){}
function Unb(){}
function Rnb(){}
function Znb(){}
function Ynb(){}
function bob(){}
function aob(){}
function lHb(){}
function tHb(){}
function RUb(){}
function TUb(){WLb.call(this)}
function uHb(){kFb.call(this)}
function Mnb(){Amb.call(this,(Qnb(),Pnb))}
function REb(){SEb.call(this,16777215,1,0)}
function mHb(){kFb.call(this);this.b=false;this.c=1}
function Qnb(){Qnb=k2b;Pnb=new Unb}
function eob(){eob=k2b;Snb=new Znb}
function fob(){fob=k2b;Tnb=new bob}
function SUb(){var a,b,c,d,e,f,g,i;a=$doc.createElement(A6b);a.width=256;a.height=256;b=a.getContext(B6b);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=_q(Math.floor(g^i))}b.putImageData(d,0,0);return a}
var z6b='mFar',y6b='mNear';_=Mnb.prototype=Lnb.prototype=new nmb;_.gC=function Nnb(){return wy};_.rd=function Onb(){pmb(this,y6b,new Aqb((Vqb(),Hqb),new h0(1)));pmb(this,z6b,new Aqb(Hqb,new h0(2000)));pmb(this,W5b,new Aqb(Hqb,new h0(1)))};_.cM={133:1};var Pnb;_=Unb.prototype=Rnb.prototype=new Tb;_.gC=function Vnb(){return vy};_.ud=function Wnb(){return eob(),Snb};_.vd=function Xnb(){return fob(),Tnb};var Snb=null,Tnb=null;_=Znb.prototype=Ynb.prototype=new Tb;_.gC=function $nb(){return ty};_.Wb=function _nb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n}\r\n'};_=bob.prototype=aob.prototype=new Tb;_.gC=function cob(){return uy};_.Wb=function dob(){return 'void main() {\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n'};_=REb.prototype=QEb.prototype;_=mHb.prototype=lHb.prototype=new WEb;_.He=function nHb(){return null};_.Je=function oHb(){return new Mnb};_.gC=function pHb(){return QA};_.Ee=function qHb(){return this.c};_.Fe=function rHb(){return this.b};_.Ke=function sHb(a,b,c){var d;bFb(this,c);d=aFb(this).j;if(b.gC()==fz){zqb(Vq(d.b[y6b],135),new h0(Vq(b,142).e));zqb(Vq(d.b[z6b],135),new h0(Vq(b,142).c))}zqb(Vq(d.b[W5b],135),new h0(this.M))};_.cM={177:1,180:1};_.b=false;_.c=0;_=uHb.prototype=tHb.prototype=new WEb;_.Je=function vHb(){return null};_.gC=function wHb(){return RA};_.cM={180:1,185:1};_=MUb.prototype;_.rb=function QUb(){SLb(this.c,new TUb(this.b))};_=TUb.prototype=RUb.prototype=new VLb;_.gC=function UUb(){return YC};_.nd=function VUb(){V9(this,new Ftb(45,Nab(this.B.D),1,2000))};_.ib=function WUb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;Iyb(this.A.E,0,200,800);Psb(this.C,this.A);c=new yub;for(i=0;i<=40;++i){c.I.Cc(new Nyb(-500,-75,i*25-500));c.I.Cc(new Nyb(500,-75,i*25-500));c.I.Cc(new Nyb(i*25-500,-75,-500));c.I.Cc(new Nyb(i*25-500,-75,500))}n=new tFb;qFb(n,new Ztb(16777215));n.M=0.2;k=new DJb(c,n,(MJb(),KJb));Psb(this.C,k);C=new rrb(SUb());jrb(C,(L_(),L_(),K_));this.b=new J5;t=new FHb;t.q=C;t.L=true;z5(this.b,t);u=new FHb;zHb(u,new Ztb(14540253));iFb(u,(IGb(),FGb));z5(this.b,u);y=new oIb;hIb(y,new Ztb(197379));iIb(y,new Ztb(14540253));lIb(y,new Ztb(39168));y.w=30;iFb(y,FGb);z5(this.b,y);z5(this.b,new aIb);p=new SGb;NGb(p,new Ztb(16755200));p.L=true;fFb(p,(JFb(),CFb));z5(this.b,p);v=new FHb;zHb(v,new Ztb(14540253));iFb(v,HGb);z5(this.b,v);A=new oIb;A.s=C;A.L=true;z5(this.b,A);x=new aIb;iFb(x,HGb);z5(this.b,x);q=new SGb;NGb(q,new Ztb(65450));q.i=true;z5(this.b,q);z5(this.b,new mHb);w=new FHb;zHb(w,new Ztb(6710886));BHb(w,new Ztb(16711680));yHb(w,new Ztb(0));iFb(w,HGb);z5(this.b,w);z=new oIb;hIb(z,new Ztb(0));kIb(z,new Ztb(16776960));iIb(z,new Ztb(0));lIb(z,new Ztb(6710886));z.w=10;iFb(z,HGb);z.M=0.9;z.L=true;z5(this.b,z);r=new SGb;q.k=C;q.L=true;z5(this.b,r);g=new FDb(70,32,16);e=new FDb(70,32,16);f=new FDb(70,32,16);for(i=0,j=f.r.Nc();i<j;++i){b=Vq(f.r.Fc(i),144);b.i=0}wub(f,this.b);z5(this.b,new uHb);this.c=new J5;for(i=0,j=this.b.c;i<j;++i){o=Vq(D5(this.b,i),180);d=o.gC()==RA?f:o.Q==FGb?e:g;B=new YJb(d,o);eyb(B.E,i%4*200-400);Kyb(B.E,Math.floor(i/4)*200-200);eyb(B.H,Math.random()*200-100);fyb(B.H,Math.random()*200-100);Kyb(B.H,Math.random()*200-100);z5(this.c,B);Psb(this.C,B)}s=new SGb;NGb(s,new Ztb(16777215));this.d=new YJb(new FDb(4,8,8),s);Psb(this.C,this.d);Psb(this.C,new IEb(1118481));a=new MEb(16777215,0.125);eyb(a.E,Math.random()-0.5);fyb(a.E,Math.random()-0.5);Kyb(a.E,Math.random()-0.5);a.E.fe();Psb(this.C,a);this.e=new REb;Psb(this.C,this.e)};_.md=function XUb(){};_.jb=function YUb(a){var b,c,d,e,f;f=1.0E-4*a;eyb(this.A.E,Math.cos(f)*1000);Kyb(this.A.E,Math.sin(f)*1000);jtb(this.A,this.C.E);for(b=0,c=this.c.c;b<c;++b){e=Vq(D5(this.c,b),195);e.H.d+=0.01;e.H.e+=0.005;d=Vq(D5(this.b,b),180);b>9&&Xq(d,187)?Ttb(Vq(d,187).e,0.54,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&Xq(d,186)&&Ttb(Vq(d,186).e,0.04,1,0.7*(0.5+0.5*Math.cos(35*f)))}eyb(this.d.E,Math.sin(f*7)*300);fyb(this.d.E,Math.cos(f*5)*400);Kyb(this.d.E,Math.cos(f*3)*300);eyb(this.e.d,this.d.E.d);fyb(this.e.d,this.d.E.e);Kyb(this.e.d,this.d.E.c)};_.b=null;_.c=null;_.d=null;_.e=null;var wy=X_(C6b,'ShaderDepth'),vy=X_(C6b,'ShaderDepth_Resources_default_InlineClientBundleGenerator'),ty=X_(C6b,'ShaderDepth_Resources_default_InlineClientBundleGenerator$1'),uy=X_(C6b,'ShaderDepth_Resources_default_InlineClientBundleGenerator$2'),QA=X_(D6b,'MeshDepthMaterial'),RA=X_(D6b,'MeshFaceMaterial'),YC=X_(C5b,'MaterialsCanvas2D$DemoScene');m2b(be)(16);