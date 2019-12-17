async function companies() {
    try {
        const resp = await fetch("http://localhost:3000/companies")
            .then(resp => resp.json());
        console.log(resp);
        return resp

      } catch (err) {
        console.log(err);
      }
};

async function users() {
    try {
        const response = await fetch("http://localhost:3000/users")
            .then(response => response.json());
        console.log(response);
        return response

    } catch (err) {
        console.log(err);
    }
};

function run() {
    Promise.all([
        companies(),
        users()
    ])
        .then(([result1, result2]) => {
            console.log(result1);
            console.log(result2);
            const list = result1.map(function (company) {
                return {
                    name: company.name,
                    user: result2.filter(function (user) {
                        return user.uri === user.uris.company;
                    }).map(function (user) {
                        return {
                            id: user.name
                        }
                    })
                }
            })
            console.log(list);
        })
};
run()

// const table = document.getElementById('table');
// list.forEach(list => {
//     const tr = document.createElement('tr');
//     tr.innerHTML = '<td>' + list.users.id + '</td>';
//     table.appendChild(tr);
// })

// list.forEach(list => {
//     const tr = document.createElement('tr');
//     tr.innerHTML = '<td>' + list.name + '</td>' +
//         '<td>' + list.users + '</td>';
//     table.appendChild(tr);
// });
