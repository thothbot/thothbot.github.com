function BIb(){}
function FIb(){}
function IIb(){}
function xIb(){xIb=cFc;wIb=new BIb}
function KIb(){KIb=cFc;zIb=new FIb}
function LIb(){LIb=cFc;AIb=new IIb}
function uIb(){eHb.call(this,(xIb(),wIb))}
function bjc(){q7b.call(this);this.d=0;this.e=0}
bT(738,720,BGc,uIb);_.Md=function vIb(){UGb(this,'mRefractionRatio',new _Kb((sLb(),eLb),new wib(1.02)));UGb(this,'mFresnelBias',new _Kb(eLb,new wib(0.1)));UGb(this,'mFresnelPower',new _Kb(eLb,new wib(2)));UGb(this,'mFresnelScale',new _Kb(eLb,new wib(1)));UGb(this,PMc,new $Kb(kLb))};var wIb;bT(739,1,{},BIb);_.Pd=function CIb(){return KIb(),zIb};_.Qd=function DIb(){return LIb(),AIb};var zIb,AIb;bT(740,1,{},FIb);_.dc=function GIb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};bT(741,1,{},IIb);_.dc=function JIb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};bT(1120,1,OGc);_.Db=function _ic(){S6b(this.c,new bjc(this.b))};bT(1121,955,{326:1},bjc);_.ob=function cjc(){var a,b,c,d,e,f,g,i,j;this.b=new vOb(60,hFb(this.F.n),1,100000);L3b(this.b.ab,3200);this.c=new vOb(60,hFb(this.F.n),1,100000);this.f=new Y5b;a=new OUb(100,32,16);j=new hMb('./static/textures/cube/park2/*.jpg');ILb(j,(eBb(),cBb));g=new uIb;ZKb(Fu(TPb(g.j,PMc),225),j);c=new f0b(g);this.g=new jpb;for(b=0;b<500;b++){e=new l5b(a,c);Z2b(e.ab,Djb()*10000-5000);$2b(e.ab,Djb()*10000-5000);L3b(e.ab,Djb()*10000-5000);I3b(e.fb,Djb()*3+1);vNb(this.G,e);_ob(this.g,e)}this.G.X=false;i=new GHb;ZKb(Fu(TPb(i.j,PMc),225),j);f=new f0b(i);wXb(f,(hZb(),eZb));d=new l5b(new ZTb(100000,100000,100000),f);vNb(this.f,d);BFb(this.F.n,false)};_.pb=function djc(a){var b,c,d,e;e=1.0E-4*a;U2b(this.b.ab,(this.d-this.b.ab.d)*0.05);V2b(this.b.ab,(-this.e-this.b.ab.e)*0.05);TNb(this.b,this.G.ab);a1b(this.c.db,this.b.db);for(b=0,c=this.g.c;b<c;b++){d=Fu(cpb(this.g,b),303);Z2b(d.ab,5000*Math.cos(e+b));$2b(d.ab,5000*Math.sin(e+b*1.1))}bFb(this.F.n);tFb(this.F.n,this.f,this.c,null,false);tFb(this.F.n,this.G,this.b,null,false)};_.d=0;_.e=0;var EM=kib(HLc,'MaterialsCubemapFresnel$DemoScene',1121),gG=kib(QMc,'FresnelShader',738),fG=kib(QMc,'FresnelShader_Resources_default_InlineClientBundleGenerator',739),dG=kib(QMc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',740),eG=kib(QMc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',741);_Gc(Hi)(21);