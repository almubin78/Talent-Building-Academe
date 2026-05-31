import { PDFViewer } from "@react-pdf/renderer";
import PassportPDF from "./PassportPDF";



const PassportViewer = ({ data }) => {
  return (
    <div className="h-[850px] border rounded overflow-hidden">
      <PDFViewer width="100%" height="100%">
        <PassportPDF data={data} />
      </PDFViewer>
    </div>
  );
};

export default PassportViewer;