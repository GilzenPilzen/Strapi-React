import Image from "@/components/Image";
import RichText from "@/components/RichText";

export default function MediaText({block}) {

    return (
        <div className="blockMediaText">
            <RichText body={block.Body} />
            <Image size="medium" formats={block.Media[0].formats} />
        </div>
    )
}