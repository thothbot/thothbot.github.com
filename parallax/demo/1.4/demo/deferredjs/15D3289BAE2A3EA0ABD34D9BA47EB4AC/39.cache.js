function Hyc(){}
function Qyc(){}
function Uyc(){}
function Xyc(){}
function eyc(a,b){a.b=b}
function fyc(a,b){a.d=b}
function gyc(a,b){a.e=b}
function hyc(a,b){a.g=b}
function iyc(a,b){a.j=b}
function jyc(a,b){a.q=b}
function Byc(){yyc();return oyc}
function Myc(){Myc=_yc;Lyc=new Qyc}
function Zyc(){Zyc=_yc;Oyc=new Uyc}
function $yc(){$yc=_yc;Pyc=new Xyc}
function zyc(a){return new y1b(a.a,a.b)}
function vwb(c,a,b){c.uniform2fv(a,b)}
function Jyc(){zFb.call(this,(Myc(),Lyc))}
function Ayc(a,b,c,d){xd.call(this,a,b);this.a=c;this.b=d}
function olc(){o5b.call(this);this.c=new tKb('./static/textures/sprite0.png');this.d=new tKb('./static/textures/sprite1.png');this.e=new tKb('./static/textures/sprite2.png')}
function kyc(){NLb();dMb.call(this);this.c=(qWb(),oWb);Gxb();sxb();fxb();this.n=true;this.b=(yyc(),syc);this.g=1;this.d=new r_b(16777215);this.e=new pKb;this.f=!this.n;this.a=!this.n;this.k=!this.a;this.i=this.cb;this.j=0;this.o=new y1b(0,0);this.p=new y1b(1,1)}
function yyc(){yyc=_yc;wyc=new Ayc('TOP_LEFT',0,1,-1);vyc=new Ayc('TOP_CENTER',1,0,-1);xyc=new Ayc('TOP_RIGHT',2,-1,-1);tyc=new Ayc('CENTER_LEFT',3,1,0);syc=new Ayc(FCc,4,0,0);uyc=new Ayc('CENTER_RIGHT',5,-1,0);qyc=new Ayc('BOTTOM_LEFT',6,1,1);pyc=new Ayc('BOTTOM_CENTER',7,0,1);ryc=new Ayc('BOTTOM_RIGHT',8,-1,1);oyc=ru(YQ,ezc,291,[wyc,vyc,xyc,tyc,syc,uyc,qyc,pyc,ryc])}
function Dyc(a,b){var c,d;NCb.call(this,a,b);this.b=new Hyc;c=this.p.ab;this.b.f=Lwb(16);this.b.c=Nwb(6);d=0;Jwb(this.b.f,d++,-1);Jwb(this.b.f,d++,-1);Jwb(this.b.f,d++,0);Jwb(this.b.f,d++,1);Jwb(this.b.f,d++,1);Jwb(this.b.f,d++,-1);Jwb(this.b.f,d++,1);Jwb(this.b.f,d++,1);Jwb(this.b.f,d++,1);Jwb(this.b.f,d++,1);Jwb(this.b.f,d++,1);Jwb(this.b.f,d++,0);Jwb(this.b.f,d++,-1);Jwb(this.b.f,d++,1);Jwb(this.b.f,d++,0);Jwb(this.b.f,d++,0);d=0;Mwb(this.b.c,d++,0);Mwb(this.b.c,d++,1);Mwb(this.b.c,d++,2);Mwb(this.b.c,d++,0);Mwb(this.b.c,d++,2);Mwb(this.b.c,d++,3);this.b.e=c.createBuffer();this.b.b=c.createBuffer();hvb(c,(Nxb(),Lxb),this.b.e);uvb(c,Lxb,this.b.f,(Vxb(),Txb));hvb(c,Mxb,this.b.b);uvb(c,Mxb,this.b.c,Txb);this.b.d=new Jyc;pFb(this.b.d,c,false,0,0)}
var NHc='affectedByDistance',QHc='alignment',RHc='thothbot.parallax.plugins.sprite.',SHc='thothbot.parallax.plugins.sprite.shaders.',MHc='useScreenCoordinates',PHc='uvOffset';_R(1166,1,FAc);_.yb=function mlc(){l5b(this.b,new olc(this.a))};_R(1167,943,{},olc);_.mb=function plc(){var a,b,c,d,e;this.a=new NMb(60,LDb(this.D.n),1,2100);h2b(this.a._,1500);new Dyc(this.D.n,this.F);this.b=new dMb;for(a=0;a<200;a++){b=new kyc;gyc(b,this.e);b.n=false;fyc(b,new r_b(16777215));f2b(b._,jib()-0.5,jib()-0.5,jib()-0.5);if(b._.b<0){gyc(b,this.d)}else{n_b(b.d,0.5*jib(),0.75,0.5);u1b(b.p,2,2);u1b(b.o,-0.5,-0.5)}b._.mf();b._.kf(500);OLb(this.b,b)}OLb(this.F,this.b);c=new kyc;gyc(c,this.c);eyc(c,(yyc(),wyc));f2b(c._,100,100,0);c.g=0.25;OLb(this.F,c);d=new kyc;gyc(d,this.c);eyc(d,wyc);f2b(d._,150,150,2);d.g=0.5;OLb(this.F,d);e=new kyc;gyc(e,this.c);eyc(e,wyc);f2b(e._,200,200,3);e.g=1;OLb(this.F,e)};_.nb=function qlc(a){var b,c,d,e;e=a*0.001;for(b=0;b<this.b.Q.b;b++){d=Bu(Jnb(this.b.Q,b),290);c=lib(e+d._.c*0.01)*0.3+0.5;iyc(d,d.j+0.1*(b/this.b.Q.b));f2b(d.eb,c,c,1);d.e==this.e||hyc(d,lib(e+d._.c*0.01)*0.4+0.6)}E_b(this.b.cb,e*0.5);F_b(this.b.cb,e*0.75);G_b(this.b.cb,e);XDb(this.D.n,this.F,this.a,null,false)};_R(1324,793,{97:1,196:1,290:1},kyc);_.cT=function lyc(a){var b;return b=Bu(a,290).q-this.q,b==0?0:b>0?1:-1};_.Ud=function myc(){v0b(this.V,this._);z_b(this.i,0,this.j);n0b(this.V,this.i);(this.eb.c!=1||this.eb.d!=1)&&t0b(this.V,this.eb);this.Y=true};_.a=false;_.f=false;_.g=0;_.j=0;_.k=false;_.n=false;_.q=0;_R(1325,31,{91:1,97:1,100:1,291:1},Ayc);_.a=0;_.b=0;var oyc,pyc,qyc,ryc,syc,tyc,uyc,vyc,wyc,xyc;_R(1326,697,mAc,Dyc);_.Gd=function Eyc(){return SCb(),QCb};_.Hd=function Fyc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t,u;t=(!this.a&&(this.a=QLb(this.q,gP)),this.a);p=t.b;if(p==0)return;f=this.p.ab;u=this.b.d.i;e=this.b.d.b;n=d/c;i=c*0.5;g=d*0.5;o=true;Dwb(f,this.b.d.g);if(!this.b.a){Nvb(f,Bu(e.a[QCc],105).a);Nvb(f,Bu(e.a[BHc],105).a);this.b.a=true}Gvb(f,(bzb(),Vyb).a);Mvb(f,Uyb.a);Fvb(f,true);hvb(f,(Nxb(),Lxb),this.b.e);Hwb(f,Bu(e.a[QCc],105).a,2,(vyb(),pyb),16,0);Hwb(f,Bu(e.a[BHc],105).a,2,pyb,16,8);hvb(f,Mxb,this.b.b);Cwb(f,Bu(u.a[LHc],174).b,false,a.p.a);dvb(f,(BCb(),XBb).a);twb(f,Bu(u.a[DHc],174).b,0);for(k=0;k<p;k++){s=(Fdb(k,t.b),Bu(t.a[k],290));if(!s.gb||s.g==0)continue;if(s.n){jyc(s,-s._.b)}else{s0b(s.O,a.o,s.X);jyc(s,-s.O.a[14])}}xob(t);for(j=0;j<p;j++){s=(Fdb(j,t.b),Bu(t.a[j],290));if(!s.gb||s.g==0)continue;if(!!s.e&&!!s.e.p&&((s.e.p.offsetWidth||0)|0)>0){if(s.n){twb(f,Bu(u.a[MHc],174).b,1);xwb(f,Bu(u.a[GHc],174).b,(s._.c-i)/i,(g-s._.d)/g,eib(0,gib(1,s._.b)))}else{twb(f,Bu(u.a[MHc],174).b,0);twb(f,Bu(u.a[NHc],174).b,s.a?1:0);Cwb(f,Bu(u.a[OHc],174).b,false,s.O.a)}r=((s.e.p.offsetWidth||0)|0)/(s.k?d:1);q=ru(pP,$zc,-1,[r*n*s.eb.c,r*s.eb.d]);uwb(f,Bu(u.a[_Gc],174).b,s.p.c,s.p.d);uwb(f,Bu(u.a[PHc],174).b,s.o.c,s.o.d);uwb(f,Bu(u.a[QHc],174).b,zyc(s.b).c,zyc(s.b).d);rwb(f,Bu(u.a[xGc],174).b,s.g);xwb(f,Bu(u.a[OEc],174).b,s.d.c,s.d.b,s.d.a);rwb(f,Bu(u.a[HHc],174).b,s.j);vwb(f,Bu(u.a[FHc],174).b,q);if(s.f&&!o){Mvb(f,Wyb.a);o=true}else if(!s.f&&o){Gvb(f,Wyb.a);o=false}dEb(this.p,s.c);tEb(this.p,s.e,0);Lvb(f,(Zwb(),Wwb),6,(Pyb(),Oyb),0)}}Mvb(f,Vyb.a);Mvb(f,Wyb.a);Fvb(f,true);cEb(this.p)};_R(1327,1,{},Hyc);_.a=false;_R(1328,716,rAc,Jyc);_.Jd=function Kyc(){nFb(this,PHc,new uJb((NJb(),HJb),new y1b(0,0)));nFb(this,_Gc,new uJb(HJb,new y1b(1,1)));nFb(this,HHc,new uJb(zJb,new chb(1)));nFb(this,FHc,new uJb(HJb,new y1b(1,1)));nFb(this,QHc,new uJb(HJb,new y1b(0,0)));nFb(this,OEc,new uJb(yJb,new r_b(16777215)));nFb(this,DHc,new tJb(FJb));nFb(this,xGc,new uJb(zJb,new chb(1)));nFb(this,MHc,new uJb(CJb,Khb(1)));nFb(this,NHc,new uJb(CJb,Khb(1)));nFb(this,GHc,new uJb(JJb,new l2b(0,0,0)))};var Lyc;_R(1329,1,{},Qyc);_.Md=function Ryc(){return Zyc(),Oyc};_.Nd=function Syc(){return $yc(),Pyc};var Oyc,Pyc;_R(1330,1,{},Uyc);_.bc=function Vyc(){return 'precision mediump float;\r\n\r\nuniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n}\r\n'};_R(1331,1,{},Xyc);_.bc=function Yyc(){return 'uniform int useScreenCoordinates;\r\nuniform int affectedByDistance;\r\nuniform vec3 screenPosition;\r\nuniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 alignment;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position + alignment;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\r\n\trotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tif( useScreenCoordinates != 0 ) {\r\n\r\n\t\tfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\r\n\r\n\t} else {\r\n\r\n\t\tfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\t\tfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\r\n\r\n\t}\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var oN=Sgb(CFc,'EffectsSprites$DemoScene',1167),gP=Sgb(RHc,'Sprite',1324),dP=Tgb(RHc,'Sprite$ALIGNMENT',1325,RC,Byc),YQ=Rgb('[Lthothbot.parallax.plugins.sprite.','Sprite$ALIGNMENT;',1391,dP),fP=Sgb(RHc,'SpritePlugin',1326),eP=Sgb(RHc,'SpritePlugin$SpriteGeometry',1327),kP=Sgb(SHc,'SpriteShader',1328),jP=Sgb(SHc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1329),hP=Sgb(SHc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1330),iP=Sgb(SHc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1331);RAc(xi)(39);