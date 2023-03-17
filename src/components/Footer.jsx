import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div>
                <h1>Kybans</h1>
                <p>Copyright &copy; all right reserved</p>
            </div>
            <div>
                <h5>Follow us</h5>
                <div>
                    <Link target={'_blank'} to="https://www.github.com/TheKyban">Github</Link>
                    <Link target={'_blank'} to="https://www.instagram.com/aditya_kr_chaudhary">Instagram</Link>
                    <Link target={'_blank'} to="https://www.linkedin.com/in/TheKyban">Linkdin</Link>
                </div>
            </div>
        </footer>
    )
}


export default Footer;