function lub(){}
function wub(){}
function tub(){}
function Bub(){}
function Aub(){}
function Fub(){}
function Eub(){}
function y8b(){}
function z8b(){LTb.call(this)}
function mub(){wrb.call(this,(sub(),rub))}
function sub(){sub=qic;rub=new wub}
function Iub(){Iub=qic;uub=new Bub}
function Jub(){Jub=qic;vub=new Fub}
function Nzb(a){Uzb(a,a.e*a.e);Rzb(a,a.c*a.c);Qzb(a,a.b*a.b);return a}
var cnc='enableAO',dnc='enableDiffuse',enc='tNormal',fnc='tSpecular',gnc='uNormalScale',hnc='uShininess';_=mub.prototype=lub.prototype=new irb;_.gC=function nub(){return kB};_.xd=function oub(){srb(this,Twb());srb(this,Uwb());srb(this,Vwb());lrb(this,cnc,new uwb((Owb(),Dwb),(d4(),d4(),b4)));lrb(this,dnc,new uwb(Dwb,b4));lrb(this,xmc,new uwb(Dwb,b4));lrb(this,'enableReflection',new uwb(Dwb,b4));lrb(this,'enableDisplacement',new uwb(Dwb,b4));lrb(this,'tDisplacement',new twb(Gwb));lrb(this,zmc,new twb(Gwb));lrb(this,_mc,new twb(Gwb));lrb(this,enc,new twb(Gwb));lrb(this,fnc,new twb(Gwb));lrb(this,'tAO',new twb(Gwb));lrb(this,gnc,new uwb(Iwb,new IEb(1,1)));lrb(this,'uDisplacementBias',new uwb(Awb,new B4(0)));lrb(this,'uDisplacementScale',new uwb(Awb,new B4(1)));lrb(this,Dmc,new uwb(zwb,new Yzb(16777215)));lrb(this,Emc,new uwb(zwb,new Yzb(1118481)));lrb(this,Cmc,new uwb(zwb,new Yzb(16777215)));lrb(this,hnc,new uwb(Awb,new B4(30)));lrb(this,Kmc,new uwb(Awb,new B4(1)));lrb(this,inc,new uwb(Dwb,b4));lrb(this,'uRefractionRatio',new uwb(Awb,new B4(0.98)));lrb(this,'uReflectivity',new uwb(Awb,new B4(0.5)));lrb(this,'uOffset',new uwb(Iwb,new IEb(0,0)));lrb(this,'uRepeat',new uwb(Iwb,new IEb(1,1)));lrb(this,jnc,new uwb(Kwb,new mFb(1,1,1)))};_.yd=function pub(a){var b,c;c=new Eab(Ls(_I,{87:1,99:1},1,[Lmc,Mmc]));b=new Eab(Ls(_I,{87:1,99:1},1,[Omc,Pmc,Qmc]));rrb(this,Crb(a,Ls(bJ,{87:1,99:1},106,[c,b])))};_.zd=function qub(a){var b,c;c=new Eab(Ls(_I,{87:1,99:1},1,[knc,Rmc]));b=new Eab(Ls(_I,{87:1,99:1},1,[lnc,mnc]));trb(this,Crb(a,Ls(bJ,{87:1,99:1},106,[c,b])))};_.cM={131:1};var rub;_=wub.prototype=tub.prototype=new Kb;_.gC=function xub(){return jB};_.Ad=function yub(){return Iub(),uub};_.Bd=function zub(){return Jub(),vub};var uub=null,vub=null;_=Bub.prototype=Aub.prototype=new Kb;_.gC=function Cub(){return hB};_.ac=function Dub(){return 'uniform vec3 uAmbientColor;\r\nuniform vec3 uDiffuseColor;\r\nuniform vec3 uSpecularColor;\r\nuniform float uShininess;\r\nuniform float uOpacity;\r\n\r\nuniform bool enableDiffuse;\r\nuniform bool enableSpecular;\r\nuniform bool enableAO;\r\nuniform bool enableReflection;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tNormal;\r\nuniform sampler2D tSpecular;\r\nuniform sampler2D tAO;\r\n\r\nuniform samplerCube tCube;\r\n\r\nuniform vec2 uNormalScale;\r\n\r\nuniform bool useRefract;\r\nuniform float uRefractionRatio;\r\nuniform float uReflectivity;\r\n\r\nvarying vec3 vTangent;\r\nvarying vec3 vBinormal;\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightPosition[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\r\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\r\n#endif\r\n\r\n#ifdef WRAP_AROUND\r\n\r\n\tuniform vec3 wrapRGB;\r\n\r\n#endif\r\n\r\nvarying vec3 vWorldPosition;\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), uOpacity );\r\n\r\n\tvec3 specularTex = vec3( 1.0 );\r\n\r\n\tvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\r\n\tnormalTex.xy *= uNormalScale;\r\n\tnormalTex = normalize( normalTex );\r\n\r\n\tif( enableDiffuse ) {\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tvec4 texelColor = texture2D( tDiffuse, vUv );\r\n\t\t\ttexelColor.xyz *= texelColor.xyz;\r\n\r\n\t\t\tgl_FragColor = gl_FragColor * texelColor;\r\n\r\n\t\t#else\r\n\r\n\t\t\tgl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n\tif( enableAO ) {\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tvec4 aoColor = texture2D( tAO, vUv );\r\n\t\t\taoColor.xyz *= aoColor.xyz;\r\n\r\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\r\n\r\n\t\t#else\r\n\r\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n\tif( enableSpecular )\r\n\t\tspecularTex = texture2D( tSpecular, vUv ).xyz;\r\n\r\n\tmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\r\n\tvec3 finalNormal = tsb * normalTex;\r\n\r\n\t#ifdef FLIP_SIDED\r\n\r\n\t\tfinalNormal = -finalNormal;\r\n\r\n\t#endif\r\n\r\n\tvec3 normal = normalize( finalNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\t// point lights\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointDiffuse = vec3( 0.0 );\r\n\t\tvec3 pointSpecular = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat pointDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tpointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tpointVector = normalize( pointVector );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\r\n\t\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\r\n\t\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\r\n\r\n\t\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tpointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 pointHalfVector = normalize( pointVector + viewPosition );\r\n\t\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\r\n\t\t\tfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\tvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\r\n\t\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tpointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// spot lights\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\r\n\t\tvec3 spotDiffuse = vec3( 0.0 );\r\n\t\tvec3 spotSpecular = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat spotDistance = 1.0;\r\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\r\n\t\t\t\tspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tspotVector = normalize( spotVector );\r\n\r\n\t\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\r\n\r\n\t\t\tif ( spotEffect > spotLightAngle[ i ] ) {\r\n\r\n\t\t\t\tspotEffect = pow( spotEffect, spotLightExponent[ i ] );\r\n\r\n\t\t\t\t// diffuse\r\n\r\n\t\t\t\t#ifdef WRAP_AROUND\r\n\r\n\t\t\t\t\tfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\r\n\t\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\r\n\r\n\t\t\t\t\tvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\r\n\r\n\t\t\t\t#else\r\n\r\n\t\t\t\t\tfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\r\n\r\n\t\t\t\t#endif\r\n\r\n\t\t\t\tspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\r\n\r\n\t\t\t\t// specular\r\n\r\n\t\t\t\tvec3 spotHalfVector = normalize( spotVector + viewPosition );\r\n\t\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\r\n\t\t\t\tfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\r\n\r\n\t\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\t\tvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\r\n\t\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\r\n\r\n\t\t\t\t#else\r\n\r\n\t\t\t\t\tspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\r\n\r\n\t\t\t\t#endif\r\n\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirDiffuse = vec3( 0.0 );\r\n\t\tvec3 dirSpecular = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\r\n\t\t\t\tfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\t\tfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\r\n\t\t\t\tvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tdirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\r\n\t\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\r\n\t\t\tfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\tvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\r\n\t\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tdirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiDiffuse  = vec3( 0.0 );\r\n\t\tvec3 hemiSpecular = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( hemisphereLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = normalize( lPosition.xyz + vViewPosition.xyz );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\themiDiffuse += uDiffuseColor * hemiColor;\r\n\r\n\t\t\t// specular (sky light)\r\n\r\n\r\n\t\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\r\n\t\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\r\n\t\t\tfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\r\n\r\n\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = normalize( -lPosition.xyz + vViewPosition.xyz );\r\n\r\n\t\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\r\n\t\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\r\n\t\t\tfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\tfloat dotProductGround = dot( normal, lVectorGround );\r\n\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\tvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\r\n\t\t\t\tvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\r\n\t\t\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\themiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// all lights contribution summation\r\n\r\n\tvec3 totalDiffuse = vec3( 0.0 );\r\n\tvec3 totalSpecular = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += dirDiffuse;\r\n\t\ttotalSpecular += dirSpecular;\r\n\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += hemiDiffuse;\r\n\t\ttotalSpecular += hemiSpecular;\r\n\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += pointDiffuse;\r\n\t\ttotalSpecular += pointSpecular;\r\n\r\n\t#endif\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += spotDiffuse;\r\n\t\ttotalSpecular += spotSpecular;\r\n\r\n\t#endif\r\n\r\n\t#ifdef METAL\r\n\r\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\r\n\r\n\t#else\r\n\r\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\r\n\r\n\t#endif\r\n\r\n\tif ( enableReflection ) {\r\n\r\n\t\tvec3 vReflect;\r\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\r\n\r\n\t\tif ( useRefract ) {\r\n\r\n\t\t\tvReflect = refract( cameraToVertex, normal, uRefractionRatio );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tvReflect = reflect( cameraToVertex, normal );\r\n\r\n\t\t}\r\n\r\n\t\tvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tcubeColor.xyz *= cubeColor.xyz;\r\n\r\n\t\t#endif\r\n\r\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\r\n\r\n\t}\r\n\r\n[*]\r\n\r\n}\r\n'};_=Fub.prototype=Eub.prototype=new Kb;_.gC=function Gub(){return iB};_.ac=function Hub(){return 'attribute vec4 tangent;\r\n\r\nuniform vec2 uOffset;\r\nuniform vec2 uRepeat;\r\n\r\nuniform bool enableDisplacement;\r\n\r\n#ifdef VERTEX_TEXTURES\r\n\r\n\tuniform sampler2D tDisplacement;\r\n\tuniform float uDisplacementScale;\r\n\tuniform float uDisplacementBias;\r\n\r\n#endif\r\n\r\nvarying vec3 vTangent;\r\nvarying vec3 vBinormal;\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vWorldPosition;\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n[*]\r\n\r\n\t// normal, tangent and binormal vectors\r\n\r\n\t#ifdef USE_SKINNING\r\n\r\n\t\tvNormal = normalMatrix * skinnedNormal.xyz;\r\n\r\n\t\tvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\r\n\t\tvTangent = normalMatrix * skinnedTangent.xyz;\r\n\r\n\t#else\r\n\r\n\t\tvNormal = normalMatrix * normal;\r\n\t\tvTangent = normalMatrix * tangent.xyz;\r\n\r\n\t#endif\r\n\r\n\tvBinormal = cross( vNormal, vTangent ) * tangent.w;\r\n\r\n\tvUv = uv * uRepeat + uOffset;\r\n\r\n\t// displacement mapping\r\n\r\n\tvec3 displacedPosition;\r\n\r\n\t#ifdef VERTEX_TEXTURES\r\n\r\n\t\tif ( enableDisplacement ) {\r\n\r\n\t\t\tvec3 dv = texture2D( tDisplacement, uv ).xyz;\r\n\t\t\tfloat df = uDisplacementScale * dv.x + uDisplacementBias;\r\n\t\t\tdisplacedPosition = position + normalize( normal ) * df;\r\n\r\n\t\t} else {\r\n\r\n\t\t\t#ifdef USE_SKINNING\r\n\r\n\t\t\t\tvec4 skinVertex = vec4( position, 1.0 );\r\n\r\n\t\t\t\tvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\r\n\t\t\t\tskinned \t  += boneMatY * skinVertex * skinWeight.y;\r\n\r\n\t\t\t\tdisplacedPosition  = skinned.xyz;\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tdisplacedPosition = position;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#else\r\n\r\n\t\t#ifdef USE_SKINNING\r\n\r\n\t\t\tvec4 skinVertex = vec4( position, 1.0 );\r\n\r\n\t\t\tvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\r\n\t\t\tskinned \t  += boneMatY * skinVertex * skinWeight.y;\r\n\r\n\t\t\tdisplacedPosition  = skinned.xyz;\r\n\r\n\t\t#else\r\n\r\n\t\t\tdisplacedPosition = position;\r\n\r\n\t\t#endif\r\n\r\n\t#endif\r\n\r\n\t//\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( displacedPosition, 1.0 );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n\t//\r\n\r\n\tvWorldPosition = mPosition.xyz;\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\t// shadows\r\n\r\n\t#ifdef USE_SHADOWMAP\r\n\r\n\t\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\r\n\r\n\t\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * mPosition;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n}\r\n'};_=t8b.prototype;_.tb=function x8b(){HTb(this.c,new z8b(this.b))};_=z8b.prototype=y8b.prototype=new KTb;_.gC=function A8b(){return iH};_.td=function B8b(){neb(this,new Ezb(25,ffb(this.B.E),50,10000000))};_.hb=function C8b(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z;this.A.X.c=44597;Kyb(this.C,this.A);this.b=new $fb(this.A,this.B.E);this.b.p=0.2;this.b.b=0.3;this.b.n=7008.1;this.b.k=637100;b=new mMb(16777215);gFb(b.X,-1,0,1).ne();Kyb(this.C,b);s=(KSb(),MSb('./static/textures/planets/earth_atmos_2048.jpg',(Rxb(),Qxb),null));a=MSb('./static/textures/planets/earth_clouds_1024.png',Qxb,null);j=MSb('./static/textures/planets/earth_normal_2048.jpg',Qxb,null);u=MSb('./static/textures/planets/earth_specular_2048.jpg',Qxb,null);i=MSb(bnc,Qxb,null);g=new _Qb(new mub);g.d=true;y=GMb(g).j;swb(Us(y.b[enc],133),j);EEb(Us(Us(y.b[gnc],133).e,155),0.85,0.85);swb(Us(y.b[zmc],133),s);swb(Us(y.b[fnc],133),u);swb(Us(y.b[cnc],133),(d4(),d4(),b4));swb(Us(y.b[dnc],133),c4);swb(Us(y.b[xmc],133),c4);Tzb(Us(Us(y.b[Dmc],133).e,142),16777215);Tzb(Us(Us(y.b[Emc],133).e,142),6710886);Tzb(Us(Us(y.b[Cmc],133).e,142),0);swb(Us(y.b[hnc],133),new B4(20));Nzb(Us(Us(y.b[Dmc],133).e,142));Nzb(Us(Us(y.b[Emc],133).e,142));Nzb(Us(Us(y.b[Cmc],133).e,142));c=new lKb(6371,100,50);oAb(c);this.e=new KRb(c,g);this.e.$.e=0;this.e.$.c=0.41;Kyb(this.C,this.e);e=new DPb;xPb(e,new Yzb(16777215));e.q=a;e.R=true;this.c=new KRb(c,e);hFb(this.c.ab,1.005);this.c.$.c=0.41;Kyb(this.C,this.c);f=new oQb;hQb(f,new Yzb(16777215));f.u=i;this.d=new KRb(c,f);gFb(this.d.X,31855,0,0);hFb(this.d.ab,0.23);Kyb(this.C,this.d);w=new xAb;for(d=0;d<1500;++d){z=new lFb;FEb(z,Math.random()*2-1);GEb(z,Math.random()*2-1);jFb(z,Math.random()*2-1);z.me(6371);w.H.Ic(z)}k=new OQb;MQb(k,new Yzb(5592405));k.e=2;k.f=false;x=new bab;Ms(x.b,x.c++,k);n=new OQb;MQb(n,new Yzb(5592405));n.e=1;n.f=false;Ms(x.b,x.c++,n);o=new OQb;MQb(o,new Yzb(3355443));o.e=2;o.f=false;Ms(x.b,x.c++,o);p=new OQb;MQb(p,new Yzb(3815994));p.e=1;p.f=false;Ms(x.b,x.c++,p);q=new OQb;MQb(q,new Yzb(1710618));q.e=2;q.f=false;Ms(x.b,x.c++,q);r=new OQb;MQb(r,new Yzb(1710618));r.e=1;r.f=false;Ms(x.b,x.c++,r);for(d=10;d<30;++d){v=new URb(w,Us((E8(d%6,x.c),x.b[d%6]),186));FEb(v.$,Math.random()*6);GEb(v.$,Math.random()*6);jFb(v.$,Math.random()*6);t=d*10;hFb(v.ab,t);v.S=false;Vyb(v);Kyb(this.C,v)}this.B.R=false;this.B.J=false;this.B.L=true;this.B.M=true;this.f=fd()};_.sd=function D8b(){};_.ib=function E8b(a){var b,c;c=(fd()-this.f)*0.001;AEb(this.e.$,0.1*c);AEb(this.c.$,0.125*c);b=c*0.1;Pyb(this.d,new mFb(Math.cos(b)*this.d.X.d-Math.sin(b)*this.d.X.c,0,Math.sin(b)*this.d.X.d+Math.cos(b)*this.d.X.c));AEb(this.d.$,-b);Yfb(this.b);Upb(this.B);this.f=fd()};_.b=null;_.c=null;_.d=null;_.e=null;_.f=0;var kB=p4(Ymc,'NormalMapShader'),jB=p4(Ymc,'NormalMapShader_Resources_default_InlineClientBundleGenerator'),hB=p4(Ymc,'NormalMapShader_Resources_default_InlineClientBundleGenerator$1'),iB=p4(Ymc,'NormalMapShader_Resources_default_InlineClientBundleGenerator$2'),iH=p4(Wlc,'TrackballEarth$DemoScene');sic(ge)(33);