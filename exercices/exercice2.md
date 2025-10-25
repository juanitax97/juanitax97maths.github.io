---
layout: page
title: Estimation error with bounded loss and finite function family
permalink: /exercices/exercice2/
---

## Exercice

Let $X\in \mathcal{X}, Y \in \mathcal{Y}$ be random variables and $\mathcal{F} \subset \mathcal{X}^{\mathcal{Y}}$ be a finite family of functions. Let $l : \mathcal{Y} \times \mathcal{Y} \to \mathbb{R}$ be a loss function such that $$\text{sup}_{f \in \mathcal{F}} l(Y,f(X)) \leq l_\infty $$ as.
Let's define $\mathcal{R}(f) := \mathbb{E}[l(Y,f(X))]$ the risk and $\hat{\mathcal{R_n}} := \frac{1}{n} \sum_{i=1}^n l(Y_i, f(X_i))$ the empirical risk (where $(X_1, Y_1) \cdots (X_n,Y_n)$ iid with law of $(X,Y)$)

1. Show that for all $\delta \in ]0,1[$ and all $n$ large enough, with probability at least $1-\delta$, 
$$\text{sup}_{f \in \mathcal{F}} |\mathcal{R_n}(f) - \mathcal{R}(f)| \leq l_{\infty}\sqrt{\frac{\log(2|\mathcal{F}|)}{2n}} + \frac{l_{\infty}}{\sqrt{2n}}\sqrt{\log(1/\delta)}$$.
2. Show that 
$$\mathbb{E}[\text{sup}_{f \in \mathcal{F}}|\mathcal{R_n}(f) - \mathcal{R}(f)|] \leq l_{\infty}\sqrt{\frac{\log(2|\mathcal{F}|)}{2n}}$$

---

:::correction 
1. use hoeffding's concentration inequality
2. use hoeffding's lemma and the bound on the maximum of gaussian independant variables
:::

---

