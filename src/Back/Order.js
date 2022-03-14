import React from 'react';
import useGet from "../Hook/useGet";

const Order = () => {
    let no = 1;
    const [isi] = useGet('/order');

    return (
        <div>
            <div className="row">
                <h2 className="display-3">DATA ORDER</h2>
            </div>

            <div className="row">
                <div></div>
            </div>

            <div className="row">
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Pelanggan</th>
                                <th>Tanggal Order</th>
                                <th>Total</th>
                                <th>Bayar</th>
                                <th>Kembali</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                isi.map( (val, index)=>(
                                    <tr key={index}>
                                        <td>{no++}</td>
                                        <td>{val.pelanggan}</td>
                                        <td>{val.tglorder}</td>
                                        <td>{val.total}</td>
                                        <td>{val.bayar}</td>
                                        <td>{val.kembali}</td>
                                        <td>{
                                            val.status===0 ? <button className='btn btn-danger'>Belum Bayar</button> : <p>Lunas</p>
                                        }</td>
                                    </tr>
                                ) )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Order;
