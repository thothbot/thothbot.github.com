function dVb(){}
function iVb(){}
function _cc(){n7b.call(this)}
function bVb(){yUb.call(this,new dVb,20)}
function gVb(){yUb.call(this,new iVb,20)}
function lVb(){yUb.call(this,new nVb,10)}
function nVb(){this.b=200;this.a=200}
function yUb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;aPb.call(this);n=b+1;for(g=0;g<=20;g++){t=g/20;for(j=0;j<=b;j++){o=j/b;k=a.fe(o,t);this.s.Ec(k)}}for(i=0;i<20;i++){for(j=0;j<b;j++){c=i*n+j;d=i*n+j+1;e=(i+1)*n+j;f=(i+1)*n+j+1;p=new Z2b(i/b,j/20);q=new Z2b(i/b,(j+1)/20);r=new Z2b((i+1)/b,j/20);s=new Z2b((i+1)/b,(j+1)/20);this.i.Ec(new IPb(c,d,e));this.i.Ec(new IPb(d,f,e));Au(_ob(this.g,0),173).Ec(new Epb(qu(RR,BGc,296,[p,q,r])));Au(_ob(this.g,0),173).Ec(new Epb(qu(RR,BGc,296,[q,s,r])))}}TOb(this);WOb(this,false)}
var aMc='thothbot.parallax.core.shared.geometries.parametric.';YS(866,809,CGc);YS(876,866,CGc,bVb);YS(877,1,{},dVb);_.fe=function eVb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*tjb(a)*(1+Cjb(a))+2*(1-tjb(a)/2)*tjb(a)*tjb(b);e=-8*Cjb(a)-2*(1-tjb(a)/2)*Cjb(a)*tjb(b)}else{c=3*tjb(a)*(1+Cjb(a))+2*(1-tjb(a)/2)*Math.cos(b+3.141592653589793);e=-8*Cjb(a)}d=-2*(1-tjb(a)/2)*Cjb(b);return new M3b(c,d,e)};YS(878,866,CGc,gVb);YS(879,1,{},iVb);_.fe=function jVb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=tjb(c)*(2+a*Math.cos(c/2));e=Cjb(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new M3b(d,e,f)};YS(880,866,CGc,lVb);YS(881,1,{},nVb);_.fe=function oVb(a,b){var c,d;c=a*this.b;d=b*this.a;return new M3b(c,0,d)};_.a=0;_.b=0;YS(1043,1,JGc);_.zb=function Zcc(){P6b(this.b,new _cc(this.a))};YS(1044,958,{},_cc);_.nb=function adc(){var a,b,c,d,e,f,g,i;this.a=new sOb(45,eFb(this.D.k),1,2000);X2b(this.a._,400);sNb(this.F,new TVb(4210752));b=new tWb(16777215);G3b(b._,0,0,1);sNb(this.F,b);i=new XLb(ZLc);RLb(i,(iEb(),hEb));SLb(i,hEb);i.k=16;d=new gpb;c=new _Zb;c.q=i;TZb(c,new S0b(12303291));tXb(c,(eZb(),cZb));ru(d.a,d.b++,c);a=new oZb;iZb(a,new S0b(16777215));a.i=true;a.W=true;a.Z=0.1;tXb(a,cZb);ru(d.a,d.b++,a);e=c6b(new bVb,d);G3b(e._,0,0,0);e.eb.hf(20);sNb(this.F,e);f=c6b(new gVb,d);G3b(f._,10,0,0);f.eb.hf(100);sNb(this.F,f);g=c6b(new lVb,d);G3b(g._,20,0,0);sNb(this.F,g)};_.ob=function bdc(a){var b,c,d;W2b(this.a._,Math.cos(a*1.0E-4)*800);I3b(this.a._,Math.sin(a*1.0E-4)*800);QNb(this.a,this.F._);for(b=0,c=this.F.Q.b;b<c;b++){d=Au(_ob(this.F.Q,b),248);X0b(d.cb,0.01);Y0b(d.cb,0.005)}qFb(this.D.k,this.F,this.a,null,false)};var ZK=hib(GLc,'GeometriesParametric$DemoScene',1044),ZH=hib(_Lc,'ParametricGeometry',866),jI=hib(aMc,'KleinParametricGeometry',876),iI=hib(aMc,'KleinParametricGeometry$1',877),lI=hib(aMc,'MobiusParametricGeometry',878),kI=hib(aMc,'MobiusParametricGeometry$1',879),nI=hib(aMc,'PlaneParametricGeometry',880),mI=hib(aMc,'PlaneParametricGeometry$1',881);WGc(xi)(4);