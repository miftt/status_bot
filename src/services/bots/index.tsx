export const getData = async (url: string) => {
    const res = await fetch(url, {
      cache: "force-cache",
      next: {
        tags: ["bot","user"],
        // revalidate: 15,
      }
    });
//   const res = await fetch(url, {
//     cache: "force-cache",
//     next: {
//       tags: ["products"],
//       // revalidate: 15,
//     }
//  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}