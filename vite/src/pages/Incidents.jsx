
import  { useMemo, useEffect, useState } from "react";

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";


import api from "../api";
import { Url } from "../constants";

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example

// Styling
const HEADER_COLOR = "black"; // Define the color constant

const Path="/api/incidents/"
const HEADER_SIZE = "18px"; 

const FONT_TYPE = "'Roboto', 'Helvetica', 'Arial', sans-serif"; // Define the font type constant

const STYLE ={ sx: { color: HEADER_COLOR ,fontSize:HEADER_SIZE,fontFamily: FONT_TYPE ,FontStyle:"italic"}}

//Main

export default function Incidents() {

    const [data, setData] = useState([]);
    const [, setLoading] = useState(true);
    const [ ,setError] = useState(null);
    
    useEffect(() => {
    
            
        const fetchData = async () => {
            try {   
                const response = await api.get(`${Url}${Path}`); 
                
                // Replace with your API URL
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);













  const columns = useMemo(
    () => [
        {
            accessorFn: (data) => data.title, //simple recommended way to define a column
            header: "Title",
            muiTableHeadCellProps: STYLE, //custom props
            // eslint-disable-next-line react/prop-types
            Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
          },


          {
            accessorFn: (data) => data.description, //simple recommended way to define a column
            header: "Description",
            muiTableHeadCellProps: STYLE, //custom props
            // eslint-disable-next-line react/prop-types
            Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
          },


      {
        accessorFn: (data) => data.location, //simple recommended way to define a column
        header: "Location",
        muiTableHeadCellProps: STYLE, //custom props
        // eslint-disable-next-line react/prop-types
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      {
        accessorFn: (data) => data.id, //alternate way
        id: "id", //id required if you use accessorFn instead of accessorKey
        header: "ID",
        muiTableHeadCellProps: STYLE//optional custom markup
      },
      {
        accessorFn: (data) => data.date, //simple recommended way to define a column
        header: "Date",
        muiTableHeadCellProps: STYLE, //custom props
        // eslint-disable-next-line react/prop-types
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns
  });

  return   <MaterialReactTable table={table} />;
}
