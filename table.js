let personData = [
    {
        'name':'Ryan Schuman','age': 5 , 'gender' : 'Male'
    },
    {
        'name':'Mona Reese','age': 34 , 'gender' : 'Female'
    },
    {
        'name':'Tyler Lawson','age': 14 , 'gender' : 'Male'
    },
    {
        'name':'Tess Mallin','age': 25 , 'gender' : 'Female'
    },
    {
        'name':'Jerry Parkinson','age': 50 , 'gender' : 'Male'
    },
    {
        'name':'Shirley Walters','age': 31 , 'gender' : 'Female'
    },
    {
        'name':'Nina Joseph','age': 17 , 'gender' : 'Female'
    },
    {
        'name':'Vera Daniel','age': 45 , 'gender' : 'Female'
    },
    {
        'name':'Simon Osborne','age': 32 , 'gender' : 'Male'
    },
    {
        'name':'Avery Hawkins','age': 10 , 'gender' : 'Male'
    },
    {
        'name':'Marvin Collins','age': 22 , 'gender' : 'Male'
    }
];

window.onload = () => {
    loadTableData(personData);
};

function loadTableData(personData) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let person of personData){
        dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td><td>${person.gender}</td></tr>`;
    }
    console.log(dataHtml)

    tableBody.innerHTML = dataHtml;
}













