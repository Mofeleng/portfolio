import { FaLinkedin } from "react-icons/fa";
import { SocialMedia } from "../types/social-media";
import { SiGmail } from "react-icons/si";

export const email = "mofelengmokgope@gmail.com";

export const links:SocialMedia[] = [
    {
        linkedIn: {
            logo:  FaLinkedin,
            link: "https://www.linkedin.com/in/mofeleng-mokgope-68b556289/",
            className: "text-blue-500 size-6"
        },
        email: {
            logo: SiGmail,
            link: `mailto:${email}`,
            className: "text-red-500 size-6"
        }
    }
];