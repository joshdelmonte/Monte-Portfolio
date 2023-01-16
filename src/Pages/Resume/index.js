import { Button } from "react-bootstrap";

function Resume() {
    return (
        <div>
            <Container>
                <a href="https://bold.pro/my/joshua-delmonte" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">
                        <img src="your-image-source.jpg" alt="Resume Website" style={{ width: "20px", height: "20px" }} />
                        View Resume
                    </Button>
                </a>
            </Container>
        </div>
    );
}

export default Resume;
