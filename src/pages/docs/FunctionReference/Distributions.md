# Distributions

Guesstimate supports a variety of statistical distributions beyond those selectable from confidence intervals. If the input parameters to these distribution functions are deterministic, 5000 samples will be generated at those parameter values. If the inputs are themselves sampled, one sample will be drawn, per input sample.

Distribution Name

Use Cases

Syntax

[Beta](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Beta_distribution)

Estimating Proporitions or Percentages

`=beta`(α,β)(\\alpha, \\beta)(α,β)

[Central F](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/F-distribution)

Testing the Variance of Observed Samples

`=centralF`(d1,d2)(d_1, d_2)(d​1​​,d​2​​)

[Cauchy](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Cauchy_distribution)

The x-intercept of a ray with uniformly distributed angle

`=cauchy`(x0,γ)(x_0, \\gamma)(x​0​​,γ)

[Chi-squared](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Chi-squared_distribution)

The sum of the squares of normal random variables

`=chisquare`(k)(k)(k)

[Exponential](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Exponential_distribution)

The waiting time until the occurence of a rare event with a specified rate.

`=exponential`(λ)(\\lambda)(λ)

[Gamma](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Gamma_distribution)

A generalization of the sum of exponential random variables

`=gamma`(k,θ)(k, \\theta)(k,θ)

[Inverse-gamma](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Inverse-gamma_distribution)

The reciprocal of a gamma random variable

`=invgamma`(α,β)(\\alpha, \\beta)(α,β)

[Lognormal](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Lognormal_distribution)

The product of many positive, independent random variables

`=lognormal`(μ,σ)(\\mu, \\sigma)(μ,σ)

[Normal](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Normal_distribution)

The sum of many independent random variables

`=normal`(μ,σ)(\\mu, \\sigma)(μ,σ)

[Student's T](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Student%27s_t-distribution)

An estimator for the difference between the true mean and the mean of N independent samples of a random variable, for small N.

`=studentt`(ν)(\\nu)(ν)

[Weibull](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Weibull_distribution)

The lifetime of a component for which failure rate is proportional to time

`=weibull`(λ,k)(\\lambda, k)(λ,k)

[Uniform (continuous)](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)

An estimate where all equally sized uniforms have the same likelihood

`=uniform`(a,b)(a,b)(a,b)

[Bernoulli](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Bernoulli_distribution)

The value 1 (success) with probability ppp, and 0 (failure) otherwise. Used for accounting for discrete trials.

`=bernoulli`(p)(p)(p), `=test`(p)(p)(p)

[Binomial](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Binomial_distribution)

The sum of nnn independent Bernoulli distributions with parameter ppp

`=binomial`(n,p)(n,p)(n,p)

[Negative Binomial](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Negative_binomial_distribution)

The number of success before rrr failures is reached in a series of Bernoulli trials with parameter ppp

`=negBinomial`(r,p)(r,p)(r,p)

[Poisson](https://web.archive.org/web/20201111214405/https://en.wikipedia.org/wiki/Poisson_distribution)

The number of events occurring in a fixed interval, with known average rate λ\\lambdaλ, if events occur independently.

`=poisson`(λ)(\\lambda)(λ)

# results matching ""

# No results matching ""
