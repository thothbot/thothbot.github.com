function Tmc(){}
function Qwc(){}
function Zwc(){}
function Wwc(){}
function cxc(){}
function bxc(){}
function gxc(){}
function fxc(){}
function Umc(){H7b.call(this)}
function Rwc(){cFb.call(this,(Vwc(),Uwc))}
function Vwc(){Vwc=gLc;Uwc=new Zwc}
function jxc(){jxc=gLc;Xwc=new cxc}
function kxc(){kxc=gLc;Ywc=new gxc}
_=Omc.prototype;_.vb=function Smc(){D7b(this.b,new Umc(this.a))};_=Umc.prototype=Tmc.prototype=new G7b;_.gC=function Vmc(){return YG};_.Gd=function Wmc(a){WSb(Qq(Qq(this.b.a[iQc],166).d,192),a.a.o);XSb(Qq(Qq(this.b.a[iQc],166).d,192),a.a.n)};_.mb=function Xmc(){var a,b;pp((xvb(),wvb),(Ivb(),Hvb),this);this.a=new iNb;this.a.W.b=1;a=new N4b(new Rwc);this.b=O_b(a).i;b=new z5b(new vYb(2,2),a);IMb(this.D,b)};_.nb=function Ymc(a){$Jb(Qq(this.b.a[mQc],166),new xfb(Qq(Qq(this.b.a[mQc],166).d,95).a+0.05));HDb(this.C.n,this.D,this.a,null,false)};_.cM={38:1,131:1};_.a=null;_.b=null;_=Rwc.prototype=Qwc.prototype=new QEb;_.gC=function Swc(){return DI};_.Jd=function Twc(){TEb(this,mQc,new aKb((uKb(),gKb),new xfb(1)));TEb(this,iQc,new aKb(oKb,new YSb))};_.cM={164:1};var Uwc;_=Zwc.prototype=Wwc.prototype=new Jb;_.gC=function $wc(){return CI};_.Md=function _wc(){return jxc(),Xwc};_.Nd=function axc(){return kxc(),Ywc};var Xwc=null,Ywc=null;_=cxc.prototype=bxc.prototype=new Jb;_.gC=function dxc(){return AI};_.Yb=function exc(){return 'uniform vec2 resolution;\r\nuniform float time;\r\n\r\nvoid main()\t{\r\n\r\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\r\n\tfloat a = time*40.0;\r\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\r\n\te=400.0*(p.x*0.5+0.5);\r\n\tf=400.0*(p.y*0.5+0.5);\r\n\ti=200.0+sin(e*g+a/150.0)*20.0;\r\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\r\n\tr=sqrt(pow(i-e,2.0)+pow(d-f,2.0));\r\n\tq=f/r;\r\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\r\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\r\n\th=((f+d)+a/2.0)*g;\r\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\r\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\r\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\r\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\r\n\ti=mod(i/5.6,256.0)/64.0;\r\n\tif(i<0.0) i+=4.0;\r\n\tif(i>=2.0) i=4.0-i;\r\n\td=r/350.0;\r\n\td+=sin(d*d*8.0)*0.52;\r\n\tf=(sin(a*g)+1.0)/2.0;\r\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\r\n\r\n}'};_=gxc.prototype=fxc.prototype=new Jb;_.gC=function hxc(){return BI};_.Yb=function ixc(){return 'void main()\t{\r\n\r\n\tgl_Position = vec4( position, 1.0 );\r\n\r\n}'};var YG=mfb(XOc,'MaterialsShaderMonjori$DemoScene',XD),DI=mfb($Oc,'MonjoriShader',eB),CI=mfb($Oc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',Nx),AI=mfb($Oc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',Nx),BI=mfb($Oc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',Nx);xLc(Wd)(31);