---
layout: page
title: Loi des estimateur de moyenne et variance
permalink: /exercices/exercice3/
---

## Exercice 3

Soient $X_1,\cdots, X_n$ un échantillon de loi $N(\mu,\sigma^2)$. On défini :
$$\overline{X_n} = \frac{1}{n}\sum_{i=1}^n X_i \quad \quad ; \quad \quad \widehat{S_n^2} = \frac{1}{n-1} \sum (X_i-\overline{X_n})^2$$
1. Montrer que $\widehat{S_n^2}$ et $\overline{X_n}$ sont indépendantes. 
2. Montrer que 
$$\overline{X_n} \sim \mathcal{N}(\mu, \sigma^2/n) \quad \text{et} \quad \frac{(n-1)}{\sigma^2}\widehat{S_n^2} \sim \chi^2(n-1)$$

---

:::correction 
Soit 
$$X = \begin{pmatrix} X_1 \\ \vdots \\ X_n\end{pmatrix}$$ on pose 
$$Y = \frac{1}{\sigma}\begin{pmatrix} X_1 - \mu \\ \vdots \\ X_n-\mu\end{pmatrix}$$. C'est un vecteur de loi $N(0,I_n)$. Soit $$u = \begin{pmatrix} 1/\sqrt{n} \\ \vdots \\ 1/\sqrt{n}\end{pmatrix}$$. Ce vecteur est de norme 1. Considérons $P_u$ le projeté orthogonal sur $u$
$$P_u(Y) = \langle u,Y \rangle u =  \frac{1}{\sqrt{n}}\sum_{i=1}^n Y_i\begin{pmatrix} 1/\sqrt{n} \\ \vdots \\ 1/\sqrt{n}\end{pmatrix} = \begin{pmatrix} \overline{Y_n} \\ \vdots \\ \overline{Y_n}\end{pmatrix} = \frac{1}{\sigma}\begin{pmatrix} \overline{X_n}-\mu \\ \vdots \\ \overline{X_n}-\mu\end{pmatrix}$$
Par ailleurs, comme $P_{u^\perp} = Id - P_u$, on obtient:
$$ P_{u^\perp}(Y) = \frac{1}{\sigma}\begin{pmatrix} X_1 - \mu \\ \vdots \\ X_n-\mu\end{pmatrix} - \frac{1}{\sigma}\begin{pmatrix} \overline{X_n}-\mu \\ \vdots \\ \overline{X_n}-\mu\end{pmatrix} = \frac{1}{\sigma}\begin{pmatrix} X_1-\overline{X_n} \\ \vdots \\ X_n -\overline{X_n}\end{pmatrix}$$
Ainsi, on obtient que $||P_u(Y)||^2 = \frac{n}{\sigma^2}(\overline{X_n}-\mu)^2$ et $||P_{u^\perp}(Y)||^2 = \frac{n-1}{\sigma^2}\widehat{S_n^2}$. Grâce au deuxième point de cochran appliqué au vecteur gaussien $Y$ avec la décomposition $E = u \oplus^\perp u^\perp$ on sait que $||P_u(Y)||^2$ et $||P_{u^\perp}(Y)||^2$ sont indépendant, et donc que $\frac{n}{\sigma^2}(\overline{X_n}-\mu)^2$ et $\frac{n-1}{\sigma^2}\widehat{S_n^2}$ sont indépendant, ce qui signifie bien que $\overline{X_n}$ et $\widehat{S_n^2}$ sont independantes. Par ailleurs, cochran nous dit que $||P_{u^\perp}(Y)||^2 \sim \chi^2(n-1)$ car $\text{dim}(\text{vect}(u)^\perp) = n-1$, ce qui nous donne que $\frac{n-1}{\sigma^2}\widehat{S_n^2} \sim \chi^2(n-1)$
:::

---
