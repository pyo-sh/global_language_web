import React from 'react';
import FooterBox from 'styles/components/Main/FooterBox';

import { footerWords, projectWords } from 'resources/renderWords';

const Footer = () => {
    const footer = footerWords('kor');
    const project = projectWords('kor');
    return <FooterBox>
        <p>
            <span>
                <strong>
                    {project.name}
                </strong>
                {project.location}
            </span>
            <span>
                {footer.author} : {project.author}
            </span>
            <span>
                {footer.register} : {project.register}
            </span>
            <span>
                {footer.phone} : {project.phone}
            </span>
            <span>
                {footer.email} : {project.email}
            </span>
            <span>
                {footer.fax} : {project.fax}
            </span>
        </p>
    </FooterBox>
}

export default Footer;