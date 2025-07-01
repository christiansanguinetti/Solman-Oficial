import react from 'react'; 

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Error 404</h1>
        <p className="mt-4 text-gray-700">La página que estás buscando no existe.</p>
        <a href="/" className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}

export default Error;