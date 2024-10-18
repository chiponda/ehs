import  { useState ,useEffect} from 'react'
import { UserRound } from 'lucide-react'

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import api from '../api';
import { Url } from '../constants';

function Patient() {
    const [name, Name] = useState("");
    const [surname, Surname] = useState("");
    const [dob, Dob] = useState("");
    const [address, Address] = useState("");
    const [gender, Gender] = useState("");
    const [email, Email] = useState("");
    const [id_number, Id] = useState("");
    const [phone, setPhone] = useState('');

  const [province, Province] = useState("");
    const Path ="/api/add_id/"
  useEffect(() => {
    getForm();
}, []);


const getForm = () => {
  api
      .get(`${Url}${Path}`)
      .then((res) => res.data)
      .then((data) => {

          console.log(data);
      })
      .catch((err) => alert(err));
      
};






  

  const handleSubmit = (e) => {
    e.preventDefault();
    api
        .post(`${Url}${Path}`, { name,surname,dob,address,gender,email,id_number ,province,phone} )
        .then((res) => {
            if (res.status === 201) alert("New Patient has been Added");
            else alert("Failed to Add Patient Please Try Again .");
            getForm();
        })
        .catch((err) => alert(err));
};


  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full w-full  max-w-lg mx-auto">
        <div className="flex items-center justify-center mb-6">
          <UserRound className="text-red-500 mr-5" size={24} />
          <h1 className="text-2xl font-bold text-blue-600">Enter Patient Details</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-10 space-x-50 w-full" >
          <div>
            <label htmlFor="name" className="block text-l font-medium text-gray-700">Name</label>
            <input

              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter First Name"
              onChange={(e) => Name(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  border p-2 rounded"
            />
          </div>
         
          <div>
            <label htmlFor="date" className="block text-l font-medium text-gray-700  ">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder='Enter the Surname '
              value={surname}
              onChange={(e) => Surname(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="id_number" className="block text-l font-medium text-gray-700">ID Number</label>
            <input
            type='text'
            placeholder='Enter ID Number'
              id="id_number"
              name="id_number"
              value={id_number}
              onChange={(e) => Id(e.target.value)}
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            />
                
          </div>
 
          <div>
            <label htmlFor="gender" className="block text-l font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => Gender(e.target.value)}
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            >
                 <option value="">--</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              
            </select>
          </div>
          <div>
            <label htmlFor="province" className="block text-l font-medium text-gray-700">Province</label>
            <select
              id="province"
              name="province"
              value={province}
              onChange={(e) => Province(e.target.value)}
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            >
                 <option value="">--</option>
              <option value="Harare">Harare</option>
              <option value="Bulawayo">Bulawayo</option>
              <option value="Mashonaland East">Mash East</option>
              <option value="Matabeleland South">Mat South</option>
              <option value="Matabeleland North">Mat North</option>
              <option value="Mashonaland Central">Mash Central</option>
              <option value="Mashonalnd West">Mash West</option>
              <option value="Masvingo">Masvingo</option>
              <option value="Midlands">Midlands</option>
              <option value="Manicaland">Manicaland</option>
              
            </select>
          </div>
         
          <div>
            <label htmlFor="dob" className="block text-l font-medium text-gray-700">DOB</label>
            <input
            
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => Dob(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            />
          </div>



          <div>
            <label htmlFor="email" className="block text-l font-medium text-gray-700">Email</label>
            <input
            placeholder='Enter Email'
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => Email(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            />
          </div>
          <div><label htmlFor="id" className="block text-l font-medium text-gray-700">Phone Number</label>
          <PhoneInput
          id="phone"
        defaultCountry="zw"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        
      /></div>
          

          <div>
            <label htmlFor="address" className="block text-l font-medium text-gray-700  " >Address </label>
            <textarea
              id="address"
              name="address"
              value={address}
              placeholder='Please enter the Address of the patient '
              onChange={(e) => Address(e.target.value)}
              required
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  border p-2 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  )
}

export default Patient


