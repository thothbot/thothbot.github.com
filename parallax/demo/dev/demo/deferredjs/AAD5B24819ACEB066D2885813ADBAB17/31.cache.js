function vmc(){}
function swc(){}
function Bwc(){}
function ywc(){}
function Gwc(){}
function Fwc(){}
function Kwc(){}
function Jwc(){}
function wmc(){j7b.call(this)}
function twc(){GEb.call(this,(xwc(),wwc))}
function xwc(){xwc=KKc;wwc=new Bwc}
function Nwc(){Nwc=KKc;zwc=new Gwc}
function Owc(){Owc=KKc;Awc=new Kwc}
_=qmc.prototype;_.wb=function umc(){f7b(this.c,new wmc(this.b))};_=wmc.prototype=vmc.prototype=new i7b;_.gC=function xmc(){return SG};_.Gd=function ymc(a){ySb(Mq(Mq(this.c.b[HPc],166).e,192),a.b.p);zSb(Mq(Mq(this.c.b[HPc],166).e,192),a.b.o)};_.nb=function zmc(){var a,b;lp((_ub(),$ub),(kvb(),jvb),this);this.b=new MMb;this.b.X.c=1;a=new p4b(new twc);this.c=q_b(a).j;b=new b5b(new ZXb(2,2),a);kMb(this.E,b)};_.ob=function Amc(a){CJb(Mq(this.c.b[LPc],166),new _eb(Mq(Mq(this.c.b[LPc],166).e,95).b+0.05));jDb(this.D.o,this.E,this.b,null,false)};_.cM={38:1,131:1};_.b=null;_.c=null;_=twc.prototype=swc.prototype=new sEb;_.gC=function uwc(){return xI};_.Jd=function vwc(){vEb(this,LPc,new EJb((YJb(),KJb),new _eb(1)));vEb(this,HPc,new EJb(SJb,new ASb))};_.cM={164:1};var wwc;_=Bwc.prototype=ywc.prototype=new Jb;_.gC=function Cwc(){return wI};_.Md=function Dwc(){return Nwc(),zwc};_.Nd=function Ewc(){return Owc(),Awc};var zwc=null,Awc=null;_=Gwc.prototype=Fwc.prototype=new Jb;_.gC=function Hwc(){return uI};_.Yb=function Iwc(){return 'uniform vec2 resolution;\r\nuniform float time;\r\n\r\nvoid main()\t{\r\n\r\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\r\n\tfloat a = time*40.0;\r\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\r\n\te=400.0*(p.x*0.5+0.5);\r\n\tf=400.0*(p.y*0.5+0.5);\r\n\ti=200.0+sin(e*g+a/150.0)*20.0;\r\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\r\n\tr=sqrt(pow(i-e,2.0)+pow(d-f,2.0));\r\n\tq=f/r;\r\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\r\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\r\n\th=((f+d)+a/2.0)*g;\r\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\r\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\r\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\r\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\r\n\ti=mod(i/5.6,256.0)/64.0;\r\n\tif(i<0.0) i+=4.0;\r\n\tif(i>=2.0) i=4.0-i;\r\n\td=r/350.0;\r\n\td+=sin(d*d*8.0)*0.52;\r\n\tf=(sin(a*g)+1.0)/2.0;\r\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\r\n\r\n}'};_=Kwc.prototype=Jwc.prototype=new Jb;_.gC=function Lwc(){return vI};_.Yb=function Mwc(){return 'void main()\t{\r\n\r\n\tgl_Position = vec4( position, 1.0 );\r\n\r\n}'};var SG=Qeb(uOc,'MaterialsShaderMonjori$DemoScene',RD),xI=Qeb(xOc,'MonjoriShader',$A),wI=Qeb(xOc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',Hx),uI=Qeb(xOc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',Hx),vI=Qeb(xOc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',Hx);_Kc(Wd)(31);