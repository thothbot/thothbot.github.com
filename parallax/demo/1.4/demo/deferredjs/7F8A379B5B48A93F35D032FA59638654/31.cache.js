function Woc(){}
function $oc(){}
function bpc(){}
function shc(){B5b.call(this)}
function Poc(){GFb.call(this,(Soc(),Roc))}
function Soc(){Soc=Dzc;Roc=new Woc}
function dpc(){dpc=Dzc;Uoc=new $oc}
function epc(){epc=Dzc;Voc=new bpc}
hS(1108,1,iBc);_.Cb=function qhc(){y5b(this.c,new shc(this.b))};hS(1109,940,fBc,shc);_.Id=function thc(a){H1b(Fu(Fu(rOb(this.c,xHc),174).e,245),a.b.Y);I1b(Fu(Fu(rOb(this.c,xHc),174).e,245),a.b.X)};_.nb=function uhc(){var a,b;tt((Xub(),Wub),(fvb(),evb),this);this.b=new tMb;t2b(this.b.ab,1);a=new N$b(new Poc);this.c=KVb(a).j;b=new U3b(new eTb(2,2),a);VLb(this.G,b)};_.ob=function vhc(a){zJb(Fu(rOb(this.c,AHc),174),new ihb(Fu(Fu(rOb(this.c,AHc),174).e,98).b+0.05));cEb(this.F.o,this.G,this.b,null,false)};hS(1236,713,WAc,Poc);_.Md=function Qoc(){uFb(this,AHc,new BJb((UJb(),GJb),new ihb(1)));uFb(this,xHc,new BJb(OJb,new J1b))};var Roc;hS(1237,1,{},Woc);_.Pd=function Xoc(){return dpc(),Uoc};_.Qd=function Yoc(){return epc(),Voc};var Uoc,Voc;hS(1238,1,{},$oc);_.ec=function _oc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(i-e,2.0)+pow(d-f,2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}'};hS(1239,1,{},bpc);_.ec=function cpc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var sM=Ygb(YFc,'MaterialsShaderMonjori$DemoScene',1109),QN=Ygb(RFc,'MonjoriShader',1236),PN=Ygb(RFc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1237),NN=Ygb(RFc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1238),ON=Ygb(RFc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1239);uBc(Gi)(31);