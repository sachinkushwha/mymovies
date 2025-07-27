import {useEffect, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/');
        }
    },[]);
 
    const email=useRef();
    const password=useRef();

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData={
        email:email.current.value,
        password:password.current.value
    }
    try {
      const response = await fetch('https://mymovies-sand.vercel.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      const {message,success,jwtToken,name}=result;
      if (success) {
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('logedinuser',name);
        window.dispatchEvent(new Event('logedindatachange'));
        alert(message);
        navigate('/');
      } else {
        alert(message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:',error );
      alert('Something went wrong');
    }
  };

  return (
    <div className="flex items-center  justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            autoFocus
            ref={email}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            ref={password}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
        <span className='top-4 relative'>don't have account <Link to='/sinup' className='text-blue-500'>sinup</Link> </span>
      </form>
       </div>
  );
};

export default Login;
