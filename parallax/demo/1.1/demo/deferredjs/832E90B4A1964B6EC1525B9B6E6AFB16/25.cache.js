function fcb(){}
function ucb(){}
function spb(){}
function Dpb(){}
function Apb(){}
function Ipb(){}
function Hpb(){}
function Mpb(){}
function Lpb(){}
function xZb(){}
function yZb(){DMb.call(this)}
function Bcb(a,b){ih.call(this,a,b)}
function tpb(){hnb.call(this,(zpb(),ypb))}
function zpb(){zpb=T2b;ypb=new Dpb}
function Ppb(){Ppb=T2b;Bpb=new Ipb}
function Qpb(){Qpb=T2b;Cpb=new Mpb}
function Dcb(){Acb();return vcb}
function vub(a){Cub(a,a.e*a.e);zub(a,a.c*a.c);yub(a,a.b*a.b);return a}
function gcb(a,b,c){return new Qyb((b-Jg(a.y.B))/a.n*0.5,(c-Lg(a.y.B))/a.n*0.5)}
function yyb(a,b,c){var d,e;d=c/2;e=Math.sin(d);a.c=b.d*e;a.d=b.e*e;a.e=b.c*e;a.b=Math.cos(d)}
function lcb(a){var b;b=1+(a.s.e-a.t.e)*1.2;if(b!=1&&b>0){a.c.he(b);Iyb(a.t,(a.s.e-a.t.e)*a.b)}}
function Acb(){Acb=T2b;wcb=new Bcb(o3b,0);ycb=new Bcb('ROTATE',1);zcb=new Bcb('ZOOM',2);xcb=new Bcb('PAN',3);vcb=ir(vF,{85:1,86:1,90:1,102:1},119,[wcb,ycb,zcb,xcb])}
function icb(a){var b,c;b=a.i.Sd().ae(a.k);if(b.Xd()>0){b.Yd(a.c.Wd()*a.j);c=mzb(a.c.ee(),a.x.K).je(b.d);c.de(a.x.K.ee().je(b.e));a.x.E.de(c);a.r.de(c);a.k.Pd(b.be(a.i,a.k).Yd(a.b))}}
function jcb(a){var b,c,d;b=x1(nzb(a.p,a.o)/a.p.Wd()/a.o.Wd());if(b>0){c=lzb(new tzb,a.p,a.o).ie();d=new zyb;b*=1;yyb(d,c,-b);vyb(d,a.c);vyb(d,a.x.K);vyb(d,a.o);yyb(d,c,b*(a.b-1));vyb(d,a.p)}}
function kcb(a){a.c.fe(a.x.E).ke(a.r);jcb(a);lcb(a);icb(a);jzb(a.x.E,a.r,a.c);a.x.E.Xd()>a.f*a.f&&a.x.E.je(a.f);a.c.Xd()<a.g*a.g&&jzb(a.x.E,a.r,a.c.je(a.g));Stb(a.x,a.r);a.e.Td(a.x.E)>0&&a.e.fe(a.x.E)}
function vyb(a,b){var c,d,e,f,g,i,j,k,n,o,p;return n=b.d,o=b.e,p=b.c,i=a.c,j=a.d,k=a.e,g=a.b,d=g*n+j*p-k*o,e=g*o+k*n-i*p,f=g*p+i*o-j*n,c=-i*n-j*o-k*p,b.d=d*g+c*-i+e*-k-f*-j,b.e=e*g+c*-j+f*-i-d*-k,b.c=f*g+c*-k+d*-j-e*-i,b}
function hcb(a,b,c){var d,e,f;e=new uzb((b-og(a.y.B,A6b)*0.5-Jg(a.y.B))/a.n,(og(a.y.B,B6b)*0.5+Lg(a.y.B)-c)/a.n,0);d=e.Wd();d>1?e.ie():rzb(e,Math.sqrt(1-d*d));a.c.fe(a.x.E).ke(a.r);f=a.x.K.ee().je(e.e);f.de(mzb(a.x.K.ee(),a.c).je(e.d));f.de(a.c.je(e.c));return f}
function mcb(a,b){Gbb.call(this,a,b);this.q=(Acb(),wcb);this.n=(og(b.B,A6b)+og(b.B,B6b))/4;fy!=Wv&&(this.y.B.setAttribute(y6b,z6b),undefined);this.r=new tzb;this.e=new tzb;this.c=new tzb;this.p=new tzb;this.o=new tzb;this.t=new Pyb;this.s=new Pyb;this.k=new Pyb;this.i=new Pyb;uM(this.y,this,(Jk(),Jk(),Ik));uM(this.y,this,(Nl(),Nl(),Ml));uM(this.y,this,(Gl(),Gl(),Fl));uM(this.y,this,(Ul(),Ul(),Tl));uM((qX(),uX(null)),this,(kl(),kl(),jl));uM(uX(null),this,(rl(),rl(),ql))}
var w7b='enableAO',x7b='enableDiffuse',y7b='enableSpecular',z7b='tNormal',A7b='tSpecular',E7b='uAmbientColor',C7b='uDiffuseColor',B7b='uNormalScale',F7b='uShininess',D7b='uSpecularColor';_=mcb.prototype=fcb.prototype=new Fbb;_.gC=function ncb(){return ly};_.Gb=function ocb(a){a.b.preventDefault()};_.Hb=function pcb(a){if(this.q!=(Acb(),wcb)){return}else (a.b.keyCode||0)==65?(this.q=ycb):(a.b.keyCode||0)==83?(this.q=zcb):(a.b.keyCode||0)==68&&(this.q=xcb);this.q!=wcb&&(this.d=true)};_.Ib=function qcb(a){this.q=(Acb(),wcb)};_.Jb=function rcb(a){a.b.preventDefault();a.b.stopPropagation();if(this.q==(Acb(),wcb)){if(Gg(a.b)==1){this.p=this.o=hcb(this,yk(a),zk(a));this.q=ycb}else if(Gg(a.b)==4){this.t=this.s=gcb(this,yk(a),zk(a));this.q=zcb}else Gg(a.b)==2&&(this.k=this.i=gcb(this,yk(a),zk(a)))}};_.Kb=function scb(a){if(this.d){this.p=this.o=hcb(this,yk(a),zk(a));this.t=this.s=gcb(this,yk(a),zk(a));this.k=this.i=gcb(this,yk(a),zk(a));this.d=false}if(this.q==(Acb(),wcb)){return}else this.q==ycb?(this.o=hcb(this,yk(a),zk(a))):this.q==zcb?(this.s=gcb(this,yk(a),zk(a))):this.q==xcb&&(this.i=gcb(this,yk(a),zk(a)))};_.Lb=function tcb(a){a.b.preventDefault();a.b.stopPropagation();this.q=(Acb(),wcb)};_.cM={17:1,20:1,21:1,23:1,24:1,25:1,37:1};_.b=0.2;_.c=null;_.d=false;_.e=null;_.f=1.7976931348623157E308;_.g=0;_.i=null;_.j=0.3;_.k=null;_.n=0;_.o=null;_.p=null;_.r=null;_.s=null;_.t=null;_=Bcb.prototype=ucb.prototype=new gh;_.gC=function Ccb(){return ky};_.cM={85:1,89:1,93:1,119:1};var vcb,wcb,xcb,ycb,zcb;_=tpb.prototype=spb.prototype=new Wmb;_.gC=function upb(){return dz};_.ud=function vpb(){dnb(this,Hrb());dnb(this,Irb());dnb(this,Jrb());Ymb(this,w7b,new hrb((Crb(),rrb),s1(0)));Ymb(this,x7b,new hrb(rrb,s1(0)));Ymb(this,y7b,new hrb(rrb,s1(0)));Ymb(this,'enableReflection',new hrb(rrb,s1(0)));Ymb(this,e7b,new hrb(urb,s1(0)));Ymb(this,t7b,new hrb(urb,s1(1)));Ymb(this,z7b,new hrb(urb,s1(2)));Ymb(this,A7b,new hrb(urb,s1(3)));Ymb(this,'tAO',new hrb(urb,s1(4)));Ymb(this,'tDisplacement',new hrb(urb,s1(5)));Ymb(this,B7b,new hrb(orb,new Q0(1)));Ymb(this,'uDisplacementBias',new hrb(orb,new Q0(0)));Ymb(this,'uDisplacementScale',new hrb(orb,new Q0(1)));Ymb(this,C7b,new hrb(nrb,new Gub(16777215)));Ymb(this,D7b,new hrb(nrb,new Gub(1118481)));Ymb(this,E7b,new hrb(nrb,new Gub(16777215)));Ymb(this,F7b,new hrb(orb,new Q0(30)));Ymb(this,'uOpacity',new hrb(orb,new Q0(1)));Ymb(this,'uReflectivity',new hrb(orb,new Q0(0.5)));Ymb(this,'uOffset',new hrb(wrb,new Qyb(0,0)));Ymb(this,'uRepeat',new hrb(wrb,new Qyb(1,1)));Ymb(this,G7b,new hrb(yrb,new uzb(1,1,1)))};_.vd=function wpb(a){var b,c;c=new T6(ir(qF,{85:1,86:1,90:1,102:1},1,[H7b,I7b]));b=new T6(ir(qF,{85:1,86:1,90:1,102:1},1,[J7b,K7b,L7b]));fnb(this,nnb(a,ir(sF,{85:1,102:1},109,[c,b])))};_.wd=function xpb(a){var b,c;c=new T6(ir(qF,{85:1,86:1,90:1,102:1},1,[M7b]));b=new T6(ir(qF,{85:1,86:1,90:1,102:1},1,[N7b]));gnb(this,nnb(a,ir(sF,{85:1,102:1},109,[c,b])))};_.cM={133:1};var ypb;_=Dpb.prototype=Apb.prototype=new Tb;_.gC=function Epb(){return cz};_.xd=function Fpb(){return Ppb(),Bpb};_.yd=function Gpb(){return Qpb(),Cpb};var Bpb=null,Cpb=null;_=Ipb.prototype=Hpb.prototype=new Tb;_.gC=function Jpb(){return az};_.Zb=function Kpb(){return 'uniform vec3 uAmbientColor;\r\nuniform vec3 uDiffuseColor;\r\nuniform vec3 uSpecularColor;\r\nuniform float uShininess;\r\nuniform float uOpacity;\r\n\r\nuniform bool enableDiffuse;\r\nuniform bool enableSpecular;\r\nuniform bool enableAO;\r\nuniform bool enableReflection;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tNormal;\r\nuniform sampler2D tSpecular;\r\nuniform sampler2D tAO;\r\n\r\nuniform samplerCube tCube;\r\n\r\nuniform float uNormalScale;\r\nuniform float uReflectivity;\r\n\r\nvarying vec3 vTangent;\r\nvarying vec3 vBinormal;\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\r\n#endif\r\n\r\n#ifdef WRAP_AROUND\r\n\tuniform vec3 wrapRGB;\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), uOpacity );\r\n\r\n\tvec3 specularTex = vec3( 1.0 );\r\n\r\n\tvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\r\n\tnormalTex.xy *= uNormalScale;\r\n\tnormalTex = normalize( normalTex );\r\n\r\n\tif( enableDiffuse ) {\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tvec4 texelColor = texture2D( tDiffuse, vUv );\r\n\t\t\ttexelColor.xyz *= texelColor.xyz;\r\n\r\n\t\t\tgl_FragColor = gl_FragColor * texelColor;\r\n\r\n\t\t#else\r\n\r\n\t\t\tgl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n\tif( enableAO ) {\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tvec4 aoColor = texture2D( tAO, vUv );\r\n\t\t\taoColor.xyz *= aoColor.xyz;\r\n\r\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\r\n\r\n\t\t#else\r\n\r\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n\tif( enableSpecular )\r\n\t\tspecularTex = texture2D( tSpecular, vUv ).xyz;\r\n\r\n\tmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\r\n\tvec3 finalNormal = tsb * normalTex;\r\n\r\n\tvec3 normal = normalize( finalNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\t// point lights\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointDiffuse = vec3( 0.0 );\r\n\t\tvec3 pointSpecular = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec3 pointVector = normalize( vPointLight[ i ].xyz );\r\n\t\t\tfloat pointDistance = vPointLight[ i ].w;\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\r\n\t\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\r\n\t\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\r\n\r\n\t\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tpointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 pointHalfVector = normalize( pointVector + viewPosition );\r\n\t\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\r\n\t\t\tfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\tvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\r\n\t\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tpointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirDiffuse = vec3( 0.0 );\r\n\t\tvec3 dirSpecular = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\r\n\t\t\t\tfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\t\tfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\r\n\t\t\t\tvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tdirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\r\n\t\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\r\n\t\t\tfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\tvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\r\n\t\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tdirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// all lights contribution summation\r\n\r\n\tvec3 totalDiffuse = vec3( 0.0 );\r\n\tvec3 totalSpecular = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += dirDiffuse;\r\n\t\ttotalSpecular += dirSpecular;\r\n\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += pointDiffuse;\r\n\t\ttotalSpecular += pointSpecular;\r\n\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor) + totalSpecular;\r\n\r\n\tif ( enableReflection ) {\r\n\r\n\t\tvec3 wPos = cameraPosition - vViewPosition;\r\n\t\tvec3 vReflect = reflect( normalize( wPos ), normal );\r\n\r\n\t\tvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tcubeColor.xyz *= cubeColor.xyz;\r\n\r\n\t\t#endif\r\n\r\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\r\n\r\n\t}\r\n\r\n[*]\r\n\r\n}\r\n'};_=Mpb.prototype=Lpb.prototype=new Tb;_.gC=function Npb(){return bz};_.Zb=function Opb(){return 'attribute vec4 tangent;\r\n\r\nuniform vec2 uOffset;\r\nuniform vec2 uRepeat;\r\n\r\n#ifdef VERTEX_TEXTURES\r\n\r\n\tuniform sampler2D tDisplacement;\r\n\tuniform float uDisplacementScale;\r\n\tuniform float uDisplacementBias;\r\n\r\n#endif\r\n\r\nvarying vec3 vTangent;\r\nvarying vec3 vBinormal;\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n\tvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\t// normal, tangent and binormal vectors\r\n\r\n\tvNormal = normalMatrix * normal;\r\n\tvTangent = normalMatrix * tangent.xyz;\r\n\tvBinormal = cross( vNormal, vTangent ) * tangent.w;\r\n\r\n\tvUv = uv * uRepeat + uOffset;\r\n\r\n\t// point lights\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tvPointLight[ i ] = vec4( lVector, lDistance );\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// displacement mapping\r\n\r\n\t#ifdef VERTEX_TEXTURES\r\n\r\n\t\tvec3 dv = texture2D( tDisplacement, uv ).xyz;\r\n\t\tfloat df = uDisplacementScale * dv.x + uDisplacementBias;\r\n\t\tvec4 displacedPosition = vec4( normalize( vNormal.xyz ) * df, 0.0 ) + mvPosition;\r\n\t\tgl_Position = projectionMatrix * displacedPosition;\r\n\r\n\t#else\r\n\r\n\t\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n\t#endif\r\n\r\n[*]\r\n\r\n}\r\n'};_=izb.prototype;_.je=function Qzb(a){this.ie();return this.he(a)};_=Wzb.prototype;_.je=function tAb(a){return $zb(this,J1(this.d*this.d+this.e*this.e+this.c*this.c+this.b*this.b)),_zb(this,a)};_=sZb.prototype;_.ub=function wZb(){zMb(this.c,new yZb(this.b))};_=yZb.prototype=xZb.prototype=new CMb;_.gC=function zZb(){return iE};_.qd=function AZb(){Cab(this,new mub(25,ubb(this.B.D),50,10000000))};_.ib=function BZb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z;this.A.E.c=44597;wtb(this.C,this.A);this.b=new mcb(this.A,this.B.D);this.b.j=0.2;this.b.b=0.3;this.b.g=7008.1;this.b.f=637100;b=new sFb;pzb(b.E,-1,0,1).ie();wtb(this.C,b);s=(DLb(),FLb('./static/textures/planets/earth_atmos_2048.jpg',(Fsb(),Esb),null));a=FLb('./static/textures/planets/earth_clouds_1024.png',Esb,null);j=FLb('./static/textures/planets/earth_normal_2048.jpg',Esb,null);u=FLb('./static/textures/planets/earth_specular_2048.jpg',Esb,null);i=FLb('./static/textures/planets/moon_1024.jpg',Esb,null);g=new GJb(new tpb);g.d=true;y=JFb(g).j;frb(rr(y.b[z7b],135),j);grb(rr(y.b[B7b],135),new Q0(0.85));frb(rr(y.b[e7b],135),s);frb(rr(y.b[A7b],135),u);grb(rr(y.b[w7b],135),s1(0));grb(rr(y.b[x7b],135),s1(1));grb(rr(y.b[y7b],135),s1(1));Bub(rr(rr(y.b[C7b],135).f,143),16777215);Bub(rr(rr(y.b[D7b],135).f,143),6710886);Bub(rr(rr(y.b[E7b],135).f,143),0);grb(rr(y.b[F7b],135),new Q0(20));vub(rr(rr(y.b[C7b],135).f,143));vub(rr(rr(y.b[D7b],135).f,143));vub(rr(rr(y.b[E7b],135).f,143));c=new mEb(6371,100,50);Yub(c);this.e=new FKb(c,g);this.e.H.e=0;this.e.H.c=0.41;wtb(this.C,this.e);e=new mIb;gIb(e,new Gub(16777215));e.q=a;e.L=true;this.c=new FKb(c,e);qzb(this.c.J,1.005);this.c.H.c=0.41;wtb(this.C,this.c);f=new XIb;RIb(f,new Gub(16777215));f.s=i;this.d=new FKb(c,f);pzb(this.d.E,31855,0,0);qzb(this.d.J,0.23);wtb(this.C,this.d);w=new fvb;for(d=0;d<1500;++d){z=new tzb;Nyb(z,Math.random()*2-1);Oyb(z,Math.random()*2-1);rzb(z,Math.random()*2-1);z.he(6371);w.I.Fc(z)}k=new uJb;sJb(k,new Gub(5592405));k.e=2;k.f=false;x=new q6;jr(x.b,x.c++,k);n=new uJb;sJb(n,new Gub(5592405));n.e=1;n.f=false;jr(x.b,x.c++,n);o=new uJb;sJb(o,new Gub(3355443));o.e=2;o.f=false;jr(x.b,x.c++,o);p=new uJb;sJb(p,new Gub(3815994));p.e=1;p.f=false;jr(x.b,x.c++,p);q=new uJb;sJb(q,new Gub(1710618));q.e=2;q.f=false;jr(x.b,x.c++,q);r=new uJb;sJb(r,new Gub(1710618));r.e=1;r.f=false;jr(x.b,x.c++,r);for(d=10;d<30;++d){v=new PKb(w,rr((T4(d%6,x.c),x.b[d%6]),180));Nyb(v.H,Math.random()*6);Oyb(v.H,Math.random()*6);rzb(v.H,Math.random()*6);t=d*10;qzb(v.J,t);v.A=false;Ftb(v);wtb(this.C,v)}this.B.N=false;this.B.I=false;this.f=md()};_.pd=function CZb(){};_.jb=function DZb(a){var b,c;c=(md()-this.f)*0.001;Iyb(this.e.H,0.1*c);Iyb(this.c.H,0.125*c);b=c*0.1;ztb(this.d,new uzb(Math.cos(b)*this.d.E.d-Math.sin(b)*this.d.E.c,0,Math.sin(b)*this.d.E.d+Math.cos(b)*this.d.E.c));Iyb(this.d.H,-b);kcb(this.b);Tlb(this.B,false,false,false);this.f=md()};_.b=null;_.c=null;_.d=null;_.e=null;_.f=0;var ly=E0(L6b,'TrackballControl'),ky=F0(L6b,'TrackballControl$STATE',Dcb),vF=D0('[Lthothbot.parallax.core.client.controls.','TrackballControl$STATE;'),dz=E0(q7b,'ShaderNormalMap'),cz=E0(q7b,'ShaderNormalMap_Resources_default_InlineClientBundleGenerator'),az=E0(q7b,'ShaderNormalMap_Resources_default_InlineClientBundleGenerator$1'),bz=E0(q7b,'ShaderNormalMap_Resources_default_InlineClientBundleGenerator$2'),iE=E0(q6b,'TrackballEarth$DemoScene');V2b(ne)(25);