import React, {useState} from "react";
import EmployeeList from "./components/Table/EmployeeList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Inter from "./components/Inter/Inter";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState(false);
  const [data, setEmployees] = useState();

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleSortByName() {
    // sort array ascending or descending by first name
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.name > b.name ? 1 : -1)));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.name > b.name ? -1 : 1)));
      setSorted(false);
    }
  }


  const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
  return (
    <div>
            <Navbar/>
            <Wrapper>
                <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
                <p className="mb-16 text-md">Find an Employee</p>
                <Inter
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    handleSortByName={handleSortByName}
                />
                <EmployeeList data={filteredEmployees}/>
                </Wrapper>
                <Footer/>

        </div>
  );
}

export default App;
