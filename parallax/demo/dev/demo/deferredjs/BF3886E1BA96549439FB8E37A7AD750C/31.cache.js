function izc(){}
function mzc(){}
function pzc(){}
function Vnc(){Lac.call(this)}
function bzc(){JJb.call(this,(ezc(),dzc))}
function szc(){szc=EQc;hzc=new pzc}
function ezc(){ezc=EQc;dzc=new izc}
function rzc(){rzc=EQc;gzc=new mzc}
PU(1158,1,nSc);_.zb=function Tnc(){lac(this.b,new Vnc(this.a))};PU(1159,972,kSc,Vnc);_.Gd=function Wnc(a){p6b(zu(zu(USb(this.b,IYc),227).d,298),a.a.Z);q6b(zu(zu(USb(this.b,IYc),227).d,298),a.a.Y)};_.nb=function Xnc(){var a,b;nt((jyb(),iyb),(tyb(),syb),this);this.a=new TQb;c7b(this.a._,1);a=new x3b(new bzc);this.b=p$b(a).i;b=new E8b(new GXb(2,2),a);tQb(this.H,b);p6b(zu(zu(USb(this.b,IYc),227).d,298),this.G.k.Z);q6b(zu(zu(USb(this.b,IYc),227).d,298),this.G.k.Y)};_.ob=function Ync(a){XNb(zu(USb(this.b,LYc),227),new qkb(zu(zu(USb(this.b,LYc),227).d,150).a+0.05));YHb(this.G.k,this.H,this.a,null,false)};PU(1344,730,aSc,bzc);_.Ld=function czc(){xJb(this,LYc,new ZNb((qOb(),cOb),new qkb(1)));xJb(this,IYc,new ZNb(kOb,new r6b))};var dzc;PU(1345,1,{},izc);_.Od=function jzc(){return rzc(),gzc};_.Pd=function kzc(){return szc(),hzc};var gzc,hzc;PU(1346,1,{},mzc);_.nc=function nzc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};PU(1347,1,{},pzc);_.nc=function qzc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var YM=ekb(pXc,'MaterialsShaderMonjori$DemoScene',1159),cP=ekb(iXc,'MonjoriShader',1344),bP=ekb(iXc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1345),_O=ekb(iXc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1346),aP=ekb(iXc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1347);BSc(xi)(31);