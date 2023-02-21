import React from "react";
import { Button, Container } from "react-bootstrap";
import {  faListAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab, faListAlt );


function Resume() {
    return (
        <div>
            <Container>
                <a href="https://1drv.ms/b/s!AhDbzGZkV_bainR6XblheiahgX_5?e=JZ3b2E" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">  View Resume<FontAwesomeIcon icon={["faListAlt"]} />
                    </Button>
                </a>
            </Container>
        </div>
    );
}

export default Resume;
