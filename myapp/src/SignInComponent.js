import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// export default className SignIn extends Component {
//   render() {
//     return (
//       <>
//       <head>
//     <meta charset="utf-8"/>
//     <meta name="viewport" content="width=device-width, initial-scale=1"/>
//     <meta name="description" content=""/>
//     <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"/>
//     <meta name="generator" content="Hugo 0.84.0"/>
//     <title>Signin Template · Bootstrap v5.0</title>

//     <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/sign-in/"/>

//   </head>
// <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>


//     <link href="./signin.css" rel="stylesheet"></link>

//         <style>
//           {`.bd-placeholder-img {
//               font-size: 1.125rem;
//               text-anchor: middle;
//               -webkit-user-select: none;
//               -moz-user-select: none;
//               user-select: none;
//             }

//             @media (min-width: 768px) {
//               .bd-placeholder-img-lg {
//                 font-size: 3.5rem;
//               }
//             }
//             html,
// body {
//   height: 100%;
// }

// body {
//   display: flex;
//   align-items: center;
//   padding-top: 40px;
//   padding-bottom: 40px;
//   background-color: #f5f5f5;
// }

// .form-signin {
//   width: 100%;
//   max-width: 330px;
//   padding: 15px;
//   margin: auto;
// }

// .form-signin .checkbox {
//   font-weight: 400;
// }

// .form-signin .form-floating:focus-within {
//   z-index: 2;
// }

// .form-signin input[type="email"] {
//   margin-bottom: -1px;
//   border-bottom-right-radius: 0;
//   border-bottom-left-radius: 0;
// }

// .form-signin input[type="password"] {
//   margin-bottom: 10px;
//   border-top-left-radius: 0;
//   border-top-right-radius: 0;
// }

//             `}
//         </style>


//         <body >

//         <main classNameName="form-signin">
//           <form>

//             <img classNameName="mb-4" src="./logo.svg" alt="hello" />
//             <h1 classNameName="h3 mb-3 fw-normal">please sign in</h1>

//             <div classNameName="form-floating">
//               <input type="email" classNameName="form-control" id="floatingInput" placeholder="name@ehheh.com" />

//               <label for="floatingInput">ID</label>
//             </div>
//             <div classNameName="form-floating">
//               <input type="password" classNameName="form-control" id="floatingPassword" placeholder="Password" />

//               <label for="floatingPassword">Password</label>
//             </div>


//             <button classNameName="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//             {/* <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p> */}

//           </form>
//         </main>


//         </body>
//       </>
//     )

//   }
// }


export default class SignIn extends Component {
  render() {
    return (
      <>

        <div className="container" >
          <h1 >
            Log In
          </h1>
          <br></br>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </>
    );
  }
}