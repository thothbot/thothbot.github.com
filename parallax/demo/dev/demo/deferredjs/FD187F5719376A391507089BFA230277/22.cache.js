function D1b(){}
function K1b(){}
function L1b(a){this.a=a}
function E1b(){VRb.call(this)}
function G5b(a){var b,c,d;if(!a.g||!a.d)return;b=a.b/a.f;a.j+=8;a.j=a.j%a.b;a.j<0&&(a.j+=a.b);c=a.i+zr(LCb(zr(D5(a.j/b)),a.f-1));if(c!=a.a){qab(a.g.g,a.e,new J4(0));qab(a.g.g,a.a,new J4(1));qab(a.g.g,c,new J4(0));a.e=a.a;a.a=c}d=a.j%b/b;qab(a.g.g,a.a,new J4(d));qab(a.g.g,a.e,new J4(1-d))}
var Tyc='./static/models/animated/flamingo.js',Vyc='MorphNormalsFlamingo$DemoScene',Wyc='MorphNormalsFlamingo$DemoScene$1';_=y1b.prototype;_.qb=function C1b(){RRb(this.b,new E1b(this.a))};_=E1b.prototype=D1b.prototype=new URb;_.gC=function F1b(){return QE};_.xd=function G1b(){Feb(this,new oAb(40,xfb(this.A.C),1,10000))};_.hb=function H1b(){var a,b;this.z.D.d=200;Azb(this.B,this.z);b=new MKb(16777215,1.3);sEb(b.D,1,1,1);Azb(this.B,b);this.a=new v5b;try{d5b(this.a,Tyc,new L1b(this))}catch(a){a=YG(a);if(vr(a,40)){rzb();ZK(qzb,(FK(),DK),Uyc)}else throw a}this.A.I=true;this.A.J=true;this.A.M=false;this.A.H=false};_.wd=function I1b(){};_.ib=function J1b(a){var b;this.b=ad();b=a*0.01;QDb(this.z.D,600*Math.sin(b*3.141592653589793/360));uEb(this.z.D,600*Math.cos(b*3.141592653589793/360));Uzb(this.z,this.B.D);G5b(k5b(this.a),zr(ad()-this.b));Spb(this.A,false,false,false)};_.a=null;_.b=0;_=L1b.prototype=K1b.prototype=new Tb;_.gC=function M1b(){return PE};_.Ze=function N1b(){var a;k5b(this.a.a).b=3000;a=m5b(this.a.a);tEb(a.I,2);tEb(a.D,0);Azb(this.a.B,a)};_.a=null;var QE=u4(Hrc,Vyc),PE=u4(Hrc,Wyc);C8b(be)(22);