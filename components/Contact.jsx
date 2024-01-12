import React from 'react';

export default function Contact({dark}) {
    const [isCopied, setIsCopied] = React.useState(0);

    const handleCopyClick = async (text) => {
        await navigator.clipboard.writeText(text);
        if (text === "shawn.yx.liu@gmail.com") {
            setIsCopied(1);
        } else {
            setIsCopied(2);
        }
        setTimeout(() => {
            setIsCopied(0);
        }, 2000);
    }

    return (
        <div className={`page page-even contact ${dark ? "dark dark-even" : ""}`} id="contact">
            <p className="tag tag-lg">Get in touch</p>
            <p>What's next? Feel free to reach out to me if you're looking for a developer or simply want to connect.</p>
            <div className="contact-row">
                <img className="contact-icon icon" src="../icons/email.svg" />
                <p className="contact-text">shawn.yx.liu@gmail.com</p>
                <button className="contact-btn" onClick={() => handleCopyClick("shawn.yx.liu@gmail.com")}>
                    <img className="contact-icon icon" src="../icons/copy.svg" />
                    {isCopied === 1 && <p className="contact-copied tag">Copied!</p>}
                </button>
            </div>
            <div className="contact-row">
                <img className="contact-icon icon" src="../icons/phone.svg" />
                <p className="contact-text">+1 (408)839-7241</p>
                <button className="contact-btn" onClick={() => handleCopyClick("+1 (408)839-7241")}>
                    <img className="contact-icon icon" src="../icons/copy.svg" />
                    {isCopied === 2 && <p className="contact-copied tag">Copied!</p>}
                </button>
            </div>
            <p>You may also find me on these platforms!</p>
            <div className="contact-socials">
                    <a href="https://github.com/shawn-yx-liu/" target="_blank">
                        <img className="contact-social-icon icon" src="../icons/github.svg" />
                    </a>
                    <a href="https://www.linkedin.com/in/shawn-yx-liu/" target="_blank">
                        <img className="contact-social-icon icon" src="../icons/linkedin.svg" />
                    </a>
                </div>
        </div>
    )
}