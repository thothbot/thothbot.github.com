function $yc(){}
function czc(){}
function fzc(){}
function Lnc(){Eac.call(this)}
function Tyc(){CJb.call(this,(Wyc(),Vyc))}
function Wyc(){Wyc=uQc;Vyc=new $yc}
function hzc(){hzc=uQc;Yyc=new czc}
function izc(){izc=uQc;Zyc=new fzc}
GU(1158,1,cSc);_.zb=function Jnc(){eac(this.b,new Lnc(this.a))};GU(1159,973,_Rc,Lnc);_.Fd=function Mnc(a){i6b(qu(qu(NSb(this.b,mYc),227).d,298),a.a.Z);j6b(qu(qu(NSb(this.b,mYc),227).d,298),a.a.Y)};_.nb=function Nnc(){var a,b;ft((cyb(),byb),(myb(),lyb),this);this.a=new MQb;X6b(this.a._,1);a=new q3b(new Tyc);this.b=i$b(a).i;b=new x8b(new zXb(2,2),a);mQb(this.H,b);i6b(qu(qu(NSb(this.b,mYc),227).d,298),this.G.k.Z);j6b(qu(qu(NSb(this.b,mYc),227).d,298),this.G.k.Y)};_.ob=function Onc(a){QNb(qu(NSb(this.b,pYc),227),new jkb(qu(qu(NSb(this.b,pYc),227).d,150).a+0.05));RHb(this.G.k,this.H,this.a,null,false)};GU(1344,731,RRc,Tyc);_.Kd=function Uyc(){qJb(this,pYc,new SNb((jOb(),XNb),new jkb(1)));qJb(this,mYc,new SNb(dOb,new k6b))};var Vyc;GU(1345,1,{},$yc);_.Nd=function _yc(){return hzc(),Yyc};_.Od=function azc(){return izc(),Zyc};var Yyc,Zyc;GU(1346,1,{},czc);_.mc=function dzc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};GU(1347,1,{},fzc);_.mc=function gzc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var PM=Zjb(VWc,'MaterialsShaderMonjori$DemoScene',1159),VO=Zjb(OWc,'MonjoriShader',1344),UO=Zjb(OWc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1345),SO=Zjb(OWc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1346),TO=Zjb(OWc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1347);qSc(xi)(31);