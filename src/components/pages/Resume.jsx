
export default function Resume() {

const pdfFile = "../../../ProgrammingResume.pdf";

    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 class="beau font70 margin30">Resume</h1>

            <a href={pdfFile} download="ProgrammingResumesume.pdf" 
            class="margin10 font30 play txtdecnone"
            style={{ marginBottom: '20px', display: 'inline-block' }}>
             🡲 Download Here 🡰
            </a>

            <iframe src={pdfFile} width="100%" height="1000px">
                This browser does not support
            </iframe>
        </div>
    );
}