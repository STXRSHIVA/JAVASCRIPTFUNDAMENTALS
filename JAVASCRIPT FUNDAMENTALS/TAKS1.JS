function outerFunction(outerParam){
    let outerVariable = "Outer variable";

    function innerFunction(){
        return `Outer Parameter:${outerParam}, Outer Variable:${outerVariable}`;
    }

    return innerFunction;
}

const example = outerFunction("Example parameter");
console.log(example()); // output : Outer Parameter