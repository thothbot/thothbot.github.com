function pKb(){}
function tKb(){}
function wKb(){}
function lKb(){lKb=cKc;kKb=new pKb}
function yKb(){yKb=cKc;nKb=new tKb}
function zKb(){zKb=cKc;oKb=new wKb}
function iKb(){zIb.call(this,(lKb(),kKb))}
function Vkc(){G9b.call(this);this.c=0;this.d=0}
aU(755,731,ALc,iKb);_.Ld=function jKb(){nIb(this,'mRefractionRatio',new PMb((gNb(),UMb),new Mjb(1.02)));nIb(this,'mFresnelBias',new PMb(UMb,new Mjb(0.1)));nIb(this,'mFresnelPower',new PMb(UMb,new Mjb(2)));nIb(this,'mFresnelScale',new PMb(UMb,new Mjb(1)));nIb(this,NRc,new OMb($Mb))};var kKb;aU(756,1,{},pKb);_.Od=function qKb(){return yKb(),nKb};_.Pd=function rKb(){return zKb(),oKb};var nKb,oKb;aU(757,1,{},tKb);_.nc=function uKb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};aU(758,1,{},wKb);_.nc=function xKb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};aU(1139,1,NLc);_.zb=function Tkc(){g9b(this.b,new Vkc(this.a))};aU(1140,973,{327:1},Vkc);_.nb=function Wkc(){var a,b,c,d,e,f,g,i,j;this.a=new mQb(60,CGb(this.G.k),1,100000);Y5b(this.a._,3200);this.b=new mQb(60,CGb(this.G.k),1,100000);this.e=new l8b;a=new LWb(100,32,16);j=new XNb('./static/textures/cube/park2/*.jpg');wNb(j,(yCb(),wCb));g=new iKb;NMb(ru(ORb(g.i,NRc),225),j);c=new r2b(g);this.f=new Aqb;for(b=0;b<500;b++){e=new y7b(a,c);j5b(e._,Tkb()*10000-5000);k5b(e._,Tkb()*10000-5000);Y5b(e._,Tkb()*10000-5000);V5b(e.eb,Tkb()*3+1);jPb(this.H,e);qqb(this.f,e)}this.H.W=false;i=new _Ib;NMb(ru(ORb(i.i,NRc),225),j);f=new r2b(i);uZb(f,(g_b(),d_b));d=new y7b(new WVb(100000,100000,100000),f);jPb(this.e,d);WGb(this.G.k,false)};_.ob=function Xkc(a){var b,c,d,e;e=1.0E-4*a;e5b(this.a._,(this.c-this.a._.c)*0.05);f5b(this.a._,(-this.d-this.a._.d)*0.05);IPb(this.a,this.H._);m3b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=ru(tqb(this.f,b),304);j5b(d._,5000*Math.cos(e+b));k5b(d._,5000*Math.sin(e+b*1.1))}vGb(this.G.k,true);OGb(this.G.k,this.e,this.b,null,false);OGb(this.G.k,this.H,this.a,null,false)};_.c=0;_.d=0;var BM=Ajb(GQc,'MaterialsCubemapFresnel$DemoScene',1140),bG=Ajb(ORc,'FresnelShader',755),aG=Ajb(ORc,'FresnelShader_Resources_default_InlineClientBundleGenerator',756),$F=Ajb(ORc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',757),_F=Ajb(ORc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',758);_Lc(xi)(21);