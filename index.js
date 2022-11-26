// // Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },

//     body: JSON.stringify({
//         dogName:"Byron",
//         dogBreed:"Poodle",
//     }),
// };

// fetch("http://localhost:3000/dogs", configurationObject)


function submitData(userName, userEmail){

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },

        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(res => res.json())
    .then(function (data){
        let newID = document.createElement("li")
        newID.innerHTML=
        `<p>${data.id}</p>`
        document.querySelector('body').appendChild(newID)
    })
    .catch(function(error){
        let errMessage = document.createElement('li');
        errMessage.innerHTML = `<p>${error.message}</p>`;
        document.querySelector('body').appendChild(errMessage)
    })

}

