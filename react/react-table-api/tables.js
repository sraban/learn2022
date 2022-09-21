import React from 'react';
import styles from './tables.module.css';

import DataTable from 'react-data-table-component';
import data from './data.json';

const Tables = () => {
  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'DOB',
      selector: 'dob',
    },
  ];

    const fakeUsers = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ];




// -----------------------------

  // const [filterText, setFilterText] = React.useState('');
	// const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	// const filteredItems = fakeUsers.filter(
	// 	item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	// );

	// const subHeaderComponentMemo = React.useMemo(() => {
	// 	const handleClear = () => {
	// 		if (filterText) {
	// 			setResetPaginationToggle(!resetPaginationToggle);
	// 			setFilterText('');
	// 		}
	// 	};

	// 	return (
	// 		<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
	// 	);
	// }, [filterText, resetPaginationToggle]);

// -----------------------------

    return (
      <div className={styles.Tables} data-testid="Tables">
         
         {/* <DataTable
            columns={columns}
            data={data}
        /> */}

<DataTable
        title="Employees"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
      />

    {/* <DataTable
			title="Contact List"
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			selectableRows
			persistTableHead
		/> */}

      </div>
    );
  }



export default Tables;
