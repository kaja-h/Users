async function fetchData() {
    try {
        const resp = await fetch("http://localhost:3000/companies").then(resp => resp.json());
        const response = await fetch("http://localhost:3000/users").then(response => response.json());
        const list = resp.map(function(company) {
            return {
                name: company.name,
                users: response.filter(function (user) {
                    return company.uri === user.uris.company;
                }).map(function (user) {
                    return {
                        id: user.name
                    }
                })
            }
        });
        const data = Promise.all([resp,response, list]);
        const table = document.getElementById('table');

        // for (let index = 0; index < list.length; index++) {
        //        const id = list.users[index];
        //        const tr = document.createElement('tr');
        //        tr.innerHTML = '<td>' + list.name + '</td>' +
        //        '<td>' + id + '</td>';
        //        table.appendChild(tr);
        //     }
        list.forEach(list => {
            const tr = document.createElement('tr');
            tr.innerHTML = '<td>' + list.name + '</td>' +
                '<td>' + list.users.id + '</td>';
            table.appendChild(tr);
        });
        // for (let i = 1; i < list.length; i++) {
        //     const tr = document.createElement('tr');
        //     tr.innerHTML = '<td>' + list.users[i].id + '</td>';
        //     table.appendChild(tr);
        // }

        return data;

      } catch (err) {
        console.log(err);
      }
}

fetchData()
    .then(data => console.log(data));










