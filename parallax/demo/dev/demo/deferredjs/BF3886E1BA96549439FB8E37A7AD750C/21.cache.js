function zLb(){}
function DLb(){}
function GLb(){}
function vLb(){vLb=EQc;uLb=new zLb}
function ILb(){ILb=EQc;xLb=new DLb}
function JLb(){JLb=EQc;yLb=new GLb}
function sLb(){JJb.call(this,(vLb(),uLb))}
function zmc(){Lac.call(this);this.c=0;this.d=0}
PU(754,730,aSc,sLb);_.Ld=function tLb(){xJb(this,'mRefractionRatio',new ZNb((qOb(),cOb),new qkb(1.02)));xJb(this,'mFresnelBias',new ZNb(cOb,new qkb(0.1)));xJb(this,'mFresnelPower',new ZNb(cOb,new qkb(2)));xJb(this,'mFresnelScale',new ZNb(cOb,new qkb(1)));xJb(this,xYc,new YNb(iOb))};var uLb;PU(755,1,{},zLb);_.Od=function ALb(){return ILb(),xLb};_.Pd=function BLb(){return JLb(),yLb};var xLb,yLb;PU(756,1,{},DLb);_.nc=function ELb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};PU(757,1,{},GLb);_.nc=function HLb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};PU(1138,1,nSc);_.zb=function xmc(){lac(this.b,new zmc(this.a))};PU(1139,972,{328:1},zmc);_.nb=function Amc(){var a,b,c,d,e,f,g,i,j;this.a=new uRb(60,MHb(this.G.k),1,100000);c7b(this.a._,3200);this.b=new uRb(60,MHb(this.G.k),1,100000);this.e=new r9b;a=new RXb(100,32,16);j=new fPb('./static/textures/cube/park2/*.jpg');GOb(j,(hDb(),fDb));g=new sLb;XNb(zu(USb(g.i,xYc),227),j);c=new x3b(g);this.f=new drb;for(b=0;b<500;b++){e=new E8b(a,c);p6b(e._,xlb()*10000-5000);q6b(e._,xlb()*10000-5000);c7b(e._,xlb()*10000-5000);_6b(e.eb,xlb()*3+1);tQb(this.H,e);Vqb(this.f,e)}this.H.W=false;i=new jKb;XNb(zu(USb(i.i,xYc),227),j);f=new x3b(i);A$b(f,(m0b(),j0b));d=new E8b(new aXb(100000,100000,100000),f);tQb(this.e,d);eIb(this.G.k,false)};_.ob=function Bmc(a){var b,c,d,e;e=1.0E-4*a;k6b(this.a._,(this.c-this.a._.c)*0.05);l6b(this.a._,(-this.d-this.a._.d)*0.05);SQb(this.a,this.H._);s4b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=zu(Yqb(this.f,b),305);p6b(d._,5000*Math.cos(e+b));q6b(d._,5000*Math.sin(e+b*1.1))}FHb(this.G.k,true);YHb(this.G.k,this.e,this.b,null,false);YHb(this.G.k,this.H,this.a,null,false)};_.c=0;_.d=0;var IM=ekb(pXc,'MaterialsCubemapFresnel$DemoScene',1139),iG=ekb(yYc,'FresnelShader',754),hG=ekb(yYc,'FresnelShader_Resources_default_InlineClientBundleGenerator',755),fG=ekb(yYc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',756),gG=ekb(yYc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',757);BSc(xi)(21);