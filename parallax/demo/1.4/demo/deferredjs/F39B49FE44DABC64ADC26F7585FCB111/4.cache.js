function vTb(){}
function ATb(){}
function oac(){k5b.call(this)}
function tTb(){QSb.call(this,new vTb,20)}
function yTb(){QSb.call(this,new ATb,20)}
function DTb(){QSb.call(this,new FTb,10)}
function FTb(){this.b=200;this.a=200}
function QSb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;sNb.call(this);n=b+1;for(g=0;g<=20;g++){t=g/20;for(j=0;j<=b;j++){o=j/b;k=a.fe(o,t);this.s.Fc(k)}}for(i=0;i<20;i++){for(j=0;j<b;j++){c=i*n+j;d=i*n+j+1;e=(i+1)*n+j;f=(i+1)*n+j+1;p=new u1b(i/b,j/20);q=new u1b(i/b,(j+1)/20);r=new u1b((i+1)/b,j/20);s=new u1b((i+1)/b,(j+1)/20);this.i.Fc(new $Nb(c,d,e));this.i.Fc(new $Nb(d,f,e));tu(Fnb(this.g,0),121).Fc(new iob(ju(LQ,tAc,244,[p,q,r])));tu(Fnb(this.g,0),121).Fc(new iob(ju(LQ,tAc,244,[q,s,r])))}}jNb(this);mNb(this,false)}
var GFc='thothbot.parallax.core.shared.geometries.parametric.';UR(862,805,uAc);UR(872,862,uAc,tTb);UR(873,1,{},vTb);_.fe=function wTb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*$hb(a)*(1+hib(a))+2*(1-$hb(a)/2)*$hb(a)*$hb(b);e=-8*hib(a)-2*(1-$hb(a)/2)*hib(a)*$hb(b)}else{c=3*$hb(a)*(1+hib(a))+2*(1-$hb(a)/2)*Math.cos(b+3.141592653589793);e=-8*hib(a)}d=-2*(1-$hb(a)/2)*hib(b);return new h2b(c,d,e)};UR(874,862,uAc,yTb);UR(875,1,{},ATb);_.fe=function BTb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=$hb(c)*(2+a*Math.cos(c/2));e=hib(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new h2b(d,e,f)};UR(876,862,uAc,DTb);UR(877,1,{},FTb);_.fe=function GTb(a,b){var c,d;c=a*this.b;d=b*this.a;return new h2b(c,0,d)};_.a=0;_.b=0;UR(1022,1,BAc);_.yb=function mac(){h5b(this.b,new oac(this.a))};UR(1023,946,{},oac);_.mb=function pac(){var a,b,c,d,e,f,g,i;this.a=new JMb(45,HDb(this.D.n),1,2000);s1b(this.a._,400);KLb(this.F,new jUb(4210752));b=new LUb(16777215);b2b(b._,0,0,1);KLb(this.F,b);i=new pKb(DFc);jKb(i,(FCb(),ECb));kKb(i,ECb);i.k=16;d=new Mnb;c=new vYb;c.q=i;nYb(c,new n_b(12303291));MVb(c,(zXb(),xXb));ku(d.a,d.b++,c);a=new JXb;DXb(a,new n_b(16777215));a.i=true;a.W=true;a.Z=0.1;MVb(a,xXb);ku(d.a,d.b++,a);e=w4b(new tTb,d);b2b(e._,0,0,0);e.eb.kf(20);KLb(this.F,e);f=w4b(new yTb,d);b2b(f._,10,0,0);f.eb.kf(100);KLb(this.F,f);g=w4b(new DTb,d);b2b(g._,20,0,0);KLb(this.F,g)};_.nb=function qac(a){var b,c,d;r1b(this.a._,Math.cos(a*1.0E-4)*800);d2b(this.a._,Math.sin(a*1.0E-4)*800);hMb(this.a,this.F._);for(b=0,c=this.F.Q.b;b<c;b++){d=tu(Fnb(this.F.Q,b),196);s_b(d.cb,0.01);t_b(d.cb,0.005)}TDb(this.D.n,this.F,this.a,null,false)};var yK=Ogb(kFc,'GeometriesParametric$DemoScene',1023),PH=Ogb(FFc,'ParametricGeometry',862),_H=Ogb(GFc,'KleinParametricGeometry',872),$H=Ogb(GFc,'KleinParametricGeometry$1',873),bI=Ogb(GFc,'MobiusParametricGeometry',874),aI=Ogb(GFc,'MobiusParametricGeometry$1',875),dI=Ogb(GFc,'PlaneParametricGeometry',876),cI=Ogb(GFc,'PlaneParametricGeometry$1',877);NAc(xi)(4);