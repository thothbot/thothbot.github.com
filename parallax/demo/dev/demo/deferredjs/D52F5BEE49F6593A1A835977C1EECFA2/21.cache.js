function oKb(){}
function sKb(){}
function vKb(){}
function kKb(){kKb=KMc;jKb=new oKb}
function xKb(){xKb=KMc;mKb=new sKb}
function yKb(){yKb=KMc;nKb=new vKb}
function hKb(){yIb.call(this,(kKb(),jKb))}
function slc(){E9b.call(this);this.c=0;this.d=0}
aU(755,731,gOc,hKb);_.Ld=function iKb(){mIb(this,'mRefractionRatio',new OMb((fNb(),TMb),new Mjb(1.02)));mIb(this,'mFresnelBias',new OMb(TMb,new Mjb(0.1)));mIb(this,'mFresnelPower',new OMb(TMb,new Mjb(2)));mIb(this,'mFresnelScale',new OMb(TMb,new Mjb(1)));mIb(this,sUc,new NMb(ZMb))};var jKb;aU(756,1,{},oKb);_.Od=function pKb(){return xKb(),mKb};_.Pd=function qKb(){return yKb(),nKb};var mKb,nKb;aU(757,1,{},sKb);_.nc=function tKb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};aU(758,1,{},vKb);_.nc=function wKb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};aU(1139,1,tOc);_.zb=function qlc(){e9b(this.b,new slc(this.a))};aU(1140,973,{327:1},slc);_.nb=function tlc(){var a,b,c,d,e,f,g,i,j;this.a=new lQb(60,BGb(this.G.k),1,100000);X5b(this.a._,3200);this.b=new lQb(60,BGb(this.G.k),1,100000);this.e=new k8b;a=new KWb(100,32,16);j=new WNb('./static/textures/cube/park2/*.jpg');vNb(j,(xCb(),vCb));g=new hKb;MMb(ru(NRb(g.i,sUc),225),j);c=new q2b(g);this.f=new zqb;for(b=0;b<500;b++){e=new x7b(a,c);i5b(e._,Tkb()*10000-5000);j5b(e._,Tkb()*10000-5000);X5b(e._,Tkb()*10000-5000);U5b(e.eb,Tkb()*3+1);iPb(this.H,e);pqb(this.f,e)}this.H.W=false;i=new $Ib;MMb(ru(NRb(i.i,sUc),225),j);f=new q2b(i);tZb(f,(f_b(),c_b));d=new x7b(new VVb(100000,100000,100000),f);iPb(this.e,d);VGb(this.G.k,false)};_.ob=function ulc(a){var b,c,d,e;e=1.0E-4*a;d5b(this.a._,(this.c-this.a._.c)*0.05);e5b(this.a._,(-this.d-this.a._.d)*0.05);HPb(this.a,this.H._);l3b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=ru(sqb(this.f,b),304);i5b(d._,5000*Math.cos(e+b));j5b(d._,5000*Math.sin(e+b*1.1))}uGb(this.G.k,true);NGb(this.G.k,this.e,this.b,null,false);NGb(this.G.k,this.H,this.a,null,false)};_.c=0;_.d=0;var BM=Ajb(lTc,'MaterialsCubemapFresnel$DemoScene',1140),bG=Ajb(tUc,'FresnelShader',755),aG=Ajb(tUc,'FresnelShader_Resources_default_InlineClientBundleGenerator',756),$F=Ajb(tUc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',757),_F=Ajb(tUc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',758);HOc(xi)(21);