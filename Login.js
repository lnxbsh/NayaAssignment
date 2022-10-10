import { useForm } from 'react-hook-form';
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if ((errors.Email?.type !== 'required' || errors.Email?.type !== 'pattern') && errors.Password?.type !== 'required') {
      let formData = { "email": data.Email, "passsword": data.Password }
      

      postData('127.0.0.1:8000/api/login', formData)
        .then((data) => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
      console.log(formData)

    }


  };
  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  console.log(errors);



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" {...register("Email", { required: { value: true, message: "Required" }, pattern: { value: /^\S+@\S+$/i, message: "Not a valid" } })} aria-invalid={errors.Email ? "true" : "false"} />
        {errors.Email && <p role="alert">{errors.Email?.message}</p>}

        <input type="password" placeholder="Password" {...register("Password", { required: true })} aria-invalid={errors.Password ? "true" : "false"} />
        {errors.Password && <p role="alert">{errors.Email?.message}</p>}

        <input type="submit" />
        <Link to="/signup">SignUp</Link>
        <Outlet />
      </form>
    </div>


  );
}