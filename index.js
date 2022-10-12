// Regulatr way

// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "levi",
//       dogBreed: "deutsch",
//     }),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);
  



// Splitting it into 2
// const formData = {
//     dogName: "levi",
//     dogBreed: "deutsch",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);





// 3rd way 
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "levi",
//     dogBreed: "deutsch",
//   }),
// });



// If you wanna log the response
// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });




// catch() method
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
  // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

// Test
function submitData(name, email) {
return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    name,
    email
  }),
})
.then(function (response) {
    return response.json() 
})
.then(function(object) {
    
 let one = document.querySelector("body")
 one.innerHTML = object.id

})
.catch(function(error){
    alert("FetchError: request to http://localhost:3000/users failed, reason: Unauthorized Access")
    
    let two = document.querySelector("body")
    two.innerHTML = error

})
}
submitData()

   
   
    // .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (object) {
    //     console.log(object);
    //   })