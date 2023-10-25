import "./WhyUS.css";
import { useState } from "react";
import { PiCaretUpBold, PiCaretDownBold } from "react-icons/pi"

function WhyUs() {
    const paragraphs = [
        {
            title: "Strategic Location",
            content:
                "Our headquarters are strategically located in Palm Beach Road, Vashi, Navi Mumbai. This prime location provides us with easy access to major industrial areas and transportation routes, ensuring swift and efficient service.",
        },
        {
            title: "Years of Experience",
            content:
                "With over two decades of experience in the industry, we have developed a deep understanding of the transport and logistics sector. Our experience speaks to our commitment to excellence.",
        },
        {
            title: "Impressive Fleet",
            content:
                "We proudly boast a fleet of 50 trailers, fully equipped to handle various types of cargo. This ensures not only timely deliveries but also the safe transportation of your goods.",
        },
        {
            title: "Specialization",
            content:
                "Specializes in providing transportation services to paper mills. Over the years, we have cultivated strong business relationships with renowned paper mills such as J.K. Paper Mills, Kherani Paper Mills, and Revival Paper Mills.",
        },
        {
            title: "Expansive Client Base",
            content:
                "Our services extend beyond Maharashtra and Surat, making us a prominent player in the transportation of paper and related products. We serve the needs of paper mills across two major regions.",
        },
    ];

    const [visibleParagraph, setVisibleParagraph] = useState(null);

    const toggleContent = (index) => {
        if (index === visibleParagraph) {
            setVisibleParagraph(null);
        } else {
            setVisibleParagraph(index);
        }
    };

    return (
        <div className="whyUs">
            <div>
                <span>why choose us?</span>
                <div className="whyus-main">
                    {paragraphs.map((paragraph, index) => (
                        <div key={index}>
                            <span className="caret">
                                <u>{paragraph.title}</u>
                            </span>
                            <p>{paragraph.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
