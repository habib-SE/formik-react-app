import './App.css'
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    onSubmit : values => {
        console.log('form data', values)
    }
  })
// console.log("fomik submitt", formik.values)
  return (
    <div onSubmit={formik.handleSubmit} className="App container items-center justify-items-center py-7 ml-11" >
     <form className=' flex flex-col w-[30%] border border-l-4 gap-5'>
      <label className=' pt-3'>Your name:</label>
      <input
      className='border-2 rounded-md bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
      type='text'
      name='name'
      placeholder='enter your name'
      onChange={formik.handleChange}
      value={formik.values.name}
      />
      <label className=' pt-3'>Your Email</label>
      <input
      className='border-2 rounded-md bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
      type='email'
      name='email'
      placeholder='enter your email'
      onChange={formik.handleChange}
      value={formik.values.email}
      />
      <button type='submitt' className=' py-2 px-5 text-white bg-black border'>Submitt</button>
     </form>
    </div>
  );
}

export default App;
