function tmc(){}
function xmc(){}
function Amc(){}
function ppc(){}
function tpc(){}
function wpc(){}
function lpc(){lpc=Dzc;kpc=new ppc}
function ypc(){ypc=Dzc;npc=new tpc}
function zpc(){zpc=Dzc;opc=new wpc}
function pmc(){pmc=Dzc;omc=new tmc}
function Cmc(){Cmc=Dzc;rmc=new xmc}
function Dmc(){Dmc=Dzc;smc=new Amc}
function _ec(a,b){this.b=a;this.c=b}
function Xec(){B5b.call(this);this.e=0;this.f=0}
function mmc(){GFb.call(this,(pmc(),omc))}
function gpc(){GFb.call(this,(lpc(),kpc))}
function Wec(a,b){var c,d,e,f,g,i;d=new AKb(GGc);d.n=4;G1b(d.C,0.998,0.998);G1b(d.B,0.001,0.001);uKb(d,(PCb(),OCb));vKb(d,OCb);iKb(d,(Izb(),Gzb));e=new AKb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');G1b(e.C,0.998,0.998);G1b(e.B,0.001,0.001);uKb(e,OCb);vKb(e,OCb);iKb(e,Gzb);c=new AKb('./static/models/obj/leeperrysmith/Map-COL.jpg');G1b(c.C,0.998,0.998);G1b(c.B,0.001,0.001);uKb(c,OCb);vKb(c,OCb);iKb(c,Gzb);g=new gpc;i=g.j;zJb(Fu(i.b[JGc],174),(mgb(),mgb(),lgb));zJb(Fu(i.b[KGc],174),lgb);zJb(Fu(i.b[LGc],174),a.c.f);zJb(Fu(i.b[MGc],174),c);zJb(Fu(i.b[NGc],174),d);zJb(Fu(i.b[OGc],174),e);z_b(Fu(Fu(i.b[PGc],174).e,241),10526880);z_b(Fu(Fu(i.b[QGc],174).e,241),10526880);z_b(Fu(Fu(i.b[RGc],174).e,241),10526880);zJb(Fu(i.b[SGc],174),new ihb(0.145));zJb(Fu(i.b[TGc],174),new ihb(0.75));zJb(Fu(i.b[UGc],174),new ihb(16));f3b(Fu(Fu(i.b[VGc],174).e,249),0.001,0.001,0.998,0.998);f=new N$b(g);f.d=true;a.d=new U3b(b,f);I1b(a.d.ab,-50);q2b(a.d.fb,100);$Lb(a.d,true);a.d.V=true;VLb(a.G,a.d)}
var JGc='enableBump',LGc='tBeckmann',SGc='uRoughness',TGc='uSpecularBrightness';hS(1073,1,iBc);_.Cb=function Uec(){y5b(this.c,new Xec(this.b))};hS(1074,940,{269:1},Xec);_.nb=function Yec(){var b,c,d,e,f,g,i,j;this.b=new UMb(27,SDb(this.F.o),1,10000);t2b(this.b.ab,1200);VLb(this.G,new sUb(5592405));f=new lVb(16777215,1.5,1000);r2b(f.ab,0,0,600);VLb(this.G,f);i=new tVb(1);r2b(i.ab,0.05,0.05,1);VLb(this.G,i);i.ab.nf(700);i.T=true;i.u=true;i.J=2048;i.H=2048;i.B=200;i.A=1500;i.e=40;i.v=-0.005;i.F=0.15;b=new VUb(16777215,0.85);r2b(b.ab,1,-0.5,1);y_b(b.M,0.6,1,0.85);VLb(this.G,b);b.ab.nf(500);b.T=true;b.J=2048;b.H=2048;b.B=200;b.A=1500;b.f=-500;b.g=500;b.i=500;b.e=-500;b.v=-0.005;b.F=0.15;c=new VUb(16777215,0.85);r2b(c.ab,1,-0.5,-1);VLb(this.G,c);new Cxc(new mmc);d=new Cxc(new Yxc);d.b=true;j=new XKb(512,512);nKb(j,(xBb(),rBb));lKb(j,(mBb(),kBb));iKb(j,(Izb(),Gzb));j.g=false;this.c=new sxc(this.F.o,j);e=new iqc;try{Zpc(e,HGc,new _ec(this,e))}catch(a){a=mR(a);if(Iu(a,46)){JLb();kU(ILb,(Crb(),Arb),IGc)}else throw lR(a)}nEb(this.F.o,new C_b(5001561),1);g=new hDb(this.F.o,this.G);g.i=false;this.F.o.Z=false;this.F.o._=true;this.F.o.ab=true};_.ob=function Zec(a){var b,c;b=this.e*0.001;c=this.f*0.001;if(this.d){I_b(this.d.db,0.05*(b-this.d.db.e));H_b(this.d.db,0.05*(c-this.d.db.d))}NDb(this.F.o);cEb(this.F.o,this.G,this.b,null,false)};_.e=0;_.f=0;hS(1075,1,{},_ec);_.yf=function afc(){Wec(this.b,this.c.b)};hS(1175,713,WAc,mmc);_.Md=function nmc(){};var omc;hS(1176,1,{},tmc);_.Pd=function umc(){return Cmc(),rmc};_.Qd=function vmc(){return Dmc(),smc};var rmc,smc;hS(1177,1,{},xmc);_.ec=function ymc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};hS(1178,1,{},Amc);_.ec=function Bmc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};hS(1242,713,WAc,gpc);_.Md=function hpc(){BFb(this,YJb());BFb(this,ZJb());BFb(this,$Jb());uFb(this,JGc,new BJb((UJb(),JJb),Qhb(0)));uFb(this,KGc,new BJb(JJb,Qhb(0)));uFb(this,MGc,new AJb(MJb));uFb(this,LGc,new AJb(MJb));uFb(this,QGc,new BJb(FJb,new C_b(15658734)));uFb(this,RGc,new BJb(FJb,new C_b(1118481)));uFb(this,PGc,new BJb(FJb,new C_b(328965)));uFb(this,WGc,new BJb(GJb,new ihb(1)));uFb(this,SGc,new BJb(GJb,new ihb(0.15)));uFb(this,TGc,new BJb(GJb,new ihb(0.75)));uFb(this,NGc,new AJb(MJb));uFb(this,UGc,new BJb(GJb,new ihb(1)));uFb(this,OGc,new AJb(MJb));uFb(this,VGc,new BJb(SJb,new j3b(0,0,1,1)));uFb(this,'uWrapRGB',new BJb(QJb,new x2b(0.75,0.375,0.1875)))};_.Nd=function ipc(a){var b,c;c=new sob(vu(bQ,Jzc,1,[XGc,YGc,ZGc]));b=new sob(vu(bQ,Jzc,1,[$Gc,_Gc,aHc]));DFb(this,LFb(a,vu(eQ,Jzc,121,[c,b])))};_.Od=function jpc(a){var b,c;c=new sob(vu(bQ,Jzc,1,[bHc]));b=new sob(vu(bQ,Jzc,1,[cHc]));EFb(this,LFb(a,vu(eQ,Jzc,121,[c,b])))};var kpc;hS(1243,1,{},ppc);_.Pd=function qpc(){return ypc(),npc};_.Qd=function rpc(){return zpc(),opc};var npc,opc;hS(1244,1,{},tpc);_.ec=function upc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};hS(1245,1,{},wpc);_.ec=function xpc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var NL=Ygb(YFc,'MaterialsBumpmapSkin$DemoScene',1074),ML=Ygb(YFc,'MaterialsBumpmapSkin$DemoScene$1',1075),FN=Ygb(RFc,'BeckmannShader',1175),EN=Ygb(RFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1176),CN=Ygb(RFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1177),DN=Ygb(RFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1178),UN=Ygb(RFc,'SkinSimpleShader',1242),TN=Ygb(RFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1243),RN=Ygb(RFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1244),SN=Ygb(RFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1245);uBc(Gi)(17);