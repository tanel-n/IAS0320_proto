export const blogInfo = {
  name: "SaaS Starter Blog",
  description: "A sample blog",
}

export type BlogPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  parsedDate?: Date // Optional because it's added dynamically
}

// Update this list with the actual blog post list
// Create a page in the "(posts)" directory for each entry
const blogPosts: BlogPost[] = [
  {
    title: "Product 1",
    description: "How to use this template you to bootstrap your own site.",
    link: "/dfp/1",
    date: "2024-03-10",
  },
  {
    title: "Product 2",
    description: "Even more example content!",
    link: "/dfp_1/1",
    date: "2023-9-23",
  },
  {
    title: "Product 3",
    description: "A sample blog post, showing our blog engine",
    link: "/dfp_2/1",
    date: "2022-03-13",
  },
]

// Parse post dates from strings to Date objects
for (const post of blogPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-")
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
    ) // Note: months are 0-based
  }
}

export const sortedBlogPosts = blogPosts.sort(
  (a: BlogPost, b: BlogPost) =>
    (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0),
)
