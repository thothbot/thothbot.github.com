function YGb(){}
function aHb(){}
function dHb(){}
function fHb(){fHb=wzc;WGb=new aHb}
function gHb(){gHb=wzc;XGb=new dHb}
function UGb(){UGb=wzc;TGb=new YGb}
function RGb(){BFb.call(this,(UGb(),TGb))}
function jgc(){w5b.call(this);this.c=0;this.d=0}
cS(734,716,OAc,RGb);_.Jd=function SGb(){pFb(this,'mRefractionRatio',new wJb((PJb(),BJb),new dhb(1.02)));pFb(this,'mFresnelBias',new wJb(BJb,new dhb(0.1)));pFb(this,'mFresnelPower',new wJb(BJb,new dhb(2)));pFb(this,'mFresnelScale',new wJb(BJb,new dhb(1)));pFb(this,gHc,new vJb(HJb))};var TGb;cS(735,1,{},YGb);_.Md=function ZGb(){return fHb(),WGb};_.Nd=function $Gb(){return gHb(),XGb};var WGb,XGb;cS(736,1,{},aHb);_.bc=function bHb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};cS(737,1,{},dHb);_.bc=function eHb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};cS(1096,1,aBc);_.yb=function hgc(){t5b(this.b,new jgc(this.a))};cS(1097,943,{273:1},jgc);_.mb=function kgc(){var a,b,c,d,e,f,g,i,j;this.a=new PMb(60,NDb(this.D.n),1,100000);o2b(this.a._,3200);this.b=new PMb(60,NDb(this.D.n),1,100000);this.e=new z4b;a=new fTb(100,32,16);j=new EKb('./static/textures/cube/park2/*.jpg');dKb(j,(Dzb(),Bzb));g=new RGb;uJb(Au(mOb(g.i,gHc),174),j);c=new I$b(g);this.f=new Rnb;for(b=0;b<500;b++){d=new P3b(a,c);C1b(d._,kib()*10000-5000);D1b(d._,kib()*10000-5000);o2b(d._,kib()*10000-5000);l2b(d.eb,kib()*3+1);QLb(this.F,d);Hnb(this.f,d)}this.F.W=false;i=new bGb;uJb(Au(mOb(i.i,gHc),174),j);f=new I$b(i);QVb(f,(DXb(),AXb));e=new P3b(new sSb(100000,100000,100000),f);QLb(this.e,e);this.D.n.Y=false};_.nb=function lgc(a){var b,c,d,e;e=1.0E-4*a;x1b(this.a._,(this.c-this.a._.c)*0.05);y1b(this.a._,(-this.d-this.a._.d)*0.05);nMb(this.a,this.F._);E_b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=Au(Knb(this.f,b),252);C1b(d._,5000*Math.cos(e+b));D1b(d._,5000*Math.sin(e+b*1.1))}IDb(this.D.n);ZDb(this.D.n,this.e,this.b,null,false);ZDb(this.D.n,this.F,this.a,null,false)};_.c=0;_.d=0;var aM=Tgb(VFc,'MaterialsCubemapFresnel$DemoScene',1097),ZF=Tgb(hHc,'FresnelShader',734),YF=Tgb(hHc,'FresnelShader_Resources_default_InlineClientBundleGenerator',735),WF=Tgb(hHc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',736),XF=Tgb(hHc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',737);mBc(wi)(21);