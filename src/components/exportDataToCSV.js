import jsPDF from "jspdf";

// Function to export data to PDF
export function exportToPDF(data, filename) {
  // Create a new PDF document
  const pdf = new jsPDF();

  // Set the initial y-coordinate for the text
  let y = 30;

  // Add the data to the PDF document
  data.forEach((item) => {
    pdf.text(20, y, item);
    y += 10; // Move the y-coordinate down for the next line
  });

  // Save the PDF document
  pdf.save(filename);
}
