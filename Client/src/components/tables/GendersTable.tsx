const GendersTable = () => {
  const handleEdit = (id: number) => {
    console.log(`Edit gender with ID: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id: number) => {
    console.log(`Delete gender with ID: ${id}`);
    // Add your delete logic here
  };

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Male</td>
            <td>
              <button onClick={() => handleEdit(1)} className="btn btn-primary btn-sm">Edit</button>
              <button onClick={() => handleDelete(1)} className="btn btn-danger btn-sm ms-2">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Female</td>
            <td>
              <button onClick={() => handleEdit(2)} className="btn btn-primary btn-sm">Edit</button>
              <button onClick={() => handleDelete(2)} className="btn btn-danger btn-sm ms-2">Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Others</td>
            <td>
              <button onClick={() => handleEdit(3)} className="btn btn-primary btn-sm">Edit</button>
              <button onClick={() => handleDelete(3)} className="btn btn-danger btn-sm ms-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GendersTable;