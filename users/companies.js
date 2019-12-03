fetch("http://localhost:3000/users")
    .then(resp => {
        console.log("Przykład 1:");
        console.log(resp);
    })

fetch("http://localhost:3000/companies")
    .then(resp => {
        console.log("Przykład 1:");
        console.log(resp);
    })

fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(resp => {
        console.log("Przykład 2:");
        console.log(resp);
    })

fetch("http://localhost:3000/companies")
    .then(resp => resp.json())
    .then(resp => {
        console.log("Przykład 2:");
        console.log(resp);
    })

fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);

        resp.forEach(user => {
            console.groupCollapsed(`Użytkownik ${user.uri}`)
            console.log(`Nazwa: ${user.name}`);
            console.log(`Email: ${user.email}`);
            console.groupEnd();
        })
    })