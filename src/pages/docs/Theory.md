## Confidence Intervals

A confidence interval (CI) indicates that you are confident to a certain degree that the observed value of your metric would fall within the given range.

The probability that the observed metric would take on different values is encoded in a probability distribution. A histogram visualizes a distribution with the likelihood of observing certain values (y-axis) against those values (x-axis).

Guesstimate can translate your intuitive CI to some common distributions. This is covered in the 'Modeling' section.

## Monte Carlo Simulations

Guesstimate uses [Monte Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method) techniques to produce our results. The Monte Carlo method involves repeatedly sampling the underlying probability distributions of a random variable and performing all calculations involving that random variable many times, with those sampled values. The Monte Carlo method is a brute force, random process of approximating the true, resulting distribution.

For example, if you wanted to compute the value of X×YX \\times YX×Y, where XXX and YYY are random variables (such as Guesstimate cells whose inputs are ranges, or data streams), then using the Monte Carlo method you would compute many sample values for XXX and many sample values for YYY, then multiply those samples together pairwise to produce the output distribution for X×YX \\times YX×Y.

Within Guesstimate, 5000 samples are performed per stochastic expression. 5000 is enough to be useful for most estimates, but not enough to slow the system down. In the future, this amount may be variable depending on the need and circumstances.
