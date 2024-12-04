export const blogInfo = {
  name: "DFP Footwear listing",
}

export type BlogPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  imageLink: string
  parsedDate?: Date // Optional because it's added dynamically
}

// Update this list with the actual blog post list
// Create a page in the "(posts)" directory for each entry
const blogPosts: BlogPost[] = [
  {
    title: "Loafers",
    description: "",
    link: "/dfp/1",
    date: "2022-03-10",
    imageLink: "https://marquinashoemaker.com/cdn/shop/products/burg-loafer-front_400x.jpg?v=1577814783",
  },
  {
    title: "Sneakers",
    description: "",
    link: "/dfp_1/1",
    date: "2022-2-23",
    imageLink: "https://www.samedelman.com/blob/product-images/99900/ec/02/00081/ec0200081_pair_feed1000.jpg",
  },
  {
    title: "Wellingtons",
    description: "",
    link: "/dfp_2/1",
    date: "2021-03-13",
    imageLink: "https://images.outdoorandcountry.co.uk/image/upload/e_trim:2/bo_8px_solid_white/c_pad,b_white,w_1000,h_1200,f_auto,q_auto/v1535405096/product/87561.jpg",
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
