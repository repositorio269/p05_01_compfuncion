import React from 'react'

export default function TablaProveedores(props) {
  return (
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
                        <td></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}
