function CTb(){}
function HTb(){}
function vac(){r5b.call(this)}
function ATb(){XSb.call(this,new CTb,20)}
function FTb(){XSb.call(this,new HTb,20)}
function KTb(){XSb.call(this,new MTb,10)}
function MTb(){this.c=200;this.b=200}
function XSb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;zNb.call(this);n=b+1;for(i=0;i<=20;i++){t=i/20;for(j=0;j<=b;j++){o=j/b;k=a.ie(o,t);this.t.Ic(k)}}for(g=0;g<20;g++){for(j=0;j<b;j++){c=g*n+j;d=g*n+j+1;e=(g+1)*n+j;f=(g+1)*n+j+1;p=new B1b(g/b,j/20);q=new B1b(g/b,(j+1)/20);r=new B1b((g+1)/b,j/20);s=new B1b((g+1)/b,(j+1)/20);this.j.Ic(new fOb(c,d,e));this.j.Ic(new fOb(d,f,e));Gu(Mnb(this.i,0),121).Ic(new pob(wu(XQ,BAc,244,[p,q,r])));Gu(Mnb(this.i,0),121).Ic(new pob(wu(XQ,BAc,244,[q,s,r])))}}qNb(this);tNb(this,false)}
var RFc='thothbot.parallax.core.shared.geometries.parametric.';eS(856,799,CAc);eS(866,856,CAc,ATb);eS(867,1,{},CTb);_.ie=function DTb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*fib(a)*(1+oib(a))+2*(1-fib(a)/2)*fib(a)*fib(b);e=-8*oib(a)-2*(1-fib(a)/2)*oib(a)*fib(b)}else{c=3*fib(a)*(1+oib(a))+2*(1-fib(a)/2)*Math.cos(b+3.141592653589793);e=-8*oib(a)}d=-2*(1-fib(a)/2)*oib(b);return new o2b(c,d,e)};eS(868,856,CAc,FTb);eS(869,1,{},HTb);_.ie=function ITb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=fib(c)*(2+a*Math.cos(c/2));e=oib(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new o2b(d,e,f)};eS(870,856,CAc,KTb);eS(871,1,{},MTb);_.ie=function NTb(a,b){var c,d;c=a*this.c;d=b*this.b;return new o2b(c,0,d)};_.b=0;_.c=0;eS(1016,1,JAc);_.Cb=function tac(){o5b(this.c,new vac(this.b))};eS(1017,940,{},vac);_.nb=function wac(){var a,b,c,d,e,f,g,i;this.b=new QMb(45,ODb(this.F.o),1,2000);z1b(this.b.ab,400);RLb(this.G,new qUb(4210752));b=new SUb(16777215);i2b(b.ab,0,0,1);RLb(this.G,b);i=new wKb(OFc);qKb(i,(MCb(),LCb));rKb(i,LCb);i.n=16;d=new Tnb;c=new CYb;c.r=i;uYb(c,new u_b(12303291));TVb(c,(GXb(),EXb));xu(d.b,d.c++,c);a=new QXb;KXb(a,new u_b(16777215));a.j=true;a.X=true;a.$=0.1;TVb(a,EXb);xu(d.b,d.c++,a);e=D4b(new ATb,d);i2b(e.ab,0,0,0);e.fb.nf(20);RLb(this.G,e);f=D4b(new FTb,d);i2b(f.ab,10,0,0);f.fb.nf(100);RLb(this.G,f);g=D4b(new KTb,d);i2b(g.ab,20,0,0);RLb(this.G,g)};_.ob=function xac(a){var b,c,d;y1b(this.b.ab,Math.cos(a*1.0E-4)*800);k2b(this.b.ab,Math.sin(a*1.0E-4)*800);oMb(this.b,this.G.ab);for(b=0,c=this.G.R.c;b<c;b++){d=Gu(Mnb(this.G.R,b),196);z_b(d.db,0.01);A_b(d.db,0.005)}$Db(this.F.o,this.G,this.b,null,false)};var KK=Vgb(vFc,'GeometriesParametric$DemoScene',1017),_H=Vgb(QFc,'ParametricGeometry',856),lI=Vgb(RFc,'KleinParametricGeometry',866),kI=Vgb(RFc,'KleinParametricGeometry$1',867),nI=Vgb(RFc,'MobiusParametricGeometry',868),mI=Vgb(RFc,'MobiusParametricGeometry$1',869),pI=Vgb(RFc,'PlaneParametricGeometry',870),oI=Vgb(RFc,'PlaneParametricGeometry$1',871);VAc(Hi)(4);