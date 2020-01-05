async function companies() {
    try {
        const resp = await fetch("http://localhost:3000/companies")
            .then(resp => resp.json());
        return resp

      } catch (err) {
        console.log(err);
      }
}

async function users() {
    try {
        const response = await fetch("http://localhost:3000/users")
            .then(response => response.json());
        return response

    } catch (err) {
        console.log(err);
    }
}

function run() {
    Promise.all([
        companies(),
        users()
    ])
        .then(([company, user]) => {
            const list = company.map(company => {
                return {
                    name: company.name,
                    people: user.filter(user => {
                        return company.uri === user.uris.company;
                    }).map(user => {
                        return {
                            id: user.name
                        }
                    })
                }
            });

            const tables = list.map(user => {
                return {
                    company: user.name,
                    user: user.people.map(people => people.id)
                }
            });

            const table = document.getElementById('table');
            tables.forEach(tables => {
                const tr = document.createElement('tr');
                tr.innerHTML = '<td>' + tables.company + '</td>' +
                    '<td>' + tables.user + '</td>';
                table.appendChild(tr);
            })
        })
}
run();
