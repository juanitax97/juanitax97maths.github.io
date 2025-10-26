---
layout: page
title: Gradient de l'inverse et du det et application
permalink: /exercices/exercice4/
---

## Exercice 4 (ltffp p.25, Bach)

1. Let $\phi : Gl_n(\mathbb{R}) \to Gl_n(\mathbb{R}), A \mapsto A^{-1}$. Show that $$d\phi(A)(H) = -A^{-1}HA^{-1}$$.
2. Let $A$ be a symmetric matrix. Show that the gradient of the function $M \mapsto \text{tr}(AM^{-1})$, defined on invertible symmetric matrices, is equal to $M \mapsto -M^{-1}AM^{-1}$. 
3. Show that the gradient of the determinant of $A \in Gl_n(\mathbb{R})$ is $\text{com}(A)^T$
4. Show that the gradient of $M \mapsto \log \det(M)$ is $M \mapsto M^{-1}$.
\end{exo}

---

:::correction 
1. Calculer le grandient en I et remarquer que $(I+H)(I-H+H^2 + \cdots) = I$
2. Soit $\phi : M \mapsto \text{tr}(AM^{-1})$. On voit que $\phi = f\circ g$ où $f : B \mapsto \text{tr}(AB)$ et $g : C \mapsto C^{-1}$. $f$ est linéaire donc sa différentielle est elle même, et classiquement $Dg(M)(H)=-M^{-1}HM^{-1}$. Ainsi,

$$\begin{align}
    d\phi(M)(H) &= Df(g(M))(Dg(M)(H))\\
                &= \text{tr}(A(-M^{-1}HM^{-1}))\\
                &= \langle -\left((M^{-1})^TAM^{-1}\right)^T , H \rangle
\end{align}$$

où on utilise dans la dernière ligne la commutativité du produit matricielle sous la trace, ce qui permet de conclure par la symétrie de M et A que $\nabla \phi(M) = -M^{-1}AM^{-1}$.
3. Utiliser la colinéarité du det
4. Soit $\psi : M \mapsto \log \text{det}(M)$. On pose $\psi = \log \circ \text{det}$ et en utilisant la différentielle $D\text{det}(A)(H) = \text{tr}(\text{com}(A)^TH)$ on obtient

$$\begin{align}
    D\psi(M)(H) &= D\log (\text{det}(M))(D\text{det}(M)(H)) \\
                &= \text{det}(M)^{-1}\text{tr}(\text{com}(A)^TH)
\end{align}$$

ce qui permet de conclure en utilisant la formule $A^{-1} = det(A)^{-1}\text{com}(A)^T$

:::

---
