function kGb(){}
function oGb(){}
function rGb(){}
function gGb(){gGb=XCc;fGb=new kGb}
function tGb(){tGb=XCc;iGb=new oGb}
function uGb(){uGb=XCc;jGb=new rGb}
function dGb(){zEb.call(this,(gGb(),fGb))}
function ngc(){C4b.call(this);this.c=0;this.d=0}
KS(730,706,jEc,dGb);_.Ld=function eGb(){nEb(this,'mRefractionRatio',new IIb((_Ib(),NIb),new Lhb(1.02)));nEb(this,'mFresnelBias',new IIb(NIb,new Lhb(0.1)));nEb(this,'mFresnelPower',new IIb(NIb,new Lhb(2)));nEb(this,'mFresnelScale',new IIb(NIb,new Lhb(1)));nEb(this,zKc,new HIb(TIb))};var fGb;KS(731,1,{},kGb);_.Od=function lGb(){return tGb(),iGb};_.Pd=function mGb(){return uGb(),jGb};var iGb,jGb;KS(732,1,{},oGb);_.fc=function pGb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};KS(733,1,{},rGb);_.fc=function sGb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};KS(1102,1,vEc);_.Cb=function lgc(){z4b(this.b,new ngc(this.a))};KS(1103,937,{267:1},ngc);_.qb=function ogc(){var a,b,c,d,e,f,g,i,j;this.a=new dMb(60,dDb(this.G.n),1,100000);n1b(this.a.ab,3200);this.b=new dMb(60,dDb(this.G.n),1,100000);this.e=new D3b;a=new wSb(100,32,16);j=new OJb('./static/textures/cube/park2/*.jpg');pJb(j,(eAb(),cAb));g=new dGb;GIb(xu(QNb(g.i,zKc),168),j);c=new VZb(g);this.f=new xob;for(b=0;b<500;b++){e=new L2b(a,c);F0b(e.ab,Sib()*10000-5000);G0b(e.ab,Sib()*10000-5000);n1b(e.ab,Sib()*10000-5000);i1b(e.fb,Sib()*3+1);_Kb(this.H,e);nob(this.f,e)}this.H.W=false;i=new _Eb;GIb(xu(QNb(i.i,zKc),168),j);f=new VZb(i);tVb(f,(gXb(),dXb));d=new L2b(new QRb(100000,100000,100000),f);_Kb(this.e,d);this.G.n.R=false};_.rb=function pgc(a){var b,c,d,e;e=1.0E-4*a;A0b(this.a.ab,(this.c-this.a.ab.c)*0.05);B0b(this.a.ab,(-this.d-this.a.ab.d)*0.05);FLb(this.a,this.H.ab);this.b.db.sf(this.a.db);for(b=0,c=this.f.b;b<c;b++){d=xu(qob(this.f,b),242);F0b(d.ab,5000*Math.cos(e+b));G0b(d.ab,5000*Math.sin(e+b*1.1))}aDb(this.G.n);iDb(this.G.n,this.e,this.b,null,false);iDb(this.G.n,this.H,this.a,null,false)};_.c=0;_.d=0;var bM=zhb(pJc,'MaterialsCubemapFresnel$DemoScene',1103),RF=zhb(wKc,'FresnelShader',730),QF=zhb(wKc,'FresnelShader_Resources_default_InlineClientBundleGenerator',731),OF=zhb(wKc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',732),PF=zhb(wKc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',733);IEc(ti)(25);