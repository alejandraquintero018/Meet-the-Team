const generateTeam = function (team) {
    let html = '';

    team.managers.forEach(function (manager) {
        html += `
            <article class="col-md-4 p-3">
            <div class="card">
                <div class="card-header" style="background-color: purple; color: white">
                    <h3> ${manager.getName()} </h3> 
                    <h4> <i class="fas fa-mug-hot"></i> Manager</h4>    
                </div>
                <ul class="list-group list-group-flush card-body">
                    <li class="list-group-item">ID: ${manager.getId()} </li>
                    <li class="list-group-item">Email: <span> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a> <span/> </li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
                </ul>
            </div>
        </article>
        `;
    });

    team.engineers.forEach(function (engineer) {
        html += `
            <article class="col-md-4 p-3">
            <div class="card">
                <div class="card-header" style="background-color: purple; color: white">
                    <h3> ${engineer.getName()}</h3>
                    <h4> <i class="fa-solid fa-code"></i> Engineer </h4>
                </div>
                <ul class="list-group list-group-flush card-body">
                    <li class="list-group-item">ID: ${engineer.getId()} </li>
                    <li class="list-group-item">Email:<span> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a> <span/></li>
                    <li class="list-group-item">Github: <a href="https:////www.github.com/${engineer.getGithub()}"
                    >${engineer.getGithub()}</li>
                </ul>
            </div>
        </article>
        `;
    });
    team.interns.forEach(function (intern) {
        html += `
            <article class="col-md-4 p-3">
            <div class="card">
                <div class="card-header" style="background-color: purple; color: white">
                    <h3> ${intern.getName()} </h3>
                    <h4><i class="fa-solid fa-graduation-cap"> </i> Intern </h4>
                </div>
                <ul class="list-group list-group-flush card-body">
                    <li class="list-group-item">ID: ${intern.getId()} </li>
                    <li class="list-group-item">Email: <span> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a><span/></li>
                    <li class="list-group-item">Attending School: ${intern.getSchool()} </li>
                </ul>
            </div>
        </article>
        `;
    });

return html; 
};

const generateHTML = function (team) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>Meet the Team</title>
</head>
<header class="container-fluid text-center p-5" style="background-color: rgb(23, 19, 152); color: white">
    <h1>Meet the Team</h1>

    <p></p>
</header>

<body>
    <main class="container text-center p-5">
        <section class="row">
         ${generateTeam(team)}

        </section>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"></script>
</body>

</html>
    `;
}

module.exports = generateHTML; 