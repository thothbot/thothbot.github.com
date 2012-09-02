function eGb(){}
function OGb(){}
function SGb(){}
function RGb(){}
function VGb(){}
function ZGb(){}
function YGb(){}
function aHb(){}
function eHb(){}
function dHb(){}
function hHb(){}
function kHb(){}
function ITb(){}
function JTb(){pPb.call(this)}
function fGb(a,b){gGb.call(this,a,b)}
function PGb(){fGb.call(this,new SGb,20)}
function WGb(){fGb.call(this,new ZGb,20)}
function bHb(){fGb.call(this,new eHb,20)}
function iHb(){fGb.call(this,new lHb,10)}
function lHb(){this.b=200;this.a=200}
function gGb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s;cxb.call(this);k=b+1;for(g=0;g<=20;++g){s=g/20;for(i=0;i<=b;++i){n=i/b;j=a.we(n,s);this.I.Jc(j)}}for(g=0;g<20;++g){for(i=0;i<b;++i){c=g*k+i;d=g*k+i+1;e=(g+1)*k+i;f=(g+1)*k+i+1;o=new BAb(g/b,i/20);p=new BAb(g/b,(i+1)/20);q=new BAb((g+1)/b,i/20);r=new BAb((g+1)/b,(i+1)/20);this.n.Jc(new Yxb(c,d,f,e));ur(Y7(this.k,0),106).Jc(new F8(lr(cG,{87:1,99:1,151:1},150,[o,p,q,r])))}}Swb(this);Twb(this,(e2(),e2(),c2));Wwb(this)}
var Isc='GeometriesParametric$DemoScene',Asc='Klein',Bsc='Klein$1',Csc='Mobius',Dsc='Mobius$1',Esc='Mobius3d',Fsc='Mobius3d$1',ysc='Parametric',Hsc='Plane$1',zsc='thothbot.parallax.core.shared.geometries.parametric.';_=eGb.prototype=new Hwb;_.gC=function hGb(){return ZA};_=PGb.prototype=OGb.prototype=new eGb;_.gC=function QGb(){return hB};_=SGb.prototype=RGb.prototype=new Ub;_.gC=function TGb(){return gB};_.we=function UGb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(a)*Math.cos(b);e=-8*Math.sin(a)-2*(1-Math.cos(a)/2)*Math.sin(a)*Math.cos(b)}else{c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(b+3.141592653589793);e=-8*Math.sin(a)}d=-2*(1-Math.cos(a)/2)*Math.sin(b);return new sBb(c,d,e)};_=WGb.prototype=VGb.prototype=new eGb;_.gC=function XGb(){return lB};_=ZGb.prototype=YGb.prototype=new Ub;_.gC=function $Gb(){return iB};_.we=function _Gb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Math.cos(c)*(2+a*Math.cos(c/2));e=Math.sin(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new sBb(d,e,f)};_=bHb.prototype=aHb.prototype=new eGb;_.gC=function cHb(){return kB};_=eHb.prototype=dHb.prototype=new Ub;_.gC=function fHb(){return jB};_.we=function gHb(a,b){var c,d,e,f;a*=3.141592653589793;b*=6.283185307179586;a=a*2;c=a/2;d=0.125*Math.cos(b)*Math.cos(c)-0.65*Math.sin(b)*Math.sin(c);f=0.125*Math.cos(b)*Math.sin(c)+0.65*Math.sin(b)*Math.cos(c);e=(2.25+d)*Math.sin(a);d=(2.25+d)*Math.cos(a);return new sBb(d,e,f)};_=iHb.prototype=hHb.prototype=new eGb;_.gC=function jHb(){return nB};_=lHb.prototype=kHb.prototype=new Ub;_.gC=function mHb(){return mB};_.we=function nHb(a,b){var c,d;c=a*this.b;d=b*this.a;return new sBb(c,0,d)};_.a=0;_.b=0;_=DTb.prototype;_.qb=function HTb(){lPb(this.b,new JTb(this.a))};_=JTb.prototype=ITb.prototype=new oPb;_.gC=function KTb(){return VC};_.ud=function LTb(){ocb(this,new jwb(45,gdb(this.A.C),1,2000))};_.hb=function MTb(){var a,b,c,d,e,f,g,i,j;this.z.D.d=400;tvb(this.B,this.z);tvb(this.B,new KHb(4210752));b=new NHb;nBb(b.D,0,0,1);tvb(this.B,b);j=(pOb(),rOb(osc,(Cub(),Bub),null));Utb(j,(Omb(),Nmb));Vtb(j,Nmb);j.k=16;d=new c8;c=new WKb;c.p=j;QKb(c,new Dwb(12303291));lIb(c,(ZJb(),XJb));mr(d.a,d.b++,c);a=new hKb;cKb(a,new Dwb(16777215));a.g=true;a.N=true;a.O=0.1;mr(d.a,d.b++,a);e=IOb(new PGb,d);nBb(e.Jd(),0,0,0);e.I.le(20);tvb(this.B,e);f=IOb(new WGb,d);nBb(f.Jd(),10,0,0);f.I.le(100);tvb(this.B,f);g=IOb(new iHb,d);nBb(g.Jd(),10,0,0);tvb(this.B,g);i=IOb(new bHb,d);nBb(i.Jd(),10,0,0);i.I.le(100);tvb(this.B,i)};_.td=function NTb(){};_.ib=function OTb(a){var b,c,d;LAb(this.z.D,Math.cos(a*1.0E-4)*800);pBb(this.z.D,Math.sin(a*1.0E-4)*800);Pvb(this.z,this.B.D);for(b=0,c=this.B.u.b;b<c;++b){d=ur(Y7(this.B.u,b),191);d.Kd().c+=0.01;d.Kd().d+=0.005}};var ZA=q2(psc,ysc),hB=q2(zsc,Asc),gB=q2(zsc,Bsc),lB=q2(zsc,Csc),iB=q2(zsc,Dsc),kB=q2(zsc,Esc),jB=q2(zsc,Fsc),nB=q2(zsc,Gsc),mB=q2(zsc,Hsc),VC=q2(Jpc,Isc);E6b(ce)(7);