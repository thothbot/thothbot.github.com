function uIb(){}
function yIb(){}
function BIb(){}
function qIb(){qIb=XEc;pIb=new uIb}
function DIb(){DIb=XEc;sIb=new yIb}
function EIb(){EIb=XEc;tIb=new BIb}
function nIb(){ZGb.call(this,(qIb(),pIb))}
function Wic(){j7b.call(this);this.c=0;this.d=0}
RS(744,726,sGc,nIb);_.Jd=function oIb(){NGb(this,'mRefractionRatio',new UKb((lLb(),ZKb),new pib(1.02)));NGb(this,'mFresnelBias',new UKb(ZKb,new pib(0.1)));NGb(this,'mFresnelPower',new UKb(ZKb,new pib(2)));NGb(this,'mFresnelScale',new UKb(ZKb,new pib(1)));NGb(this,DMc,new TKb(dLb))};var pIb;RS(745,1,{},uIb);_.Md=function vIb(){return DIb(),sIb};_.Nd=function wIb(){return EIb(),tIb};var sIb,tIb;RS(746,1,{},yIb);_.ac=function zIb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};RS(747,1,{},BIb);_.ac=function CIb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};RS(1126,1,FGc);_.zb=function Uic(){L6b(this.b,new Wic(this.a))};RS(1127,961,{326:1},Wic);_.nb=function Xic(){var a,b,c,d,e,f,g,i,j;this.a=new oOb(60,aFb(this.D.k),1,100000);E3b(this.a._,3200);this.b=new oOb(60,aFb(this.D.k),1,100000);this.e=new R5b;a=new HUb(100,32,16);j=new aMb('./static/textures/cube/park2/*.jpg');BLb(j,(ZAb(),XAb));g=new nIb;SKb(su(MPb(g.i,DMc),225),j);c=new $_b(g);this.f=new cpb;for(b=0;b<500;b++){e=new e5b(a,c);S2b(e._,wjb()*10000-5000);T2b(e._,wjb()*10000-5000);E3b(e._,wjb()*10000-5000);B3b(e.eb,wjb()*3+1);oNb(this.F,e);Uob(this.f,e)}this.F.W=false;i=new zHb;SKb(su(MPb(i.i,DMc),225),j);f=new $_b(i);pXb(f,(aZb(),ZYb));d=new e5b(new STb(100000,100000,100000),f);oNb(this.e,d);uFb(this.D.k,false)};_.ob=function Yic(a){var b,c,d,e;e=1.0E-4*a;N2b(this.a._,(this.c-this.a._.c)*0.05);O2b(this.a._,(-this.d-this.a._.d)*0.05);MNb(this.a,this.F._);V0b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=su(Xob(this.f,b),303);S2b(d._,5000*Math.cos(e+b));T2b(d._,5000*Math.sin(e+b*1.1))}WEb(this.D.k);mFb(this.D.k,this.e,this.b,null,false);mFb(this.D.k,this.F,this.a,null,false)};_.c=0;_.d=0;var rM=dib(vLc,'MaterialsCubemapFresnel$DemoScene',1127),WF=dib(EMc,'FresnelShader',744),VF=dib(EMc,'FresnelShader_Resources_default_InlineClientBundleGenerator',745),TF=dib(EMc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',746),UF=dib(EMc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',747);SGc(xi)(21);