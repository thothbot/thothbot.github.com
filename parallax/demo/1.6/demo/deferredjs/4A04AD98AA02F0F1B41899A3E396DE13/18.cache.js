function Kvc(){}
function Ovc(){}
function Rvc(){}
function ryc(){}
function vyc(){}
function yyc(){}
function dmc(a){this.b=a}
function Gvc(){Gvc=$Mc;Fvc=new Kvc}
function Tvc(){Tvc=$Mc;Ivc=new Ovc}
function Uvc(){Uvc=$Mc;Jvc=new Rvc}
function nyc(){nyc=$Mc;myc=new ryc}
function Ayc(){Ayc=$Mc;pyc=new vyc}
function Byc(){Byc=$Mc;qyc=new yyc}
function iyc(){aKb.call(this,(nyc(),myc))}
function Dvc(){aKb.call(this,(Gvc(),Fvc))}
function _lc(){acc.call(this);this.e=0;this.f=0}
function $lc(a,b){var c,d,e,f,g,i;d=new pPb(xUc);d.n=4;o8b(d.C,0.998,0.998);o8b(d.B,0.001,0.001);jPb(d,(QGb(),PGb));kPb(d,PGb);ZOb(d,(JDb(),HDb));e=new pPb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');o8b(e.C,0.998,0.998);o8b(e.B,0.001,0.001);jPb(e,PGb);kPb(e,PGb);ZOb(e,HDb);c=new pPb('./static/models/obj/leeperrysmith/Map-COL.jpg');o8b(c.C,0.998,0.998);o8b(c.B,0.001,0.001);jPb(c,PGb);kPb(c,PGb);ZOb(c,HDb);g=new iyc;i=g.j;oOb(bw(i.b[zUc],226),(Ujb(),Ujb(),Tjb));oOb(bw(i.b[AUc],226),Tjb);oOb(bw(i.b[BUc],226),a.c.f);oOb(bw(i.b[CUc],226),c);oOb(bw(i.b[DUc],226),d);oOb(bw(i.b[EUc],226),e);D5b(bw(bw(i.b[FUc],226).e,298),10526880);D5b(bw(bw(i.b[GUc],226).e,298),10526880);D5b(bw(bw(i.b[HUc],226).e,298),10526880);oOb(bw(i.b[IUc],226),new Tkb(0.145));oOb(bw(i.b[JUc],226),new Tkb(0.75));oOb(bw(i.b[KUc],226),new Tkb(16));z9b(bw(bw(i.b[LUc],226).e,305),0.001,0.001,0.998,0.998);f=new M4b(g);f.d=true;a.d=new SZb(b,f);q8b(a.d.ab,-50);W8b(a.d.fb,100);RQb(a.d,true);a.d.V=true;MQb(a.I,a.d)}
var zUc='enableBump',BUc='tBeckmann',IUc='uRoughness',JUc='uSpecularBrightness';kW(1137,1,MOc);_.Qb=function Ylc(){Cbc(this.c,new _lc(this.b))};kW(1138,990,{327:1},_lc);_.ob=function amc(){var a,b,c,d,e,f,g;this.b=new QRb(27,UGb(this.H.n),1,10000);Z8b(this.b.ab,1200);MQb(this.I,new i$b(5592405));d=new f_b(16777215,1.5,1000);X8b(d.ab,0,0,600);MQb(this.I,d);f=new o_b(1);X8b(f.ab,0.05,0.05,1);MQb(this.I,f);f.ab.nf(700);f.T=true;f.u=true;f.J=2048;f.H=2048;f.B=200;f.A=1500;f.e=40;f.v=-0.005;f.F=0.15;a=new M$b(16777215,0.85);X8b(a.ab,1,-0.5,1);C5b(a.M,0.6,1,0.85);MQb(this.I,a);a.ab.nf(500);a.T=true;a.J=2048;a.H=2048;a.B=200;a.A=1500;a.f=-500;a.g=500;a.i=500;a.e=-500;a.v=-0.005;a.F=0.15;b=new M$b(16777215,0.85);X8b(b.ab,1,-0.5,-1);MQb(this.I,b);new qJc(new Dvc);c=new qJc(new dKc);c.b=true;g=new MPb(512,512);cPb(g,(yFb(),sFb));aPb(g,(nFb(),lFb));ZOb(g,(JDb(),HDb));g.g=false;this.c=new fJc(this.H.n,g);new Lzc(yUc,new dmc(this));BIb(this.H.n,new H5b(5001561),1);e=new wHb(this.H.n,this.I);e.i=false;VGb(this.H.n,false);this.H.n.Y=true;this.H.n.Z=true};_.pb=function bmc(a){var b,c;b=this.e*0.001;c=this.f*0.001;if(this.d){O5b(this.d.db,0.05*(b-this.d.db.e));N5b(this.d.db,0.05*(c-this.d.db.d))}_Hb(this.H.n,true);rIb(this.H.n,this.I,this.b,null,false)};_.e=0;_.f=0;kW(1139,1,{},dmc);_.xf=function emc(a,b){$lc(this.b,bw(b,243))};kW(1274,742,yOc,Dvc);_.Td=function Evc(){};var Fvc;kW(1275,1,{},Kvc);_.Wd=function Lvc(){return Tvc(),Ivc};_.Xd=function Mvc(){return Uvc(),Jvc};var Ivc,Jvc;kW(1276,1,{},Ovc);_.uc=function Pvc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};kW(1277,1,{},Rvc);_.uc=function Svc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};kW(1323,742,yOc,iyc);_.Td=function jyc(){XJb(this,NOb());XJb(this,OOb());XJb(this,POb());QJb(this,zUc,new qOb((JOb(),yOb),zlb(0)));QJb(this,AUc,new qOb(yOb,zlb(0)));QJb(this,CUc,new pOb(BOb));QJb(this,BUc,new pOb(BOb));QJb(this,GUc,new qOb(uOb,new H5b(15658734)));QJb(this,HUc,new qOb(uOb,new H5b(1118481)));QJb(this,FUc,new qOb(uOb,new H5b(328965)));QJb(this,MUc,new qOb(vOb,new Tkb(1)));QJb(this,IUc,new qOb(vOb,new Tkb(0.15)));QJb(this,JUc,new qOb(vOb,new Tkb(0.75)));QJb(this,DUc,new pOb(BOb));QJb(this,KUc,new qOb(vOb,new Tkb(1)));QJb(this,EUc,new pOb(BOb));QJb(this,LUc,new qOb(HOb,new C9b(0,0,1,1)));QJb(this,'uWrapRGB',new qOb(FOb,new c9b(0.75,0.375,0.1875)))};_.Ud=function kyc(a){var b,c;c=new fsb(Tv(gU,eNc,1,[NUc,OUc,PUc]));b=new fsb(Tv(gU,eNc,1,[QUc,RUc,SUc]));ZJb(this,fKb(a,Tv(jU,eNc,173,[c,b])))};_.Vd=function lyc(a){var b,c;c=new fsb(Tv(gU,eNc,1,[TUc]));b=new fsb(Tv(gU,eNc,1,[UUc]));$Jb(this,fKb(a,Tv(jU,eNc,173,[c,b])))};var myc;kW(1324,1,{},ryc);_.Wd=function syc(){return Ayc(),pyc};_.Xd=function tyc(){return Byc(),qyc};var pyc,qyc;kW(1325,1,{},vyc);_.uc=function wyc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};kW(1326,1,{},yyc);_.uc=function zyc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var jO=Hkb(PTc,'MaterialsBumpmapSkin$DemoScene',1138),iO=Hkb(PTc,'MaterialsBumpmapSkin$DemoScene$1',1139),FQ=Hkb(ITc,'BeckmannShader',1274),EQ=Hkb(ITc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1275),CQ=Hkb(ITc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1276),DQ=Hkb(ITc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1277),eR=Hkb(ITc,'SkinSimpleShader',1323),dR=Hkb(ITc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1324),bR=Hkb(ITc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1325),cR=Hkb(ITc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1326);$Oc(Pj)(18);