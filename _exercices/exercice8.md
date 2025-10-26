---
layout: page
title: Rademacher complexity and estimation error in learning
tag : [mcdiarmid, learning]
permalink: /exercices/exercice8/
---

## Exercice 8

# partie 1 : rademacher complexity
Let $Z_1, \cdots Z_n, Z \in \mathcal{Z}$ be iid random variables and $\mathcal{H}$ be a class of functions from $\mathcal{Z}$ to $\mathbb{R}$
We define the Rademacher Complexity of the class of funcitons $\mathcal{H}$ as follow : 
$$\mathbb{R_n}(\mathcal{H}) = \mathbb{E} \left[ \text{sup}_{h \in \mathcal{H}} \frac{1}{n}\sum_{i=1}^n \epsilon_i h(Z_i) \right]$$
where $\epsilon_i \sim R(1/2)$ for all $i=1, \cdots n$, are Rademacher random variables.
1. (Symetrization). Show that
$$ \mathbb{E} [ \text{sup}_{h \in \mathcal{H}} \{ \frac{1}{n}\sum_{i=1}^n h(Z_i) - \mathbb{E}[h(Z)] \}] \leq \mathbb{R_n}(\mathcal{H})$$
2. (Contraction principle). Let $a_i : \Theta \to \mathbb{R}$ be any functions and $\phi_i : \mathbb{R} \to \mathbb{R}$ be 1-lipshitz functions and $\epsilon_i \sim R(1/2)$ be Rademacher variables for $i=1, \cdots, n$. Show that 
$$\mathbb{E}[ \text{sup}_{\theta \in \Theta} \{ \sum_{i=1}^n \epsilon_i \phi_i(a_i(\theta)) \}] \leq \mathbb{E}[ \text{sup}_{\theta \in \Theta} \{ \sum_{i=1}^n \epsilon_i a_i(\theta) \}]$$

# partie 2 : application to learning

Let $\mathcal{F}$ be a space of functions. Here we suppose $Z=(X,Y)$ and $Z_i = (X_i,Y_i)$ for all $i=1, \cdots, n$ and $\mathcal{H} = {(x,y) \mapsto l(y,f(x)), f \in \mathcal{F}}$ where $l$ be a loss function bounded by $l_\infty$ and G-liphitz along the second variable. As usual in learning we define $\mathcal{R}(f) = \mathbb{E}[l(Y,f(X))]$ and 
$$f_n \in \text{argmin}_{f \in \mathcal{F}} \hat{\mathcal{R_n}}(f)$$
 where 
$$\hat{\mathcal{R_n}}(f) := \frac{1}{n} \sum_{i=1}^n l(Y_i, f(X_i))$$ 
is the empirical risk.

3. Show that 
$$\mathcal{R}(\hat{f_n}) - \inf_{f\in \mathcal{F}} \mathcal{R} (f) \leq \text{sup}_{f \in \mathcal{F}} \{\mathcal{R}(f) - \hat{\mathcal{R_n}}(f)\} + \text{sup}_{f \in \mathcal{F}} \{\hat{\mathcal{R_n}}(f) -\mathcal{R}(f)\} $$
4. Show that $$\mathbb{R_n}(\mathcal{H}) \leq G \mathbb{R_n}(\mathcal{F})$$
5. Deduce that 
$$\mathbb{E} [\mathcal{R}(\hat{f_n})] - \inf_{f\in \mathcal{F}} \mathcal{R} (f) \leq 4G\mathbb{R_n}(\mathcal{F})$$
6. Let $$H : (z_1, \cdots , z_n) \mapsto \text{sup}_{f \in \mathcal{F}} \{\frac{1}{n} \sum_{i=1}^n l(y_i,f(x_i)) -\mathcal{R}(f)\}$$. Show that 
$$\text{sup}_{z_1, \cdots z_n  \in \mathcal{Z}, z_i' \in \mathcal{Z}} | H(z_1, \cdots z_i \cdots z_n) - H(z_1, \cdots z_i' \cdots z_n)| \leq l_\infty / n$$ for all $i=1, \cdots n$
7. Deduce that for any $0< \delta < 1$, with probability at least $1 - \delta$ we have :
$$\mathcal{R}(\hat{f_n}) - \inf_{f\in \mathcal{F}} \mathcal{R} (f) \leq 4G\mathbb{R_n}(\mathcal{F}) + \frac{l_\infty}{\sqrt{n}}\sqrt{2\log(\frac{2}{\delta})}$$ (hint : use macdiarmid's inequality !)



---

:::correction 



:::

---