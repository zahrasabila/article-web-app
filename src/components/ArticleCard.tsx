// components/ArticleCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  // CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Badge } from "./ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import avatar from "../assets/avatar.jpg";
import { Link } from "react-router-dom";

const ArticleCard: React.FC = ({ article }: any) => {
  console.log(article?.documentId);

  return (
    <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border-border pt-0">
      <div className="relative overflow-hidden">
        {article?.cover_image_url ? (
          <img
            src={article?.cover_image_url}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="bg-gradient-to-br from-primary/20 to-primary/10 h-48 flex items-center justify-center">
            <div className="text-4xl font-bold text-primary/40">
              {article.title.charAt(0)}
            </div>
          </div>
        )}
        {article.category && (
          <Badge className="absolute top-3 left-3" variant="secondary">
            {article.category.name}
          </Badge>
        )}
      </div>

      <CardHeader className="flex-1 pb-3">
        <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors">
          {article.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm">
          {article.description?.slice(0, 100) + "..."}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{format(new Date(article.publishedAt), "MMM d, yyyy")}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={avatar} />
            <AvatarFallback>"Z"</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{"Zahra"}</span>
        </div>
        <Link to={`/articles/${article.documentId}`}>
          <Button size="sm" variant="ghost" className="gap-1">
            Read <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
