---
layout: page
title: Azumas's inequality
permalink: /exercices/exercice5/
---

# Exercice 5 (ltffp 1.14, Bach)

Assume that the sequence of random variables $$(Z_i)_{i \geq 0}$$ satisfies $$\mathbb{E}(Z_i \mid \mathcal{F}_{i-1}) = 0$$ for an increasing sequence of increasing "$\sigma$-fields" $$(\mathcal{F}_i)_{i \geq 0}$$, and $$|Z_i| \leq c_i$$ almost surely, for $i \geq 1$. Show that
$$
\mathbb{P}\left(\frac{1}{n} \sum_{i=1}^n Z_i \geq t\right) \leq \exp\left(\frac{-n^2 t^2}{2(c_1^2 + \cdots + c_n^2)}\right).
$$

---

:::correction 

On utilise le procédé de chernoff cramer.
$$
\begin{align*}
    P(\frac{1}{n}\sum_{i=1}^n Z_i \geq t) &= P(\exp(s\frac{1}{n}\sum_{i=1}^n Z_i)\geq \exp(st))\\
            &\leq E(\exp(s\frac{1}{n}\sum_{i=1}^n Z_i))\exp(-st) \quad \text{(markov)}
\end{align*}$$

En utilisant que $E(E(X|\mathcal{B})) = E(X)$ et le fait que si $Z$ est $\mathcal{B}$-mesurable, alors $E(ZX|\mathcal{B}) = ZE(X|\mathcal{B})$, on en déduit que 
$$
\begin{align*}
    E\left[\exp(s\frac{1}{n}\sum_{i=1}^n Z_i)\right] &= E\left[E\left[\exp(s\frac{1}{n}\sum_{i=1}^n Z_i)|\mathcal{F}_{n-1}\right]\right] \\
    &= E\left[\exp(s\frac{1}{n}\sum_{i=1}^{n-1} Z_i) E\left[\exp(s\frac{1}{n}Z_n)|\mathcal{F}_{n-1}\right]\right]
\end{align*}$$

Or, sachant $\mathcal{F}_{n-1}$ l'espérance de $Z_n$ est nulle et $|Z_n| \leq c_i$ presque surement ie $Z_n \in [-c_i;c_i]$ p.s. Donc en appliquant le lemme d'hoffding qui nous dit que si $Z \in [a;b]$ p.s alors $E(\exp(Z-E(Z))) \leq \exp(s^2(a-b)^2/8)$, on obtient que 
$$
\begin{align*}
    E\left[\exp(s\frac{1}{n}Z_n)|\mathcal{F}_{n-1}\right] &= E\left[\exp(\frac{s}{n}Z_n)|\mathcal{F}_{n-1}\right] \\
            &\leq \exp(\frac{s^2(2c_n)^2}{n^28})\\
            &= \exp(\frac{s^2c_n^2}{2n^2})
\end{align*}
$$

ainsi, en itérant le processus, 
$$\begin{align*}
E\left[\exp(s\frac{1}{n}\sum_{i=1}^{n-1} Z_i) E\left[\exp(s\frac{1}{n}Z_n)|\mathcal{F}_{n-1}\right]\right] 
&\leq \exp(\frac{s^2c_n^2}{2n^2})E\left[\exp(\frac{s}{n}\sum_{i=1}^{n-1} Z_i)\right]\\
&= \exp(\frac{s^2c_n^2}{2n^2}) E\left[\exp(\frac{s}{n}\sum_{i=1}^{n-2} Z_i) E\left[\exp(\frac{s}{n}Z_{n-1})|\mathcal{F}_{n-2}\right]\right] \\
&\leq \exp(\frac{s^2c_n^2}{2n^2}) \exp(\frac{s^2c_{n-1}^2}{n^28})E\left[\exp(\frac{s}{n}\sum_{i=1}^{n-2} Z_i)\right]\\
& \quad\vdots\\
&\leq  \exp(\frac{s^2}{2n^2} \sum_{i=1}^n c_i^2)
\end{align*}$$
Et ainsi $P(\frac{1}{n}\sum_{i=1}^n Z_i \leq t)\leq \exp(\frac{s^2}{2n^2} \sum_{i=1}^n c_i^2-st)$. On pose $\gamma = \sum c_i^2$. Le minimum du deuxième terme est atteint en $s= \frac{t2n^2}{2\gamma} = \frac{tn^2}{\gamma} $ et ainsi
$$\begin{align*}
    P(\frac{1}{n}\sum_{i=1}^n Z_i \leq t) &\leq \exp(\frac{t^2n^2}{2\gamma}-\frac{t^2n^2}{\gamma})\\
            &= \exp(-\frac{t^2n^2}{2\sum c_i^2})
\end{align*}$$

proof by junitax

:::

---
