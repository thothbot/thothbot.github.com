function Xjc(){}
function _jc(){}
function ckc(){}
function jkc(){}
function nkc(){}
function qkc(){}
function ekc(){ekc=xFc;Vjc=new _jc}
function fkc(){fkc=xFc;Wjc=new ckc}
function skc(){skc=xFc;hkc=new nkc}
function tkc(){tkc=xFc;ikc=new qkc}
function Tjc(){Tjc=xFc;Sjc=new jkc}
function Rjc(){Rjc=xFc;Qjc=new Xjc}
function Njc(){L7b.call(this);this.d=0.01}
yT(1130,1,hHc);_.Db=function Ljc(){l7b(this.c,new Njc(this.b))};yT(1131,961,{327:1},Njc);_.ob=function Ojc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.b=new QOb(30,CFb(this.F.n),1,10000);e4b(this.b.ab,100);this.c=new DOb(this.F.n.$,this.F.n.Z,-10000,10000);e4b(this.c.ab,100);this.n=new r6b;this.o=new r6b;e=new RWb(16777215);c4b(e.ab,0,0,1).rf();QNb(this.n,e);f=new SWb(16755370,1.5);c4b(f.ab,0,0,-1).rf();QNb(this.n,f);this.k=new QMb(this.F.n.$,this.F.n.Z);gMb(this.k,(oDb(),iDb));eMb(this.k,(dDb(),cDb));bMb(this.k,(zBb(),yBb));this.e=new z0b((Rjc(),Qjc));nHb(GXb(this.e),CNc,new uLb((NLb(),zLb),new Qib(0)));this.f=new z0b((Tjc(),Sjc));nHb(GXb(this.f),UMc,new uLb(FLb,this.k));NXb(this.f,false);n=new YUb(this.F.n.$,this.F.n.Z);this.j=new G5b(n,this.e);e4b(this.j.ab,-100);QNb(this.n,this.j);i=new y_b;p_b(i,new o1b(5570560));v_b(i,new o1b(16720384));i.G=5;g=new y_b;p_b(g,new o1b(5592405));v_b(g,new o1b(16755200));g.G=5;a=new pVb(100,25,15,30);this.p=new G5b(a,g);c4b(this.p.ab,0,0,100);c4b(this.p.fb,1.5,1.5,1.5);QNb(this.n,this.p);this.q=new G5b(a,i);c4b(this.q.ab,0,150,100);c4b(this.q.fb,0.75,0.75,0.75);QNb(this.n,this.q);o=new G5b(n,this.f);e4b(o.ab,-100);QNb(this.o,o);b=new hVb(10,64,32);j=new MZb;GZb(j,new o1b(16777215));JZb(j,this.k);for(d=0;d<5;d++){for(c=0;c<5;c++){k=new G5b(b,j);s3b(k.ab,(c-2)*20);t3b(k.ab,(d-2)*20);e4b(k.ab,0);C1b(k.db,-1.5707963267948966);QNb(this.G,k)}}WFb(this.F.n,false)};_.pb=function Pjc(a){n3b(this.b.ab,(this.g-this.b.ab.d)*0.05);o3b(this.b.ab,(-this.i-this.b.ab.e)*0.05);mOb(this.b,this.G.ab);if(!!this.p&&!!this.q){C1b(this.p.db,-a*0.0015);C1b(this.q.db,-a*0.0015+1.5707963267948966)}(Xu(Xu(mQb(GXb(this.e).j,CNc),225).e,150).b>1||Xu(Xu(mQb(GXb(this.e).j,CNc),225).e,150).b<0)&&(this.d*=-1);sLb(Xu(mQb(GXb(this.e).j,CNc),225),new Qib(Xu(Xu(mQb(GXb(this.e).j,CNc),225).e,150).b+this.d));wFb(this.F.n);OFb(this.F.n,this.n,this.c,this.k,true);OFb(this.F.n,this.o,this.c,null,false);OFb(this.F.n,this.G,this.b,null,false)};_.d=0;_.g=0;_.i=0;var Qjc;var Sjc;yT(1132,1,{},Xjc);_.Td=function Yjc(){return ekc(),Vjc};_.Ud=function Zjc(){return fkc(),Wjc};var Vjc,Wjc;yT(1133,1,{},_jc);_.hc=function akc(){return 'varying vec2 vUv;\r\nuniform float time;\r\n\r\nvoid main() {\r\n\r\n\tfloat r = vUv.x;\r\n\tif( vUv.y < 0.5 ) r = 0.0;\r\n\tfloat g = vUv.y;\r\n\tif( vUv.x < 0.5 ) g = 0.0;\r\n\r\n\tgl_FragColor = vec4( r, g, time, 1.0 );\r\n\r\n}\r\n'};yT(1134,1,{},ckc);_.hc=function dkc(){return KNc};yT(1137,1,{},jkc);_.Td=function kkc(){return skc(),hkc};_.Ud=function lkc(){return tkc(),ikc};var hkc,ikc;yT(1138,1,{},nkc);_.hc=function okc(){return 'varying vec2 vUv;\r\nuniform sampler2D tDiffuse;\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = texture2D( tDiffuse, vUv );\r\n\r\n}\r\n'};yT(1139,1,{},qkc);_.hc=function rkc(){return KNc};var dN=Eib(fMc,'MaterialsRenderTarget$DemoScene',1131),gN=Eib(fMc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator',1132),eN=Eib(fMc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$1',1133),fN=Eib(fMc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$2',1134),jN=Eib(fMc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator',1137),hN=Eib(fMc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$1',1138),iN=Eib(fMc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$2',1139);uHc(Ii)(33);