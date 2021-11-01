let global=69;

{
    let block = 25;
    console.log(`The block level scope variable is of ${block}`);
    console.log(`Global level variable can be accessed inside a block. It's value is ${global}`);
    func();
}

function func(){
    let variable = 98.83;
    console.log(`Function scope variable can be accessed when the function is called. It's value is ${variable}`);
    console.log(`Global level variable can be accessed inside a function as well. It's value is ${global}`);
}
