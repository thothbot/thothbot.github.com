function Dpc(){}
function Hpc(){}
function Kpc(){}
function Ssc(){}
function Wsc(){}
function Zsc(){}
function Mhc(a){this.b=a}
function Mpc(){Mpc=dFc;Bpc=new Hpc}
function zpc(){zpc=dFc;ypc=new Dpc}
function Npc(){Npc=dFc;Cpc=new Kpc}
function Osc(){Osc=dFc;Nsc=new Ssc}
function _sc(){_sc=dFc;Qsc=new Wsc}
function atc(){atc=dFc;Rsc=new Zsc}
function Jsc(){_Gb.call(this,(Osc(),Nsc))}
function wpc(){_Gb.call(this,(zpc(),ypc))}
function Ihc(){t7b.call(this);this.e=0;this.f=0}
function Hhc(a,b){var c,d,e,f,g,i;d=new VLb(pMc);d.n=4;_2b(d.C,0.998,0.998);_2b(d.B,0.001,0.001);PLb(d,(gEb(),fEb));QLb(d,fEb);DLb(d,(_Ab(),ZAb));e=new VLb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');_2b(e.C,0.998,0.998);_2b(e.B,0.001,0.001);PLb(e,fEb);QLb(e,fEb);DLb(e,ZAb);c=new VLb('./static/models/obj/leeperrysmith/Map-COL.jpg');_2b(c.C,0.998,0.998);_2b(c.B,0.001,0.001);PLb(c,fEb);QLb(c,fEb);DLb(c,ZAb);g=new Jsc;i=g.j;UKb(Fu(i.b[sMc],225),(uhb(),uhb(),thb));UKb(Fu(i.b[tMc],225),thb);UKb(Fu(i.b[uMc],225),a.c.f);UKb(Fu(i.b[vMc],225),c);UKb(Fu(i.b[wMc],225),d);UKb(Fu(i.b[xMc],225),e);T0b(Fu(Fu(i.b[yMc],225).e,292),10526880);T0b(Fu(Fu(i.b[zMc],225).e,292),10526880);T0b(Fu(Fu(i.b[AMc],225).e,292),10526880);UKb(Fu(i.b[BMc],225),new tib(0.145));UKb(Fu(i.b[CMc],225),new tib(0.75));UKb(Fu(i.b[DMc],225),new tib(16));A4b(Fu(Fu(i.b[EMc],225).e,300),0.001,0.001,0.998,0.998);f=new f0b(g);f.d=true;a.d=new o5b(b,f);b3b(a.d.ab,-50);L3b(a.d.fb,100);vNb(a.d,true);a.d.V=true;qNb(a.G,a.d)}
var sMc='enableBump',uMc='tBeckmann',BMc='uRoughness',CMc='uSpecularBrightness';bT(1098,1,OGc);_.Db=function Fhc(){V6b(this.c,new Ihc(this.b))};bT(1099,954,{320:1},Ihc);_.ob=function Jhc(){var b,c,d,e,f,g,i,j;this.b=new rOb(27,cFb(this.F.n),1,10000);O3b(this.b.ab,1200);qNb(this.G,new SVb(5592405));f=new LWb(16777215,1.5,1000);M3b(f.ab,0,0,600);qNb(this.G,f);i=new TWb(1);M3b(i.ab,0.05,0.05,1);qNb(this.G,i);i.ab.of(700);i.T=true;i.u=true;i.J=2048;i.H=2048;i.B=200;i.A=1500;i.e=40;i.v=-0.005;i.F=0.15;b=new tWb(16777215,0.85);M3b(b.ab,1,-0.5,1);S0b(b.M,0.6,1,0.85);qNb(this.G,b);b.ab.of(500);b.T=true;b.J=2048;b.H=2048;b.B=200;b.A=1500;b.f=-500;b.g=500;b.i=500;b.e=-500;b.v=-0.005;b.F=0.15;c=new tWb(16777215,0.85);M3b(c.ab,1,-0.5,-1);qNb(this.G,c);new cDc(new wpc);d=new cDc(new yDc);d.b=true;j=new qMb(512,512);ILb(j,(QCb(),KCb));GLb(j,(FCb(),DCb));DLb(j,(_Ab(),ZAb));j.g=false;this.c=new UCc(this.F.n,j);e=new Rtc;try{Dtc(e,qMc,new Mhc(this))}catch(a){a=gS(a);if(Iu(a,81)){eNb();eV(dNb,(Osb(),Msb),rMc)}else throw fS(a)}AFb(this.F.n,new W0b(5001561),1);g=new uEb(this.F.n,this.G);g.i=false;wFb(this.F.n,false);this.F.n.bb=true;this.F.n.cb=true};_.pb=function Khc(a){var b,c;b=this.e*0.001;c=this.f*0.001;if(this.d){a1b(this.d.db,0.05*(b-this.d.db.e));_0b(this.d.db,0.05*(c-this.d.db.d))}YEb(this.F.n);oFb(this.F.n,this.G,this.b,null,false)};_.e=0;_.f=0;bT(1100,1,{},Mhc);_.Bf=function Nhc(a){Hhc(this.b,Fu(a,241))};bT(1205,719,BGc,wpc);_.Md=function xpc(){};var ypc;bT(1206,1,{},Dpc);_.Pd=function Epc(){return Mpc(),Bpc};_.Qd=function Fpc(){return Npc(),Cpc};var Bpc,Cpc;bT(1207,1,{},Hpc);_.dc=function Ipc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};bT(1208,1,{},Kpc);_.dc=function Lpc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};bT(1281,719,BGc,Jsc);_.Md=function Ksc(){WGb(this,rLb());WGb(this,sLb());WGb(this,tLb());PGb(this,sMc,new WKb((nLb(),cLb),_ib(0)));PGb(this,tMc,new WKb(cLb,_ib(0)));PGb(this,vMc,new VKb(fLb));PGb(this,uMc,new VKb(fLb));PGb(this,zMc,new WKb($Kb,new W0b(15658734)));PGb(this,AMc,new WKb($Kb,new W0b(1118481)));PGb(this,yMc,new WKb($Kb,new W0b(328965)));PGb(this,FMc,new WKb(_Kb,new tib(1)));PGb(this,BMc,new WKb(_Kb,new tib(0.15)));PGb(this,CMc,new WKb(_Kb,new tib(0.75)));PGb(this,wMc,new VKb(fLb));PGb(this,DMc,new WKb(_Kb,new tib(1)));PGb(this,xMc,new VKb(fLb));PGb(this,EMc,new WKb(lLb,new E4b(0,0,1,1)));PGb(this,'uWrapRGB',new WKb(jLb,new S3b(0.75,0.375,0.1875)))};_.Nd=function Lsc(a){var b,c;c=new Epb(vu(YQ,jFc,1,[GMc,HMc,IMc]));b=new Epb(vu(YQ,jFc,1,[JMc,KMc,LMc]));YGb(this,eHb(a,vu(_Q,jFc,173,[c,b])))};_.Od=function Msc(a){var b,c;c=new Epb(vu(YQ,jFc,1,[MMc]));b=new Epb(vu(YQ,jFc,1,[NMc]));ZGb(this,eHb(a,vu(_Q,jFc,173,[c,b])))};var Nsc;bT(1282,1,{},Ssc);_.Pd=function Tsc(){return _sc(),Qsc};_.Qd=function Usc(){return atc(),Rsc};var Qsc,Rsc;bT(1283,1,{},Wsc);_.dc=function Xsc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};bT(1284,1,{},Zsc);_.dc=function $sc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var hM=hib(HLc,'MaterialsBumpmapSkin$DemoScene',1099),gM=hib(HLc,'MaterialsBumpmapSkin$DemoScene$1',1100),cO=hib(ALc,'BeckmannShader',1205),bO=hib(ALc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1206),_N=hib(ALc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1207),aO=hib(ALc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1208),rO=hib(ALc,'SkinSimpleShader',1281),qO=hib(ALc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1282),oO=hib(ALc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1283),pO=hib(ALc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1284);_Gc(Hi)(18);