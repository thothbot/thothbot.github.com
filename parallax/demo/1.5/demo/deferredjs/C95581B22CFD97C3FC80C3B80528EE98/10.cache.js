function KWb(){LWb.call(this,5,8,6)}
function zTb(a,b){return a.fe(ATb(a,b))}
function Vgc(){G9b.call(this);this.d=ru(Bob(Ugc(),kRc),251);this.e=100;this.s=3;this.t=4;this.f=false;this.g=true;this.i=false;this.j=false;this.k=false;this.a=new _5b;this.q=new _5b;this.v=0;this.w=0;this.o=0;this.p=0}
function q3b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.a;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(zlb(c,eRc)){a.d=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.c=Math.atan2(-j,o);a.e=Math.atan2(-e,d)}else{a.c=Lkb(n,i);a.e=0}}else if(zlb(c,fRc)){a.c=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.d=Lkb(f,o);a.e=Lkb(g,i)}else{a.d=Math.atan2(-k,d);a.e=0}}else if(zlb(c,gRc)){a.c=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.d=Math.atan2(-k,o);a.e=Math.atan2(-e,i)}else{a.d=0;a.e=Lkb(g,d)}}else if(zlb(c,hRc)){a.d=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.c=Lkb(n,o);a.e=Lkb(g,d)}else{a.c=0;a.e=Math.atan2(-e,i)}}else if(zlb(c,iRc)){a.e=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.c=Math.atan2(-j,i);a.d=Math.atan2(-k,d)}else{a.c=0;a.d=Lkb(f,o)}}else if(zlb(c,jRc)){a.e=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.c=Lkb(n,i);a.d=Lkb(f,d)}else{a.c=Math.atan2(-j,o);a.d=0}}else{ZOb();iW(YOb,(gub(),fub),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.b=c;!!a.a&&fTb(a.a,a);return a}
aU(885,823,GLc,KWb);aU(1075,1,NLc);_.zb=function qgc(){g9b(this.b,new Vgc(this.a))};aU(1084,973,{314:1},Vgc);_.nb=function Wgc(){var a,b;this.n=new mQb(50,CGb(this.G.k),0.01,1000);W5b(this.n._,0,50,500);this.u=new mQb(84,CGb(this.G.k),0.01,1000);a=new tYb(16777215);W5b(a._,0,0,1);jPb(this.H,a);this.r=new BPb;k5b(this.r._,100);jPb(this.r,this.u);jPb(this.H,this.r);this.c=new NXb(this.u);jPb(this.H,this.c);Rgc(this);b=new q_b;k_b(b,new f3b(14540253));this.b=new y7b(new KWb,b);jPb(this.r,this.b);uPb(this.c,this.k);uPb(this.b,this.k)};_.ob=function Xgc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=ru(this.A.d.ee(j),299);g.of(this.t);i=this.A.e.b;f=j*i;d=zu(Nkb(f));e=(d+1)%i;Z5b(this.a,ru(tqb(this.A.a,e),296),ru(tqb(this.A.a,d),296));this.a.of(f-d).jf(ru(tqb(this.A.a,d),296));b=ru(zTb(this.A.d,j),299);M5b(this.q.lf(this.a),b);g.jf(this.q.kf().of(15));rPb(this.u,g);rPb(this.b,g);c=ru(this.A.d.ee((j+30/this.A.d.ce())%1).bf(this.t),299);this.j||c.lf(g).jf(b);Z3b(this.u.V,this.u._,c,this.q);q3b(this.u.cb,this.u.V,this.u.cb.b);MXb(this.c);l3b(this.r.cb,(this.v-this.r.cb.d)*0.05);OGb(this.G.k,this.H,this.f?this.u:this.n,null,false)};_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.o=0;_.p=0;_.s=0;_.t=0;_.v=0;_.w=0;var yL=Ajb(EQc,'GeometryExtrudeSplines$DemoScene',1084);_Lc(xi)(10);