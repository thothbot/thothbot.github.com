function xHb(){}
function BHb(){}
function EHb(){}
function tHb(){tHb=_zc;sHb=new xHb}
function GHb(){GHb=_zc;vHb=new BHb}
function HHb(){HHb=_zc;wHb=new EHb}
function qHb(){aGb.call(this,(tHb(),sHb))}
function Ogc(){Y5b.call(this);this.d=0;this.e=0}
FS(737,719,sBc,qHb);_.Qd=function rHb(){QFb(this,'mRefractionRatio',new XJb((oKb(),aKb),new Dhb(1.02)));QFb(this,'mFresnelBias',new XJb(aKb,new Dhb(0.1)));QFb(this,'mFresnelPower',new XJb(aKb,new Dhb(2)));QFb(this,'mFresnelScale',new XJb(aKb,new Dhb(1)));QFb(this,LHc,new WJb(gKb))};var sHb;FS(738,1,{},xHb);_.Td=function yHb(){return GHb(),vHb};_.Ud=function zHb(){return HHb(),wHb};var vHb,wHb;FS(739,1,{},BHb);_.ic=function CHb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};FS(740,1,{},EHb);_.ic=function FHb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};FS(1100,1,GBc);_.Cb=function Mgc(){V5b(this.c,new Ogc(this.b))};FS(1101,947,{273:1},Ogc);_.nb=function Pgc(){var a,b,c,d,e,f,g,i,j;this.b=new oNb(60,mEb(this.F.o),1,100000);Q2b(this.b.ab,3200);this.c=new oNb(60,mEb(this.F.o),1,100000);this.f=new _4b;a=new ITb(100,32,16);j=new dLb('./static/textures/cube/park2/*.jpg');EKb(j,(cAb(),aAb));g=new qHb;VJb(Xu(NOb(g.j,LHc),174),j);c=new j_b(g);this.g=new qob;for(b=0;b<500;b++){d=new p4b(a,c);c2b(d.ab,Kib()*10000-5000);d2b(d.ab,Kib()*10000-5000);Q2b(d.ab,Kib()*10000-5000);N2b(d.fb,Kib()*3+1);pMb(this.G,d);gob(this.g,d)}this.G.X=false;i=new CGb;VJb(Xu(NOb(i.j,LHc),174),j);f=new j_b(i);rWb(f,(eYb(),bYb));e=new p4b(new TSb(100000,100000,100000),f);pMb(this.f,e);this.F.o.Z=false};_.ob=function Qgc(a){var b,c,d,e;e=1.0E-4*a;Z1b(this.b.ab,(this.d-this.b.ab.d)*0.05);$1b(this.b.ab,(-this.e-this.b.ab.e)*0.05);OMb(this.b,this.G.ab);f0b(this.c.db,this.b.db);for(b=0,c=this.g.c;b<c;b++){d=Xu(job(this.g,b),252);c2b(d.ab,5000*Math.cos(e+b));d2b(d.ab,5000*Math.sin(e+b*1.1))}hEb(this.F.o);yEb(this.F.o,this.f,this.c,null,false);yEb(this.F.o,this.G,this.b,null,false)};_.d=0;_.e=0;var EM=rhb(zGc,'MaterialsCubemapFresnel$DemoScene',1101),zG=rhb(MHc,'FresnelShader',737),yG=rhb(MHc,'FresnelShader_Resources_default_InlineClientBundleGenerator',738),wG=rhb(MHc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',739),xG=rhb(MHc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',740);SBc(Hi)(21);