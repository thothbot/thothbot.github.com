function OJb(){}
function wKb(){}
function AKb(){}
function zKb(){}
function DKb(){}
function HKb(){}
function GKb(){}
function KKb(){}
function NKb(){}
function LYb(){}
function MYb(){zTb.call(this)}
function PJb(a,b){QJb.call(this,a,b)}
function xKb(){PJb.call(this,new AKb,20)}
function EKb(){PJb.call(this,new HKb,20)}
function LKb(){PJb.call(this,new OKb,10)}
function OKb(){this.b=200;this.a=200}
function QJb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s;lAb.call(this);k=b+1;for(g=0;g<=20;++g){s=g/20;for(i=0;i<=b;++i){n=i/b;j=a.qe(n,s);this.G.Bc(j)}}for(g=0;g<20;++g){for(i=0;i<b;++i){c=g*k+i;d=g*k+i+1;e=(g+1)*k+i;f=(g+1)*k+i+1;o=new jEb(g/b,i/20);p=new jEb(g/b,(i+1)/20);q=new jEb((g+1)/b,i/20);r=new jEb((g+1)/b,(i+1)/20);this.n.Bc(new gBb(c,d,f,e));ws(L9(this.k,0),106).Bc(new sab(ns(UI,{87:1,99:1,153:1},152,[o,p,q,r])))}}_zb(this);aAb(this,(T3(),T3(),R3));dAb(this)}
var Ylc='thothbot.parallax.core.shared.geometries.parametric.';_=OJb.prototype=new Qzb;_.gC=function RJb(){return zC};_=xKb.prototype=wKb.prototype=new OJb;_.gC=function yKb(){return JC};_=AKb.prototype=zKb.prototype=new Kb;_.gC=function BKb(){return IC};_.qe=function CKb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(a)*Math.cos(b);e=-8*Math.sin(a)-2*(1-Math.cos(a)/2)*Math.sin(a)*Math.cos(b)}else{c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(b+3.141592653589793);e=-8*Math.sin(a)}d=-2*(1-Math.cos(a)/2)*Math.sin(b);return new aFb(c,d,e)};_=EKb.prototype=DKb.prototype=new OJb;_.gC=function FKb(){return LC};_=HKb.prototype=GKb.prototype=new Kb;_.gC=function IKb(){return KC};_.qe=function JKb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Math.cos(c)*(2+a*Math.cos(c/2));e=Math.sin(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new aFb(d,e,f)};_=LKb.prototype=KKb.prototype=new OJb;_.gC=function MKb(){return NC};_=OKb.prototype=NKb.prototype=new Kb;_.gC=function PKb(){return MC};_.qe=function QKb(a,b){var c,d;c=a*this.b;d=b*this.a;return new aFb(c,0,d)};_.a=0;_.b=0;_=GYb.prototype;_.pb=function KYb(){vTb(this.b,new MYb(this.a))};_=MYb.prototype=LYb.prototype=new yTb;_.gC=function NYb(){return CE};_.md=function OYb(){beb(this,new szb(45,Veb(this.A.D),1,2000))};_.gb=function PYb(){var a,b,c,d,e,f,g,i;this.z.W.d=400;yyb(this.B,this.z);yyb(this.B,new VLb(4210752));b=new aMb(16777215);WEb(b.W,0,0,1);yyb(this.B,b);i=(ySb(),ASb(Vlc,(Fxb(),Exb),null));Xwb(i,(Fob(),Eob));Ywb(i,Eob);i.k=16;d=new R9;c=new rPb;c.p=i;kPb(c,new Mzb(12303291));DMb(c,(tOb(),rOb));os(d.a,d.b++,c);a=new DOb;yOb(a,new Mzb(16777215));a.g=true;a.Q=true;a.R=0.1;os(d.a,d.b++,a);e=RSb(new xKb,d);WEb(e.W,0,0,0);e._.fe(20);yyb(this.B,e);f=RSb(new EKb,d);WEb(f.W,10,0,0);f._.fe(100);yyb(this.B,f);g=RSb(new LKb,d);WEb(g.W,20,0,0);yyb(this.B,g)};_.ld=function QYb(){};_.hb=function RYb(a){var b,c,d;tEb(this.z.W,Math.cos(a*1.0E-4)*800);ZEb(this.z.W,Math.sin(a*1.0E-4)*800);Yyb(this.z,this.B.W);for(b=0,c=this.B.K.b;b<c;++b){d=ws(L9(this.B.K,b),198);d.Ed().c+=0.01;d.Ed().d+=0.005}};var zC=d4(Wlc,'ParametricGeometry'),JC=d4(Ylc,'KleinParametricGeometry'),IC=d4(Ylc,'KleinParametricGeometry$1'),LC=d4(Ylc,'MobiusParametricGeometry'),KC=d4(Ylc,'MobiusParametricGeometry$1'),NC=d4(Ylc,'PlaneParametricGeometry'),MC=d4(Ylc,'PlaneParametricGeometry$1'),CE=d4(Ilc,'GeometriesParametric$DemoScene');gic(Vd)(8);