function HVb(){IVb.call(this,5,8,6)}
function wSb(a,b){return a.ie(xSb(a,b))}
function Xfc(){x8b.call(this);this.e=Xu(dob(Wfc(),OOc),250);this.f=100;this.t=3;this.u=4;this.g=false;this.i=true;this.j=false;this.k=false;this.n=false;this.b=new U4b;this.r=new U4b;this.w=0;this.A=0;this.p=0;this.q=0}
function k2b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.b;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(blb(c,IOc)){a.e=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.d=Math.atan2(-j,o);a.f=Math.atan2(-e,d)}else{a.d=nkb(n,i);a.f=0}}else if(blb(c,JOc)){a.d=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.e=nkb(f,o);a.f=nkb(g,i)}else{a.e=Math.atan2(-k,d);a.f=0}}else if(blb(c,KOc)){a.d=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.e=Math.atan2(-k,o);a.f=Math.atan2(-e,i)}else{a.e=0;a.f=nkb(g,d)}}else if(blb(c,LOc)){a.e=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.d=nkb(n,o);a.f=nkb(g,d)}else{a.d=0;a.f=Math.atan2(-e,i)}}else if(blb(c,MOc)){a.f=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.d=Math.atan2(-j,i);a.e=Math.atan2(-k,d)}else{a.d=0;a.e=nkb(f,o)}}else if(blb(c,NOc)){a.f=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.d=nkb(n,i);a.e=nkb(f,d)}else{a.d=Math.atan2(-j,o);a.e=0}}else{dOb();RV(cOb,(Ktb(),Jtb),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.c=c;!!a.b&&cSb(a.b,a);return a}
OT(879,817,cJc,HVb);OT(1068,1,jJc);_.Db=function sfc(){Z7b(this.c,new Xfc(this.b))};OT(1077,967,{314:1},Xfc);_.ob=function Yfc(){var a,b;this.o=new pPb(50,bGb(this.F.n),0.01,1000);P4b(this.o.ab,0,50,500);this.v=new pPb(84,bGb(this.F.n),0.01,1000);a=new qXb(16777215);P4b(a.ab,0,0,1);pOb(this.G,a);this.s=new GOb;e4b(this.s.ab,100);pOb(this.s,this.v);pOb(this.G,this.s);this.d=new KWb(this.v);pOb(this.G,this.d);Tfc(this);b=new l$b;f$b(b,new _1b(14540253));this.c=new r6b(new HVb,b);pOb(this.s,this.c);zOb(this.d,this.n);zOb(this.c,this.n)};_.pb=function Zfc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=Xu(this.B.e.he(j),299);g.rf(this.u);i=this.B.f.c;f=j*i;d=dv(pkb(f));e=(d+1)%i;S4b(this.b,Xu(Xpb(this.B.b,e),296),Xu(Xpb(this.B.b,d),296));this.b.rf(f-d).mf(Xu(Xpb(this.B.b,d),296));b=Xu(wSb(this.B.e,j),299);G4b(this.r.of(this.b),b);g.mf(this.r.nf().rf(15));xOb(this.v,g);xOb(this.c,g);c=Xu(this.B.e.he((j+30/this.B.e.fe())%1).ef(this.u),299);this.k||c.of(g).mf(b);T2b(this.v.W,this.v.ab,c,this.r);k2b(this.v.db,this.v.W,this.v.db.c);JWb(this.d);f2b(this.s.db,(this.w-this.s.db.e)*0.05);nGb(this.F.n,this.G,this.g?this.v:this.o,null,false)};_.f=0;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.p=0;_.q=0;_.t=0;_.u=0;_.w=0;_.A=0;var bM=cjb(gOc,'GeometryExtrudeSplines$DemoScene',1077);wJc(Ii)(10);