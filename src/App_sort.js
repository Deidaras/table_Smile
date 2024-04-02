import React, { useState } from 'react';

const SortableTable = () => {
    const [data, setData] = useState([
        { firstName: 'Иван', lastName: 'Петров' },
        { firstName: 'Мария', lastName: 'Иванова' },
        { firstName: 'Петр', lastName: 'Сидоров' }
    ]);

    const sortTable = (columnIndex) => {
        const sortedData = [...data].sort((a, b) => a[Object.keys(a)[columnIndex]].localeCompare(b[Object.keys(b)[columnIndex]]));
        setData(sortedData)
    };

    return (
        <div>
            <table className='bordered_table'>
                <thead>
                    <tr>
                        <th onClick={() => sortTable(0)}>Имя</th>
                        <th onClick={() => sortTable(1)}>Фамилия</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => sortTable(0)}>Сортировать</button>
        </div>
    );
};

export default SortableTable;