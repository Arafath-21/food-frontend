import React from "react";

const blogData = [
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 1, 2020",
    views: "2.1K views",
    imgSrc: "https://plus.unsplash.com/premium_photo-1708110770188-3e4216b93119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Convenire"
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 2, 2020",
    views: "2.2K views",
    imgSrc: "https://plus.unsplash.com/premium_photo-1708276242787-387acf1bbd4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    category: "Convenire"
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 3, 2020",
    views: "2.3K views",
    imgSrc: "https://images.unsplash.com/photo-1508162245510-bf2772371e86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Convenire"
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 4, 2020",
    views: "2.4K views",
    imgSrc: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    category: "Convenire"
  },
];

const ResourcePage = () => {
  return (
    <section className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Resources
      </h1>

      <article className="py-6 sm:py-12">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
            <p className="text-sm mb-16">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogData.map((blog, index) => (
              <article key={index} className="flex flex-col border rounded-md mt-8">
                <a rel="noopener noreferrer" href="#" aria-label={blog.title}>
                  <img
                    alt={`Blog post titled ${blog.title}`}
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={blog.imgSrc}
                    style={{width:"100%", height:"350px"}}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                  >
                    {blog.category}
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {blog.title}
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>{blog.date}</span>
                    <span>{blog.views}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default ResourcePage;
