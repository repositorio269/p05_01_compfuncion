import { useState } from "react";
import TablaProveedores from "./pages/TablaProveedores";

function App() {

  const proveedoresData = [
    { id: 1, nombre: 'Gas Natural', cif: 'A12345678' },
    { id: 2, nombre: 'Iberdrola', cif: 'A87654321' },
    { id: 3, nombre: 'Jazztel', cif: 'B12345678' },
    { id: 4, nombre: 'BBVA', cif: 'C12345678' },
  ]

  const [proveedores, setProveedores] = useState(proveedoresData);
  // const [titulo, setTitulo] = useState('Listado de proveedores');

  const handleDeleteProveedor = (id) => {
    const proveedoresActualizados = proveedores.filter(proveedor => proveedor.id !== id);
    setProveedores(proveedoresActualizados);
  }

  return (
    <div className="container">
      <TablaProveedores proveedores={proveedores} 
                        handleDeleteProveedor={handleDeleteProveedor}/>
    </div>
  );
}

export default App;
