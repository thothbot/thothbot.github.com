function NUb(){OUb.call(this,5,8,6)}
function CRb(a,b){return a.ee(DRb(a,b))}
function Qec(){q7b.call(this);this.e=Fu(knb(Pec(),lMc),250);this.f=100;this.t=3;this.u=4;this.g=false;this.i=true;this.j=false;this.k=false;this.n=false;this.b=new O3b;this.r=new O3b;this.w=0;this.A=0;this.p=0;this.q=0}
function e1b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.b;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(jkb(c,fMc)){a.e=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.d=Math.atan2(-j,o);a.f=Math.atan2(-e,d)}else{a.d=vjb(n,i);a.f=0}}else if(jkb(c,gMc)){a.d=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.e=vjb(f,o);a.f=vjb(g,i)}else{a.e=Math.atan2(-k,d);a.f=0}}else if(jkb(c,hMc)){a.d=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.e=Math.atan2(-k,o);a.f=Math.atan2(-e,i)}else{a.e=0;a.f=vjb(g,d)}}else if(jkb(c,iMc)){a.e=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.d=vjb(n,o);a.f=vjb(g,d)}else{a.d=0;a.f=Math.atan2(-e,i)}}else if(jkb(c,jMc)){a.f=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.d=Math.atan2(-j,i);a.e=Math.atan2(-k,d)}else{a.d=0;a.e=vjb(f,o)}}else if(jkb(c,kMc)){a.f=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.d=vjb(n,i);a.e=vjb(f,d)}else{a.d=Math.atan2(-j,o);a.e=0}}else{jNb();eV(iNb,(Rsb(),Qsb),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.c=c;!!a.b&&iRb(a.b,a);return a}
bT(868,806,HGc,NUb);bT(1056,1,OGc);_.Db=function lec(){S6b(this.c,new Qec(this.b))};bT(1065,955,{313:1},Qec);_.ob=function Rec(){var a,b;this.o=new vOb(50,hFb(this.F.n),0.01,1000);J3b(this.o.ab,0,50,500);this.v=new vOb(84,hFb(this.F.n),0.01,1000);a=new wWb(16777215);J3b(a.ab,0,0,1);vNb(this.G,a);this.s=new MNb;$2b(this.s.ab,100);vNb(this.s,this.v);vNb(this.G,this.s);this.d=new QVb(this.v);vNb(this.G,this.d);Mec(this);b=new rZb;lZb(b,new V0b(14540253));this.c=new l5b(new NUb,b);vNb(this.s,this.c);FNb(this.d,this.n);FNb(this.c,this.n)};_.pb=function Sec(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=Fu(this.B.e.de(j),298);g.lf(this.u);i=this.B.f.c;f=j*i;d=Nu(xjb(f));e=(d+1)%i;M3b(this.b,Fu(cpb(this.B.b,e),295),Fu(cpb(this.B.b,d),295));this.b.lf(f-d).ff(Fu(cpb(this.B.b,d),295));b=Fu(CRb(this.B.e,j),298);A3b(this.r.hf(this.b),b);g.ff(this.r.gf().lf(15));DNb(this.v,g);DNb(this.c,g);c=Fu(this.B.e.de((j+30/this.B.e.be())%1).$e(this.u),298);this.k||c.hf(g).ff(b);N1b(this.v.W,this.v.ab,c,this.r);e1b(this.v.db,this.v.W,this.v.db.c);PVb(this.d);_0b(this.s.db,(this.w-this.s.db.e)*0.05);tFb(this.F.n,this.G,this.g?this.v:this.o,null,false)};_.f=0;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.p=0;_.q=0;_.t=0;_.u=0;_.w=0;_.A=0;var BL=kib(FLc,'GeometryExtrudeSplines$DemoScene',1065);_Gc(Hi)(10);