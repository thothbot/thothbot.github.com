function ttc(){}
function xtc(){}
function Atc(){}
function Qxc(){}
function Uxc(){}
function Xxc(){}
function Pjc(a){this.a=a}
function Dtc(){Dtc=wMc;stc=new Atc}
function ptc(){ptc=wMc;otc=new ttc}
function Ctc(){Ctc=wMc;rtc=new xtc}
function Mxc(){Mxc=wMc;Lxc=new Qxc}
function Zxc(){Zxc=wMc;Oxc=new Uxc}
function $xc(){$xc=wMc;Pxc=new Xxc}
function Hxc(){xIb.call(this,(Mxc(),Lxc))}
function mtc(){xIb.call(this,(ptc(),otc))}
function Ljc(){t9b.call(this);this.d=0;this.e=0}
function Kjc(a,b){var c,d,e,f,g,i;d=new MNb(GTc);d.k=4;Z4b(d.B,0.998,0.998);Z4b(d.A,0.001,0.001);GNb(d,(DFb(),CFb));HNb(d,CFb);uNb(d,(wCb(),uCb));e=new MNb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');Z4b(e.B,0.998,0.998);Z4b(e.A,0.001,0.001);GNb(e,CFb);HNb(e,CFb);uNb(e,uCb);c=new MNb('./static/models/obj/leeperrysmith/Map-COL.jpg');Z4b(c.B,0.998,0.998);Z4b(c.A,0.001,0.001);GNb(c,CFb);HNb(c,CFb);uNb(c,uCb);g=new Hxc;i=g.i;LMb(su(i.a[ITc],225),(Mib(),Mib(),Lib));LMb(su(i.a[JTc],225),Lib);LMb(su(i.a[KTc],225),a.b.e);LMb(su(i.a[LTc],225),c);LMb(su(i.a[MTc],225),d);LMb(su(i.a[NTc],225),e);T2b(su(su(i.a[OTc],225).d,292),10526880);T2b(su(su(i.a[PTc],225).d,292),10526880);T2b(su(su(i.a[QTc],225).d,292),10526880);LMb(su(i.a[RTc],225),new Ljb(0.145));LMb(su(i.a[STc],225),new Ljb(0.75));LMb(su(i.a[TTc],225),new Ljb(16));z6b(su(su(i.a[UTc],225).d,300),0.001,0.001,0.998,0.998);f=new g2b(g);f.c=true;a.c=new n7b(b,f);_4b(a.c._,-50);K5b(a.c.eb,100);mPb(a.c,true);a.c.U=true;hPb(a.H,a.c)}
var ITc='enableBump',KTc='tBeckmann',RTc='uRoughness',STc='uSpecularBrightness';aU(1118,1,eOc);_.zb=function Ijc(){V8b(this.b,new Ljc(this.a))};aU(1119,973,{322:1},Ljc);_.nb=function Mjc(){var a,b,c,d,e,f,g;this.a=new hQb(27,AGb(this.G.k),1,10000);N5b(this.a._,1200);hPb(this.H,new IXb(5592405));d=new CYb(16777215,1.5,1000);L5b(d._,0,0,600);hPb(this.H,d);f=new KYb(1);L5b(f._,0.05,0.05,1);hPb(this.H,f);f._.lf(700);f.S=true;f.t=true;f.I=2048;f.G=2048;f.A=200;f.w=1500;f.d=40;f.u=-0.005;f.D=0.15;a=new jYb(16777215,0.85);L5b(a._,1,-0.5,1);S2b(a.L,0.6,1,0.85);hPb(this.H,a);a._.lf(500);a.S=true;a.I=2048;a.G=2048;a.A=200;a.w=1500;a.e=-500;a.f=500;a.g=500;a.d=-500;a.u=-0.005;a.D=0.15;b=new jYb(16777215,0.85);L5b(b._,1,-0.5,-1);hPb(this.H,b);new OIc(new mtc);c=new OIc(new BJc);c.a=true;g=new hOb(512,512);zNb(g,(lEb(),fEb));xNb(g,(aEb(),$Db));uNb(g,(wCb(),uCb));g.f=false;this.b=new EIc(this.G.k,g);new izc(HTc,new Pjc(this));YGb(this.G.k,new W2b(5001561),1);e=new RFb(this.G.k,this.H);e.g=false;UGb(this.G.k,false);this.G.k.ab=true;this.G.k.bb=true};_.ob=function Njc(a){var b,c;b=this.d*0.001;c=this.e*0.001;if(this.c){a3b(this.c.cb,0.05*(b-this.c.cb.d));_2b(this.c.cb,0.05*(c-this.c.cb.c))}tGb(this.G.k,true);MGb(this.G.k,this.H,this.a,null,false)};_.d=0;_.e=0;aU(1120,1,{},Pjc);_.yf=function Qjc(a,b){Kjc(this.a,su(b,241))};aU(1248,731,TNc,mtc);_.Kd=function ntc(){};var otc;aU(1249,1,{},ttc);_.Nd=function utc(){return Ctc(),rtc};_.Od=function vtc(){return Dtc(),stc};var rtc,stc;aU(1250,1,{},xtc);_.mc=function ytc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};aU(1251,1,{},Atc);_.mc=function Btc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};aU(1345,731,TNc,Hxc);_.Kd=function Ixc(){sIb(this,iNb());sIb(this,jNb());sIb(this,kNb());lIb(this,ITc,new NMb((eNb(),VMb),rkb(0)));lIb(this,JTc,new NMb(VMb,rkb(0)));lIb(this,LTc,new MMb(YMb));lIb(this,KTc,new MMb(YMb));lIb(this,PTc,new NMb(RMb,new W2b(15658734)));lIb(this,QTc,new NMb(RMb,new W2b(1118481)));lIb(this,OTc,new NMb(RMb,new W2b(328965)));lIb(this,VTc,new NMb(SMb,new Ljb(1)));lIb(this,RTc,new NMb(SMb,new Ljb(0.15)));lIb(this,STc,new NMb(SMb,new Ljb(0.75)));lIb(this,MTc,new MMb(YMb));lIb(this,TTc,new NMb(SMb,new Ljb(1)));lIb(this,NTc,new MMb(YMb));lIb(this,UTc,new NMb(cNb,new D6b(0,0,1,1)));lIb(this,'uWrapRGB',new NMb(aNb,new R5b(0.75,0.375,0.1875)))};_.Ld=function Jxc(a){var b,c;c=new Wqb(iu(ZR,BMc,1,[WTc,XTc,YTc]));b=new Wqb(iu(ZR,BMc,1,[ZTc,$Tc,_Tc]));uIb(this,CIb(a,iu(aS,BMc,173,[c,b])))};_.Md=function Kxc(a){var b,c;c=new Wqb(iu(ZR,BMc,1,[aUc]));b=new Wqb(iu(ZR,BMc,1,[bUc]));vIb(this,CIb(a,iu(aS,BMc,173,[c,b])))};var Lxc;aU(1346,1,{},Qxc);_.Nd=function Rxc(){return Zxc(),Oxc};_.Od=function Sxc(){return $xc(),Pxc};var Oxc,Pxc;aU(1347,1,{},Uxc);_.mc=function Vxc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};aU(1348,1,{},Xxc);_.mc=function Yxc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var gM=zjb(YSc,'MaterialsBumpmapSkin$DemoScene',1119),fM=zjb(YSc,'MaterialsBumpmapSkin$DemoScene$1',1120),wO=zjb(RSc,'BeckmannShader',1248),vO=zjb(RSc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1249),tO=zjb(RSc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1250),uO=zjb(RSc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1251),XO=zjb(RSc,'SkinSimpleShader',1345),WO=zjb(RSc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1346),UO=zjb(RSc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1347),VO=zjb(RSc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1348);sOc(xi)(18);