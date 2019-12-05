// fetch("http://localhost:3000/users")
//     .then(resp => {
//         console.log("Przykład 1:");
//         console.log(resp);
//     })
//
// fetch("http://localhost:3000/companies")
//     .then(resp => {
//         console.log("Przykład 1:");
//         console.log(resp);
//     })
//
// fetch("http://localhost:3000/users")
//     .then(resp => resp.json())
//     .then(resp => {
//         console.log("Przykład 2:");
//         console.log(resp);
//     })
//
// fetch("http://localhost:3000/companies")
//     .then(resp => resp.json())
//     .then(resp => {
//         console.log("Przykład 2:");
//         console.log(resp);
//     })

// fetch("http://localhost:3000/users")
//     .then(resp => resp.json())
//     .then(resp => {
//         console.log(resp);
//
//         resp.forEach(user => {
//             console.groupCollapsed(`Użytkownik ${user.uri}`)
//             console.log(`Nazwa: ${user.name}`);
//             console.log(`Email: ${user.email}`);
//             console.log(`Firma: ${user.uris.company}`)
//             console.groupEnd();
//         })
//     })

async function fetchData() {
    try {
        const response = await Promise.all([
            fetch("http://localhost:3000/users")
                .then(response => response.json()),
            fetch("http://localhost:3000/companies")
                .then(response => response.json())
        ]);
        console.log(response);

        const table = document.getElementById('list');
        response.forEach(user => {
            console.groupCollapsed(`Użytkownik ${user.uri}`)
            console.log(`Nazwa: ${user.name}`);
            console.log(`Email: ${user.email}`);
            // console.log(`Firma: ${user.uris.company}`)
            console.groupEnd();
        });
      } catch (err) {
        console.log(err);
      }

}
fetchData()

