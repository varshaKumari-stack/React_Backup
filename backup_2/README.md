differences:-

const [count, setCount] = useState(0);
setCount((prev) => prev + 1);
setCount((prev) => prev + 3);; //previous current state s value update krta hai.
ex-count current value is 0 then prev store the value 0 then increment krne pr value 4 s hi increse hogi na ki 1 by 1

setCount(count+1)
setCount(count+1)
setCount(count+1)
setCount(count+1)
setCount(count+1) //setcount s value one by 1 hi increase hogi na ki direct secount 5 s increse hoga
