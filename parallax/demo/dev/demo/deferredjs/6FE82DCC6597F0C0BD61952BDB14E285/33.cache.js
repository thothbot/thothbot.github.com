function vjc(){}
function zjc(){}
function Cjc(){}
function Jjc(){}
function Njc(){}
function Qjc(){}
function pjc(){pjc=YEc;ojc=new vjc}
function rjc(){rjc=YEc;qjc=new Jjc}
function Ejc(){Ejc=YEc;tjc=new zjc}
function Fjc(){Fjc=YEc;ujc=new Cjc}
function Sjc(){Sjc=YEc;Hjc=new Njc}
function Tjc(){Tjc=YEc;Ijc=new Qjc}
function ljc(){m7b.call(this);this.c=0.01}
RS(1128,1,FGc);_.zb=function jjc(){O6b(this.b,new ljc(this.a))};RS(1129,960,{325:1},ljc);_.nb=function mjc(){var a,b,c,d,e,f,g,i,j,k,n,o,p;this.a=new kOb(30,XEb(this.D.k),1,10000);H3b(this.a._,100);this.b=new ZNb(this.D.k.Z,this.D.k.Y,-10000,10000);H3b(this.b._,100);this.j=new U5b;this.k=new U5b;e=new lWb(16777215);F3b(e._,0,0,1).nf();jNb(this.j,e);f=new mWb(16755370,1.5);F3b(f._,0,0,-1).nf();jNb(this.j,f);this.i=new jMb(this.D.k.Z,this.D.k.Y);BLb(this.i,(JCb(),DCb));zLb(this.i,(yCb(),xCb));wLb(this.i,(UAb(),TAb));this.d=new Z_b((pjc(),ojc));IGb(bXb(this.d),UMc,new PKb((gLb(),UKb),new mib(0)));this.e=new Z_b((rjc(),qjc));IGb(bXb(this.e),jMc,new PKb($Kb,this.i));iXb(this.e,false);n=new sUb(this.D.k.Z+1000,this.D.k.Y);o=new h5b(n,this.d);H3b(o._,-100);jNb(this.j,o);i=new Y$b;P$b(i,new P0b(5570560));V$b(i,new P0b(16720384));i.F=5;g=new Y$b;P$b(g,new P0b(5592405));V$b(g,new P0b(16755200));g.F=5;a=new LUb(100,25,15,30);this.n=new h5b(a,g);F3b(this.n._,0,0,100);F3b(this.n.eb,1.5,1.5,1.5);jNb(this.j,this.n);this.o=new h5b(a,i);F3b(this.o._,0,150,100);F3b(this.o.eb,0.75,0.75,0.75);jNb(this.j,this.o);p=new h5b(n,this.e);H3b(p._,-100);jNb(this.k,p);b=new DUb(10,64,32);j=new jZb;dZb(j,new P0b(16777215));gZb(j,this.i);for(d=0;d<5;d++){for(c=0;c<5;c++){k=new h5b(b,j);V2b(k._,(c-2)*20);W2b(k._,(d-2)*20);H3b(k._,0);b1b(k.cb,-1.5707963267948966);jNb(this.F,k)}}pFb(this.D.k,false)};_.ob=function njc(a){Q2b(this.a._,(this.f-this.a._.c)*0.05);R2b(this.a._,(-this.g-this.a._.d)*0.05);INb(this.a,this.F._);if(!!this.n&&!!this.o){b1b(this.n.cb,-a*0.0015);b1b(this.o.cb,-a*0.0015+1.5707963267948966)}(su(su(IPb(bXb(this.d).i,UMc),225).d,150).a>1||su(su(IPb(bXb(this.d).i,UMc),225).d,150).a<0)&&(this.c*=-1);NKb(su(IPb(bXb(this.d).i,UMc),225),new mib(su(su(IPb(bXb(this.d).i,UMc),225).d,150).a+this.c));REb(this.D.k);hFb(this.D.k,this.j,this.b,this.i,true);hFb(this.D.k,this.k,this.b,null,false);hFb(this.D.k,this.F,this.a,null,false)};_.c=0;_.f=0;_.g=0;var ojc;var qjc;RS(1130,1,{},vjc);_.Md=function wjc(){return Ejc(),tjc};_.Nd=function xjc(){return Fjc(),ujc};var tjc,ujc;RS(1131,1,{},zjc);_.ac=function Ajc(){return 'varying vec2 vUv;\r\nuniform float time;\r\n\r\nvoid main() {\r\n\r\n\tfloat r = vUv.x;\r\n\tif( vUv.y < 0.5 ) r = 0.0;\r\n\tfloat g = vUv.y;\r\n\tif( vUv.x < 0.5 ) g = 0.0;\r\n\r\n\tgl_FragColor = vec4( r, g, time, 1.0 );\r\n\r\n}\r\n'};RS(1132,1,{},Cjc);_.ac=function Djc(){return aNc};RS(1135,1,{},Jjc);_.Md=function Kjc(){return Sjc(),Hjc};_.Nd=function Ljc(){return Tjc(),Ijc};var Hjc,Ijc;RS(1136,1,{},Njc);_.ac=function Ojc(){return 'varying vec2 vUv;\r\nuniform sampler2D tDiffuse;\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = texture2D( tDiffuse, vUv );\r\n\r\n}\r\n'};RS(1137,1,{},Qjc);_.ac=function Rjc(){return aNc};var uM=aib(vLc,'MaterialsRenderTarget$DemoScene',1129),xM=aib(vLc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator',1130),vM=aib(vLc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$1',1131),wM=aib(vLc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$2',1132),AM=aib(vLc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator',1135),yM=aib(vLc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$1',1136),zM=aib(vLc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$2',1137);SGc(xi)(33);