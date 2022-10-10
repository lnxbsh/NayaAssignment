import { useForm } from 'react-hook-form';
import "./style.css";
import { Outlet, Link } from "react-router-dom";
export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if ((errors.Email?.type !== 'required' || errors.Email?.type !== 'pattern') && (errors.Password?.type !== 'required' && (errors.Password?.type !== 'required')) && errors.Firstname?.type !== 'required' && errors.Lastname?.type !== 'required') {
      alert("Submit");
    }
  };
  console.log(errors);
  
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>

      <input type="text" placeholder="First name" {...register("Firstname", {required: {value: true, message:" First Name Required"}, maxLength: 80})}   aria-invalid={errors.FirstName ? "true" : "false" }/>
      {errors.FirstName && <p role="alert">{errors.FirstName?.message}</p>}
      
      <input type="text" placeholder="Last Name" {...register("Lastname", {required: {value: true, message:" Last Name Required"}, maxLength: 80})} aria-invalid={errors.Lastname ? "true" : "false"} />
      {errors.Lastname && <p role="alert">{errors.Lastname?.message}</p>}
      
      
      <input type="text" placeholder="Email" {...register("Email", {required: {value: true, message:'Email Id required'}, pattern: {value :/^\S+@\S+$/i,message:"Not a valid ID"}})} aria-invalid={errors.Email ? "true" : "false"}/>
      {errors.Email && <p role="alert">{errors.Email?.message}</p>}
      
      
      
      <input type="password" placeholder="Password" {...register("Password", {required: {value: true, message:"Password Required"}, minLength: {value: 8, message:"Min 8 Char"}})} aria-invalid={errors.Password ? "true" : "false"}/>
      {errors.Password && <p role="alert">{errors.Password?.message}</p>}
      <input type="submit" />
    <Link to="/">Login</Link>
    <Outlet />
    </form>
   
    </div> 
  );
}