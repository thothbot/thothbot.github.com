function JUb(){KUb.call(this,5,8,6)}
function yRb(a,b){return a.fe(zRb(a,b))}
function Qec(){t7b.call(this);this.e=Fu(hnb(Pec(),lMc),250);this.f=100;this.t=3;this.u=4;this.g=false;this.i=true;this.j=false;this.k=false;this.n=false;this.b=new R3b;this.r=new R3b;this.w=0;this.A=0;this.p=0;this.q=0}
function f1b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.b;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(gkb(c,fMc)){a.e=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.d=Math.atan2(-j,o);a.f=Math.atan2(-e,d)}else{a.d=sjb(n,i);a.f=0}}else if(gkb(c,gMc)){a.d=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.e=sjb(f,o);a.f=sjb(g,i)}else{a.e=Math.atan2(-k,d);a.f=0}}else if(gkb(c,hMc)){a.d=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.e=Math.atan2(-k,o);a.f=Math.atan2(-e,i)}else{a.e=0;a.f=sjb(g,d)}}else if(gkb(c,iMc)){a.e=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.d=sjb(n,o);a.f=sjb(g,d)}else{a.d=0;a.f=Math.atan2(-e,i)}}else if(gkb(c,jMc)){a.f=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.d=Math.atan2(-j,i);a.e=Math.atan2(-k,d)}else{a.d=0;a.e=sjb(f,o)}}else if(gkb(c,kMc)){a.f=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.d=sjb(n,i);a.e=sjb(f,d)}else{a.d=Math.atan2(-j,o);a.e=0}}else{eNb();eV(dNb,(Osb(),Nsb),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.c=c;!!a.b&&eRb(a.b,a);return a}
bT(867,805,HGc,JUb);bT(1054,1,OGc);_.Db=function lec(){V6b(this.c,new Qec(this.b))};bT(1063,954,{311:1},Qec);_.ob=function Rec(){var a,b;this.o=new rOb(50,cFb(this.F.n),0.01,1000);M3b(this.o.ab,0,50,500);this.v=new rOb(84,cFb(this.F.n),0.01,1000);a=new sWb(16777215);M3b(a.ab,0,0,1);qNb(this.G,a);this.s=new HNb;b3b(this.s.ab,100);qNb(this.s,this.v);qNb(this.G,this.s);this.d=new MVb(this.v);qNb(this.G,this.d);Mec(this);b=new qZb;kZb(b,new W0b(14540253));this.c=new o5b(new JUb,b);qNb(this.s,this.c);ANb(this.d,this.n);ANb(this.c,this.n)};_.pb=function Sec(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=Fu(this.B.e.ee(j),298);g.of(this.u);i=this.B.f.c;f=j*i;d=Nu(ujb(f));e=(d+1)%i;P3b(this.b,Fu(_ob(this.B.b,e),295),Fu(_ob(this.B.b,d),295));this.b.of(f-d).jf(Fu(_ob(this.B.b,d),295));b=Fu(yRb(this.B.e,j),298);D3b(this.r.lf(this.b),b);g.jf(this.r.kf().of(15));yNb(this.v,g);yNb(this.c,g);c=Fu(this.B.e.ee((j+30/this.B.e.ce())%1).bf(this.u),298);this.k||c.lf(g).jf(b);O1b(this.v.W,this.v.ab,c,this.r);f1b(this.v.db,this.v.W,this.v.db.c);LVb(this.d);a1b(this.s.db,(this.w-this.s.db.e)*0.05);oFb(this.F.n,this.G,this.g?this.v:this.o,null,false)};_.f=0;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.p=0;_.q=0;_.t=0;_.u=0;_.w=0;_.A=0;var zL=hib(FLc,'GeometryExtrudeSplines$DemoScene',1063);_Gc(Hi)(10);