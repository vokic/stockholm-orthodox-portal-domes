import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { Calendar as CalendarIcon, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { getBlogPosts, BlogPost } from "../data/blogData";
import { format } from "date-fns";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

const BlogPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const categories = ["all", "news", "events", "texts", "community", "history"];

  useEffect(() => {
    let mounted = true;
    getBlogPosts().then((data) => {
      if (mounted) {
        setPosts(data || []);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter(
          (post) =>
            post.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const getCategoryDisplayName = (category: string) => {
    switch (category?.toLowerCase()) {
      case "all":
        return "Све";
      case "news":
        return "Новости";
      case "events":
        return "Догађаји";
      case "texts":
        return "Текстови";
      case "community":
        return "Заједница";
      case "history":
        return "Историја";
      default:
        return (
          category?.charAt(0).toUpperCase() + category?.slice(1) || "Other"
        );
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "dd. MM. yyyy.");
    } catch {
      return dateString;
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t("nav.blog") || "Članci / Blog"}
            </h1>
            <p className="text-white">{t("articles.description")}</p>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="bg-orthodox-cream pt-6 md:pt-8">
          <div className="container-custom pb-2">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-orthodox-gold text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {getCategoryDisplayName(category)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <section className="section">
          <div className="container-custom">
            {loading ? (
              <div className="text-center py-10 text-gray-400">
                {t("loading") || "Loading articles..."}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.length === 0 ? (
                    <div className="col-span-full text-center text-gray-600">
                      {t("noArticles") || "No articles found."}
                    </div>
                  ) : (
                    currentPosts.map((post) => (
                      <div
                        key={post.id}
                        className={`card hover:shadow-lg transition-shadow${
                          post.pinned ? " bg-blue-100" : ""
                        }`}
                      >
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img
                            src={
                              post.imageUrl ||
                              "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
                            }
                            alt={post.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.log(
                                "Image failed to load:",
                                post.imageUrl
                              );
                              e.currentTarget.src =
                                "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop";
                            }}
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <CalendarIcon size={16} />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <h3 className="text-xl font-serif font-bold mb-2 text-orthodox-blue">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 italic">
                              {/* Аутор: {post.author} */}
                            </span>
                            <Link
                              to={`/articles/${post.slug}`}
                              className="text-orthodox-blue hover:text-orthodox-gold font-medium"
                            >
                              {t("home.readMore") || "Read More"} →
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={() =>
                              currentPage > 1 &&
                              handlePageChange(currentPage - 1)
                            }
                            className={
                              currentPage === 1
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            }
                          />
                        </PaginationItem>

                        {Array.from(
                          { length: totalPages },
                          (_, i) => i + 1
                        ).map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => handlePageChange(page)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                            onClick={() =>
                              currentPage < totalPages &&
                              handlePageChange(currentPage + 1)
                            }
                            className={
                              currentPage === totalPages
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
