function lTb(){}
function qTb(){}
function eac(){a5b.call(this)}
function jTb(){GSb.call(this,new lTb,20)}
function oTb(){GSb.call(this,new qTb,20)}
function tTb(){GSb.call(this,new vTb,10)}
function vTb(){this.b=200;this.a=200}
function GSb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;iNb.call(this);n=b+1;for(i=0;i<=20;i++){t=i/20;for(j=0;j<=b;j++){o=j/b;k=a.fe(o,t);this.s.Fc(k)}}for(g=0;g<20;g++){for(j=0;j<b;j++){c=g*n+j;d=g*n+j+1;e=(g+1)*n+j;f=(g+1)*n+j+1;p=new k1b(g/b,j/20);q=new k1b(g/b,(j+1)/20);r=new k1b((g+1)/b,j/20);s=new k1b((g+1)/b,(j+1)/20);this.i.Fc(new QNb(c,d,e));this.i.Fc(new QNb(d,f,e));ru(vnb(this.g,0),121).Fc(new $nb(hu(HQ,jAc,244,[p,q,r])));ru(vnb(this.g,0),121).Fc(new $nb(hu(HQ,jAc,244,[q,s,r])))}}_Mb(this);cNb(this,false)}
var uFc='thothbot.parallax.core.shared.geometries.parametric.';QR(860,803,kAc);QR(870,860,kAc,jTb);QR(871,1,{},lTb);_.fe=function mTb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Qhb(a)*(1+Zhb(a))+2*(1-Qhb(a)/2)*Qhb(a)*Qhb(b);e=-8*Zhb(a)-2*(1-Qhb(a)/2)*Zhb(a)*Qhb(b)}else{c=3*Qhb(a)*(1+Zhb(a))+2*(1-Qhb(a)/2)*Math.cos(b+3.141592653589793);e=-8*Zhb(a)}d=-2*(1-Qhb(a)/2)*Zhb(b);return new Z1b(c,d,e)};QR(872,860,kAc,oTb);QR(873,1,{},qTb);_.fe=function rTb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Qhb(c)*(2+a*Math.cos(c/2));e=Zhb(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new Z1b(d,e,f)};QR(874,860,kAc,tTb);QR(875,1,{},vTb);_.fe=function wTb(a,b){var c,d;c=a*this.b;d=b*this.a;return new Z1b(c,0,d)};_.a=0;_.b=0;QR(1020,1,rAc);_.yb=function cac(){Z4b(this.b,new eac(this.a))};QR(1021,944,{},eac);_.mb=function fac(){var a,b,c,d,e,f,g,i;this.a=new zMb(45,xDb(this.D.n),1,2000);i1b(this.a._,400);ALb(this.F,new _Tb(4210752));b=new BUb(16777215);T1b(b._,0,0,1);ALb(this.F,b);i=new fKb(rFc);_Jb(i,(vCb(),uCb));aKb(i,uCb);i.k=16;d=new Cnb;c=new lYb;c.q=i;dYb(c,new d_b(12303291));CVb(c,(pXb(),nXb));iu(d.a,d.b++,c);a=new zXb;tXb(a,new d_b(16777215));a.i=true;a.W=true;a.Z=0.1;CVb(a,nXb);iu(d.a,d.b++,a);e=m4b(new jTb,d);T1b(e._,0,0,0);e.eb.kf(20);ALb(this.F,e);f=m4b(new oTb,d);T1b(f._,10,0,0);f.eb.kf(100);ALb(this.F,f);g=m4b(new tTb,d);T1b(g._,20,0,0);ALb(this.F,g)};_.nb=function gac(a){var b,c,d;h1b(this.a._,Math.cos(a*1.0E-4)*800);V1b(this.a._,Math.sin(a*1.0E-4)*800);ZLb(this.a,this.F._);for(b=0,c=this.F.Q.b;b<c;b++){d=ru(vnb(this.F.Q,b),196);i_b(d.cb,0.01);j_b(d.cb,0.005)}JDb(this.D.n,this.F,this.a,null,false)};var uK=Egb($Ec,'GeometriesParametric$DemoScene',1021),LH=Egb(tFc,'ParametricGeometry',860),XH=Egb(uFc,'KleinParametricGeometry',870),WH=Egb(uFc,'KleinParametricGeometry$1',871),ZH=Egb(uFc,'MobiusParametricGeometry',872),YH=Egb(uFc,'MobiusParametricGeometry$1',873),_H=Egb(uFc,'PlaneParametricGeometry',874),$H=Egb(uFc,'PlaneParametricGeometry$1',875);DAc(xi)(4);