---
layout: page
title: Gaussian inequality (1.12 ltffp)
tag : [gaussian, concentration inequality, markov, hoeffding]
permalink: /exercices/exercice6/
---

# Exercice 6

For $X$ a Gaussian random variable with mean $0$ and variance $1$, show that for $t \geq 0$,
$$\frac{1}{4} \exp(-t^2) \leq \mathbb{P}(X \geq t) \leq \exp(-t^2/2).$$

---

:::correction 

majoration : 
méthode 1 : 
Soit $\phi: t \mapsto P(X \geq t)-\exp(-t^2/2)$. Etudions cette fonction. Elle est dérivable, 
$$
\begin{align*}
    \phi'(t) &= -\frac{1}{\sqrt{2\pi}} \exp(-t^2/2) + t\exp(-t^2/2)\\
            &= \exp(-t^2/2)(t - \frac{1}{\sqrt{2\pi}})
\end{align*}
$$
$\phi'$ est donc négative puis positive sur $[0; +\infty[$, donc $\phi$ est décroissante puis croissante. Elle est donc majorée par $\text{max}(\phi(0),\phi(+\infty))$. $$\phi(0) = P(X \geq 0) - \exp(-0^2/2) = 1/2-1 = 1/2$$ et $\phi(+\infty) = P(X \geq +\infty) - \exp(-(+\infty)^2/2) = 0 $ et donc $\phi \leq 0$ sur $R_+$

methode 2:
Comme dans hoeffding, on prend un $s$ positif et on applique markov a $\exp(sX)$ puis on utilise le fait que la génératrice des moments d'une normale $X \sim N(\mu,\sigma^2)$ est donnée par $M_X(s) = e^{s\mu + \frac{1}{2}\sigma^2s^2}$ ce qui donne pour tout $s>0$: 
$$
\begin{align*}
    P(X \geq t) &= P(e^{sX} \geq e^{st})\\
                &\leq E(e^{sX})e^{-st}\\
                &=e^{\frac{s^2}{2}}e^{-st}
\end{align*}
$$
et comme $s \mapsto \frac{t^2}{2} -st$ atteint son min en $s=t$, on choisi donc $s=t$ pour obtenir l'inégalité la plus précise, ce qui donne que $$P(X \geq t) \leq e^{-t^2/2}$$.

minoration : 
Soit $\psi: t \mapsto P(X \geq t)-\frac{1}{4}\exp(-t)$. $\psi$ est deux fois dérvable.
$$
\begin{align*}
    \psi'(t) &= -\frac{1}{\sqrt{2\pi}} \exp(-t^2/2) + \frac{t}{2}\exp(-t^2)\\
            &= \exp(-t^2/2)(\frac{t}{2}\exp(-t^2/2) - \frac{1}{\sqrt{2\pi}})
\end{align*}
$$

or la fonction $t \mapsto \frac{t}{2}\exp(-t^2/2) - \frac{1}{\sqrt{2\pi}}$ atteint son max en $1$ sur $[0;+\infty[$ (en étudiant cette fonction) et elle vaut $\approx -0.09$ quand $t=1$. On en déduit que $\psi' <0$ sur $R_+$ et que $\psi$ est donc décroissante. Or $\psi(+\infty) = P(X \geq +\infty) - \frac{1}{4}\exp(-(+\infty)^2) = 0$ et donc $\psi \geq 0$ sur $R_+$

:::

---