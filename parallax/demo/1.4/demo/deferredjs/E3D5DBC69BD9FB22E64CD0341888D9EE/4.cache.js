function nTb(){}
function sTb(){}
function nac(){k5b.call(this)}
function lTb(){KSb.call(this,new nTb,20)}
function qTb(){KSb.call(this,new sTb,20)}
function vTb(){KSb.call(this,new xTb,10)}
function xTb(){this.b=200;this.a=200}
function KSb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;mNb.call(this);n=b+1;for(g=0;g<=20;g++){t=g/20;for(j=0;j<=b;j++){o=j/b;k=a.fe(o,t);this.s.Fc(k)}}for(i=0;i<20;i++){for(j=0;j<b;j++){c=i*n+j;d=i*n+j+1;e=(i+1)*n+j;f=(i+1)*n+j+1;p=new t1b(i/b,j/20);q=new t1b(i/b,(j+1)/20);r=new t1b((i+1)/b,j/20);s=new t1b((i+1)/b,(j+1)/20);this.i.Fc(new UNb(c,d,e));this.i.Fc(new UNb(d,f,e));qu(ynb(this.g,0),121).Fc(new bob(gu(KQ,KAc,245,[p,q,r])));qu(ynb(this.g,0),121).Fc(new bob(gu(KQ,KAc,245,[q,s,r])))}}dNb(this);gNb(this,false)}
var VFc='thothbot.parallax.core.shared.geometries.parametric.';TR(860,803,LAc);TR(869,860,LAc,lTb);TR(870,1,{},nTb);_.fe=function oTb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Thb(a)*(1+aib(a))+2*(1-Thb(a)/2)*Thb(a)*Thb(b);e=-8*aib(a)-2*(1-Thb(a)/2)*aib(a)*Thb(b)}else{c=3*Thb(a)*(1+aib(a))+2*(1-Thb(a)/2)*Math.cos(b+3.141592653589793);e=-8*aib(a)}d=-2*(1-Thb(a)/2)*aib(b);return new g2b(c,d,e)};TR(871,860,LAc,qTb);TR(872,1,{},sTb);_.fe=function tTb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Thb(c)*(2+a*Math.cos(c/2));e=aib(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new g2b(d,e,f)};TR(873,860,LAc,vTb);TR(874,1,{},xTb);_.fe=function yTb(a,b){var c,d;c=a*this.b;d=b*this.a;return new g2b(c,0,d)};_.a=0;_.b=0;TR(1020,1,SAc);_.yb=function lac(){h5b(this.b,new nac(this.a))};TR(1021,944,{},nac);_.mb=function oac(){var a,b,c,d,e,f,g,i;this.a=new DMb(45,BDb(this.D.n),1,2000);r1b(this.a._,400);ELb(this.F,new bUb(4210752));b=new DUb(16777215);a2b(b._,0,0,1);ELb(this.F,b);i=new jKb(SFc);dKb(i,(yCb(),xCb));eKb(i,xCb);i.k=16;d=new Fnb;c=new tYb;c.q=i;lYb(c,new l_b(12303291));EVb(c,(rXb(),pXb));hu(d.a,d.b++,c);a=new BXb;vXb(a,new l_b(16777215));a.i=true;a.W=true;a.Z=0.1;hu(d.a,d.b++,a);e=w4b(new lTb,d);a2b(e._,0,0,0);e.eb.kf(20);ELb(this.F,e);f=w4b(new qTb,d);a2b(f._,10,0,0);f.eb.kf(100);ELb(this.F,f);g=w4b(new vTb,d);a2b(g._,20,0,0);ELb(this.F,g)};_.nb=function pac(a){var b,c,d;q1b(this.a._,Math.cos(a*1.0E-4)*800);c2b(this.a._,Math.sin(a*1.0E-4)*800);bMb(this.a,this.F._);for(b=0,c=this.F.Q.b;b<c;b++){d=qu(ynb(this.F.Q,b),196);q_b(d.cb,0.01);r_b(d.cb,0.005)}NDb(this.D.n,this.F,this.a,null,false)};var tK=Hgb(zFc,'GeometriesParametric$DemoScene',1021),KH=Hgb(UFc,'ParametricGeometry',860),VH=Hgb(VFc,'KleinParametricGeometry',869),UH=Hgb(VFc,'KleinParametricGeometry$1',870),XH=Hgb(VFc,'MobiusParametricGeometry',871),WH=Hgb(VFc,'MobiusParametricGeometry$1',872),ZH=Hgb(VFc,'PlaneParametricGeometry',873),YH=Hgb(VFc,'PlaneParametricGeometry$1',874);cBc(wi)(4);