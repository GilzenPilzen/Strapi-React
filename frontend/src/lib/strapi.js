// src/lib/strapi.js
const API = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchHomepage() {
  const res = await fetch(`${API}/api/home?populate[blocks][populate]=*`);
  const { data } = await res.json();

  if (!data) return null;

  return {
    id: data.id,
    ...data // géén .attributes
  };
}

export async function fetchProjects() {
  const res = await fetch(`${API}/api/projects?populate=*`);
  const { data } = await res.json();
  return data.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    description: item.description,
    thumbnail: item.thumbnail,
    image: item.image,
  }));
}

export async function fetchProjectSlugs() {
  const res = await fetch(`${API}/api/projects?fields=slug`);
  const { data } = await res.json();
  return data.map((item) => item.data.slug);
}

export async function fetchProjectBySlug(slug) {
  const res = await fetch(
    `${API}/api/projects?filters[slug][$eq]=${slug}&populate[blocks][populate]=*`
  );
  const { data } = await res.json();
  return {
    id: data[0].id,
    ...data[0].attributes,
  };
}

export async function fetchPages() {
    const res = await fetch(`${API}/api/paginas?populate=*`);
    const { data } = await res.json();
    return data.map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      description: item.description,
      thumbnail: item.thumbnail,
      image: item.image,
    }));
  }
  
  export async function fetchPageSlugs() {
    const res = await fetch(`${API}/api/paginas?fields=slug`);
    const { data } = await res.json();
    return data.map((item) => item.slug);
  }
  
  export async function fetchPageBySlug(slug) {
    const res = await fetch(
      `${API}/api/paginas?filters[slug][$eq]=${slug}&populate[blocks][populate]=*`
    );
    const { data } = await res.json();
  
    if (!data.length) return null;
  
    return {
      id: data[0].id,
      ...data[0], // géén .attributes
    };
  }


