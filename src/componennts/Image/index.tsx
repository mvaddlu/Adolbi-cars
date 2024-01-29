import React,{useState} from "react"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    placeholderImg?: string;
}
const Image = ({ placeholderImg, src, ...props }: ImageProps) => {
    const [imgSrc ] = useState(placeholderImg || src);
    return <img {...props} src={imgSrc} alt=""/>;
};
export default Image;