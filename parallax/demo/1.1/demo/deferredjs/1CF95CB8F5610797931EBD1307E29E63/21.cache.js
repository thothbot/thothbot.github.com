function rZb(){}
function yZb(){}
function zZb(a){this.a=a}
function sZb(){dOb.call(this)}
function n1b(a){var b,c,d;if(!a.g||!a.d)return;b=a.b/a.f;a.j+=8;a.j=a.j%a.b;a.j<0&&(a.j+=a.b);c=a.i+zr(hzb(zr(b3(a.j/b)),a.f-1));if(c!=a.a){Q7(a.g.g,a.e,new q2(0));Q7(a.g.g,a.a,new q2(1));Q7(a.g.g,c,new q2(0));a.e=a.a;a.a=c}d=a.j%b/b;Q7(a.g.g,a.a,new q2(d));Q7(a.g.g,a.e,new q2(1-d))}
var Xsc='./static/models/animated/flamingo.js',Zsc='MorphNormalsFlamingo$DemoScene',$sc='MorphNormalsFlamingo$DemoScene$1';_=mZb.prototype;_.qb=function qZb(){_Nb(this.b,new sZb(this.a))};_=sZb.prototype=rZb.prototype=new cOb;_.gC=function tZb(){return aE};_.ud=function uZb(){ccb(this,new Ovb(40,Wcb(this.A.C),1,10000))};_.hb=function vZb(){var a,b;this.z.D.d=200;Yub(this.B,this.z);b=new VGb(16777215,1.3);RAb(b.D,1,1,1);Yub(this.B,b);this.a=new d1b;try{Q0b(this.a,Xsc,new zZb(this))}catch(a){a=kG(a);if(vr(a,40)){Pub();lK(Oub,(TJ(),RJ),Ysc)}else throw a}this.A.I=true;this.A.J=true;this.A.M=false;this.A.H=false};_.td=function wZb(){};_.ib=function xZb(a){var b;this.b=ad();b=a*0.01;nAb(this.z.D,600*Math.sin(b*3.141592653589793/360));TAb(this.z.D,600*Math.cos(b*3.141592653589793/360));svb(this.z,this.B.D);n1b(T0b(this.a),zr(ad()-this.b));tnb(this.A,false,false,false)};_.a=null;_.b=0;_=zZb.prototype=yZb.prototype=new Tb;_.gC=function AZb(){return _D};_.$e=function BZb(){var a;T0b(this.a.a).b=3000;a=V0b(this.a.a);SAb(a.I,2);SAb(a.D,0);Yub(this.a.B,a)};_.a=null;var aE=e2(aoc,Zsc),_D=e2(aoc,$sc);Z4b(be)(21);