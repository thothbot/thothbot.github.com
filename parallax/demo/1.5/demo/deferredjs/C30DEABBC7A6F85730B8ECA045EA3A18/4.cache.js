function kXb(){}
function pXb(){}
function pfc(){N9b.call(this)}
function iXb(){FWb.call(this,new kXb,20)}
function nXb(){FWb.call(this,new pXb,20)}
function sXb(){FWb.call(this,new uXb,10)}
function uXb(){this.c=200;this.b=200}
function FWb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;fRb.call(this);n=b+1;for(i=0;i<=20;i++){t=i/20;for(j=0;j<=b;j++){o=j/b;k=a.me(o,t);this.t.Ic(k)}}for(g=0;g<20;g++){for(j=0;j<b;j++){c=g*n+j;d=g*n+j+1;e=(g+1)*n+j;f=(g+1)*n+j+1;p=new t5b(g/b,j/20);q=new t5b(g/b,(j+1)/20);r=new t5b((g+1)/b,j/20);s=new t5b((g+1)/b,(j+1)/20);this.j.Ic(new NRb(c,d,e));this.j.Ic(new NRb(d,f,e));Eu(Aqb(this.i,0),173).Ic(new drb(uu(fT,OLc,297,[p,q,r])));Eu(Aqb(this.i,0),173).Ic(new drb(uu(fT,OLc,297,[q,s,r])))}}YQb(this);_Qb(this,false)}
var kRc='thothbot.parallax.core.shared.geometries.parametric.';mU(874,817,PLc);mU(884,874,PLc,iXb);mU(885,1,{},kXb);_.me=function lXb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Tkb(a)*(1+alb(a))+2*(1-Tkb(a)/2)*Tkb(a)*Tkb(b);e=-8*alb(a)-2*(1-Tkb(a)/2)*alb(a)*Tkb(b)}else{c=3*Tkb(a)*(1+alb(a))+2*(1-Tkb(a)/2)*Math.cos(b+3.141592653589793);e=-8*alb(a)}d=-2*(1-Tkb(a)/2)*alb(b);return new h6b(c,d,e)};mU(886,874,PLc,nXb);mU(887,1,{},pXb);_.me=function qXb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Tkb(c)*(2+a*Math.cos(c/2));e=alb(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new h6b(d,e,f)};mU(888,874,PLc,sXb);mU(889,1,{},uXb);_.me=function vXb(a,b){var c,d;c=a*this.c;d=b*this.b;return new h6b(c,0,d)};_.b=0;_.c=0;mU(1052,1,WLc);_.Db=function nfc(){n9b(this.c,new pfc(this.b))};mU(1053,967,{},pfc);_.ob=function qfc(){var a,b,c,d,e,f,g,i;this.b=new tQb(45,JGb(this.H.n),1,2000);r5b(this.b.ab,400);qPb(this.I,new $Xb(4210752));b=new AYb(16777215);b6b(b.ab,0,0,1);qPb(this.I,b);i=new VNb(hRc);PNb(i,(MFb(),LFb));QNb(i,LFb);i.n=16;d=new Hqb;c=new q0b;c.r=i;i0b(c,new m3b(12303291));BZb(c,(n_b(),l_b));vu(d.b,d.c++,c);a=new x_b;r_b(a,new m3b(16777215));a.j=true;a.X=true;a.$=0.1;BZb(a,l_b);vu(d.b,d.c++,a);e=B8b(new iXb,d);b6b(e.ab,0,0,0);e.fb.rf(20);qPb(this.I,e);f=B8b(new nXb,d);b6b(f.ab,10,0,0);f.fb.rf(100);qPb(this.I,f);g=B8b(new sXb,d);b6b(g.ab,20,0,0);qPb(this.I,g)};_.pb=function rfc(a){var b,c,d;q5b(this.b.ab,Math.cos(a*1.0E-4)*800);d6b(this.b.ab,Math.sin(a*1.0E-4)*800);PPb(this.b,this.I.ab);for(b=0,c=this.I.R.c;b<c;b++){d=Eu(Aqb(this.I.R,b),249);r3b(d.db,0.01);s3b(d.db,0.005)}VGb(this.H.n,this.I,this.b,null,false)};var kL=Hjb(QQc,'GeometriesParametric$DemoScene',1053),jI=Hjb(jRc,'ParametricGeometry',874),vI=Hjb(kRc,'KleinParametricGeometry',884),uI=Hjb(kRc,'KleinParametricGeometry$1',885),xI=Hjb(kRc,'MobiusParametricGeometry',886),wI=Hjb(kRc,'MobiusParametricGeometry$1',887),zI=Hjb(kRc,'PlaneParametricGeometry',888),yI=Hjb(kRc,'PlaneParametricGeometry$1',889);iMc(Hi)(4);