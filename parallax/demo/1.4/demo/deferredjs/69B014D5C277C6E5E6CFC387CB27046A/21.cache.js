function ZGb(){}
function bHb(){}
function eHb(){}
function gHb(){gHb=czc;XGb=new bHb}
function hHb(){hHb=czc;YGb=new eHb}
function VGb(){VGb=czc;UGb=new ZGb}
function SGb(){CFb.call(this,(VGb(),UGb))}
function ugc(){r5b.call(this);this.d=0;this.e=0}
eS(731,713,vAc,SGb);_.Md=function TGb(){qFb(this,'mRefractionRatio',new xJb((QJb(),CJb),new fhb(1.02)));qFb(this,'mFresnelBias',new xJb(CJb,new fhb(0.1)));qFb(this,'mFresnelPower',new xJb(CJb,new fhb(2)));qFb(this,'mFresnelScale',new xJb(CJb,new fhb(1)));qFb(this,HGc,new wJb(IJb))};var UGb;eS(732,1,{},ZGb);_.Pd=function $Gb(){return gHb(),XGb};_.Qd=function _Gb(){return hHb(),YGb};var XGb,YGb;eS(733,1,{},bHb);_.ec=function cHb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};eS(734,1,{},eHb);_.ec=function fHb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};eS(1096,1,JAc);_.Cb=function sgc(){o5b(this.c,new ugc(this.b))};eS(1097,940,{272:1},ugc);_.nb=function vgc(){var a,b,c,d,e,f,g,i,j;this.b=new QMb(60,ODb(this.F.o),1,100000);k2b(this.b.ab,3200);this.c=new QMb(60,ODb(this.F.o),1,100000);this.f=new u4b;a=new iTb(100,32,16);j=new FKb('./static/textures/cube/park2/*.jpg');eKb(j,(Fzb(),Dzb));g=new SGb;vJb(Gu(nOb(g.j,HGc),174),j);c=new F$b(g);this.g=new Tnb;for(b=0;b<500;b++){e=new L3b(a,c);y1b(e.ab,mib()*10000-5000);z1b(e.ab,mib()*10000-5000);k2b(e.ab,mib()*10000-5000);h2b(e.fb,mib()*3+1);RLb(this.G,e);Jnb(this.g,e)}this.G.X=false;i=new cGb;vJb(Gu(nOb(i.j,HGc),174),j);f=new F$b(i);TVb(f,(GXb(),DXb));d=new L3b(new tSb(100000,100000,100000),f);RLb(this.f,d);this.F.o.Z=false};_.ob=function wgc(a){var b,c,d,e;e=1.0E-4*a;t1b(this.b.ab,(this.d-this.b.ab.d)*0.05);u1b(this.b.ab,(-this.e-this.b.ab.e)*0.05);oMb(this.b,this.G.ab);B_b(this.c.db,this.b.db);for(b=0,c=this.g.c;b<c;b++){d=Gu(Mnb(this.g,b),251);y1b(d.ab,5000*Math.cos(e+b));z1b(d.ab,5000*Math.sin(e+b*1.1))}JDb(this.F.o);$Db(this.F.o,this.f,this.c,null,false);$Db(this.F.o,this.G,this.b,null,false)};_.d=0;_.e=0;var jM=Vgb(xFc,'MaterialsCubemapFresnel$DemoScene',1097),dG=Vgb(IGc,'FresnelShader',731),cG=Vgb(IGc,'FresnelShader_Resources_default_InlineClientBundleGenerator',732),aG=Vgb(IGc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',733),bG=Vgb(IGc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',734);VAc(Hi)(21);