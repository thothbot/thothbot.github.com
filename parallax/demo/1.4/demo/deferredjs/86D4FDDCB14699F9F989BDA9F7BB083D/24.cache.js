function KXb(a,b){a.d=b}
function Rvb(a,b,c,d,e){Qvb(a,36160,b.a,c.a+d,e,0)}
function WKb(a,b,c,d,e){ivb(b,36160,c);Rvb(b,(kzb(),gzb),d,e,a.D)}
function iwb(a,b,c,d,e,f,g){gwb(a,b.a+c,0,f.a,d,e,0,f.a,g.a,null)}
function XKb(){ZJb();RKb.call(this,256,256);this.a=0}
function Yfc(){w5b.call(this);this.i=0;this.j=0;this.g=false;this.d=70;this.e=0;this.f=0;this.k=0;this.o=0}
function tMb(a,b,c){var d,e;e=a.g;d=e.r;e.r=false;e.a=0;YDb(b,c,a.d,e,false);e.a=1;YDb(b,c,a.a,e,false);e.a=2;YDb(b,c,a.e,e,false);e.a=3;YDb(b,c,a.b,e,false);e.a=4;YDb(b,c,a.f,e,false);e.r=d;e.a=5;YDb(b,c,a.c,e,false)}
function uMb(){OLb();eMb.call(this);this.d=new OMb(90,1,1,1000);m2b(this.d.fb,0,-1,0);mMb(this.d,new s2b(1,0,0));PLb(this,this.d);this.a=new OMb(90,1,1,1000);m2b(this.a.fb,0,-1,0);mMb(this.a,new s2b(-1,0,0));PLb(this,this.a);this.e=new OMb(90,1,1,1000);m2b(this.e.fb,0,0,1);mMb(this.e,new s2b(0,1,0));PLb(this,this.e);this.b=new OMb(90,1,1,1000);m2b(this.b.fb,0,0,-1);mMb(this.b,new s2b(0,-1,0));PLb(this,this.b);this.f=new OMb(90,1,1,1000);m2b(this.f.fb,0,-1,0);mMb(this.f,new s2b(0,0,1));PLb(this,this.f);this.c=new OMb(90,1,1,1000);m2b(this.c.fb,0,-1,0);mMb(this.c,new s2b(0,0,-1));PLb(this,this.c);this.g=new XKb;cKb(this.g,(Czb(),Azb));fKb(this.g,(gBb(),eBb));hKb(this.g,(rBb(),lBb))}
YR(784,785,{179:1,180:1},XKb);_.Od=function YKb(){return uu(Jnb(this.b,this.a))};_.Pd=function ZKb(a){var b,c;if(this.b)return;nKb(this,a.createTexture());c=X_b(this.j)&&X_b(this.d);this.b=new Qnb;this.c=new Qnb;lvb(a,(RBb(),KBb),this.D);lKb(this,a,0,KBb,c);for(b=0;b<6;b++){Gnb(this.b,a.createFramebuffer());Gnb(this.c,a.createRenderbuffer());iwb(a,OBb,b,this.j,this.d,this.o,this.C);WKb(this,a,uu(Jnb(this.b,b)),OBb,b);QKb(this,a,uu(Jnb(this.c,b)))}c&&Uvb(a,KBb.a);lvb(a,KBb,null);jvb(a,36161,null);ivb(a,36160,null)};_.Qd=function $Kb(a){lvb(a,(RBb(),KBb),this.D);Uvb(a,KBb.a);lvb(a,KBb,null)};_.a=0;YR(797,796,TAc,uMb);YR(1096,1,dBc);_.yb=function Wfc(){t5b(this.b,new Yfc(this.a))};YR(1097,947,{272:1},Yfc);_.mb=function Zfc(){var a,b,c,d;this.a=new OMb(this.d,MDb(this.D.n),1,1000);d=new uKb('./static/textures/ruins.jpg');b=new OXb;b.k=d;c=new P3b(new gTb(500,60,40),b);C1b(c.eb,-1);PLb(this.F,c);this.c=new uMb;hKb(this.c.g,(rBb(),mBb));PLb(this.F,this.c);a=new OXb;KXb(a,this.c.g);this.n=new P3b(new gTb(20,30,15),a);PLb(this.F,this.n);this.b=new P3b(new rSb(20,20,20),a);PLb(this.F,this.b);this.p=new P3b(new sTb(20,5,100,25),a);PLb(this.F,this.p);YDb(this.D.n,this.F,this.a,null,false)};_.nb=function $fc(a){this.f+=0.15;this.e=eib(-85,gib(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;C1b(this.n._,Math.sin(a*0.001)*30);D1b(this.n._,Math.sin(a*0.0011)*30);o2b(this.n._,Math.sin(a*0.0012)*30);D_b(this.n.cb,0.02);E_b(this.n.cb,0.03);C1b(this.b._,Math.sin(a*0.001+2)*30);D1b(this.b._,Math.sin(a*0.0011+2)*30);o2b(this.b._,Math.sin(a*0.0012+2)*30);D_b(this.b.cb,0.02);E_b(this.b.cb,0.03);C1b(this.p._,Math.sin(a*0.001+4)*30);D1b(this.p._,Math.sin(a*0.0011+4)*30);o2b(this.p._,Math.sin(a*0.0012+4)*30);D_b(this.p.cb,0.02);E_b(this.p.cb,0.03);C1b(this.a._,100*lib(this.k)*cib(this.o));D1b(this.a._,100*cib(this.k));o2b(this.a._,100*lib(this.k)*lib(this.o));mMb(this.a,this.F._);ZLb(this.n,false);tMb(this.c,this.D.n,this.F);ZLb(this.n,true);YDb(this.D.n,this.F,this.a,null,false)};_.d=0;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.o=0;var SL=Sgb(QFc,'MaterialsCubemapDynamicReflection$DemoScene',1097),FG=Sgb(eHc,'CubeCamera',797);pBc(wi)(24);