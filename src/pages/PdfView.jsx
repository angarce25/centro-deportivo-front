import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PDFViewer = () => {
    const [pdfPath, setPdfPath] = useState('');

    useEffect(() => {
        const fetchPdfPath = async () => {
            try {
                const response = await axios.get('/api/get-pdf-path'); // Ruta para obtener la ruta del PDF desde tu backend
                setPdfPath(response.data.filepath);
            } catch (error) {
                console.error('Error al obtener la ruta del PDF', error);
            }
        };

        fetchPdfPath();
    }, []);

    return (
        <div>
            {pdfPath ? (
                <iframe
                    src={pdfPath}
                    width="100%"
                    height="600px"
                    title="Visor de PDF"
                />
            ) : (
                <p>Cargando PDF...</p>
            )}
        </div>
    );
};

export default PDFViewer;
