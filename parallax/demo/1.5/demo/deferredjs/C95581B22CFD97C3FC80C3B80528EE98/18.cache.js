function Psc(){}
function Tsc(){}
function Wsc(){}
function wvc(){}
function Avc(){}
function Dvc(){}
function Ijc(a){this.a=a}
function Lsc(){Lsc=cKc;Ksc=new Psc}
function Ysc(){Ysc=cKc;Nsc=new Tsc}
function Zsc(){Zsc=cKc;Osc=new Wsc}
function svc(){svc=cKc;rvc=new wvc}
function Fvc(){Fvc=cKc;uvc=new Avc}
function Gvc(){Gvc=cKc;vvc=new Dvc}
function nvc(){zIb.call(this,(svc(),rvc))}
function Isc(){zIb.call(this,(Lsc(),Ksc))}
function Ejc(){G9b.call(this);this.d=0;this.e=0}
function Djc(a,b){var c,d,e,f,g,i;d=new ONb(nRc);d.k=4;i5b(d.B,0.998,0.998);i5b(d.A,0.001,0.001);INb(d,(FFb(),EFb));JNb(d,EFb);wNb(d,(yCb(),wCb));e=new ONb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');i5b(e.B,0.998,0.998);i5b(e.A,0.001,0.001);INb(e,EFb);JNb(e,EFb);wNb(e,wCb);c=new ONb('./static/models/obj/leeperrysmith/Map-COL.jpg');i5b(c.B,0.998,0.998);i5b(c.A,0.001,0.001);INb(c,EFb);JNb(c,EFb);wNb(c,wCb);g=new nvc;i=g.i;NMb(ru(i.a[pRc],225),(Nib(),Nib(),Mib));NMb(ru(i.a[qRc],225),Mib);NMb(ru(i.a[rRc],225),a.b.e);NMb(ru(i.a[sRc],225),c);NMb(ru(i.a[tRc],225),d);NMb(ru(i.a[uRc],225),e);c3b(ru(ru(i.a[vRc],225).d,293),10526880);c3b(ru(ru(i.a[wRc],225).d,293),10526880);c3b(ru(ru(i.a[xRc],225).d,293),10526880);NMb(ru(i.a[yRc],225),new Mjb(0.145));NMb(ru(i.a[zRc],225),new Mjb(0.75));NMb(ru(i.a[ARc],225),new Mjb(16));K6b(ru(ru(i.a[BRc],225).d,301),0.001,0.001,0.998,0.998);f=new r2b(g);f.c=true;a.c=new y7b(b,f);k5b(a.c._,-50);V5b(a.c.eb,100);oPb(a.c,true);a.c.U=true;jPb(a.H,a.c)}
var pRc='enableBump',rRc='tBeckmann',yRc='uRoughness',zRc='uSpecularBrightness';aU(1119,1,NLc);_.zb=function Bjc(){g9b(this.b,new Ejc(this.a))};aU(1120,973,{323:1},Ejc);_.nb=function Fjc(){var a,b,c,d,e,f,g;this.a=new mQb(27,CGb(this.G.k),1,10000);Y5b(this.a._,1200);jPb(this.H,new TXb(5592405));d=new NYb(16777215,1.5,1000);W5b(d._,0,0,600);jPb(this.H,d);f=new VYb(1);W5b(f._,0.05,0.05,1);jPb(this.H,f);f._.of(700);f.S=true;f.t=true;f.I=2048;f.G=2048;f.A=200;f.w=1500;f.d=40;f.u=-0.005;f.D=0.15;a=new uYb(16777215,0.85);W5b(a._,1,-0.5,1);b3b(a.L,0.6,1,0.85);jPb(this.H,a);a._.of(500);a.S=true;a.I=2048;a.G=2048;a.A=200;a.w=1500;a.e=-500;a.f=500;a.g=500;a.d=-500;a.u=-0.005;a.D=0.15;b=new uYb(16777215,0.85);W5b(b._,1,-0.5,-1);jPb(this.H,b);new uGc(new Isc);c=new uGc(new hHc);c.a=true;g=new jOb(512,512);BNb(g,(nEb(),hEb));zNb(g,(cEb(),aEb));wNb(g,(yCb(),wCb));g.f=false;this.b=new kGc(this.G.k,g);new Qwc(oRc,new Ijc(this));$Gb(this.G.k,new f3b(5001561),1);e=new TFb(this.G.k,this.H);e.g=false;WGb(this.G.k,false);this.G.k.ab=true;this.G.k.bb=true};_.ob=function Gjc(a){var b,c;b=this.d*0.001;c=this.e*0.001;if(this.c){l3b(this.c.cb,0.05*(b-this.c.cb.d));k3b(this.c.cb,0.05*(c-this.c.cb.c))}vGb(this.G.k,true);OGb(this.G.k,this.H,this.a,null,false)};_.d=0;_.e=0;aU(1121,1,{},Ijc);_.Af=function Jjc(a,b){Djc(this.a,ru(b,242))};aU(1249,731,ALc,Isc);_.Ld=function Jsc(){};var Ksc;aU(1250,1,{},Psc);_.Od=function Qsc(){return Ysc(),Nsc};_.Pd=function Rsc(){return Zsc(),Osc};var Nsc,Osc;aU(1251,1,{},Tsc);_.nc=function Usc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};aU(1252,1,{},Wsc);_.nc=function Xsc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};aU(1298,731,ALc,nvc);_.Ld=function ovc(){uIb(this,kNb());uIb(this,lNb());uIb(this,mNb());nIb(this,pRc,new PMb((gNb(),XMb),skb(0)));nIb(this,qRc,new PMb(XMb,skb(0)));nIb(this,sRc,new OMb($Mb));nIb(this,rRc,new OMb($Mb));nIb(this,wRc,new PMb(TMb,new f3b(15658734)));nIb(this,xRc,new PMb(TMb,new f3b(1118481)));nIb(this,vRc,new PMb(TMb,new f3b(328965)));nIb(this,CRc,new PMb(UMb,new Mjb(1)));nIb(this,yRc,new PMb(UMb,new Mjb(0.15)));nIb(this,zRc,new PMb(UMb,new Mjb(0.75)));nIb(this,tRc,new OMb($Mb));nIb(this,ARc,new PMb(UMb,new Mjb(1)));nIb(this,uRc,new OMb($Mb));nIb(this,BRc,new PMb(eNb,new O6b(0,0,1,1)));nIb(this,'uWrapRGB',new PMb(cNb,new a6b(0.75,0.375,0.1875)))};_.Md=function pvc(a){var b,c;c=new Yqb(hu(ZR,hKc,1,[DRc,ERc,FRc]));b=new Yqb(hu(ZR,hKc,1,[GRc,HRc,IRc]));wIb(this,EIb(a,hu(aS,hKc,173,[c,b])))};_.Nd=function qvc(a){var b,c;c=new Yqb(hu(ZR,hKc,1,[JRc]));b=new Yqb(hu(ZR,hKc,1,[KRc]));xIb(this,EIb(a,hu(aS,hKc,173,[c,b])))};var rvc;aU(1299,1,{},wvc);_.Od=function xvc(){return Fvc(),uvc};_.Pd=function yvc(){return Gvc(),vvc};var uvc,vvc;aU(1300,1,{},Avc);_.nc=function Bvc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};aU(1301,1,{},Dvc);_.nc=function Evc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var gM=Ajb(GQc,'MaterialsBumpmapSkin$DemoScene',1120),fM=Ajb(GQc,'MaterialsBumpmapSkin$DemoScene$1',1121),wO=Ajb(zQc,'BeckmannShader',1249),vO=Ajb(zQc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1250),tO=Ajb(zQc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1251),uO=Ajb(zQc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1252),XO=Ajb(zQc,'SkinSimpleShader',1298),WO=Ajb(zQc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1299),UO=Ajb(zQc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1300),VO=Ajb(zQc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1301);_Lc(xi)(18);