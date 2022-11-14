import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const News = () => {
  const [pageNumber, setPageNumber] = useState(0);

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
    const annotations = document.querySelectorAll(
      ".react-pdf__Page__annotations"
    );
    annotations.forEach((annotation) => {
      const { style } = annotation;
      style.display = "none";
    });
  }

  return (
    <div>
      <center className="sm:w-auto w-20 pt-14">
          <Document
            file="/assets/news.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
              width={620}
                key={pageNumber + index}
                pageNumber={index + 1}
                onLoadSuccess={removeElements}
              />
            ))}
          </Document></center>
    </div>
  );
};

export default News;
