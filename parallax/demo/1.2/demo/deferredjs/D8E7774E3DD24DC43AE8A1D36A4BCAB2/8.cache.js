function xJb(){}
function fKb(){}
function jKb(){}
function iKb(){}
function mKb(){}
function qKb(){}
function pKb(){}
function tKb(){}
function wKb(){}
function uYb(){}
function vYb(){iTb.call(this)}
function yJb(a,b){zJb.call(this,a,b)}
function gKb(){yJb.call(this,new jKb,20)}
function nKb(){yJb.call(this,new qKb,20)}
function uKb(){yJb.call(this,new xKb,10)}
function xKb(){this.b=200;this.a=200}
function zJb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s;Wzb.call(this);k=b+1;for(g=0;g<=20;++g){s=g/20;for(i=0;i<=b;++i){n=i/b;j=a.qe(n,s);this.G.Bc(j)}}for(g=0;g<20;++g){for(i=0;i<b;++i){c=g*k+i;d=g*k+i+1;e=(g+1)*k+i;f=(g+1)*k+i+1;o=new UDb(g/b,i/20);p=new UDb(g/b,(i+1)/20);q=new UDb((g+1)/b,i/20);r=new UDb((g+1)/b,(i+1)/20);this.n.Bc(new RAb(c,d,f,e));ms(u9(this.k,0),106).Bc(new bab(ds(KI,{87:1,99:1,153:1},152,[o,p,q,r])))}}Kzb(this);Lzb(this,(C3(),C3(),A3));Ozb(this)}
var Elc='thothbot.parallax.core.shared.geometries.parametric.';_=xJb.prototype=new zzb;_.gC=function AJb(){return pC};_=gKb.prototype=fKb.prototype=new xJb;_.gC=function hKb(){return zC};_=jKb.prototype=iKb.prototype=new Kb;_.gC=function kKb(){return yC};_.qe=function lKb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(a)*Math.cos(b);e=-8*Math.sin(a)-2*(1-Math.cos(a)/2)*Math.sin(a)*Math.cos(b)}else{c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(b+3.141592653589793);e=-8*Math.sin(a)}d=-2*(1-Math.cos(a)/2)*Math.sin(b);return new LEb(c,d,e)};_=nKb.prototype=mKb.prototype=new xJb;_.gC=function oKb(){return BC};_=qKb.prototype=pKb.prototype=new Kb;_.gC=function rKb(){return AC};_.qe=function sKb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Math.cos(c)*(2+a*Math.cos(c/2));e=Math.sin(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new LEb(d,e,f)};_=uKb.prototype=tKb.prototype=new xJb;_.gC=function vKb(){return DC};_=xKb.prototype=wKb.prototype=new Kb;_.gC=function yKb(){return CC};_.qe=function zKb(a,b){var c,d;c=a*this.b;d=b*this.a;return new LEb(c,0,d)};_.a=0;_.b=0;_=pYb.prototype;_.pb=function tYb(){eTb(this.b,new vYb(this.a))};_=vYb.prototype=uYb.prototype=new hTb;_.gC=function wYb(){return sE};_.md=function xYb(){Mdb(this,new bzb(45,Eeb(this.A.D),1,2000))};_.gb=function yYb(){var a,b,c,d,e,f,g,i;this.z.W.d=400;hyb(this.B,this.z);hyb(this.B,new ELb(4210752));b=new LLb(16777215);FEb(b.W,0,0,1);hyb(this.B,b);i=(hSb(),jSb(Blc,(oxb(),nxb),null));Gwb(i,(oob(),nob));Hwb(i,nob);i.k=16;d=new A9;c=new aPb;c.p=i;VOb(c,new vzb(12303291));mMb(c,(cOb(),aOb));es(d.a,d.b++,c);a=new mOb;hOb(a,new vzb(16777215));a.g=true;a.Q=true;a.R=0.1;es(d.a,d.b++,a);e=ASb(new gKb,d);FEb(e.W,0,0,0);e._.fe(20);hyb(this.B,e);f=ASb(new nKb,d);FEb(f.W,10,0,0);f._.fe(100);hyb(this.B,f);g=ASb(new uKb,d);FEb(g.W,20,0,0);hyb(this.B,g)};_.ld=function zYb(){};_.hb=function AYb(a){var b,c,d;cEb(this.z.W,Math.cos(a*1.0E-4)*800);IEb(this.z.W,Math.sin(a*1.0E-4)*800);Hyb(this.z,this.B.W);for(b=0,c=this.B.K.b;b<c;++b){d=ms(u9(this.B.K,b),198);d.Ed().c+=0.01;d.Ed().d+=0.005}};var pC=O3(Clc,'ParametricGeometry'),zC=O3(Elc,'KleinParametricGeometry'),yC=O3(Elc,'KleinParametricGeometry$1'),BC=O3(Elc,'MobiusParametricGeometry'),AC=O3(Elc,'MobiusParametricGeometry$1'),DC=O3(Elc,'PlaneParametricGeometry'),CC=O3(Elc,'PlaneParametricGeometry$1'),sE=O3(olc,'GeometriesParametric$DemoScene');Rhc(Vd)(8);