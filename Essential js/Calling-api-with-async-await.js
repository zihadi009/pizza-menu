async function todos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json();
    console.log(data);
}

todos();