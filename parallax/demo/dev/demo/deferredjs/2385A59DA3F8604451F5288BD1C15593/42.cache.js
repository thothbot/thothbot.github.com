function Arc(a){this.b=a}
function wrc(){x8b.call(this);this.r=new UMb('./static/textures/planets/titan.jpg');this.j=new UMb(rPc);this.o=new UMb(lQc);this.p=new UMb(mQc);this.q=new UMb(nQc)}
function vrc(a){var b,c,d;b=new qXb(16777215);P4b(b.ab,800,400,0);b.T=true;b.J=2048;b.H=2048;b.B=1;b.A=1500;b.v=-0.005;b.F=0.35;pOb(a.G,b);c=new _1b(16777215);X1b(c,0.985,0.5,1.35);d=new mEc(a.o,Wjb(700),(QYb(),JYb),c);kEc(d,a.p,Wjb(512),new ojb(0),JYb,null,null);kEc(d,a.p,Wjb(512),new ojb(0),JYb,null,null);kEc(d,a.p,Wjb(512),new ojb(0),JYb,null,null);kEc(d,a.q,Wjb(60),new ojb(0.6),JYb,null,null);kEc(d,a.q,Wjb(70),new ojb(0.7),JYb,null,null);kEc(d,a.q,Wjb(120),new ojb(0.9),JYb,null,null);kEc(d,a.q,Wjb(70),new ojb(1),JYb,null,null);lEc(d,new Arc(d));d.ab.of(b.ab);pOb(a.G,d)}
OT(1230,1,jJc);_.Db=function trc(){Z7b(this.c,new wrc(this.b))};OT(1231,967,{},wrc);_.ob=function xrc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.b=new pPb(50,bGb(this.F.n),50,10000000);e4b(this.b.ab,300);this.c=new pPb(60,~~(this.F.n.$/this.F.n.Z),1,100000);this.n=new d7b;o=new bNb('./static/textures/cube/milkyway/*.jpg');CMb(o,(ZBb(),XBb));n=new AIb;TLb(Xu(NQb(n.j,tPc),225),o);i=new l1b(n);qYb(i,(b$b(),$Zb));g=new r6b(new TUb(100000,100000,100000),i);pOb(this.n,g);e=new h0b;a0b(e,new UMb('./static/textures/planets/saturn.jpg'));e.G=15;W_b(e,new _1b(0));e0b(e,new _1b(3355443));j=new IVb(120.536,100,50);this.g=new r6b(j,e);o2b(this.g.db,-0.4808382089244377);uOb(this.g,true);this.g.V=true;pOb(this.G,this.g);a=new d_b;a.X=true;_$b(a,new UMb('./static/textures/planets/saturnClouds.png'));this.d=new r6b(j,a);O4b(this.d.fb,1.005);o2b(this.d.db,-0.4808382089244377);pOb(this.G,this.d);d=new d_b;d.X=true;_$b(d,new UMb('./static/textures/planets/saturnRings.png'));qYb(d,_Zb);k=new r6b(new FVb(120.536,265.882,20,5),d);m2b(k.db,1.5707963267948966);n2b(k.db,-0.4808382089244377);k.T=true;k.V=true;pOb(this.G,k);f=new h0b;a0b(f,this.r);this.i=new r6b(j,f);P4b(this.i.ab,1205.3600000000001,0,0);O4b(this.i.fb,0.23);pOb(this.G,this.i);b=new h0b;a0b(b,this.j);this.e=new r6b(j,b);P4b(this.e.ab,301.34000000000003,0,0);O4b(this.e.fb,0.13);uOb(this.e,true);pOb(this.G,this.e);c=new h0b;a0b(c,this.j);this.f=new r6b(j,c);P4b(this.f.ab,602.6800000000001,0,0);O4b(this.f.fb,0.15);pOb(this.G,this.f);new tEc(this.F.n,this.G);vrc(this);new sFb(this.F.n,this.G);vGb(this.F.n,false);this.F.n.bb=true;this.F.n.cb=true;this.k=Ch()};_.pb=function yrc(a){var b;b=(Ch()-this.k)*0.001;d4b(this.b.ab,1205.3600000000001*Math.cos(5.0E-5*a));R4b(this.b.ab,1205.3600000000001*Math.sin(5.0E-5*a));NOb(this.b,this.g.ab);f2b(this.g.db,0.02*b);f2b(this.d.db,0.025*b);d4b(this.e.ab,301.34000000000003*Math.cos(5.0E-4*a));R4b(this.e.ab,301.34000000000003*Math.sin(5.0E-4*a));d4b(this.f.ab,602.6800000000001*Math.cos(1.0E-4*a));R4b(this.f.ab,602.6800000000001*Math.sin(1.0E-4*a));d4b(this.i.ab,1205.3600000000001*Math.cos(1.0E-4*a));R4b(this.i.ab,1205.3600000000001*Math.sin(1.0E-4*a));g2b(this.c.db,this.b.db);XFb(this.F.n);nGb(this.F.n,this.n,this.c,null,false);nGb(this.F.n,this.G,this.b,null,false);this.k=Ch()};_.k=0;OT(1232,1,{},Arc);_.Ff=function Brc(){var a,b,c,d;c=-this.b.c.d*2;d=-this.b.c.e*2;for(a=0;a<this.b.b.c;a++){b=Xu(Xpb(this.b.b,a),346);b.n=this.b.c.d+c*b.d;b.o=this.b.c.e+d*b.d;b.f=0}Xu(Xpb(this.b.b,2),346).o+=0.025;Xu(Xpb(this.b.b,3),346).f=this.b.c.d*0.5+0.7853981633974483};var NO=cjb(lOc,'Saturn$DemoScene',1231),MO=cjb(lOc,'Saturn$DemoScene$1',1232);wJc(Ii)(42);