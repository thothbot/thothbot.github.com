function fmc(){}
function jmc(){}
function mmc(){}
function tmc(){}
function xmc(){}
function Amc(){}
function bmc(){bmc=YMc;amc=new tmc}
function omc(){omc=YMc;dmc=new jmc}
function pmc(){pmc=YMc;emc=new mmc}
function Cmc(){Cmc=YMc;rmc=new xmc}
function Dmc(){Dmc=YMc;smc=new Amc}
function _lc(){_lc=YMc;$lc=new fmc}
function Xlc(){V9b.call(this);this.d=0.01}
JU(1142,1,IOc);_.Db=function Vlc(){v9b(this.c,new Xlc(this.b))};JU(1143,973,{327:1},Xlc);_.ob=function Ylc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.b=new JQb(30,aHb(this.H.n),1,10000);n6b(this.b.ab,100);this.c=new wQb(this.H.n.$,this.H.n.Z,-10000,10000);n6b(this.c.ab,100);this.n=new B8b;this.o=new B8b;e=new KYb(16777215);l6b(e.ab,0,0,1).uf();JPb(this.n,e);f=new LYb(16755370,1.5);l6b(f.ab,0,0,-1).uf();JPb(this.n,f);this.k=new JOb(this.H.n.$,this.H.n.Z);_Nb(this.k,(NEb(),HEb));ZNb(this.k,(CEb(),BEb));WNb(this.k,(YCb(),XCb));this.e=new H2b((_lc(),$lc));NIb(AZb(this.e),dVc,new nNb((GNb(),sNb),new kkb(0)));this.f=new H2b((bmc(),amc));NIb(AZb(this.f),vUc,new nNb(yNb,this.k));HZb(this.f,false);n=new RWb(this.H.n.$,this.H.n.Z);this.j=new P7b(n,this.e);n6b(this.j.ab,-100);JPb(this.n,this.j);i=new E1b;u1b(i,new w3b(5570560));B1b(i,new w3b(16720384));i.G=5;g=new E1b;u1b(g,new w3b(5592405));B1b(g,new w3b(16755200));g.G=5;a=new iXb(100,25,15,30);this.p=new P7b(a,g);l6b(this.p.ab,0,0,100);l6b(this.p.fb,1.5,1.5,1.5);JPb(this.n,this.p);this.q=new P7b(a,i);l6b(this.q.ab,0,150,100);l6b(this.q.fb,0.75,0.75,0.75);JPb(this.n,this.q);o=new P7b(n,this.f);n6b(o.ab,-100);JPb(this.o,o);b=new aXb(10,64,32);j=new H_b;B_b(j,new w3b(16777215));E_b(j,this.k);for(d=0;d<5;d++){for(c=0;c<5;c++){k=new P7b(b,j);A5b(k.ab,(c-2)*20);B5b(k.ab,(d-2)*20);n6b(k.ab,0);K3b(k.db,-1.5707963267948966);JPb(this.I,k)}}uHb(this.H.n,false)};_.pb=function Zlc(a){v5b(this.b.ab,(this.g-this.b.ab.d)*0.05);w5b(this.b.ab,(-this.i-this.b.ab.e)*0.05);fQb(this.b,this.I.ab);if(!!this.p&&!!this.q){K3b(this.p.db,-a*0.0015);K3b(this.q.db,-a*0.0015+1.5707963267948966)}(Xu(Xu(fSb(AZb(this.e).j,dVc),225).e,150).b>1||Xu(Xu(fSb(AZb(this.e).j,dVc),225).e,150).b<0)&&(this.d*=-1);lNb(Xu(fSb(AZb(this.e).j,dVc),225),new kkb(Xu(Xu(fSb(AZb(this.e).j,dVc),225).e,150).b+this.d));VGb(this.H.n,true);mHb(this.H.n,this.n,this.c,this.k,true);mHb(this.H.n,this.o,this.c,null,false);mHb(this.H.n,this.I,this.b,null,false)};_.d=0;_.g=0;_.i=0;var $lc;var amc;JU(1144,1,{},fmc);_.Ud=function gmc(){return omc(),dmc};_.Vd=function hmc(){return pmc(),emc};var dmc,emc;JU(1145,1,{},jmc);_.tc=function kmc(){return 'varying vec2 vUv;\r\nuniform float time;\r\n\r\nvoid main() {\r\n\r\n\tfloat r = vUv.x;\r\n\tif( vUv.y < 0.5 ) r = 0.0;\r\n\tfloat g = vUv.y;\r\n\tif( vUv.x < 0.5 ) g = 0.0;\r\n\r\n\tgl_FragColor = vec4( r, g, time, 1.0 );\r\n\r\n}\r\n'};JU(1146,1,{},mmc);_.tc=function nmc(){return lVc};JU(1149,1,{},tmc);_.Ud=function umc(){return Cmc(),rmc};_.Vd=function vmc(){return Dmc(),smc};var rmc,smc;JU(1150,1,{},xmc);_.tc=function ymc(){return 'varying vec2 vUv;\r\nuniform sampler2D tDiffuse;\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = texture2D( tDiffuse, vUv );\r\n\r\n}\r\n'};JU(1151,1,{},Amc);_.tc=function Bmc(){return lVc};var mN=$jb(ITc,'MaterialsRenderTarget$DemoScene',1143),pN=$jb(ITc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator',1144),nN=$jb(ITc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$1',1145),oN=$jb(ITc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$2',1146),sN=$jb(ITc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator',1149),qN=$jb(ITc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$1',1150),rN=$jb(ITc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$2',1151);WOc(Ii)(33);