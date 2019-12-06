async function fetchData() {
    try {
        const response = await fetch("http://localhost:3000/users").then(response => response.json());
        const resp = await fetch("http://localhost:3000/companies").then(resp => resp.json());

        const table = document.getElementById('list');
        const rows = resp.map(x => Object.assign(x, response.find(y => y.uris.company == x.uri)));
        // rows.forEach(user => {
        //     const tr = document.createElement('tr');
        //     tr.innerHTML = '<td>' + user.uris.company + '</td>' +
        //     '<td>' + user.name + '</td>';
        //     table.appendChild(tr);
        // })

        resp.forEach(company => {
            const tr = document.createElement('tr');
            tr.innerHTML = '<td>' + company.name + '</td>';
            table.appendChild(tr);
        });
        response.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = '<td>' + user.name + '</td>';
            table.appendChild(tr);
        });
        console.log(response, resp, rows);
        return Promise.all([response, resp]);

      } catch (err) {
        console.log(err);
      }
}
fetchData()

