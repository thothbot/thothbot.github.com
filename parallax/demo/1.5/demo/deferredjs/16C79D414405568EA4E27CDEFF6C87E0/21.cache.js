function fKb(){}
function jKb(){}
function mKb(){}
function bKb(){bKb=UJc;aKb=new fKb}
function oKb(){oKb=UJc;dKb=new jKb}
function pKb(){pKb=UJc;eKb=new mKb}
function $Jb(){pIb.call(this,(bKb(),aKb))}
function Lkc(){w9b.call(this);this.c=0;this.d=0}
YT(753,729,qLc,$Jb);_.Ld=function _Jb(){dIb(this,'mRefractionRatio',new FMb((YMb(),KMb),new Cjb(1.02)));dIb(this,'mFresnelBias',new FMb(KMb,new Cjb(0.1)));dIb(this,'mFresnelPower',new FMb(KMb,new Cjb(2)));dIb(this,'mFresnelScale',new FMb(KMb,new Cjb(1)));dIb(this,BRc,new EMb(QMb))};var aKb;YT(754,1,{},fKb);_.Od=function gKb(){return oKb(),dKb};_.Pd=function hKb(){return pKb(),eKb};var dKb,eKb;YT(755,1,{},jKb);_.nc=function kKb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};YT(756,1,{},mKb);_.nc=function nKb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};YT(1137,1,DLc);_.zb=function Jkc(){Y8b(this.b,new Lkc(this.a))};YT(1138,971,{327:1},Lkc);_.nb=function Mkc(){var a,b,c,d,e,f,g,i,j;this.a=new cQb(60,sGb(this.G.k),1,100000);O5b(this.a._,3200);this.b=new cQb(60,sGb(this.G.k),1,100000);this.e=new b8b;a=new BWb(100,32,16);j=new NNb('./static/textures/cube/park2/*.jpg');mNb(j,(oCb(),mCb));g=new $Jb;DMb(pu(ERb(g.i,BRc),225),j);c=new h2b(g);this.f=new qqb;for(b=0;b<500;b++){d=new o7b(a,c);_4b(d._,Jkb()*10000-5000);a5b(d._,Jkb()*10000-5000);O5b(d._,Jkb()*10000-5000);L5b(d.eb,Jkb()*3+1);_Ob(this.H,d);gqb(this.f,d)}this.H.W=false;i=new RIb;DMb(pu(ERb(i.i,BRc),225),j);f=new h2b(i);kZb(f,(Y$b(),V$b));e=new o7b(new MVb(100000,100000,100000),f);_Ob(this.e,e);MGb(this.G.k,false)};_.ob=function Nkc(a){var b,c,d,e;e=1.0E-4*a;W4b(this.a._,(this.c-this.a._.c)*0.05);X4b(this.a._,(-this.d-this.a._.d)*0.05);yPb(this.a,this.H._);c3b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=pu(jqb(this.f,b),304);_4b(d._,5000*Math.cos(e+b));a5b(d._,5000*Math.sin(e+b*1.1))}lGb(this.G.k,true);EGb(this.G.k,this.e,this.b,null,false);EGb(this.G.k,this.H,this.a,null,false)};_.c=0;_.d=0;var xM=qjb(uQc,'MaterialsCubemapFresnel$DemoScene',1138),ZF=qjb(CRc,'FresnelShader',753),YF=qjb(CRc,'FresnelShader_Resources_default_InlineClientBundleGenerator',754),WF=qjb(CRc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',755),XF=qjb(CRc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',756);RLc(xi)(21);