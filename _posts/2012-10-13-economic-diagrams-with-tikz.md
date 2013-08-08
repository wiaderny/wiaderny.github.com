---
layout: post
date: 2012-10-10 21:16:44
title: Economic Diagrams with TikZ
exc: TikZ lets you create really great diagrams for your scientific papers. The main difference compared to carelessly embedding images in your paper is that you will be creating vector images with TiKz, which are lossless scaleable, what means they won&#8217;t blur and you won&#8217;t see pixels when you scale them up.
---

LaTeX, or more precisely speaking <a href="http://www.ctan.org/pkg/pgf">TikZ</a>, lets you create really great diagrams for your economic papers. The main difference compared to carelessly embedding images in your document is that you will be creating vector images with TiKz, which are lossless scaleable, what means they won&#8217;t blur and you won&#8217;t see pixels when you scale them up. Another great point which makes me be in favor of vector graphics by TikZ is that they are more accurate compared to their now randomly appearing pixel brothers.

### The final product

Lately I was creating the diagram which I attached below. In this task I was focused primarily on some fine details, i.e. the arrowheads, the crosshatching, and the line thickness ratio.

![Economic diagram in LaTeX created with TikZ](http://f.cl.ly/items/3m2h0i3U2u1s243O3D1J/din-norm.jpg "Economic diagram in LaTeX created with TikZ")


Even if this diagram is just of qualitative and not of quantitative nature, it is any the less important for me to have correctly set arrowheads. I must admit at this point, that I consider diagrams which do not feature this detail, as of lacking accuracy. Well set heads, by contrast, demonstrate understanding of the Cartesian coordinate system, for they, being set at the end of each coordinate axis indicate the growth direction of the coordinate itself. A coordinate without correct arrowheads can therefore, in a very consequent way, be considered meaningless and vague.

### Custom arrowheads

In the first place it was necessary to customize the arrowheads which would be loaded using the default TikZ Library <code>arrows</code>. Beneath I have attached the necessary code to produce finer arrowheads.

{% highlight tex %}

%-------------------------------------------------------------
%       Call arrow library and declare arrowheads
%-------------------------------------------------------------

\usetikzlibrary{arrows}

\makeatletter
\pgfarrowsdeclare{dinarr}{dinarr}
   {
\pgfutil@tempdima=0.5pt%
\advance\pgfutil@tempdima by.25\pgflinewidth%
\pgfutil@tempdimb=7.29\pgfutil@tempdima\advance\pgfutil@tempdimb by.5\pgflinewidth%
\pgfarrowsleftextend{+-\pgfutil@tempdimb}
\pgfutil@tempdimb=.5\pgfutil@tempdima\advance\pgfutil@tempdimb by1.6\pgflinewidth%
\pgfarrowsrightextend{+\pgfutil@tempdimb}
   }
   {
\pgfutil@tempdima=0.5pt%
\advance\pgfutil@tempdima by.25\pgflinewidth%
\pgfsetdash{}{+0pt}
\pgfsetmiterjoin
\pgfpathmoveto{\pgfpointadd{\pgfqpoint{0.5\pgfutil@tempdima}{0pt}}%
{\pgfqpoint{-3mm}{0.5mm}}}
\pgfpathlineto{\pgfqpoint{0.5\pgfutil@tempdima}{0\pgfutil@tempdima}}
\pgfpathlineto{\pgfpointadd{\pgfqpoint{0.5\pgfutil@tempdima}{0pt}}%
{\pgfqpoint{-3mm}{-0.5mm}}}
\pgfpathclose
\pgfusepathqfillstroke
   }
\pgfarrowsdeclarereversed{dinarr reversed}{dinarr reversed}{dinarr}{dinarr}
\makeatother

{% endhighlight %}

These arrowheads can be of course altered to specific needs, but this code snippet will produce - if properly inserted - arrowheads which have .5mm in height and 3mm in length. You can alter their appearance by changing the values in <code>\pgfqpoint{-3mm}{0.5mm}</code> and its counterpart two lines below. If you are happy with the appearance you can use them as usual with a command like <code>\draw[-dinarr]</code>.

### Custom hatching

Creating a neat hatching was the next task which I was up to. I wanted the hatching to be vertically aligned and 1mm apart. The code was again customized after the <code>pattern</code> library was called.

{% highlight tex %}

%-------------------------------------------------------------
%       Call some libraries and declare vertical hatchings      
%-------------------------------------------------------------
\usetikzlibrary{patterns,calc,intersections}

\pgfdeclarepatternformonly{dinhatch}{\pgfpointorigin}{\pgfqpoint{1mm}%
{100pt}}{\pgfqpoint{1mm}{100pt}}
{
  \pgfsetlinewidth{0.4pt}
  \pgfpathmoveto{\pgfqpoint{0.5pt}{0pt}}
  \pgfpathlineto{\pgfqpoint{0.5pt}{100pt}}
  \pgfusepath{stroke}
}

{% endhighlight %}

### What&#8217;s next?

Having this done, I was ready to finally draw some lines with LaTeX and TikZ. Well, not really. There were still some styles to define, i.e. intercept points, labels, etc. I will continue this note, when I have some more spare time and possibly upload the <code>.tex</code> file as well.
