function FWb(){GWb.call(this,5,8,6)}
function uTb(a,b){return a.fe(vTb(a,b))}
function bhc(){A9b.call(this);this.d=zu(wob(ahc(),WTc),251);this.e=100;this.s=3;this.t=4;this.f=false;this.g=true;this.i=false;this.j=false;this.k=false;this.a=new W5b;this.q=new W5b;this.v=0;this.w=0;this.o=0;this.p=0}
function l3b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.a;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(vlb(c,QTc)){a.d=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.c=Math.atan2(-j,o);a.e=Math.atan2(-e,d)}else{a.c=Hkb(n,i);a.e=0}}else if(vlb(c,RTc)){a.c=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.d=Hkb(f,o);a.e=Hkb(g,i)}else{a.d=Math.atan2(-k,d);a.e=0}}else if(vlb(c,STc)){a.c=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.d=Math.atan2(-k,o);a.e=Math.atan2(-e,i)}else{a.d=0;a.e=Hkb(g,d)}}else if(vlb(c,TTc)){a.d=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.c=Hkb(n,o);a.e=Hkb(g,d)}else{a.c=0;a.e=Math.atan2(-e,i)}}else if(vlb(c,UTc)){a.e=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.c=Math.atan2(-j,i);a.d=Math.atan2(-k,d)}else{a.c=0;a.d=Hkb(f,o)}}else if(vlb(c,VTc)){a.e=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.c=Hkb(n,i);a.d=Hkb(f,d)}else{a.c=Math.atan2(-j,o);a.d=0}}else{UOb();nW(TOb,(bub(),aub),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.b=c;!!a.a&&aTb(a.a,a);return a}
fU(882,820,iOc,FWb);fU(1072,1,pOc);_.zb=function ygc(){a9b(this.b,new bhc(this.a))};fU(1081,970,{314:1},bhc);_.nb=function chc(){var a,b;this.n=new hQb(50,xGb(this.G.k),0.01,1000);R5b(this.n._,0,50,500);this.u=new hQb(84,xGb(this.G.k),0.01,1000);a=new oYb(16777215);R5b(a._,0,0,1);ePb(this.H,a);this.r=new wPb;f5b(this.r._,100);ePb(this.r,this.u);ePb(this.H,this.r);this.c=new IXb(this.u);ePb(this.H,this.c);Zgc(this);b=new l_b;f_b(b,new a3b(14540253));this.b=new t7b(new FWb,b);ePb(this.r,this.b);pPb(this.c,this.k);pPb(this.b,this.k)};_.ob=function dhc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=zu(this.A.d.ee(j),299);g.of(this.t);i=this.A.e.b;f=j*i;d=Hu(Jkb(f));e=(d+1)%i;U5b(this.a,zu(oqb(this.A.a,e),296),zu(oqb(this.A.a,d),296));this.a.of(f-d).jf(zu(oqb(this.A.a,d),296));b=zu(uTb(this.A.d,j),299);H5b(this.q.lf(this.a),b);g.jf(this.q.kf().of(15));mPb(this.u,g);mPb(this.b,g);c=zu(this.A.d.ee((j+30/this.A.d.ce())%1).bf(this.t),299);this.j||c.lf(g).jf(b);U3b(this.u.V,this.u._,c,this.q);l3b(this.u.cb,this.u.V,this.u.cb.b);HXb(this.c);g3b(this.r.cb,(this.v-this.r.cb.d)*0.05);JGb(this.G.k,this.H,this.f?this.u:this.n,null,false)};_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.o=0;_.p=0;_.s=0;_.t=0;_.v=0;_.w=0;var DL=wjb(oTc,'GeometryExtrudeSplines$DemoScene',1081);DOc(xi)(10);