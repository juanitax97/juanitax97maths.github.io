---
layout: page
title: Kolmogorov's inequality 
tag : [martingale, chebyshev]
permalink: /exercices/exercice7/
---

# Exercice 7 

Let $X_1, \ldots, X_n : \Omega \to \mathbb{R} $ be independent random variables defined on a common probability space $\Omega, \mathcal{F}, \Pr $, with expected value  
$\mathbb{E}[X_k] = 0$ and variance $\operatorname{Var}[X_k] < +\infty$ for $k = 1, \ldots, n.$

Then, for each $\lambda > 0$,

$$
\Pr\left( \max_{1 \le k \le n} |S_k| \ge \lambda \right)
  \le \frac{1}{\lambda^2} \operatorname{Var}[S_n]
  \equiv \frac{1}{\lambda^2} \sum_{k=1}^n \operatorname{Var}[X_k]
  = \frac{1}{\lambda^2} \sum_{k=1}^n \mathbb{E}[X_k^2],
$$

where \( S_k = X_1 + \cdots + X_k.\)

---

The convenience of this result is that we can **bound the worst-case deviation of a random walk** at any point in time using its value at the **end of the time interval**.


---

:::correction 

The following argument employs **discrete martingales**.  
As argued in the discussion of Doob's martingale inequality, the sequence  
$S_1, S_2, \ldots, S_n$ is a martingale.  

Define $(Z_i)_{i=0}^n$ as follows.  
Let $Z_0 = 0$, and

$$
Z_{i+1} =
\begin{cases}
S_{i+1}, & \text{if } \max_{1 \le j \le i} |S_j| < \lambda, \\
Z_i, & \text{otherwise.}
\end{cases}
$$

for all $i$.  
Then $(Z_i)_{i=0}^n$ is also a martingale.

For any martingale $M_i$ with $M_0 = 0$, we have that

$$
\sum_{i=1}^n \mathbb{E}\!\left[(M_i - M_{i-1})^2\right]
= \sum_{i=1}^n \mathbb{E}\!\left[M_i^2 - 2M_i M_{i-1} + M_{i-1}^2\right]
= \sum_{i=1}^n \mathbb{E}\!\left[M_i^2 - M_{i-1}^2\right]
- 2\mathbb{E}\!\left[M_{i-1}(M_i - M_{i-1})\right].
$$

Since $\mathbb{E}[M_i - M_{i-1} \mid \mathcal{F}_{i-1}] = 0$, the last term vanishes, and we obtain

$$
\sum_{i=1}^n \mathbb{E}\!\left[(M_i - M_{i-1})^2\right]
= \mathbb{E}[M_n^2] - \mathbb{E}[M_0^2]
= \mathbb{E}[M_n^2].
$$

Applying this result to the martingale $(S_i)_{i=0}^n$, we have

$$
\Pr\!\left( \max_{1 \le i \le n} |S_i| \ge \lambda \right)
= \Pr\!\left( |Z_n| \ge \lambda \right)
\le \frac{1}{\lambda^2} \mathbb{E}[Z_n^2]
= \frac{1}{\lambda^2} \sum_{i=1}^n \mathbb{E}[(Z_i - Z_{i-1})^2]
\le \frac{1}{\lambda^2} \sum_{i=1}^n \mathbb{E}[(S_i - S_{i-1})^2]
= \frac{1}{\lambda^2} \mathbb{E}[S_n^2]
= \frac{1}{\lambda^2} \operatorname{Var}[S_n].
$$

proof by wikipedia

:::

---