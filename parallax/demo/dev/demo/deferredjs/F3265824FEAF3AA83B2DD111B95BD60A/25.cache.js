function gGb(){}
function kGb(){}
function nGb(){}
function cGb(){cGb=TCc;bGb=new gGb}
function pGb(){pGb=TCc;eGb=new kGb}
function qGb(){qGb=TCc;fGb=new nGb}
function _Fb(){vEb.call(this,(cGb(),bGb))}
function jgc(){y4b.call(this);this.c=0;this.d=0}
DS(733,709,fEc,_Fb);_.Ld=function aGb(){jEb(this,'mRefractionRatio',new EIb((XIb(),JIb),new Hhb(1.02)));jEb(this,'mFresnelBias',new EIb(JIb,new Hhb(0.1)));jEb(this,'mFresnelPower',new EIb(JIb,new Hhb(2)));jEb(this,'mFresnelScale',new EIb(JIb,new Hhb(1)));jEb(this,mKc,new DIb(PIb))};var bGb;DS(734,1,{},gGb);_.Od=function hGb(){return pGb(),eGb};_.Pd=function iGb(){return qGb(),fGb};var eGb,fGb;DS(735,1,{},kGb);_.fc=function lGb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};DS(736,1,{},nGb);_.fc=function oGb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};DS(1105,1,rEc);_.Cb=function hgc(){v4b(this.b,new jgc(this.a))};DS(1106,940,{267:1},jgc);_.qb=function kgc(){var a,b,c,d,e,f,g,i,j;this.a=new _Lb(60,_Cb(this.G.n),1,100000);j1b(this.a.ab,3200);this.b=new _Lb(60,_Cb(this.G.n),1,100000);this.e=new z3b;a=new sSb(100,32,16);j=new KJb('./static/textures/cube/park2/*.jpg');lJb(j,(aAb(),$zb));g=new _Fb;CIb(pu(MNb(g.i,mKc),168),j);c=new RZb(g);this.f=new tob;for(b=0;b<500;b++){e=new H2b(a,c);B0b(e.ab,Oib()*10000-5000);C0b(e.ab,Oib()*10000-5000);j1b(e.ab,Oib()*10000-5000);e1b(e.fb,Oib()*3+1);XKb(this.H,e);job(this.f,e)}this.H.W=false;i=new XEb;CIb(pu(MNb(i.i,mKc),168),j);f=new RZb(i);pVb(f,(cXb(),_Wb));d=new H2b(new MRb(100000,100000,100000),f);XKb(this.e,d);this.G.n.R=false};_.rb=function lgc(a){var b,c,d,e;e=1.0E-4*a;w0b(this.a.ab,(this.c-this.a.ab.c)*0.05);x0b(this.a.ab,(-this.d-this.a.ab.d)*0.05);BLb(this.a,this.H.ab);this.b.db.sf(this.a.db);for(b=0,c=this.f.b;b<c;b++){d=pu(mob(this.f,b),242);B0b(d.ab,5000*Math.cos(e+b));C0b(d.ab,5000*Math.sin(e+b*1.1))}YCb(this.G.n);eDb(this.G.n,this.e,this.b,null,false);eDb(this.G.n,this.H,this.a,null,false)};_.c=0;_.d=0;var WL=vhb(cJc,'MaterialsCubemapFresnel$DemoScene',1106),KF=vhb(jKc,'FresnelShader',733),JF=vhb(jKc,'FresnelShader_Resources_default_InlineClientBundleGenerator',734),HF=vhb(jKc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',735),IF=vhb(jKc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',736);EEc(ti)(25);