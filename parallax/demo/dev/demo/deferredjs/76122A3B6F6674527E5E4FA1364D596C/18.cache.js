function Vtc(){}
function Ztc(){}
function auc(){}
function qyc(){}
function uyc(){}
function xyc(){}
function pkc(a){this.b=a}
function Rtc(){Rtc=YMc;Qtc=new Vtc}
function cuc(){cuc=YMc;Ttc=new Ztc}
function duc(){duc=YMc;Utc=new auc}
function myc(){myc=YMc;lyc=new qyc}
function zyc(){zyc=YMc;oyc=new uyc}
function Ayc(){Ayc=YMc;pyc=new xyc}
function hyc(){ZIb.call(this,(myc(),lyc))}
function Otc(){ZIb.call(this,(Rtc(),Qtc))}
function lkc(){V9b.call(this);this.e=0;this.f=0}
function kkc(a,b){var c,d,e,f,g,i;d=new mOb(qUc);d.n=4;z5b(d.C,0.998,0.998);z5b(d.B,0.001,0.001);gOb(d,(dGb(),cGb));hOb(d,cGb);WNb(d,(YCb(),WCb));e=new mOb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');z5b(e.C,0.998,0.998);z5b(e.B,0.001,0.001);gOb(e,cGb);hOb(e,cGb);WNb(e,WCb);c=new mOb('./static/models/obj/leeperrysmith/Map-COL.jpg');z5b(c.C,0.998,0.998);z5b(c.B,0.001,0.001);gOb(c,cGb);hOb(c,cGb);WNb(c,WCb);g=new hyc;i=g.j;lNb(Xu(i.b[sUc],225),(ljb(),ljb(),kjb));lNb(Xu(i.b[tUc],225),kjb);lNb(Xu(i.b[uUc],225),a.c.f);lNb(Xu(i.b[vUc],225),c);lNb(Xu(i.b[wUc],225),d);lNb(Xu(i.b[xUc],225),e);t3b(Xu(Xu(i.b[yUc],225).e,292),10526880);t3b(Xu(Xu(i.b[zUc],225).e,292),10526880);t3b(Xu(Xu(i.b[AUc],225).e,292),10526880);lNb(Xu(i.b[BUc],225),new kkb(0.145));lNb(Xu(i.b[CUc],225),new kkb(0.75));lNb(Xu(i.b[DUc],225),new kkb(16));_6b(Xu(Xu(i.b[EUc],225).e,300),0.001,0.001,0.998,0.998);f=new I2b(g);f.d=true;a.d=new P7b(b,f);B5b(a.d.ab,-50);k6b(a.d.fb,100);OPb(a.d,true);a.d.V=true;JPb(a.I,a.d)}
var sUc='enableBump',uUc='tBeckmann',BUc='uRoughness',CUc='uSpecularBrightness';JU(1118,1,IOc);_.Db=function ikc(){v9b(this.c,new lkc(this.b))};JU(1119,973,{322:1},lkc);_.ob=function mkc(){var a,b,c,d,e,f,g;this.b=new JQb(27,aHb(this.H.n),1,10000);n6b(this.b.ab,1200);JPb(this.I,new iYb(5592405));d=new cZb(16777215,1.5,1000);l6b(d.ab,0,0,600);JPb(this.I,d);f=new kZb(1);l6b(f.ab,0.05,0.05,1);JPb(this.I,f);f.ab.sf(700);f.T=true;f.u=true;f.J=2048;f.H=2048;f.B=200;f.A=1500;f.e=40;f.v=-0.005;f.F=0.15;a=new LYb(16777215,0.85);l6b(a.ab,1,-0.5,1);s3b(a.M,0.6,1,0.85);JPb(this.I,a);a.ab.sf(500);a.T=true;a.J=2048;a.H=2048;a.B=200;a.A=1500;a.f=-500;a.g=500;a.i=500;a.e=-500;a.v=-0.005;a.F=0.15;b=new LYb(16777215,0.85);l6b(b.ab,1,-0.5,-1);JPb(this.I,b);new oJc(new Otc);c=new oJc(new bKc);c.b=true;g=new JOb(512,512);_Nb(g,(NEb(),HEb));ZNb(g,(CEb(),AEb));WNb(g,(YCb(),WCb));g.g=false;this.c=new eJc(this.H.n,g);new Kzc(rUc,new pkc(this));yHb(this.H.n,new w3b(5001561),1);e=new rGb(this.H.n,this.I);e.i=false;uHb(this.H.n,false);this.H.n.bb=true;this.H.n.cb=true};_.pb=function nkc(a){var b,c;b=this.e*0.001;c=this.f*0.001;if(this.d){C3b(this.d.db,0.05*(b-this.d.db.e));B3b(this.d.db,0.05*(c-this.d.db.d))}VGb(this.H.n,true);mHb(this.H.n,this.I,this.b,null,false)};_.e=0;_.f=0;JU(1120,1,{},pkc);_.Ff=function qkc(a,b){kkc(this.b,Xu(b,241))};JU(1248,731,vOc,Otc);_.Rd=function Ptc(){};var Qtc;JU(1249,1,{},Vtc);_.Ud=function Wtc(){return cuc(),Ttc};_.Vd=function Xtc(){return duc(),Utc};var Ttc,Utc;JU(1250,1,{},Ztc);_.tc=function $tc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};JU(1251,1,{},auc);_.tc=function buc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};JU(1345,731,vOc,hyc);_.Rd=function iyc(){UIb(this,KNb());UIb(this,LNb());UIb(this,MNb());NIb(this,sUc,new nNb((GNb(),vNb),Skb(0)));NIb(this,tUc,new nNb(vNb,Skb(0)));NIb(this,vUc,new mNb(yNb));NIb(this,uUc,new mNb(yNb));NIb(this,zUc,new nNb(rNb,new w3b(15658734)));NIb(this,AUc,new nNb(rNb,new w3b(1118481)));NIb(this,yUc,new nNb(rNb,new w3b(328965)));NIb(this,FUc,new nNb(sNb,new kkb(1)));NIb(this,BUc,new nNb(sNb,new kkb(0.15)));NIb(this,CUc,new nNb(sNb,new kkb(0.75)));NIb(this,wUc,new mNb(yNb));NIb(this,DUc,new nNb(sNb,new kkb(1)));NIb(this,xUc,new mNb(yNb));NIb(this,EUc,new nNb(ENb,new d7b(0,0,1,1)));NIb(this,'uWrapRGB',new nNb(CNb,new r6b(0.75,0.375,0.1875)))};_.Sd=function jyc(a){var b,c;c=new wrb(Nu(GS,cNc,1,[GUc,HUc,IUc]));b=new wrb(Nu(GS,cNc,1,[JUc,KUc,LUc]));WIb(this,cJb(a,Nu(JS,cNc,173,[c,b])))};_.Td=function kyc(a){var b,c;c=new wrb(Nu(GS,cNc,1,[MUc]));b=new wrb(Nu(GS,cNc,1,[NUc]));XIb(this,cJb(a,Nu(JS,cNc,173,[c,b])))};var lyc;JU(1346,1,{},qyc);_.Ud=function ryc(){return zyc(),oyc};_.Vd=function syc(){return Ayc(),pyc};var oyc,pyc;JU(1347,1,{},uyc);_.tc=function vyc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};JU(1348,1,{},xyc);_.tc=function yyc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var QM=$jb(ITc,'MaterialsBumpmapSkin$DemoScene',1119),PM=$jb(ITc,'MaterialsBumpmapSkin$DemoScene$1',1120),dP=$jb(BTc,'BeckmannShader',1248),cP=$jb(BTc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1249),aP=$jb(BTc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1250),bP=$jb(BTc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1251),EP=$jb(BTc,'SkinSimpleShader',1345),DP=$jb(BTc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1346),BP=$jb(BTc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1347),CP=$jb(BTc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1348);WOc(Ii)(18);