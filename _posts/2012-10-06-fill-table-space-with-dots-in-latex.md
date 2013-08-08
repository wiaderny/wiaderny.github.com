---
layout: post
title: Fill table space with dots in LaTeX
published: true
exc: A quick note on filling the usual blank space in LaTeX tables with dots to create a vintage look.
---

While doing some work for the Physical Therapy Office I was faced with the challenge to fill the space within a table, more precisely the space within two rows, with dots.

![Fill table space with dots in LaTeX](../../assets/images/Fill-dots-in-LaTeX.png "Fill table space with dots in LaTeX")

<p>At first the answer was pretty obvious: the <code>\dottfill</code> command! But that will not work our properly, for there will remain margins on each side of every row, what will significantly compromise the aesthetics.</p>

<p>What needed to be done is to set the margins to zero on each side of every row. This has been achieved by modifying the <code>tabular</code> command. Usually your <code>tabular</code> command looks something like this</p>

{% highlight tex %}
\begin{tabular}{lll}
{% endhighlight %}

<p>when you want your rows to be left aligned. But in order to achieve the desired look we need to put an <code>@{}</code> in front of and at the end of each row, what will eliminate the margins.</p>

<p>The tabular command should now look like the one below.</p>

{% highlight tex %}
\begin{tabular}{@{}l@{}l@{}l@{}}</code></pre>
{% endhighlight %}

<p>Having this done, the rest should not constitute a challenge anymore. I have added my final code snippet of the invoice I made below.</p>

{% highlight tex %}
\begin{table}[h]
\begin{tabular}{@{}l@{}l@{}l@{}r@{}r@{}r@{}r@{}}
\toprule[1.2pt]

    Anzahl  &amp; \hspace{4.3em} &amp; Behandlungstyp &amp; 
    \multicolumn{1}{@{\hspace{7em}}r@{}}{} &amp; &amp; Einzelpreis &amp; 
    \multicolumn{1}{@{\hspace{9.8em}}r@{}}{Gesamtpreis}\\
 
    \midrule

    \multicolumn{2}{@{}l@{}}{\aa\dotfill} &amp; 
    \multicolumn{4}{@{}l@{}}{\ab\dotfill \ac} &amp; \dotfill \ad\\

    \multicolumn{2}{@{}l@{}}{\ba\dotfill} &amp; 
    \multicolumn{4}{@{}l@{}}{\bb\dotfill \bc} &amp; \dotfill \bd\\
        
            \ifdefined\ca
        
    \multicolumn{2}{@{}l@{}}{\ca\dotfill} &amp; 
    \multicolumn{4}{@{}l@{}}{\cb\dotfill \cc} &amp; \dotfill \cd\\
        
            \else
            \fi
            \ifdefined\da
    
    \multicolumn{2}{@{}l@{}}{\da\dotfill} &amp; 
    \multicolumn{4}{@{}l@{}}{\db\dotfill \dc} &amp; \dotfill \dd\\
        
            \else
            \fi
            
    \bottomrule[1.2pt]\addlinespace[5pt]

\multicolumn{7}{@{}l@{}}{Gesamtforderung\dotfill \gesamt}\\
\end{tabular}
\end{table}
{% endhighlight %}

<p>This small change in the <code>tabular</code> command will render, if properly implemented, the output at the top.</p>

