function XNb(a,b){a.f=b}
function F8b(a){this.a=a}
function I8b(a){this.a=a}
function J3b(a,b){a.j=0;a.e=b;a.g=a.e-a.j+1}
function B8b(){k5b.call(this);this.f=new h2b(0,150,0)}
function i_b(a){var b;b=f_b(a);b.a+=0;b.c+=0.3;b.b+=0;j_b(a,b.a,b.c,b.b);return a}
function I3b(a,b){LLb(a,b);b.d=a.d;b.i=a.i;b.k=a.k;b.f=a.f;b.a=a.a;b.b=a.b;b.c=a.c;return b}
function L3b(a,b){y3b();E3b.call(this,a,b);this.d=1000;this.i=false;this.k=0;this.f=0;this.a=0;this.b=1;this.c=false;J3b(this,a.p.b-1)}
function wpc(a){var b,c;if(!!a.a.n&&a.a.n.b>0){b=tu(Fnb(a.a.n,0),190);for(c=0;c<b.a.b;c++){XNb(tu(a.a.i.Ic(c),188),tu(Fnb(b.a,c),240));i_b(tu(a.a.i.Ic(c),188).f)}}}
function K3b(a,b){var c,d,e;c=a.d/a.g;a.k+=a.b*b;if(a.i){if(a.k>a.d||a.k<0){a.b*=-1;if(a.k>a.d){a.k=a.d;a.c=true}if(a.k<0){a.k=0;a.c=false}}}else{a.k=a.k%a.d;a.k<0&&(a.k+=a.d)}d=a.j+Bu(K_b(Bu(_hb(a.k/c)),0,a.g-1));if(d!=a.a){Jnb(a.r,a.f,new $gb(0));Jnb(a.r,a.a,new $gb(1));Jnb(a.r,d,new $gb(0));a.f=a.a;a.a=d}e=a.k%c/c;a.c&&(e=1-e);Jnb(a.r,a.a,new $gb(e));Jnb(a.r,a.f,new $gb(1-e))}
UR(929,928,{195:1,196:1,251:1,252:1},L3b);_.Sd=function M3b(){return I3b(this,new L3b(tu(this.t,189),this.u))};_.a=0;_.b=0;_.c=false;_.d=0;_.e=0;_.f=0;_.g=0;_.i=false;_.j=0;_.k=0;UR(997,1,BAc);_.yb=function z8b(){h5b(this.b,new B8b(this.a))};UR(998,946,{},B8b);_.mb=function C8b(){var b,c,d,e;this.e=new n4b;this.a=new JMb(40,0.5*HDb(this.D.n),1,10000);s1b(this.a._,300);fMb(new F8b(this));b=new MUb(16777215,1.3);b2b(b._,1,1,1);KLb(this.F,b);d=new MUb(16777215,0.1);b2b(d._,0.25,-1,0);KLb(this.F,d);c=new MUb(16777215,1.3);b2b(c._,1,1,1);KLb(this.e,c);e=new MUb(16777215,0.1);b2b(e._,0.25,-1,0);KLb(this.e,e);this.c=new Mnb;this.b=new Cpc;try{rpc(this.b,'./static/models/animated/flamingo.js',new I8b(this))}catch(a){a=ZQ(a);if(wu(a,46)){yLb();aU(xLb,(srb(),qrb),YFc)}else throw YQ(a)}this.D.n.$=true;this.D.n._=true;oEb(this.D.n,false);this.D.n.Y=false};_.nb=function D8b(a){var b,c,d;this.d=rh();d=a*0.01;r1b(this.a._,600*Math.sin(d*3.141592653589793/360));d2b(this.a._,600*Math.cos(d*3.141592653589793/360));hMb(this.a,this.f);for(b=0;b<this.c.b;b++){c=tu(Fnb(this.c,b),252);K3b(c,Bu(rh()-this.d))}CDb(this.D.n);qEb(this.D.n,0,~~(this.D.n.X/2),this.D.n.W);TDb(this.D.n,this.F,this.a,null,false);qEb(this.D.n,~~(this.D.n.X/2),~~(this.D.n.X/2),this.D.n.W);TDb(this.D.n,this.e,this.a,null,false)};_.d=0;UR(999,1,yAc,F8b);_.Fd=function G8b(a){EMb(this.a.a,0.5*HDb(a.a))};UR(1000,1,{},I8b);_.vf=function J8b(){var a,b,c,d;wpc(this.a.b);a=new vYb;oYb(a,new n_b(16777215));a.j=true;a.i=true;tYb(a,(uWb(),rWb));sYb(a,(rXb(),oXb));c=new L3b(this.a.b.a,a);c.d=5000;a2b(c.eb,1.5);s1b(c._,150);KLb(this.a.F,c);Cnb(this.a.c,c);b=new wZb;nZb(b,new n_b(16777215));tZb(b,new n_b(16777215));b.F=20;b.o=true;b.n=true;uZb(b,rWb);rZb(b,qXb);d=new L3b(this.a.b.a,b);d.d=5000;a2b(d.eb,1.5);s1b(d._,150);KLb(this.a.e,d);Cnb(this.a.c,d)};var cK=Ogb(oFc,'MorphNormalsFlamingo$DemoScene',998),aK=Ogb(oFc,'MorphNormalsFlamingo$DemoScene$1',999),bK=Ogb(oFc,'MorphNormalsFlamingo$DemoScene$2',1000),aJ=Ogb(VFc,'MorphAnimMesh',929);NAc(xi)(35);