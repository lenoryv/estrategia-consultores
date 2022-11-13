import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const News = () =>{

    const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    
  const [numPages, setNumPages] = useState();
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function removeElements() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.display = "none";
    });
    const annotations = document.querySelectorAll(".react-pdf__Page__annotations");
    annotations.forEach((annotation) => {
      const { style } = annotation;
      style.display = "none";
    });
  }

  return (
    <div className="pt-24 flex justify-center items-center">
      <center>
        <div>
          <Document
            file="/assets/news.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                width="960"
                key={`page_${pageNumber + 1}`}
                pageNumber={index + 1}
                onLoadSuccess={removeElements}
              />
            ))}
          </Document>
        </div>
      </center>
    </div>
  );
}

export default News;
