function SKb(){}
function WKb(){}
function ZKb(){}
function OKb(){OKb=GKc;NKb=new SKb}
function _Kb(){_Kb=GKc;QKb=new WKb}
function aLb(){aLb=GKc;RKb=new ZKb}
function LKb(){aJb.call(this,(OKb(),NKb))}
function xlc(){hac.call(this);this.d=0;this.e=0}
JU(755,731,eMc,LKb);_.Sd=function MKb(){QIb(this,'mRefractionRatio',new qNb((JNb(),vNb),new mkb(1.02)));QIb(this,'mFresnelBias',new qNb(vNb,new mkb(0.1)));QIb(this,'mFresnelPower',new qNb(vNb,new mkb(2)));QIb(this,'mFresnelScale',new qNb(vNb,new mkb(1)));QIb(this,ASc,new pNb(BNb))};var NKb;JU(756,1,{},SKb);_.Vd=function TKb(){return _Kb(),QKb};_.Wd=function UKb(){return aLb(),RKb};var QKb,RKb;JU(757,1,{},WKb);_.uc=function XKb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};JU(758,1,{},ZKb);_.uc=function $Kb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};JU(1140,1,rMc);_.Db=function vlc(){J9b(this.c,new xlc(this.b))};JU(1141,973,{327:1},xlc);_.ob=function ylc(){var a,b,c,d,e,f,g,i,j;this.b=new PQb(60,dHb(this.H.n),1,100000);z6b(this.b.ab,3200);this.c=new PQb(60,dHb(this.H.n),1,100000);this.f=new O8b;a=new mXb(100,32,16);j=new yOb('./static/textures/cube/park2/*.jpg');ZNb(j,(_Cb(),ZCb));g=new LKb;oNb(Wu(pSb(g.j,ASc),225),j);c=new U2b(g);this.g=new brb;for(b=0;b<500;b++){d=new _7b(a,c);M5b(d.ab,tlb()*10000-5000);N5b(d.ab,tlb()*10000-5000);z6b(d.ab,tlb()*10000-5000);w6b(d.fb,tlb()*3+1);MPb(this.I,d);Tqb(this.g,d)}this.I.X=false;i=new CJb;oNb(Wu(pSb(i.j,ASc),225),j);f=new U2b(i);XZb(f,(J_b(),G_b));e=new _7b(new xWb(100000,100000,100000),f);MPb(this.f,e);xHb(this.H.n,false)};_.pb=function zlc(a){var b,c,d,e;e=1.0E-4*a;H5b(this.b.ab,(this.d-this.b.ab.d)*0.05);I5b(this.b.ab,(-this.e-this.b.ab.e)*0.05);jQb(this.b,this.I.ab);P3b(this.c.db,this.b.db);for(b=0,c=this.g.c;b<c;b++){d=Wu(Wqb(this.g,b),304);M5b(d.ab,5000*Math.cos(e+b));N5b(d.ab,5000*Math.sin(e+b*1.1))}YGb(this.H.n,true);pHb(this.H.n,this.f,this.c,null,false);pHb(this.H.n,this.I,this.b,null,false)};_.d=0;_.e=0;var iN=akb(tRc,'MaterialsCubemapFresnel$DemoScene',1141),KG=akb(BSc,'FresnelShader',755),JG=akb(BSc,'FresnelShader_Resources_default_InlineClientBundleGenerator',756),HG=akb(BSc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',757),IG=akb(BSc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',758);FMc(Ii)(21);