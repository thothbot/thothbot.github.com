function mtb(){}
function xtb(){}
function utb(){}
function Ctb(){}
function Btb(){}
function Gtb(){}
function Ftb(){}
function z7b(){}
function A7b(){MSb.call(this)}
function ntb(){xqb.call(this,(ttb(),stb))}
function ttb(){ttb=rhc;stb=new xtb}
function Jtb(){Jtb=rhc;vtb=new Ctb}
function Ktb(){Ktb=rhc;wtb=new Gtb}
function Oyb(a){Vyb(a,a.e*a.e);Syb(a,a.c*a.c);Ryb(a,a.b*a.b);return a}
var Xlc='enableAO',Ylc='enableDiffuse',Zlc='tNormal',$lc='tSpecular',_lc='uNormalScale',amc='uShininess';_=ntb.prototype=mtb.prototype=new jqb;_.gC=function otb(){return tA};_.qd=function ptb(){tqb(this,Uvb());tqb(this,Vvb());tqb(this,Wvb());mqb(this,Xlc,new vvb((Pvb(),Evb),(e3(),e3(),c3)));mqb(this,Ylc,new vvb(Evb,c3));mqb(this,qlc,new vvb(Evb,c3));mqb(this,'enableReflection',new vvb(Evb,c3));mqb(this,'enableDisplacement',new vvb(Evb,c3));mqb(this,'tDisplacement',new uvb(Hvb));mqb(this,slc,new uvb(Hvb));mqb(this,Ulc,new uvb(Hvb));mqb(this,Zlc,new uvb(Hvb));mqb(this,$lc,new uvb(Hvb));mqb(this,'tAO',new uvb(Hvb));mqb(this,_lc,new vvb(Jvb,new JDb(1,1)));mqb(this,'uDisplacementBias',new vvb(Bvb,new C3(0)));mqb(this,'uDisplacementScale',new vvb(Bvb,new C3(1)));mqb(this,wlc,new vvb(Avb,new Zyb(16777215)));mqb(this,xlc,new vvb(Avb,new Zyb(1118481)));mqb(this,vlc,new vvb(Avb,new Zyb(16777215)));mqb(this,amc,new vvb(Bvb,new C3(30)));mqb(this,Dlc,new vvb(Bvb,new C3(1)));mqb(this,bmc,new vvb(Evb,c3));mqb(this,'uRefractionRatio',new vvb(Bvb,new C3(0.98)));mqb(this,'uReflectivity',new vvb(Bvb,new C3(0.5)));mqb(this,'uOffset',new vvb(Jvb,new JDb(0,0)));mqb(this,'uRepeat',new vvb(Jvb,new JDb(1,1)));mqb(this,cmc,new vvb(Lvb,new nEb(1,1,1)))};_.rd=function qtb(a){var b,c;c=new F9(_r(iI,{87:1,99:1},1,[Elc,Flc]));b=new F9(_r(iI,{87:1,99:1},1,[Hlc,Ilc,Jlc]));sqb(this,Dqb(a,_r(kI,{87:1,99:1},106,[c,b])))};_.sd=function rtb(a){var b,c;c=new F9(_r(iI,{87:1,99:1},1,[dmc,Klc]));b=new F9(_r(iI,{87:1,99:1},1,[emc,fmc]));uqb(this,Dqb(a,_r(kI,{87:1,99:1},106,[c,b])))};_.cM={131:1};var stb;_=xtb.prototype=utb.prototype=new Kb;_.gC=function ytb(){return sA};_.td=function ztb(){return Jtb(),vtb};_.ud=function Atb(){return Ktb(),wtb};var vtb=null,wtb=null;_=Ctb.prototype=Btb.prototype=new Kb;_.gC=function Dtb(){return qA};_.Vb=function Etb(){return 'uniform vec3 uAmbientColor;\r\nuniform vec3 uDiffuseColor;\r\nuniform vec3 uSpecularColor;\r\nuniform float uShininess;\r\nuniform float uOpacity;\r\n\r\nuniform bool enableDiffuse;\r\nuniform bool enableSpecular;\r\nuniform bool enableAO;\r\nuniform bool enableReflection;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tNormal;\r\nuniform sampler2D tSpecular;\r\nuniform sampler2D tAO;\r\n\r\nuniform samplerCube tCube;\r\n\r\nuniform vec2 uNormalScale;\r\n\r\nuniform bool useRefract;\r\nuniform float uRefractionRatio;\r\nuniform float uReflectivity;\r\n\r\nvarying vec3 vTangent;\r\nvarying vec3 vBinormal;\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightPosition[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\r\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\r\n#endif\r\n\r\n#ifdef WRAP_AROUND\r\n\r\n\tuniform vec3 wrapRGB;\r\n\r\n#endif\r\n\r\nvarying vec3 vWorldPosition;\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), uOpacity );\r\n\r\n\tvec3 specularTex = vec3( 1.0 );\r\n\r\n\tvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\r\n\tnormalTex.xy *= uNormalScale;\r\n\tnormalTex = normalize( normalTex );\r\n\r\n\tif( enableDiffuse ) {\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tvec4 texelColor = texture2D( tDiffuse, vUv );\r\n\t\t\ttexelColor.xyz *= texelColor.xyz;\r\n\r\n\t\t\tgl_FragColor = gl_FragColor * texelColor;\r\n\r\n\t\t#else\r\n\r\n\t\t\tgl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n\tif( enableAO ) {\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tvec4 aoColor = texture2D( tAO, vUv );\r\n\t\t\taoColor.xyz *= aoColor.xyz;\r\n\r\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\r\n\r\n\t\t#else\r\n\r\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n\tif( enableSpecular )\r\n\t\tspecularTex = texture2D( tSpecular, vUv ).xyz;\r\n\r\n\tmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\r\n\tvec3 finalNormal = tsb * normalTex;\r\n\r\n\t#ifdef FLIP_SIDED\r\n\r\n\t\tfinalNormal = -finalNormal;\r\n\r\n\t#endif\r\n\r\n\tvec3 normal = normalize( finalNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\t// point lights\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointDiffuse = vec3( 0.0 );\r\n\t\tvec3 pointSpecular = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat pointDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tpointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tpointVector = normalize( pointVector );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\r\n\t\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\r\n\t\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\r\n\r\n\t\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tpointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 pointHalfVector = normalize( pointVector + viewPosition );\r\n\t\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\r\n\t\t\tfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\tvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\r\n\t\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tpointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// spot lights\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\r\n\t\tvec3 spotDiffuse = vec3( 0.0 );\r\n\t\tvec3 spotSpecular = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat spotDistance = 1.0;\r\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\r\n\t\t\t\tspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tspotVector = normalize( spotVector );\r\n\r\n\t\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\r\n\r\n\t\t\tif ( spotEffect > spotLightAngle[ i ] ) {\r\n\r\n\t\t\t\tspotEffect = pow( spotEffect, spotLightExponent[ i ] );\r\n\r\n\t\t\t\t// diffuse\r\n\r\n\t\t\t\t#ifdef WRAP_AROUND\r\n\r\n\t\t\t\t\tfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\r\n\t\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\r\n\r\n\t\t\t\t\tvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\r\n\r\n\t\t\t\t#else\r\n\r\n\t\t\t\t\tfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\r\n\r\n\t\t\t\t#endif\r\n\r\n\t\t\t\tspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\r\n\r\n\t\t\t\t// specular\r\n\r\n\t\t\t\tvec3 spotHalfVector = normalize( spotVector + viewPosition );\r\n\t\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\r\n\t\t\t\tfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\r\n\r\n\t\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\t\tvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\r\n\t\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\r\n\r\n\t\t\t\t#else\r\n\r\n\t\t\t\t\tspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\r\n\r\n\t\t\t\t#endif\r\n\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirDiffuse = vec3( 0.0 );\r\n\t\tvec3 dirSpecular = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\r\n\t\t\t\tfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\t\tfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\r\n\t\t\t\tvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tdirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\r\n\t\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\r\n\t\t\tfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\tvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\r\n\t\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tdirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiDiffuse  = vec3( 0.0 );\r\n\t\tvec3 hemiSpecular = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( hemisphereLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = normalize( lPosition.xyz + vViewPosition.xyz );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\themiDiffuse += uDiffuseColor * hemiColor;\r\n\r\n\t\t\t// specular (sky light)\r\n\r\n\r\n\t\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\r\n\t\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\r\n\t\t\tfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\r\n\r\n\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = normalize( -lPosition.xyz + vViewPosition.xyz );\r\n\r\n\t\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\r\n\t\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\r\n\t\t\tfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\tfloat dotProductGround = dot( normal, lVectorGround );\r\n\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\tvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\r\n\t\t\t\tvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\r\n\t\t\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\themiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// all lights contribution summation\r\n\r\n\tvec3 totalDiffuse = vec3( 0.0 );\r\n\tvec3 totalSpecular = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += dirDiffuse;\r\n\t\ttotalSpecular += dirSpecular;\r\n\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += hemiDiffuse;\r\n\t\ttotalSpecular += hemiSpecular;\r\n\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += pointDiffuse;\r\n\t\ttotalSpecular += pointSpecular;\r\n\r\n\t#endif\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += spotDiffuse;\r\n\t\ttotalSpecular += spotSpecular;\r\n\r\n\t#endif\r\n\r\n\t#ifdef METAL\r\n\r\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\r\n\r\n\t#else\r\n\r\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\r\n\r\n\t#endif\r\n\r\n\tif ( enableReflection ) {\r\n\r\n\t\tvec3 vReflect;\r\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\r\n\r\n\t\tif ( useRefract ) {\r\n\r\n\t\t\tvReflect = refract( cameraToVertex, normal, uRefractionRatio );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tvReflect = reflect( cameraToVertex, normal );\r\n\r\n\t\t}\r\n\r\n\t\tvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tcubeColor.xyz *= cubeColor.xyz;\r\n\r\n\t\t#endif\r\n\r\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\r\n\r\n\t}\r\n\r\n[*]\r\n\r\n}\r\n'};_=Gtb.prototype=Ftb.prototype=new Kb;_.gC=function Htb(){return rA};_.Vb=function Itb(){return 'attribute vec4 tangent;\r\n\r\nuniform vec2 uOffset;\r\nuniform vec2 uRepeat;\r\n\r\nuniform bool enableDisplacement;\r\n\r\n#ifdef VERTEX_TEXTURES\r\n\r\n\tuniform sampler2D tDisplacement;\r\n\tuniform float uDisplacementScale;\r\n\tuniform float uDisplacementBias;\r\n\r\n#endif\r\n\r\nvarying vec3 vTangent;\r\nvarying vec3 vBinormal;\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vWorldPosition;\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n[*]\r\n\r\n\t// normal, tangent and binormal vectors\r\n\r\n\t#ifdef USE_SKINNING\r\n\r\n\t\tvNormal = normalMatrix * skinnedNormal.xyz;\r\n\r\n\t\tvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\r\n\t\tvTangent = normalMatrix * skinnedTangent.xyz;\r\n\r\n\t#else\r\n\r\n\t\tvNormal = normalMatrix * normal;\r\n\t\tvTangent = normalMatrix * tangent.xyz;\r\n\r\n\t#endif\r\n\r\n\tvBinormal = cross( vNormal, vTangent ) * tangent.w;\r\n\r\n\tvUv = uv * uRepeat + uOffset;\r\n\r\n\t// displacement mapping\r\n\r\n\tvec3 displacedPosition;\r\n\r\n\t#ifdef VERTEX_TEXTURES\r\n\r\n\t\tif ( enableDisplacement ) {\r\n\r\n\t\t\tvec3 dv = texture2D( tDisplacement, uv ).xyz;\r\n\t\t\tfloat df = uDisplacementScale * dv.x + uDisplacementBias;\r\n\t\t\tdisplacedPosition = position + normalize( normal ) * df;\r\n\r\n\t\t} else {\r\n\r\n\t\t\t#ifdef USE_SKINNING\r\n\r\n\t\t\t\tvec4 skinVertex = vec4( position, 1.0 );\r\n\r\n\t\t\t\tvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\r\n\t\t\t\tskinned \t  += boneMatY * skinVertex * skinWeight.y;\r\n\r\n\t\t\t\tdisplacedPosition  = skinned.xyz;\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tdisplacedPosition = position;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#else\r\n\r\n\t\t#ifdef USE_SKINNING\r\n\r\n\t\t\tvec4 skinVertex = vec4( position, 1.0 );\r\n\r\n\t\t\tvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\r\n\t\t\tskinned \t  += boneMatY * skinVertex * skinWeight.y;\r\n\r\n\t\t\tdisplacedPosition  = skinned.xyz;\r\n\r\n\t\t#else\r\n\r\n\t\t\tdisplacedPosition = position;\r\n\r\n\t\t#endif\r\n\r\n\t#endif\r\n\r\n\t//\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( displacedPosition, 1.0 );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n\t//\r\n\r\n\tvWorldPosition = mPosition.xyz;\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\t// shadows\r\n\r\n\t#ifdef USE_SHADOWMAP\r\n\r\n\t\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\r\n\r\n\t\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * mPosition;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n}\r\n'};_=u7b.prototype;_.qb=function y7b(){ISb(this.c,new A7b(this.b))};_=A7b.prototype=z7b.prototype=new LSb;_.gC=function B7b(){return rG};_.md=function C7b(){odb(this,new Fyb(25,geb(this.B.E),50,10000000))};_.hb=function D7b(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z;this.A.X.c=44597;Lxb(this.C,this.A);this.b=new _eb(this.A,this.B.E);this.b.p=0.2;this.b.b=0.3;this.b.n=7008.1;this.b.k=637100;b=new nLb(16777215);hEb(b.X,-1,0,1).ge();Lxb(this.C,b);s=(LRb(),NRb('./static/textures/planets/earth_atmos_2048.jpg',(Swb(),Rwb),null));a=NRb('./static/textures/planets/earth_clouds_1024.png',Rwb,null);j=NRb('./static/textures/planets/earth_normal_2048.jpg',Rwb,null);u=NRb('./static/textures/planets/earth_specular_2048.jpg',Rwb,null);i=NRb(Wlc,Rwb,null);g=new aQb(new ntb);g.d=true;y=HLb(g).j;tvb(is(y.b[Zlc],133),j);FDb(is(is(y.b[_lc],133).e,155),0.85,0.85);tvb(is(y.b[slc],133),s);tvb(is(y.b[$lc],133),u);tvb(is(y.b[Xlc],133),(e3(),e3(),c3));tvb(is(y.b[Ylc],133),d3);tvb(is(y.b[qlc],133),d3);Uyb(is(is(y.b[wlc],133).e,142),16777215);Uyb(is(is(y.b[xlc],133).e,142),6710886);Uyb(is(is(y.b[vlc],133).e,142),0);tvb(is(y.b[amc],133),new C3(20));Oyb(is(is(y.b[wlc],133).e,142));Oyb(is(is(y.b[xlc],133).e,142));Oyb(is(is(y.b[vlc],133).e,142));c=new mJb(6371,100,50);pzb(c);this.e=new LQb(c,g);this.e.$.e=0;this.e.$.c=0.41;Lxb(this.C,this.e);e=new EOb;yOb(e,new Zyb(16777215));e.q=a;e.R=true;this.c=new LQb(c,e);iEb(this.c.ab,1.005);this.c.$.c=0.41;Lxb(this.C,this.c);f=new pPb;iPb(f,new Zyb(16777215));f.u=i;this.d=new LQb(c,f);hEb(this.d.X,31855,0,0);iEb(this.d.ab,0.23);Lxb(this.C,this.d);w=new yzb;for(d=0;d<1500;++d){z=new mEb;GDb(z,Math.random()*2-1);HDb(z,Math.random()*2-1);kEb(z,Math.random()*2-1);z.fe(6371);w.H.Bc(z)}k=new PPb;NPb(k,new Zyb(5592405));k.e=2;k.f=false;x=new c9;as(x.b,x.c++,k);n=new PPb;NPb(n,new Zyb(5592405));n.e=1;n.f=false;as(x.b,x.c++,n);o=new PPb;NPb(o,new Zyb(3355443));o.e=2;o.f=false;as(x.b,x.c++,o);p=new PPb;NPb(p,new Zyb(3815994));p.e=1;p.f=false;as(x.b,x.c++,p);q=new PPb;NPb(q,new Zyb(1710618));q.e=2;q.f=false;as(x.b,x.c++,q);r=new PPb;NPb(r,new Zyb(1710618));r.e=1;r.f=false;as(x.b,x.c++,r);for(d=10;d<30;++d){v=new VQb(w,is((F7(d%6,x.c),x.b[d%6]),186));GDb(v.$,Math.random()*6);HDb(v.$,Math.random()*6);kEb(v.$,Math.random()*6);t=d*10;iEb(v.ab,t);v.S=false;Wxb(v);Lxb(this.C,v)}this.B.R=false;this.B.J=false;this.B.L=true;this.B.M=true;this.f=Uc()};_.ld=function E7b(){};_.ib=function F7b(a){var b,c;c=(Uc()-this.f)*0.001;BDb(this.e.$,0.1*c);BDb(this.c.$,0.125*c);b=c*0.1;Qxb(this.d,new nEb(Math.cos(b)*this.d.X.d-Math.sin(b)*this.d.X.c,0,Math.sin(b)*this.d.X.d+Math.cos(b)*this.d.X.c));BDb(this.d.$,-b);Zeb(this.b);Vob(this.B);this.f=Uc()};_.b=null;_.c=null;_.d=null;_.e=null;_.f=0;var tA=q3(Rlc,'NormalMapShader'),sA=q3(Rlc,'NormalMapShader_Resources_default_InlineClientBundleGenerator'),qA=q3(Rlc,'NormalMapShader_Resources_default_InlineClientBundleGenerator$1'),rA=q3(Rlc,'NormalMapShader_Resources_default_InlineClientBundleGenerator$2'),rG=q3(Pkc,'TrackballEarth$DemoScene');thc(Vd)(33);