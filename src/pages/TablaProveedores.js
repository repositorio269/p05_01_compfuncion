import React, { useState } from 'react'
import Modal from '../components/Modal'

export default function TablaProveedores(props) {

    const [isShowModal, setIsShowModal] = useState(false);
    const [idProveedor, setIdProveedor] = useState(null);

    const handleToggleModal = () => {
        setIsShowModal(prevIsShowModal => !prevIsShowModal);
    }

    const handleConfirmDeleteProveedor = () => {
        props.handleDeleteProveedor(idProveedor);
        handleToggleModal();
    }  

    const handleSelectProveedor = id => {
        setIdProveedor(id);
        handleToggleModal();
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>CIF</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.proveedores.map(proveedor => {
                        return (
                            <tr key={proveedor.id}>
                                <td>{proveedor.nombre}</td>
                                <td>{proveedor.cif}</td>
                                <td onClick={() => handleSelectProveedor(proveedor.id)}>Eliminar</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {isShowModal && <Modal text={'¿Está seguro de eliminar el proveedor?'}
                                   handleToggleModal={handleToggleModal}
                                   handleConfirm={handleConfirmDeleteProveedor}/>}
        </>
    )
}
