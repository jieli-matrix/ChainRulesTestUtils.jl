var documenterSearchIndex = {"docs":
[{"location":"index.html#ChainRulesTestUtils","page":"ChainRulesTestUtils","title":"ChainRulesTestUtils","text":"","category":"section"},{"location":"index.html","page":"ChainRulesTestUtils","title":"ChainRulesTestUtils","text":"(Image: Travis) (Image: Code Style: Blue)","category":"page"},{"location":"index.html","page":"ChainRulesTestUtils","title":"ChainRulesTestUtils","text":"ChainRulesTestUtils.jl helps you test ChainRulesCore.frule and ChainRulesCore.rrule methods, when adding rules for your functions in your own packages.","category":"page"},{"location":"index.html","page":"ChainRulesTestUtils","title":"ChainRulesTestUtils","text":"For information about ChainRules, including how to write rules, refer to the general ChainRules Documentation: (Image: ) (Image: )","category":"page"},{"location":"index.html#API-Documentation","page":"ChainRulesTestUtils","title":"API Documentation","text":"","category":"section"},{"location":"index.html","page":"ChainRulesTestUtils","title":"ChainRulesTestUtils","text":"Modules = [ChainRulesTestUtils]\nPrivate = false","category":"page"},{"location":"index.html#ChainRulesTestUtils.TestIterator","page":"ChainRulesTestUtils","title":"ChainRulesTestUtils.TestIterator","text":"TestIterator{T,IS<:Base.IteratorSize,IE<:Base.IteratorEltype}\n\nA configurable iterator for testing purposes.\n\nTestIterator(data, itersize, itereltype)\nTestIterator(data)\n\nThe iterator wraps another iterator data, such as an array, that must have at least as many features implemented as the test iterator and have a FiniteDifferences.to_vec overload. By default, the iterator it has the same features as data.\n\nThe optional methods eltype, length, andsizeare automatically defined and forwarded todata` if the type arguments indicate that they should be defined.\n\n\n\n\n\n","category":"type"},{"location":"index.html#ChainRulesTestUtils.check_equal-Tuple{Union{Number, AbstractArray{var\"#s85\",N} where N where var\"#s85\"<:Number},Union{Number, AbstractArray{var\"#s86\",N} where N where var\"#s86\"<:Number}}","page":"ChainRulesTestUtils","title":"ChainRulesTestUtils.check_equal","text":"check_equal(actual, expected; kwargs...)\n\n@test's  that actual ≈ expected, but breaks up data such that human readable results are shown on failures. Understands things like unthunking ChainRuleCore.Thunks, etc. All keyword arguments are passed to isapprox.\n\n\n\n\n\n","category":"method"},{"location":"index.html#ChainRulesTestUtils.frule_test-Tuple{Any,Vararg{Tuple{Any,Any},N} where N}","page":"ChainRulesTestUtils","title":"ChainRulesTestUtils.frule_test","text":"frule_test(f, (x, ẋ)...; rtol=1e-9, atol=1e-9, fdm=central_fdm(5, 1), fkwargs=NamedTuple(), check_inferred=true, kwargs...)\n\nArguments\n\nf: Function for which the frule should be tested.\nx: input at which to evaluate f (should generally be set to an arbitary point in the domain).\nẋ: differential w.r.t. x (should generally be set randomly).\n\nfkwargs are passed to f as keyword arguments. If check_inferred=true, then the type-stability of the frule is checked. All remaining keyword arguments are passed to isapprox.\n\n\n\n\n\n","category":"method"},{"location":"index.html#ChainRulesTestUtils.rrule_test-Tuple{Any,Any,Vararg{Tuple{Any,Any},N} where N}","page":"ChainRulesTestUtils","title":"ChainRulesTestUtils.rrule_test","text":"rrule_test(f, ȳ, (x, x̄)...; rtol=1e-9, atol=1e-9, fdm=central_fdm(5, 1), fkwargs=NamedTuple(), check_inferred=true, kwargs...)\n\nArguments\n\nf: Function to which rule should be applied.\nȳ: adjoint w.r.t. output of f (should generally be set randomly). Should be same structure as f(x) (so if multiple returns should be a tuple)\nx: input at which to evaluate f (should generally be set to an arbitary point in the domain).\nx̄: currently accumulated adjoint (should generally be set randomly).\n\nfkwargs are passed to f as keyword arguments. If check_inferred=true, then the type-stability of the rrule and the pullback it returns are checked. All remaining keyword arguments are passed to isapprox.\n\n\n\n\n\n","category":"method"},{"location":"index.html#ChainRulesTestUtils.test_scalar-Tuple{Any,Any}","page":"ChainRulesTestUtils","title":"ChainRulesTestUtils.test_scalar","text":"test_scalar(f, z; rtol=1e-9, atol=1e-9, fdm=central_fdm(5, 1), fkwargs=NamedTuple(), check_inferred=true, kwargs...)\n\nGiven a function f with scalar input and scalar output, perform finite differencing checks, at input point z to confirm that there are correct frule and rrules provided.\n\nArguments\n\nf: Function for which the frule and rrule should be tested.\nz: input at which to evaluate f (should generally be set to an arbitary point in the domain).\n\nfkwargs are passed to f as keyword arguments. If check_inferred=true, then the type-stability of the frule and rrule are checked. All remaining keyword arguments are passed to isapprox.\n\n\n\n\n\n","category":"method"}]
}
