import React from "react";

const PrintableContent = ({ headerContent, footerContent, content }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePrint = () => {
    window.print();
  };

  const renderContent = () => {
    const pageContent = content.slice(
      (currentPage - 1) * window.innerHeight,
      currentPage * window.innerHeight
    );

    return (
      <div>
        <div className="header">{headerContent}</div>
        <div className="content">{pageContent}</div>
        <div className="footer">{footerContent}</div>
      </div>
    );
  };

  const renderNextPageButton = () => {
    if (currentPage < Math.ceil(content.length / window.innerHeight)) {
      return (
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          Next Page
        </button>
      );
    }
  };

  return (
    <div>
      <button onClick={handlePrint}>Print</button>
      {renderContent()}
      {renderNextPageButton()}
    </div>
  );
};

// export default PrintableContent;


const renderTableData = (data) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Phone</th>
          <th>Country</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.city}</td>
            <td>{item.phone}</td>
            <td>{item.country}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [data, setData] = React.useState([
    {
      name: "John Doe",
      email: "john.doe@example.com",
      city: "London",
      phone: "+1-555-555-5555",
      country: "United Kingdom",
      address: "123 Main Street",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      city: "New York",
      phone: "+1-555-555-5556",
      country: "United States",
      address: "456 Elm Street",
    },
  ]);

  return (
    <PrintableContent
      headerContent="<h1>This is the header.</h1>"
      footerContent="<h2>This is the footer.</h2>"
      content={renderTableData(data)}
    />
  );
};

export default App;
