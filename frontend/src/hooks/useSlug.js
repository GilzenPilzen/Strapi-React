function useSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .normalize("NFD") // haalt accenten weg
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
}

export default useSlug