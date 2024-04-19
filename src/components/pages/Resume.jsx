
export default function Resume() {

const pdfFile = "../../../JHProgrammingResume.pdf";

    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 class="beau font70 margin20">Resume</h1>

            <a href={pdfFile} download="JHProgrammingResume.pdf" 
            class="margin10 font40 play txtdecnone download"
            style={{ marginBottom: '20px', display: 'inline-block' }}>
             🡲 Download 🡰
            </a>

          
        </div>
    );
}