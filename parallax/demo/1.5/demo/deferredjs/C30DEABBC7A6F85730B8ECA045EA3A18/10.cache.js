function RWb(){SWb.call(this,5,8,6)}
function GTb(a,b){return a.ie(HTb(a,b))}
function ahc(){N9b.call(this);this.e=Eu(Iob(_gc(),wRc),251);this.f=100;this.t=3;this.u=4;this.g=false;this.i=true;this.j=false;this.k=false;this.n=false;this.b=new g6b;this.r=new g6b;this.w=0;this.A=0;this.p=0;this.q=0}
function x3b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.b;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(Glb(c,qRc)){a.e=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.d=Math.atan2(-j,o);a.f=Math.atan2(-e,d)}else{a.d=Skb(n,i);a.f=0}}else if(Glb(c,rRc)){a.d=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.e=Skb(f,o);a.f=Skb(g,i)}else{a.e=Math.atan2(-k,d);a.f=0}}else if(Glb(c,sRc)){a.d=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.e=Math.atan2(-k,o);a.f=Math.atan2(-e,i)}else{a.e=0;a.f=Skb(g,d)}}else if(Glb(c,tRc)){a.e=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.d=Skb(n,o);a.f=Skb(g,d)}else{a.d=0;a.f=Math.atan2(-e,i)}}else if(Glb(c,uRc)){a.f=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.d=Math.atan2(-j,i);a.e=Math.atan2(-k,d)}else{a.d=0;a.e=Skb(f,o)}}else if(Glb(c,vRc)){a.f=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.d=Skb(n,i);a.e=Skb(f,d)}else{a.d=Math.atan2(-j,o);a.e=0}}else{ePb();pW(dPb,(nub(),mub),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.c=c;!!a.b&&mTb(a.b,a);return a}
mU(879,817,PLc,RWb);mU(1069,1,WLc);_.Db=function xgc(){n9b(this.c,new ahc(this.b))};mU(1078,967,{314:1},ahc);_.ob=function bhc(){var a,b;this.o=new tQb(50,JGb(this.H.n),0.01,1000);b6b(this.o.ab,0,50,500);this.v=new tQb(84,JGb(this.H.n),0.01,1000);a=new AYb(16777215);b6b(a.ab,0,0,1);qPb(this.I,a);this.s=new IPb;r5b(this.s.ab,100);qPb(this.s,this.v);qPb(this.I,this.s);this.d=new UXb(this.v);qPb(this.I,this.d);Ygc(this);b=new x_b;r_b(b,new m3b(14540253));this.c=new F7b(new RWb,b);qPb(this.s,this.c);BPb(this.d,this.n);BPb(this.c,this.n)};_.pb=function chc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=Eu(this.B.e.he(j),299);g.rf(this.u);i=this.B.f.c;f=j*i;d=Mu(Ukb(f));e=(d+1)%i;e6b(this.b,Eu(Aqb(this.B.b,e),296),Eu(Aqb(this.B.b,d),296));this.b.rf(f-d).mf(Eu(Aqb(this.B.b,d),296));b=Eu(GTb(this.B.e,j),299);T5b(this.r.of(this.b),b);g.mf(this.r.nf().rf(15));yPb(this.v,g);yPb(this.c,g);c=Eu(this.B.e.he((j+30/this.B.e.fe())%1).ef(this.u),299);this.k||c.of(g).mf(b);e4b(this.v.W,this.v.ab,c,this.r);x3b(this.v.db,this.v.W,this.v.db.c);TXb(this.d);s3b(this.s.db,(this.w-this.s.db.e)*0.05);VGb(this.H.n,this.I,this.g?this.v:this.o,null,false)};_.f=0;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.p=0;_.q=0;_.t=0;_.u=0;_.w=0;_.A=0;var KL=Hjb(QQc,'GeometryExtrudeSplines$DemoScene',1078);iMc(Hi)(10);