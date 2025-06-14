import { RESERVED_SLUGS } from "@/lib/reservedSlugs";
import { fetchPageBySlug, fetchPageSlugs } from "@/lib/strapi";

export async function getStaticPaths() {
    const slugs = await fetchPageSlugs();
    return {
      paths: slugs.map((slug) => ({ params: { slug } })),
      fallback: false, // of true/blocking als je veel content hebt
    };
  }
  
  export async function getStaticProps({ params }) {
    const page = await fetchPageBySlug(params.slug);
    return {
      props: { page },
      revalidate: 60,
    };
  }

export default function Page({page}) {
    return (
        <>
        <h1>{page.Title}</h1>
        </>
    )
}