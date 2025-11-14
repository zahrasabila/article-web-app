import { useState } from "react";
import {
  ArrowLeft,
  Share2,
  Bookmark,
  Heart,
  Clock,
  User,
  MapPin,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useArticleById } from "../hooks/useArticles";
import imgCover from "../assets/a-woman-sits-on-a-rocky-cliff.jpg";
import ArticleList from "../components/ArticleList";
// import CommentList from "../components/CommentList";
// import { CommentProvider } from "../context/CommentContext";

export default function ArticleDetail() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { documentId } = useParams();

  const { data: articleDetail } = useArticleById(documentId!);
  const navigate = useNavigate();
  // const comments = article?.attributes.comments?.data || [];

  if (!documentId) {
    navigate("/404");
    return null;
  }

  console.log(articleDetail);
  console.log({ documentId });
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark
                className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
              />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8 rounded-lg overflow-hidden h-96 bg-gradient-to-br from-blue-400 to-blue-600">
          <img src={imgCover} className="object-bottom" />
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Travel Guide</Badge>
            <Badge variant="secondary">Adventure</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exploring the Hidden Gems of Bali
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Sarah Anderson</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bali, Indonesia</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
              className={isLiked ? "bg-red-50 border-red-300" : ""}
            >
              <Heart
                className={`w-4 h-4 mr-2 ${
                  isLiked ? "fill-red-500 text-red-500" : ""
                }`}
              />
              {isLiked ? "1.2K" : "1.1K"} Likes
            </Button>
          </div>
        </div>

        <article className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-6">
            Discover the enchanting island of Bali beyond the typical tourist
            destinations. This comprehensive guide takes you through pristine
            beaches, ancient temples, and vibrant local markets that showcase
            the true spirit of Indonesian culture.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Getting There
          </h2>
          <p className="leading-relaxed mb-6">
            Bali's Ngurah Rai International Airport is well-connected to major
            cities worldwide. Direct flights are available from most Asian
            capitals, making it easily accessible for travelers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Must-Visit Locations
          </h2>
          <p className="leading-relaxed mb-6">
            From the rice terraces of Tegallalang to the spiritual Tanah Lot
            temple, Bali offers diverse attractions that cater to all types of
            travelers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Local Cuisine
          </h2>
          <p className="leading-relaxed mb-6">
            Don't miss traditional dishes like Gado-Gado, Soto Ayam, and fresh
            seafood at local warungs (small restaurants). The local coffee and
            tropical fruits are also exceptional.
          </p>
        </article>
      </main>
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          More Travel Articles
        </h3>
        <ArticleList />
      </div>
      {/* <CommentProvider comments={comments}>
      <CommentList />
</CommentProvider> */}
    </div>
  );
}
