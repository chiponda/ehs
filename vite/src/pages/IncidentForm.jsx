import  { useState ,useEffect} from 'react'
import { AlertTriangle } from 'lucide-react'
import api from '../api';
import { Url } from '../constants';

function IncidentForm() {
    const [title, setReport] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [severity, setSeverity] = useState("");
    const [location, setLocation] = useState("");
    const Path ="/api/incidents/"
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
        .post(`${Url}${Path}`, { title,description,date,severity,location})
        .then((res) => {
            if (res.status === 201) alert("Incident has beed recorded successfully");
            else alert("Failed to record incident .");
            getForm();
        })
        .catch((err) => alert(err));
};


  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full w-full  max-w-lg mx-auto">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="text-red-500 mr-5" size={24} />
          <h1 className="text-2xl font-bold text-blue-600">Incident Report</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-10 space-x-50 w-full" >
          <div>
            <label htmlFor="title" className="block text-l font-medium text-gray-700">Title</label>
            <input

              type="text"
              id="title"
              name="title"
              value={title}
              placeholder='Title of Incidents'
              onChange={(e) => setReport(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  border p-2 rounded"
            />
          </div>
         
          <div>
            <label htmlFor="date" className="block text-l font-medium text-gray-700  ">Date of Incident</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="severity" className="block text-l font-medium text-gray-700">Severity</label>
            <select
              id="severity"
              name="severity"
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-l font-medium text-gray-700">Location</label>
            <select
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 rounded"
            >
                 <option value="">--</option>
              <option value="HQ">HQ</option>
              <option value="Mabvuku">Mabvuku</option>
              <option value="Feruka">Feruka</option>
              <option value="Masasa">Masasa</option>
              <option value="Ruwa">Ruwa</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-l font-medium text-gray-700  " >Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              placeholder='Please describe the Incident '
              onChange={(e) => setDescription(e.target.value)}
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

export default IncidentForm


