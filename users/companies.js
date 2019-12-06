//todo: remove commented code

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
        const response = await fetch("http://localhost:3000/users").then(response => response.json());
        const resp = await fetch("http://localhost:3000/companies").then(resp => resp.json());

        const table = document.getElementById('list');
        const rows = resp.map(x => Object.assign(x, response.find(y => y.uris.company == x.uri)));
        rows.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = '<td>' + user.uris.company + '</td>' +
            '<td>' + user.name + '</td>';
            table.appendChild(tr);
        })

        // resp.forEach(company => {
        //     const tr = document.createElement('tr');
        //     let td = document.getElementById('company');
        //     tr.innerHTML = '<tr><td>' + company.name + '</td></tr>';
        //     tr.appendChild(td);
        //     table.appendChild(tr);
        // });
        // response.forEach(user => {
        //     const tr = document.createElement('tr');
        //     let td = document.getElementById('user');
        //     tr.innerHTML = '<tr><td>' + user.name + '</td></tr>';
        //     tr.appendChild(td);
        //     table.appendChild(tr);
        // });
        console.log(response, resp, rows);
        return Promise.all([response, resp]);

      } catch (err) {
        console.log(err);
      }
}
fetchData()

