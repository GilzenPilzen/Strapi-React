import MediaText from "@/blocks/MediaText";
import Text from "@/blocks/Text";

// 1️⃣ mapping: Strapi block‑ID → React‑component
const COMPONENTS = {
  "blocks.text": Text,
  "blocks.media-text": MediaText,
};

export default function Blocks ({ blocks = [] }) {
  if (!blocks.length) return null;

  return (
    <>
      {blocks.map((block) => {
        const BlockComponent = COMPONENTS[block.__component];

        // 2️⃣ bestaat type niet?
        if (!BlockComponent) {
          console.warn(`Onbekend blocktype: ${block.__component}`);
          return null; // of een <Fallback> component renderen
        }

        // 3️⃣ render correct component
        return <BlockComponent key={block.id} block={block} />;
      })}
    </>
  );
}
