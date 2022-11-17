import { Button, FormControl, FormHelperText, Grid, Input } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './Register.css';
import AcTotal from '../../Logo/logo-actotal.png';
import { postUser } from '../../Redux/Actions';
import Card from '../Cards/Card';
import { getUsers } from '../../Redux/Actions';


const Register = () => {
	const [input, setInput] = useState({
		email:"",
		number: "",
		username: "",
	});
	
	const [errors, setErrors] = useState({});
	const dispatch = useDispatch()

	  useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])
	  
	const users = useSelector(d => d.users)

	  function handleChange(e) {
		  setInput({
			  ...input,
			  [e.target.name]: e.target.value,
			});
			setErrors(
				validate({
					...input,
					[e.target.name]: e.target.value,
				})
				);
		  }
		  
		  const  handleSubmit = (e) => {
			  e.preventDefault();
			  try {
				   postUser(input);
				  setInput({
					email: "",
					number: "",
					username:"",
				})
				dispatch(getUsers())
			} catch (err) {
					return err
				}
			};
				  function validate(input) {
					  let errors = {};
					  if (!input.username || !/^[a-zA-Z]+[ ]/.test(input.username)){
						  errors.username = "El nombre completo es requerido (Solo letras).";
						}
						
						if (!input.email || !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(input.email)) {
									 errors.email = "Email inválido. Ejemplo: example@example.com";
								 }
						if (!/^[0-9]*$/.test(input.number)){
							errors.number = "Solo se permiten numeros en este campo."
						}
						if (input.number.length > 9){
							errors.number = "Máximo nueve (9) carácteres."
						}
			
						return errors;
					  }
			
			return (
		<div className='body'>
			<div > <img src={AcTotal} alt='Img not found'className='AcTotal'/></div>
			<div className='all'>
		<Grid className='form' container sx={{fontFamily: 'Nunito', width:"450px"}}>
			<div><h1>Ingreso de Datos</h1></div>
			<br />
			<Grid item md={12} className="forms">
			  <FormControl>
				  <FormHelperText sx={{mb:2, color:grey[400], marginBottom: '0px', fontSize: '16px'}} id='username-helper'>Nombre</FormHelperText>
				<Input 
				className='inputs'
				sx={{mb:2, color:grey[400]}}
				type='Username'
				id='Username'
				value={input.username}
				name="username"
				onChange={(e) => handleChange(e)}
				aria-describedby='username-helper'/>
			  </FormControl>
			  {errors.username && <p className='error'>{errors.username}</p>}
		  </Grid>
			<Grid item md={12} className="forms">
			  <FormControl>
				  <FormHelperText sx={{mb:2, color:grey[400], marginBottom: '0px', fontSize: '16px'}} id='email-helper'>Email</FormHelperText>
				<Input 
				className='inputs'
				sx={{mb:2, color:grey[400]}}
				type='email'
				id='email'
				value={input.email}
				name="email"
				onChange={(e) => handleChange(e)}
				aria-describedby='email-helper'/>
			  </FormControl>
			  {errors.email && <p className='error'>{errors.email}</p>}
		  </Grid>
			  <br/>
			  <Grid item md={12} className="forms">
				<FormControl>
					<FormHelperText sx={{mb:2, color:grey[400], marginBottom: '0px', fontSize: '16px'}} id='number-helper'>Teléfono (Opcional)</FormHelperText>
					<Input 
					className='inputs'
					sx={{mb:2, color:grey[400]}}
					type='string'
					id='pwd'
					value={input.number}
					name="number"
					onChange={(e) => handleChange(e)}
					aria-describedby='number-helper'/>
				  </FormControl>
				  {errors.number && <p className='error'>{errors.number}</p>}
			  </Grid>
				<br/>
				{Object.keys(errors).length === 0 ? (
					<Button className='buttonG' variant='contained' sx={{fontSize:'11px', marginTop: '13px', marginLeft: '105px'}} onClick={(e) => handleSubmit(e)}>
					Guardar
				  	</Button>
				) : (
					<Button className='buttonG' variant='outlined' sx={{backgroundColor: 'grey', fontSize:'11px', marginTop: '13px', marginLeft: '105px'}} disabled={true}>Guardar</Button>
				)}
		  </Grid>
		  <div className='dataList'>
		  <h1 className='listHead'>Listado de Datos</h1>
				<span className="cardsList">	{users.map((e => { 
					return(
					<Card 
					name= {e.name}
					email= {e.email}
					number={e.number}
					date= {e.createdAt}
					/>);
					}))}</span>
		  </div>
		 </div> 
		 </div>)
}

export default Register