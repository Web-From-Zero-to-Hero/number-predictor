import html2canvas from "html2canvas";

const exportAsImage = async (element, imageFileName) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    return image;
};
    
export default exportAsImage;